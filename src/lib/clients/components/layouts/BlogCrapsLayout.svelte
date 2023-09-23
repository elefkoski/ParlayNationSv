<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import LeftNavStructure from '../structure/Structure-LeftNav.svelte';
	import LeftNavBlogMenu from '$lib/clients/components/structure/LeftNavBlogMenu.svelte';
	import StructureRemaining from '../structure/Structure-Remaining.svelte';
</script>

<MasterLayout>
	<LeftNavStructure>
		<LeftNavBlogMenu />
	</LeftNavStructure>
	<StructureRemaining>
		<slot />
	</StructureRemaining>
</MasterLayout>
