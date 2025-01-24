console.log('Entering userData.ts');

import { writable, derived } from 'svelte/store';
import { directionOffsets } from './simulator/craps-simulator-bet-placement';

const defaultCrapsSimulatorPreferences: CrapsSimulatorPreference = {
	showStickperson: true,
	showGuide: true,
	showBankroll: true,
	showRail: true,
	showLayout: true,
	showRollButton: true
};
export const user = writable<User | null>(null);
export const isFirebaseUser = derived(user, ($user) => $user !== null && $user.id !== 'guest');

export const savedBookmarks = writable<Bookmark[]>([]);
export const crSimPrefs = writable<CrapsSimulatorPreference>(defaultCrapsSimulatorPreferences);
export const playerBets = writable<PlayerBet[]>([]);
export const favoriteBets = writable<FavoriteBet[]>([]);

export interface User {
	id: string;
	displayName?: string | null;
	email?: string | null;
	photoURL?: string | null;
	profile?: any; // Optional, for additional fields
}
export interface Bookmark {
	bookmarkId: string;
	title: string;
	description: string;
	imageUrl: string;
	pageUrl: string;
}
export interface CrapsSimulatorPreference {
	showStickperson?: boolean;
	showGuide?: boolean;
	showBankroll?: boolean;
	showRail?: boolean;
	showLayout?: boolean;
	showRollButton?: boolean;
	[key: string]: any; // Allow for additional preferences as needed
}
export interface PlayerBet {
	id: string; // Unique identifier for the bet
	type: string; // Type of bet (e.g., "Pass Line", "Don't Pass")
	amount: number; // Amount of chips
	isWorking: boolean; // Indicates if the bet is active
	isLockedIn: boolean; // Indicates if the bet is locked
	baseX: number; // X-coordinate for rendering chips
	baseY: number; // Y-coordinate for rendering chips
	direction: keyof typeof directionOffsets; // Direction for chip stacking
}
export interface FavoriteBet {
	betId: string;
	betDetails: {
		type: string;
		amount: number;
	};
}

console.log('Exiting userData.ts');
