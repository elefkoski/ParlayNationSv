<script lang="ts">
	console.log('Craps Simulator page is being loaded');
	import { onMount } from 'svelte';
	import MoreCrapsLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';
	import {
		enterFullScreen,
		exitFullScreen,
		scaleElements,
		scaleChipsToFit,
		scaleAllPopups,
		railTotal,
		layoutTotal,
		totalBankroll,
		chips,
		toggleUiSetting,
		showSettingsPopup,
		showEnterBtn,
		showExitBtn
	} from '../../craps-simulator-layout';
	import { rollDice, firstDieImage, secondDieImage } from '../../craps-simulator-game';
	import LgMenu from '$lib/components/simulator/LgMenu.svelte';
	import TouchBox from '$lib/components/simulator/TouchBox.svelte';
	import { crapsSimulatorPreferences } from '../../lib/utils/store';
	import { updateDoc, doc } from 'firebase/firestore';
	import { db } from '../../lib/utils/firebase';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let title: string = 'Craps Simulator';
	let description: string =
		'This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.';
	let url: string = 'craps-simulator';

	let userId: string | null = null;

	let dollarChips = chips[1]; // access $1 chip store
	let nickelChips = chips[5]; // access $5 chip store
	let quarterChips = chips[25]; // access $25 chip store
	let hundredChips = chips[100]; // access $100 chip store
	let fiveHundredChips = chips[500]; // access $500 chip store
	let thousandChips = chips[1000]; // access $1,000 chip store
	let fiveThousandChips = chips[5000]; // access $5,000 chip store

	async function updatePreference(key: string, value: boolean) {
		if (!userId) {
			console.error('Cannot update preferences: No user ID available.');
			return;
		}

		const docRef = doc(db, 'users', userId);

		try {
			const updatedPrefs = { ...$crapsSimulatorPreferences, [key]: value };

			// Update Firestore
			await updateDoc(docRef, { crapsSimulator: updatedPrefs });

			// Update local store
			crapsSimulatorPreferences.set(updatedPrefs);

			console.log(`Preference updated: ${key} = ${value}`);
		} catch (error) {
			console.error(`Failed to update preference: ${key}`, error);
		}
	}

	onMount(async () => {
		console.log('Entered onMount in craps-simulator/+page.svelte');
		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				userId = user.uid;
				console.log(`Auth state changed. User ID: ${userId}`);
			} else {
				userId = null;
				console.error('User logged out or no user authenticated.');
			}
		});
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				exitFullScreen();
			}
		});

		await scaleElements();
		await scaleChipsToFit();
		await scaleAllPopups();
		console.log('Leaving onMount in craps-simulator/+page.svelte');
	});
	console.log('Craps Simulator page has been loaded');
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
	<header aria-label="Craps simulator" class="p-6 home-page-body-bg-1">
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
	</header>
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
					{#if $crapsSimulatorPreferences.showLayout}
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
					{#if $crapsSimulatorPreferences.showStickperson}
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
					{#if $crapsSimulatorPreferences.showGuide}
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
					{#if $crapsSimulatorPreferences.showRail}
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
					{#if $crapsSimulatorPreferences.showRollButton}
						<button
							class="roll-btn game-element rounded-md hidden"
							data-type="roll-button"
							data-x="60"
							data-y="94"
							data-fontsize="2"
							data-paddinglr="2"
							data-paddingtb="1"
							on:click={() => rollDice()}>Roll</button
						>
					{/if}
					<!-- Bankroll Total -->
					{#if $crapsSimulatorPreferences.showBankroll}
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
						data-gap="0.6"
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
						<LgMenu title="Settings">
							<!-- show stickperson -->
							<div>
								<label>
									<input
										type="checkbox"
										bind:checked={$crapsSimulatorPreferences.showStickperson}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showStickperson', target.checked);
												scaleElements('stickperson');
											}
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
										bind:checked={$crapsSimulatorPreferences.showGuide}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showGuide', target.checked);
												scaleElements('guide');
											}
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
										bind:checked={$crapsSimulatorPreferences.showBankroll}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showBankroll', target.checked);
												scaleElements('bankroll');
											}
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
										bind:checked={$crapsSimulatorPreferences.showRail}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showRail', target.checked);
												scaleElements('rail');
											}
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
										bind:checked={$crapsSimulatorPreferences.showLayout}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showLayout', target.checked);
												scaleElements('layout');
											}
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
										bind:checked={$crapsSimulatorPreferences.showRollButton}
										on:change={(e) => {
											const target = e.currentTarget;
											if (target && target instanceof HTMLInputElement) {
												updatePreference('showRollButton', target.checked);
												scaleElements('roll-button');
											}
										}}
									/>
									Show Roll Button
								</label>
							</div>
							{#if $showEnterBtn}
								<button
									id="enter-btn"
									class="enter-fullscreen-btn game-element popup"
									data-x="8"
									data-y="52"
									data-fontsize="1.5"
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
							<button
								id="toggle-button"
								class="settings-close-btn game-element popup"
								data-x="75"
								data-y="6"
								data-fontsize="1.5"
								data-paddinglr="1"
								data-paddingtb="1"
								on:click={() => toggleUiSetting('showSettingsPopup')}>Close</button
							>
						</LgMenu>
					{/if}
					<TouchBox id="touch-pass-line" dataX={40.25} dataY={75.5} dataWidth={15} dataHeight={4} />
					<TouchBox
						id="touch-pass-line-odds"
						dataX={40.5}
						dataY={81.5}
						dataWidth={15}
						dataHeight={4.5}
					/>
					<TouchBox id="touch-dont-pass" dataX={40.5} dataY={69} dataWidth={15} dataHeight={4.5} />
					<TouchBox
						id="touch-dont-pass-lay-odds"
						dataX={28.5}
						dataY={69}
						dataWidth={5}
						dataHeight={4.5}
					/>
					<TouchBox id="the-field" dataX={40.25} dataY={60.5} dataWidth={25} dataHeight={7.5} />
					<TouchBox id="come-bet" dataX={39.75} dataY={49} dataWidth={16.5} dataHeight={7.5} />
					<TouchBox id="dont-come-bet" dataX={21} dataY={34} dataWidth={3.25} dataHeight={12} />
					<TouchBox id="inside-four" dataX={26.25} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-four" dataX={26.25} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="inside-five" dataX={33.5} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-five" dataX={33.5} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="inside-six" dataX={40.25} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-six" dataX={40.25} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="inside-eight" dataX={47} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-eight" dataX={47} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="inside-nine" dataX={54} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-nine" dataX={54} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="inside-ten" dataX={61} dataY={36.5} dataWidth={4.75} dataHeight={9} />
					<TouchBox id="behind-ten" dataX={61} dataY={27} dataWidth={4.75} dataHeight={4.5} />
					<TouchBox id="c-and-e" dataX={70} dataY={61} dataWidth={4.75} dataHeight={35} />
					<TouchBox id="world" dataX={70} dataY={38.5} dataWidth={4.75} dataHeight={7} />
					<TouchBox id="hard-six" dataX={79} dataY={40} dataWidth={9} dataHeight={5} />
					<TouchBox id="hard-eight" dataX={92} dataY={40} dataWidth={9} dataHeight={5} />
					<TouchBox id="hard-four" dataX={79} dataY={48} dataWidth={9} dataHeight={5} />
					<TouchBox id="hard-ten" dataX={92} dataY={48} dataWidth={9} dataHeight={5} />
					<TouchBox id="any-seven" dataX={85.5} dataY={53.25} dataWidth={10} dataHeight={3} />
					<TouchBox id="horn-high-yo" dataX={75.75} dataY={58.5} dataWidth={5} dataHeight={5} />
					<TouchBox
						id="horn-high-ace-deuce"
						dataX={82.25}
						dataY={58.5}
						dataWidth={5}
						dataHeight={5}
					/>
					<TouchBox id="horn-bet" dataX={85.25} dataY={68} dataWidth={7.5} dataHeight={8} />
					<TouchBox id="horn-high-aces" dataX={88.5} dataY={58.5} dataWidth={5} dataHeight={5} />
					<TouchBox id="horn-high-twelve" dataX={94.75} dataY={58.5} dataWidth={5} dataHeight={5} />
					<TouchBox id="straight-aces" dataX={76.75} dataY={65} dataWidth={6} dataHeight={5} />
					<TouchBox id="straight-twelve" dataX={93.75} dataY={65} dataWidth={6} dataHeight={5} />
					<TouchBox
						id="straight-ace-deuce"
						dataX={76.75}
						dataY={71.5}
						dataWidth={6}
						dataHeight={5}
					/>
					<TouchBox id="straight-yo" dataX={93.75} dataY={71.5} dataWidth={6} dataHeight={5} />
					<TouchBox id="any-craps" dataX={85.5} dataY={76.5} dataWidth={10} dataHeight={3} />
				</section>
			</div>
		</div>
	</main>
</MoreCrapsLayout>
