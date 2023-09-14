import { writable } from 'svelte/store';

export interface User {
	id?: string;
	display_name?: string;
	email?: string;
	profilePicture?: string;
}
export interface Bookmark {
	bookmarkId: string;
}

export const user = writable<User | null>(null);
export const bookmarkedPages = writable<Bookmark[]>([]);
