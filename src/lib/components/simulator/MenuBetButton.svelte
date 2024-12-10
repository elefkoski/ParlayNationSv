<script lang="ts">
	import { user, favoriteBets, saveFavoriteBet, removeFavoriteBet } from '$lib/utils/userData';
	import type { FavoriteBet } from '$lib/utils/userData';
	import { get } from 'svelte/store';

	export let betAmount: number = 100;
	export let betType: string = 'Pass Line';
	let current_user = get(user);
	let isFavorite: boolean = false;

	let favorites: FavoriteBet[] = [];
	favoriteBets.subscribe((bets) => {
		favorites = bets;
	});

	$: isFavorite = favorites.some((bet) => bet.betId === betId);

	const betId = generateBetId(betType, betAmount);
	function generateBetId(type: string, amount: number): string {
		return `${type}-${amount}`.replace(/\s+/g, '-').toLowerCase();
	}

	async function toggleFavorite() {
		if (!current_user) {
			alert('Please log in to manage favorite bets.');
			return;
		}

		isFavorite = !isFavorite;

		const betDetails = { type: betType, amount: betAmount };

		if (isFavorite) {
			// Add the favorite bet
			try {
				if (current_user?.id) {
					await saveFavoriteBet(current_user.id, { betId, betDetails });
				} else {
					console.error('User ID is undefined');
					isFavorite = false; // Revert favorite status on failure
				}
				console.log('Bet saved to favorites:', { betId, betDetails });
			} catch (error) {
				console.error('Error saving favorite bet:', error);
				isFavorite = false; // Revert favorite status on failure
			}
		} else {
			// Remove the favorite bet
			try {
				if (current_user?.id) {
					await removeFavoriteBet(current_user.id, betId);
				} else {
					console.error('User ID is undefined');
				}
				console.log('Bet removed from favorites:', betId);
			} catch (error) {
				console.error('Error removing favorite bet:', error);
				isFavorite = true; // Revert favorite status on failure
			}
		}
		console.log('Favorites:', favorites);
	}

	// Handles the primary button click
	function handleBetAction() {
		console.log('Bet button clicked:', { betType, betAmount });
	}
</script>

<div class="split-button popup" data-border=".25" data-borderRadius="1">
	<button class="menu-bet-button popup" on:click={handleBetAction}>
		<div class="bet-info popup" data-fontSize="1.5" data-marginLR="2" data-marginTB="1">
			<span class="bet-amount popup" data-fontSize="2">${betAmount}</span>
			<span class="bet-type">{betType}</span>
		</div>
	</button>
	<button
		class="favorite-toggle popup"
		data-fontSize="2.5"
		data-paddingLR="1"
		data-paddingTB="1"
		on:click={toggleFavorite}
	>
		{#if isFavorite}
			<span title="Remove Favorite" class="favorite-icon">★</span> <!-- Filled star -->
		{:else}
			<span title="Add Favorite" class="favorite-icon">☆</span> <!-- Empty star -->
		{/if}
	</button>
</div>
