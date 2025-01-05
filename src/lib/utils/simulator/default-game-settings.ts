console.log('Entering default-game-settings.ts');

import { writable, derived } from 'svelte/store';

// Bankroll
export const railTotal = writable(0); // Rail Amount
export const layoutTotal = writable(0); // Layout Amount
export const totalBankroll = derived(
	[railTotal, layoutTotal],
	([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);

console.log('Exiting default-game-settings.ts');
