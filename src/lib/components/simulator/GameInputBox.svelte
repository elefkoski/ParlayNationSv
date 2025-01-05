<script lang="ts">
	console.log('GameInputBox component loading');

	import { user, favoriteBets, generateBetId } from '$lib/utils/userData';
	import { saveFavoriteBet, removeFavoriteBet } from '$lib/utils/userDataOperations';
	import { toggleUiSetting } from '../../utils/simulator/craps-simulator-scaling';
	import { get } from 'svelte/store';

	let current_user = get(user);
	export let betType: string = 'bet-type';
	let betAmount: number = 0;
	let favorites = get(favoriteBets);
	let isFavorite: boolean = false;
	let checkmarked: boolean = false;
	let checkboxText: string = 'Add to Favorites';
	let userToggledCheckbox: boolean = false;

	// Subscribe to favorites store updates
	favoriteBets.subscribe((bets) => {
		favorites = bets;
		console.log('favoriteBets updated via subscription:', favorites);
		updateFavoriteStatus(); // Explicitly update favorite status
	});

	// Updates the favorite status and synchronizes the checkbox
	function updateFavoriteStatus() {
		const betId = generateBetId(betType, betAmount); // Generate unique bet ID
		isFavorite = favorites.some((bet) => bet.betId === betId); // Check if the bet is in favorites

		// Only sync the checkbox if the user hasn't toggled it
		if (!userToggledCheckbox) {
			checkmarked = isFavorite;
		}

		// Update the checkbox text explicitly
		updateCheckboxText();

		console.log(
			'updateFavoriteStatus called. Bet ID=',
			betId,
			', isFavorite=',
			isFavorite,
			', checkmarked=',
			checkmarked
		);
	}

	// Updates the text displayed next to the checkbox
	function updateCheckboxText() {
		if (isFavorite && checkmarked) {
			checkboxText = 'Keep Favorite'; // State 3
		} else if (isFavorite && !checkmarked) {
			checkboxText = 'Submit to Unfavorite'; // State 4
		} else if (!isFavorite && checkmarked) {
			checkboxText = 'Submit to Favorite'; // State 2
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

	async function handleSubmit() {
		const betId = generateBetId(betType, betAmount); // Generate bet ID

		console.log(
			'handleSubmit called. betId=',
			betId,
			', checkmarked=',
			checkmarked,
			', isFavorite=',
			isFavorite
		);

		if (isFavorite && checkmarked) {
			console.log('handleSubmit: No changes needed. Bet is already a favorite.');
		} else if (isFavorite && !checkmarked) {
			try {
				await removeFavoriteBet('user-id', betId);
				console.log('handleSubmit: Removed from favorites. betId=', betId);
			} catch (error) {
				console.error('handleSubmit: Failed to remove favorite bet. Error:', error);
			}
			checkboxText = 'Submit to Unfavorite';
		} else if (!isFavorite && checkmarked) {
			try {
				await saveFavoriteBet('user-id', {
					betId,
					betDetails: { type: betType, amount: betAmount }
				});
				console.log('handleSubmit: Added to favorites. betId=', betId);
			} catch (error) {
				console.error('handleSubmit: Failed to save favorite bet. Error:', error);
			}
			checkboxText = 'Submit to Favorite';
		} else {
			console.log('handleSubmit: No action taken. Bet is not marked as favorite.');
			checkboxText = 'Add to Favorites';
		}
		toggleUiSetting('showPassLinePopup');

		// Reset user interaction state
		userToggledCheckbox = false;

		alert(`Bet submitted: ${betAmount}`);
	}

	console.log('GameInputBox component loaded');
</script>

<div
	aria-label="bet input"
	class="input-box flex items-center popup"
	data-gap="2"
	data-fontsize="2"
>
	<label for="pass-line-input" class="font-semibold">Bet Other Amount:</label>
	<input
		type="number"
		id="pass-line-input"
		name="pass-line-input"
		class="border rounded game-menu-input popup"
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
		class="game-input-btn rounded popup"
		data-paddingtb="1"
		data-paddinglr="2.5"
		on:click={handleSubmit}
	>
		Submit
	</button>
	<label class="flex items-center space-x-2">
		<input
			type="checkbox"
			id="add-to-favorites"
			name="add-to-favorites"
			class="checkbox popup"
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
