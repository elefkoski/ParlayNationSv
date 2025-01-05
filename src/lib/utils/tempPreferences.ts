console.log('Entering tempPreferences.ts');

import { defaultCrapsSimulatorPreferences } from './userData';

// Save Temporary Preferences
export function saveTempPreferences(preferences: any) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('tempPreferences', JSON.stringify(preferences));
	}
}

export function loadTempPreferences() {
	if (typeof window !== 'undefined') {
		const storedPreferences = localStorage.getItem('tempPreferences');
		if (storedPreferences) {
			return JSON.parse(storedPreferences);
		}
	}
	return { ...defaultCrapsSimulatorPreferences };
}

// Save Temporary Bets
export function saveTempBets(bets: any) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('tempBets', JSON.stringify(bets));
	}
}

export function loadTempBets() {
	if (typeof window !== 'undefined') {
		const storedBets = localStorage.getItem('tempBets');
		return storedBets ? JSON.parse(storedBets) : [];
	}
	return [];
}

export function clearTempBets() {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('tempBets');
	}
}

console.log('Exiting tempPreferences.ts');
