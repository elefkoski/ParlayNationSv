<script lang="ts">
	export let id = 'theId';
	export let title = 'The Title';
</script>

<section aria-label={title} class="blog">
	<h2 {id} class="article-h2 font-semibold text-2xl pb-1">{title}</h2>
	<slot />
</section>
