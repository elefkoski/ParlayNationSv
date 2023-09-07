<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeadings from '../../lib/clients/components/HomeHeader.svelte';
	import HomeSections from '../../lib/clients/components/HomeSections.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';

	let title: string = 'Proposition Bets';
	let description: string =
		"Proposition bets can turn a little into a lot and quick but are much harder to hit . Most prop bets usually only last one roll then they're done.";
	let url: string = 'proposition-bets';

	let phref: string = 'including-the-point';
	let prev: string = 'Including the Point';
	let nhref: string = 'proposition-basics';
	let next: string = 'Proposition Basics';

	let sections = [
		{
			// Proposition Basics
			aria: 'Proposition Basics',
			smImg: 'src/images/' + url + '/proposition-basics-header_600x600.webp',
			mdImg: 'src/images/' + url + '/proposition-basics-header_992x558.webp',
			lgImg: 'src/images/' + url + '/proposition-basics-wide-header.webp',
			alt: 'Proposition Basics',
			title: 'Proposition Basics',
			href: '/proposition-basics',
			body: 'Learn the basics of what a Proposition Bet is along with how to make your bets with the dealers.',
			badges: ['One Roll Bets', 'Betting a Proposition Bet']
		},
		{
			// The Hardways
			aria: 'The Hardways',
			smImg: 'src/images/' + url + '/the-hardways-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-hardways-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-hardways-wide-header.webp',
			alt: 'The Hardways',
			title: 'The Hardways',
			href: '/the-hardways',
			body: 'You could bet that some of the Points are going to land as a pair and when they do they are considered to be a Hardway.',
			badges: ['Buffalo', 'Hardway Placement', 'Hardway Payment', 'Dealer Hardway']
		},
		{
			// Straight Up
			aria: 'Straight Up',
			smImg: 'src/images/' + url + '/straight-up-header_600x600.webp',
			mdImg: 'src/images/' + url + '/straight-up-header_992x558.webp',
			lgImg: 'src/images/' + url + '/straight-up-wide-header.webp',
			alt: 'Straight Up',
			title: 'Straight Up',
			href: '/straight-up',
			body: "High, Low, Ace-Deuce, and a Yo. Even a dollar win on one of those and you're back in the game.",
			badges: [
				'Betting Straight Up',
				'Straight Up Placement',
				'Straight Up Payment',
				'Dealer Straight Up'
			]
		},
		{
			// C & E
			aria: 'C & E',
			smImg: 'src/images/' + url + '/c-and-e-header_600x600.webp',
			mdImg: 'src/images/' + url + '/c-and-e-header_992x558.webp',
			lgImg: 'src/images/' + url + '/c-and-e-wide-header.webp',
			alt: 'C & E',
			title: 'C & E',
			href: '/c-and-e',
			body: 'The C & E is another way to bet the Any Craps and the Yo. Bet them individually or as a pair.',
			badges: ['C & E Placement', 'C & E Payment']
		},
		{
			// Any Seven
			aria: 'Any Seven',
			smImg: 'src/images/' + url + '/any-seven-header_600x600.webp',
			mdImg: 'src/images/' + url + '/any-seven-header_992x558.webp',
			lgImg: 'src/images/' + url + '/any-seven-wide-header.webp',
			alt: 'Any Seven',
			title: 'Any Seven',
			href: '/any-seven',
			body: "Normally only bet by don't players, the Any Seven is one way to hedge your Don't Bets.",
			badges: ['Any Seven Placement', 'Any Seven Payment']
		},
		{
			// Any Craps
			aria: 'Any Craps',
			smImg: 'src/images/' + url + '/any-craps-header_600x600.webp',
			mdImg: 'src/images/' + url + '/any-craps-header_992x558.webp',
			lgImg: 'src/images/' + url + '/any-craps-wide-header.webp',
			alt: 'Any Craps',
			title: 'Any Craps',
			href: '/any-craps',
			body: 'Otherwise known as the "C" in C & E, the Any Craps is sometimes used to hedge the Pass Line.',
			badges: ['Any Craps Placement', 'Any Craps Payment']
		},
		{
			// The Field
			aria: 'The Field',
			smImg: 'src/images/' + url + '/the-field-header_600x600.webp',
			mdImg: 'src/images/' + url + '/the-field-header_992x558.webp',
			lgImg: 'src/images/' + url + '/the-field-wide-header.webp',
			alt: 'The Field',
			title: 'The Field',
			href: '/the-field',
			body: 'It might look very enticing but the Field is not one of the better bets on the Craps Table.',
			badges: ['Field Betting', 'Field Placement', 'Field Payment', 'Dealer Field Bet']
		},
		{
			// Multi Bets
			aria: 'Multi Bets',
			smImg: 'src/images/' + url + '/multi-bets-header_600x600.webp',
			mdImg: 'src/images/' + url + '/multi-bets-header_992x558.webp',
			lgImg: 'src/images/' + url + '/multi-bets-wide-header.webp',
			alt: 'Multi Bets',
			title: 'Multi Bets',
			href: '/multi-bets',
			body: "Here you'll learn some of the most common ways to bet two or three Straight Up bets in different combinations.",
			badges: ['Each vs Split', 'Two Number', 'Three Number']
		},
		{
			// Horn
			aria: 'Horn',
			smImg: 'src/images/' + url + '/horn-header_600x600.webp',
			mdImg: 'src/images/' + url + '/horn-header_992x558.webp',
			lgImg: 'src/images/' + url + '/horn-wide-header.webp',
			alt: 'Horn',
			title: 'Horn',
			href: '/horn',
			body: 'Instead of betting all four straight up individually, you can bet them as a group called a Horn.',
			badges: ['$4 Horn', 'Horn Placement', 'Horn Payment', 'Dealer Horn']
		},
		{
			// Horn High
			aria: 'Horn High',
			smImg: 'src/images/' + url + '/horn-high-header_600x600.webp',
			mdImg: 'src/images/' + url + '/horn-high-header_992x558.webp',
			lgImg: 'src/images/' + url + '/horn-high-wide-header.webp',
			alt: 'Horn High',
			title: 'Horn High',
			href: '/horn-high',
			body: "Why not bet a Horn, add one more dollar on the, let's say, Yo and call it a Horn High Yo.",
			badges: ['Four Horn Highs', 'Horn High Placement', 'Horn High Payment']
		},
		{
			// World
			aria: 'World',
			smImg: 'src/images/' + url + '/world-header_600x600.webp',
			mdImg: 'src/images/' + url + '/world-header_992x558.webp',
			lgImg: 'src/images/' + url + '/world-wide-header.webp',
			alt: 'World',
			title: 'World',
			href: '/world',
			body: 'Most commonly bet during the Comeout Roll, the World is one of the most popular bets in Craps.',
			badges: ['$5 World', 'World Placement', 'World Payment', 'Dealer World']
		},
		{
			// Hop Bets
			aria: 'Hop Bets',
			smImg: 'src/images/' + url + '/hop-bets-header_600x600.webp',
			mdImg: 'src/images/' + url + '/hop-bets-header_992x558.webp',
			lgImg: 'src/images/' + url + '/hop-bets-wide-header.webp',
			alt: 'Hop Bets',
			title: 'Hop Bets',
			href: '/hop-bets',
			body: "The other propositions aren't enough? OK. Here's every other combination the dice could land on.",
			badges: [
				'Hop Bet Placement',
				'Hop Bet Payment',
				'Hop Bet Terms',
				'Multi-Bet Hops',
				'Dealer Hops'
			]
		}
	];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
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
				"url": "https://parlaynation.com/proposition-basics.html",
				"name": "Proposition Basics",
				"image": "https://parlaynation.com/src/images/proposition-basics/proposition-basics-header.jpg",
				"description": "Most Proposition Bets at the Craps table are one-roll bets while a handful is not. These bets pay the highest amounts on the craps table and some are combinations of multiple bets at once."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/the-hardways.html",
				"name": "The Hardways",
				"image": "https://parlaynation.com/src/images/the-hardways/the-hardways-header.jpg",
				"description": "A Hardway is when one of the even Points: 4, 6, 8, or 10, land as a pair. A 6 that lands as a 3-3 is a Hard 6. Any other combination of a Hardway that does not come as a pair such as 4-2 is considered Easy."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/straight-up.html",
				"name": "Straight Up",
				"image": "https://parlaynation.com/src/images/straight-up/straight-up-header.jpg",
				"description": "There are four proposition bets you can bet Straight Up. Aces, Ace Deuce, Twelve, and Yo. They are one-roll bets but pay the most because they’re hard to hit."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/c-and-e.html",
				"name": "C &amp; E",
				"image": "https://parlaynation.com/src/images/c-and-e/c-and-e-header.jpg",
				"description": "The C &amp; E is a combination of two bets. The “C” stands for the Any Crap, which is the Aces, Ace Deuce, and the 12. The “E” stands for the Eleven, or “Yo”. The C &amp; E has a two-dollar minimum."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/any-seven.html",
				"name": "Any Seven",
				"image": "https://parlaynation.com/src/images/any-seven/any-seven-header.jpg",
				"description": "The Any Seven is mostly used by Don't players or as part of a World. Sometimes Come Bet players will use it to hedge their flat bets during the Comeout Roll"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "6",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/any-craps.html",
				"name": "Any Craps",
				"image": "https://parlaynation.com/src/images/any-craps/any-craps-header.jpg",
				"description": "The Any Craps is also more of a hedge bet also. You can use it to hedge the Pass Line during the Comeout Roll or while making a Come bet. It's similar to a Three Way Crap because they both bet the Aces, Ace Deuce, and Twelve."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "7",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/the-field.html",
				"name": "The Field",
				"image": "https://parlaynation.com/src/images/the-field/the-field-header.jpg",
				"description": "One of the most popular bets in the game is the Field. It's popular because it has one of the largest betting areas in the game. You can't miss is and there are a lot of numbers written in there that you can win with."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "8",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/multi-bets.html",
				"name": "Multi-bets",
				"image": "https://parlaynation.com/src/images/multi-bets/multi-bets-header.jpg",
				"description": "Multi-Bets are combinations of several different proposition bets at once. The C&E, Horn, Horn High, and World are the most common but there are plenty more."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "9",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/horn.html",
				"name": "Horn",
				"image": "https://parlaynation.com/src/images/horn/horn-header.jpg",
				"description": "A Horn is an equal amount bet on each the Aces, Ace Deuce, Yo, and Twelve. You must bet it in increments of four dollars and is a one-roll bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "10",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/horn-high.html",
				"name": "Horn High",
				"image": "https://parlaynation.com/src/images/horn-high/horn-high-header.jpg",
				"description": "There are four Horn Highs in Craps; the Horn High Aces, the Horn High Ace Deuce, the Horn High Yo, and the Horn High Twelve."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "11",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/world.html",
				"name": "World",
				"image": "https://parlaynation.com/src/images/world/world-header.jpg",
				"description": "The World is a Horn with extra on the Any 7. You must make this bet in increments of five and is a one-roll bet. When 7 rolls the bet is a push."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "12",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/hop-bets.html",
				"name": "Hop Bets",
				"image": "https://parlaynation.com/src/images/hop-bets/hop-bets-header.jpg",
				"description": "Hop bets are are all the possible combinations of the six Points and the combinations of the 7. They are one roll bet and pay either 15:1 or 30:1."
			  }
			}
		  ]
		}
	</script>
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col space-y-8 my-6">
		<HomeHeadings
			aria="Proposition Bets header"
			title="Proposition Bets"
			pOne="Gain an in-depth understanding of various types of Proposition Bets in craps, including Field Bets, Multi-Bets, and Horn Bets among others."
			pTwo="Learn about the payout structure and betting procedures for each type of Proposition Bet, enhancing your game strategy."
			pThree="Gain insight into the risk-reward balance of Proposition Bets, understanding how high payouts often come with a higher house edge."
			button="Learn proposition bets"
			href="/proposition-basics"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
