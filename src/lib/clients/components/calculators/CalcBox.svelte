<script lang="ts">
	export let title = 'The Title';
	export let description = 'Here is your description';
</script>

<section aria-label={title} class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
	<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">{title}</h2>
	<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
		{description}
	</p>
	<div class="flex-col space-y-4">
		<slot />
	</div>
</section>
