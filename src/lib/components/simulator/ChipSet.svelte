<script lang="ts">
	console.log('ChipSet component loading');

	import { onMount } from 'svelte';
	import { scaleElements } from '$lib/utils/simulator/craps-simulator-scaling';
	import { calculateChipPlacement } from '$lib/utils/simulator/craps-simulator-bet-placement';
	import { directionOffsets } from '$lib/utils/simulator/craps-simulator-bet-placement';

	export let id: string = '';
	export let amount: number = 0;
	export let baseX: number = 0;
	export let baseY: number = 0;
	export let direction: keyof typeof directionOffsets = 'n';

	onMount(() => {
		scaleElements('cheque');
	});
	// Create a single object for the calculation
	const bet = { amount, baseX, baseY, direction };

	// Pass the object to calculate placements
	const placements = calculateChipPlacement(bet);

	console.log('ChipSet component loaded.');
</script>

<div {id}>
	{#each placements as { type, x, y }}
		<img
			class="cheque game-element hidden z-30"
			src={`src/images/craps-simulator/${type.toLowerCase()}_cheque.webp`}
			alt={`${type} cheque`}
			data-type="cheque"
			data-x={x}
			data-y={y}
			data-width="1.8"
			data-height="3.2"
		/>
	{/each}
</div>
