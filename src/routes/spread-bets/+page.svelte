<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import HomeHeadings from '../../lib/components/HomeHeader.svelte';
	import HomeSections from '../../lib/components/HomeSections.svelte';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';

	let title: string = 'Spread Bets';
	let description: string =
		'Betting multiple Place Bets at the same time avoids String Betting. Use Spread Bets to bet Across, Inside, Outside, Uptown, Downtown, or Including the Point.';
	let url: string = 'spread-bets';

	let phref: string = 'presses';
	let prev: string = 'Presses';
	let nhref: string = 'across';
	let next: string = 'Across';

	let sections = [
		{
			// Across
			aria: 'Across',
			smImg: 'src/images/' + url + '/across-header_600x600.webp',
			mdImg: 'src/images/' + url + '/across-header_992x558.webp',
			lgImg: 'src/images/' + url + '/across-wide-header.webp',
			alt: 'Across',
			title: 'Across',
			href: 'across',
			body: 'When your betting the Pass Line and you still want to bet all the numbers.',
			badges: ['Across w/o Commission', 'Across w/Commission']
		},
		{
			// Inside
			aria: 'Inside',
			smImg: 'src/images/' + url + '/inside-header_600x600.webp',
			mdImg: 'src/images/' + url + '/inside-header_992x558.webp',
			lgImg: 'src/images/' + url + '/inside-wide-header.webp',
			alt: 'Inside',
			title: 'Inside',
			href: 'inside',
			body: 'These would be the most commonly rolled numbers and for those who would like a little safer action.',
			badges: ['Inside w/o Commission']
		},
		{
			// Outside
			aria: 'Outside',
			smImg: 'src/images/' + url + '/outside-header_600x600.webp',
			mdImg: 'src/images/' + url + '/outside-header_992x558.webp',
			lgImg: 'src/images/' + url + '/outside-wide-header.webp',
			alt: 'Outside',
			title: 'Outside',
			href: 'outside',
			body: 'Outside numbers are harder to hit but they pay better than the inside. These bettors enjoy a little more bang for their buck.',
			badges: ['Outside w/o Commission', 'Outside w/Commission']
		},
		{
			// Uptown/Downtown
			aria: 'Uptown/Downtown',
			smImg: 'src/images/' + url + '/uptown-downtown-header_600x600.webp',
			mdImg: 'src/images/' + url + '/uptown-downtown-header_992x558.webp',
			lgImg: 'src/images/' + url + '/uptown-downtown-wide-header.webp',
			alt: 'Uptown/Downtown',
			title: 'Uptown/Downtown',
			href: 'uptown-downtown',
			body: 'Betting the opposite side of the point, Up and Downtown get a variety of bets without too much exposure.',
			badges: ['Uptown/Downtown w/o Commission', 'Uptown/Downtown w/Commission']
		},
		{
			// Including the Point
			aria: 'Including the Point',
			smImg: 'src/images/' + url + '/including-the-point-header_600x600.webp',
			mdImg: 'src/images/' + url + '/including-the-point-header_992x558.webp',
			lgImg: 'src/images/' + url + '/including-the-point-wide-header.webp',
			alt: 'Including the Point',
			title: 'Including the Point',
			href: 'including-the-point',
			body: "Don't have a Pass Line but still want a vested interest in the Point? Include it in your spread bet.",
			badges: ['Including the Point']
		}
	];
</script>

<svelte:head>
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
				"url": "https://parlaynation.com/across.html",
				"name": "Across",
				"image": "https://parlaynation.com/src/images/across/across-header.jpg",
				"description": "Betting Across is a Spread Bet where you are betting all the Place Bets, not including the Point in the same unit amount. At high enough units you will have to include the cost of commission."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/inside.html",
				"name": "Inside",
				"image": "https://parlaynation.com/src/images/inside/inside-header.jpg",
				"description": "Betting Inside is a Spread Bet on either 3 or 4 of the Inside Points: Five, Six, Eight, and Nine. When betting Inside, you are betting all the Inside Points in the same unit amount, not including the Point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/outside.html",
				"name": "Outside",
				"image": "https://parlaynation.com/src/images/outside/outside-header.jpg",
				"description": "Betting Outside is a Spread Bet on either 3 or 4 of the Outside Points: Four, Five, Nine, and Ten. When betting Outside, you are betting all the Outside Points in the same unit amount, not including the Point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/uptown-downtown.html",
				"name": "Uptown-Downtown",
				"image": "https://parlaynation.com/src/images/uptown-downtown/uptown-downtown-header.jpg",
				"description": "Betting Uptown or Downtown is a Spread Bet on the three points on either side of the 7. The Uptown Points are the Eight, Nine, and 10. The Downtown Points are Four, Five, and Six. You bet Uptown and Downtown in the same unit amount."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/including-the-point.html",
				"name": "Including the Point",
				"image": "https://parlaynation.com/src/images/including-the-point/including-the-point-header.jpg",
				"description": "When you bet Including the Point you are betting a spread bet that included the point. You can bet Across, Inside, Outside, Uptown, or Downtown Including the Point."
			  }
			}
		  ]
		}
	</script>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={'http://parlaynation.com/' + url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.jpg'} />
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col space-y-8 my-6">
		<HomeHeadings
			aria="Spread Bets header"
			title="Spread Bets"
			pOne="Learn how to bet multiple Place bets at once, including Betting Across, Inside, Outside, Uptown/Downtown, and Including the Point."
			pTwo="Examine the cost implications of different types of Spread Bets and the factors that influence these costs."
			pThree="Explore the strategy of Including the Point in your Spread Bet, a tactic often employed by players not on the Pass Line."
			button="Learn across"
			href="across"
		/>
		{#each sections as section (section.title)}
			<HomeSections {...section} />
		{/each}
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
