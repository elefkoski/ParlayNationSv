<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeadings from '../../lib/components/HomeHeader.svelte';
	import HomeSections from '../../lib/components/HomeSections.svelte';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';

	let title: string = 'Place Bets';
	let description: string =
		"These are the next most common bets next to the Pass Line. These are fun to play with a lot of betting possibilities. You can 'place' any number of the 6 different Points: 4, 5, 6, 8, 9 and 10.";
	let url: string = 'place-bets';

	let phref: string = 'max-odds';
	let prev: string = 'Max Odds';
	let nhref: string = 'place-bet-basics';
	let next: string = 'Place Bet Basics';

	let sections = [
		{
			// Place Bet Basics
			aria: 'Place Bet Basics',
			smImg: 'src/images/' + url + '/place-bet-basics-header_600x600.webp',
			mdImg: 'src/images/' + url + '/place-bet-basics-header_992x558.webp',
			lgImg: 'src/images/' + url + '/place-bet-basics-wide-header.webp',
			alt: 'Place Bet Basics',
			title: 'Place Bet Basics',
			href: 'place-bet-basics',
			body: 'Learn what Place Bets are, where your bets are, and how to properly bet Place Bets.',
			badges: [
				'Betting a Place Bet',
				'Bad Place Bet Betting',
				'Place Bet Placement',
				'Place Bet Payment',
				'Place Bet Terms',
				'Dealer Place Bets'
			]
		},
		{
			// Buying Place Bets
			aria: 'Buying Place Bets',
			smImg: 'src/images/' + url + '/buying-place-bets-header_600x600.webp',
			mdImg: 'src/images/' + url + '/buying-place-bets-header_992x558.webp',
			lgImg: 'src/images/' + url + '/buying-place-bets-wide-header.webp',
			alt: 'Buying Place Bets',
			title: 'Buying Place Bets',
			href: 'buying-' + url + '',
			body: "Once you get to a large enough Place Bet you want to take advantage of the option to 'Buy' the Place Bet and get paid true odds.",
			badges: ['5% Commission', 'Betting a Buy Bet', 'Buy Bet Placement', 'Buy Bet Payment']
		},
		{
			// Your Money
			aria: 'Your Money',
			smImg: 'src/images/' + url + '/your-money-header_600x600.webp',
			mdImg: 'src/images/' + url + '/your-money-header_992x558.webp',
			lgImg: 'src/images/' + url + '/your-money-wide-header.webp',
			alt: 'Your Money',
			title: 'Your Money',
			href: 'your-money',
			body: "You should understand what's happening to the money you have on the layout. Learn what to watch for to make sure your money is being handled properly.",
			badges: ['Right Change', 'Right Spot', 'Right Number']
		},
		{
			// Presses
			aria: 'Presses',
			smImg: 'src/images/' + url + '/presses-header_600x600.webp',
			mdImg: 'src/images/' + url + '/presses-header_992x558.webp',
			lgImg: 'src/images/' + url + '/presses-wide-header.webp',
			alt: 'Presses',
			title: 'Presses',
			href: 'presses',
			body: 'There are systems designed to add money to one or multiple Place Bets at the same time. Using presses makes the game run smoother for everyone involved.',
			badges: ['A Unit', 'Standard Presses', 'Odd/PowerPresses', 'Multiple Unit Presses']
		},
		{
			// Spread Bets
			aria: 'Spread Bets',
			smImg: 'src/images/' + url + '/spread-bets-header_600x600.webp',
			mdImg: 'src/images/' + url + '/spread-bets-header_992x558.webp',
			lgImg: 'src/images/' + url + '/spread-bets-wide-header.webp',
			alt: 'Spread Bets',
			title: 'Spread Bets',
			href: 'spread-bets',
			body: 'Spread Bets are betting multiple Place Bets at the same time. Use these to avoid string betting all your bets individually.',
			badges: ['Across', 'Inside', 'Outside', 'Uptown/Downtown', 'Including the Point']
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
				"url": "https://parlaynation.com/place-bet-basics.html",
				"name": "Place Bet Basics",
				"image": "https://parlaynation.com/src/images/place-bet-basics/place-bet-basics-header.jpg",
				"description": "Place Bets are bet during the Intermediate Roll. They get paid differently depending on which Point you Place. There are certain terms used when betting Place bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/buying-place-bets.html",
				"name": "Buying Place Bets",
				"image": "https://parlaynation.com/src/images/buying-place-bets/buying-place-bets-header.jpg",
				"description": "When you Buy a Place Bet in Craps you pay a commission to get paid True Odds for that bet. You normally pay that commission upfront and again after your bet wins."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/your-money.html",
				"name": "Your Money",
				"image": "https://parlaynation.com/src/images/your-money/your-money-header.jpg",
				"description": "You must pay attention to your money at the Craps Table. Know how much your bets cost, placement of those bets, your presses, and your payments."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/presses.html",
				"name": "Craps Presses",
				"image": "https://parlaynation.com/src/images/presses/presses-header.jpg",
				"description": "When you Press you are adding money to an existing bet. You could Press One Unit, Double it (Press It), Full Press, Odd Press, Power Press, or Multiple Unit Presses."
			  }
			}
		  ]
		}
	</script>
</svelte:head>

<LearnLayout showContentMenuBox={false}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col space-y-8 my-6">
		<HomeHeadings
			aria="Place Bets header"
			title="Place Bets"
			pOne="Understand the rules and dynamics of Place Bets in craps and how they can win multiple times in a short span."
			pTwo="Learn how to bet correctly in a craps game, including where to place your money and how to ensure your bets are in the correct spot."
			pThree="Master the art of pressing your bets, a key strategy to increase winnings in the game of craps."
			button="Learn Place Bet Basics"
			href="place-bet-basics"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
