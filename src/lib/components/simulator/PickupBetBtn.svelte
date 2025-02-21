<script lang="ts">
	console.log('PickupBetBtn component loading');

	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';
	import { removePlayerBet } from '$lib/utils/userDataOperations';
	import { railTotal } from '$lib/utils/simulator/craps-simulator-game-data';
	import { placeChipsInRail } from '$lib/utils/simulator/craps-simulator-rail';
	import { toggleUiSetting } from '$lib/utils/simulator/craps-simulator-scaling';

	import { playerBets } from '$lib/utils/userData';

	export let scalePopupKey: string = 'pickupBetBtn';
	export let betType: string = 'theBet';
	export let toggleKey: string = 'toggleKey';

	let betId = findBetId(betType);
	let betAmount = extractBetAmount(betId);

	onMount(() => {
		scalePopup(scalePopupKey);
	});

	function formatBetType(type: string): string {
		return type
			.replace(/([a-z])([A-Z])/g, '$1-$2') // Add a hyphen between lowercase and uppercase letters
			.toLowerCase(); // Convert to lowercase
	}
	function findBetId(type: string): string | undefined {
		const formattedBetType = formatBetType(type);

		// Retrieve the current value of playerBets
		let betId: string | undefined;
		playerBets.update((bets) => {
			const matchingBet = bets.find((bet) => bet.id.includes(formattedBetType));
			betId = matchingBet?.id;
			return bets;
		});
		return betId;
	}
	function extractBetAmount(betId: string | undefined): number {
		if (!betId) return 0;

		let amount: number = 0;
		playerBets.update((bets) => {
			const matchingBet = bets.find((bet) => bet.id === betId);
			if (matchingBet) {
				amount = matchingBet.amount;
			}
			return bets;
		});
		return amount;
	}

	betAmount = extractBetAmount(betId);

	function handleBetAction() {
		if (betId) {
			removePlayerBet(betId);
			railTotal.update((total) => total + betAmount);
			placeChipsInRail(betAmount);
			console.log('Removing Bet:', betId);
		} else {
			console.error(`Bet with type "${betType}" not found in playerBets.`);
		}
		toggleUiSetting(toggleKey);
	}

	console.log('PickupBetBtn component loaded.');
</script>

<div>
	<button
		on:click={handleBetAction}
		class="bet-info pickup-btn align-middle flex justify-center items-center"
		data-type={scalePopupKey}
		data-fontSize="2"
		data-border=".25"
		data-borderRadius="1"
		data-paddingtb="4.75"
		data-paddinglr="2.5"
	>
		{#if betAmount > 0}
			Pickup ${betAmount} Bet
		{:else}
			Pickup Bet
		{/if}
	</button>
</div>
