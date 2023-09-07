<script>
	import '../../../../app.css';
	import { enableEventTracking } from '$lib/utils/eventTracking';
	import { enableScrollTracking } from '$lib/utils/scrollTracking';
	import { onMount } from 'svelte';

	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
</script>

<div id="parentElement" class="container dark:text-slate-300 mx-auto pt-20 min-h-screen">
	<slot />
</div>
