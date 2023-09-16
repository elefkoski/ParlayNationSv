<script lang="ts">
	import Popup from '../Popup.svelte';
	import {
		savePage,
		removePage,
		db,
		fetchBookmarkId,
		fetchAllBookmarks
	} from '$lib/utils/firebase';
	import { user, bookmarkedPages } from '$lib/utils/store';
	import { onMount } from 'svelte';

	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
	export let pageData: any = '';

	let current_user: any = null;
	let bookmarked: boolean = false;
	let current_bookmark_id: string | null = null;
	let bookmarkedPagesValue: any[] = [];
	let showPopup: boolean = false;

	onMount(async () => {
		if (current_user && current_user.id) {
			const allBookmarks = await fetchAllBookmarks(current_user.id);
			bookmarkedPages.set(allBookmarks);
		}
	});

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
		bookmarkedPagesValue = value;
		bookmarked = bookmarkedPagesValue.some(
			(bookmark) => bookmark.bookmarkId === current_bookmark_id
		);
	});

	$: if (current_user && current_bookmark_id) {
		bookmarked = true;
	}

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

	async function bookmarkPage() {
		if (current_user && current_user.id) {
			const bookmarkId = await savePage(current_user.id, pageData);
			if (bookmarkId) {
				current_bookmark_id = bookmarkId;
				bookmarkedPages.update((pages) => [...pages, { bookmarkId }]);
				bookmarked = true;
			}
		} else {
			showPopup = true;
			setTimeout(() => (showPopup = false), 3000);
		}
	}

	async function unBookmarkPage() {
		const bookmarkToRemove = bookmarkedPagesValue.find((b) => b.bookmarkId === current_bookmark_id);
		console.log('Bookmark to remove:', bookmarkToRemove);
		console.log('Current User:', current_user);
		console.log('Current User ID::', current_user.id);
		if (bookmarkToRemove && current_user && current_user.id) {
			await removePage(current_user.id, bookmarkToRemove.bookmarkId);
			bookmarked = false;
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
				<button data-track="bookmark" on:click={bookmarkPage}>
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
				{#if showPopup}
					<Popup message="You must be signed in to bookmark a page." />
				{/if}
			{:else}
				<p class="text-sm dark:text-orange-400 pt-1 mr-1">Remove bookmark</p>
				<button data-track="unbookmark" on:click={unBookmarkPage}>
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
