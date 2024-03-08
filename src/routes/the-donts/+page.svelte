<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeadings from '../../lib/clients/components/HomeHeader.svelte';
	import HomeSections from '../../lib/clients/components/HomeSections.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';

	let title: string = "The Don'ts";
	let description: string =
		"You don't have to bet that the shooter is going to make their Point. If fact after the Point is established, players on the Don't side are more likely to win.";
	let url: string = 'the-donts';

	let phref: string = 'coming-down-with-odds';
	let prev: string = 'Down w/Odds';
	let nhref: string = 'dont-pass';
	let next: string = "Don't Pass";

	let sections = [
		{
			// The Don\'t Pass
			aria: "The Don't Pass",
			smImg: 'src/images/' + url + '/dont-pass-header_600x600.webp',
			mdImg: 'src/images/' + url + '/dont-pass-header_992x558.webp',
			lgImg: 'src/images/' + url + '/dont-pass-wide-header.webp',
			alt: "The Don't Pass",
			title: "The Don't Pass",
			href: 'dont-pass',
			body: "The Don't Pass is the opposite of the Pass Line. Where one wins, the other loses.",
			badges: ["Betting The Don'ts", "Don't Pass Stages", "Don't Pass Payment", "Dealer Don't Pass"]
		},
		{
			// Don\'t Pass Lay Odds
			aria: "Don't Pass Lay Odds",
			smImg: 'src/images/' + url + '/dont-pass-lay-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/dont-pass-lay-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/dont-pass-lay-odds-wide-header.webp',
			alt: "Don't Pass Lay Odds",
			title: "Don't Pass Lay Odds",
			href: 'dont-pass-lay-odds',
			body: "Lay Odds are an extra bet you can add to your Don't Pass that gets paid True Odds.",
			badges: ['Betting DP Lay Odds', 'DP Lay Odds Payment', 'Max Lay Odds', 'Dealer DP Lay Odds']
		},
		{
			// Don\'t Come
			aria: "Don't Come",
			smImg: 'src/images/' + url + '/dont-come-header_600x600.webp',
			mdImg: 'src/images/' + url + '/dont-come-header_992x558.webp',
			lgImg: 'src/images/' + url + '/dont-come-wide-header.webp',
			alt: "Don't Come",
			title: "Don't Come",
			href: 'dont-come',
			body: "Don't Comes are just like mini Don't Pass bets. It's always betting against the next Point number to roll.",
			badges: [
				"Betting Don't Come",
				"Don't Come Stages",
				'No Action',
				"Don't Come Placement",
				"Don't Come Payment",
				'Always Working',
				"Dealer Don't Come"
			]
		},
		{
			// Don\'t Come Lay Odds
			aria: "Don't Come Lay Odds",
			smImg: 'src/images/' + url + '/dont-come-lay-odds-header_600x600.webp',
			mdImg: 'src/images/' + url + '/dont-come-lay-odds-header_992x558.webp',
			lgImg: 'src/images/' + url + '/dont-come-lay-odds-wide-header.webp',
			alt: "Don't Come Lay Odds",
			title: "Don't Come Lay Odds",
			href: 'dont-come-lay-odds',
			body: "Just like the Don't Pass, you can add Lay Odds to your Don't Come bet which gets paid True Odds.",
			badges: [
				'Betting DC Lay Odds',
				'DC Lay Odds Placement',
				'DC Lay Odds Payment',
				'Max DC Lay Odds',
				'Dealer DC Lay Odds'
			]
		},
		{
			// Overlays
			aria: 'Overlays',
			smImg: 'src/images/' + url + '/overlays-header_600x600.webp',
			mdImg: 'src/images/' + url + '/overlays-header_992x558.webp',
			lgImg: 'src/images/' + url + '/overlays-wide-header.webp',
			alt: 'Overlays',
			title: 'Overlays',
			href: 'overlays',
			body: "If you can make a proper Overlay, vig and all, I'd say you've learned how to play Craps.",
			badges: ['5% Commission', 'Betting Overlays', 'Overlay Placement', 'Overlay Payments']
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
				"url": "https://parlaynation.com/dont-pass.html",
				"name": "Don't Pass",
				"image": "https://parlaynation.com/src/images/dont-pass/dont-pass-header.jpg",
				"description": "The Don't Pass is the opposite of the Pass Line. When the Don't Pass wins the Pass Line loses and vice versa."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-pass-lay-odds.html",
				"name": "Don't Pass Lay Odds",
				"image": "https://parlaynation.com/src/images/dont-pass-lay-odds/dont-pass-lay-odds-header.jpg",
				"description": "Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-come.html",
				"name": "Don't Come",
				"image": "https://parlaynation.com/src/images/dont-come/dont-come-header.jpg",
				"description": "The Don't Come bet is like a mini Don't Pass bet. They both win and lose the same way and there are two stages to a Don't Come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-come-lay-odds.html",
				"name": "Don't Come Lay Odds",
				"image": "https://parlaynation.com/src/images/dont-come-lay-odds/dont-come-lay-odds-header.jpg",
				"description": "Don't Come Lay Odds get paid True Odds so the casinos have no advantage. You want to take advantage of this bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/overlays.html",
				"name": "Overlays",
				"image": "https://parlaynation.com/src/images/overlays/overlays-header.jpg",
				"description": "An Overlay is the opposite of a Buy bet. You bet the 7 will be rolled before a Point and pay a commission based on how much it wins."
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
			aria="The Dont's header"
			title="The Dont's"
			pOne="Gain a comprehensive understanding of 'Don't' bets in craps, including 'Don't Pass', 'Don't Come', and the associated 'Lay Odds'."
			pTwo="Analyze the payout structure and betting procedures for each type of 'Don't' bet, enhancing your strategic gameplay.
			."
			pThree="Delve into the strategy of 'Overlay' betting, a nuanced technique that involves betting directly against a chosen Point."
			button="Learn the don't pass"
			href="dont-pass"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
