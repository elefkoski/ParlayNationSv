<script lang="ts">
	import { savePage } from '$lib/utils/firebase';
	import { user } from '$lib/utils/store';
	import { onMount } from 'svelte';

	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
	export let pageData: any = '';

	let bookmarked = false;
	let current_page_url: string;
	let bookmarkedPages: any = [];

	let current_user: any = null;

	onMount(() => {
		current_page_url = window.location.pathname;
		if (bookmarkedPages.includes(current_page_url)) {
			bookmarked = true;
		}
	});

	user.subscribe((value) => {
		console.log('Content page user:', value);
		current_user = value;
	});

	async function bookmarkPage() {
		console.log('Current user when bookmarking:', current_user);
		bookmarked = true;
		if (current_user && current_user.id) {
			await savePage(current_user.id, pageData);
		} else {
			console.log('User must be logged in to bookmark a page.');
		}
	}

	async function unBookmarkPage() {
		bookmarked = false;
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
