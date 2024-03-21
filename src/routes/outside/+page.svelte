<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Betting Outside at the Craps Table';
	let description: string =
		'Betting Outside is a Spread Bet on either 3 or 4 of the Outside Points: Four, Five, Nine, and Ten. When betting Outside, you are betting all the Outside Points in the same unit amount, not including the Point.';
	let url: string = 'outside';

	let phref: string = 'inside';
	let prev: string = 'Inside';
	let nhref: string = 'uptown-downtown';
	let next: string = 'Uptown/Downtown';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Outside w/o Commission',
			href: '#bettingOutsideWoCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting Outside w/Commission',
			href: '#bettingOutsideWCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.jpg'
	};

	let tblAria: string = 'Outside betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$15/20 Outside'],
		['Two Units: $10/number', '$30/40 Outside'],
		['Three Units: $15/number', '$45/60 Outside'],
		['*One Unit: $25/number', '$76/77/102 Outside'],
		['Two Units: $50/number', '$152/155/205 Outside']
	];
	let tblPnts: string[] = [
		'One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8.'
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
  "@type": "BlogPosting",
  "headline": "Betting Outside at the Craps Table",
  "description": "A comprehensive guide to understanding and placing 'Outside' bets in Craps, covering the strategies for betting without and with commission based on the game's Point.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/outside",
  "image": "http://parlaynation.com/images/outside/outside-header.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Parlay Nation",
    "logo": {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://parlaynation.com/outside"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Betting Outside Strategies",
      "description": "Exploration of betting strategies for Outside bets in Craps, including betting without commission and with commission.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Outside without Commission",
          "description": "Details on how to place Outside bets when no commission is required, focusing on the scenarios when the Point is 6 or 8 and the cost implications."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Betting Outside with Commission",
          "description": "Explanation on placing Outside bets that require commission, including the cost variations depending on whether the Point is 6, 8, 5, 9, 4, or 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/outside_640x360.webp",
      "caption": "Puck is on point eight and points 4, 5, 9, and 10 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/60-outside_640x360.webp",
      "caption": "Betting $60 Outside when the Point is 6 or 8."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/45-outside_640x360.webp",
      "caption": "Betting $45 Outside with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/102-outside_640x360.webp",
      "caption": "$102 outside with the point on eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/77-outside_640x360.webp",
      "caption": "$77 outside with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/76-outside_640x360.webp",
      "caption": "$76 outside with the point on four."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Spread Bets"
			title="Betting Outside at the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				The four Outside Points are 4, 5, 9, and 10 — and you bet them in the same unit amount, not
				including the Point. If the point was 8 and you wanted to bet $10 on each of the numbers,
				you would have to bet the following: $10 on the 4, $10 on the 5, $10 on the 9, and $10 on
				the 10 — $10 + $10 + $10 + $10 = $40. This bet would be 40 Outside.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/outside_640x360.webp"
				mdImg="src/images/{url}/outside_960x540.webp"
				lgImg="src/images/{url}/outside_1280x720.webp"
				title="Outside Place Bets"
				alt="Puck is on point eight and points 4, 5, 9, and 10 are highlighted."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="bettingOutsideWoCommission"
			title="How Do You Bet Outside on the Craps Table?"
		>
			<p class="pb-4">
				When you bet Outside at lower limits you don't have to worry about commission because you're
				not betting large enough that a vig needs to be charged. The bets on each number are also
				the same since you are not betting the 6 or 8. The only difference is if you're betting
				three or four numbers.
			</p>
			<ContentHeaderThree title="Point 6 or 8">
				<p class="pb-4">
					When the Point is 6 or 8 you are betting all four Outside numbers. This is when the cost
					is going to be the most.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/60-outside_640x360.webp"
					mdImg="src/images/{url}/60-outside_960x540.webp"
					lgImg="src/images/{url}/60-outside_1280x720.webp"
					title="Betting $60 Outside"
					alt="When the Point is 6 or 8 you are betting all four Outside numbers. This is when the cost is going to be the most.		"
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 4, 5, 9, 10">
				<p class="pb-4">
					When the Point is anything other than the 6 or 8, the cost of the bet will be larger. 6s
					and 8's cost more and because they are not the Point and you will be including them in
					your bet, the total cost of the bet will be larger.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/45-outside_640x360.webp"
					mdImg="src/images/{url}/45-outside_960x540.webp"
					lgImg="src/images/{url}/45-outside_1280x720.webp"
					title="Betting $45 Outside"
					alt="$45 outside with point on five"
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="bettingOutsideWCommission"
			title="How Do You Bet Outside with a Commission in a Craps Game?"
		>
			<p class="pb-4">
				When the Point is 6 or 8 you are betting all four Outside numbers. This is when the cost is
				going to be the most.
			</p>
			<ContentHeaderThree title="Point 6 or 8">
				<p class="pb-4">
					Outside bets are most expensive when the Point is 6 or 8 because you have to bet all four
					Outside bets. You need to pay commission for both the 4 and 10.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/102-outside_640x360.webp"
					mdImg="src/images/{url}/102-outside_960x540.webp"
					lgImg="src/images/{url}/102-outside_1280x720.webp"
					title="Betting $102 Outside"
					alt="$102 outside with the point on eight."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 5 or 9">
				<p class="pb-4">
					When the Point is 5 or 9 you only need to bet three out of the four Outside bets and pay
					commission for both the 4 and 10. These are your second most expensive Outside bets.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/77-outside_640x360.webp"
					mdImg="src/images/{url}/77-outside_960x540.webp"
					lgImg="src/images/{url}/77-outside_1280x720.webp"
					title="Betting $77 Outside"
					alt="$77 outside with the point on five."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 4 or 10">
				<p class="pb-4">
					The least expensive Outside bet is when the Point is 4 or 10. You only need to bet three
					out of the four Outside bets and you only need to pay commission for either the 4 or the
					10, not both.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/76-outside_640x360.webp"
					mdImg="src/images/{url}/76-outside_960x540.webp"
					lgImg="src/images/{url}/76-outside_1280x720.webp"
					title="Betting $76 Outside"
					alt="$76 outside with the point on four"
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
