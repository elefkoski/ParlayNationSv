<script>
	import '../../../../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import LeftNavPracticeCraps from '$lib/clients/components/structure/LeftNavPracticeCraps.svelte';
	import MainColumn from '$lib/clients/components/structure/MainColumn.svelte';
	import RightColumn from '$lib/clients/components/structure/RightColumn.svelte';
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
