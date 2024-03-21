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
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Betting Even Numbers at the Craps Table';
	let description: string =
		'Betting Even is a Spread Bet on either 3 or 4 of the Even Numbered Points: Four, Six, Eight, and Ten. When betting Even, you are betting all the Even Points in the same unit amount, not including the Point.';
	let url: string = 'even-numbers';

	let phref: string = 'uptown-downtown';
	let prev: string = 'Uptown/Downtown';
	let nhref: string = 'including-the-point';
	let next: string = 'Including the Point';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Even w/o Commission',
			href: '#bettingEvenWoCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting Even w/Commission',
			href: '#bettingEvenWCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let tblAria: string = 'Even betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$16/17/22 Even'],
		['Two Units: $10/number', '$32/34/44 Even'],
		['Three Units: $15/number', '$48/51/66 Even'],
		['*One Unit: $25/number', '$82/86/112 Even'],
		['Two Units: $50/number', '$165/172/225 Even']
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
  "@context": "http://schema.org",
  "@type": "Article",
  "headline": "Betting Even Numbers at the Craps Table",
  "description": "A comprehensive guide on betting even numbers at the craps table, including methods without commission for lower limits and with commission for larger bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/even-numbers",
  "image": "http://parlaynation.com/images/even-numbers/even-numbers-header.webp",
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
    "@id": "https://www.parlaynation.com/even-numbers"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Betting Even Numbers Without Commission",
        "description": "Learn how to bet on even numbers at the craps table without commission, adjusting your bets based on the Point.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Point 5 or 9",
            "description": "Betting strategy for all four Even numbers when the point is 5 or 9."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Point 4 or 10",
            "description": "How to bet three of the Even numbers when the point is 4 or 10."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Point 6 or 8",
            "description": "The cost-effective approach to betting three Even numbers when the point is 6 or 8."
          }
        ]
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Betting Even Numbers With Commission",
        "description": "A guide to betting even numbers with commission for larger bets, including how to manage commissions on the 4 and 10.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Point 5 or 9",
            "description": "Strategies for when the point is 5 or 9, including commission for the 4 and 10."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Point 4 or 10",
            "description": "Details on betting with commission when the point is 4 or 10."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Point 6 or 8",
            "description": "How to minimize costs when betting with commission and the point is 6 or 8."
          }
        ]
      }
    ]
  }
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Spread Bets"
			title="Betting Even Numbers at the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				The four Even Points are 4, 6, 8, and 10 - and you bet them in the same <Link
					text="unit amount"
					href="presses"
				/>, not including the Point. i.e. Suppose the Point was 6 and you wanted to bet $10 on each
				of the numbers, you would have to bet the following: $10 on the 4, $12 on the 8, and $10 the
				10 — $10 + $10 + $12 + $10 = $32. This bet would be 32 Even.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/even-numbers_640x360.webp"
				mdImg="src/images/{url}/even-numbers_960x540.webp"
				lgImg="src/images/{url}/even-numbers_1280x720.webp"
				title="Even Number Place Bets"
				alt="Puck is on point 8 and points 4, 6, and 10 are highlighted."
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
			id="bettingEvenWoCommission"
			title="How Do You Bet Even Numbers on the Craps Table?"
		>
			<p class="pb-4">
				When you bet the Even numbers at lower limits you don't have to worry about commission
				because you're not betting large enough that a vig needs to be charged. Since you will
				always include either the 6 or 8, the bet amounts will always be different based on the
				Point.
			</p>
			<ContentHeaderThree title="Point 5 or 9">
				<p class="pb-4">
					When the Point is 5 or 9 you are betting all four Even numbers. This is when the cost is
					going to be the most.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/44-even-numbers_640x360.webp"
					mdImg="src/images/{url}/44-even-numbers_960x540.webp"
					lgImg="src/images/{url}/44-even-numbers_1280x720.webp"
					title="Betting $44 Even Numbers"
					alt="$44 even with the point on 5"
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 4 or 10">
				<p class="pb-4">
					When the Point is 4 or 10 you are only betting three of the Even numbers. This is when the
					cost is second most because you're betting both the 6 & 8.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/34-even-numbers_640x360.webp"
					mdImg="src/images/{url}/34-even-numbers_960x540.webp"
					lgImg="src/images/{url}/34-even-numbers_1280x720.webp"
					title="Betting $34 Even Numbers"
					alt="$34 even with the point on 10"
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 6 or 8">
				<p class="pb-4">
					When the Point is 6 or 8 you're only betting three of the Even numbers - and at the same
					time only one of them will be a six or an eight. This makes the cost the least.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/32-even-numbers_640x360.webp"
					mdImg="src/images/{url}/32-even-numbers_960x540.webp"
					lgImg="src/images/{url}/32-even-numbers_1280x720.webp"
					title="Betting $32 Even"
					alt="$32 even with point on 6"
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="bettingEvenWCommission"
			title="How Do You Bet Even with a Commission in a Craps Game?"
		>
			<p class="pb-4">
				When you begin to bet larger amounts you'll begin to start <Link
					text="paying commission"
					href="buying-place-bets"
				/> on the 4 and 10.
			</p>
			<ContentHeaderThree title="Point 5 or 9">
				<p class="pb-4">
					Even bets are most expensive when the Point is 5 or 9 because you have to bet all four
					Even bets and you need to pay commission for both the 4 and 10.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/112-even-numbers_640x360.webp"
					mdImg="src/images/{url}/112-even-numbers_960x540.webp"
					lgImg="src/images/{url}/112-even-numbers_1280x720.webp"
					title="Betting $112 Even"
					alt="$112 Even numbers with the point on 5."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 4 or 10">
				<p class="pb-4">
					When the Point is 4 or 10 you only need to bet three out of the four Inside bets. These
					are your second most expensive Outside bets.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/86-even-numbers_640x360.webp"
					mdImg="src/images/{url}/86-even-numbers_960x540.webp"
					lgImg="src/images/{url}/86-even-numbers_1280x720.webp"
					title="Betting $86 Even Numbers"
					alt="$86 even numbers with the point on 4."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Point 6 or 8">
				<p class="pb-4">
					The least expensive Even bet is when the Point is 6 or 8. You only need to bet three out
					of the four Even bets and you only need to pay for either the 6 or the 8, not both.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/82-even-numbers_640x360.webp"
					mdImg="src/images/{url}/82-even-numbers_960x540.webp"
					lgImg="src/images/{url}/82-even-numbers_1280x720.webp"
					title="Betting $82 Even Numbers"
					alt="$82 even numbers with the point on 8"
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
