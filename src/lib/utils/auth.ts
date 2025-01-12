console.log('Entering auth.ts');

import {
	getAuth,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence,
	signOut
} from 'firebase/auth';
import { scaleEverything } from './simulator/craps-simulator-scaling';
import { user, playerBets, crapsSimulatorPreferences } from './userData';
import {
	fetchUserData,
	loadNonUserData,
	loadPlayerBetsFromLocalStorage,
	loadCrSimPrefsFromLocalStorage
} from './userDataOperations';
import { goto } from '$app/navigation';
import { writable, get, derived } from 'svelte/store';
import { page } from '$app/stores';

// Flag stores for subscription management
export const isInitializing = writable(false);
export const isLoggingOut = writable(false);
export const isLoggingIn = writable(false);
export const hasUserLoaded = writable(false);
export const hasInitialized = writable(false);
// Derived from above
export const isReadyForSync = derived(
	[hasInitialized, hasUserLoaded, isInitializing, isLoggingOut, isLoggingIn],
	([$hasInitialized, $hasUserLoaded, $isInitializing, $isLoggingOut, $isLoggingIn]) =>
		$hasInitialized && $hasUserLoaded && !$isInitializing && !$isLoggingOut && !$isLoggingIn
);

// Flag store for scaling elements
export const isDataReady = writable(false);

// Flag to prevent multiple auth listeners
let authListenerInitialized = false;

export function handleAuthStateChange(): void {
	if (authListenerInitialized) {
		console.log('Auth listener already initialized. Skipping setup.');
		return;
	}
	authListenerInitialized = true;

	console.log('handleAuthStateChange called.');
	const auth = getAuth();

	onAuthStateChanged(auth, async (firebaseUser) => {
		console.log('onAuthStateChanged called.');

		if (get(isLoggingOut)) {
			console.log('Skipping onAuthStateChanged handling due to logout in progress.');
			return;
		}

		isInitializing.set(true); // Prevent subscriptions from triggering during initialization
		isDataReady.set(false); // Prevent scaling until initialization is complete

		try {
			if (firebaseUser) {
				console.log('User authenticated:', firebaseUser.uid);
				isLoggingIn.set(true);
				await fetchUserData(firebaseUser);
			} else {
				console.log('No authenticated user. Initializing non-user data.');
				await loadNonUserData();
			}
		} catch (error) {
			console.error('Error during auth state handling:', error);
		} finally {
			isLoggingIn.set(false);
			isInitializing.set(false);
			isDataReady.set(true);
			console.log('Exiting handleAuthStateChange.');
		}
	});
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

		crapsSimulatorPreferences.set(localPreferences || {});
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
