<script lang="ts">
	import type { PageMenu } from '$lib/utils/types';
	export let pageLinks: PageMenu[] = [];
</script>

<div class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
	<h2 class="uppercase text-lg font-semibold text-gray-700 dark:text-gray-300">Contents</h2>
	<section aria-label="Inner page links">
		{#if pageLinks.length > 0}
			{#each pageLinks as pageLink (pageLink.title)}
				<a
					data-track="page-link-{pageLink.href}"
					href={pageLink.href}
					class="flex py-2 px-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#000000"
					>
						{#if pageLink.iconD}
							{#each pageLink.iconD as d, i (i)}
								<path
									{d}
									fill={pageLink.iconFills ? pageLink.iconFills[i] : 'none'}
									stroke={pageLink.iconStrokes ? pageLink.iconStrokes[i] : 'none'}
								/>
							{/each}
						{/if}</svg
					>
					<h3
						class="ml-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
					>
						{pageLink.title}
					</h3>
				</a>
			{/each}
		{/if}
	</section>
</div>
