<script lang="ts">
	console.log('+layout component loading');

	import '../app.css';
	import '../colors.css';
	import Navbar from '$lib/components/structure/Navbar.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { user } from '$lib/utils/userData';
	import { get } from 'svelte/store';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';
	import { handleAuthStateChange } from '$lib/utils/auth';

	$: {
		console.log('User in +layout:', $user);
	}

	let isAuthReady = false;

	// Run on mount
	onMount(async () => {
		enableEventTracking();
		enableScrollTracking();

		if (typeof window !== 'undefined') {
			console.log('Browser environment detected. Attaching listeners and handling authentication.');
			attachBeforeUnloadListener();
			await handleAuthStateChange();
			isAuthReady = true;
		} else {
			console.log('Server environment detected. Skipping listeners.');
		}
	});

	// Cleanup on destroy
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			detachBeforeUnloadListener();
		}
	});

	// Before unload listener
	function attachBeforeUnloadListener() {
		console.log('Attaching beforeunload listener');
		window.addEventListener('beforeunload', handleBeforeUnload);
	}
	function detachBeforeUnloadListener() {
		console.log('Detaching beforeunload listener');
		window.removeEventListener('beforeunload', handleBeforeUnload);
	}
	async function handleBeforeUnload(): Promise<void> {
		console.log('Handling beforeunload event.');

		const current_user = get(user);
		if (current_user?.id) {
			console.log('Syncing user data before unload...');
			await syncUserData(current_user.id);
		}
	}

	console.log('+layout component loaded');
</script>

<svelte:head>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-N6DDTMN7FM"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-N6DDTMN7FM');
	</script>
</svelte:head>

{#if isAuthReady}
	<Navbar />
	<div
		id="parentElement"
		class="container lg:w-full lg:max-w-[100%] mx-auto flex flex-wrap pt-20 z-10"
	>
		<slot />
	</div>
{:else}
	<div class="loading-page bg-gray-900 text-white min-h-screen flex items-center justify-center">
		Loading...
	</div>
{/if}
