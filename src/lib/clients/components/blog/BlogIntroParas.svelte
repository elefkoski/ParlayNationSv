<script lang="ts">
	import TextWLinks from './text-w-links.svelte';

	interface OpeningParagraph {
		textParts: { text: string; url?: string }[];
	}

	export let blogOpening: OpeningParagraph[] = [
		{
			textParts: [
				{ text: 'First sentence of the opening paragraph.' },
				{ text: 'More text', url: 'https://example.com' },
				{ text: ', and even more text.' }
			]
		}
		// Add as many OpeningParagraph objects as needed
	];
</script>

<section aria-label="Main paragraph">
	{#each blogOpening as opening}
		<p class="pb-4"><TextWLinks textParts={opening.textParts} /></p>
	{/each}
</section>
