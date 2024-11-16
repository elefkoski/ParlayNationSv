import { get, writable, type Writable } from 'svelte/store';

// Bankroll and chip stores
export const totalBankroll = writable(); // Total Bankroll
export const railTotal = writable(900); // Rail Amount
export const layoutTotal = writable(0); // Layout Amount

// Function to add to the bankroll
export function addToBankroll(addAmount: number) {
	console.log('addToBankroll called with amount:', addAmount);
	totalBankroll.update((current) => {
		const newBankroll = current + addAmount;
		console.log('New bankroll value:', newBankroll);
		addToRail(addAmount); // Add to rail
		return newBankroll;
	});
}

// Function to subtract from the bankroll
export function subtractFromBankroll(subtractAmount: number) {
	console.log('subtractFromBankroll called with amount:', subtractAmount);
	totalBankroll.update((current) => {
		const newBankroll = current - subtractAmount;
		console.log('New bankroll value:', newBankroll);
		takeFromRail(subtractAmount); // Take from rail and put on layout
		return newBankroll;
	});
}

interface ChipsStore {
	[key: number]: Writable<string[]>;
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
	dollars?: number;
	nickels?: number;
	quarters?: number;
	hundreds?: number;
	fiveHundreds?: number;
	thousands?: number;
	fiveThousands?: number;
}
interface OptimumTakeRange {
	min: number;
	max: number;
	dollars?: number;
	nickels?: number;
	quarters?: number;
	hundreds?: number;
	fiveHundreds?: number;
	thousands?: number;
	fiveThousands?: number;
}

const optimumAddRanges: OptimumAddRange[] = [
	{
		min: 0,
		max: 124,
		dollars: 10,
		nickels: 20,
		quarters: 0,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 125,
		max: 299,
		dollars: 10,
		nickels: 20,
		quarters: 6,
		hundreds: 0,
		fiveHundreds: 0,
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
		dollars: 10,
		nickels: 20,
		quarters: 20,
		hundreds: 15,
		fiveHundreds: 10,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 6000,
		max: 9999,
		dollars: 10,
		nickels: 20,
		quarters: 20,
		hundreds: 15,
		fiveHundreds: 10,
		thousands: 3,
		fiveThousands: 0
	},
	{
		min: 10000,
		max: 24999,
		dollars: 5,
		nickels: 10,
		quarters: 12,
		hundreds: 20,
		fiveHundreds: 15,
		thousands: 5,
		fiveThousands: 0
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
const optimumTakeRanges: OptimumTakeRange[] = [
	{
		min: 0,
		max: 124,
		dollars: 10,
		nickels: 20,
		quarters: 0,
		hundreds: 0,
		fiveHundreds: 0,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 125,
		max: 299,
		dollars: 10,
		nickels: 20,
		quarters: 6,
		hundreds: 0,
		fiveHundreds: 0,
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
		dollars: 10,
		nickels: 20,
		quarters: 20,
		hundreds: 15,
		fiveHundreds: 10,
		thousands: 0,
		fiveThousands: 0
	},
	{
		min: 6000,
		max: 9999,
		dollars: 10,
		nickels: 20,
		quarters: 20,
		hundreds: 15,
		fiveHundreds: 10,
		thousands: 3,
		fiveThousands: 0
	},
	{
		min: 10000,
		max: 24999,
		dollars: 5,
		nickels: 10,
		quarters: 12,
		hundreds: 20,
		fiveHundreds: 15,
		thousands: 5,
		fiveThousands: 0
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
	}
];

// Get the current optimum ranges for the bankroll
function getOptimumAddRange(): OptimumAddRange | undefined {
	let currentBankroll: number;
	totalBankroll.subscribe((value) => (currentBankroll = value))();
	return optimumAddRanges.find(
		(range) => currentBankroll >= range.min && currentBankroll <= range.max
	);
}
function getOptimumTakeRange(): OptimumTakeRange | undefined {
	let currentRail: number;
	railTotal.subscribe((value) => (currentRail = value))();
	return optimumTakeRanges.find((range) => currentRail >= range.min && currentRail <= range.max);
}

// Calculate the deficit for each denomination
interface Deficit {
	dollars?: number;
	nickels?: number;
	quarters?: number;
	hundreds?: number;
	fiveHundreds?: number;
	thousands?: number;
	fiveThousands?: number;
}

// Calculate the surplus for each denomination
interface Surplus {
	dollars?: number;
	nickels?: number;
	quarters?: number;
	hundreds?: number;
	fiveHundreds?: number;
	thousands?: number;
	fiveThousands?: number;
}

function calculateAddDeficit(): Deficit {
	const range = getOptimumAddRange();
	if (!range)
		return {
			dollars: 0,
			nickels: 0,
			quarters: 0,
			hundreds: 0,
			fiveHundreds: 0,
			thousands: 0,
			fiveThousands: 0
		};

	return {
		dollars: range.dollars - get(chips[1]).length,
		nickels: range.nickels - get(chips[5]).length,
		quarters: range.quarters - get(chips[25]).length,
		hundreds: range.hundreds - get(chips[100]).length,
		fiveHundreds: range.fiveHundreds - get(chips[500]).length,
		thousands: range.thousands - get(chips[1000]).length,
		fiveThousands: range.fiveThousands - get(chips[5000]).length
	};
}
function calculateTakeSurplus(): Surplus {
	const range = getOptimumTakeRange();
	if (!range)
		return {
			dollars: 0,
			nickels: 0,
			quarters: 0,
			hundreds: 0,
			fiveHundreds: 0,
			thousands: 0,
			fiveThousands: 0
		};

	return {
		dollars: range.dollars - get(chips[1]).length,
		nickels: range.nickels - get(chips[5]).length,
		quarters: range.quarters - get(chips[25]).length,
		hundreds: range.hundreds - get(chips[100]).length,
		fiveHundreds: range.fiveHundreds - get(chips[500]).length,
		thousands: range.thousands - get(chips[1000]).length,
		fiveThousands: range.fiveThousands - get(chips[5000]).length
	};
}

// Distribute chips based on deficit and optimize distribution
function addToRail(amount: number): void {
	console.log('addToRail called with amount:', amount);
	const deficit = calculateAddDeficit();
	console.log('Calculated deficit:', deficit);
	let remainingAmount = amount;

	// Deficit calculation per denomination in terms of dollars
	const deficitValues = [
		{ denom: 1, deficit: deficit.dollars * 1, count: deficit.dollars },
		{ denom: 5, deficit: deficit.nickels * 5, count: deficit.nickels },
		{ denom: 25, deficit: deficit.quarters * 25, count: deficit.quarters },
		{ denom: 100, deficit: deficit.hundreds * 100, count: deficit.hundreds },
		{ denom: 500, deficit: deficit.fiveHundreds * 500, count: deficit.fiveHundreds },
		{ denom: 1000, deficit: deficit.thousands * 1000, count: deficit.thousands },
		{ denom: 5000, deficit: deficit.fiveThousands * 5000, count: deficit.fiveThousands }
	];

	// Sort deficits by custom order: Nickels, Quarters, Dollars, Hundreds, Five Hundreds, Thousands, Five Thousands
	const customOrder = [5, 25, 1, 100, 500, 1000, 5000];
	deficitValues.sort((a, b) => customOrder.indexOf(a.denom) - customOrder.indexOf(b.denom));
	console.log('Sorted deficit values:', deficitValues);

	// Fulfill deficits
	for (let { denom, count } of deficitValues) {
		if (remainingAmount <= 0 || count <= 0) continue;

		const value = denom;
		const chipsToAdd = Math.min(Math.floor(remainingAmount / value), count);
		console.log(`Adding ${chipsToAdd} chips of denomination ${denom}`);
		addChips(denom, chipsToAdd);
		remainingAmount -= chipsToAdd * value;
	}

	// Distribute remaining funds optimally
	const denominations = [
		{ denom: 5000, value: 5000 },
		{ denom: 1000, value: 1000 },
		{ denom: 500, value: 500 },
		{ denom: 100, value: 100 },
		{ denom: 25, value: 25 },
		{ denom: 5, value: 5 },
		{ denom: 1, value: 1 }
	];

	for (let { denom, value } of denominations) {
		while (remainingAmount >= value) {
			console.log(`Adding 1 chip of denomination ${denom}`);
			addChips(denom, 1);
			remainingAmount -= value;
		}
	}
}
function takeFromRail(amount: number): void {
	console.log('takeFromRail called with amount:', amount);

	// Check if there is enough money in the rail
	let currentRailTotal: number = 0;
	railTotal.subscribe((value) => (currentRailTotal = value))();
	if (currentRailTotal < amount) {
		console.log('Not enough money in the rail to take the requested amount.');
		return;
	}

	const surplus = calculateTakeSurplus();
	console.log('Calculated surplus:', surplus);
	let remainingAmount = amount;

	// Deficit calculation per denomination in terms of dollars
	const surplusValues = [
		{ denom: 1, surplus: surplus.dollars * 1, count: surplus.dollars },
		{ denom: 5, surplus: surplus.nickels * 5, count: surplus.nickels },
		{ denom: 25, surplus: surplus.quarters * 25, count: surplus.quarters },
		{ denom: 100, surplus: surplus.hundreds * 100, count: surplus.hundreds },
		{ denom: 500, surplus: surplus.fiveHundreds * 500, count: surplus.fiveHundreds },
		{ denom: 1000, surplus: surplus.thousands * 1000, count: surplus.thousands },
		{ denom: 5000, surplus: surplus.fiveThousands * 5000, count: surplus.fiveThousands }
	];

	// Sort surpluss by custom order: Nickels, Quarters, Dollars, Hundreds, Five Hundreds, Thousands, Five Thousands
	const customOrder = [5, 25, 1, 100, 500, 1000, 5000];
	surplusValues.sort((a, b) => customOrder.indexOf(a.denom) - customOrder.indexOf(b.denom));
	console.log('Sorted surplus values:', surplusValues);

	// Fulfill surpluss
	for (let { denom, count } of surplusValues) {
		if (remainingAmount <= 0 || count <= 0) continue;

		const value = denom;
		const chipsToTake = Math.min(Math.floor(remainingAmount / value), count);
		console.log(`Taking ${chipsToTake} chips of denomination ${denom}`);
		for (let i = 0; i < chipsToTake; i++) {
			removeChip(denom);
		}
		remainingAmount -= chipsToTake * value;
	}

	// Distribute remaining funds optimally
	const denominations = [
		{ denom: 5000, value: 5000 },
		{ denom: 1000, value: 1000 },
		{ denom: 500, value: 500 },
		{ denom: 100, value: 100 },
		{ denom: 25, value: 25 },
		{ denom: 5, value: 5 },
		{ denom: 1, value: 1 }
	];
	for (let { denom, value } of denominations) {
		while (remainingAmount >= value) {
			console.log(`Taking 1 chip of denomination ${denom}`);
			removeChip(denom);
			remainingAmount -= value;
		}
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
}

// Function to remove a chip from a denomination
export function removeChip(denomination: number): void {
	chips[denomination].update((chipArray) => {
		chipArray.pop();
		return [...chipArray];
	});
	subtractFromBankroll(denomination);
}

// Function to add a random chip
export function addChip(denomination: number): void {
	addToBankroll(denomination);
}

// Distribute chips at start
addToRail(get(railTotal));
