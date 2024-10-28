<script lang="ts">
	import RightColumn from '$lib/components/structure/RightColumn.svelte';
	import Footer from '$lib/components/structure/Footer.svelte';
	import type { PageMenu } from '$lib/utils/types';
	export let pageLinks: PageMenu[] = [];
</script>

<div class="w-full lg:w-3/4 flex flex-col">
	<div class="w-full flex flex-col lg:flex-row">
		<div class="w-full lg:w-2/3 p-6">
			<slot />
		</div>
		<div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">
			<RightColumn {pageLinks} />
		</div>
	</div>
	<Footer />
</div>
