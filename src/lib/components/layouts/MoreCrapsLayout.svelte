<script lang="ts">
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
	import LeftNavMoreMenu from '../structure/LeftNavMoreMenu.svelte';

	export let showContentMenuBox;
</script>

<LeftNavStructure>
	<LeftNavMoreMenu />
</LeftNavStructure>
<StructureRemaining {showContentMenuBox}>
	<slot />
</StructureRemaining>
