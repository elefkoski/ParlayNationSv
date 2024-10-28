<script lang="ts">
	export let title: string = 'The title';
</script>

<section aria-label={title}>
	<h3 class="text-slate-100 font-bold text-xl">{title}</h3>
	<slot />
</section>
