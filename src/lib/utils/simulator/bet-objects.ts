console.log('Entering bet-objects.ts');

import { playerBets } from '../userData';
import { generatePlayerBetId } from '../userDataOperations';
import type { directionOffsets } from './craps-simulator-bet-placement';
import { railTotal } from './gameData';
import { takeChipsFromRail } from './craps-simulator-rail';

export const betObjects = {
	passLine: {
		id: 'pass-line',
		type: 'Pass Line',
		amount: 0,
		isWorking: true,
		isLockedIn: false,
		baseX: 40,
		baseY: 75.5,
		chipDirection: 'n'
	},
	dontPass: {
		id: 'dont-pass',
		type: "Don't Pass",
		amount: 0,
		isWorking: true,
		isLockedIn: false,
		baseX: 40,
		baseY: 69,
		chipDirection: 'n'
	}
};

function getDefaultBetData(type: string) {
	const defaults = {
		id: 'Bet Id',
		type: 'Bet Type',
		amount: 0,
		isWorking: true,
		isLockedIn: false,
		baseX: 0,
		baseY: 0,
		direction: 'n' as keyof typeof directionOffsets
	};

	switch (type) {
		case 'passLine':
			return { ...betObjects.passLine, direction: 'n' as keyof typeof directionOffsets };
		case 'dontPass':
			return { ...betObjects.dontPass, direction: 'n' as keyof typeof directionOffsets };
		default:
			return defaults;
	}
}

export function makeBet(betId: string, amount: number): void {
	const defaultBetData = getDefaultBetData(betId);
	console.log('defaultBetData:', defaultBetData);

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

console.log('Exiting bet-objects.ts');
