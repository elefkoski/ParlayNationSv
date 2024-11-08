<script lang="ts">
	import ContentMenuBox from '../PageMenuBox.svelte';
	import Htpc from '$lib/components/structure/Htpc.svelte';
	import Footer from '$lib/components/structure/Footer.svelte';
	import type { PageMenu } from '$lib/utils/types';
	export let pageLinks: PageMenu[] = [];
	export let showContentMenuBox: boolean = true;
</script>

<div class="w-full lg:w-3/4 flex flex-col">
	<div class="w-full flex flex-col lg:flex-row">
		<div class="w-full lg:w-2/3 p-6">
			<slot />
		</div>
		<div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">
			{#if showContentMenuBox}
				<div class="hidden lg:block">
					<ContentMenuBox {pageLinks} />
				</div>
			{/if}
			<!-- How To Play Craps Section -->
			<Htpc />
		</div>
	</div>
	<Footer />
</div>
