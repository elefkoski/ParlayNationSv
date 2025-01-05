console.log('Entering auth.ts');

import {
	getAuth,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence,
	signOut
} from 'firebase/auth';
import {
	scaleElements,
	scaleChipsToFit,
	scaleAllPopups
} from './simulator/craps-simulator-scaling';
import { user, crapsSimulatorPreferences, defaultCrapsSimulatorPreferences } from './userData';
import {
	fetchUserData,
	loadNonUserData,
	loadPreferencesFromLocalStorage
} from './userDataOperations';
import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { page } from '$app/stores';

export let isInitializing: boolean = true;

export function handleAuthStateChange(): void {
	console.log('handleAuthStateChange called.');
	const auth = getAuth();

	onAuthStateChanged(auth, async (firebaseUser) => {
		console.log('onAuthStateChanged called.');
		if (firebaseUser) {
			console.log('User authenticated:', firebaseUser.uid);

			// Fetch and load user data
			await fetchUserData(firebaseUser);
		} else {
			console.log('No authenticated user. Loading non-user data via loadnonUserData:');

			// Load non-user data
			await loadNonUserData();
		}
	});

	isInitializing = false;
}

export async function logout() {
	try {
		const auth = getAuth();
		await signOut(auth);
		crapsSimulatorPreferences.set(
			loadPreferencesFromLocalStorage() || defaultCrapsSimulatorPreferences
		);
		user.set(null);

		const currentPath = get(page).url.pathname;
		goto(currentPath);
		await scaleElements();
		await scaleChipsToFit();
		await scaleAllPopups();
		console.log('User logged out');
	} catch (error) {
		console.error('Error logging out:', error);
	}
}

// <<<<<< Not being used >>>>> //
export async function enablePersistentLogin() {
	const auth = getAuth();
	try {
		await setPersistence(auth, browserLocalPersistence);
		console.log('Persistent login enabled');
	} catch (error) {
		console.error('Failed to enable persistent login:', error);
	}
}

console.log('Exiting auth.ts');
