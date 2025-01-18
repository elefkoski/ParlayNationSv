<script lang="ts">
	console.log('craps-simulator +page loading');

	import { isReadyForSync } from '$lib/utils/auth';
	import { onMount } from 'svelte';
	import MoreCrapsLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';
	import {
		enterFullScreen,
		exitFullScreen,
		scaleElements,
		scaleEverything,
		chips,
		toggleUiSetting,
		showSettingsPopup,
		showPassLinePopup,
		showEnterBtn,
		showExitBtn
	} from '../../lib/utils/simulator/craps-simulator-scaling';
	import {
		railTotal,
		layoutTotal,
		totalBankroll
	} from '../../lib/utils/simulator/simulator-calculations';
	import {
		rollDice,
		firstDieImage,
		secondDieImage
	} from '../../lib/utils/simulator/craps-simulator-game';
	import { placeBet } from '$lib/utils/simulator/bet-objects';
	import ChipSet from '$lib/components/simulator/ChipSet.svelte';
	import TouchBox from '$lib/components/simulator/TouchBox.svelte';
	import { touchBoxes } from '$lib/utils/simulator/touchboxes';
	import LgMenu from '$lib/components/simulator/LgMenu.svelte';
	import ScrollMenu from '$lib/components/simulator/HorizScrollMenu.svelte';
	import SmBetButton from '$lib/components/simulator/SmMenuBetBtn.svelte';
	import MdBetMenuButton from '$lib/components/simulator/MdBetMenuBtn.svelte';
	import MdBtnMenu from '$lib/components/simulator/MdBtnMenu.svelte';
	import GameInputBox from '$lib/components/simulator/GameInputBox.svelte';
	import LgMenuTextBox from '$lib/components/simulator/LgMenuTextBox.svelte';
	import PickupBetButton from '$lib/components/simulator/PickupBetBtn.svelte';
	import {
		user,
		playerBets,
		playerBetQueue,
		crSimPrefs,
		crSimPrefsQueue
	} from '../../lib/utils/userData';
	import {
		clearPlayerBetsFromLocalStorage,
		clearPlayerBetsFromFirebase,
		updateCrSimPrefsQueue,
		updatePlayerBetQueue
	} from '$lib/utils/userDataOperations';
	import { get } from 'svelte/store';

	let title: string = 'Craps Simulator';
	let description: string =
		'This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.';
	let url: string = 'craps-simulator';

	let dollarChips = chips[1];
	let nickelChips = chips[5];
	let quarterChips = chips[25];
	let hundredChips = chips[100];
	let fiveHundredChips = chips[500];
	let thousandChips = chips[1000];
	let fiveThousandChips = chips[5000];
	let inputValue: number = 5;
	let inputValue2: number = 5;

	let current_user: any = null;
	$: current_user = $user;

	onMount(() => {
		console.log('Craps-simulator on Mount being called');

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				exitFullScreen();
			}
		});

		const unsubscribeDataReady = isReadyForSync.subscribe((ready) => {
			if (ready) {
				console.log('Craps Simulator isReadyForSync state:', ready);
				scaleEverything();
			}
		});

		return () => {
			document.removeEventListener('keydown', exitFullScreen);
			unsubscribeDataReady();
		};
	});

	crSimPrefs.subscribe((prefs) => {
		console.log('Preferences updated:', prefs);

		// Compare current preferences with the queued state
		const currentQueue = get(crSimPrefsQueue);
		const queuedPrefs = currentQueue.get('preferences')?.data;

		// Only queue an update if preferences have changed
		if (!queuedPrefs || JSON.stringify(queuedPrefs) !== JSON.stringify(prefs)) {
			updateCrSimPrefsQueue('add', prefs);
		}
	});

	playerBets.subscribe((bets) => {
		console.log('Player Bets updated:', bets);

		// Compare current bets to the queue and update accordingly
		const cachedBets = get(playerBetQueue);

		bets.forEach((bet) => {
			updatePlayerBetQueue('add', bet); // Add or update the bet
		});

		// Handle removed bets (not in the current bets list but present in the queue)
		Array.from(cachedBets.keys()).forEach((betId) => {
			if (!bets.some((bet) => bet.id === betId)) {
				updatePlayerBetQueue('remove', { id: betId });
			}
		});
	});

	console.log('craps-simulator +page loaded.');
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={'http://parlaynation.com/' + url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<link rel="stylesheet" href="src/app.css" />
	<link rel="stylesheet" href="src/colors.css" />
	<link rel="stylesheet" href="src/craps-simulator.css" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Craps Simulator",
		"description": "This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.",
		"url": "http://parlaynation.com/craps-simulator",
		"image": "http://parlaynation.com/images/craps-simulator/craps-simulator-header.jpg",
		"publisher": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "http://parlaynation.com"
		}
	}
	</script>
</svelte:head>

<MoreCrapsLayout showContentMenuBox={false}>
	<!--<header aria-label="Craps simulator" class="p-6 home-page-body-bg-1">
		<h1 class="text-3xl font-bold mb-4">Craps Simulator</h1>
		<p class="mb-4 leading-7">
			This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line,
			Pass Line Odds, Place Bets, and the Field.
		</p>
		<p class="mb-4 leading-7">
			Once you learn how to play the Pass Line, you will be able to play Craps. The simulator will
			guide you through making a Point, adding Odds, and letting you roll until you seven out.
		</p>
		<p class="mb-4 leading-7">
			Place bets allow betting each or spread bets, and can be turned ON and OFF. Payments allow
			same bet, and presses include one-unit, press, full press, and double unit presses.
		</p>
		<p class="mb-4 leading-7">
			The simulator tracks the number of Points you make and how many times you rolled each number.
		</p>
	</header>-->
	<main aria-label="Main sections with craps simulator" class="mt-6">
		<!-- <section aria-label="Rules of craps" class="craps-rules">
			<h2>Objective:</h2>
			<p>
				Roll the dice to establish a Point of 4, 5, 6, 8, 9, or 10. Roll that Point again before a 7
				to win.
			</p>
			<p class="pb-4">
				During the Comeout Roll, when the Puck is OFF, you win if you roll 7 or 11, and lose if you
				roll a 2, 3, or 12.
			</p>
			<h2>Payouts:</h2>
			<section aria-label="Craps payouts and Odds" class="craps-payouts">
				<div>
					<h3>The Pass Line</h3>
					<ul>
						<li>The Pass Line always pays 1:1 (even money).</li>
					</ul>
					<h3>Pass Line Odds</h3>
					<ul>
						<li>Point 6 or 8 pays 6:5</li>
						<li>Point 5 or 9 pays 3:2</li>
						<li>Point 4 or 10 pays 2:1</li>
					</ul>
					<h3>Max Pass Line Odds</h3>
					<ul>
						<li>Max Odds are 5x your Pass Line bet on the 6 & 8.</li>
						<li>Max Odds are 4x your Pass Line bet on the 5 & 9.</li>
						<li>Max Odds are 3x your Pass Line bet on the 4 & 10.</li>
					</ul>
				</div>
				<div>
					<h3>Place Bets</h3>
					<ul>
						<li>Place 6 or 8 pays 7:6</li>
						<li>Place 5 or 9 pays 7:5</li>
						<li>Place 4 or 10 pays 9:5</li>
						<li>Buy 4 or 10 pays 2:1 with a 5% commission</li>
					</ul>
					<h3>The Field</h3>
					<ul>
						<li>Pays 1:1 when 3, 4, 9, 10, 11 rolls.</li>
						<li>Pays 2:1 when 2 or 12 rolls.</li>
					</ul>
				</div>
			</section>
		</section>-->
		<button id="start-game-btn" class="clear-both" on:click={() => enterFullScreen()}
			>Play Full Screen</button
		>

		<div id="game-area-wrapper">
			<div id="game-area-container">
				<section aria-label="Game area" id="game-area" class="game-area">
					<!-- Layout Total -->
					{#if $crSimPrefs.showLayout}
						<div
							class="layout-display game-element rounded-md hidden"
							data-type="layout"
							data-x="67"
							data-y="18.5"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
						>
							<p>Layout: ${$layoutTotal.toLocaleString()}</p>
						</div>
					{/if}
					<!-- Dice -->
					<img
						src={$firstDieImage}
						alt="Chip 1"
						class="die-one game-element hidden"
						data-x="81.5"
						data-y="24"
						data-width="6"
						data-height="10.66"
					/>
					<img
						src={$secondDieImage}
						alt="Chip 2"
						class="die-two game-element hidden"
						data-x="89"
						data-y="24"
						data-width="6"
						data-height="10.66"
					/>
					<!-- Stickwoman -->
					{#if $crSimPrefs.showStickperson}
						<div
							id="stickperson"
							class="stickperson game-element"
							data-type="stickperson"
							data-x="12"
							data-y="26"
							data-width="22.5"
							data-height="40"
						/>
					{/if}
					<!-- Text Container -->
					{#if $crSimPrefs.showGuide}
						<div
							id="guide"
							class="guide-container rounded-md game-element hidden"
							data-type="guide"
							data-x="41.5"
							data-y="12.75"
							data-fontsize="1.375"
							data-paddinglr="1.5"
							data-paddingtb="1.5"
							data-width="35"
							data-height="20"
						>
							<!-- Stick Call -->
							<p id="stick-call" class="stick-call hidden" data-type="stick-call">
								We’re coming out. World’s, Horn’s, Yo’s, Hi Low’s, C&E’s. Get em while the dice are
								in the middle.
							</p>
						</div>
					{/if}
					<!-- Rail Total -->
					{#if $crSimPrefs.showRail}
						<div
							class="rail-display game-element rounded-md hidden"
							data-type="rail"
							data-x="25"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
						>
							<p>Rail: ${$railTotal.toLocaleString()}</p>
						</div>
					{/if}
					<!-- Roll Button -->
					{#if $crSimPrefs.showRollButton}
						<input
							type="number"
							id="test-input"
							class="simple-input-box game-element hidden"
							data-x="60"
							data-y="85"
							data-width="5"
							data-height="4"
							bind:value={inputValue}
						/>
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="60"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => placeBet('passLine', inputValue)}>PL</button
						>
						<input
							type="number"
							id="second-input"
							class="simple-input-box game-element hidden"
							data-x="67"
							data-y="85"
							data-width="5"
							data-height="4"
							bind:value={inputValue2}
						/>
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="67"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => placeBet('dontPass', inputValue2)}>DP</button
						>
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="76"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => console.log('Player Bets: ', $playerBets)}>Log</button
						>
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="50"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => {
								console.log('Clearing Local Storage bets.');
								clearPlayerBetsFromLocalStorage();
							}}>C.Lo</button
						>
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="50"
							data-y="85"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => {
								console.log('Clearing Firebase bets for user:', current_user);
								clearPlayerBetsFromFirebase(current_user);
							}}>C.Fb</button
						>
					{/if}
					<!-- Bankroll Total -->
					{#if $crSimPrefs.showBankroll}
						<div
							class="bankroll-display game-element rounded-md hidden"
							data-type="bankroll"
							data-x="88"
							data-y="92.75"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
						>
							<p>Bankroll: ${$totalBankroll.toLocaleString()}</p>
						</div>
					{/if}
					<!-- Chips in Rail -->
					<div
						class="chip-area flex-wrap game-element"
						data-x="44.85"
						data-y="92.25"
						data-width="16.5"
						data-height="3.2"
						data-rowgap="0.6"
					>
						<div class="chip-container flex-row items-center gap-0">
							{#each $dollarChips as chip}
								<img src={chip} alt="$1 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $nickelChips as chip}
								<img src={chip} alt="$5 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $quarterChips as chip}
								<img src={chip} alt="$25 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $hundredChips as chip}
								<img src={chip} alt="$100 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $fiveHundredChips as chip}
								<img src={chip} alt="$500 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $thousandChips as chip}
								<img src={chip} alt="$1,000 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
						<div class="chip-container flex-row items-center gap-0">
							{#each $fiveThousandChips as chip}
								<img src={chip} alt="$5,000 Chip" class="chip-image m-0 p-0 hidden" />
							{/each}
						</div>
					</div>
					<!-- Settings Button -->
					<div
						class="settings-icon-container game-element hidden"
						data-x="96"
						data-y="7"
						data-width="4"
						data-height="4"
					>
						<button on:click={() => toggleUiSetting('showSettingsPopup')} class="settings-button">
							<img
								src="src/images/craps-simulator/settings-icon.png"
								alt="Settings Icon"
								class="settings-icon"
							/>
						</button>
					</div>
					<!-- Settings Popup -->
					{#if $showSettingsPopup}
						<LgMenu title="Settings" toggleKey="showSettingsPopup">
							<!-- show stickperson -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showStickperson}
										on:change={() => {
											scaleElements('stickperson');
										}}
									/>
									Show Stickperson
								</label>
							</div>
							<!-- show guide -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showGuide}
										on:change={() => {
											scaleElements('guide');
										}}
									/>
									Show Guide
								</label>
							</div>
							<!-- show bankroll total -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showBankroll}
										on:change={() => {
											scaleElements('bankroll');
										}}
									/>
									Show Bankroll
								</label>
							</div>
							<!-- show rail total -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showRail}
										on:change={() => {
											scaleElements('rail');
										}}
									/>
									Show Rail
								</label>
							</div>
							<!-- show layout total -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showLayout}
										on:change={() => {
											scaleElements('layout');
										}}
									/>
									Show Layout
								</label>
							</div>
							<!-- show roll button -->
							<div class="roll-option">
								<label>
									<input
										type="checkbox"
										bind:checked={$crSimPrefs.showRollButton}
										on:change={() => {
											scaleElements('roll-button');
										}}
									/>
									Show Roll Button
								</label>
							</div>
							{#if $showEnterBtn}
								<button
									id="enter-btn"
									class="enter-fullscreen-btn game-element popup"
									data-x="10.25"
									data-y="77.5"
									data-paddinglr="1"
									data-paddingtb="1"
									on:click={() => enterFullScreen()}>Enter Full Screen</button
								>
							{/if}
							{#if $showExitBtn}
								<button
									id="exit-btn"
									class="exit-fullscreen-btn game-element popup"
									data-x="8"
									data-y="52"
									data-fontsize="1.5"
									data-paddinglr="1"
									data-paddingtb="1"
									on:click={() => exitFullScreen()}>Exit Full Screen</button
								>
							{/if}
						</LgMenu>
					{/if}
					<!-- Touch Boxes -->
					<div id="touch-boxes">
						{#each touchBoxes as touchBox}
							<TouchBox
								id={touchBox.id}
								dataX={touchBox.dataX}
								dataY={touchBox.dataY}
								dataWidth={touchBox.dataWidth}
								dataHeight={touchBox.dataHeight}
								toggleKey={touchBox.toggleKey}
							/>
						{/each}
					</div>
					<!-- Popup Menus -->
					<div id="popups">
						{#if $showPassLinePopup}
							<LgMenu title="Bet the Pass Line" toggleKey="showPassLinePopup">
								<ScrollMenu popupName="smBtnPassLineMenu">
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={5} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={10} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={15} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={20} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={25} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={50} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={100} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={200} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={500} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={1000} />
								</ScrollMenu>
								<MdBtnMenu popupName="mdBtnPassLineMenu">
									<MdBetMenuButton
										betName="Pass Line"
										betType="pass-line"
										betAmount={'Max Bet'}
										betClass="max-bet-btn"
									/>
									<MdBetMenuButton
										betName="Pass Line"
										betType="pass-line"
										betAmount={'All In'}
										betClass="all-in-btn"
									/>
								</MdBtnMenu>
								<GameInputBox betType="pass-line" popupBox="showPassLinePopup" />
								<div class="flex justify-between gap-2">
									<LgMenuTextBox popupName="lgMenuTxtBoxPassLine" />
									<PickupBetButton betType="pass-line" />
								</div>
							</LgMenu>
						{/if}
					</div>
					<!-- Chip Set -->
					{#each $playerBets as { id, amount, baseX, baseY, direction } (id)}
						{#if baseX !== undefined && baseY !== undefined && direction !== undefined}
							<ChipSet {id} {amount} {baseX} {baseY} {direction} />
						{:else}
							<p>
								Error: Missing data for bet {JSON.stringify({
									id,
									amount,
									baseX,
									baseY,
									direction
								})}
							</p>
						{/if}
					{/each}
				</section>
			</div>
		</div>
	</main>
</MoreCrapsLayout>
