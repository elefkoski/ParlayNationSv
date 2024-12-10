<script lang="ts">
	import Popup from '../Popup.svelte';
	import { savePage, removePage } from '$lib/utils/firebase';
	import { bookmarkedPages } from '$lib/utils/userData';
	import { user } from '$lib/utils/userData';

	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
	export let pageData: any = '';

	let current_user: any = null;
	let bookmarked: boolean = false;
	let current_bookmark_id: string | null = null;
	let showPopup: boolean = false;

	$: current_user = $user;
	$: {
		if (current_user?.id && pageData.pageUrl) {
			const bookmark = $bookmarkedPages.find((b) => b.pageUrl === pageData.pageUrl);
			current_bookmark_id = bookmark?.bookmarkId || null;
			bookmarked = !!current_bookmark_id;
		} else {
			current_bookmark_id = null;
			bookmarked = false;
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
				bookmarkedPages.update((pages) => [...pages, { bookmarkId, ...pageData }]);
				// Reactive declarations will update `bookmarked` automatically
			}
		} catch (error) {
			console.error('Error bookmarking page:', error);
		}
	}
	async function unBookmarkPage() {
		if (!current_user?.id || !current_bookmark_id) return;

		try {
			await removePage(current_user.id, current_bookmark_id);
			bookmarkedPages.update((pages) => pages.filter((b) => b.bookmarkId !== current_bookmark_id));
			// Reactive declarations will update `bookmarked` automatically
		} catch (error) {
			console.error('Error removing bookmark:', error);
		}
	}
</script>

<header>
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
	<h1 class="article-h1 text-3xl pb-2 font-bold">{title}</h1>
</header>
<section aria-label="Intro Section">
	<slot />
</section>
