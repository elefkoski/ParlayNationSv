<script lang="ts">
	export let sectionTitle: string = 'Section Title';
	export let title: string = 'The title';
</script>

<header>
	<span class="text-lg uppercase font-semibold text-blue-600 dark:text-blue-400"
		>{sectionTitle}</span
	>
	<h1 class="text-slate-400 text-3xl pb-2 font-bold">{title}</h1>
</header>
