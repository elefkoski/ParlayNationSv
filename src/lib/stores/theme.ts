import { writable } from 'svelte/store';

// Create a writable store for the theme
export const theme = writable(getInitialTheme());

// Function to get the initial theme based on system preference
function getInitialTheme() {
	if (typeof window !== 'undefined' && window.matchMedia) {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return prefersDark ? 'dark' : 'light';
	}
	return 'light';
}

// Subscribe to changes in the system theme
if (typeof window !== 'undefined' && window.matchMedia) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		theme.set(event.matches ? 'dark' : 'light');
	});
}

//Function to set the theme
export function setTheme(value: 'light' | 'dark') {
	theme.set(value);
}

// Function to toggle the theme
export function toggleTheme() {
	theme.update((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
}
