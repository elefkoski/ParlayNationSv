<script lang="ts">
	export let title: string = 'The Title';
	export let id: string = 'the-id';
</script>

<section aria-describedby={title}>
	<h2 {id} class="text-slate-400 text-2xl pb-1">{title}</h2>
</section>
