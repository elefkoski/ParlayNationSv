<script lang="ts">
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavPracticeMenu from '$lib/components/structure/LeftNavPracticeMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';

	export let showContentMenuBox;
</script>

<LeftNavStructure>
	<LeftNavPracticeMenu />
</LeftNavStructure>
<StructureRemaining {showContentMenuBox}>
	<slot />
</StructureRemaining>
