import { writable } from 'svelte/store';

// Array to hold the chips
export const chips1 = writable<string[]>([]);
export const chips5 = writable<string[]>([]); // $5 chips
export const chips25 = writable<string[]>([]); // $25 chips
export const chips100 = writable<string[]>([]); // $100 chips
export const chips500 = writable<string[]>([]); // $500 chips
export const chips1000 = writable<string[]>([]); // $1000 chips
export const chips5000 = writable<string[]>([]); // $5000 chips

function getRandomChip(denomination: string): string {
	const randomNumber = Math.floor(Math.random() * 12) + 1;
	return `src/images/craps-simulator/chips/${denomination}_chip_${randomNumber}.jpg`;
}

// Function to add a random chip
export function addChip(denomination: string) {
	switch (denomination) {
		case 'dollar':
			chips1.update((chips) => [...chips, getRandomChip('dollar')]);
			break;
		case 'nickel':
			chips5.update((chips) => [...chips, getRandomChip('nickel')]);
			break;
		case 'quarter':
			chips25.update((chips) => [...chips, getRandomChip('quarter')]);
			break;
		case 'black':
			chips100.update((chips) => [...chips, getRandomChip('black')]);
			break;
		case 'purple':
			chips500.update((chips) => [...chips, getRandomChip('purple')]);
			break;
		case 'orange':
			chips1000.update((chips) => [...chips, getRandomChip('orange')]);
			break;
		case 'gray':
			chips5000.update((chips) => [...chips, getRandomChip('gray')]);
			break;
	}
}

export function removeChip(denomination: string) {
	switch (denomination) {
		case 'dollar':
			chips1.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'nickel':
			chips5.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'quarter':
			chips25.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'black':
			chips100.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'purple':
			chips500.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'orange':
			chips1000.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
		case 'gray':
			chips5000.update((chips) => {
				chips.pop();
				return [...chips];
			});
			break;
	}
}
