<script lang="ts">
	import Downloadable from './PracticeDownloadable.svelte';
	export let items: {
		title: string;
		description: string;
		imageUrlSm: string;
		imageUrlMd: string;
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
			imageUrlMd={item.imageUrlMd}
			imageUrlLg={item.imageUrlLg}
			pageUrl={item.pageUrl}
			pdfUrl={item.pdfUrl}
		/>
	{/each}
</div>
