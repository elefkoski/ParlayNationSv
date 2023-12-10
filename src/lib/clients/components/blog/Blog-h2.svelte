<script lang="ts">
	export let title: string = 'The Title';
	export let id: string = 'the-id';
	export let para: string = 'The paragraph.';
</script>

<section aria-describedby={title}>
	<h2 {id} class="text-slate-400 text-2xl pb-1">{title}</h2>
	<p class="pb-4">{para}</p>
</section>
