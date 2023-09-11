import { writable } from 'svelte/store';

export interface User {
	id: string;
	display_name: string;
	email: string;
}
export const user = writable<User | null>(null);
export const bookmarkedPages = writable<any[]>([]);
