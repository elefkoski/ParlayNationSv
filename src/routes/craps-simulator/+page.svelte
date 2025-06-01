<script lang="ts">
	console.log('craps-simulator +page loading');

	import { isReadyForSync } from '$lib/utils/auth';
	import { onMount } from 'svelte';
	import MoreCrapsLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';
	import {
		enterFullScreen,
		exitFullScreen,
		scaleElement,
		scaleEverything,
		chips,
		toggleUiSetting,
		settingsPopupKey,
		passLinePopupKey,
		enterBtnKey,
		exitBtnKey
	} from '../../lib/utils/simulator/craps-simulator-scaling';
	import {
		railTotal,
		layoutTotal,
		currentBankroll
	} from '../../lib/utils/simulator/craps-simulator-game-data';
	import {
		rollDice,
		firstDieImage,
		secondDieImage
	} from '../../lib/utils/simulator/craps-simulator-game';
	import ChipSet from '$lib/components/simulator/ChipSet.svelte';
	import TouchBox from '$lib/components/simulator/TouchBox.svelte';
	import { touchBoxes } from '$lib/utils/simulator/touchboxes';
	import LgMenu from '$lib/components/simulator/LgMenu.svelte';
	import HorizScrollMenu from '$lib/components/simulator/HorizScrollMenu.svelte';
	import SmBetButton from '$lib/components/simulator/SmMenuBetBtn.svelte';
	import MdBetMenuButton from '$lib/components/simulator/MdBetMenuBtn.svelte';
	import MdBtnMenu from '$lib/components/simulator/MdBtnMenu.svelte';
	import GameInputBox from '$lib/components/simulator/GameInputBox.svelte';
	import LgMenuTextBox from '$lib/components/simulator/LgMenuTextBox.svelte';
	import PickupBetButton from '$lib/components/simulator/PickupBetBtn.svelte';
	import {
		user,
		isFirebaseUser,
		favoriteBets,
		playerBets,
		crSimPrefs
	} from '../../lib/utils/userData';
	import {
		toggleCrSimPref,
		syncCrSimPrefsToLocal,
		syncPlayerBetsToLocal,
		clearPlayerBetsFromLocalStorage,
		clearPlayerBetsFromFirebase
	} from '$lib/utils/userDataOperations';
	import { get } from 'svelte/store';
	import { makeBet } from '$lib/utils/simulator/bet-objects';

	let title: string = 'Craps Simulator';
	let description: string =
		'Coming soon - Our Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.';
	let url: string = 'craps-simulator';

	let current_user: any = null;
	let is_ready: boolean = false;
	$: current_user = $user;
	$: is_ready = $isReadyForSync;

	onMount(() => {
		console.log('Craps-simulator on Mount being called');

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				exitFullScreen();
			}
		});

		if (is_ready) {
			console.log('Ready to scale everything.');
			scaleEverything();
		}

		console.log('Craps Simulator isReadyForSync state:', get(isReadyForSync));
		console.log('Craps simulator preferences: ', get(crSimPrefs));
		console.log('Player Bets: ', get(playerBets));
		console.log('Favorite Bets: ', get(favoriteBets));
	});

	crSimPrefs.subscribe((prefs) => {
		if (!is_ready) {
			console.log('crSimPrefs subscription called, but not ready to scale everything.');
			return;
		}
		console.log('crSimPrefs subscription called.', prefs);
		syncCrSimPrefsToLocal();
	});

	playerBets.subscribe((bets) => {
		if (!is_ready) {
			console.log('playerBets subscription called, but not ready to scale everything.');
			return;
		}
		console.log('playerBets subscription called.', bets);
		syncPlayerBetsToLocal();
	});

	function handleCheckboxChange(event: Event, settingKey: string): void {
		const target = event.target as HTMLInputElement;
		if (target) {
			toggleCrSimPref(settingKey, target.checked);
		}
	}

	let dollarChips = chips[1];
	let nickelChips = chips[5];
	let quarterChips = chips[25];
	let hundredChips = chips[100];
	let fiveHundredChips = chips[500];
	let thousandChips = chips[1000];
	let fiveThousandChips = chips[5000];

	let inputValue: number = 5;
	let inputValue2: number = 5;

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
		"description": "Coming soon - Our Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line, Pass Line Odds, Place Bets, and the Field.",
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
	<main class="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
		<h1 class="text-3xl font-bold mb-6">{title}</h1>
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md max-w-2xl">
			<div class="flex items-center mb-4">
				<svg
					class="w-6 h-6 text-yellow-400 mr-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
				<p class="text-xl font-semibold text-yellow-700">Under Construction</p>
			</div>
			<p class="text-gray-600 mb-4">
				We're currently working on building an interactive Craps Simulator to help you learn and
				practice the game. Check back soon for:
			</p>
			<ul class="text-left text-gray-600 mb-4 ml-6 list-disc">
				<li>Interactive dice rolling</li>
				<li>Pass Line and Odds betting</li>
				<li>Place betting system</li>
				<li>Detailed statistics tracking</li>
			</ul>
			<p class="text-gray-600 italic">Thank you for your patience while we develop this feature!</p>
		</div>
	</main>
</MoreCrapsLayout>
