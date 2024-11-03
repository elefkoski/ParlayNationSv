<script lang="ts">
	export let title = 'The Title';
	export let description = 'Here is your description';
</script>

<section aria-label={title} class="home-page-body-bg-2 p-6 rounded-lg shadow-lg">
	<h2 class="text-2xl font-bold calculator-title mb-2">{title}</h2>
	<p class="mb-4 leading-7">
		{description}
	</p>
	<div class="flex-col space-y-4">
		<slot />
	</div>
</section>
