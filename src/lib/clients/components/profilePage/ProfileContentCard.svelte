<script lang="ts">
	export let title: string = 'My Content Page Title';
	export let description: string = 'A description to my page';
	export let imageUrl: string = 'https://picsum.photos/1280/720';
	export let pageUrl: string = '/';
	export let id: string;
	export let onDelete: Function;
</script>

<div
	class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<a href={pageUrl}>
		<img class="rounded-t-lg" src={imageUrl} alt={title} />
	</a>
	<div class="p-5">
		<a href={pageUrl}>
			<h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
		<div class="">
			<button
				on:click={handleDelete}
				class="bg-red-500 float-right px-2 py-1 rounded-lg text-white"
			>
				Delete
			</button>
			<p class="clear-both" />
		</div>
	</div>
</div>
