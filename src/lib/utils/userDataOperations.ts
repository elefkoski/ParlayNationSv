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
import { betObjects } from './simulator/bet-objects';
import { directionOffsets } from './simulator/craps-simulator-bet-placement';

export async function loadSimulatorData(userId: string | null): Promise<void> {
	try {
		if (userId) {
			console.log('Loading data for logged-in user:', userId);

			// Fetch preferences and bets
			const tempPreferences = loadPreferencesFromLocalStorage();
			const userPreferences = (await fetchSimulatorPreferences(userId)) || tempPreferences;
			crapsSimulatorPreferences.set(userPreferences);

			const bets = await fetchPlayerBets(userId);
			playerBets.set(bets);

			console.log('Loaded data for logged-in user:', {
				preferences: userPreferences,
				playerBets: bets
			});
		} else {
			console.log('Loading data for non-logged-in user.');

			// Load preferences and bets from local storage
			const tempPreferences = loadPreferencesFromLocalStorage();
			crapsSimulatorPreferences.set(tempPreferences || defaultCrapsSimulatorPreferences);

			const bets = loadPlayerBetsFromLocalStorage();
			playerBets.set(bets);

			console.log('Loaded data for non-logged-in user:', {
				preferences: tempPreferences,
				playerBets: bets
			});
		}
	} catch (error) {
		console.error('Error during simulator data loading:', error);
	}
}
export async function fetchUserData(firebaseUser: any): Promise<void> {
	console.log('fetchUserData called.');
	try {
		if (!firebaseUser || !firebaseUser.uid) {
			throw new Error('No authenticated user found.');
		}

		const userId = firebaseUser.uid;

		// Set basic profile info
		user.set({
			id: userId,
			profile: {
				displayName: firebaseUser.displayName || '',
				email: firebaseUser.email || '',
				profilePicture: firebaseUser.photoURL || 'https://picsum.photos/100'
			}
		});

		// Fetch user-specific data
		const userDoc = doc(db, 'users', userId);
		const userData = await fetchDocument(userDoc);

		if (!userData) {
			throw new Error('User data not found.');
		}

		// Update preferences and other data
		userPreferences.set(userData.preferences || {});
		crapsSimulatorPreferences.set(userData.crapsSimulator || {});

		// Fetch other collections
		await Promise.all([
			fetchUserBookmarks(userId),
			fetchFavoriteBets(userId),
			fetchPlayerBets(userId)
		]);

		console.log('User data loaded successfully.');
	} catch (error) {
		console.error('Error fetching user data:', error);
	}
}
export async function loadNonUserData(): Promise<void> {
	try {
		console.log('loadNonUserData called.');

		// Retrieve preferences and bets
		const tempPreferences = loadPreferencesFromLocalStorage();
		const tempBets = loadPlayerBetsFromLocalStorage();

		// Update stores only if no existing data
		crapsSimulatorPreferences.update(
			(current) => current || tempPreferences || defaultCrapsSimulatorPreferences
		);
		playerBets.update((current) => current || tempBets || []);

		console.log('Non-user data loaded successfully.', {
			preferences: get(crapsSimulatorPreferences),
			playerBets: get(playerBets)
		});
	} catch (error) {
		console.error('Error during non-user data loading:', error);
	}
}

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
// Convert betId like "pass-line-5" to "passLine" or "horn-high-twelve-15" to "hornHighTwelve"
function formatBaseId(betId: string): string {
	if (!betId) return '';

	const parts = betId.split('-');
	// Remove the last part (assumed to be the amount) and convert to camelCase
	return parts
		.slice(0, -1) // Exclude the last segment
		.map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
		.join('');
}

// Fetch From Firebase
async function fetchPlayerBets(userId: string): Promise<void> {
	const bets = await fetchCollection<PlayerBet>(`users/${userId}/playerBets`);
	console.log('bets from fetchCollection:', bets);

	// Enrich player bets with data from betObjects
	const enrichedBets = bets.map((bet: Partial<PlayerBet>) => {
		console.log('Enriched bets in map function:', bet);
		console.log('bet.betId:', bet.betId);

		// Format the baseId from betId
		const baseId = bet.betId ? formatBaseId(bet.betId) : undefined;
		console.log('Formatted baseId:', baseId);

		// Find the matching betObject
		const betObject = betObjects[baseId as keyof typeof betObjects];
		console.log('betObject:', betObject);

		if (betObject) {
			// Enrich the bet with additional data from betObjects
			return {
				...bet, // Overwrite with data from the saved bet
				isWorking: bet.isWorking ?? true, // Default to true if not provided
				isLockedIn: bet.isLockedIn ?? false, // Default to false if not provided
				baseX: bet.baseX ?? betObject.betCoordinates.baseX,
				baseY: bet.baseY ?? betObject.betCoordinates.baseY,
				direction: bet.direction ?? (betObject.chipDirection as keyof typeof directionOffsets)
			} as PlayerBet;
		}

		// If no matching betObject, return the bet as-is
		console.warn(`No matching betObject for baseId: ${baseId}. Loading bet without enrichment.`);
		return bet as PlayerBet;
	});

	playerBets.set(enrichedBets);
	console.log('Player bets fetched and enriched from Firebase:', enrichedBets);
}

async function fetchFavoriteBets(userId: string): Promise<void> {
	const bets = await fetchCollection<FavoriteBet>(`users/${userId}/favoriteBets`);
	favoriteBets.set(bets);
	console.log('Favorite bets fetched from Firebase:', bets);
}
async function fetchUserBookmarks(userId: string): Promise<void> {
	const bookmarks = await fetchCollection<Bookmark>(`users/${userId}/bookmarks`);
	bookmarkedPages.set(bookmarks);
	console.log('Fetched bookmarks:', bookmarks);
}
async function fetchSimulatorPreferences(userId: string) {
	const userDoc = doc(db, 'users', userId);
	const data = await fetchDocument(userDoc);
	return data?.crapsSimulator || null;
}
export const fetchBookmarkId = async (userId: string, pageUrl: string): Promise<string | null> => {
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
	return null;
};
// Save To Firebase
export async function savePreferencesToFirebase(userId: string, prefs: CrapsSimulatorPreferences) {
	const userDoc = doc(db, 'users', userId);
	try {
		await updateDoc(userDoc, { crapsSimulator: prefs });
		console.log('Preferences saved to Firebase:', prefs);
	} catch (error) {
		console.error('Error saving preferences to Firebase:', error);
	}
}
export async function savePlayerBetsToFirebase(userId: string, bets: PlayerBet[]) {
	try {
		const betsCollection = collection(db, `users/${userId}/playerBets`);
		await Promise.all(
			bets.map((bet) =>
				setDoc(doc(betsCollection, bet.betId), {
					betId: bet.betId,
					type: bet.type,
					amount: bet.amount,
					isWorking: bet.isWorking,
					isLockedIn: bet.isLockedIn,
					baseX: bet.baseX,
					baseY: bet.baseY,
					direction: bet.direction as keyof typeof directionOffsets
				})
			)
		);
		console.log('Player bets saved to Firebase:', bets);
	} catch (error) {
		console.error('Error saving player bets to Firebase:', error);
	}
}
export async function clearPlayerBetsFromFirebase(userId: string): Promise<void> {
	try {
		const betsCollection = collection(db, `users/${userId}/playerBets`);
		const querySnapshot = await getDocs(betsCollection);

		// Delete all documents in the collection
		const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
		await Promise.all(deletePromises);

		// Clear local state
		playerBets.set([]);
		console.log('Player bets cleared from Firebase and local state.');
	} catch (error) {
		console.error('Error clearing player bets from Firebase:', error);
		// Still clear the local state even if Firebase deletion fails
		playerBets.set([]);
	}
}
// Save To Local Storage
export function savePreferencesToLocalStorage(prefs: any): void {
	if (typeof window !== 'undefined' && localStorage) {
		const existingPrefs = JSON.parse(localStorage.getItem('crapsSimulatorPreferences') || 'null');
		if (JSON.stringify(existingPrefs) !== JSON.stringify(prefs)) {
			localStorage.setItem('crapsSimulatorPreferences', JSON.stringify(prefs));
			console.log('Preferences saved to localStorage via savePreferencesToLocalStorage:', prefs);
		}
	}
}
export function savePlayerBetsToLocalStorage(bets: PlayerBet[]): void {
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
}

// Load From Local Storage
export function loadPreferencesFromLocalStorage(): CrapsSimulatorPreferences | null {
	if (typeof window !== 'undefined' && localStorage) {
		const prefs = localStorage.getItem('crapsSimulatorPreferences');
		console.log('loadPreferencesFromLocalStorage called:', prefs);
		return prefs ? JSON.parse(prefs) : null;
	} else {
		console.warn('localStorage is not available. Preferences not loaded.');
		return null;
	}
}
export function loadPlayerBetsFromLocalStorage(): PlayerBet[] {
	if (typeof window === 'undefined' || !localStorage) {
		console.warn('localStorage is not available. Player bets not loaded.');
		return [];
	}

	const bets = localStorage.getItem('playerBets');
	if (!bets) {
		console.log('No player bets found in localStorage.');
		return [];
	}

	try {
		const parsedBets = JSON.parse(bets);

		// Enrich player bets with data from betObjects
		const enrichedBets = parsedBets.map((bet: Partial<PlayerBet>) => {
			// Extract the baseId (e.g., "pass-line") from the generated betId
			const baseId = bet.betId?.split('-')[0];
			const betObject = betObjects[baseId as keyof typeof betObjects];

			if (betObject) {
				// Enrich the bet with additional data from betObjects
				return {
					...bet, // Overwrite with data from the saved bet
					isWorking: bet.isWorking ?? betObject.isWorking,
					isLockedIn: bet.isLockedIn ?? betObject.isLockedIn,
					baseX: bet.baseX ?? betObject.betCoordinates.baseX,
					baseY: bet.baseY ?? betObject.betCoordinates.baseY,
					direction: bet.direction ?? (betObject.chipDirection as keyof typeof directionOffsets)
				} as PlayerBet;
			}

			// If no matching betObject, return the bet as-is
			console.warn(`No matching betObject for baseId: ${baseId}. Loading bet without enrichment.`);
			return bet as PlayerBet;
		});

		console.log('Loaded and enriched player bets:', enrichedBets);
		return enrichedBets;
	} catch (error) {
		console.error('Error parsing player bets from localStorage:', error);
		return [];
	}
}
export function clearPlayerBetsFromLocalStorage(): void {
	if (typeof window === 'undefined' || !localStorage) {
		console.warn('localStorage is not available. Player bets not cleared.');
		return;
	}

	try {
		localStorage.removeItem('playerBets');
		console.log('Player bets cleared from localStorage.');
	} catch (error) {
		console.error('Error clearing player bets from localStorage:', error);
	}
}

// Bookmarks
export async function toggleBookmark(
	userId: string,
	pageData: any,
	isBookmarked: boolean,
	currentBookmarkId: string | null
): Promise<string | null> {
	if (isBookmarked && currentBookmarkId) {
		// Remove bookmark
		await removeBookmark(userId, currentBookmarkId);
		bookmarkedPages.update((pages) =>
			pages.filter((page) => page.bookmarkId !== currentBookmarkId)
		);
		return null; // No bookmarkId after removal
	} else {
		// Add bookmark
		const bookmarkId = await saveBookmark(userId, pageData);
		if (bookmarkId) {
			bookmarkedPages.update((pages) => [...pages, { bookmarkId, ...pageData }]);
		}
		return bookmarkId;
	}
}
const saveBookmark = async (userId: string, pageData: any): Promise<string | null> => {
	console.log('userId:', userId);
	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		console.log('bookmarksCollection:', bookmarksCollection);
		const docRef = await addDoc(bookmarksCollection, pageData);
		console.log('Successfully saved bookmark:', docRef.id);
		return docRef.id;
	} catch (e) {
		console.error('Error saving bookmark:', e);
		return null;
	}
};
const removeBookmark = async (userId: string, bookmarkId: string) => {
	try {
		const bookmarkRef = doc(db, `users/${userId}/bookmarks/${bookmarkId}`);
		await deleteDoc(bookmarkRef);
		console.log(`Successfully removed bookmarkId ${bookmarkId}.`);
		bookmarkedPages.update((pages) => pages.filter((b) => b.bookmarkId !== bookmarkId));
	} catch (e) {
		console.error('Error removing bookmark:', e);
	}
};
// Delete a specific bookmark from the bookmark list on the PROFILE PAGE
export const deleteUserBookmark = async (userId: string, bookmarkId: string): Promise<void> => {
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
};

// Favorite Bets
export async function toggleFavoriteBet(
	betType: string,
	betAmount: number,
	isFavorite?: boolean
): Promise<boolean> {
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
			return false; // Updated state: not a favorite
		} else {
			// Add favorite
			const betDetails = { type: betType, amount: betAmount };
			await saveFavoriteBet(currentUser.id, { betId, betDetails });
			favoriteBets.update((bets) => [...bets, { betId, betDetails }]);
			console.log(`Added bet to favorites: ${betId}`);
			return true; // Updated state: favorite
		}
	} catch (error) {
		console.error('Error toggling favorite bet:', error);
		throw error;
	}
}
export async function saveFavoriteBet(userId: string, favoriteBet: FavoriteBet) {
	try {
		const docRef = doc(collection(db, `users/${userId}/favoriteBets`), favoriteBet.betId);
		await setDoc(docRef, favoriteBet);
		console.log('Favorite bet saved:', favoriteBet);
		favoriteBets.update((current) => [...current, favoriteBet]);
	} catch (error) {
		console.error('Error saving favorite bet:', error);
	}
}
export async function removeFavoriteBet(userId: string, betId: string) {
	try {
		const docRef = doc(db, `users/${userId}/favoriteBets/${betId}`);
		await deleteDoc(docRef);
		console.log('Favorite bet removed:', betId);
		favoriteBets.update((current) => current.filter((bet) => bet.betId !== betId));
	} catch (error) {
		console.error('Error removing favorite bet:', error);
	}
}

console.log('Exiting userDataOperations.ts');
