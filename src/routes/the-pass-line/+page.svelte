<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeader from '../../lib/clients/components/HomeHeader.svelte';
	import HomeSections from '../../lib/clients/components/HomeSections.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';

	let title: string = 'The Pass Line';
	let description: string =
		"It's pretty much as easy as putting your money on the line then sitting back and waiting for your point to Roll.";
	let url: string = 'the-pass-line';

	let phref: string = 'to-consider';
	let prev: string = 'To Consider';
	let nhref: string = 'pass-line-basics';
	let next: string = 'Pass Line Basics';

	let sections = [
		{
			// Pass Line Basics
			aria: 'Pass Line Basics',
			smImg: 'src/images/' + url + '/pass-line-basics-header_600x600.webp',
			mdImg: 'src/images/' + url + '/pass-line-basics-header_992x558.webp',
			lgImg: 'src/images/' + url + '/pass-line-basics-wide-header.webp',
			alt: 'Pass Line Basics',
			title: 'Pass Line Basics',
			href: 'pass-line-basics',
			body: "Here you'll learn about how the Pass Line wins and loses as well as the two stages of the Pass Line: the Comeout Roll and the Intermediate Roll.",
			badges: [
				'Betting the Pass Line',
				'The Stages',
				'Payments',
				'After the Comeout',
				'Dealer Pass Line'
			]
		},
		{
			// Pass Line Odds
			aria: 'Pass Line Odds',
			smImg: 'src/images/' + url + '/pass-line-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/pass-line-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/pass-line-odds-wide-header.webp',
			alt: 'Pass Line Odds',
			title: 'Pass Line Odds',
			href: 'pass-line-odds',
			body: 'The Pass Line offers one of the best bets in the casino, Odds. These have no advantage for the casino and should be taken advantage of every chance you get.',
			badges: ['Betting Pass Line Odds', 'Odds Payment', 'Dealer Odds']
		},
		{
			// Max Odds on the Pass Line
			aria: 'Max Odds on the Pass Line',
			smImg: 'src/images/' + url + '/max-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/max-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/max-odds-wide-header.webp',
			alt: 'Max Odds on the Pass Line',
			title: 'Max Odds on the Pass Line',
			href: 'max-odds',
			body: 'The Odds bet is so good that the casinos put a maximum amount allowed based on thow much money you put on the Pass Line.',
			badges: ['Single Odds', 'Double Odds', '3x 4x 5x Odds', '5x Odds', '10x Odds', '100x Odds']
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
				"url": "https://parlaynation.com/pass-line-basics.html",
				"name": "Pass Line Basics",
				"image": "https://parlaynation.com/src/images/pass-line-basics/pass-line-basics-header.jpg",
				"description": "It's pretty much as easy as putting your money on the line then sitting back and waiting for your point to Roll."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/pass-line-odds.html",
				"name": "Pass Line Odds",
				"image": "https://parlaynation.com/src/images/pass-line-odds/pass-line-odds-header.jpg",
				"description": "Odds for the Pass Line pay differently depending on what the Point is. They get paid True Odds and have no advantage for the casino, which is why they have limits."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/max-odds.html",
				"name": "Max Odds",
				"image": "https://parlaynation.com/src/images/max-odds/max-odds-header.jpg",
				"description": "Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the amount you can add as odds. The limit changes from casino to casino but is based on the amount of your Pass Line bet."
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
			aria="Pass Line Home header"
			title="The Pass Line"
			pOne="Get in on the secret of winning Craps: betting on the Pass Line - it's easier than you think!"
			pTwo="Explore the intricacies of the Comeout Roll and the Intermediate Roll, key stages of the Pass Line in a Craps game."
			pThree="Did you know there's a bet with zero house advantage? Dive in and learn all about the Odds bet on the Pass Line."
			button="Learn the pass line"
			href="pass-line-basics"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
