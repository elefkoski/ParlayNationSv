<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let rollInfo: { value: number; title: string }[] = [];
	let selectedValue: number | null = null;
	const dispatch = createEventDispatcher();
	function handleClick(value: number) {
		selectedValue = value;
		dispatch('rollSelected', value);
	}
</script>

<div class="flex mb-3 space-x-3">
	{#each rollInfo as { value, title }}
		<div class="flex flex-col items-center justify-center">
			<button
				class="bg-rose-500 btn border-gray-600 dark:bg-rose-300 dark:hover:bg-rose-200 flex font-extrabold h-16 hover:bg-rose-400 items-center justify-center text-3xl text-black w-16
        {selectedValue === value ? 'bg-rose-400 dark:bg-rose-400 border-4 dark:border-slate' : ''}"
				on:click={() => handleClick(value)}
				type="button"
			>
				{value}
			</button>
			<h4 class="text-white font-medium">
				{title}
			</h4>
		</div>
	{/each}
</div>
