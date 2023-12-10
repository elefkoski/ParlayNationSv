<script lang="ts">
	export let blogSections = [
		{
			id: 'theID',
			title: 'This is the intro to list 1',
			para: 'This is the paragraph',
			subTitles: ['there is a title'],
			subParas: ['Item 1']
		}
	];
</script>

<ul class="flex flex-col space-y-2">
	{#each blogSections as blogSection}
		<li class="rounded shadow-lg dark:shadow-none">
			<h2 id={blogSection.id} class="text-2xl font-semibold text-blue-600 dark:text-slate-400">
				{blogSection.title}
			</h2>
			<p>{blogSection.para}</p>
			<ol class="list-decimal list-inside space-y-1">
				{#each blogSection.subParas as para, index}
					<li class="text-gray-700 dark:text-gray-300 ml-2 pt-2">
						<span class="font-bold uppercase dark:text-blue-400"
							>{blogSection.subTitles[index]}</span
						>
						{para}
					</li>
				{/each}
			</ol>
		</li>
	{/each}
</ul>

<style>
	li::marker {
		color: #60a5fa;
	}
</style>
