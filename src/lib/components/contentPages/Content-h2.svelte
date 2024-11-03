<script lang="ts">
	export let title: string = 'The Title';
	export let id: string = 'the-id';
</script>

<section aria-label={title}>
	<h2 {id} class="content-page-h2 text-2xl pb-1">{title}</h2>
	<slot />
</section>
