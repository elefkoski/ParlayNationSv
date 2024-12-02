import { writable } from 'svelte/store';

export const user = writable<User | null>(null);
export const bookmarkedPages = writable<Bookmark[]>([]);
export const bookmarks = writable<Bookmark[]>([]);
export const darkMode = writable<boolean>(false);
export const language = writable<string>('en');

export interface AppData {
	user?: User;
	games: {
		crapsSimulator: CrapsSimulatorPreferences;
		[key: string]: any; // For additional games in the future
	};
	websitePreferences?: {
		darkMode?: boolean;
		language?: string;
		[key: string]: any;
	};
}
export interface User {
	id?: string;
	display_name?: string;
	email?: string;
	profilePicture?: string;
}
export interface Bookmark {
	bookmarkId: string;
}
export interface CrapsSimulatorPreferences {
	showStickperson?: boolean;
	showGuide?: boolean;
	showBankroll?: boolean;
	showRail?: boolean;
	showLayout?: boolean;
	showRollButton?: boolean;
	bankroll?: number; // Example of a saved state for bankroll
	savedRolls?: number[]; // Example: saving specific rolls
	[key: string]: any; // Allow for additional preferences as needed
}

export const defaultPreferences = {
	showStickperson: true,
	showGuide: true,
	showBankroll: true,
	showRail: true,
	showLayout: true,
	showRollButton: true,
	bankroll: 1000,
	savedRolls: []
};

export const crapsSimulatorPreferences = writable({ ...defaultPreferences });

export function resetToDefaultPreferences() {
	console.log('resetToDefaultPreferences: Resetting to default simulator preferences');
	crapsSimulatorPreferences.set({ ...defaultPreferences });
}
