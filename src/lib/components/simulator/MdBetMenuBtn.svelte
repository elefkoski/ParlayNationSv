<script lang="ts">
	console.log('MdBetMenuBtn component loading');

	import { onMount } from 'svelte';
	import {
		toggleFavoriteBet,
		getFavoriteStatus,
		generatePlayerBetId
	} from '$lib/utils/userDataOperations';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';

	export let betName: string = 'Pass Line';
	export let betAmount: any = 100;
	export let betType: string = 'Pass Line';
	export let betClass: string = 'bl-bet-btn';
	let popupName = generatePlayerBetId(betType, betAmount);

	let isFavorite: boolean = false;

	console.log('MdMenuBetBtn component loading:', { betName, betAmount });

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

	console.log('MdBetMenuBtn component loaded.');
</script>

<div class="split-button" data-type={popupName} data-border=".25" data-borderRadius="1">
	<button class="menu-bet-button {betClass}" on:click={handleBetAction}>
		<div
			class="bet-info"
			data-type={popupName}
			data-fontSize="1.5"
			data-marginLR="8.5"
			data-marginTB="1"
		>
			<span class="bet-amount" data-type={popupName} data-fontSize="2">{betAmount}</span>
			<span class="bet-type">{betName}</span>
		</div>
	</button>
	<button
		class="favorite-toggle"
		data-type={popupName}
		data-fontSize="2.5"
		data-paddingLR="1"
		data-paddingTB=".5"
		on:click={handleToggleFavorite}
	>
		{#if isFavorite}
			<span title="Remove Favorite" class="favorite-icon">★</span>
		{:else}
			<span title="Add Favorite" class="favorite-icon">☆</span>
		{/if}
	</button>
</div>
