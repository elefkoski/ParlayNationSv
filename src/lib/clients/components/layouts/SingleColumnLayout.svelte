<script>
	import '../../../../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import Footer from '$lib/clients/components/structure/Footer.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';

	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
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
<div id="parentElement" class="container dark:text-slate-300 mx-auto pt-20 min-h-screen">
	<slot />
	<Footer />
</div>
