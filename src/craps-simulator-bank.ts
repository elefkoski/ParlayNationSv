import { derived, get, writable, type Writable } from 'svelte/store';

// Bankroll
export const railTotal: Writable<number> = writable(100519); // Rail Amount
export const layoutTotal: Writable<number> = writable(0); // Layout Amount
export const totalBankroll = derived(
	[railTotal, layoutTotal],
	([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);

// Function to add to the bankroll
function addToBankroll(addAmount: number): void {
	console.log('addToBankroll called with amount:', addAmount);
	railTotal.update((current) => {
		const newBankroll = current + addAmount;
		console.log('New bankroll value:', newBankroll);
		return newBankroll;
	});
}
// Function to subtract from the bankroll
function subtractFromBankroll(subtractAmount: number): void {
	console.log('subtractFromBankroll called with amount:', subtractAmount);
	railTotal.update((current) => {
		console.log('Current bankroll value:', current);
		const newBankroll = current - subtractAmount;
		console.log('New bankroll value:', newBankroll);
		return newBankroll;
	});
}

// Helper function to display chip counts and their total values
function displayChipCounts(): void {
	const chipCounts = Object.entries(chips).map(([denomination, store]) => {
		const count = (get(store) as string[]).length;
		const totalValue = count * Number(denomination);
		return { denomination: Number(denomination), count, totalValue };
	});

	chipCounts.forEach(({ denomination, count, totalValue }) => {
		console.log(`Denomination: $${denomination}, Count: ${count}, Total Value: $${totalValue}`);
	});
	const totalChipCount = chipCounts.reduce((acc, { count }) => acc + count, 0);
	console.log(`Total number of chips: ${totalChipCount}`);
	const totalValue = chipCounts.reduce((acc, { totalValue }) => acc + totalValue, 0);
	console.log(`Total Value of all chips: $${totalValue}`);
}
export function addToBankAndRail(amount: number): void {
	console.log('addToBankAndRail called with amount:', amount);
	addToRail(amount);
	addToBankroll(amount);
	displayChipCounts();
}

export function takeFromBankAndRail(amount: number): void {
	console.log('takeFundsFromBankrollAndChipsFromRail called with amount:', amount);
	if (amount > get(railTotal)) {
		console.error('Error: Amount exceeds rail total.');
		return;
	}
	takeFromRail(amount);
	subtractFromBankroll(amount);
	displayChipCounts();
}

interface ChipsStore {
	[denomination: number]: Writable<string[]>; // Denomination of chip images
}
export const chips: ChipsStore = {
	1: writable<string[]>([]), // $1 chips
	5: writable<string[]>([]), // $5 chips
	25: writable<string[]>([]), // $25 chips
	100: writable<string[]>([]), // $100 chips
	500: writable<string[]>([]), // $500 chips
	1000: writable<string[]>([]), // $1000 chips
	5000: writable<string[]>([]) // $5000 chips
};

// Generate a random chip image path based on denomination
function getRandomChip(denomination: number): string {
	const randomNumber: number = Math.floor(Math.random() * 12) + 1;
	return `src/images/craps-simulator/chips/${denomination}_chip_${randomNumber}.jpg`;
}

// Optimum bankroll ranges and corresponding chip distributions
interface OptimumAddRange {
	min: number;
	max: number;
	dollars?: number | undefined;
	nickels?: number | undefined;
	quarters?: number | undefined;
	hundreds?: number | undefined;
	fiveHundreds?: number | undefined;
	thousands?: number | undefined;
	fiveThousands?: number | undefined;
}
interface OptimumTakeRange {
	min: number;
	max: number;
	dollars?: number | undefined;
	nickels?: number | undefined;
	quarters?: number | undefined;
	hundreds?: number | undefined;
	fiveHundreds?: number | undefined;
	thousands?: number | undefined;
	fiveThousands?: number | undefined;
}
const optimumAddRanges: Readonly<OptimumAddRange[]> = [
	{
		min: 0,
		max: 124,
		dollars: 10,
		nickels: 20,
		quarters: 4,
		hundreds: 2,
		fiveHundreds: 2,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 125,
		max: 299,
		dollars: 10,
		nickels: 20,
		quarters: 6,
		hundreds: 2,
		fiveHundreds: 2,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 300,
		max: 699,
		dollars: 10,
		nickels: 20,
		quarters: 16,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 700,
		max: 999,
		dollars: 10,
		nickels: 20,
		quarters: 16,
		hundreds: 4,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 1000,
		max: 5999,
		dollars: 5,
		nickels: 15,
		quarters: 15,
		hundreds: 15,
		fiveHundreds: 10,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 6000,
		max: 9999,
		dollars: 5,
		nickels: 10,
		quarters: 10,
		hundreds: 10,
		fiveHundreds: 4,
		thousands: 5,
		fiveThousands: 0
	},
	{
		min: 10000,
		max: 24999,
		dollars: 5,
		nickels: 5,
		quarters: 8,
		hundreds: 10,
		fiveHundreds: 10,
		thousands: 15,
		fiveThousands: 2
	},
	{
		min: 25000,
		max: 49999,
		dollars: 5,
		nickels: 10,
		quarters: 8,
		hundreds: 10,
		fiveHundreds: 10,
		thousands: 20,
		fiveThousands: 2
	},
	{
		min: 50000,
		max: 999999,
		dollars: 5,
		nickels: 10,
		quarters: 8,
		hundreds: 10,
		fiveHundreds: 15,
		thousands: 20,
		fiveThousands: 50
	}
];
const optimumTakeRanges: Readonly<OptimumTakeRange[]> = [
	{
		min: 0,
		max: 199,
		dollars: 5,
		nickels: 5,
		quarters: 4,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 200,
		max: 499,
		dollars: 5,
		nickels: 10,
		quarters: 10,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 500,
		max: 999,
		dollars: 5,
		nickels: 10,
		quarters: 20,
		hundreds: 3,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 1000,
		max: 5999,
		dollars: 0,
		nickels: 10,
		quarters: 20,
		hundreds: 10,
		fiveHundreds: 4,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 6000,
		max: 9999,
		dollars: 0,
		nickels: 0,
		quarters: 10,
		hundreds: 20,
		fiveHundreds: 10,
		thousands: 2,
		fiveThousands: 0
	},
	{
		min: 10000,
		max: 24999,
		dollars: 0,
		nickels: 0,
		quarters: 8,
		hundreds: 10,
		fiveHundreds: 10,
		thousands: 5,
		fiveThousands: 0
	},
	{
		min: 25000,
		max: 49999,
		dollars: 0,
		nickels: 0,
		quarters: 8,
		hundreds: 10,
		fiveHundreds: 10,
		thousands: 20,
		fiveThousands: 2
	},
	{
		min: 50000,
		max: 999999,
		dollars: 0,
		nickels: 0,
		quarters: 0,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 50,
		fiveThousands: 190
	}
];
// Get the current optimum ranges for the bankroll
function getOptimumAddRange(): OptimumAddRange | undefined {
	let currentBankroll: number = get(totalBankroll);
	return optimumAddRanges.find(
		(range) => currentBankroll >= range.min && currentBankroll <= range.max
	);
}
function getOptimumTakeRange(): OptimumTakeRange | undefined {
	let currentRail: number = get(railTotal);
	return optimumTakeRanges.find((range) => currentRail >= range.min && currentRail <= range.max);
}

// Helper function to calculate deficits or surpluses
function calculateChipValues(
	range: OptimumAddRange | OptimumTakeRange,
	currentChips: ChipsStore,
	isDeficit: boolean
): { denom: number; count: number }[] {
	const chipValues = [
		{ denom: 1, count: (range.dollars ?? 0) - get(currentChips[1]).length },
		{ denom: 5, count: (range.nickels ?? 0) - get(currentChips[5]).length },
		{ denom: 25, count: (range.quarters ?? 0) - get(currentChips[25]).length },
		{ denom: 100, count: (range.hundreds ?? 0) - get(currentChips[100]).length },
		{ denom: 500, count: (range.fiveHundreds ?? 0) - get(currentChips[500]).length },
		{ denom: 1000, count: (range.thousands ?? 0) - get(currentChips[1000]).length },
		{ denom: 5000, count: (range.fiveThousands ?? 0) - get(currentChips[5000]).length }
	];

	return chipValues.map(({ denom, count }) => ({
		denom,
		count: isDeficit ? Math.max(count, 0) : Math.max(-count, 0)
	}));
}
// Helper function to sort chip values based on custom order
function sortChipValues(
	values: { denom: number; count: number }[],
	customOrder: number[],
	ascending: boolean = true
): { denom: number; count: number }[] {
	return values.sort((a, b) => {
		const indexA = customOrder.indexOf(a.denom);
		const indexB = customOrder.indexOf(b.denom);
		return ascending ? indexA - indexB : indexB - indexA;
	});
}
// Helper function to adjust chips using addChips or removeChips
function applyChipOperation(
	values: { denom: number; count: number }[],
	remainingAmount: number,
	operation: 'add' | 'remove'
): number {
	for (let { denom, count } of values) {
		if (remainingAmount <= 0 || count <= 0) continue;

		const chipsToOperate = Math.min(Math.floor(remainingAmount / denom), count);
		console.log(
			`${
				operation === 'add' ? 'Adding' : 'Taking'
			} ${chipsToOperate} chips of denomination ${denom}`
		);

		if (operation === 'add') {
			addChips(denom, chipsToOperate);
		} else {
			removeChips(denom, chipsToOperate);
		}
		remainingAmount -= chipsToOperate * denom;
	}
	return remainingAmount;
}

// Helper function to calculate required chips for a given amount
function calculateRequiredChips(amount: number): { denom: number; count: number }[] {
	const denominations = [5000, 1000, 500, 100, 25, 5, 1];
	const requiredChips: { denom: number; count: number }[] = [];

	for (let denom of denominations) {
		const count = Math.floor(amount / denom);
		if (count > 0) {
			requiredChips.push({ denom, count });
			amount -= count * denom;
		}
	}

	return requiredChips;
}

// Helper function to break larger chip into smaller denominations
function breakChip(largerDenom: number, targetDenom: number): void {
	const denominations = [5000, 1000, 500, 100, 25, 5, 1].filter((d) => d < largerDenom);
	let valueToBreak = largerDenom;

	// Remove the larger chip
	chips[largerDenom].update((current) => {
		if (current.length === 0) {
			console.error(`No chips of denomination ${largerDenom} available to break.`);
			return current;
		}
		current.pop();
		return current;
	});

	console.log(
		`Breaking ${largerDenom} chip into smaller denominations to fulfill ${targetDenom} requirements`
	);

	// Add smaller chips equivalent to the larger denomination's value
	for (let denom of denominations) {
		const numOfSmallerChips = Math.floor(valueToBreak / denom);
		if (numOfSmallerChips > 0) {
			addChips(denom, numOfSmallerChips);
			valueToBreak -= numOfSmallerChips * denom;
		}

		if (valueToBreak === 0) break;
	}

	if (valueToBreak > 0) {
		console.error(`Error: Unable to break ${largerDenom} completely into smaller denominations.`);
	}
}

function addToRail(amount: number): void {
	console.log('addToRail called with amount:', amount);
	const range = getOptimumAddRange();
	if (!range) return;

	let remainingAmount = amount;

	// Calculate deficit values
	let deficitValues = calculateChipValues(range, chips, true);
	deficitValues = sortChipValues(deficitValues, [5, 25, 1, 100, 500, 1000, 5000]);

	// Apply deficit operations
	remainingAmount = applyChipOperation(deficitValues, remainingAmount, 'add');

	// Distribute remaining funds optimally
	const optimalOrder = [5000, 1000, 500, 100, 25, 5, 1];
	let optimalValues = optimalOrder.map((denom) => ({ denom, count: Infinity }));
	remainingAmount = applyChipOperation(optimalValues, remainingAmount, 'add');
}

function takeFromRail(amount: number): void {
	console.log('takeFromRail called with amount:', amount);
	let remainingAmount = amount;

	// Define chip denominations from smallest to largest
	const denominations = [1, 5, 25, 100, 500, 1000, 5000];

	// Step 1: Use excess chips first if any denomination exceeds optimum
	const optimumTakeRange = getOptimumTakeRange();
	console.log('Optimum take range:', optimumTakeRange);

	for (let denom of denominations) {
		const maxAllowed = optimumTakeRange ? (optimumTakeRange[denomToKey(denom)] || 0) + 10 : 10;
		const availableChips = get(chips[denom]).length;

		if (availableChips > maxAllowed) {
			const excessChips = availableChips - maxAllowed;
			const chipsToUse = Math.min(excessChips, Math.floor(remainingAmount / denom));
			if (chipsToUse > 0) {
				removeChips(denom, chipsToUse);
				remainingAmount -= chipsToUse * denom;
				console.log(
					`Used ${chipsToUse} excess chips of denomination ${denom}. Remaining amount: ${remainingAmount}`
				);
			}
		}
	}

	// Step 2: Calculate required chips and attempt to fulfill using available denominations
	let requiredChips = calculateRequiredChips(remainingAmount);
	console.log('Required chips:', requiredChips);

	for (let { denom, count } of requiredChips) {
		if (remainingAmount <= 0) break;

		for (let i = 0; i < count; i++) {
			let availableChips = get(chips[denom]).length;

			if (availableChips > 0) {
				// Pop a chip if available
				removeChips(denom, 1);
				remainingAmount -= denom;
				console.log(`Popped 1 chip of denomination ${denom}. Remaining amount: ${remainingAmount}`);
			} else {
				// If no chip of this denomination, go up to the next larger chip
				const largerDenom = denominations.find((d) => d > denom && get(chips[d]).length > 0);
				if (largerDenom) {
					console.log(`Breaking larger chip of denomination ${largerDenom} to cover ${denom}`);
					breakChip(largerDenom, denom); // Custom function to break larger chip into smaller ones
					i--; // Retry the current count after breaking
				} else {
					console.warn(`No larger chips available to cover denomination ${denom}`);
					// If no larger chips available, try to cover using smaller denominations
					// If no larger chips available, try to cover using smaller denominations
					let smallerDenominations = denominations.filter((d) => d < denom).reverse();
					for (let smallerDenom of smallerDenominations) {
						const smallerAvailable = get(chips[smallerDenom]).length;
						if (smallerAvailable > 0) {
							// Calculate the number of smaller chips required to fulfill the value of `denom`
							const neededCount = Math.ceil(remainingAmount / smallerDenom);
							const toTake = Math.min(smallerAvailable, neededCount);
							if (toTake > 0) {
								removeChips(smallerDenom, toTake);
								remainingAmount -= toTake * smallerDenom;
								console.log(
									`Used ${toTake} chips of smaller denomination ${smallerDenom}. Remaining amount: ${remainingAmount}`
								);
							}
							if (remainingAmount <= 0) break;
						}
					}
					break; // No larger chips available; exit the loop
				}
			}
		}
	}

	// Final check to ensure no negative remaining amounts
	if (remainingAmount > 0) {
		console.error(`Warning: Could not completely fulfill the remaining amount: ${remainingAmount}`);
	}

	console.log('Final remaining amount:', remainingAmount);
}

// Helper function to convert denomination to key
function denomToKey(denom: number): keyof OptimumTakeRange {
	switch (denom) {
		case 1:
			return 'dollars';
		case 5:
			return 'nickels';
		case 25:
			return 'quarters';
		case 100:
			return 'hundreds';
		case 500:
			return 'fiveHundreds';
		case 1000:
			return 'thousands';
		case 5000:
			return 'fiveThousands';
		default:
			throw new Error(`Unknown denomination: ${denom}`);
	}
}

// Add chips to the appropriate stack -- from addToRail
function addChips(denomination: number, count: number): void {
	console.log(`addChips called with denomination: ${denomination}, count: ${count}`);
	chips[denomination].update((current) => {
		const newChips = [...current];
		for (let i = 0; i < count; i++) {
			newChips.push(getRandomChip(denomination));
		}
		console.log(`New chips array for denomination ${denomination}:`, newChips);
		return newChips;
	});
	console.log(`Added ${count} chips of denomination ${denomination}`);
}
function removeChips(denomination: number, count: number): void {
	console.log(`removeChips called with denomination: ${denomination}, count: ${count}`);
	chips[denomination].update((current) => {
		const newChips = [...current];
		for (let i = 0; i < count; i++) {
			newChips.pop();
		}
		console.log(`New chips array for denomination ${denomination}:`, newChips);
		return newChips;
	});
	console.log(`Removed ${count} chips of denomination ${denomination}`);
}

// Distribute chips at start
addToRail(get(railTotal));
displayChipCounts();
console.log('Rail Total: ', get(railTotal));
console.log('Layout Total: ', get(layoutTotal));
console.log('Total Bankroll: ', get(totalBankroll));
