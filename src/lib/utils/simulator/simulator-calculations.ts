console.log('Entering simulator-calculations.ts');

import { writable, derived } from 'svelte/store';
import { playerBets } from '../userData';

export const railTotal = writable(6);

export const layoutTotal = derived(playerBets, ($playerBets) =>
	$playerBets.reduce((total, bet) => total + bet.amount, 0)
);

export const totalBankroll = derived(
	[railTotal, layoutTotal],
	([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);

console.log('Exiting simulator-calculations.ts');
