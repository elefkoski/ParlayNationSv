<script lang="ts">
	import TextWLinks from './text-w-links.svelte';

	interface ClosingParagraph {
		textParts: { text: string; url?: string }[];
	}
	export let blogClosing: ClosingParagraph[] = [
		{
			textParts: [
				{ text: 'First sentence of the opening paragraph.' },
				{ text: 'More text', url: 'https://example.com' },
				{ text: ', and even more text.' }
			]
		}
		// Add as many ClosingParagraph objects as needed
	];
</script>

<section aria-label="Closing paragraphs">
	{#each blogClosing as closing, index}
		<p class={index === blogClosing.length - 1 ? '' : 'pb-4'}>
			<TextWLinks textParts={closing.textParts} />
		</p>
	{/each}
</section>
