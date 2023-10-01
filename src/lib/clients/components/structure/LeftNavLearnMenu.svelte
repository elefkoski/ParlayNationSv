<script lang="ts">
	import LeftNavUl from '$lib/clients/components/structure/LeftNav-ul.svelte';
	import LeftNavMainUl from '$lib/clients/components/structure/LeftNavMainMenu.svelte';
	let subMenus: {
		title: string;
		items: string[];
		mainHref: string;
		href: string[];
	}[] = [
		{
			title: 'Craps Basics',
			items: [
				'The Crew',
				'The Craps Table',
				'The Dice',
				'The Stages',
				'Verbal Betting',
				'To Consider'
			],
			mainHref: 'craps-basics',
			href: [
				'the-crew',
				'the-craps-table',
				'the-dice',
				'the-stages',
				'verbal-betting',
				'to-consider'
			]
		},
		{
			title: 'The Pass Line',
			items: ['Pass Line Basics', 'Pass Line Odds', 'Max Odds on the Pass Line'],
			mainHref: 'the-pass-line',
			href: ['pass-line-basics', 'pass-line-odds', 'max-odds']
		},
		{
			title: 'Place Bets',
			items: ['Place Bet Basics', 'Buying Place Bets', 'Your Money', 'Presses'],
			mainHref: 'place-bets',
			href: ['place-bet-basics', 'buying-place-bets', 'your-money', 'presses']
		},
		{
			title: 'Spread Bets',
			items: ['Across', 'Inside', 'Outside', 'Uptown/Downtown', 'Including the Point'],
			mainHref: 'spread-bets',
			href: ['across', 'inside', 'outside', 'uptown-downtown', 'including-the-point']
		},
		{
			title: 'Proposition Bets',
			items: [
				'Proposition Basics',
				'The Hardways',
				'Straight Up',
				'C & E',
				'Any Seven',
				'Any Craps',
				'The Field',
				'Multi-Bets',
				'Horn',
				'Horn High',
				'World',
				'Hop Bets'
			],
			mainHref: 'proposition-bets',
			href: [
				'proposition-basics',
				'the-hardways',
				'straight-up',
				'c-and-e',
				'any-seven',
				'any-craps',
				'the-field',
				'multi-bets',
				'horn',
				'horn-high',
				'world',
				'hop-bets'
			]
		},
		{
			title: 'Come Bets',
			items: ['Come Bet Basics', 'Come Bet Odds', 'Coming Down w/Odds'],
			mainHref: 'come-bets',
			href: ['come-bet-basics', 'come-bet-odds', 'coming-down-with-odds']
		},
		{
			title: "The Don't Side",
			items: ["Don't Pass", "Don't Pass Lay Odds", "Don't Come", "Don't Come Lay Odds", 'Overlays'],
			mainHref: 'the-donts',
			href: ['dont-pass', 'dont-pass-lay-odds', 'dont-come', 'dont-come-lay-odds', 'overlays']
		}
	];
</script>

<div class="h-screen fixed overflow-y-auto pb-40 bg-gray-900 px-10 pt-6">
	<nav id="nav" class="lg:leading-6">
		<ul class="flex-grow overscroll-contain">
			<LeftNavMainUl />
			<LeftNavUl {subMenus} />
		</ul>
	</nav>
</div>
