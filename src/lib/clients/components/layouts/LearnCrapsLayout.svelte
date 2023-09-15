<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftColNav from '$lib/clients/components/structure/LeftNavLearnCraps.svelte';
	import RightColumn from '$lib/clients/components/structure/RightColumn.svelte';
	import Footer from '$lib/clients/components/structure/Footer.svelte';
</script>

<MasterLayout>
	<div class="w-full lg:w-1/4 lg:block hidden p-6">
		<LeftColNav />
	</div>
	<div class="w-full lg:w-3/4 flex flex-col">
		<div class="w-full flex flex-col lg:flex-row">
			<div class="w-full lg:w-2/3 p-6">
				<slot />
			</div>
			<div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">
				<RightColumn />
			</div>
		</div>
		<Footer />
	</div>
</MasterLayout>
