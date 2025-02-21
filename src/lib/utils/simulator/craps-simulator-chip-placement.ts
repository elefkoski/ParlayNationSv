console.log('Entering craps-simulator-bet-placement.ts');

import type { PlayerBet } from '../userData';

export const directionOffsets = {
	n: { dx: 0, dy: -0.375 },
	ne: { dx: 0.375, dy: -0.375 },
	e: { dx: 0.375, dy: 0 },
	se: { dx: 0.375, dy: 0.375 },
	s: { dx: 0, dy: 0.375 },
	sw: { dx: -0.375, dy: 0.375 },
	w: { dx: -0.375, dy: 0 },
	nw: { dx: -0.375, dy: -0.375 }
};

export function calculateChipPlacement({
	amount,
	chipDirection
}: Pick<PlayerBet, 'amount' | 'chipDirection'>) {
	const num = amount.toString();
	const len = num.length;

	const onesDig = len >= 1 ? parseInt(num[len - 1]) : 0;
	const tensDig = len >= 2 ? parseInt(num[len - 2]) : 0;
	const hundredsDig = len >= 3 ? parseInt(num[len - 3]) : 0;
	const thousandsDig = len >= 4 ? parseInt(num[len - 4]) : 0;

	const isAtLeastTwoDigNum = len >= 2;
	const isAtLeastThreeDigNum = len >= 3;
	const isAtLeastFourDigNum = len >= 4;
	const theTwoDigNum = isAtLeastTwoDigNum ? parseInt(tensDig + '' + onesDig) : 0;

	const bannedRedNum = [25, 26, 27, 28, 29, 50, 51, 52, 53, 54, 75, 76, 77, 78, 79];
	const lowRedNum = [5, 6, 7, 8, 9];

	const hasGrayCheque = amount >= 5000;
	const hasOrangeCheque = isAtLeastFourDigNum && thousandsDig !== 0 && thousandsDig !== 5;
	const hasPurpleCheque = isAtLeastThreeDigNum && hundredsDig >= 5;
	const hasBlackCheque = isAtLeastThreeDigNum && hundredsDig !== 0 && hundredsDig !== 5;
	const hasGreenCheque = isAtLeastTwoDigNum && theTwoDigNum >= 25;
	const isBannedNum = bannedRedNum.includes(theTwoDigNum);
	const isLowNum = lowRedNum.includes(amount);
	const hasRedCheque = isLowNum || (theTwoDigNum >= 10 && !isBannedNum);
	const hasWhiteCheque = amount > 0 && onesDig !== 0 && onesDig !== 5;

	// Define cheque types with their conditions
	const chequeTypes = [
		{ type: 'Gray', condition: hasGrayCheque },
		{ type: 'Orange', condition: hasOrangeCheque },
		{ type: 'Purple', condition: hasPurpleCheque },
		{ type: 'Black', condition: hasBlackCheque },
		{ type: 'Green', condition: hasGreenCheque },
		{ type: 'Red', condition: hasRedCheque },
		{ type: 'White', condition: hasWhiteCheque }
	];

	// Filter to get only the cheques that are required
	const activeCheques = chequeTypes.filter((cheque) => cheque.condition);
	console.log('activeCheques:', activeCheques);

	const { dx, dy } = directionOffsets[chipDirection];
	console.log('dx:', dx, 'dy:', dy);

	let currentX = 1.375; // Initialize the current X position
	let currentY = 2.375; // Initialize the current Y position

	const placements = activeCheques.map((cheque, index) => {
		const placement = {
			type: cheque.type,
			x: currentX,
			y: currentY
		};

		// Update the next chip's position using direction and stack offset
		currentX += dx + (index > 0 ? 0.375 * dx : 0);
		currentY += dy + (index > 0 ? 0.375 * dy : 0);

		return placement;
	});

	console.log('placements:', placements);
	return placements;
}

console.log('Exiting craps-simulator-bet-placement.ts');
