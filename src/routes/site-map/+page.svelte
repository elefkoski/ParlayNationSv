<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Site Map';
	let description: string =
		"There are four proposition bets you can bet Straight Up. Aces, Ace Deuce, Twelve, and Yo. They are one-roll bets but pay the most because they're hard to hit.";
	let url: string = 'site-map';

	let sections = [
		{
			title: 'Learn Craps',
			links: ['Home', 'Craps'],
			href: ['/', 'craps']
		},
		{
			title: 'Craps Basics',
			links: [
				'Craps Basics Home',
				'The Crew',
				'The Craps Table',
				'The Dice',
				'The Stages',
				'Verbal Betting',
				'To Consider'
			],
			href: [
				'craps-basics',
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
			links: ['Pass Line Home', 'Pass line Basics', 'Pass Line Odds', 'Max Odds on the Pass Line'],
			href: ['the-pass-line', 'pass-line-basics', 'pass-line-odds', 'max-odds']
		},
		{
			title: 'Place Bets',
			links: ['Place Bets Home', 'Place Bet Basics', 'Buying Place Bets', 'Your Money', 'Presses'],
			href: ['place-bets', 'place-bet-basics', 'buying-place-bets', 'your-money', 'presses']
		},
		{
			title: 'Spread Bets',
			links: [
				'Spread Bets Home',
				'Across',
				'Inside',
				'Outside',
				'Uptown/Downtown',
				'Even Numbers',
				'Including the Point'
			],
			href: [
				'spread-bets',
				'across',
				'inside',
				'outside',
				'uptown-downtown',
				'even-numbers',
				'including-the-point'
			]
		},
		{
			title: 'Proposition Bets',
			links: [
				'Proposition Bets Home',
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
			href: [
				'proposition-bets',
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
			links: ['Come Bet Home', 'Come Bet Basics', 'Come Bet Odds', 'Coming Down w/Odds'],
			href: ['come-bets', 'come-bet-basics', 'come-bet-odds', 'coming-down-with-odds']
		},
		{
			title: "The Don't Side",
			links: [
				"The Don'ts Home",
				"Don't Pass",
				"Don't Pass Lay Odds",
				"Don't Come",
				"Don't Come Lay Odds",
				'Overlays',
				'Bridging Lay Odds'
			],
			href: [
				'the-donts',
				'dont-pass',
				'dont-pass-lay-odds',
				'dont-come',
				'dont-come-lay-odds',
				'overlays',
				'bridging=lay-odds'
			]
		}
	];
	let sections2 = [
		{
			title: 'Practice Downloads',
			links: ['Practice Craps'],
			href: ['practice-craps']
		},
		{
			title: 'Practice Pass Line Odds',
			links: ['Pass Line Odds 6 & 8', 'Pass Line Odds 5 & 9', 'Pass Line Odds 4 & 10'],
			href: [
				'practice-pass-line-odds-payments-6-8',
				'practice-pass-line-odds-payments-5-9',
				'practice-pass-line-odds-payments-4-10'
			]
		},
		{
			title: 'Practice Place Bet Payments',
			links: ['Place Bet Payments 6 & 8', 'Place Bet Payments 5 & 9', 'Place Bet Payments 4 & 10'],
			href: [
				'practice-place-bet-payments-6-8',
				'practice-place-bet-payments-5-9',
				'practice-place-bet-payments-4-10'
			]
		},
		{
			title: 'Practice Come Bet w/Odds Payments',
			links: ['Come Bet Payments 6 & 8', 'Come Bet Payments 5 & 9', 'Come Bet Payments 4 & 10'],
			href: [
				'practice-come-bet-w-odds-payments-6-8',
				'practice-come-bet-w-odds-payments-5-9',
				'practice-come-bet-w-odds-payments-4-10'
			]
		},
		{
			title: "Practice Don't Side Lay Odds' Payments",
			links: ['Lay Odds Payments 6 & 8', 'Lay Odds Payments 5 & 9', 'Lay Odds Payments 4 & 10'],
			href: [
				'practice-lay-odds-payments-6-8',
				'practice-lay-odds-payments-5-9',
				'practice-lay-odds-payments-4-10'
			]
		},
		{
			title: 'Craps Cards',
			links: ['Craps Cards - Black', 'Craps Cards - Grey'],
			href: ['practice-craps-cards-black', 'practice-craps-cards-grey']
		},
		{
			title: 'Craps Dice',
			links: ['60mm Foldable Craps Dice', '40mm Foldable Craps Dice', '19mm Foldable Craps Dice'],
			href: ['practice-60mm-craps-dice', 'practice-40mm-craps-dice', 'practice-19mm-craps-dice']
		},
		{
			title: 'Craps Table Layout',
			links: ['Craps Table Layout - Full', 'Craps Table Layout - Half'],
			href: ['practice-full-craps-table-layout', 'practice-half-craps-table-layout']
		},
		{
			title: 'Other Craps Printouts',
			links: ['Horn-High-Generator', 'Craps Roll Cards'],
			href: ['practice-horn-high-generator', 'practice-craps-roll-cards']
		}
	];
	let sections3 = [
		{
			title: 'More Info',
			links: [
				'Craps Corner',
				'Craps Simulator',
				'Craps Calculators',
				'Glossary',
				'FAQ',
				'Contact',
				'About',
				'Privacy Policy',
				'Terms of Service',
				'Site Map'
			],
			href: [
				'craps-corner',
				'craps-simulator',
				'craps-calculator',
				'glossary',
				'faq',
				'contact',
				'about',
				'privacy-policy',
				'terms-of-service',
				'site-map'
			]
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
		  "@context": "https://schema.org",
		  "@type": "WebPage",
		  "name": "Site Map",
		  "description": "The sitemap for Parlay Nation website.",
		  "breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [
			  {
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "http://parlaynation.com/"
			  },
			  {
				"@type": "ListItem",
				"position": 2,
				"name": "Site Map",
				"item": "http://parlaynation.com/site-map"
			  }
			]
		  },
		  "url": "http://parlaynation.com/site-map",
		  "publisher": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "http://parlaynation.com",
			"logo": {
			  "@type": "ImageObject",
			  "url": "http://parlaynation.com/src/images/assets/parlay-nation-logo_1048x298.webp"
			}
		  }
		}
	</script>
</svelte:head>

<MoreLayout>
	<main aria-label="Main content" class="p-6">
		<h1 class="text-4xl font-bold mb-10 text-center">Site Map</h1>
		<div class="grid gap-4 grid-cols-2 justify-items-stretch">
			<div>
				{#each sections as section (section.title)}
					<h2 class="text-xl site-map-heading mt-4">{section.title}</h2>
					<ul>
						{#each section.links as link, index (link)}
							<li class="ml-4 list-disc">
								<a
									data-track="site-map-{section.href[index]}"
									href={section.href[index]}
									class="underline">{link}</a
								>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
			<div class="flex flex-col">
				<div>
					{#each sections2 as section (section.title)}
						<h2 class="text-xl site-map-heading mt-4">{section.title}</h2>
						<ul>
							{#each section.links as link, index (link)}
								<li class="ml-4 list-disc">
									<a
										data-track="site-map-{section.href[index]}"
										href={section.href[index]}
										class="underline">{link}</a
									>
								</li>
							{/each}
						</ul>
					{/each}
				</div>
				<div>
					{#each sections3 as section (section.title)}
						<h2 class="text-xl site-map-heading mt-4">{section.title}</h2>
						<ul>
							{#each section.links as link, index (link)}
								<li class="ml-4 list-disc">
									<a
										data-track="site-map-{section.href[index]}"
										href={section.href[index]}
										class="underline">{link}</a
									>
								</li>
							{/each}
						</ul>
					{/each}
				</div>
			</div>
		</div>
	</main>
</MoreLayout>
