<script lang="ts">
	console.log('PickupBetBtn component loading');

	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';

	export let popupName: string = 'pickupBetBtn';

	onMount(() => {
		scalePopup(popupName);
	});

	export let betType: string = 'pass-line';
	function handleBetAction() {
		console.log('Removing Bet:', betType);
	}

	console.log('PickupBetBtn component loaded.');
</script>

<div>
	<button
		on:click={handleBetAction}
		class="bet-info pickup-btn align-middle flex justify-center items-center"
		data-type={popupName}
		data-fontSize="2"
		data-border=".25"
		data-borderRadius="1"
		data-paddingtb="4.75"
		data-paddinglr="2.5"
	>
		Pickup Bet
	</button>
</div>
