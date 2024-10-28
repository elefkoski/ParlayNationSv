<script>
	import '../../../../app.css';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';
	import { onMount } from 'svelte';

	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
	});
</script>

<svelte:head>
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

<div id="parentElement" class="container mx-auto pt-20 min-h-screen">
	<slot />
</div>
