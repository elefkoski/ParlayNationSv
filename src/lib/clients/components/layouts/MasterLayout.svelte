<script>
	import '../../../../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';
	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
</script>

<svelte:head>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />

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

<Navbar />
<div id="parentElement" class=" container mx-auto flex flex-wrap pt-20 dark:text-slate-300">
	<slot />
</div>
