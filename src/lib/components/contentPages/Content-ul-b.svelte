<script lang="ts">
	interface ListItem {
		title?: string;
		subTitle?: string[];
		items?: string[];
	}

	export let liBs: ListItem[] = [
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
	{#each liBs as section, sectionIndex (section.title)}
		<li class="rounded shadow-lg dark:shadow-none">
			{#if section.title}
				<h4 class="text-lg font-semibold ul-h4">
					{section.title}
				</h4>
			{/if}
			{#if section.items}
				<ul class="list-disc list-inside space-y-1">
					{#each section.items as item, index}
						<li class="ul-li ml-1">
							<!-- Only display subtitle if it exists and the index is within range -->
							{#if section.subTitle && section.subTitle.length > index}
								<span class="font-bold uppercase">{section.subTitle[index]}</span>
							{/if}
							{item}
						</li>
					{/each}
				</ul>
			{/if}
		</li>
	{/each}
</ul>
