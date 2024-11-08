<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
	import LeftNavMoreMenu from '../structure/LeftNavMoreMenu.svelte';

	export let showContentMenuBox;
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavMoreMenu />
	</LeftNavStructure>
	<StructureRemaining {showContentMenuBox}>
		<slot />
	</StructureRemaining>
</MasterLayout>
