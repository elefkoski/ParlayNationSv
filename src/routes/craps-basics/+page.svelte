<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeader from '../../lib/clients/components/HomeHeader.svelte';
	import HomeSections from '../../lib/clients/components/HomeSections.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';

	let title: string = 'Learn the Craps Basics';
	let description: string =
		"Before you make your first bet you should have an understanding of what you're walking up to. Take the time to learn some of the in's and out's of craps now.";
	let url: string = 'craps-basics';

	let phref: string = 'craps';
	let prev: string = 'Craps Home';
	let nhref: string = 'the-crew';
	let next: string = 'The Crew';

	let sections = [
		{
			// The Crew
			aria: 'The crew',
			smImg: 'src/images/' + url + '/the-crew-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-crew-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-crew-wide-header.webp',
			alt: 'The Crew',
			title: 'The Crew',
			href: 'the-crew',
			body: 'What are the jobs of the dealer, the box, and the floor? Each play a different role on the Craps table.',
			badges: ['The Box', 'The Base Dealers', 'The Stickperson', 'The Supervisor']
		},
		{
			// The Craps Table
			aria: 'The craps table',
			smImg: 'src/images/' + url + '/the-craps-table-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-craps-table-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-craps-table-wide-header.webp',
			alt: 'The Craps Table',
			title: 'The Craps Table',
			href: 'the-craps-table',
			body: 'Know all the parts of the Craps table. Learn what the puck does, what the bank is, and what the betting areas are.',
			badges: [
				'The Rail',
				'Prop Bets',
				'Betting Areas',
				'Craps Bank',
				'Table Limits',
				'The Puck',
				'The Stick',
				'The Bowl'
			]
		},
		{
			// The Dice
			aria: 'The dice',
			smImg: 'src/images/' + url + '/the-dice-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-dice-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-dice-wide-header.webp',
			alt: 'The Dice',
			title: 'The Dice',
			href: 'the-dice',
			body: 'The Dice play the most important role on a Craps table. Learn how to deal with the shooter and what not to do with the dice.',
			badges: ['Shooting the Dice', 'Watching the Dice', 'Craps Courtesies', 'Being Hit']
		},
		{
			// The Stages
			aria: 'The stages',
			smImg: 'src/images/' + url + '/the-stages-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-stages-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-stages-wide-header.webp',
			alt: 'The Stages',
			title: 'The Stages',
			href: 'the-stages',
			body: 'Make sure you know what stage of the game the players are in in order to keep from getting yelled at.',
			badges: ['Comeout Roll', 'Intermediate Roll', 'Buying In', 'Coloring Up', 'The Number 7']
		},
		{
			// Verbal Betting
			aria: 'Verbal betting',
			smImg: 'src/images/' + url + '/verbal-betting-header_600x600.webp',
			mdImg: 'src/images/' + url + '/verbal-betting-header_992x558.webp',
			lgImg: 'src/images/' + url + '/verbal-betting-wide-header.webp',
			alt: 'Verbal Betting',
			title: 'Verbal Betting',
			href: 'verbal-betting',
			body: 'Communication is key in Craps. All the bets can be made while the dice are out and without a single cheque hitting the layout.',
			badges: [
				'Verbal Declarations',
				'Repeating Bets',
				'No Call Bet',
				'No Bet',
				"I'm On",
				"I'm Off"
			]
		},
		{
			// To Consider
			aria: 'To consider',
			smImg: 'src/images/' + url + '/to-consider-header_600x600.webp',
			mdImg: 'src/images/' + url + '/to-consider-header_992x558.webp',
			lgImg: 'src/images/' + url + '/to-consider-wide-header.webp',
			alt: 'To Consider',
			title: 'To Consider',
			href: 'to-consider',
			body: 'A few other Craps considerations to keep in mind while at the table.',
			badges: ['Self Service', 'Lays It Plays', 'String Betting', 'Two Way', 'Three Way', 'Hedging']
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
				"url": "https://parlaynation.com/the-crew.html",
				"name": "The Crew",
				"image": "/website/img/the-crew/the-crew-header.jpg",
				"description": "Before you make your first bet you should have an understanding of what you're walking up to. Take the time to learn some of the in's and out's of craps now."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/the-craps-table.html",
				"name": "The Craps Table",
				"image": "/website/img/the-craps-table/the-craps-table-header.jpg",
				"description": "Don't walk up to the Craps Table clueless. Learn the different betting areas as well as all the equipment the dealers use on the game."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/the-dice.html",
				"name": "The Dice",
				"image": "/website/img/the-dice/the-dice-header.jpg",
				"description": "Want to shoot the dice on a craps game? There is a lot of responsibility involved with correctly handling the dice and courtesies to the shooter you should follow."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/the-stages.html",
				"name": "The Craps Stages",
				"image": "/website/img/the-stages/the-stages-header.jpg",
				"description": "There are two stages to Craps: the Comeout Roll and the Intermediate Roll. Some bets work during the Comeout Roll while some don't. Certain bets can only be made during certain stages of the game."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/verbal-betting.html",
				"name": "Verbal Betting",
				"image": "/website/img/verbal-betting/verbal-betting-header.jpg",
				"description": "Craps is a verbal game. All bets in Craps can be made verbally as long as the dealer has called it a bet. You shouldn't get caught with your hands on the table when the dice are out!"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "6",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/to-consider.html",
				"name": "Craps Considerations",
				"image": "/website/img/to-consider/to-consider-header.jpg",
				"description": "What happens if you accidentally leave your winning bet on the Craps layout and the dice roll again? This page will offer you a guide on things to consider while playing Craps."
			  }
			}
		  ]
		}
	</script>
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col space-y-8 my-6">
		<HomeHeader
			aria="Craps basics header"
			title="Craps Basics"
			pOne="Gain a comprehensive understanding of the craps table layout, the roles of the dealers, and the process of shooting the dice."
			pTwo="Dive deep into the phases of a craps game: the Comeout Roll and the Intermediate Roll, and how they shape the dynamics of the game."
			pThree="Delve into the nuances of craps etiquette and betting strategies, including self-service bets, two-way bets, and hedging your bets."
			button="Learn the crew"
			href="the-crew"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
