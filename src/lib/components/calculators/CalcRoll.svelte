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
				class="btn calculator-roll-btn flex font-extrabold h-16 items-center justify-center text-3xl w-16
        {selectedValue === value ? 'border-4 calculator-roll-btn-active' : ''}"
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
