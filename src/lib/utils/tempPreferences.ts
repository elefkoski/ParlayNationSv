import { defaultCrapsSimulatorPreferences } from './userData';

export function saveTempPreferences(preferences: any) {
	localStorage.setItem('tempPreferences', JSON.stringify(preferences));
}

export function loadTempPreferences() {
	const storedPreferences = localStorage.getItem('tempPreferences');
	if (storedPreferences) {
		return JSON.parse(storedPreferences);
	}
	return { ...defaultCrapsSimulatorPreferences };
}

export function clearTempPreferences() {
	localStorage.removeItem('tempPreferences');
}
