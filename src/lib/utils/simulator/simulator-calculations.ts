console.log('Entering simulator-calculations.ts');

import { writable, derived } from 'svelte/store';

// Bankroll
export const railTotal = writable(0); // Rail Amount
export const layoutTotal = writable(0); // Layout Amount
export const totalBankroll = derived(
	[railTotal, layoutTotal],
	([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);

console.log('Exiting simulator-calculations.ts');
