console.log('Entering userDataOperations.ts');

import { db } from './firebase';
import { doc, getDoc, updateDoc, collection, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import {
	user,
	savedBookmarks,
	savedBookmarkQueue,
	crSimPrefs,
	crSimPrefsQueue,
	playerBets,
	playerBetQueue,
	favoriteBets,
	favoriteBetQueue
} from './userData';
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

	// Fetch and cache user data
	await Promise.all([
		fetchUserBookmarks(userId),
		fetchCrSimPrefs(userId),
		fetchFavoriteBets(userId),
		fetchPlayerBets(userId)
	]);

	console.log('Exiting fetchUserData.');
}
export async function fetchUserBookmarks(userId: string): Promise<void> {
	try {
		const cachedBookmarks = getUserDataFromLocal<Bookmark[]>('savedBookmarks');
		if (cachedBookmarks && (cachedBookmarks as Bookmark[]).length > 0) {
			savedBookmarks.set(cachedBookmarks || []);
			console.log('Loaded bookmarks from localStorage:', cachedBookmarks);
		} else {
			const fetchedBookmarks = await fetchCollection<Bookmark>(`users/${userId}/savedBookmarks`);
			savedBookmarks.set(fetchedBookmarks);
			setUserDataToLocalStorage('savedBookmarks', fetchedBookmarks);
			console.log('Bookmarks fetched from Firebase and cached:', fetchedBookmarks);
		}
	} catch (error) {
		console.error('Error fetching bookmarks:', error);
		savedBookmarks.set([]);
	}
}
export async function fetchPlayerBets(userId: string): Promise<void> {
	console.log('fetchPlayerBets called.');

	try {
		const cachedBets = getUserDataFromLocal<PlayerBet[]>('playerBets');
		if (cachedBets && (cachedBets as PlayerBet[]).length > 0) {
			playerBets.set(cachedBets);
			console.log('Loaded player bets from localStorage:', cachedBets);
			return;
		}

		const bets = await fetchCollection<PlayerBet>(`users/${userId}/playerBets`);
		playerBets.set(bets);
		setUserDataToLocalStorage('playerBets', bets);

		console.log('Player bets fetched from Firebase and cached:', bets);
	} catch (error) {
		console.error('Error fetching player bets:', error);
	}
}
export async function fetchCrSimPrefs(userId: string): Promise<void> {
	console.log('fetchCrSimPrefs called.');

	try {
		const cachedPrefs = getUserDataFromLocal<CrapsSimulatorPreference[]>('crSimPrefs');
		if (cachedPrefs) {
			crSimPrefs.set(cachedPrefs);
			console.log('Loaded preferences from localStorage:', cachedPrefs);
			return;
		}

		const docRef = doc(db, 'users', userId);
		const userData = await fetchDocument(docRef);

		if (userData?.crapsSimulator) {
			crSimPrefs.set(userData.crapsSimulator);
			saveCrSimPrefsToLocalStorage(userData.crapsSimulator);
			console.log('Preferences fetched from Firebase and cached:', userData.crapsSimulator);
		} else {
			console.log('No preferences found in Firebase.');
		}
	} catch (error) {
		console.error('Error fetching preferences:', error);
	}
}
export async function fetchFavoriteBets(userId: string): Promise<void> {
	console.log('fetchFavoriteBets called.');

	try {
		const cachedBets = getUserDataFromLocal<FavoriteBet[]>('favoriteBets');
		if (cachedBets && (cachedBets as FavoriteBet[]).length > 0) {
			favoriteBets.set(cachedBets);
			console.log('Loaded favorite bets from localStorage:', cachedBets);
			return;
		}

		const bets = await fetchCollection<FavoriteBet>(`users/${userId}/favoriteBets`);
		favoriteBets.set(bets);
		setUserDataToLocalStorage('favoriteBets', bets);

		console.log('Favorite bets fetched from Firebase and cached:', bets);
	} catch (error) {
		console.error('Error fetching favorite bets:', error);
	}
}

// Queue User Data Sync
export async function updateSavedBookmarkQueue(
	action: 'add' | 'remove',
	pageData: any
): Promise<void> {
	console.log('updateSavedBookmarkQueue called.');
	savedBookmarkQueue.update((queue) => {
		const updatedQueue = new Map(queue);
		updatedQueue.set(pageData.pageUrl, { action, data: pageData });
		console.log('Updated Queue:', updatedQueue);
		return updatedQueue;
	});
}
export async function updatePlayerBetQueue(action: 'add' | 'remove', betData: any): Promise<void> {
	console.log('updatePlayerBetQueue called.');

	playerBetQueue.update((queue) => {
		const updatedQueue = new Map(queue);

		if (action === 'add') {
			// If the bet is already marked for removal, remove it from the queue
			if (updatedQueue.get(betData.id)?.action === 'remove') {
				updatedQueue.delete(betData.id);
			} else {
				// Otherwise, add it to the queue
				updatedQueue.set(betData.id, { action, data: betData });
			}
		} else if (action === 'remove') {
			// If the bet is already marked for addition, remove it from the queue
			if (updatedQueue.get(betData.id)?.action === 'add') {
				updatedQueue.delete(betData.id);
			} else {
				// Otherwise, add it to the queue as a removal
				updatedQueue.set(betData.id, { action, data: betData });
			}
		}

		console.log('Updated Player Bet Queue:', updatedQueue);
		return updatedQueue;
	});
}
export async function updateFavoriteBetQueue(
	action: 'add' | 'remove',
	betData: any
): Promise<void> {
	console.log('updateFavoriteBetQueue called.');

	favoriteBetQueue.update((queue) => {
		const updatedQueue = new Map(queue);
		updatedQueue.set(betData.betId, { action, data: betData });
		console.log('Updated Queue:', updatedQueue);
		return updatedQueue;
	});
}
export function updateCrSimPrefsQueue(action: 'add' | 'remove', prefs: any): void {
	console.log('updateCrSimPrefsQueue called.');

	crSimPrefsQueue.update((queue) => {
		const updatedQueue = new Map(queue);

		if (action === 'add') {
			// If 'remove' already exists in the queue, clear it
			if (updatedQueue.get('preferences')?.action === 'remove') {
				updatedQueue.delete('preferences');
			}
			// Add or update the preferences with the latest state
			updatedQueue.set('preferences', { action, data: prefs });
		} else if (action === 'remove') {
			// If 'add' already exists in the queue, clear it
			if (updatedQueue.get('preferences')?.action === 'add') {
				updatedQueue.delete('preferences');
			} else {
				// Add or update the preferences as a removal
				updatedQueue.set('preferences', { action, data: prefs });
			}
		}

		console.log('Updated CrSimPrefs Queue:', updatedQueue);
		return updatedQueue;
	});
}

// Sync User Data with Firebase
export async function syncUserData(userId: string): Promise<void> {
	try {
		console.log('Syncing user data...');

		await Promise.all([
			syncSavedBookmarkQueue(userId),
			syncPlayerBetQueue(userId),
			syncFavoriteBetQueue(userId),
			syncCrSimPrefsQueue(userId)
		]);

		console.log('User data synced successfully.');
	} catch (error) {
		console.error('Error syncing user data:', error);
	}
}
async function syncSavedBookmarkQueue(userId: string): Promise<void> {
	const queue = get(savedBookmarkQueue);

	await processQueue(
		queue,
		userId,
		'savedBookmarks',
		(userId, data) => doc(db, `users/${userId}/savedBookmarks/${generateBookmarkId(data.title)}`),
		async (docRef, action, data) => {
			if (action === 'add') {
				await setDoc(docRef, data);
			} else if (action === 'remove') {
				await deleteDoc(docRef);
			}
		}
	);

	// Clear the queue after syncing
	savedBookmarkQueue.set(new Map());
}
async function syncPlayerBetQueue(userId: string): Promise<void> {
	const queue = get(playerBetQueue);

	await processQueue(
		queue,
		userId,
		'playerBets',
		(userId, data) => doc(db, `users/${userId}/playerBets/${data.id}`),
		async (docRef, action, data) => {
			if (action === 'add') {
				await setDoc(docRef, data);
			} else if (action === 'remove') {
				await deleteDoc(docRef);
			}
		}
	);

	// Clear the queue after syncing
	playerBetQueue.set(new Map());
}
async function syncFavoriteBetQueue(userId: string): Promise<void> {
	const queue = get(favoriteBetQueue);

	await processQueue(
		queue,
		userId,
		'favoriteBets',
		(userId, data) => doc(db, `users/${userId}/favoriteBets/${data.betId}`),
		async (docRef, action, data) => {
			if (action === 'add') {
				await setDoc(docRef, data.betDetails);
			} else if (action === 'remove') {
				await deleteDoc(docRef);
			}
		}
	);

	// Clear the queue after syncing
	favoriteBetQueue.set(new Map());
}
async function syncCrSimPrefsQueue(userId: string): Promise<void> {
	const queue = get(crSimPrefsQueue);

	await processQueue(
		queue,
		userId,
		'crSimPrefs',
		(userId, data) => doc(db, `users/${userId}`),
		async (docRef, action, data) => {
			if (action === 'add') {
				await updateDoc(docRef, { crapsSimulator: data });
			} else if (action === 'remove') {
				await updateDoc(docRef, { crapsSimulator: null });
			}
		}
	);

	// Clear the queue after syncing
	crSimPrefsQueue.set(new Map());
}

// Generate ID's
function generateBookmarkId(input: string): string {
	return input
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
		.replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
		.slice(0, 50); // Limit to 50 characters for brevity
}
export function generatePlayerBetId(type: string, amount: number): string {
	console.log('Generating Player Bet ID.');
	return `${type}-${amount || 0}`.replace(/\s+/g, '-').toLowerCase();
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
			updateSavedBookmarkQueue('remove', pageData);
		} else {
			// Add bookmark
			if (cachedBookmarks) {
				cachedBookmarks.push({
					...pageData,
					bookmarkId: generateBookmarkId(pageData.title),
					description: '',
					imageUrl: ''
				});
			} else {
				setUserDataToLocalStorage('savedBookmarks', [pageData]);
			}
			setUserDataToLocalStorage('savedBookmarks', cachedBookmarks);
			updateSavedBookmarkQueue('add', pageData);
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

// -----> Player Bets <----- //
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

	const betId = generatePlayerBetId(betType, betAmount);

	const currentFavoriteState = isFavorite ?? (await getFavoriteStatus(betType, betAmount));

	try {
		if (currentFavoriteState) {
			updatePlayerBetQueue('remove', { id: betId, type: betType, amount: betAmount });
			console.log(`Queued removal of favorite bet: ${betId}`);
			return false;
		} else {
			updatePlayerBetQueue('add', { id: betId, type: betType, amount: betAmount });
			console.log(`Queued addition of favorite bet: ${betId}`);
			return true;
		}
	} catch (error) {
		console.error('Error toggling favorite bet:', error);
		throw error;
	}
}
export async function getFavoriteStatus(betType: string, betAmount: number): Promise<boolean> {
	console.log('getFavoriteStatus called.');

	const betId = generatePlayerBetId(betType, betAmount);
	const isFavorite = get(favoriteBets).some((bet) => bet.betId === betId);
	console.log(`Favorite status for ${betId}:`, isFavorite);
	return isFavorite;
}
export async function clearPlayerBetsFromFirebase(userId: string): Promise<void> {
	console.log('clearPlayerBetsFromFirebase called.');

	try {
		const playerBetsRef = collection(db, `users/${userId}/playerBets`);
		const querySnapshot = await getDocs(playerBetsRef);

		await Promise.all(
			querySnapshot.docs.map(async (doc) => {
				await deleteDoc(doc.ref);
			})
		);

		console.log('Player bets cleared from Firebase.');
	} catch (error) {
		console.error('Error clearing player bets from Firebase:', error);
	}
}

// Craps Simulator Preferences
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

// Player Bets
export function clearPlayerBetsFromLocalStorage(): void {
	console.log('clearPlayerBetsFromLocalStorage called.');

	try {
		localStorage.removeItem('playerBets');
		playerBets.set([]);
		console.log('Player bets cleared from localStorage.');
	} catch (error) {
		console.error('Error clearing player bets from localStorage:', error);
	}
}

// ----> Player Bet Helpers -----> //

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
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.error(`Error writing ${key} to LocalStorage:`, error);
	}
}
async function processQueue<T>(
	queue: Map<string, { action: 'add' | 'remove'; data: T }>,
	userId: string,
	collectionPath: string,
	generateDocRef: (userId: string, data: T) => any,
	handleData: (docRef: any, action: 'add' | 'remove', data: T) => Promise<void>
): Promise<void> {
	console.log(`Processing queue for ${collectionPath}...`);

	const failedItems = new Map<string, { action: 'add' | 'remove'; data: T }>();

	try {
		await Promise.all(
			Array.from(queue.entries()).map(async ([key, item]) => {
				const docRef = generateDocRef(userId, item.data);
				try {
					await handleData(docRef, item.action, item.data);
				} catch (error) {
					console.error(`Error syncing item ${key} in ${collectionPath}:`, error);
					failedItems.set(key, item); // Keep failed items in the queue
				}
			})
		);

		console.log(`${collectionPath} queue processed successfully.`);
	} catch (error) {
		console.error(`Error processing ${collectionPath} queue:`, error);
	}

	// Restore failed items in the queue
	if (failedItems.size > 0) {
		console.warn(`${failedItems.size} items failed to sync. Keeping them in the queue.`);
		queue.clear();
		failedItems.forEach((value, key) => queue.set(key, value));
	}
}

console.log('Exiting userDataOperations.ts');
