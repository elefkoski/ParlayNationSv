console.log('Entering bet-objects.ts');

import { get } from 'svelte/store';
import { playerBets } from '../userData';
import { currentGameLimit, currentOddsOption, railTotal } from './craps-simulator-game-data';
import { currentPoint } from './craps-simulator-game';
import { generatePlayerBetId } from '../userDataOperations';
import { directionOffsets } from './craps-simulator-chip-placement';
import { takeChipsFromRail } from './craps-simulator-rail';
import { type BetRule, createBetRule } from './bet-rules';

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
function computePlaceMinBet(point: number, currentGameLimit: number): number {
	if ([5, 10, 15].includes(currentGameLimit)) {
		if (point === 4 || point === 5 || point === 9 || point === 10) {
			return currentGameLimit;
		} else if (point === 6 || point === 8) {
			return (currentGameLimit / 5) * 6;
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
function computePlaceMaxBet(point: number, currentGameLimit: number): number {
	if ([5, 10, 15].includes(currentGameLimit)) {
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

function checkForFlatBet(requiredBetPrefix: string): boolean {
	const bets = get(playerBets);
	return bets.some((bet) => bet.id.startsWith(requiredBetPrefix));
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
				return `You made a $${amount} bet on the Pass Line.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You bet $${amount} Odds for your Pass Line bet.`;
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
				return `You made a $${amount} bet on the Don't Pass.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
				return `You bet $${amount} Lay Odds for your Don't Pass bet.`;
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
	'the-field': createBetRule({
		title: 'The Field',
		isWorking: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isMovable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		isBetable: { duringComeoutRoll: true, duringIntermediateRoll: true },
		alert: {
			madeBet: () => {
				const bets = get(playerBets);
				const fieldBet = bets.find((bet) => bet.id.startsWith('the-field'));
				const amount = fieldBet ? fieldBet.amount : 0;
				return `You made a $${amount} bet on The Field.`;
			},
			tookDownBet: 'You took down your bet on The Field.',
			needMinBet: () =>
				`Minimum bet on The Field is $${
					typeof betRules['the-field'].minBet === 'function'
						? betRules['the-field'].minBet()
						: betRules['the-field'].minBet
				}`,
			betMaxBet: () =>
				`You bet the Max Bet of $${
					typeof betRules['the-field'].maxBet === 'function'
						? betRules['the-field'].maxBet()
						: betRules['the-field'].maxBet
				} on The Field.`,
			canNotTurnOff: 'You cannot turn off The Field bet. You must pick up your bet.'
		},
		coordinates: { x: 40, y: 60.5 },
		toggleKey: 'theFieldPopupKey'
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
				return `You made a $${amount} bet in the COME.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You bet $${amount} Odds for your Come Bet.`;
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
				return `You made a $${amount} Place Bet on the 4.`;
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
				return `You made a $${amount} Place Bet on the 5.`;
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
				return `You made a $${amount} Place Bet on the 6.`;
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
				return `You made a $${amount} Place Bet on the 8.`;
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
				return `You made a $${amount} Place Bet on the 9.`;
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
				return `You made a $${amount} Place Bet on the 10.`;
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
			madeBet: () =>
				`You made a $${
					get(playerBets).find((bet) => bet.id === 'dont-come-bet')?.amount
				} Don't Come Bet.`,
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
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-four')?.amount
				} Lay Odds for your Don't Come Bet on the 4.`,
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
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-five')?.amount
				} Lay Odds for your Don't Come Bet on the 5.`,
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
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-six')?.amount
				} Lay Odds for your Don't Come Bet on the 6.`,
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
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-eight')?.amount
				} Lay Odds for your Don't Come Bet on the 8.`,
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
			madeBet: () =>
				`You bet $${
					get(playerBets).find((bet) => bet.id === 'dont-come-lay-odds-point-nine')?.amount
				} Lay Odds for your Don't Come Bet on the 9.`,
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
	}) // 47
};

console.log('Exiting bet-objects.ts');
