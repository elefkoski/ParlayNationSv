import {
	getAuth,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence,
	signOut
} from 'firebase/auth';
import { scaleElements, scaleChipsToFit, scaleAllPopups } from '../../craps-simulator-layout';
import { clearTempPreferences } from './tempPreferences';
import {
	user,
	fetchUserData,
	crapsSimulatorPreferences,
	defaultCrapsSimulatorPreferences
} from './userData';
import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { page } from '$app/stores';

export function handleAuthStateChange(callback: (userId: string | null) => void) {
	const auth = getAuth();

	onAuthStateChanged(auth, async (firebaseUser) => {
		if (firebaseUser) {
			console.log('User authenticated:', firebaseUser.uid);

			// Fetch user data (including Google profile)
			await fetchUserData(firebaseUser);
			callback(firebaseUser.uid);
		} else {
			console.log('User logged out.');

			user.set(null);
			callback(null);
		}
	});
}

export async function logout() {
	try {
		const auth = getAuth();
		await signOut(auth);
		clearTempPreferences();
		crapsSimulatorPreferences.set(defaultCrapsSimulatorPreferences);
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

export async function enablePersistentLogin() {
	const auth = getAuth();
	try {
		await setPersistence(auth, browserLocalPersistence);
		console.log('Persistent login enabled');
	} catch (error) {
		console.error('Failed to enable persistent login:', error);
	}
}
