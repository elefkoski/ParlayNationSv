<script lang="ts">
	console.log('GameInputBox component loading');

	import { onMount } from 'svelte';
	import { user, favoriteBets } from '$lib/utils/userData';
	import {
		generatePlayerBetId,
		getFavoriteBetStatus,
		syncFavoriteBetsToLocal
	} from '$lib/utils/userDataOperations';
	import { toggleUiSetting, scalePopup } from '../../utils/simulator/craps-simulator-scaling';
	import { get } from 'svelte/store';

	let current_user = get(user);
	export let betType: string = 'bet-type';
	export let toggleKey: string = 'toggleKey';
	export let scalePopupKey: string = 'scalePopupKey';
	let betAmount: number = 0;
	let favorites = get(favoriteBets);
	let isFavorite: boolean = false;
	let checkmarked: boolean = false;
	let checkboxText: string = 'Add to Favorites';
	let userToggledCheckbox: boolean = false;

	onMount(() => {
		scalePopup(scalePopupKey);
	});

	// Subscribe to favorites store updates
	favoriteBets.subscribe((bets) => {
		favorites = bets;
		console.log('favoriteBets updated via subscription:', favorites);
		updateFavoriteStatus(); // Explicitly update favorite status
	});

	// Updates the favorite status and synchronizes the checkbox
	async function updateFavoriteStatus() {
		console.log('updateFavoriteStatus called. betType=', betType, ', betAmount=', betAmount);

		isFavorite = await getFavoriteBetStatus(betType, betAmount);
		console.log('updateFavoriteStatus isFavorite=', isFavorite);

		// Only sync the checkbox if the user hasn't toggled it
		if (!userToggledCheckbox) {
			checkmarked = isFavorite;
		}

		// Update the checkbox text explicitly
		updateCheckboxText();
		let betId = generatePlayerBetId(betType, betAmount);
		console.log(
			'updateFavoriteStatus called. Bet ID=',
			betId,
			', isFavorite=',
			isFavorite,
			', checkmarked=',
			checkmarked
		);
	}
	// Helper Functions
	// Updates the text displayed next to the checkbox
	function updateCheckboxText() {
		if (isFavorite && checkmarked) {
			checkboxText = 'Keep Favorite'; // State 3
		} else if (isFavorite && !checkmarked) {
			checkboxText = 'Submit to Unfavorite'; // State 4
		} else if (!isFavorite && checkmarked) {
			checkboxText = 'Submit Bet to Favorite'; // State 2
		} else {
			checkboxText = 'Add to Favorites'; // State 1
		}

		console.log('updateCheckboxText updated. Current value:', checkboxText);
	}

	function toggleFavorite() {
		console.log('toggleFavorite called. Current checkmarked=', checkmarked);
		if (!current_user) {
			alert('Please log in to manage favorite bets.');
			return;
		}
		userToggledCheckbox = true; // Prevent syncing
		checkmarked = !checkmarked; // Toggle the state
		updateCheckboxText(); // Update the checkbox text

		console.log('toggleFavorite called. Toggled checkmarked to', checkmarked);
	}

	async function handleSubmit(toggleKey: string) {
		const betId = generatePlayerBetId(betType, betAmount); // Generate bet ID

		console.log(
			'handleSubmit called. betId=',
			betId,
			', checkmarked=',
			checkmarked,
			', isFavorite=',
			isFavorite
		);

		try {
			if (isFavorite && !checkmarked) {
				// Remove from favorites
				favoriteBets.update((bets) => bets.filter((bet) => bet.betId !== betId));
				syncFavoriteBetsToLocal();
				console.log('handleSubmit: Queued removal from favorites. betId=', betId);
			} else if (!isFavorite && checkmarked) {
				// Add to favorites
				favoriteBets.update((bets) => [
					...bets,
					{ betId, betDetails: { type: betType, amount: betAmount } }
				]);
				syncFavoriteBetsToLocal();
				console.log('handleSubmit: Queued addition to favorites. betId=', betId);
			} else {
				console.log('handleSubmit: No action taken. Bet is not marked as favorite.');
			}

			toggleUiSetting(toggleKey);
			userToggledCheckbox = false; // Reset interaction state
		} catch (error) {
			console.error('Error in handleSubmit:', error);
		}
	}

	console.log('GameInputBox component loaded');
</script>

<div
	aria-label="bet input"
	class="input-box flex items-center"
	data-type={scalePopupKey}
	data-gap="2"
	data-fontsize="2"
>
	<label for="pass-line-input" class="font-semibold">Bet Other Amount:</label>
	<input
		type="number"
		id="pass-line-input"
		name="pass-line-input"
		class="border rounded game-menu-input"
		data-type={scalePopupKey}
		data-width="12"
		data-paddinglr=".5"
		data-border=".25"
		placeholder="Amount"
		min="5"
		max="5000"
		step="5"
		bind:value={betAmount}
		on:input={updateFavoriteStatus}
	/>
	<button
		class="game-input-btn rounded"
		data-type={scalePopupKey}
		data-paddingtb="1"
		data-paddinglr="2.5"
		on:click={async () => await handleSubmit(toggleKey)}
	>
		Submit
	</button>
	<label class="flex items-center space-x-2">
		<input
			type="checkbox"
			id="add-to-favorites"
			name="add-to-favorites"
			class="checkbox"
			data-type={scalePopupKey}
			data-width="2.25"
			data-height="4"
			data-border=".25"
			data-borderRadius=".5"
			checked={checkmarked}
			on:change={toggleFavorite}
		/>
		<span class="font-semibold">
			{checkboxText}
		</span>
	</label>
</div>
