<script lang="ts">
	import Downloadable from '$lib/components/practicePages/PracticeDownloadable.svelte';
	export let items: {
		title: string;
		description: string;
		imageUrlSm: string;
		imageUrlLg: string;
		pageUrl: string;
		pdfUrl: string;
	}[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each items as item (item.title)}
		<Downloadable
			title={item.title}
			description={item.description}
			imageUrlSm={item.imageUrlSm}
			imageUrlLg={item.imageUrlLg}
			pageUrl={item.pageUrl}
			pdfUrl={item.pdfUrl}
		/>
	{/each}
</div>
