<script lang="ts">
	export let title: string = 'The title';
</script>

<section aria-describedby={title}>
	<h2 class="text-slate-400 text-2xl pb-1">{title}</h2>
</section>
