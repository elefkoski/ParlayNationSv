import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store for the theme
export const theme = writable<'light' | 'dark'>(getInitialTheme());

// Function to get the initial theme based on localStorage or system preference
function getInitialTheme() {
	if (browser) {
		// Check localStorage for saved theme
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		if (savedTheme) {
			return savedTheme;
		}

		// Fallback to system preference
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light';
}

// Subscribe to changes in the theme store and save to localStorage
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
	});

	// Subscribe to changes in the system theme
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		// Only update theme if not set by user
		if (!localStorage.getItem('theme')) {
			theme.set(event.matches ? 'dark' : 'light');
		}
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
