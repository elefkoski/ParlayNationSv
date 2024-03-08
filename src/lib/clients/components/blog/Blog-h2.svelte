<script lang="ts">
	import TextWLinks from './text-w-links.svelte';

	interface TextPart {
		text: string;
		url?: string; // url is optional
	}

	interface BlogSection {
		id: string;
		title: string;
		paras: TextPart[][]; // An array of arrays of TextPart
	}

	export let blogSection: BlogSection[] = [
		{
			id: 'theId',
			title: 'The Title',
			paras: [
				[{ text: "a's", url: '/' }],
				[{ text: "a's", url: '/' }],
				[{ text: "a's", url: '/' }],
				[{ text: "a's", url: '/' }]
			]
		}
	];
</script>

{#each blogSection as section}
	<section aria-label={section.title}>
		<h2 id={section.id} class="text-slate-400 font-semibold text-2xl pb-1">{section.title}</h2>
		{#each section.paras as para}
			<p class="pb-4"><TextWLinks textParts={para} /></p>
		{/each}
	</section>
{/each}
