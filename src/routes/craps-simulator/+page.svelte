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
		showPassLinePopup,
		showEnterBtn,
		showExitBtn
	} from '../../craps-simulator-layout';
	import { rollDice, firstDieImage, secondDieImage } from '../../craps-simulator-game';
	import ChipSetVert1 from '$lib/components/simulator/ChipSetVert1.svelte';
	import ChipSetVert2 from '$lib/components/simulator/ChipSetVert2.svelte';
	import ChipSetHoriz from '$lib/components/simulator/ChipSetHoriz.svelte';
	import TouchBox from '$lib/components/simulator/TouchBox.svelte';
	import LgMenu from '$lib/components/simulator/LgMenu.svelte';
	import SmBetButton from '$lib/components/simulator/SmMenuBetButton.svelte';
	import MdBetMenuButton from '$lib/components/simulator/MdBetMenuButton.svelte';
	import MdBtnMenu from '$lib/components/simulator/MdBtnMenu.svelte';
	import GameInputBox from '$lib/components/simulator/GameInputBox.svelte';
	import ScrollMenu from '$lib/components/simulator/HorizScrollMenu.svelte';
	import { crapsSimulatorPreferences, user } from '../../lib/utils/userData';
	import { loadTempPreferences, saveTempPreferences } from '$lib/utils/tempPreferences';
	import { updateDoc, doc } from 'firebase/firestore';
	import { db } from '../../lib/utils/firebase';

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

	let current_user: any = null;
	$: current_user = $user;

	async function updatePreference(key: string, value: boolean) {
		if (!current_user?.id) {
			console.error('Cannot update preferences: No user authenticated.');
			return;
		}

		const updatedPrefs = { ...$crapsSimulatorPreferences, [key]: value };
		if (current_user.id) {
			const docRef = doc(db, 'users', current_user.id);
			try {
				await updateDoc(docRef, { crapsSimulator: updatedPrefs });
				console.log(`Preference updated: ${key} = ${value}`);
			} catch (error) {
				console.error(`Failed to update preference: ${key}`, error);
			}
		} else {
			saveTempPreferences(updatedPrefs);
			console.log(`Temporary preference updated: ${key} = ${value}`);
		}
		crapsSimulatorPreferences.set(updatedPrefs);
	}

	onMount(async () => {
		const tempPreferences = loadTempPreferences();
		if (tempPreferences) {
			crapsSimulatorPreferences.set(tempPreferences);
			console.log('Loaded temporary preferences:', tempPreferences);
		}
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				exitFullScreen();
			}
		});

		await scaleElements();
		await scaleChipsToFit();
		await scaleAllPopups();
	});
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
							<p class="popup">Rail: ${$railTotal.toLocaleString()}</p>
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
							<p class="popup">Bankroll: ${$totalBankroll.toLocaleString()}</p>
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
						</LgMenu>
					{/if}
					<!-- Touch Boxes -->
					<div id="touch-boxes">
						<TouchBox
							id="touch-pass-line"
							dataX={40.25}
							dataY={75.5}
							dataWidth={15}
							dataHeight={4}
							toggleKey="showPassLinePopup"
						/>
						<TouchBox
							id="touch-pass-line-odds"
							dataX={40.5}
							dataY={81.5}
							dataWidth={15}
							dataHeight={4.5}
						/>
						<TouchBox
							id="touch-dont-pass"
							dataX={40.5}
							dataY={69}
							dataWidth={15}
							dataHeight={4.5}
						/>
						<TouchBox id="the-field" dataX={40.25} dataY={60.5} dataWidth={32} dataHeight={9} />
						<TouchBox id="come-bet" dataX={40.25} dataY={49} dataWidth={32} dataHeight={9} />
						<TouchBox id="dont-come-bet" dataX={21} dataY={34} dataWidth={3.25} dataHeight={12} />
						<TouchBox id="inside-four" dataX={26.25} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox
							id="behind-four"
							dataX={26.375}
							dataY={27}
							dataWidth={6.25}
							dataHeight={4.5}
						/>
						<TouchBox id="inside-five" dataX={33.5} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox id="behind-five" dataX={33.25} dataY={27} dataWidth={6.25} dataHeight={4.5} />
						<TouchBox id="inside-six" dataX={40.25} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox id="behind-six" dataX={40.25} dataY={27} dataWidth={6.25} dataHeight={4.5} />
						<TouchBox id="inside-eight" dataX={47} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox id="behind-eight" dataX={47} dataY={27} dataWidth={6.25} dataHeight={4.5} />
						<TouchBox id="inside-nine" dataX={54} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox id="behind-nine" dataX={54} dataY={27} dataWidth={6.25} dataHeight={4.5} />
						<TouchBox id="inside-ten" dataX={61} dataY={36.5} dataWidth={6} dataHeight={9} />
						<TouchBox id="behind-ten" dataX={61} dataY={27} dataWidth={6.25} dataHeight={4.5} />
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
						<TouchBox
							id="horn-high-twelve"
							dataX={94.75}
							dataY={58.5}
							dataWidth={5}
							dataHeight={5}
						/>
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
					</div>
					<!-- Popup Menus -->
					<div id="popups">
						{#if $showPassLinePopup}
							<LgMenu title="Bet the Pass Line" toggleKey="showPassLinePopup">
								<ScrollMenu>
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={1} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={5} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={25} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={100} />
									<SmBetButton betName="Pass Line" betType="pass-line" betAmount={500} />
								</ScrollMenu>
								<MdBtnMenu>
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
								<GameInputBox betType="pass-line" />
							</LgMenu>
						{/if}
					</div>
					<!-- Chip Set -->
					<ChipSetVert1 id={'pass-line-cheques'} dataX={40} dataY={74.25} />
					<ChipSetVert1 id={'pass-line-payment-cheques'} dataX={41.875} dataY={74.25} />
					<ChipSetVert1 id={'pass-line-odds-cheques'} dataX={40} dataY={80.25} />
					<ChipSetVert1 id={'pass-line-odds-payment-cheques'} dataX={41.875} dataY={80.25} />
					<ChipSetVert1 id={'dont-pass-cheques'} dataX={40} dataY={68} />
					<ChipSetVert1 id={'dont-pass-payment-cheques'} dataX={41.875} dataY={68} />
					<ChipSetHoriz id={'dont-pass-lay-odds-cheques'} dataX={38} dataY={69.5} />
					<ChipSetHoriz id={'dont-pass-lay-odds-payment-cheques'} dataX={38} dataY={66.25} />
					<ChipSetVert1 id={'field-cheques'} dataX={40} dataY={59.25} />
					<ChipSetVert1 id={'field-single-payment-cheques'} dataX={41.875} dataY={59.25} />
					<ChipSetVert1 id={'field-double-payment-cheques'} dataX={38.125} dataY={59.25} />
					<ChipSetVert1 id={'come-bet-cheques'} dataX={39.5} dataY={48.25} />
					<ChipSetVert1 id={'come-bet-payment-cheques'} dataX={41.375} dataY={48.25} />
					<ChipSetVert1 id={'dont-come-bet-cheques'} dataX={19.875} dataY={33.375} />
					<ChipSetVert1 id={'dont-come-bet-payment-cheques'} dataX={21.75} dataY={33.25} />
					<ChipSetVert2 id={'place-four-cheques'} dataX={28} dataY={42.75} />
					<ChipSetVert2 id={'come-bet-four-cheques'} dataX={24.5} dataY={39} />
					<ChipSetHoriz id={'come-bet-odds-four-cheques'} dataX={25.5} dataY={39.25} />
					<ChipSetVert1 id={'behind-four-cheques'} dataX={26} dataY={26.25} />
				</section>
			</div>
		</div>
	</main>
</MoreCrapsLayout>
