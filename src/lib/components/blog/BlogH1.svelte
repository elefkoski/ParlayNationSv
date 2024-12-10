<script lang="ts">
	import Popup from '../Popup.svelte';
	import { savePage, removePage, fetchBookmarkId } from '$lib/utils/firebase';
	import { bookmarkedPages } from '$lib/utils/userData';
	import { user } from '$lib/utils/userData';

	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
	export let pageData: any = '';
	export let introParas: any[] = [''];

	let current_user: any = null;
	let bookmarked: boolean = false;
	let current_bookmark_id: string | null = null;
	let showPopup: boolean = false;

	$: current_user = $user;
	$: if (current_user && pageData.pageUrl) {
		handleBookmarkState();
	}

	async function handleBookmarkState() {
		try {
			if (current_user?.id) {
				current_bookmark_id = await fetchBookmarkId(current_user.id, pageData.pageUrl);
				bookmarked = !!current_bookmark_id;
			} else {
				current_bookmark_id = null;
				bookmarked = false;
			}
		} catch (error) {
			console.error('Error fetching bookmark state:', error);
		}
	}
	async function bookmarkPage() {
		if (!current_user?.id) {
			showPopup = true;
			setTimeout(() => (showPopup = false), 3000);
			return;
		}

		try {
			const bookmarkId = await savePage(current_user.id, pageData);
			if (bookmarkId) {
				current_bookmark_id = bookmarkId;
				bookmarkedPages.update((pages) => [...pages, { bookmarkId, ...pageData }]);
				bookmarked = true;
			}
		} catch (error) {
			console.error('Error bookmarking page:', error);
		}
	}
	async function unBookmarkPage() {
		if (!current_user?.id || !current_bookmark_id) return;

		try {
			await removePage(current_user.id, current_bookmark_id);
			bookmarkedPages.update((pages) =>
				pages.filter((bookmark) => bookmark.bookmarkId !== current_bookmark_id)
			);
			current_bookmark_id = null;
			bookmarked = false;
		} catch (error) {
			console.error('Error removing bookmark:', error);
		}
	}
</script>

<header>
	<h1 class="text-3xl md:text-5xl lg:text-6xl pb-2 font-bold article-h1">{title}</h1>
	<div class="flex justify-between">
		<span class="text-lg uppercase font-semibold page-section-title">{sectionTitle}</span>
		<div class="flex">
			{#if !bookmarked}
				<p class="text-sm bookmark pt-1 mr-1">Bookmark this page</p>
				<button data-track="bookmark" on:click={bookmarkPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="var(--bookmark)"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
						/></svg
					>
				</button>
				{#if showPopup}
					<Popup message="You must be signed in to bookmark a page." />
				{/if}
			{:else}
				<p class="text-sm bookmark pt-1 mr-1">Remove bookmark</p>
				<button data-track="unbookmark" on:click={unBookmarkPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="var(--bookmark)"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
						/></svg
					>
				</button>
			{/if}
		</div>
	</div>
</header>
<section aria-label="Main paragraph">
	{#each introParas as para}
		<p class="pb-4">
			{para}
		</p>
	{/each}
</section>
