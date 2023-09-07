<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let rollInfo: { rollCombo: string; title: string }[] = [];
	let selectedValue: string | null = null;
	const dispatch = createEventDispatcher();
	function handleClick(value: string) {
		selectedValue = value;
		dispatch('rollSelected', value);
	}
</script>

<div class="flex mb-3 space-x-3">
	{#each rollInfo as { rollCombo, title }}
		<div class="flex flex-col items-center justify-center">
			<button
				class="bg-rose-500 btn border-gray-600 dark:bg-rose-300 dark:hover:bg-rose-200 flex font-extrabold h-16 hover:bg-rose-400 items-center justify-center text-2xl text-black tracking-tighter w-16 whitespace-nowrap
        {selectedValue === rollCombo
					? 'bg-rose-400 dark:bg-rose-400 border-4 dark:border-slate'
					: ''}"
				on:click={() => handleClick(rollCombo)}
				type="button"
			>
				{rollCombo}
			</button>
			<h4 class="text-white font-medium">
				{title}
			</h4>
		</div>
	{/each}
</div>
