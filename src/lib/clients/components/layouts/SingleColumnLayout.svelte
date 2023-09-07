<script>
	import '../../../../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import Footer from '$lib/clients/components/structure/Footer.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking } from '$lib/utils/eventTracking';
	import { enableScrollTracking } from '$lib/utils/scrollTracking';

	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
</script>

<Navbar />
<div id="parentElement" class="container dark:text-slate-300 mx-auto pt-20 min-h-screen">
	<slot />
	<Footer />
</div>
