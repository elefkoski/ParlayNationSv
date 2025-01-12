console.log('Entering userData.ts');

import { writable } from 'svelte/store';
import { directionOffsets } from './simulator/craps-simulator-bet-placement';

export const user = writable<{ id: string; profile?: any } | null>(null);
export const userPreferences = writable({});
export const bookmarks = writable<Bookmark[]>([]);
export const bookmarkedPages = writable<Bookmark[]>([]);
export const favoriteBets = writable<FavoriteBet[]>([]);
export const playerBets = writable<PlayerBet[]>([]);

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
export interface FavoriteBet {
	betId: string;
	betDetails: {
		type: string;
		amount: number;
	};
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

export function resetToDefaultPreferences() {
	console.log('resetToDefaultPreferences: Resetting to default simulator preferences');
	crapsSimulatorPreferences.set({ ...defaultCrapsSimulatorPreferences });
}
export function generateBetId(type: string, amount: number): string {
	return `${type}-${amount || 0}`.replace(/\s+/g, '-').toLowerCase();
}
export function deduceBaseName(id: string): string {
	// Remove trailing numbers or special characters (e.g., `-5`, `_123`, etc.)
	return id.replace(/[-_]\d+$/, '');
}

console.log('Exiting userData.ts');
