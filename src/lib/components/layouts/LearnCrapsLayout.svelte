<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavLearnMenu from '$lib/components/structure/LeftNavLearnMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
	import type { PageMenu } from '$lib/utils/types';

	export let pageLinks: PageMenu[] = [];
	export let showContentMenuBox: boolean = true;
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavLearnMenu />
	</LeftNavStructure>
	<StructureRemaining {pageLinks} {showContentMenuBox}>
		<slot />
	</StructureRemaining>
</MasterLayout>
