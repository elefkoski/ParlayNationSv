<script lang="ts">
	import LeftNavMainUl from '$lib/clients/components/structure/LeftNav-main-ul.svelte';
	import LeftNavUl2 from '$lib/clients/components/structure/LeftNav-ul2.svelte';
	export let subMenus: {
		title: string;
		items: string[];
		href: string[];
	}[] = [
		{
			title: 'Pass Line Odds',
			items: ['Odds Payments 6 & 8', 'Odds Payment 5 & 9', 'Odds Payments 4 & 10'],
			href: [
				'practice-pass-line-odds-payments-6-8',
				'practice-pass-line-odds-payments-5-9',
				'practice-pass-line-odds-payments-4-10'
			]
		},
		{
			title: 'Place Bet Payments',
			items: ['Place Bet Payment 6 & 8', 'Place Bet Payment 5 & 9', 'Place Bet Payment 4 & 10'],
			href: [
				'practice-place-bet-payments-6-8',
				'practice-place-bet-payments-5-9',
				'practice-place-bet-payments-4-10'
			]
		},
		{
			title: 'Come Bet w/Odds',
			items: ['Come Bet w/Odds 6 & 8', 'Come Bet w/Odds 5 & 9', 'Come Bet w/Odds 4 & 10'],
			href: [
				'practice-come-bet-w-odds-payments-6-8',
				'practice-come-bet-w-odds-payments-5-9',
				'practice-come-bet-w-odds-payments-4-10'
			]
		},
		{
			title: 'Craps Cards',
			items: ['Craps Cards - Black', 'Craps Cards- Grey'],
			href: ['practice-craps-cards-black', 'practice-craps-cards-grey']
		},
		{
			title: 'Foldable Dice',
			items: ['60mm Craps Dice', '40mm Craps Dice', '19mm Craps Dice'],
			href: ['practice-60mm-craps-dice', 'practice-40mm-craps-dice', 'practice-19mm-craps-dice']
		},
		{
			title: 'Craps Table Layouts',
			items: ['Full Craps Table', 'Half Craps Table'],
			href: ['practice-full-craps-table-layout', 'practice-half-craps-table-layout']
		},
		{
			title: 'Other Printouts',
			items: ['Horn High Generator', 'Craps Roll Cards'],
			href: ['practice-horn-high-generator', 'practice-craps-roll-cards']
		}
	];
</script>

<div class="h-screen fixed overflow-y-auto pb-40 bg-gray-900 px-10 pt-6">
	<nav id="nav" class="lg:leading-6">
		<ul class="flex-grow overscroll-contain">
			<LeftNavMainUl />
			<LeftNavUl2 {subMenus} />
		</ul>
	</nav>
</div>
