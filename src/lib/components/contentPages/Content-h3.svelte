<script lang="ts">
	export let title: string = 'The title';
</script>

<section aria-label={title}>
	<h3 class="content-page-h3 text-xl pb-1">{title}</h3>
	<slot />
</section>
