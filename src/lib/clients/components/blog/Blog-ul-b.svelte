<script>
	// @ts-nocheck

	export let liBs = [
		{
			title: 'This is the intro to list 1',
			subTitle: ['there is a title'],
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		},
		{
			title: 'This is the intro to list 2',
			subTitle: ['there is another title'],
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		},
		{
			title: 'This is the intro to list 3',
			subTitle: ['there is a third title'],
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		}
	];
</script>

<ul class="ml-4 flex flex-col space-y-2">
	{#each liBs as section (section.title)}
		<li class="rounded shadow-lg dark:shadow-none">
			<h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400">
				{section.title}
			</h4>
			<ul class="list-disc list-inside space-y-1">
				{#each section.items as item, index}
					<li class="text-gray-700 dark:text-gray-300 ml-1">
						<span class="font-bold uppercase dark:text-slate-400">{section.subTitle[index]}</span>
						{item}
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>
