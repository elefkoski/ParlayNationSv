console.log('Entering simulator-calculations.ts');

import { writable, derived } from 'svelte/store';
import { playerBets } from '../userData';

export const railTotal = writable(1026);

export const layoutTotal = derived(playerBets, ($playerBets) =>
	$playerBets.reduce((total, bet) => total + bet.amount, 0)
);

export const currentBankroll = derived(
	[railTotal, layoutTotal],
	([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);

const variableOddsOption = writable(345);
const variableGameLimit = writable(true);
const fixedGameLimit = writable(5);
const vigUpFront = writable(true);

export const currentGameLimit = derived(
	variableGameLimit,
	($variableGameLimit, set) => {
		if ($variableGameLimit) {
			const currentHour = new Date().getHours();
			let limit = 5;
			if (currentHour >= 2 && currentHour < 11) {
				limit = 5;
			} else if (currentHour >= 11 && currentHour < 18) {
				limit = 10;
			} else if (currentHour >= 18 && currentHour < 22) {
				limit = 15;
			} else {
				limit = 25;
			}
			set(limit);
		} else {
			// Use the fixed value if not variable
			fixedGameLimit.subscribe((value) => set(value));
		}
	},
	10 // default value
);
export const currentOddsOption = derived(
	variableOddsOption,
	($variableOddsOption) => $variableOddsOption
);
export const currentVigUpFront = derived(vigUpFront, ($vigUpFront) => $vigUpFront);

console.log('Exiting simulator-calculations.ts');
