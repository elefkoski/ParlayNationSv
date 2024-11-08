<script lang="ts">
	import LeftNavMainUl from '$lib/components/structure/LeftNavMainMenu.svelte';
	import LeftNavUl2 from '$lib/components/structure/LeftNav-ul2.svelte';

	let subMenus: {
		title: string;
		items: string[];
		href: string[];
	}[] = [
		{
			title: 'Craps Info',
			items: ['First Time Craps Player', 'Rank of Craps Bets', 'Craps Myths', 'Craps Supersitions'],
			href: ['first-time-craps-player', 'rank-of-craps-bets', 'craps-myths', 'craps-superstitions']
		},
		{
			title: 'Better Player',
			items: [
				'Better Craps Shooter',
				'Advantage of a Great Roll',
				'Dealing with New Players',
				'What Not To Do'
			],
			href: [
				'better-craps-shooter',
				'a-great-craps-roll',
				'dealing-with-new-craps-players',
				'not-to-do-at-craps-table'
			]
		},
		{
			title: 'Improve Your Game',
			items: ['Be an Efficient Player', 'Art of Verbal Betting', 'A Perfect Craps Bet'],
			href: ['be-an-efficient-craps-player', 'art-of-verbal-betting', 'a-perfect-craps-bet']
		},
		{
			title: 'Dealing with Dealers',
			items: ['Tipping the Dealers', 'Win a Dispute', 'Dealer Pet Peeves'],
			href: ['tipping-the-dealers', 'win-a-craps-dispute', 'craps-dealer-pet-peeves']
		},
		{
			title: 'Money Management',
			items: [
				'Money Techniques',
				'Managing Your Bankroll',
				'Protecting Your Money',
				'Choosing the Right Table',
				'When to Leave the Table'
			],
			href: [
				'craps-money-techniques',
				'managing-craps-bankroll',
				'protecting-your-money',
				'right-craps-table',
				'leaving-the-craps-table'
			]
		},
		{
			title: 'Craps Betting',
			items: [
				"Playing the Don'ts",
				'Come VS Place Bets',
				'Lure of Proposition Bets',
				'Order of Operation'
			],
			href: [
				'playing-the-donts',
				'come-vs-place-bets',
				'lure-of-craps-proposition-bets',
				'craps-order-of-operation'
			]
		}
	];
</script>

<nav id="nav" class="lg:leading-6">
	<ul class="flex-grow overscroll-contain">
		<LeftNavMainUl />
		<LeftNavUl2 {subMenus} />
	</ul>
</nav>
