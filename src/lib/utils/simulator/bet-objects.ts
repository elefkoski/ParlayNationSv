console.log('Entering bet-objects.ts');

import { get } from 'svelte/store';
import { playerBets } from '../userData';
import {
	currentGameLimit,
	currentOddsOption,
	currentVigUpFront,
	railTotal
} from './craps-simulator-game-data';
import { currentPoint } from './craps-simulator-game';
import { generatePlayerBetId } from '../userDataOperations';
import { directionOffsets } from './craps-simulator-chip-placement';
import { takeChipsFromRail } from './craps-simulator-rail';
import { type BetRule, createBetRule } from './bet-rules';
import { getBetMin, getBetMax } from './bet--limits';

function getDefaultBetData(type: string) {
	const defaults = {
		id: 'Bet Id',
		amount: 0
	};

	switch (type) {
		case 'pass-line':
			return { ...betObjects.passLine, chipDirection: 'n' as keyof typeof directionOffsets };
		case 'dont-pass':
			return { ...betObjects.dontPass, chipDirection: 'n' as keyof typeof directionOffsets };
		default:
			return defaults;
	}
}

export const betObjects = {
	passLine: {
		id: 'pass-line',
		amount: 0
	},
	dontPass: {
		id: 'dont-pass',
		amount: 0
	}
};

export function makeBet(betId: string, amount: number): void {
	console.log('makeBet called');

	const formattedBetId = betId.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	const defaultBetData = getDefaultBetData(formattedBetId);
	const newBetId = generatePlayerBetId(betId, amount);

	playerBets.update((currentBets) => {
		const newBet = {
			...defaultBetData,
			id: newBetId,
			amount
		};
		console.log('newBet:', newBet);
		const updatedBets = [...currentBets, newBet];
		console.log('returning:', updatedBets);
		return updatedBets;
	});

	railTotal.update((currentRailTotal) => currentRailTotal - amount);
	takeChipsFromRail(amount);
	console.log(`Bet placed: ${newBetId}`);
}

function checkForFlatBet(requiredBetPrefix: string): boolean {
	const bets = get(playerBets);
	return bets.some((bet) => bet.id.startsWith(requiredBetPrefix));
}

function computeOddsMaxBet(amount: number, odds: number, point: number): number {
	let multiplier = 0;
	if (odds === 345) {
		// Standard multipliers for the 345 option
		if (point === 4 || point === 10) {
			multiplier = 3;
		} else if (point === 5 || point === 9) {
			multiplier = 4;
		} else if (point === 6 || point === 8) {
			multiplier = 5;
		}
	} else if (odds === 5) {
		multiplier = 5;
		if (point === 5 || point === 9) {
			const baseMax = amount * multiplier;
			const payout = amount * multiplier * 1.5;
			const fractional = payout - Math.floor(payout);
			// If the payout fraction is about .50, add an extra $5
			if (Math.abs(fractional - 0.5) < 0.01) {
				return baseMax + 5;
			}
			return baseMax;
		}
	} else if ([1, 2, 10, 20, 100].includes(odds)) {
		multiplier = odds;
	}
	return amount * multiplier;
}
function computeLayOddsMaxBet(amount: number, odds: number, point: number): number {
	let multiplier = 0;

	if (odds === 1) {
		// In a 1x odds casino:
		// 4/10: 2x, 5/9: 1.5x, 6/8: 1.2x
		if (point === 4 || point === 10) {
			multiplier = 2;
		} else if (point === 5 || point === 9) {
			multiplier = 1.5;
		} else if (point === 6 || point === 8) {
			multiplier = 1.2;
		}
	} else if (odds === 2) {
		// In a 2x odds casino, these multiples double.
		if (point === 4 || point === 10) {
			multiplier = 4;
		} else if (point === 5 || point === 9) {
			multiplier = 3;
		} else if (point === 6 || point === 8) {
			multiplier = 2.4;
		}
	} else if (odds === 345) {
		// For the natural anti 345x, use these multiplier of 6:
		multiplier = 6;
	} else if (odds === 5) {
		// For the natural anti 5x, use these multipliers:
		// 4/10: 10x, 5/9: 7.5x, 6/8: 6x
		if (point === 4 || point === 10) {
			multiplier = 10;
		} else if (point === 5 || point === 9) {
			multiplier = 7.5;
		} else if (point === 6 || point === 8) {
			multiplier = 6;
		}
	} else if (odds === 10) {
		// At 10x odds:
		// 4/10: 20x, 5/9: 15x, 6/8: 12x
		if (point === 4 || point === 10) {
			multiplier = 20;
		} else if (point === 5 || point === 9) {
			multiplier = 15;
		} else if (point === 6 || point === 8) {
			multiplier = 12;
		}
	} else if (odds === 20) {
		// At 20x odds:
		// 4/10: 40x, 5/9: 30x, 6/8: 24x
		if (point === 4 || point === 10) {
			multiplier = 40;
		} else if (point === 5 || point === 9) {
			multiplier = 30;
		} else if (point === 6 || point === 8) {
			multiplier = 24;
		}
	} else if (odds === 100) {
		// At 100x odds:
		// 4/10: 200x, 5/9: 150x, 6/8: 120x
		if (point === 4 || point === 10) {
			multiplier = 200;
		} else if (point === 5 || point === 9) {
			multiplier = 150;
		} else if (point === 6 || point === 8) {
			multiplier = 120;
		}
	} else {
		// Default fallback (use 1x odds multipliers)
		if (point === 4 || point === 10) {
			multiplier = 2;
		} else if (point === 5 || point === 9) {
			multiplier = 1.5;
		} else if (point === 6 || point === 8) {
			multiplier = 1.2;
		}
	}

	return amount * multiplier;
}
function computePlaceMinBet(point: number, limit: number): number {
	if ([5, 10, 15].includes(limit)) {
		if (point === 4 || point === 5 || point === 9 || point === 10) {
			return limit;
		} else if (point === 6 || point === 8) {
			return (limit / 5) * 6;
		}
	} else {
		// For any other game limit value, use fixed minimums.
		if (point === 4 || point === 5 || point === 9 || point === 10) {
			return 25;
		} else if (point === 6 || point === 8) {
			return 30; // Because 25 ÷ 5 * 6 = 30.
		}
	}
	return 0;
}
function computePlaceMaxBet(point: number, limit: number): number {
	if ([5, 10, 15].includes(limit)) {
		if (point === 4 || point === 5 || point === 9 || point === 10) {
			return 5000;
		} else if (point === 6 || point === 8) {
			return 6000;
		}
	} else {
		// For any other game limit value, use fixed minimums.
		if (point === 4 || point === 5 || point === 9 || point === 10) {
			return 10000;
		} else if (point === 6 || point === 8) {
			return 12000; // Because 25 ÷ 5 * 6 = 30.
		}
	}
	return 0;
}
function computeBuyMinBet(point: number, limit: number, vig: boolean): number {
	if (vig) {
		if (point !== 4 && point !== 10) {
			return NaN;
		}
		if ([5, 10, 15].includes(limit)) {
			return 21;
		} else {
			return 26;
		}
	} else {
		if ([5, 10, 15].includes(limit)) {
			return 20;
		} else {
			return 25;
		}
	}
}
function computeBuyMaxBet(point: number, limit: number, vig: boolean): number {
	if (vig && !(point === 4 || point === 10)) {
		return NaN;
	}
	if ([5, 10, 15].includes(limit)) {
		if (vig) {
			return 3000 + 150;
		} else {
			return 3000;
		}
	} else {
		if (vig) {
			return 5000 + 250;
		} else {
			return 5000;
		}
	}
}
function computeOverlayMinBet(point: number, limit: number, vig: boolean): number {
	let minOverlay = 0;
	// Determine minOverlay (vig false)
	if (point === 4 || point === 10) {
		minOverlay = limit === 25 ? 25 * 2 : 20 * 2; // 50 if limit=25, otherwise 40.
	} else if (point === 5 || point === 9) {
		minOverlay = limit === 25 ? 26 * 1.5 : 20 * 1.5; // 39 if limit=25, otherwise 30.
	} else if (point === 6 || point === 8) {
		minOverlay = limit === 25 ? 25 * 1.2 : 20 * 1.2; // 30 if limit=25, otherwise 24.
	} else {
		return 0;
	}
	if (vig) {
		if ([5, 10, 15].includes(limit)) {
			// For limits 5,10,15, add $1.
			return minOverlay + 1;
		} else {
			// For limit=25, use the specified fixed values.
			if (point === 4 || point === 10) {
				return 51;
			} else if (point === 5 || point === 9) {
				return 40;
			} else if (point === 6 || point === 8) {
				return 31;
			}
		}
	} else {
		// With no vig, return the minOverlay rounded up.
		return Math.ceil(minOverlay);
	}
	return Math.ceil(minOverlay);
}
function computeOverlayMaxBet(point: number, limit: number, vig: boolean): number {
	let maxOverlay = 0;
	// Determine maxOverlay (vig false)
	if (point === 4 || point === 10) {
		maxOverlay = limit === 25 ? 5000 * 2 : 3000 * 2;
	} else if (point === 5 || point === 9) {
		maxOverlay = limit === 25 ? 5000 * 1.5 : 3000 * 1.5;
	} else if (point === 6 || point === 8) {
		maxOverlay = limit === 25 ? 5000 * 1.2 : 3000 * 1.2;
	} else {
		return 0;
	}
	if (vig) {
		if ([5, 10, 15].includes(limit)) {
			return maxOverlay + 150;
		} else {
			return maxOverlay + 250;
		}
	} else {
		// With no vig, return the maxOverlay rounded up.
		return Math.ceil(maxOverlay);
	}
}

export const betRules: { [key: string]: BetRule } = {
	'pass-line-bet': createBetRule({
		title: 'Pass Line',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: false },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: false },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line-bet'));
				const amount = passLineBet ? passLineBet.amount : 0;
				return `You made a $${amount.toLocaleString()} bet on the Pass Line.`;
			},
			tookDownBet: 'You took down your Pass Line bet.',
			needMinBet: () => `Minimum bet on the Pass Line is $${get(currentGameLimit)}`,
			betMaxBet: () =>
				`You bet the Max Bet of $${(typeof betRules['pass-line-bet'].maxBet === 'function'
					? betRules['pass-line-bet'].maxBet()
					: betRules['pass-line-bet'].maxBet
				).toLocaleString()} on the Pass Line.`,
			notMovable: 'You cannot move the Pass Line bet during the Intermediate Roll.',
			notBetable: 'You can only bet on the Pass Line during the Comeout Roll.',
			canNotTurnOff: 'You cannot turn off the Pass Line bet during the Intermediate Roll.'
		},
		coordinates: { x: 40, y: 75.5 },
		toggleKey: 'passLineBetPopupKey'
	}), // 1
	'pass-line-odds-point-four': createBetRule({
		title: () => `Pass Line Odds for Point 4`,
		minBet: 1,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-four'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 4 is $1',
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['pass-line-odds-point-four'].maxBet ===
				'function'
					? betRules['pass-line-odds-point-four'].maxBet()
					: betRules['pass-line-odds-point-four'].maxBet
				).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointFourPopupKey'
	}), // 2
	'pass-line-odds-point-five': createBetRule({
		title: () => `Pass Line Odds for Point 5`,
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-five'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 5 is $2',
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['pass-line-odds-point-five'].maxBet ===
				'function'
					? betRules['pass-line-odds-point-five'].maxBet()
					: betRules['pass-line-odds-point-five'].maxBet
				).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointFivePopupKey'
	}), // 3
	'pass-line-odds-point-six': createBetRule({
		title: () => `Pass Line Odds for Point 6`,
		minBet: 5,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-six'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 6 is $5',
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['pass-line-odds-point-six'].maxBet ===
				'function'
					? betRules['pass-line-odds-point-six'].maxBet()
					: betRules['pass-line-odds-point-six'].maxBet
				).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointSixPopupKey'
	}), // 4
	'pass-line-odds-point-eight': createBetRule({
		title: () => `Pass Line Odds for Point 8`,
		minBet: 5,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-eight'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 8 is $5',
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['pass-line-odds-point-eight'].maxBet ===
				'function'
					? betRules['pass-line-odds-point-eight'].maxBet()
					: betRules['pass-line-odds-point-eight'].maxBet
				).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointEightPopupKey'
	}), // 5
	'pass-line-odds-point-nine': createBetRule({
		title: () => `Pass Line Odds for Point 9`,
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-nine'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 9 is $2',
			betMaxBet: () =>
				`You bet the Max Odds of $
					${(typeof betRules['pass-line-odds-point-nine'].maxBet === 'function'
						? betRules['pass-line-odds-point-nine'].maxBet()
						: betRules['pass-line-odds-point-nine'].maxBet
					).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointNinePopupKey'
	}), // 6
	'pass-line-odds-point-ten': createBetRule({
		title: () => `Pass Line Odds for Point 10`,
		minBet: 1,
		maxBet: () => {
			const bets = get(playerBets);
			const passLineBet = bets.find((bet) => bet.id.startsWith('pass-line'));
			const amount = passLineBet ? passLineBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('pass-line-bet'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const passLineOddsBet = bets.find((bet) => bet.id.startsWith('pass-line-odds-point-ten'));
				const amount = passLineOddsBet ? passLineOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Pass Line bet.`;
			},
			tookDownBet: 'You took down your Pass Line Odds bet.',
			needMinBet: 'Minimum Odds for the Point 10 is $1',
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['pass-line-odds-point-ten'].maxBet ===
				'function'
					? betRules['pass-line-odds-point-ten'].maxBet()
					: betRules['pass-line-odds-point-ten'].maxBet
				).toLocaleString()} for your Pass Line bet.`,
			notBetable: 'You can only bet on the Pass Line Odds during the Intermediate Roll.',
			canNotTurnOff:
				'You cannot turn off the Pass Line Odds during the Intermediate Roll. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 81.5 },
		toggleKey: 'passLineOddsPointTenPopupKey'
	}), // 7
	'dont-pass-bet': createBetRule({
		title: "Don't Pass",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: false },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass-bet'));
				const amount = dontPassBet ? dontPassBet.amount : 0;
				return `You made a $${amount.toLocaleString()} bet on the Don't Pass.`;
			},
			tookDownBet: "You took down your Don't Pass bet.",
			needMinBet: () => `Minimum bet on the Don't Pass is $${get(currentGameLimit)}`,
			betMaxBet: "You bet Max Bet on the Don't Pass.",
			notBetable: "You can only make a bet on the Don't Pass during the Comeout Roll.",
			canNotTurnoff:
				"You cannot turn off the Don't Pass bet during the Intermediate Roll. You must pick up your bet."
		},
		coordinates: { x: 40, y: 69 },
		toggleKey: 'dontPassBetPopupKey'
	}), // 8
	'dont-pass-lay-odds-point-four': createBetRule({
		title: () => `Don't Pass Lay Odds for Point 4`,
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-four')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 4 is $2',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-four'].maxBet ===
				'function'
					? betRules['dont-pass-lay-odds-point-four'].maxBet()
					: betRules['dont-pass-lay-odds-point-four'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointFourPopupKey'
	}), // 9
	'dont-pass-lay-odds-point-five': createBetRule({
		title: () => `Don't Pass Lay Odds for Point 5`,
		minBet: 3,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-five')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 5 is $3',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-five'].maxBet ===
				'function'
					? betRules['dont-pass-lay-odds-point-five'].maxBet()
					: betRules['dont-pass-lay-odds-point-five'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointFivePopupKey'
	}), // 10
	'dont-pass-lay-odds-point-six': createBetRule({
		title: "Don't Pass Lay Odds for Point 6",
		minBet: 6,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-six')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 6 is $6',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-six'].maxBet ===
				'function'
					? betRules['dont-pass-lay-odds-point-six'].maxBet()
					: betRules['dont-pass-lay-odds-point-six'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointSixPopupKey'
	}), // 11
	'dont-pass-lay-odds-point-eight': createBetRule({
		title: "Don't Pass Lay Odds for Point 8",
		minBet: 6,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-eight')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 8 is $6',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-eight']
					.maxBet === 'function'
					? betRules['dont-pass-lay-odds-point-eight'].maxBet()
					: betRules['dont-pass-lay-odds-point-eight'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointEightPopupKey'
	}), // 12
	'dont-pass-lay-odds-point-nine': createBetRule({
		title: () => `Don't Pass Lay Odds for Point 9`,
		minBet: 3,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-nine')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 9 is $3',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-nine'].maxBet ===
				'function'
					? betRules['dont-pass-lay-odds-point-nine'].maxBet()
					: betRules['dont-pass-lay-odds-point-nine'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointNinePopupKey'
	}), // 13
	'dont-pass-lay-odds-point-ten': createBetRule({
		title: () => `Don't Pass Lay Odds for Point 10`,
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const dontPassBet = bets.find((bet) => bet.id.startsWith('dont-pass'));
			const amount = dontPassBet ? dontPassBet.amount : 0;
			const odds = get(currentOddsOption);
			const point = get(currentPoint);
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-pass-bet'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontPassLayOddsBet = bets.find((bet) =>
					bet.id.startsWith('dont-pass-lay-odds-point-ten')
				);
				const amount = dontPassLayOddsBet ? dontPassLayOddsBet.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Pass bet.`;
			},
			tookDownBet: "You took down your Don't Pass Lay Odds bet.",
			needMinBet: 'Minimum Lay Odds for the 10 is $2',
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-pass-lay-odds-point-ten'].maxBet ===
				'function'
					? betRules['dont-pass-lay-odds-point-ten'].maxBet()
					: betRules['dont-pass-lay-odds-point-ten'].maxBet
				).toLocaleString()} for your Don't Pass bet.`,
			canNotTurnOff: "You cannot turn off Don't Pass Lay Odds. You must pick up your bet."
		},
		coordinates: { x: 35, y: 69 },
		chipDirection: 'w' as keyof typeof directionOffsets,
		toggleKey: 'dontPassLayOddsPointTenPopupKey'
	}), // 14
	'field-bet': createBetRule({
		title: 'The Field',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const fieldBet = bets.find((bet) => bet.id.startsWith('field-bet'));
				const amount = fieldBet ? fieldBet.amount : 0;
				return `You made a $${amount.toLocaleString()} bet on The Field.`;
			},
			tookDownBet: 'You took down your bet on The Field.',
			needMinBet: () =>
				`Minimum bet on The Field is $${
					typeof betRules['field-bet'].minBet === 'function'
						? betRules['field-bet'].minBet()
						: betRules['field-bet'].minBet
				}`,
			betMaxBet: () => {
				const bets = get(playerBets);
				const fieldBet = bets.find((bet) => bet.id.startsWith('field-bet'));
				const amount = fieldBet ? fieldBet.amount : 0;
				return `You bet the Max Bet of $${amount.toLocaleString()} on The Field.`;
			},
			canNotTurnOff: 'You cannot turn off The Field bet. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 60.5 },
		toggleKey: 'fieldBetPopupKey'
	}), // 15
	'come-bet': createBetRule({
		title: 'Come Bet',
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBet = bets.find((bet) => bet.id.startsWith('come-bet'));
				const amount = comeBet ? comeBet.amount : 0;
				return `You made a $${amount.toLocaleString()} bet in the COME.`;
			},
			tookDownBet: 'You took down your Come Bet.',
			needMinBet: () =>
				`Minimum bet for a Come Bet is $${
					typeof betRules['come-bet'].minBet === 'function'
						? betRules['come-bet'].minBet()
						: betRules['come-bet'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Bet of $${
					typeof betRules['come-bet'].maxBet === 'function'
						? betRules['come-bet'].maxBet()
						: betRules['come-bet'].maxBet
				} on the Come Bet.`,
			canNotTurnOff: 'You cannot turn off a Come Bet. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 49 },
		toggleKey: 'comeBetPopupKey'
	}), // 16
	'come-bet-point-four': createBetRule({
		title: () => 'Come Bet for Point 4',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 24.5, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointFourPopupKey'
	}), // 17
	'come-bet-point-five': createBetRule({
		title: () => 'Come Bet for Point 5',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 31.5, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointFivePopupKey'
	}), // 18
	'come-bet-point-six': createBetRule({
		title: () => 'Come Bet for Point 6',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 38.5, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointSixPopupKey'
	}), // 19
	'come-bet-point-eight': createBetRule({
		title: () => 'Come Bet for Point 8',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 45.25, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointEightPopupKey'
	}), // 20
	'come-bet-point-nine': createBetRule({
		title: () => 'Come Bet for Point 9',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 52.25, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointNinePopupKey'
	}), // 21
	'come-bet-point-ten': createBetRule({
		title: () => 'Come Bet for Point 10',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			notMovable: 'You cannot move a Come Bet after it has entered a number.',
			canNotTurnOff: 'You cannot turn off a Come Bet.'
		},
		coordinates: { x: 59.25, y: 39 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetPointTenPopupKey'
	}), // 22
	'come-bet-odds-point-four': createBetRule({
		title: () => 'Come Bet Odds for Point 4',
		minBet: 1,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetFour = bets.find((bet) => bet.id.startsWith('come-bet-point-four'));
			const amount = comeBetFour ? comeBetFour.amount : 0;
			const odds = get(currentOddsOption);
			const point = 4;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-four'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsFour = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-four'));
				const amount = comeBetOddsFour ? comeBetOddsFour.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 4.',
			needMinBet: () =>
				`Minimum Odds for the 4 is $${
					typeof betRules['come-bet-odds-point-four'].minBet === 'function'
						? betRules['come-bet-odds-point-four'].minBet()
						: betRules['come-bet-odds-point-four'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-four'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-four'].maxBet()
					: betRules['come-bet-odds-point-four'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 4.',
			turnedOff: 'You turned off the Come Bet Odds for the 4.'
		},
		coordinates: { x: 24.5, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointFourPopupKey'
	}), // 23
	'come-bet-odds-point-five': createBetRule({
		title: () => 'Come Bet Odds for Point 5',
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetFive = bets.find((bet) => bet.id.startsWith('come-bet-point-five'));
			const amount = comeBetFive ? comeBetFive.amount : 0;
			const odds = get(currentOddsOption);
			const point = 5;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-five'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsFive = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-five'));
				const amount = comeBetOddsFive ? comeBetOddsFive.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 5.',
			needMinBet: () =>
				`Minimum Odds for the 5 is $${
					typeof betRules['come-bet-odds-point-five'].minBet === 'function'
						? betRules['come-bet-odds-point-five'].minBet()
						: betRules['come-bet-odds-point-five'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-five'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-five'].maxBet()
					: betRules['come-bet-odds-point-five'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 5.',
			turnedOff: 'You turned off the Come Bet Odds for the 5.'
		},
		coordinates: { x: 31.5, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointFivePopupKey'
	}), // 24
	'come-bet-odds-point-six': createBetRule({
		title: () => 'Come Bet Odds for Point 6',
		minBet: 5,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetSix = bets.find((bet) => bet.id.startsWith('come-bet-point-six'));
			const amount = comeBetSix ? comeBetSix.amount : 0;
			const odds = get(currentOddsOption);
			const point = 6;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-six'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsSix = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-six'));
				const amount = comeBetOddsSix ? comeBetOddsSix.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 6.',
			needMinBet: () =>
				`Minimum Odds for the 6 is $${
					typeof betRules['come-bet-odds-point-six'].minBet === 'function'
						? betRules['come-bet-odds-point-six'].minBet()
						: betRules['come-bet-odds-point-six'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-six'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-six'].maxBet()
					: betRules['come-bet-odds-point-six'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 6.',
			turnedOff: 'You turned off the Come Bet Odds for the 6.'
		},
		coordinates: { x: 38.5, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointSixPopupKey'
	}), // 25
	'come-bet-odds-point-eight': createBetRule({
		title: () => 'Come Bet Odds for Point 8',
		minBet: 5,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetEight = bets.find((bet) => bet.id.startsWith('come-bet-point-eight'));
			const amount = comeBetEight ? comeBetEight.amount : 0;
			const odds = get(currentOddsOption);
			const point = 8;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-eight'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsEight = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-eight'));
				const amount = comeBetOddsEight ? comeBetOddsEight.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 8.',
			needMinBet: () =>
				`Minimum Odds for the 8 is $${
					typeof betRules['come-bet-odds-point-eight'].minBet === 'function'
						? betRules['come-bet-odds-point-eight'].minBet()
						: betRules['come-bet-odds-point-eight'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-eight'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-eight'].maxBet()
					: betRules['come-bet-odds-point-eight'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 8.',
			turnedOff: 'You turned off the Come Bet Odds for the 8.'
		},
		coordinates: { x: 45.25, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointEightPopupKey'
	}), // 26
	'come-bet-odds-point-nine': createBetRule({
		title: () => 'Come Bet Odds for Point 9',
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetNine = bets.find((bet) => bet.id.startsWith('come-bet-point-nine'));
			const amount = comeBetNine ? comeBetNine.amount : 0;
			const odds = get(currentOddsOption);
			const point = 9;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-nine'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsNine = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-nine'));
				const amount = comeBetOddsNine ? comeBetOddsNine.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 9.',
			needMinBet: () =>
				`Minimum Odds for the 9 is $${
					typeof betRules['come-bet-odds-point-nine'].minBet === 'function'
						? betRules['come-bet-odds-point-nine'].minBet()
						: betRules['come-bet-odds-point-nine'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-nine'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-nine'].maxBet()
					: betRules['come-bet-odds-point-nine'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 9.',
			turnedOff: 'You turned off the Come Bet Odds for the 9.'
		},
		coordinates: { x: 52.25, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointNinePopupKey'
	}), // 27
	'come-bet-odds-point-ten': createBetRule({
		title: () => 'Come Bet Odds for Point 10',
		minBet: 1,
		maxBet: () => {
			const bets = get(playerBets);
			const comeBetTen = bets.find((bet) => bet.id.startsWith('come-bet-point-ten'));
			const amount = comeBetTen ? comeBetTen.amount : 0;
			const odds = get(currentOddsOption);
			const point = 10;
			return computeOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('come-bet-point-ten'),
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const comeBetOddsTen = bets.find((bet) => bet.id.startsWith('come-bet-odds-point-ten'));
				const amount = comeBetOddsTen ? comeBetOddsTen.amount : 0;
				return `You bet $${amount.toLocaleString()} Odds for your Come Bet.`;
			},
			tookDownBet: 'You took down your Come Bet Odds on the 10.',
			needMinBet: () =>
				`Minimum Odds for the 10 is $${
					typeof betRules['come-bet-odds-point-ten'].minBet === 'function'
						? betRules['come-bet-odds-point-ten'].minBet()
						: betRules['come-bet-odds-point-ten'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Odds of $${(typeof betRules['come-bet-odds-point-ten'].maxBet ===
				'function'
					? betRules['come-bet-odds-point-ten'].maxBet()
					: betRules['come-bet-odds-point-ten'].maxBet
				).toLocaleString()} for your Come Bet.`,
			turnedOn: 'You turned on the Come Bet Odds for the 10.',
			turnedOff: 'You turned off the Come Bet Odds for the 10.'
		},
		coordinates: { x: 59.25, y: 40.25 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'comeBetOddsPointTenPopupKey'
	}), // 28
	'place-four': createBetRule({
		title: 'Place Bet for Point 4',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 4;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 4;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeFourBet = bets.find((bet) => bet.id.startsWith('place-four'));
				const amount = placeFourBet ? placeFourBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 4.`;
			},
			tookDownBet: 'You took down your Place Bet on the 4.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-four'].minBet === 'function'
						? betRules['place-four'].minBet()
						: betRules['place-four'].minBet;
				return `Minimum bet for the 4 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-four'].maxBet === 'function'
						? betRules['place-four'].maxBet()
						: betRules['place-four'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 4.`;
			},
			turnedOn: 'You turned on your Place Bet on the 4.',
			turnedOff: 'You turned off your Place Bet on the 4.'
		},
		coordinates: { x: 28.25, y: 42 },
		toggleKey: 'placeFourPopupKey'
	}), // 29
	'place-five': createBetRule({
		title: 'Place Bet for Point 5',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 5;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 5;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeFiveBet = bets.find((bet) => bet.id.startsWith('place-five'));
				const amount = placeFiveBet ? placeFiveBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 5.`;
			},
			tookDownBet: 'You took down your Place Bet on the 5.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-five'].minBet === 'function'
						? betRules['place-five'].minBet()
						: betRules['place-five'].minBet;
				return `Minimum bet for the 5 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-five'].maxBet === 'function'
						? betRules['place-five'].maxBet()
						: betRules['place-five'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 5.`;
			},
			turnedOn: 'You turned on your Place Bet on the 5.',
			turnedOff: 'You turned off your Place Bet on the 5.'
		},
		coordinates: { x: 35.25, y: 42 },
		toggleKey: 'placeFivePopupKey'
	}), // 30
	'place-six': createBetRule({
		title: 'Place Bet for Point 6',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 6;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 6;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeSixBet = bets.find((bet) => bet.id.startsWith('place-six'));
				const amount = placeSixBet ? placeSixBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 6.`;
			},
			tookDownBet: 'You took down your Place Bet on the 6.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-six'].minBet === 'function'
						? betRules['place-six'].minBet()
						: betRules['place-six'].minBet;
				return `Minimum bet for the 6 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-six'].maxBet === 'function'
						? betRules['place-six'].maxBet()
						: betRules['place-six'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 6.`;
			},
			turnedOn: 'You turned on your Place Bet on the 6.',
			turnedOff: 'You turned off your Place Bet on the 6.'
		},
		coordinates: { x: 42.25, y: 42 },
		toggleKey: 'placeSixPopupKey'
	}), // 31
	'place-eight': createBetRule({
		title: 'Place Bet for Point 8',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 8;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 8;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeEightBet = bets.find((bet) => bet.id.startsWith('place-eight'));
				const amount = placeEightBet ? placeEightBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 8.`;
			},
			tookDownBet: 'You took down your Place Bet on the 8.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-eight'].minBet === 'function'
						? betRules['place-eight'].minBet()
						: betRules['place-eight'].minBet;
				return `Minimum bet for the 8 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-eight'].maxBet === 'function'
						? betRules['place-eight'].maxBet()
						: betRules['place-eight'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 8.`;
			},
			turnedOn: 'You turned on your Place Bet on the 8.',
			turnedOff: 'You turned off your Place Bet on the 8.'
		},
		coordinates: { x: 49, y: 42 },
		toggleKey: 'placeEightPopupKey'
	}), // 32
	'place-nine': createBetRule({
		title: 'Place Bet for Point 9',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 9;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 9;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeNineBet = bets.find((bet) => bet.id.startsWith('place-nine'));
				const amount = placeNineBet ? placeNineBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 9.`;
			},
			tookDownBet: 'You took down your Place Bet on the 9.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-nine'].minBet === 'function'
						? betRules['place-nine'].minBet()
						: betRules['place-nine'].minBet;
				return `Minimum bet for the 9 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-nine'].maxBet === 'function'
						? betRules['place-nine'].maxBet()
						: betRules['place-nine'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 9.`;
			},
			turnedOn: 'You turned on your Place Bet on the 9.',
			turnedOff: 'You turned off your Place Bet on the 9.'
		},
		coordinates: { x: 56, y: 42 },
		toggleKey: 'placeNinePopupKey'
	}), // 33
	'place-ten': createBetRule({
		title: 'Place Bet for Point 10',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 10;
			return computePlaceMinBet(point, gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 10;
			return computePlaceMaxBet(point, gameLimit);
		},
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		canBeTurnedOn: true,
		canBeTurnedOff: true,
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const placeTenBet = bets.find((bet) => bet.id.startsWith('place-ten'));
				const amount = placeTenBet ? placeTenBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Place Bet on the 10.`;
			},
			tookDownBet: 'You took down your Place Bet on the 10.',
			needMinBet: () => {
				const minBet =
					typeof betRules['place-ten'].minBet === 'function'
						? betRules['place-ten'].minBet()
						: betRules['place-ten'].minBet;
				return `Minimum bet for the 10 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['place-ten'].maxBet === 'function'
						? betRules['place-ten'].maxBet()
						: betRules['place-ten'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the 10.`;
			},
			turnedOn: 'You turned on your Place Bet on the 10.',
			turnedOff: 'You turned off your Place Bet on the 10.'
		},
		coordinates: { x: 63, y: 42 },
		toggleKey: 'placeTenPopupKey'
	}), // 34
	'dont-come-bet': createBetRule({
		title: "Don't Come Bet",
		isWorking: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: false, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeBet = bets.find((bet) => bet.id === 'dont-come-bet');
				const amount = dontComeBet ? dontComeBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Don't Come Bet.`;
			},
			tookDownBet: "You took down your Don't Come Bet.",
			needMinBet: () =>
				`Minimum bet for the Don't Come Bet is $${betRules['dont-come-bet'].minBet}`,
			betMaxBet: () =>
				`You bet the Max Bet of $${betRules[
					'dont-come-bet'
				].maxBet.toLocaleString()} on the Don't Come Bet.`
		},
		coordinates: { x: 21, y: 34 },
		toggleKey: 'dontComeBetPopupKey'
	}), // 35
	'dont-come-point-four': createBetRule({
		title: "Don't Come Bet for Point 4",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 4."
		},
		coordinates: { x: 26.5, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointFourPopupKey'
	}), // 36
	'dont-come-point-five': createBetRule({
		title: "Don't Come Bet for Point 5",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 5."
		},
		coordinates: { x: 33.5, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointFivePopupKey'
	}), // 37
	'dont-come-point-six': createBetRule({
		title: "Don't Come Bet for Point 6",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 6."
		},
		coordinates: { x: 40.25, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointSixPopupKey'
	}), // 38
	'dont-come-point-eight': createBetRule({
		title: "Don't Come Bet for Point 8",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 8."
		},
		coordinates: { x: 47, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointEightPopupKey'
	}), // 39
	'dont-come-point-nine': createBetRule({
		title: "Don't Come Bet for Point 9",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 9."
		},
		coordinates: { x: 54, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointNinePopupKey'
	}), // 40
	'dont-come-point-ten': createBetRule({
		title: "Don't Come Bet for Point 10",
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			tookDownBet: "You took down your Don't Come Bet on the 10."
		},
		coordinates: { x: 61, y: 28 },
		chipDirection: 's' as keyof typeof directionOffsets,
		toggleKey: 'dontComePointTenPopupKey'
	}), // 41
	'dont-come-lay-odds-point-four': createBetRule({
		title: "Don't Come Lay Odds for Point 4",
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeFour = bets.find((bet) => bet.id.startsWith('dont-come-point-four'));
			const amount = dontComeFour ? dontComeFour.amount : 0;
			const odds = get(currentOddsOption);
			const point = 4;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-four'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeLayFour = bets.find((bet) => bet.id === 'dont-come-lay-odds-point-four');
				const amount = dontComeLayFour ? dontComeLayFour.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Come Bet on the 4.`;
			},
			tookDownBet: 'You took down your Lay Odds on the 4.',
			needMinBet: () =>
				`Minimum Lay Odds for the 4 is $${
					typeof betRules['dont-come-lay-odds-point-four'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-four'].minBet()
						: betRules['dont-come-lay-odds-point-four'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-four'].maxBet ===
				'function'
					? betRules['dont-come-lay-odds-point-four'].maxBet()
					: betRules['dont-come-lay-odds-point-four'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 4.`
		},
		coordinates: { x: 24.25, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointFourPopupKey'
	}), // 42
	'dont-come-lay-odds-point-five': createBetRule({
		title: "Don't Come Lay Odds for Point 5",
		minBet: 3,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeFive = bets.find((bet) => bet.id.startsWith('dont-come-point-five'));
			const amount = dontComeFive ? dontComeFive.amount : 0;
			const odds = get(currentOddsOption);
			const point = 5;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-five'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeLayFive = bets.find((bet) => bet.id === 'dont-come-lay-odds-point-five');
				const amount = dontComeLayFive ? dontComeLayFive.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Come Bet on the 5.`;
			},
			tookDownBet: 'You took down your Lay Odds on the 5.',
			needMinBet: () =>
				`Minimum Lay Odds for the 5 is $${
					typeof betRules['dont-come-lay-odds-point-five'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-five'].minBet()
						: betRules['dont-come-lay-odds-point-five'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-five'].maxBet ===
				'function'
					? betRules['dont-come-lay-odds-point-five'].maxBet()
					: betRules['dont-come-lay-odds-point-five'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 5.`
		},
		coordinates: { x: 31.25, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointFivePopupKey'
	}), // 43
	'dont-come-lay-odds-point-six': createBetRule({
		title: "Don't Come Lay Odds for Point 6",
		minBet: 6,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeSix = bets.find((bet) => bet.id.startsWith('dont-come-point-six'));
			const amount = dontComeSix ? dontComeSix.amount : 0;
			const odds = get(currentOddsOption);
			const point = 6;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-six'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeLaySix = bets.find((bet) => bet.id === 'dont-come-lay-odds-point-six');
				const amount = dontComeLaySix ? dontComeLaySix.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Come Bet on the 6.`;
			},
			tookDownBet: 'You took down your Lay Odds on the 6.',
			needMinBet: () =>
				`Minimum Lay Odds for the 6 is $${
					typeof betRules['dont-come-lay-odds-point-six'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-six'].minBet()
						: betRules['dont-come-lay-odds-point-six'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-six'].maxBet ===
				'function'
					? betRules['dont-come-lay-odds-point-six'].maxBet()
					: betRules['dont-come-lay-odds-point-six'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 6.`
		},
		coordinates: { x: 38.25, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointSixPopupKey'
	}), // 44
	'dont-come-lay-odds-point-eight': createBetRule({
		title: "Don't Come Lay Odds for Point 8",
		minBet: 6,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeEight = bets.find((bet) => bet.id.startsWith('dont-come-point-eight'));
			const amount = dontComeEight ? dontComeEight.amount : 0;
			const odds = get(currentOddsOption);
			const point = 8;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-eight'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeLayEight = bets.find((bet) => bet.id === 'dont-come-lay-odds-point-eight');
				const amount = dontComeLayEight ? dontComeLayEight.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Come Bet on the 8.`;
			},
			tookDownBet: 'You took down your Lay Odds on the 8.',
			needMinBet: () =>
				`Minimum Lay Odds for the 8 is $${
					typeof betRules['dont-come-lay-odds-point-eight'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-eight'].minBet()
						: betRules['dont-come-lay-odds-point-eight'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-eight']
					.maxBet === 'function'
					? betRules['dont-come-lay-odds-point-eight'].maxBet()
					: betRules['dont-come-lay-odds-point-eight'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 8.`
		},
		coordinates: { x: 45, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointEightPopupKey'
	}), // 45
	'dont-come-lay-odds-point-nine': createBetRule({
		title: "Don't Come Lay Odds for Point 9",
		minBet: 3,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeNine = bets.find((bet) => bet.id.startsWith('dont-come-point-nine'));
			const amount = dontComeNine ? dontComeNine.amount : 0;
			const odds = get(currentOddsOption);
			const point = 9;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-nine'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const dontComeLayNine = bets.find((bet) => bet.id === 'dont-come-lay-odds-point-nine');
				const amount = dontComeLayNine ? dontComeLayNine.amount : 0;
				return `You bet $${amount.toLocaleString()} Lay Odds for your Don't Come Bet on the 9.`;
			},
			tookDownBet: 'You took down your Lay Odds on the 9.',
			needMinBet: () =>
				`Minimum Lay Odds for the 9 is $${
					typeof betRules['dont-come-lay-odds-point-nine'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-nine'].minBet()
						: betRules['dont-come-lay-odds-point-nine'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-nine'].maxBet ===
				'function'
					? betRules['dont-come-lay-odds-point-nine'].maxBet()
					: betRules['dont-come-lay-odds-point-nine'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 9.`
		},
		coordinates: { x: 52, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointNinePopupKey'
	}), // 46
	'dont-come-lay-odds-point-ten': createBetRule({
		title: "Don't Come Lay Odds for Point 10",
		minBet: 2,
		maxBet: () => {
			const bets = get(playerBets);
			const dontComeTen = bets.find((bet) => bet.id.startsWith('dont-come-point-ten'));
			const amount = dontComeTen ? dontComeTen.amount : 0;
			const odds = get(currentOddsOption);
			const point = 10;
			return computeLayOddsMaxBet(amount, odds, point);
		},
		hasFlatBet: () => checkForFlatBet('dont-come-point-ten'),
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-ten')?.amount
				} Lay Odds for your Don't Come Bet on the 10.`,
			tookDownBet: 'You took down your Lay Odds on the 10.',
			needMinBet: () =>
				`Minimum Lay Odds for the 10 is $${
					typeof betRules['dont-come-lay-odds-point-ten'].minBet === 'function'
						? betRules['dont-come-lay-odds-point-ten'].minBet()
						: betRules['dont-come-lay-odds-point-ten'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Lay Odds of $${(typeof betRules['dont-come-lay-odds-point-ten'].maxBet ===
				'function'
					? betRules['dont-come-lay-odds-point-ten'].maxBet()
					: betRules['dont-come-lay-odds-point-ten'].maxBet
				).toLocaleString()} for your Don't Come Bet on the 10.`
		},
		coordinates: { x: 59, y: 26 },
		chipDirection: 'nw' as keyof typeof directionOffsets,
		toggleKey: 'dontComeLayOddsPointTenPopupKey'
	}), // 47
	'overlay-four': createBetRule({
		title: 'Overlay Bet for Point 4',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 4;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 4;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlayFourBet = bets.find((bet) => bet.id.startsWith('overlay-four'));
				const amount = overlayFourBet ? overlayFourBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 4.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 4.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-four'].minBet === 'function'
						? betRules['overlay-four'].minBet()
						: betRules['overlay-four'].minBet;
				return `Minimum Overlay bet for the 4 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-four'].maxBet === 'function'
						? betRules['overlay-four'].maxBet()
						: betRules['overlay-four'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 4.`;
			}
		},
		coordinates: { x: 28.5, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlayFourPopupKey'
	}), // 48
	'overlay-five': createBetRule({
		title: 'Overlay Bet for Point 5',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 5;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 5;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlayFiveBet = bets.find((bet) => bet.id.startsWith('overlay-five'));
				const amount = overlayFiveBet ? overlayFiveBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 5.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 5.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-five'].minBet === 'function'
						? betRules['overlay-five'].minBet()
						: betRules['overlay-five'].minBet;
				return `Minimum Overlay bet for the 5 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-five'].maxBet === 'function'
						? betRules['overlay-five'].maxBet()
						: betRules['overlay-five'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 5.`;
			}
		},
		coordinates: { x: 35.5, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlayFivePopupKey'
	}), // 49
	'overlay-six': createBetRule({
		title: 'Overlay Bet for Point 6',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 6;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 6;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlaySixBet = bets.find((bet) => bet.id.startsWith('overlay-six'));
				const amount = overlaySixBet ? overlaySixBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 6.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 6.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-six'].minBet === 'function'
						? betRules['overlay-six'].minBet()
						: betRules['overlay-six'].minBet;
				return `Minimum Overlay bet for the 6 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-six'].maxBet === 'function'
						? betRules['overlay-six'].maxBet()
						: betRules['overlay-six'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 6.`;
			}
		},
		coordinates: { x: 42.25, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlaySixPopupKey'
	}), // 50
	'overlay-eight': createBetRule({
		title: 'Overlay Bet for Point 8',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 8;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 8;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlayEightBet = bets.find((bet) => bet.id.startsWith('overlay-eight'));
				const amount = overlayEightBet ? overlayEightBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 8.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 8.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-eight'].minBet === 'function'
						? betRules['overlay-eight'].minBet()
						: betRules['overlay-eight'].minBet;
				return `Minimum Overlay bet for the 8 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-eight'].maxBet === 'function'
						? betRules['overlay-eight'].maxBet()
						: betRules['overlay-eight'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 8.`;
			}
		},
		coordinates: { x: 49, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlayEightPopupKey'
	}), // 51
	'overlay-nine': createBetRule({
		title: 'Overlay Bet for Point 9',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 9;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 9;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlayNineBet = bets.find((bet) => bet.id.startsWith('overlay-nine'));
				const amount = overlayNineBet ? overlayNineBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 9.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 9.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-nine'].minBet === 'function'
						? betRules['overlay-nine'].minBet()
						: betRules['overlay-nine'].minBet;
				return `Minimum Overlay bet for the 9 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-nine'].maxBet === 'function'
						? betRules['overlay-nine'].maxBet()
						: betRules['overlay-nine'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 9.`;
			}
		},
		coordinates: { x: 56, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlayNinePopupKey'
	}), // 52
	'overlay-ten': createBetRule({
		title: 'Overlay Bet for Point 10',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 10;
			const vig = get(currentVigUpFront);
			return computeOverlayMinBet(point, gameLimit, vig);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			const point = 10;
			const vig = get(currentVigUpFront);
			return computeOverlayMaxBet(point, gameLimit, vig);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const overlayTenBet = bets.find((bet) => bet.id.startsWith('overlay-ten'));
				const amount = overlayTenBet ? overlayTenBet.amount : 0;
				return `You made a $${amount.toLocaleString()} Overlay Bet on the 10.`;
			},
			tookDownBet: 'You took down your Overlay Bet on the 10.',
			needMinBet: () => {
				const minBet =
					typeof betRules['overlay-ten'].minBet === 'function'
						? betRules['overlay-ten'].minBet()
						: betRules['overlay-ten'].minBet;
				return `Minimum Overlay bet for the 10 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['overlay-ten'].maxBet === 'function'
						? betRules['overlay-ten'].maxBet()
						: betRules['overlay-ten'].maxBet;
				return `You bet the Max Overlay of $${maxBet.toLocaleString()} on the 10.`;
			}
		},
		coordinates: { x: 63, y: 26 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'overlayTenPopupKey'
	}), // 53
	'c-and-e-split': createBetRule({
		title: 'C & E Split',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('c-and-e-split', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('c-and-e-split	', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const cAndESplitBet = bets.find((bet) => bet.id === 'c-and-e-split');
				const amount = cAndESplitBet ? cAndESplitBet.amount : 0;
				return `You bet a $${amount.toLocaleString()} C & E Split.`;
			},
			tookDownBet: 'You took down your C & E Split.',
			needMinBet: () => {
				const minBet =
					typeof betRules['c-and-e-split'].minBet === 'function'
						? betRules['c-and-e-split'].minBet()
						: betRules['c-and-e-split'].minBet;
				return `Minimum bet on the C & E Split is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['c-and-e-split'].maxBet === 'function'
						? betRules['c-and-e-split'].maxBet()
						: betRules['c-and-e-split'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the C & E Split.`;
			}
		},
		coordinates: { x: 70.25, y: 71.75 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'cAndESplitPopupKey'
	}), // 54
	'world-bet': createBetRule({
		title: 'World Bet',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('world-bet', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('world-bet', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const worldBet = bets.find((bet) => bet.id === 'world-bet');
				const amount = worldBet ? worldBet.amount : 0;
				return `You bet a $${amount.toLocaleString()} World Bet.`;
			},
			tookDownBet: 'You took down your World Bet.',
			needMinBet: () => {
				const minBet =
					typeof betRules['world-bet'].minBet === 'function'
						? betRules['world-bet'].minBet()
						: betRules['world-bet'].minBet;
				return `Minimum bet on the World is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['world-bet'].maxBet === 'function'
						? betRules['world-bet'].maxBet()
						: betRules['world-bet'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the World.`;
			}
		},
		coordinates: { x: 69.5, y: 41 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'worldBetPopupKey'
	}), // 55
	'hard-four': createBetRule({
		title: 'Hard 4',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('hard-four', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('hard-four', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hardFour = bets.find((bet) => bet.id === 'hard-four');
				const amount = hardFour ? hardFour.amount : 0;
				return `You bet a $${amount.toLocaleString()} Hard 4.`;
			},
			tookDownBet: 'You took down your Hard 4.',
			needMinBet: () => {
				const minBet =
					typeof betRules['hard-four'].minBet === 'function'
						? betRules['hard-four'].minBet()
						: betRules['hard-four'].minBet;
				return `Minimum bet on the Hard 4 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['hard-four'].maxBet === 'function'
						? betRules['hard-four'].maxBet()
						: betRules['hard-four'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Hard 4.`;
			}
		},
		coordinates: { x: 76.75, y: 50 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hardFourPopupKey'
	}), // 56
	'hard-six': createBetRule({
		title: 'Hard 6',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('hard-six', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('hard-six', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hardSix = bets.find((bet) => bet.id === 'hard-six');
				const amount = hardSix ? hardSix.amount : 0;
				return `You bet a $${amount.toLocaleString()} Hard 6.`;
			},
			tookDownBet: 'You took down your Hard 6.',
			needMinBet: () => {
				const minBet =
					typeof betRules['hard-six'].minBet === 'function'
						? betRules['hard-six'].minBet()
						: betRules['hard-six'].minBet;
				return `Minimum bet on the Hard 6 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['hard-six'].maxBet === 'function'
						? betRules['hard-six'].maxBet()
						: betRules['hard-six'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Hard 6.`;
			}
		},
		coordinates: { x: 76.75, y: 42 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hardSixPopupKey'
	}), // 57
	'hard-eight': createBetRule({
		title: 'Hard 8',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('hard-eight', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('hard-eight', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hardEight = bets.find((bet) => bet.id === 'hard-eight');
				const amount = hardEight ? hardEight.amount : 0;
				return `You bet a $${amount.toLocaleString()} Hard 8.`;
			},
			tookDownBet: 'You took down your Hard 8.',
			needMinBet: () => {
				const minBet =
					typeof betRules['hard-eight'].minBet === 'function'
						? betRules['hard-eight'].minBet()
						: betRules['hard-eight'].minBet;
				return `Minimum bet on the Hard 8 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['hard-eight'].maxBet === 'function'
						? betRules['hard-eight'].maxBet()
						: betRules['hard-eight'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Hard 8.`;
			}
		},
		coordinates: { x: 89.25, y: 42 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hardEightPopupKey'
	}), // 58
	'hard-ten': createBetRule({
		title: 'Hard 10',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('hard-ten', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('hard-ten', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hardTen = bets.find((bet) => bet.id === 'hard-ten');
				const amount = hardTen ? hardTen.amount : 0;
				return `You bet a $${amount.toLocaleString()} Hard 10.`;
			},
			tookDownBet: 'You took down your Hard 10.',
			needMinBet: () => {
				const minBet =
					typeof betRules['hard-ten'].minBet === 'function'
						? betRules['hard-ten'].minBet()
						: betRules['hard-ten'].minBet;
				return `Minimum bet on the Hard 10 is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['hard-ten'].maxBet === 'function'
						? betRules['hard-ten'].maxBet()
						: betRules['hard-ten'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Hard 10.`;
			}
		},
		coordinates: { x: 89.25, y: 50 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hardTenPopupKey'
	}), // 59
	'any-seven': createBetRule({
		title: 'Any Seven',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('any-seven', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('any-seven', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const anySeven = bets.find((bet) => bet.id === 'any-seven');
				const amount = anySeven ? anySeven.amount : 0;
				return `You bet a $${amount.toLocaleString()} Any Seven.`;
			},
			tookDownBet: 'You took down your Any Seven.',
			needMinBet: () => {
				const minBet =
					typeof betRules['any-seven'].minBet === 'function'
						? betRules['any-seven'].minBet()
						: betRules['any-seven'].minBet;
				return `Minimum bet on the Any Seven is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['any-seven'].maxBet === 'function'
						? betRules['any-seven'].maxBet()
						: betRules['any-seven'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Any Seven.`;
			}
		},
		coordinates: { x: 82.75, y: 53.25 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'anySevenPopupKey'
	}), // 60
	'any-craps': createBetRule({
		title: 'Any Craps',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('any-craps', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('any-craps', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const anyCraps = bets.find((bet) => bet.id === 'any-craps');
				const amount = anyCraps ? anyCraps.amount : 0;
				return `You bet a $${amount.toLocaleString()} Any Craps.`;
			},
			tookDownBet: 'You took down your Any Craps.',
			needMinBet: () => {
				const minBet =
					typeof betRules['any-craps'].minBet === 'function'
						? betRules['any-craps'].minBet()
						: betRules['any-craps'].minBet;
				return `Minimum bet on the Any Craps is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['any-craps'].maxBet === 'function'
						? betRules['any-craps'].maxBet()
						: betRules['any-craps'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Any Craps.`;
			}
		},
		coordinates: { x: 82.75, y: 76.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'anyCrapsPopupKey'
	}), // 61
	'horn-bet': createBetRule({
		title: 'Horn',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('horn-bet', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('horn-bet', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const horn = bets.find((bet) => bet.id === 'horn-bet');
				const amount = horn ? horn.amount : 0;
				return `You bet a $${amount.toLocaleString()} Horn.`;
			},
			tookDownBet: 'You took down your Horn.',
			needMinBet: () => {
				const minBet =
					typeof betRules['horn-bet'].minBet === 'function'
						? betRules['horn-bet'].minBet()
						: betRules['horn-bet'].minBet;
				return `Minimum bet on the Horn is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['horn-bet'].maxBet === 'function'
						? betRules['horn-bet'].maxBet()
						: betRules['horn-bet'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Horn.`;
			}
		},
		coordinates: { x: 83.75, y: 70.75 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hornBetPopupKey'
	}), // 62
	'horn-high-aces': createBetRule({
		title: 'Horn High Aces',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('horn-high-aces', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('horn-high-aces', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hornHighAces = bets.find((bet) => bet.id === 'horn-high-aces');
				const amount = hornHighAces ? hornHighAces.amount : 0;
				return `You bet a $${amount.toLocaleString()} Horn High Aces.`;
			},
			tookDownBet: 'You took down your Horn High Aces.',
			needMinBet: () => {
				const minBet =
					typeof betRules['horn-high-aces'].minBet === 'function'
						? betRules['horn-high-aces'].minBet()
						: betRules['horn-high-aces'].minBet;
				return `Minimum bet on the Horn High Aces is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['horn-high-aces'].maxBet === 'function'
						? betRules['horn-high-aces'].maxBet()
						: betRules['horn-high-aces'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Horn High Aces.`;
			}
		},
		coordinates: { x: 87, y: 59.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hornHighAcesPopupKey'
	}), // 63
	'horn-high-ace-deuce': createBetRule({
		title: 'Horn High Ace Deuce',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('horn-high-ace-deuce', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('horn-high-ace-deuce', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hornHighAceDeuce = bets.find((bet) => bet.id === 'horn-high-ace-deuce');
				const amount = hornHighAceDeuce ? hornHighAceDeuce.amount : 0;
				return `You bet a $${amount.toLocaleString()} Horn High Ace Deuce.`;
			},
			tookDownBet: 'You took down your Horn High Ace Deuce.',
			needMinBet: () => {
				const minBet =
					typeof betRules['horn-high-ace-deuce'].minBet === 'function'
						? betRules['horn-high-ace-deuce'].minBet()
						: betRules['horn-high-ace-deuce'].minBet;
				return `Minimum bet on the Horn High Ace Deuce is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['horn-high-ace-deuce'].maxBet === 'function'
						? betRules['horn-high-ace-deuce'].maxBet()
						: betRules['horn-high-ace-deuce'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Horn High Ace Deuce.`;
			}
		},
		coordinates: { x: 80.75, y: 59.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hornHighAceDeucePopupKey'
	}), // 64
	'horn-high-yo': createBetRule({
		title: 'Horn High Yo',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('horn-high-yo', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('horn-high-yo', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hornHighYo = bets.find((bet) => bet.id === 'horn-high-yo');
				const amount = hornHighYo ? hornHighYo.amount : 0;
				return `You bet a $${amount.toLocaleString()} Horn High Yo.`;
			},
			tookDownBet: 'You took down your Horn High Yo.',
			needMinBet: () => {
				const minBet =
					typeof betRules['horn-high-yo'].minBet === 'function'
						? betRules['horn-high-yo'].minBet()
						: betRules['horn-high-yo'].minBet;
				return `Minimum bet on the Horn High Yo is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['horn-high-yo'].maxBet === 'function'
						? betRules['horn-high-yo'].maxBet()
						: betRules['horn-high-yo'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Horn High Yo.`;
			}
		},
		coordinates: { x: 74.25, y: 59.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hornHighYoPopupKey'
	}), // 65
	'horn-high-twelve': createBetRule({
		title: 'Horn High Twelve',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('horn-high-twelve', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('horn-high-twelve', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const hornHighTwelve = bets.find((bet) => bet.id === 'horn-high-twelve');
				const amount = hornHighTwelve ? hornHighTwelve.amount : 0;
				return `You bet a $${amount.toLocaleString()} Horn High Twelve.`;
			},
			tookDownBet: 'You took down your Horn High Twelve.',
			needMinBet: () => {
				const minBet =
					typeof betRules['horn-high-twelve'].minBet === 'function'
						? betRules['horn-high-twelve'].minBet()
						: betRules['horn-high-twelve'].minBet;
				return `Minimum bet on the Horn High Twelve is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['horn-high-twelve'].maxBet === 'function'
						? betRules['horn-high-twelve'].maxBet()
						: betRules['horn-high-twelve'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Horn High Twelve.`;
			}
		},
		coordinates: { x: 93.25, y: 59.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'hornHighTwelvePopupKey'
	}), // 66
	'straight-aces': createBetRule({
		title: 'Straight Aces',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('straight-aces', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('straight-aces', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const straightAces = bets.find((bet) => bet.id === 'straight-aces');
				const amount = straightAces ? straightAces.amount : 0;
				return `You bet a $${amount.toLocaleString()} Aces.`;
			},
			tookDownBet: 'You took down your Aces.',
			needMinBet: () => {
				const minBet =
					typeof betRules['straight-aces'].minBet === 'function'
						? betRules['straight-aces'].minBet()
						: betRules['straight-aces'].minBet;
				return `Minimum bet on Aces is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['straight-aces'].maxBet === 'function'
						? betRules['straight-aces'].maxBet()
						: betRules['straight-aces'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Aces.`;
			}
		},
		coordinates: { x: 75.25, y: 66 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'straightAcesPopupKey'
	}), // 67
	'straight-ace-deuce': createBetRule({
		title: 'Straight Ace Deuce',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('straight-ace-deuce', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('straight-ace-deuce', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const straightAceDeuce = bets.find((bet) => bet.id === 'straight-ace-deuce');
				const amount = straightAceDeuce ? straightAceDeuce.amount : 0;
				return `You bet a $${amount.toLocaleString()} Ace Deuce.`;
			},
			tookDownBet: 'You took down your Ace Deuce.',
			needMinBet: () => {
				const minBet =
					typeof betRules['straight-ace-deuce'].minBet === 'function'
						? betRules['straight-ace-deuce'].minBet()
						: betRules['straight-ace-deuce'].minBet;
				return `Minimum bet on Ace Deuce is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['straight-ace-deuce'].maxBet === 'function'
						? betRules['straight-ace-deuce'].maxBet()
						: betRules['straight-ace-deuce'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Ace Deuce.`;
			}
		},
		coordinates: { x: 75.25, y: 72.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'straightAceDeucePopupKey'
	}), // 68
	'straight-yo': createBetRule({
		title: 'Straight Yo',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('straight-yo', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('straight-yo', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const straightYo = bets.find((bet) => bet.id === 'straight-yo');
				const amount = straightYo ? straightYo.amount : 0;
				return `You bet a $${amount.toLocaleString()} Yo.`;
			},
			tookDownBet: 'You took down your Yo.',
			needMinBet: () => {
				const minBet =
					typeof betRules['straight-yo'].minBet === 'function'
						? betRules['straight-yo'].minBet()
						: betRules['straight-yo'].minBet;
				return `Minimum bet on Yo is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['straight-yo'].maxBet === 'function'
						? betRules['straight-yo'].maxBet()
						: betRules['straight-yo'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Yo.`;
			}
		},
		coordinates: { x: 92.25, y: 72.5 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'straightYoPopupKey'
	}), // 69
	'straight-twelve': createBetRule({
		title: 'Straight Twelve',
		minBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMin('straight-twelve', gameLimit);
		},
		maxBet: () => {
			const gameLimit = get(currentGameLimit);
			return getBetMax('straight-twelve', gameLimit);
		},
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const straightTwelve = bets.find((bet) => bet.id === 'straight-twelve');
				const amount = straightTwelve ? straightTwelve.amount : 0;
				return `You bet a $${amount.toLocaleString()} Twelve.`;
			},
			tookDownBet: 'You took down your Twelve.',
			needMinBet: () => {
				const minBet =
					typeof betRules['straight-twelve'].minBet === 'function'
						? betRules['straight-twelve'].minBet()
						: betRules['straight-twelve'].minBet;
				return `Minimum bet on Twelve is $${minBet}`;
			},
			betMaxBet: () => {
				const maxBet =
					typeof betRules['straight-twelve'].maxBet === 'function'
						? betRules['straight-twelve'].maxBet()
						: betRules['straight-twelve'].maxBet;
				return `You bet the Max Bet of $${maxBet.toLocaleString()} on the Twelve.`;
			}
		},
		coordinates: { x: 92.25, y: 66 },
		chipDirection: 'z' as keyof typeof directionOffsets,
		toggleKey: 'straightTwelvePopupKey'
	}) // 70
};

console.log('Exiting bet-objects.ts');
