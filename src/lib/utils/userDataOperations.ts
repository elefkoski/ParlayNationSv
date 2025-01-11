console.log('Entering userDataOperations.ts');

import { db } from './firebase';
import {
	doc,
	getDoc,
	updateDoc,
	collection,
	getDocs,
	setDoc,
	deleteDoc,
	addDoc,
	where,
	query as firestoreQuery
} from 'firebase/firestore';
import {
	user,
	userPreferences,
	bookmarkedPages,
	favoriteBets,
	playerBets,
	crapsSimulatorPreferences,
	defaultCrapsSimulatorPreferences,
	generateBetId
} from './userData';
import type { Bookmark, CrapsSimulatorPreferences, FavoriteBet, PlayerBet } from './userData';
import { get } from 'svelte/store';
import { isLoggingOut, isInitializing, hasInitialized } from './auth';

// Data Loading
export async function fetchUserData(firebaseUser: any): Promise<void> {
	console.log('fetchUserData called.');

	hasInitialized.set(false);
	isInitializing.set(true);
	try {
		if (!firebaseUser || !firebaseUser.uid) {
			throw new Error('No authenticated user found.');
		}

		const userId = firebaseUser.uid;

		user.set({
			id: userId,
			profile: {
				displayName: firebaseUser.displayName || '',
				email: firebaseUser.email || '',
				profilePicture: firebaseUser.photoURL || 'https://picsum.photos/100'
			}
		});

		await Promise.all([
			fetchCrSimPrefs(userId),
			fetchUserBookmarks(userId),
			fetchFavoriteBets(userId),
			fetchPlayerBets(userId)
		]);

		console.log('User data loaded successfully.');
	} catch (error) {
		console.error('Error fetching user data:', error);
	} finally {
		isInitializing.set(false);
		hasInitialized.set(true);
	}

	console.log('Exiting fetchUserData.');
}
export async function loadNonUserData(): Promise<void> {
	console.log('loadNonUserData called.');

	isInitializing.set(true);
	hasInitialized.set(false);

	try {
		console.log('No user detected. Loading local data...');
		const localBets = loadPlayerBetsFromLocalStorage();
		const localPreferences = loadCrSimPrefsFromLocalStorage();

		playerBets.set(localBets || []);
		crapsSimulatorPreferences.set(localPreferences || defaultCrapsSimulatorPreferences);
	} catch (error) {
		console.error('Error during data initialization:', error);
	} finally {
		isInitializing.set(false);
		hasInitialized.set(true);
		console.log('Data Initialization Complete.');
	}
}

// Favorite Bets
export async function toggleFavoriteBet(
	betType: string,
	betAmount: number,
	isFavorite?: boolean
): Promise<boolean> {
	console.log('toggleFavoriteBet called.');

	const currentUser = get(user);
	if (!currentUser?.id) {
		throw new Error('User is not logged in.');
	}

	const betId = generateBetId(betType, betAmount);

	// If `isFavorite` is explicitly provided, use it; otherwise, infer from current state
	const currentFavoriteState =
		isFavorite !== undefined ? isFavorite : get(favoriteBets).some((bet) => bet.betId === betId);

	try {
		if (currentFavoriteState) {
			// Remove favorite
			await removeFavoriteBet(currentUser.id, betId);
			favoriteBets.update((bets) => bets.filter((bet) => bet.betId !== betId));
			console.log(`Removed bet from favorites: ${betId}`);
			console.log('Exiting toggleFavoriteBet.');
			return false; // Updated state: not a favorite
		} else {
			// Add favorite
			const betDetails = { type: betType, amount: betAmount };
			await saveFavoriteBet(currentUser.id, { betId, betDetails });
			favoriteBets.update((bets) => [...bets, { betId, betDetails }]);
			console.log(`Added bet to favorites: ${betId}`);
			console.log('Exiting toggleFavoriteBet.');
			return true; // Updated state: favorite
		}
	} catch (error) {
		console.error('Error toggling favorite bet:', error);
		throw error;
	}
}
export async function saveFavoriteBet(userId: string, favoriteBet: FavoriteBet) {
	console.log('saveFavoriteBet called.');

	try {
		const docRef = doc(collection(db, `users/${userId}/favoriteBets`), favoriteBet.betId);
		await setDoc(docRef, favoriteBet);
		console.log('Favorite bet saved:', favoriteBet);
		favoriteBets.update((current) => [...current, favoriteBet]);
	} catch (error) {
		console.error('Error saving favorite bet:', error);
	}

	console.log('Exiting saveFavoriteBet.');
}
export async function removeFavoriteBet(userId: string, betId: string) {
	console.log('removeFavoriteBet called.');

	try {
		const docRef = doc(db, `users/${userId}/favoriteBets/${betId}`);
		await deleteDoc(docRef);
		console.log('Favorite bet removed:', betId);
		favoriteBets.update((current) => current.filter((bet) => bet.betId !== betId));
	} catch (error) {
		console.error('Error removing favorite bet:', error);
	}

	console.log('Exiting removeFavoriteBet.');
}
async function fetchFavoriteBets(userId: string): Promise<void> {
	console.log('fetchFavoriteBets called.');

	const bets = await fetchCollection<FavoriteBet>(`users/${userId}/favoriteBets`);
	favoriteBets.set(bets);
	console.log('Favorite bets fetched from Firebase:', bets);

	console.log('Exiting fetchFavoriteBets.');
}

// Craps Simulator Preferences
export async function syncCrSimPrefsToFirebase(userId: string, prefs: CrapsSimulatorPreferences) {
	console.log('Syncing Preferences to Firebase...');
	await saveCrSimPrefsToFirebase(userId, prefs);
	console.log('Preferences synced to Firebase.');
}
export function syncCrSimPrefsToLocalStorage(prefs: CrapsSimulatorPreferences) {
	console.log('Syncing Preferences to LocalStorage...');
	saveCrSimPrefsToLocalStorage(prefs);
	console.log('Preferences synced to LocalStorage.');
}
export async function saveCrSimPrefsToFirebase(userId: string, prefs: CrapsSimulatorPreferences) {
	console.log('saveCrSimPrefsToFirebase called.');

	const userDoc = doc(db, 'users', userId);
	try {
		await updateDoc(userDoc, { crapsSimulator: prefs });
		console.log('Preferences saved to Firebase:', prefs);
	} catch (error) {
		console.error('Error saving preferences to Firebase:', error);
	}

	console.log('Exiting saveCrSimPrefsToFirebase.');
}
export function saveCrSimPrefsToLocalStorage(prefs: any): void {
	console.log('saveCrSimPrefsToLocalStorage called.');

	if (typeof window !== 'undefined' && localStorage) {
		const existingPrefs = JSON.parse(localStorage.getItem('crapsSimulatorPreferences') || 'null');
		if (JSON.stringify(existingPrefs) !== JSON.stringify(prefs)) {
			localStorage.setItem('crapsSimulatorPreferences', JSON.stringify(prefs));
			console.log('Preferences saved to localStorage via saveCrSimPrefsToLocalStorage:', prefs);
		}
	}

	console.log('Exiting saveCrSimPrefsToLocalStorage.');
}
export async function fetchCrSimPrefs(userId: string): Promise<void> {
	console.log('fetchCrSimPrefs called.');

	if (get(isLoggingOut)) {
		console.log('Skipping fetchCrSimPrefs: logging out.');
		return Promise.resolve();
	}

	const userDoc = doc(db, 'users', userId);
	return fetchDocument(userDoc).then((data) => {
		if (data?.crapsSimulator) {
			console.log('Craps Simulator Preferences fetched from Firebase:', data.crapsSimulator);
			crapsSimulatorPreferences.set(data.crapsSimulator);
		} else {
			console.log('No preferences found in Firestore. Using default.');
			crapsSimulatorPreferences.set(defaultCrapsSimulatorPreferences);
		}
	});
}
export function loadCrSimPrefsFromLocalStorage(): CrapsSimulatorPreferences | null {
	console.log('loadCrSimPrefsFromLocalStorage called.');

	if (typeof window !== 'undefined' && localStorage) {
		const prefs = localStorage.getItem('crapsSimulatorPreferences');
		console.log('Preferences loading from localStorage:', prefs);
		console.log('Exiting loadCrSimPrefsFromLocalStorage.');
		return prefs ? JSON.parse(prefs) : null;
	} else {
		console.warn('localStorage is not available. Preferences not loaded.');
		console.log('Exiting loadCrSimPrefsFromLocalStorage.');
		return null;
	}
}

// Player Bets
export async function syncPlayerBetsToFirebase(userId: string, bets: PlayerBet[]) {
	console.log('Syncing Player Bets to Firebase...');
	await savePlayerBetsToFirebase(userId, bets);
	console.log('Player Bets synced to Firebase.');
}
export async function savePlayerBetsToFirebase(userId: string, bets: PlayerBet[]) {
	console.log('savePlayerBetsToFirebase called.');

	try {
		const betsCollection = collection(db, `users/${userId}/playerBets`);

		// Overwrite the entire collection with the current state
		const savePromises = bets.map((bet) => setDoc(doc(betsCollection, bet.id), bet));
		await Promise.all(savePromises);
		console.log('Player bets saved to Firebase:', bets);
	} catch (error) {
		console.error('Error saving player bets to Firebase:', error);
	}

	console.log('Exiting savePlayerBetsToFirebase.');
}
export async function fetchPlayerBets(userId: string): Promise<void> {
	console.log('fetchPlayerBets called.');

	if (get(isLoggingOut)) {
		console.log('Skipping fetchPlayerBets: logging out.');
		return;
	}

	try {
		const betsCollection = collection(db, `users/${userId}/playerBets`);
		const querySnapshot = await getDocs(betsCollection);
		const bets = querySnapshot.docs.map((doc) => doc.data() as PlayerBet);
		console.log('Player bets fetched from Firebase:', bets);
		if (!get(isLoggingOut)) {
			playerBets.set(bets);
		}
	} catch (error) {
		console.error('Error fetching player bets from Firebase:', error);
		if (!get(isLoggingOut)) {
			playerBets.set([]);
		}
	}

	console.log('Exiting fetchPlayerBets.');
}
export async function clearPlayerBetsFromFirebase(userId: string): Promise<void> {
	console.log('clearPlayerBetsFromFirebase called.');

	try {
		const betsCollection = collection(db, `users/${userId}/playerBets`);
		console.log('betsCollection path:', betsCollection.path);
		const querySnapshot = await getDocs(betsCollection);
		console.log('querySnapshot size:', querySnapshot.size);

		if (querySnapshot.empty) {
			console.log('No player bets found in Firestore.');
		} else {
			const deletePromises = querySnapshot.docs.map((doc) => {
				console.log('Deleting document with ID:', doc.id);
				return deleteDoc(doc.ref);
			});
			console.log('Number of deletePromises:', deletePromises.length);
			await Promise.all(deletePromises);
		}
	} catch (error) {
		console.error('Error clearing player bets from Firebase:', error);
	}
}

export function syncPlayerBetsToLocalStorage(bets: PlayerBet[]) {
	console.log('Syncing Player Bets to LocalStorage...');
	savePlayerBetsToLocalStorage(bets);
	console.log('Player Bets synced to LocalStorage.');
}
export function savePlayerBetsToLocalStorage(bets: PlayerBet[]): void {
	console.log('savePlayerBetsToLocalStorage called.');

	if (typeof window === 'undefined' || !localStorage) {
		console.warn('localStorage is not available. Player bets not saved.');
		return;
	}

	try {
		const existingBets = JSON.parse(localStorage.getItem('playerBets') || '[]');

		// Use deep comparison to avoid unnecessary writes
		if (JSON.stringify(existingBets) !== JSON.stringify(bets)) {
			localStorage.setItem('playerBets', JSON.stringify(bets));
			console.log('Player bets saved to localStorage:', bets);
		} else {
			console.log('No changes detected in player bets. Skipping save.');
		}
	} catch (error) {
		console.error('Error saving player bets to localStorage:', error);
	}

	console.log('Exiting savePlayerBetsToLocalStorage.');
}
export function loadPlayerBetsFromLocalStorage(): PlayerBet[] {
	console.log('loadPlayerBetsFromLocalStorage called.');

	if (typeof window === 'undefined' || !localStorage) {
		console.warn('localStorage is not available. Player bets not loaded.');
		console.log('Exiting loadPlayerBetsFromLocalStorage.');
		return [];
	}

	const bets = localStorage.getItem('playerBets');
	if (!bets) {
		console.log('No player bets found in localStorage.');
		console.log('Exiting loadPlayerBetsFromLocalStorage.');
		return [];
	}

	try {
		const parsedBets = JSON.parse(bets) as PlayerBet[];
		console.log('Loaded player bets from local storage:', parsedBets);
		console.log('Exiting loadPlayerBetsFromLocalStorage.');
		return parsedBets;
	} catch (error) {
		console.error('Error parsing player bets from localStorage:', error);
		console.log('Exiting loadPlayerBetsFromLocalStorage.');
		return [];
	}
}
export function clearPlayerBetsFromLocalStorage(): void {
	console.log('clearPlayerBetsFromLocalStorage called.');

	if (typeof window === 'undefined' || !localStorage) {
		console.warn('localStorage is not available. Player bets not cleared.');
		return;
	}

	try {
		localStorage.removeItem('playerBets');
		playerBets.set([]);
		console.log('Player bets cleared from localStorage.');
	} catch (error) {
		console.error('Error clearing player bets from localStorage:', error);
	}

	console.log('Exiting clearPlayerBetsFromLocalStorage.');
}

// Bookmarks
export async function toggleBookmark(
	userId: string,
	pageData: any,
	isBookmarked: boolean,
	currentBookmarkId: string | null
): Promise<string | null> {
	console.log('toggleBookmark called.');

	if (isBookmarked && currentBookmarkId) {
		// Remove bookmark
		await removeBookmark(userId, currentBookmarkId);
		bookmarkedPages.update((pages) =>
			pages.filter((page) => page.bookmarkId !== currentBookmarkId)
		);
		console.log('Bookmark removed.', currentBookmarkId);
		console.log('Exiting toggleBookmark.');
		return null; // No bookmarkId after removal
	} else {
		// Add bookmark
		const bookmarkId = await saveBookmark(userId, pageData);
		if (bookmarkId) {
			bookmarkedPages.update((pages) => [...pages, { bookmarkId, ...pageData }]);
		}
		console.log('Bookmark added:', bookmarkId);
		console.log('Exiting toggleBookmark.');
		return bookmarkId;
	}
}
const saveBookmark = async (userId: string, pageData: any): Promise<string | null> => {
	console.log('saveBookmark called.');

	console.log('userId:', userId);
	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		console.log('bookmarksCollection:', bookmarksCollection);
		const docRef = await addDoc(bookmarksCollection, pageData);
		console.log('Successfully saved bookmark:', docRef.id);
		console.log('Exiting saveBookmark.');
		return docRef.id;
	} catch (e) {
		console.error('Error saving bookmark:', e);
		console.log('Exiting saveBookmark.');
		return null;
	}
};
const removeBookmark = async (userId: string, bookmarkId: string) => {
	console.log('removeBookmark called.');

	try {
		const bookmarkRef = doc(db, `users/${userId}/bookmarks/${bookmarkId}`);
		await deleteDoc(bookmarkRef);
		console.log(`Successfully removed bookmarkId ${bookmarkId}.`);
		bookmarkedPages.update((pages) => pages.filter((b) => b.bookmarkId !== bookmarkId));
	} catch (e) {
		console.error('Error removing bookmark:', e);
	}

	console.log('Exiting removeBookmark.');
};
export async function fetchUserBookmarks(userId: string): Promise<void> {
	console.log('fetchUserBookmarks called.');

	const bookmarks = await fetchCollection<Bookmark>(`users/${userId}/bookmarks`);
	bookmarkedPages.set(bookmarks);
	console.log('Fetched bookmarks:', bookmarks);

	console.log('Exiting fetchUserBookmarks.');
}
export const fetchBookmarkId = async (userId: string, pageUrl: string): Promise<string | null> => {
	console.log('fetchBookmarkId called.');

	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		const querySnapshot = await getDocs(
			firestoreQuery(bookmarksCollection, where('pageUrl', '==', pageUrl))
		);
		if (!querySnapshot.empty) {
			return querySnapshot.docs[0].id;
		}
	} catch (e) {
		console.error('Error fetching bookmark ID:', e);
	}

	console.log('Exiting fetchBookmarkId.');
	return null;
};
// Delete a specific bookmark from the bookmark list on the PROFILE PAGE
export const deleteUserBookmark = async (userId: string, bookmarkId: string): Promise<void> => {
	console.log('deleteUserBookmark called.');

	try {
		const bookmarkRef = doc(db, `users/${userId}/bookmarks`, bookmarkId);
		await deleteDoc(bookmarkRef);

		// Update the store to reflect the deletion
		bookmarkedPages.update((current) => current.filter((b) => b.bookmarkId !== bookmarkId));
		console.log(`Deleted bookmark: ${bookmarkId}`);
	} catch (error) {
		console.error('Error deleting bookmark:', error);
		throw error;
	}

	console.log('Exiting deleteUserBookmark.');
};

// Helper functions
async function fetchCollection<T>(collectionPath: string): Promise<T[]> {
	try {
		const collectionRef = collection(db, collectionPath);
		const querySnapshot = await getDocs(collectionRef);
		return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
	} catch (error) {
		console.error(`Error fetching collection at ${collectionPath}:`, error);
		return [];
	}
}
async function fetchDocument(docRef: any): Promise<any | null> {
	try {
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			console.warn('Document does not exist:', docRef.id);
			return null;
		}
	} catch (error) {
		console.error('Error fetching document:', error);
		return null;
	}
}

console.log('Exiting userDataOperations.ts');
