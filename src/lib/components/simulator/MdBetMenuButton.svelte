<script lang="ts">
	//import Popup from '../Popup.svelte';
	import {
		user,
		favoriteBets,
		saveFavoriteBet,
		removeFavoriteBet,
		generateBetId
	} from '$lib/utils/userData';
	import type { FavoriteBet } from '$lib/utils/userData';
	import { get } from 'svelte/store';

	export let betName: string = 'Pass Line';
	export let betAmount: any = 100;
	export let betType: string = 'Pass Line';
	export let betClass: string = 'bl-bet-btn';
	let current_user = get(user);
	let isFavorite: boolean = false;
	//let showPopup: boolean = false;

	let favorites: FavoriteBet[] = [];
	favoriteBets.subscribe((bets) => {
		favorites = bets;
	});

	$: isFavorite = favorites.some((bet) => bet.betId === betId);

	const betId = generateBetId(betType, betAmount);

	async function toggleFavorite() {
		if (!current_user) {
			//showPopup = true;
			//setTimeout(() => (showPopup = false), 3000);
			alert('Please log in to manage favorite bets.');
			return;
		}

		isFavorite = !isFavorite;

		const betDetails = { type: betType, amount: betAmount };

		if (isFavorite) {
			try {
				if (current_user?.id) {
					await saveFavoriteBet(current_user.id, { betId, betDetails });
				} else {
					isFavorite = false;
					console.error('User ID is undefined');
				}
				console.log('Bet saved to favorites:', { betId, betDetails });
			} catch (error) {
				console.error('Error saving favorite bet:', error);
				isFavorite = false;
			}
		} else {
			try {
				if (current_user?.id) {
					await removeFavoriteBet(current_user.id, betId);
				} else {
					console.error('User ID is undefined');
				}
				console.log('Bet removed from favorites:', betId);
			} catch (error) {
				console.error('Error removing favorite bet:', error);
				isFavorite = true;
			}
		}
		console.log('Favorites:', favorites);
	}

	function handleBetAction() {
		console.log('Bet button clicked:', { betType, betAmount });
	}
</script>

<div class="split-button popup" data-border=".25" data-borderRadius="1">
	<button class="menu-bet-button popup {betClass}" on:click={handleBetAction}>
		<div class="bet-info popup" data-fontSize="1.5" data-marginLR="8.5" data-marginTB="1">
			<span class="bet-amount popup" data-fontSize="2">{betAmount}</span>
			<span class="bet-type">{betName}</span>
		</div>
	</button>
	<button
		class="favorite-toggle popup"
		data-fontSize="2.5"
		data-paddingLR="1"
		data-paddingTB=".5"
		on:click={toggleFavorite}
	>
		{#if isFavorite}
			<span title="Remove Favorite" class="favorite-icon">★</span>
		{:else}
			<span title="Add Favorite" class="favorite-icon">☆</span>
		{/if}
	</button>
</div>
<!-- {#if showPopup} -->
<!-- 	<Popup message="You must be signed in to bookmark a page." /> -->
<!-- {/if} -->
