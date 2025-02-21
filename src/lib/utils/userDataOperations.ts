console.log('Entering userDataOperations.ts');

import { db } from './firebase';
import { doc, getDoc, updateDoc, collection, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { user, savedBookmarks, crSimPrefs, playerBets, favoriteBets } from './userData';
import type { CrapsSimulatorPreference, FavoriteBet, PlayerBet, Bookmark } from './userData';
import { get } from 'svelte/store';

// Fetch User Data
export async function fetchUserData(firebaseUser: any): Promise<void> {
	console.log('fetchUserData called.');

	// Ensure the user has an authenticated session
	if (!firebaseUser || !firebaseUser.uid) {
		throw new Error('No authenticated user found.');
	}

	const userId = firebaseUser.uid;
	console.log('fetchUserData userId:', userId);

	// Fetch and cache user data
	await Promise.all([
		fetchUserBookmarks(userId),
		fetchCrSimPrefs(userId),
		fetchFavoriteBets(userId),
		fetchPlayerBets(userId)
	]);

	user.set({
		id: firebaseUser.uid,
		email: firebaseUser.email || '',
		displayName: firebaseUser.displayName || 'Anonymous',
		photoURL: firebaseUser.photoURL || 'https://picsum.photos/100'
	});

	console.log('fetchUserData user:', user);
	const currentUser = get(user);
	console.log('User id:', currentUser?.id);
	console.log('User email:', currentUser?.email);
	console.log('User displayName:', currentUser?.displayName);
	console.log('User profilePicture:', currentUser?.photoURL);

	console.log('Exiting fetchUserData.');
}
export async function fetchUserBookmarks(userId: string): Promise<void> {
	try {
		const bookmarks = await fetchCollection<Bookmark>(`users/${userId}/savedBookmarks`);
		setUserDataToLocalStorage('savedBookmarks', bookmarks);
		savedBookmarks.set(bookmarks);
	} catch (error) {
		console.error('Error fetching bookmarks:', error);
		savedBookmarks.set([]);
	}
}
async function fetchCrSimPrefs(userId: string): Promise<void> {
	try {
		const prefs = await fetchDocument(doc(db, `users/${userId}`));
		if (prefs?.crapsSimulator) {
			crSimPrefs.set(prefs.crapsSimulator);
			setUserDataToLocalStorage('crSimPrefs', prefs.crapsSimulator);
		}
	} catch (error) {
		console.error('Error fetching preferences:', error);
		crSimPrefs.set({} as CrapsSimulatorPreference);
	}
}
async function fetchFavoriteBets(userId: string): Promise<void> {
	try {
		const bets = await fetchCollection<FavoriteBet>(`users/${userId}/favoriteBets`);
		favoriteBets.set(bets);
	} catch (error) {
		console.error('Error fetching favorite bets:', error);
		favoriteBets.set([]);
	}
}
async function fetchPlayerBets(userId: string): Promise<void> {
	try {
		const bets = await fetchCollection<PlayerBet>(`users/${userId}/playerBets`);
		playerBets.set(bets);
	} catch (error) {
		console.error('Error fetching player bets:', error);
		playerBets.set([]);
	}
}

// Sync to Local
export async function syncUserBookmarksToLocal(): Promise<void> {
	console.log('Syncing bookmarks to LocalStorage...');
	const bookmarks = get(savedBookmarks);
	setUserDataToLocalStorage('savedBookmarks', bookmarks);
	console.log('Bookmarks synced to LocalStorage successfully.');
}
export async function syncCrSimPrefsToLocal(): Promise<void> {
	console.log('Syncing preferences to LocalStorage...');
	const prefs = get(crSimPrefs);
	setUserDataToLocalStorage('crSimPrefs', prefs);
	console.log('Preferences synced to LocalStorage successfully.');
}
export async function syncPlayerBetsToLocal(): Promise<void> {
	console.log('Syncing player bets to LocalStorage...');
	const bets = get(playerBets);
	setUserDataToLocalStorage('playerBets', bets);
	console.log('Player bets synced to LocalStorage successfully.');
}
export async function syncFavoriteBetsToLocal(): Promise<void> {
	console.log('syncFavoriteBetsToLocal called.');
	console.log('Syncing favorite bets to LocalStorage...');
	const bets = get(favoriteBets);
	setUserDataToLocalStorage('favoriteBets', bets);
	console.log(
		'Favorite bets synced to LocalStorage successfully. Exiting syncFavoriteBetsToLocal.'
	);
}

// Sync to Firebase
export async function syncLocalToFirebase(): Promise<void> {
	const currentUser = get(user);
	if (!currentUser || currentUser.id === 'guest') {
		console.log('No user logged in. Skipping sync.');
		return;
	}

	console.log('Syncing local data to Firebase...');
	try {
		const userId = currentUser.id;

		const bookmarks = getUserDataFromLocal<Bookmark[]>('savedBookmarks');
		if (bookmarks) {
			await Promise.all(
				bookmarks.map((bookmark) =>
					setDoc(doc(db, `users/${userId}/savedBookmarks/${bookmark.id}`), bookmark)
				)
			);
		}

		const bets = getUserDataFromLocal<PlayerBet[]>('playerBets');
		if (bets) {
			await Promise.all(
				bets.map((bet) => setDoc(doc(db, `users/${userId}/playerBets/${bet.id}`), bet))
			);
		}

		const prefs = getUserDataFromLocal<CrapsSimulatorPreference>('crSimPrefs');
		if (prefs) {
			await updateDoc(doc(db, `users/${userId}`), { crapsSimulator: prefs });
		}

		console.log('Local data synced to Firebase successfully.');
	} catch (error) {
		console.error('Error syncing local data to Firebase:', error);
	}
}

// Generate ID's
function generateBookmarkId(input: string): string {
	return input
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
		.replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
		.slice(0, 50); // Limit to 50 characters for brevity
}
export function generatePlayerBetId(betId: string, amount: number | string): string {
	// Convert the betId to kebab-case (e.g., 'passLine' -> 'pass-line')
	const formattedBetId = betId
		.replace(/([a-z])([A-Z])/g, '$1-$2') // Add a hyphen between lowercase and uppercase letters
		.toLowerCase();

	// Combine the formatted ID with the amount
	return `${formattedBetId}-${amount}`;
}

// -----> Saved Bookmarks <----- //
export function isPageBookmarked(pageUrl: string): boolean {
	if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
		return false;
	}

	const cachedBookmarks = JSON.parse(localStorage.getItem('savedBookmarks') || '[]');
	return cachedBookmarks.some((savedBookmark: any) => savedBookmark.pageUrl === pageUrl);
}
export async function toggleBookmarkHandler(pageData: {
	pageUrl: string;
	title: string;
	description?: string; // Optional fields
	imageUrl?: string; // Optional fields
}): Promise<boolean> {
	try {
		const cachedBookmarks = getUserDataFromLocal<Bookmark[]>('savedBookmarks');
		let isBookmarked = false;

		// Check for existing bookmark
		const existingBookmark = cachedBookmarks?.find(
			(savedBookmark: any) => savedBookmark.pageUrl === pageData.pageUrl
		);

		if (existingBookmark) {
			// Remove bookmark
			const updatedBookmarks = (cachedBookmarks || []).filter(
				(savedBookmark: any) => savedBookmark.pageUrl !== pageData.pageUrl
			);
			setUserDataToLocalStorage('savedBookmarks', updatedBookmarks);
			//updateSavedBookmarkQueue('remove', pageData);
		} else {
			// Fetch description and imageUrl dynamically if missing
			const description = pageData.description;
			const imageUrl = pageData.imageUrl;

			// Add bookmark with all fields populated
			const newBookmark = {
				...pageData,
				bookmarkId: generateBookmarkId(pageData.title),
				description: description || 'Image Description Not Available',
				imageUrl: imageUrl || 'Image URL Not Available'
			};

			if (cachedBookmarks) {
				cachedBookmarks.push(newBookmark);
			} else {
				setUserDataToLocalStorage('savedBookmarks', [newBookmark]);
			}

			setUserDataToLocalStorage('savedBookmarks', cachedBookmarks);
			//updateSavedBookmarkQueue('add', newBookmark);
			isBookmarked = true;
		}

		return isBookmarked;
	} catch (error) {
		console.error('Error toggling bookmark:', error);
		throw error;
	}
}
export async function deleteProfilePageBookmark(bookmarkId: string): Promise<void> {
	try {
		// Get cached bookmarks
		const cachedBookmarks = JSON.parse(localStorage.getItem('savedBookmarks') || '[]');

		// Remove the bookmark locally
		const updatedBookmarks = cachedBookmarks.filter(
			(savedBookmark: any) => savedBookmark.bookmarkId !== bookmarkId
		);
		savedBookmarks.set(updatedBookmarks);
		localStorage.setItem('savedBookmarks', JSON.stringify(updatedBookmarks));

		// Update the queue
		savedBookmarkQueue.update((queue) => {
			const updatedQueue = new Map(queue); // Clone the existing queue
			updatedQueue.set(bookmarkId, { action: 'remove', data: { bookmarkId } });
			return updatedQueue;
		});

		console.log(`Bookmark with ID ${bookmarkId} deleted locally and queued for sync.`);
	} catch (error) {
		console.error('Error deleting bookmark:', error);
		throw error;
	}
}

// Craps Simulator Preferences
export function toggleCrSimPref(settingKey: string, value: any): void {
	crSimPrefs.update((currentPrefs) => {
		const updatedPrefs = {
			...currentPrefs,
			[settingKey]: value
		};

		syncCrSimPrefsToLocal();
		return updatedPrefs;
	});
}
export async function saveCrSimPrefsToFirebase(userId: string, prefs: CrapsSimulatorPreference) {
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
export function saveCrSimPrefsToLocalStorage(prefs: CrapsSimulatorPreference): void {
	console.log('saveCrSimPrefsToLocalStorage called.');

	if (typeof window !== 'undefined' && localStorage) {
		const existingPrefs = JSON.parse(localStorage.getItem('crSimPrefs') || 'null');
		if (JSON.stringify(existingPrefs) !== JSON.stringify(prefs)) {
			localStorage.setItem('crSimPrefs', JSON.stringify(prefs));
			console.log('Preferences saved to localStorage via saveCrSimPrefsToLocalStorage:', prefs);
		}
	}

	console.log('Exiting saveCrSimPrefsToLocalStorage.');
}
export function loadCrSimPrefsFromLocalStorage(): CrapsSimulatorPreference | null {
	console.log('loadCrSimPrefsFromLocalStorage called.');

	if (typeof window !== 'undefined' && localStorage) {
		const prefs = localStorage.getItem('crSimPrefs');
		console.log('Preferences loading from localStorage:', prefs);
		console.log('Exiting loadCrSimPrefsFromLocalStorage.');
		return prefs ? JSON.parse(prefs) : null;
	} else {
		console.warn('localStorage is not available. Preferences not loaded.');
		console.log('Exiting loadCrSimPrefsFromLocalStorage.');
		return null;
	}
}

// -----> Player Bets <----- //
export function addPlayerBet(bet: PlayerBet): void {
	playerBets.update((currentBets) => {
		const updatedBets = [...currentBets, bet];
		syncPlayerBetsToLocal(); // Sync updated state to localStorage
		return updatedBets;
	});
}
export function removePlayerBet(betId: string): void {
	console.log('removePlayerBet called.');
	playerBets.update((currentBets) => {
		const updatedBets = currentBets.filter((b) => b.id !== betId);
		syncPlayerBetsToLocal(); // Sync updated state to localStorage
		return updatedBets;
	});
}
export function clearPlayerBetsFromLocalStorage(): void {
	console.log('clearPlayerBetsFromLocalStorage called.');

	try {
		playerBets.set([]);
		localStorage.removeItem('playerBets');
		console.log('Player bets cleared from localStorage.');
	} catch (error) {
		console.error('Error clearing player bets from localStorage:', error);
	}
}
export async function clearPlayerBetsFromFirebase(userId: string): Promise<void> {
	if (!userId) {
		throw new Error('User ID is required to clear player bets.');
	}

	try {
		console.log(`Clearing player bets for user: ${userId}`);

		// Reference the user's player bets collection in Firestore
		const betsCollectionRef = collection(db, `users/${userId}/playerBets`);

		// Fetch all documents (player bets) in the collection
		const betsSnapshot = await getDocs(betsCollectionRef);

		// Iterate through each document and delete it
		const deletePromises = betsSnapshot.docs.map((betDoc) =>
			deleteDoc(doc(db, `users/${userId}/playerBets/${betDoc.id}`))
		);

		// Wait for all deletions to complete
		await Promise.all(deletePromises);

		console.log(`Successfully cleared all player bets for user: ${userId}`);
	} catch (error) {
		console.error('Error clearing player bets:', error);
		throw new Error('Failed to clear player bets. Please try again.');
	}
}

// Favorite Bets
export async function toggleFavoriteBet(betType: string, betAmount: number): Promise<boolean> {
	console.log('toggleFavoriteBet called.');

	const currentUser = get(user);
	if (!currentUser?.id) {
		throw new Error('User is not logged in.');
	}

	const betId = generatePlayerBetId(betType, betAmount);

	const isFavoriteBet = await getFavoriteBetStatus(betType, betAmount);

	try {
		if (isFavoriteBet) {
			// Remove from favorites
			favoriteBets.update((bets) => bets.filter((b) => b.betId !== betId));
			syncFavoriteBetsToLocal(); // Save to localStorage
			console.log(`Removed favorite bet: ${betId}`);
			return false;
		} else {
			// Add to favorites
			favoriteBets.update((bets) => [
				...bets,
				{ betId: betId, betDetails: { type: betType, amount: betAmount } } as FavoriteBet
			]);
			syncFavoriteBetsToLocal(); // Save to localStorage
			console.log(`Added favorite bet: ${betId}`);
			return true;
		}
	} catch (error) {
		console.error('Error toggling favorite bet:', error);
		throw error;
	}
}

export async function getFavoriteBetStatus(betType: string, betAmount: number): Promise<boolean> {
	console.log('getFavoriteBetStatus called.');

	const betId = generatePlayerBetId(betType, betAmount);
	console.log('betId:', betId);
	console.log('favoriteBets:', get(favoriteBets));
	const isFavorite = get(favoriteBets).some((bet) => bet.betId === betId);
	console.log(`Favorite status for ${betId}:`, isFavorite);
	return isFavorite;
}

// Helper Functions
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
function getUserDataFromLocal<T>(key: string): T | null {
	try {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	} catch (error) {
		console.error(`Error reading ${key} from LocalStorage:`, error);
		return null;
	}
}
function setUserDataToLocalStorage<T>(key: string, data: T): void {
	console.log('setUserDataToLocalStorage called.');
	try {
		localStorage.setItem(key, JSON.stringify(data));
		console.log(`Saved ${key} to LocalStorage:`, data);
	} catch (error) {
		console.error(`Error writing ${key} to LocalStorage:`, error);
	}
	console.log('Exiting setUserDataToLocalStorage.');
}

console.log('Exiting userDataOperations.ts');
