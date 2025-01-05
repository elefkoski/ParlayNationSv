console.log('Entering bet-objects.ts');

import { playerBets, generateBetId } from '../userData';
import type { PlayerBet } from '../userData';
import type { directionOffsets } from './craps-simulator-bet-placement';

export const betObjects = {
	passLine: {
		name: 'Pass Line',
		id: 'pass-line',
		betCoordinates: { baseX: 40, baseY: 75.5 },
		chipDirection: 'n',
		isWorking: true,
		isLockedIn: false
	},
	dontPass: {
		name: "Don't Pass",
		id: 'dont-pass',
		betCoordinates: { baseX: 40, baseY: 69 },
		chipDirection: 'n',
		isWorking: true,
		isLockedIn: false
	}
};

export function placeBet(
	betId: string,
	amount: number,
	options: Partial<Omit<PlayerBet, 'betId' | 'type' | 'amount'>> = {}
) {
	const bet = betObjects[betId as keyof typeof betObjects];
	if (!bet) throw new Error(`Invalid betId: ${betId}`);

	// Merge options with defaults
	const betData: PlayerBet = {
		betId: generateBetId(bet.id, amount),
		type: bet.name,
		amount,
		isWorking: options.isWorking ?? bet.isWorking,
		isLockedIn: options.isLockedIn ?? bet.isLockedIn,
		baseX: options.baseX ?? bet.betCoordinates.baseX,
		baseY: options.baseY ?? bet.betCoordinates.baseY,
		direction:
			(options.direction as keyof typeof directionOffsets) ??
			(bet.chipDirection as keyof typeof directionOffsets)
	};

	playerBets.update((bets) => [...bets, betData]);
	console.log('Placed bet:', betData);
}

console.log('Exiting bet-objects.ts');
