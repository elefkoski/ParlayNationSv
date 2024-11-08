<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeader from '../../lib/components/HomeHeader.svelte';
	import HomeSections from '../../lib/components/HomeSections.svelte';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';

	let title: string = 'Come Bets';
	let description: string =
		'Very similar to the Pass Line, Come Bets can offer great odds but can begin to get expensive. You can only make Come Bets during the Intermediate Roll.';
	let url: string = 'come-bets';

	let phref: string = 'hop-bets';
	let prev: string = 'Hop Bets';
	let nhref: string = 'come-bet-basics';
	let next: string = 'Come Bet Basics';

	let sections = [
		{
			// Come Bet Basics
			aria: 'Come Bet Basics',
			smImg: 'src/images/' + url + '/come-bet-basics-header_600x600.webp',
			mdImg: 'src/images/' + url + '/come-bet-basics-header_992x558.webp',
			lgImg: 'src/images/' + url + '/come-bet-basics-wide-header.webp',
			alt: 'Come Bet Basics',
			title: 'Come Bet Basics',
			href: 'come-bet-basics',
			body: 'There are two stages to a Come Bet. Learn how to bet them and how they win.',
			badges: [
				'Betting Come Bets',
				'Come Bets Always Work',
				'Come Bet Stages',
				'Come Bet Placement',
				'Come Bet Payment',
				'Come Bet Terms',
				'Dealer Come Bets'
			]
		},
		{
			// Come Bet Odds
			aria: 'Come Bet Odds',
			smImg: 'src/images/' + url + '/come-bet-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/come-bet-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/come-bet-odds-wide-header.webp',
			alt: 'Come Bet Odds',
			title: 'Come Bet Odds',
			href: 'come-bet-odds',
			body: 'Like the Pass Line, you can add Odds to your Come bet which have no advantage for the casino.',
			badges: [
				'Betting Come Odds',
				'Come Odds Placement',
				'Odds OFF During CR',
				'Come Odds Payment',
				'3x 4x 5x Odds',
				'Dealer Come Odds'
			]
		},
		{
			// Coming Down w/Odds
			aria: 'Coming Down w/Odds',
			smImg: 'src/images/' + url + '/coming-down-with-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/coming-down-with-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/coming-down-with-odds-wide-header.webp',
			alt: 'Coming Down w/Odds',
			title: 'Coming Down w/Odds',
			href: 'coming-down-with-odds',
			body: 'When you play a Come and Place Bet at the same time you should take the Place Bet down and add Odds to your Come Bet.',
			badges: ['The Setup', 'Come Bet Moves', 'Handed Off']
		}
	];
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
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "ItemList",
		  "itemListElement":[
			{
			  "@type": "ListItem",
			  "position": "1",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/come-bet-basics.html",
				"name": "Come Bet Basics",
				"image": "https://parlaynation.com/src/images/come-bet-basics/come-bet-basics-header.jpg",
				"description": "Come Bets are mini Pass Line Bets except you play them during the Intermediate Roll. After moving into a Point you can add Odds to the Come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/come-bet-odds.html",
				"name": "Come Bet Odds",
				"image": "https://parlaynation.com/src/images/come-bet-odds-header.jpg",
				"description": "Odds for a Come bet get Paid True Odds so there is a maximum amount of money you can add to them. Odds pay different depending on the Point they are on."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/coming-down-with-odds.html",
				"name": "Coming Down w/Odds",
				"image": "https://parlaynation.com/src/images/coming-down-with-odds/coming-down-with-odds-header.jpg",
				"description": "When you are playing Place bets and Come bets at the same time you don’t need both on a Point. Coming Down w/Odds uses the Place bet for Odds on the Come bet."
			  }
			}
		  ]
		}
	</script>
</svelte:head>

<LearnLayout showContentMenuBox={false}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col space-y-8 my-6">
		<HomeHeader
			aria="Com bet header"
			title="Come Bet in Craps"
			pOne="Gain an in-depth understanding of Come Bets in craps, exploring their mechanics during different stages of the game."
			pTwo="Analyze the payout structure and betting odds associated with Come Bets, a crucial aspect of strategic gameplay."
			pThree="Explore the strategy of 'Coming Down with Odds', a nuanced technique that involves leveraging Place Bets as odds for the Come Bet."
			button="Learn come bets"
			href="come-bet-basics"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
