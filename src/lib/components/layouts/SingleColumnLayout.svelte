<script lang="ts">
	import MasterLayout from './MasterLayout.svelte';
	import Footer from '$lib/components/structure/Footer.svelte';
</script>

<MasterLayout>
	<slot />
	<Footer />
</MasterLayout>
