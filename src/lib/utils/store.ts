import { writable } from 'svelte/store';

export const darkMode = writable<boolean>(false);
export const language = writable<string>('en');
