<script lang="ts">
	import {
		savePage,
		removePage,
		db,
		fetchBookmarkId,
		fetchAllBookmarks
	} from '$lib/utils/firebase';
	import { user, bookmarkedPages } from '$lib/utils/store';
	import { doc, getDoc } from '@firebase/firestore';
	import { onMount } from 'svelte';

	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
	export let pageData: any = '';

	let bookmarked = false;
	let current_bookmark_id: string | null = null; // Initialize it
	let bookmarkedPagesValue: any[] = [];
	let current_user: any = null;

	onMount(async () => {
		if (current_user && current_user.id) {
			const allBookmarks = await fetchAllBookmarks(current_user.id);
			bookmarkedPages.set(allBookmarks);
		}
	});
	async function handleBookmarkIdFetch() {
		if (current_user && current_user.id && pageData.pageUrl) {
			const fetchedBookmarkId = await fetchBookmarkId(current_user.id, pageData.pageUrl);
			if (fetchedBookmarkId) {
				current_bookmark_id = fetchedBookmarkId;
			} else {
				current_bookmark_id = null;
			}
		}
	}

	user.subscribe(async (value) => {
		current_user = value;
		handleBookmarkIdFetch();
		// Add this if block to populate bookmarkedPages
		if (current_user && current_user.id) {
			const allBookmarks = await fetchAllBookmarks(current_user.id);
			bookmarkedPages.set(allBookmarks);
		}
	});

	bookmarkedPages.subscribe((value) => {
		console.log('Value:', value);
		bookmarkedPagesValue = value;
		console.log('Bokmarked Pages Value:', bookmarkedPagesValue);
		bookmarked = bookmarkedPagesValue.some(
			(bookmark) => bookmark.bookmarkId === current_bookmark_id
		);
		console.log('Bookmarked:', bookmarked);
	});

	$: if (current_user && current_bookmark_id) {
		bookmarked = true;
	}

	async function bookmarkPage() {
		console.log('Content-h1: Entering bookmarkPage function');
		console.log('Content-h1: Current user inside bookmarkPage:', current_user);
		if (current_user && current_user.id) {
			//console.log('Debug Content-h1: User is authenticated. Proceeding to save the page.');

			// Debug: Log pageData and current_bookmark_id before the save
			//console.log('Debug Content-h1: Page data before save:', pageData);
			//console.log('Debug Content-h1: current_bookmark_id before save:', current_bookmark_id);

			// Save the page to Firestore
			const bookmarkId = await savePage(current_user.id, pageData);
			console.log('Content-h1: Re-enter bookmarkPage function');
			current_bookmark_id = bookmarkId;
			console.log('Content-h1: bookmarkId after save:', bookmarkId);

			if (bookmarkId) {
				console.log('Content-h1: Bookmark saved successfully.');

				// Log the updated Firestore document
				const userRef = doc(db, 'users', current_user.id);
				//console.log('Debug Content-h1: User Ref:', userRef);
				console.log('Content-h1: Leaving bookmarkPage function');
				const userSnap = await getDoc(userRef);
				console.log('Content-h1: Re-entering bookmarkPage function');
				if (userSnap.exists()) {
					console.log('Content-h1: User document exists. userSnap Data:', userSnap.data());
				} else {
					console.log('Content-h1: User document does not exist.');
				}

				// Update local state
				bookmarkedPages.update((pages) => {
					console.log('Content-h1: Current bookmarkedPages state:', pages);

					pages.push({ bookmarkId });

					console.log('Content-h1: Updated Application State Bookmarks: ', pages);
					return pages;
				});

				const unsubscribe = bookmarkedPages.subscribe((value) => {
					console.log('Updated bookmarkedPages:', value);
				});
				unsubscribe();

				bookmarked = true;
				console.log('Content-h1: Bookmarked flag set to true');
			} else {
				console.log('Content-h1: Failed to save bookmark.');
			}
		} else {
			console.log('Content-h1: User must be logged in to bookmark a page.');
		}
		console.log('Content-h1: Leaving bookmarkPage function');
	}

	console.log(bookmarkedPagesValue);
	console.log('Current Bookmark ID:', current_bookmark_id);

	async function unBookmarkPage() {
		const bookmarkToRemove = bookmarkedPagesValue.find((b) => b.bookmarkId === current_bookmark_id);
		console.log('Bookmark to remove:', bookmarkToRemove);
		console.log('Current User:', current_user);
		console.log('Current User ID::', current_user.id);
		if (bookmarkToRemove && current_user && current_user.id) {
			await removePage(current_user.id, bookmarkToRemove.bookmarkId);
			bookmarked = false;
		} else {
			console.log('Content-h1: User must be logged in to remove a bookmark.');
		}
	}
</script>

<header>
	<div class="flex justify-between">
		<span class="text-lg uppercase font-semibold text-blue-600 dark:text-blue-400"
			>{sectionTitle}</span
		>
		<div class="flex">
			{#if !bookmarked}
				<p class="text-sm dark:text-orange-400 pt-1 mr-1">Bookmark this page</p>
				<button on:click={bookmarkPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#FB923C"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
						/></svg
					>
				</button>
			{:else}
				<p class="text-sm dark:text-orange-400 pt-1 mr-1">Remove bookmark</p>
				<button on:click={unBookmarkPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#FB923C"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
						/></svg
					>
				</button>
			{/if}
		</div>
	</div>
	<h1 class="text-slate-400 text-3xl pb-2 font-bold">{title}</h1>
</header>
