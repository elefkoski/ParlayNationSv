<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavPracticeMenu from '$lib/components/structure/LeftNavPracticeMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';

	export let showContentMenuBox;
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavPracticeMenu />
	</LeftNavStructure>
	<StructureRemaining {showContentMenuBox}>
		<slot />
	</StructureRemaining>
</MasterLayout>
