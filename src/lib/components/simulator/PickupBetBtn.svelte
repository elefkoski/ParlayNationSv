<script lang="ts">
	console.log('PickupBetBtn component loading');

	export let betType: string = 'pass-line';
	function handleBetAction() {
		console.log('Removing Bet:', betType);
	}

	console.log('PickupBetBtn component loaded.');
</script>

<div>
	<button
		on:click={handleBetAction}
		class="bet-info pickup-btn popup align-middle flex justify-center items-center"
		data-fontSize="2"
		data-border=".25"
		data-borderRadius="1"
		data-paddingtb="4.75"
		data-paddinglr="2.5"
	>
		Pickup Bet
	</button>
</div>
