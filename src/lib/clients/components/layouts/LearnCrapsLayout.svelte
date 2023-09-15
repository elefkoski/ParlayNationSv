<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavContentMenu from '$lib/clients/components/structure/LeftNavContentMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavContentMenu />
	</LeftNavStructure>
	<StructureRemaining />
</MasterLayout>
