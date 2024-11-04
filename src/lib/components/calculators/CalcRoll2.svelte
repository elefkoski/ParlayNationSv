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
				class="btn calculator-roll-btn flex font-extrabold h-16 items-center justify-center text-2xl tracking-tighter w-16 whitespace-nowrap
        {selectedValue === rollCombo ? 'border-4 calculator-roll-btn-active' : ''}"
				on:click={() => handleClick(rollCombo)}
				type="button"
			>
				{rollCombo}
			</button>
			<h4 class="font-medium">
				{title}
			</h4>
		</div>
	{/each}
</div>
