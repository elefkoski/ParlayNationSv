<script>
	import '../../../../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import LeftNavPracticeCraps from '$lib/clients/components/structure/LeftNavPracticeCraps.svelte';
	import MainColumn from '$lib/clients/components/structure/MainColumn.svelte';
	import RightColumn from '$lib/clients/components/structure/RightColumn.svelte';
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
<div id="parentElement" class=" container mx-auto flex flex-wrap pt-20 dark:text-slate-300">
	<div class="w-full lg:w-1/4 lg:block hidden p-6">
		<LeftNavPracticeCraps />
	</div>
	<div class="w-full lg:w-3/4 flex flex-col">
		<div class="w-full flex flex-col lg:flex-row">
			<div class="w-full lg:w-2/3 p-6">
				<MainColumn>
					<slot />
				</MainColumn>
			</div>
			<div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">
				<RightColumn />
			</div>
		</div>
		<Footer />
	</div>
</div>
