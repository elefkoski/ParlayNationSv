<script lang="ts">
	import { onMount } from 'svelte';
	import MoreCrapsLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';
	import {
		enterFullScreen,
		exitFullScreen,
		scaleElements,
		scaleChipsToFit,
		scaleAllPopups,
		toggleVisibility,
		railTotal,
		layoutTotal,
		totalBankroll,
		chips
	} from '../../craps-simulator-layout';
	import Menu from '$lib/components/simulator/gameMenu.svelte';
	import ToggleCheckbox from '$lib/components/simulator/toggleCheckbox.svelte';
	import { rollDice, firstDieImage, secondDieImage } from '../../craps-simulator-game';

	let title: string = 'Craps Simulator';
	let description: string =
		'This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.';
	let url: string = 'craps-simulator';

	let dollarChips = chips[1]; // access $1 chip store
	let nickelChips = chips[5]; // access $5 chip store
	let quarterChips = chips[25]; // access $25 chip store
	let hundredChips = chips[100]; // access $100 chip store
	let fiveHundredChips = chips[500]; // access $500 chip store
	let thousandChips = chips[1000]; // access $1,000 chip store
	let fiveThousandChips = chips[5000]; // access $5,000 chip store

	onMount(() => {
		// Add event listener for Escape key press
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				exitFullScreen();
			}
		});

		scaleElements();
		scaleChipsToFit();
		scaleAllPopups();
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
		<section aria-label="Rules of craps" class="craps-rules">
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
		</section>
		<button id="start-game-btn" class="clear-both" on:click={() => enterFullScreen()}
			>Play Full Screen</button
		>

		<div id="game-area-wrapper">
			<div id="game-area-container">
				<section aria-label="Game area" id="game-area" class="game-area">
					<!-- Layout Total -->
					<div
						id="layout-total"
						class="layout-display game-element rounded-md hidden"
						data-x="67"
						data-y="18.5"
						data-fontsize="2"
						data-paddinglr="2"
						data-paddingtb="1"
					>
						<p class="hidden">Layout: ${$layoutTotal.toLocaleString()}</p>
					</div>
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
					<div
						id="stickperson"
						class="stickperson game-element"
						data-x="12"
						data-y="26"
						data-width="22"
						data-height="40"
					/>
					<!-- Text Container -->
					<div
						id="guide"
						class="guide-container rounded-md game-element hidden"
						data-x="41.5"
						data-y="12.75"
						data-fontsize="1.375"
						data-paddinglr="1.5"
						data-paddingtb="1.5"
						data-width="35"
						data-height="20"
					>
						<!-- Stick Call -->
						<p id="stick-call" class="stick-call hidden">
							We’re coming out. World’s, Horn’s, Yo’s, Hi Low’s, C&E’s. Get em while the dice are in
							the middle.
						</p>
					</div>
					<!-- Rail Total -->
					<div
						id="rail-total"
						class="rail-display game-element rounded-md hidden"
						data-x="25"
						data-y="94"
						data-fontsize="2"
						data-paddinglr="2"
						data-paddingtb="1"
					>
						<p class="hidden">Rail: ${$railTotal.toLocaleString()}</p>
					</div>
					<!-- Roll Button -->
					<button
						id="roll-button"
						class="roll-btn game-element rounded-md hidden"
						data-x="60"
						data-y="94"
						data-fontsize="2"
						data-paddinglr="2"
						data-paddingtb="1"
						on:click={() => rollDice()}>Roll</button
					>
					<!-- Bankroll Total -->
					<div
						id="bankroll-total"
						class="bankroll-display game-element rounded-md hidden"
						data-x="88"
						data-y="92.75"
						data-fontsize="2"
						data-paddinglr="2"
						data-paddingtb="1"
					>
						<p class="hidden">Bankroll: ${$totalBankroll.toLocaleString()}</p>
					</div>
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
						<button on:click={() => toggleVisibility('showSettingsPopup')} class="settings-button">
							<img
								src="src/images/craps-simulator/settings-icon.png"
								alt="Settings Icon"
								class="settings-icon"
							/>
						</button>
					</div>
					<!-- Settings Menu -->
					<Menu
						id="settings-menu"
						title="Settings"
						className="settings-menu"
						onClose={() => toggleVisibility('settings-menu')}
					>
						<ToggleCheckbox id="stickperson" label="Show Stickperson" />
						<ToggleCheckbox id="guide" label="Show Guide" />
						<ToggleCheckbox id="bankroll-total" label="Show Bankroll" />
						<ToggleCheckbox id="rail-total" label="Show Rail" />
						<ToggleCheckbox id="layout-total" label="Show Layout" />
						<ToggleCheckbox id="roll-button" label="Show Roll Button" />
						<button
							id="enter-btn"
							class="enter-fullscreen-btn game-element"
							data-x="8"
							data-y="52"
							data-fontsize="1.5"
							data-paddinglr="1"
							data-paddingtb="1"
							on:click={() => enterFullScreen()}>Enter Full Screen</button
						>
						<button
							id="exit-btn"
							class="exit-fullscreen-btn game-element hidden"
							data-x="8"
							data-y="52"
							data-fontsize="1.5"
							data-paddinglr="1"
							data-paddingtb="1"
							on:click={() => exitFullScreen()}>Exit Full Screen</button
						>
						<button
							id="toggle-button"
							class="settings-close-btn game-element"
							data-x="75"
							data-y="6"
							data-fontsize="1.5"
							data-paddinglr="1"
							data-paddingtb="1"
							on:click={() => toggleVisibility('showSettingsPopup')}>Close</button
						>
					</Menu>
				</section>
			</div>
		</div>
	</main>
</MoreCrapsLayout>
