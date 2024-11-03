<script>
	export let liAs = [
		{
			title: 'This is the intro to list 1',
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		},
		{
			title: 'This is the intro to list 2',
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		},
		{
			title: 'This is the intro to list 3',
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
		}
	];
</script>

<ul class="ml-4 flex flex-col space-y-2">
	{#each liAs as list (list.title)}
		<li class="rounded shadow-lg dark:shadow-none">
			<h4 class="text-lg font-semibold ul-h4">
				{list.title}
			</h4>
			<ul class="list-disc list-inside space-y-1">
				{#each list.items as item (item)}
					<li class="ul-li ml-1">{item}</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>
