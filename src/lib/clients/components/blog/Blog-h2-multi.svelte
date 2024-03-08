<script lang="ts">
	interface TextPart {
		text: string;
		url?: string;
	}

	interface NestedListItem {
		content: TextPart[]; // Array of TextPart, previously 'text' and 'nestedList'
		nestedList?: NestedListItem[]; // Optional and allows for recursive nested lists
	}

	interface Paragraph {
		textBlocks: TextPart[]; // Each textBlock is now an array of TextPart
		listTitle: string[]; // Titles for lists, remains unchanged
		listItem: NestedListItem[]; // Adjusted to use the new NestedListItem definition
	}

	interface BlogSection {
		id: string;
		title: string;
		paras: Paragraph[];
	}
	export let blogSectionMulti: BlogSection[] = [
		{
			id: 'theID',
			title: 'This is the intro to list 1',
			paras: [
				{
					textBlocks: [
						{ text: 'Sentence 1' }, // Converted to TextPart format
						{ text: 'Sentence 2' } // Converted to TextPart format
					],
					listTitle: ['there is a title'],
					listItem: [
						{
							content: [
								// Adjusted to use the 'content' field with TextPart[]
								{ text: 'here is some text' }
							],
							nestedList: [
								// This also needs to be adjusted to match NestedListItem[]
								{
									content: [
										{ text: 'something' }, // Assuming you want these as TextPart now
										{ text: 'something2' }
									]
								}
							]
						}
					]
				}
			]
		}
	];
</script>

<ul class="flex flex-col space-y-2">
	{#each blogSectionMulti as blogSection}
		<li class="rounded shadow-lg dark:shadow-none">
			<h2 id={blogSection.id} class="text-2xl font-semibold text-blue-600 dark:text-slate-400">
				{blogSection.title}
			</h2>
			{#each blogSection.paras as para}
				{#each para.textBlocks as textBlock}
					<p class="mt-2">
						{#if textBlock.url}
							<a href={textBlock.url} class="text-blue-600 hover:text-blue-700">{textBlock.text}</a>
						{:else}
							{textBlock.text}
						{/if}
					</p>
				{/each}
				<ol class="list-decimal list-inside space-y-1 pb-4">
					{#each para.listItem as item, index}
						<li class="text-gray-700 dark:text-gray-300 ml-2 pt-1">
							<span class="font-bold uppercase dark:text-blue-400">{para.listTitle[index]}</span>
							{#each item.content as part}
								{#if part.url}
									<a href={part.url} class="text-blue-600 hover:text-blue-700">{part.text}</a>
								{:else}
									{part.text}
								{/if}
							{/each}
							{#if item.nestedList}
								<ul class="list-disc list-inside ml-4">
									{#each item.nestedList as nestedItem}
										{#each nestedItem.content as content}
											<li>{@html content.text}</li>
										{/each}
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ol>
			{/each}
		</li>
	{/each}
</ul>

<style>
	li::marker {
		color: #60a5fa;
	}
</style>
