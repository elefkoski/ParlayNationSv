<script lang="ts">
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavBlogMenu from '$lib/components/structure/LeftNavBlogMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import { onMount, onDestroy } from 'svelte';
	import { enableSmoothScroll } from '$lib/utils/scrollToAnchor';

	export let pageLinks: PageMenu[] = [];
	export let showContentMenuBox: boolean = true;

	let cleanupScroll: () => void;

	onMount(() => {
		cleanupScroll = enableSmoothScroll(85);
	});

	onDestroy(() => {
		if (cleanupScroll) cleanupScroll();
	});
</script>

<LeftNavStructure>
	<LeftNavBlogMenu />
</LeftNavStructure>
<StructureRemaining {pageLinks} {showContentMenuBox}>
	<slot />
</StructureRemaining>
