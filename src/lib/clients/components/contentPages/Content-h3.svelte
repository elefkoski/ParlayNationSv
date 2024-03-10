<script lang="ts">
	export let title: string = 'The title';
</script>

<section aria-label={title}>
	<h2 class="text-slate-400 text-xl pb-1">{title}</h2>
	<slot />
</section>
