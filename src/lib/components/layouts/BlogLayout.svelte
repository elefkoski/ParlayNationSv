<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavBlogMenu from '$lib/components/structure/LeftNavBlogMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
	import type { PageMenu } from '$lib/utils/types';

	export let pageLinks: PageMenu[] = [];
	export let showContentMenuBox;
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavBlogMenu />
	</LeftNavStructure>
	<StructureRemaining {pageLinks} {showContentMenuBox}>
		<slot />
	</StructureRemaining>
</MasterLayout>
