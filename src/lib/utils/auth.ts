console.log('Entering auth.ts');

import {
	getAuth,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence,
	signOut
} from 'firebase/auth';
import { scaleEverything } from './simulator/craps-simulator-scaling';
import { user, playerBets, crSimPrefs, savedBookmarks, favoriteBets } from './userData';
import { fetchUserData, loadCrSimPrefsFromLocalStorage } from './userDataOperations';
import { goto } from '$app/navigation';
import { writable, get, derived } from 'svelte/store';
import { page } from '$app/stores';

// Flag stores for scalign elements
export const isInitializing = writable(false);
export const isLoggingOut = writable(false);
export const isLoggingIn = writable(false);
export const isLoadingGuestData = writable(false);
export const isReadyForSync = derived(
	[isInitializing, isLoggingOut, isLoggingIn, isLoadingGuestData],
	([$isInitializing, $isLoggingOut, $isLoggingIn, $isLoadingGuestData]) =>
		!$isInitializing && !$isLoggingOut && !$isLoggingIn && !$isLoadingGuestData
);

let isAuthInitialized = false; // To skip multiple auth listener calls

export async function handleAuthStateChange(): Promise<void> {
	if (isAuthInitialized) {
		console.log('Auth listener already initialized. Skipping setup.');
		return;
	}
	isAuthInitialized = true;

	console.log('handleAuthStateChange called.');
	const auth = getAuth();

	isInitializing.set(true); // Prevent scaling/rendering during initialization

	await new Promise<void>((resolve) => {
		onAuthStateChanged(auth, async (firebaseUser) => {
			console.log('onAuthStateChanged called.');
			console.log('Auth State Changed:', firebaseUser);

			if (get(isLoggingOut)) {
				console.log('Skipping onAuthStateChanged handling due to logout in progress.');
				resolve();
				return;
			}

			try {
				if (firebaseUser) {
					console.log('User authenticated:', firebaseUser.uid);
					isLoggingIn.set(true);
					await fetchUserData(firebaseUser);
				} else {
					console.log('No authenticated user. Switching to guest mode.');
					user.set(null);
					isLoadingGuestData.set(true);
					initializeGuestState();
				}
			} catch (error) {
				console.error('Error during auth state handling:', error);
			} finally {
				isInitializing.set(false);
				isLoggingIn.set(false);
				isLoadingGuestData.set(false);
				console.log('Exiting handleAuthStateChange.');
				resolve();
			}
		});
	});
}

export function initializeGuestState(): void {
	console.log('Initializing guest state.');

	// Set default state for guest users
	user.set({
		id: 'guest',
		profile: {
			displayName: 'Guest',
			profilePicture: 'https://picsum.photos/100'
		}
	});

	if (typeof localStorage !== 'undefined') {
		try {
			// Check and preserve existing localStorage data
			if (!localStorage.getItem('playerBets')) {
				localStorage.setItem('playerBets', JSON.stringify([]));
			}

			if (!localStorage.getItem('favoriteBets')) {
				localStorage.setItem('favoriteBets', JSON.stringify([]));
			}

			if (!localStorage.getItem('crSimPrefs')) {
				localStorage.setItem('crSimPrefs', JSON.stringify({}));
			}

			if (!localStorage.getItem('savedBookmarks')) {
				localStorage.setItem('savedBookmarks', JSON.stringify([]));
			}

			// Reload from localStorage into Svelte stores
			playerBets.set(JSON.parse(localStorage.getItem('playerBets') || '[]'));
			favoriteBets.set(JSON.parse(localStorage.getItem('favoriteBets') || '[]'));
			crSimPrefs.set(JSON.parse(localStorage.getItem('crSimPrefs') || '{}'));
			savedBookmarks.set(JSON.parse(localStorage.getItem('savedBookmarks') || '[]'));

			console.log('Guest state initialized successfully.');
		} catch (error) {
			console.error('Error initializing guest state:', error);
		}
	} else {
		console.warn('localStorage is not available. Guest state cannot be initialized.');
	}
}

export async function logout(): Promise<void> {
	console.log('logout called.');
	isLoggingOut.set(true);

	try {
		const auth = getAuth();

		await signOut(auth);
		console.log('Firebase sign-out successful.');

		user.set(null);
		console.log('User data cleared.');

		const localPreferences = loadCrSimPrefsFromLocalStorage();
		const localBets = loadPlayerBetsFromLocalStorage();

		crSimPrefs.set(localPreferences || {});
		console.log('Craps simulator preferences reloaded from local storage:', localPreferences);

		playerBets.set(localBets || []);
		console.log('Player bets reloaded from local storage:', localBets);

		const currentPath = get(page).url.pathname;
		await goto(currentPath);

		await scaleEverything();

		console.log('User logged out successfully.');
	} catch (error) {
		console.error('Error logging out:', error);
	} finally {
		isLoggingOut.set(false);
		console.log('Exiting logout.');
	}
}

// <<<<<< Not being used >>>>> //
export async function enablePersistentLogin(): Promise<void> {
	console.log('enablePersistentLogin called.');

	const auth = getAuth();
	try {
		await setPersistence(auth, browserLocalPersistence);
		console.log('Persistent login enabled.');
	} catch (error) {
		console.error('Failed to enable persistent login:', error);
	}

	console.log('Exiting enablePersistentLogin.');
}

console.log('Exiting auth.ts');
