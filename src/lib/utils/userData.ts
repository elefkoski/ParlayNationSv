import { writable, get } from 'svelte/store';
import { doc, getDoc, updateDoc, collection, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export const user = writable<{ id: string; profile?: any } | null>(null);
export const userPreferences = writable({});
export const bookmarks = writable<Bookmark[]>([]);
export const bookmarkedPages = writable<Bookmark[]>([]);
export const favoriteBets = writable<FavoriteBet[]>([]);

export interface User {
	id?: string;
	display_name?: string;
	email?: string;
	profilePicture?: string;
}

export interface Bookmark {
	bookmarkId: string;
	title: string;
	description: string;
	imageUrl: string;
	pageUrl: string;
}

export interface CrapsSimulatorPreferences {
	showStickperson?: boolean;
	showGuide?: boolean;
	showBankroll?: boolean;
	showRail?: boolean;
	showLayout?: boolean;
	showRollButton?: boolean;
	bankroll?: number;
	savedRolls?: number[];
	[key: string]: any; // Allow for additional preferences as needed
}
export const defaultCrapsSimulatorPreferences: CrapsSimulatorPreferences = {
	showStickperson: true,
	showGuide: true,
	showBankroll: true,
	showRail: true,
	showLayout: true,
	showRollButton: true,
	bankroll: 1000,
	savedRolls: []
};
export const crapsSimulatorPreferences = writable<CrapsSimulatorPreferences>(
	defaultCrapsSimulatorPreferences
);
export interface FavoriteBet {
	betId: string;
	betDetails: {
		type: string;
		amount: number;
	};
}

export async function fetchUserData(firebaseUser: any) {
	try {
		if (!firebaseUser) {
			throw new Error('No authenticated user found.');
		}

		// Extract profile information from Firebase Auth
		const profile = {
			displayName: firebaseUser.displayName || '',
			email: firebaseUser.email || '',
			profilePicture: firebaseUser.photoURL || 'https://picsum.photos/100' // Default avatar
		};

		// Fetch additional preferences from Firestore
		const userDoc = doc(db, 'users', firebaseUser.uid);
		const docSnap = await getDoc(userDoc);

		if (docSnap.exists()) {
			const data = docSnap.data();

			// Merge profile from Firebase Auth with Firestore data
			user.set({
				id: firebaseUser.uid,
				profile,
				...data
			});
			userPreferences.set(data.preferences || {});
			crapsSimulatorPreferences.set(data.crapsSimulator || {});

			// Fetch bookmarks
			const bookmarksCollection = collection(db, `users/${firebaseUser.uid}/bookmarks`);
			const bookmarksSnap = await getDocs(bookmarksCollection);
			bookmarks.set(
				bookmarksSnap.docs.map((doc) => ({
					bookmarkId: doc.id,
					...(doc.data() as Omit<Bookmark, 'bookmarkId'>)
				}))
			);

			// Fetch favorite bets
			const favoriteBetsCollection = collection(db, `users/${firebaseUser.uid}/favoriteBets`);
			const favoriteBetsSnap = await getDocs(favoriteBetsCollection);
			favoriteBets.set(
				favoriteBetsSnap.docs.map((doc) => ({
					betId: doc.id,
					...(doc.data() as Omit<FavoriteBet, 'betId'>)
				}))
			);

			console.log('User data fetched successfully:', {
				user: get(user),
				userPreferences: get(userPreferences),
				bookmarks: get(bookmarks),
				favoriteBets: get(favoriteBets)
			});
		} else {
			// If no Firestore data, set only the Firebase profile
			console.warn('No Firestore data found. Using default values.');
			user.set({ id: firebaseUser.uid, profile });
			userPreferences.set({});
			bookmarks.set([]);
			favoriteBets.set([]);
			crapsSimulatorPreferences.set({});
		}
	} catch (error) {
		console.error('Error fetching user data:', error);
	}
}

export async function fetchAllBookmarks(userId: string): Promise<Bookmark[]> {
	try {
		const bookmarksCollection = collection(db, `users/${userId}/bookmarks`);
		const querySnapshot = await getDocs(bookmarksCollection);
		const fetchedBookmarks: Bookmark[] = querySnapshot.docs.map((doc) => ({
			bookmarkId: doc.id,
			title: doc.data().title || 'Untitled',
			description: doc.data().description || 'No description available',
			imageUrl: doc.data().imageUrl || 'https://picsum.photos/200',
			pageUrl: doc.data().pageUrl || '#'
		}));

		bookmarkedPages.set(fetchedBookmarks);
		console.log('Fetched bookmarks:', fetchedBookmarks);
		return fetchedBookmarks; // Return the fetched bookmarks
	} catch (error) {
		console.error('Error fetching bookmarks:', error);
		return []; // Return an empty array in case of an error
	}
}

export async function updateUserGamePreferences(userId: string, key: string, value: any) {
	try {
		const userDoc = doc(db, 'users', userId);

		// Update preferences locally and on Firestore
		userPreferences.update((prefs) => {
			const updated = { ...prefs, [key]: value };
			updateDoc(userDoc, { preferences: updated });
			return updated;
		});

		console.log(`Preference updated: ${key} = ${value}`);
	} catch (error) {
		console.error('Error updating preference:', error);
	}
}
export function resetToDefaultPreferences() {
	console.log('resetToDefaultPreferences: Resetting to default simulator preferences');
	crapsSimulatorPreferences.set({ ...defaultCrapsSimulatorPreferences });
}

export async function addBookmark(userId: string, bookmark: any) {
	try {
		const bookmarksRef = collection(db, `users/${userId}/bookmarks`);
		await setDoc(doc(bookmarksRef, bookmark.id), bookmark);

		// Update local store
		bookmarks.update((bms) => [...bms, bookmark]);
		console.log('Bookmark added:', bookmark);
	} catch (error) {
		console.error('Error adding bookmark:', error);
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
export async function fetchFavoriteBets(userId: string) {
	try {
		const querySnapshot = await getDocs(collection(db, `users/${userId}/favoriteBets`));
		const bets = querySnapshot.docs.map((doc) => doc.data() as FavoriteBet);
		console.log('Fetched favorite bets:', bets);
		favoriteBets.set(bets);
	} catch (error) {
		console.error('Error fetching favorite bets:', error);
	}
}
