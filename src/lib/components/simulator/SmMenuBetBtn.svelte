<script lang="ts">
	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';
	import {
		toggleFavoriteBet,
		getFavoriteStatus,
		generatePlayerBetId
	} from '$lib/utils/userDataOperations';

	export let betName: string = 'Pass Line';
	export let betAmount: number = 100;
	export let betType: string = 'Pass Line';
	let isFavorite: boolean = false;
	let popupName = generatePlayerBetId(betType, betAmount);

	console.log('SmMenuBetBtn component loading:', { betName, betAmount });

	onMount(() => {
		scalePopup(popupName);
	});

	async function initializeFavoriteStatus() {
		try {
			console.log('Initializing favorite status:', { betType, betAmount });
			isFavorite = await getFavoriteStatus(betType, betAmount);
		} catch (error) {
			console.error('Failed to initialize favorite status:', error);
		}
	}

	async function handleToggleFavorite() {
		try {
			isFavorite = await toggleFavoriteBet(betType, betAmount);
		} catch (error) {
			alert('Error toggling favorite bet. Please try again.');
			console.error('Failed to toggle favorite bet:', error);
		}
	}

	function handleBetAction() {
		console.log('Bet button clicked:', { betType, betAmount });
	}

	initializeFavoriteStatus();

	console.log('SmMenuBetBtn component loaded:', { betName, betAmount });
</script>

<div class="split-button" data-type={popupName} data-border=".25" data-borderRadius="1">
	<button class="menu-bet-button" on:click={handleBetAction}>
		<div
			class="bet-info"
			data-type={popupName}
			data-fontSize="1.5"
			data-marginLR="2"
			data-marginTB="1"
		>
			<span class="bet-amount" data-type={popupName} data-fontSize="2"
				>${betAmount.toLocaleString()}</span
			>
			<span class="bet-type">{betName}</span>
		</div>
	</button>
	<button
		class="favorite-toggle"
		data-type={popupName}
		data-fontSize="2.5"
		data-paddingLR="1"
		data-paddingTB="1"
		on:click={handleToggleFavorite}
	>
		{#if isFavorite}
			<span title="Remove Favorite" class="favorite-icon">★</span>
		{:else}
			<span title="Add Favorite" class="favorite-icon">☆</span>
		{/if}
	</button>
</div>
