<script lang="ts">
	export let title: string = 'The title';
</script>

<section aria-label={title}>
	<h3 class="article-h3 font-bold text-xl">{title}</h3>
	<slot />
</section>
