<script>
	export let title = 'Title';
	export let description = 'A description';
	export let listPara = 'List Paragraph';
	export let listItems = ['Item 1', 'Item 2'];
	export let downloadUrl = '';
</script>

<div class="w-full">
	<h2 class="text-lg font-bold">{title}</h2>
	<p>{description}</p>
	{#if listItems.length > 0}
		<div class="p-4">
			<p class="practice-list-title">{listPara}</p>
			<ul class="ml-4 list-disc practice-list-text">
				{#each listItems as listItem}
					<li>{listItem}</li>
				{/each}
			</ul>
		</div>
	{/if}
	<a
		data-track="dwnld-{downloadUrl}"
		href={downloadUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="float-right px-4 py-2 mt-4 font-medium rounded practice-download-btn focus:outline-none"
	>
		<div class="flex items-center">
			Download Now
			<svg class="fill-current w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
			</svg>
		</div>
	</a>
</div>
