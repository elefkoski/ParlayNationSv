import { get } from 'svelte/store';
import type { directionOffsets } from './craps-simulator-chip-placement';
import { currentGameLimit } from './craps-simulator-game-data';

// Define the interface for a bet rule.
export interface BetRule {
	title: string | (() => string);
	// minBet and maxBet can either be a number or a function returning a number.
	minBet: number | (() => number);
	maxBet: number | (() => number);
	hasFlatBet: () => boolean;
	isWorking: { duringComeoutRoll: boolean; duringIntermediateRoll: boolean };
	isMovable: { duringComeoutRoll: boolean; duringIntermediateRoll: boolean };
	isBetable: { duringComeoutRoll: boolean; duringIntermediateRoll: boolean };
	canBeTurnedOn: boolean;
	canBeTurnedOff: boolean;
	// Alert messages can be static strings or functions that return strings.
	alert: { [key: string]: string | (() => string) };
	coordinates: { x: number; y: number };
	chipDirection: keyof typeof directionOffsets;
	toggleKey: string;
}

// A factory function to create a BetRule from partial configuration.
export function createBetRule(config: Partial<BetRule>): BetRule {
	return {
		title: config.title || (() => ''),
		// By default, minBet will return the current game limit.
		minBet: config.minBet ?? (() => get(currentGameLimit)),
		// Default maxBet: if currentGameLimit is one of [5, 10, 15], use 3000; otherwise 5000.
		maxBet:
			config.maxBet ??
			(() => {
				const limit = get(currentGameLimit);
				return [5, 10, 15].includes(limit) ? 3000 : 5000;
			}),
		hasFlatBet: config.hasFlatBet || (() => false),
		isWorking: config.isWorking || { duringComeoutRoll: false, duringIntermediateRoll: false },
		isMovable: config.isMovable || { duringComeoutRoll: false, duringIntermediateRoll: false },
		isBetable: config.isBetable || { duringComeoutRoll: false, duringIntermediateRoll: false },
		canBeTurnedOn: config.canBeTurnedOn || false,
		canBeTurnedOff: config.canBeTurnedOff || false,
		alert: config.alert || {
			needMinBet: () => `Minimum bet is $${get(currentGameLimit)}`,
			hitMaxBet: 'Max bet hit.'
		},
		coordinates: config.coordinates || { x: 0, y: 0 },
		chipDirection: config.chipDirection || 'n',
		toggleKey: config.toggleKey || 'defaultToggle'
	};
}
