<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Betting Uptown/Downtown at the Craps Table';
	let description: string =
		'Betting Uptown or Downtown is a Spread Bet on the three points on either side of the 7. The Uptown Points are the Eight, Nine, and 10. The Downtown Points are Four, Five, and Six. You bet Uptown and Downtown in the same unit amount.';
	let url: string = 'uptown-downtown';

	let phref: string = 'outside';
	let prev: string = 'Outside';
	let nhref: string = 'even-numbers';
	let next: string = 'Even Numbers';

	let pageLinks: PageMenu[] = [
		{
			title: 'Uptown/Downtown w/o Commission',
			href: '#upDownWoCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Up/Downtown w/Commission',
			href: '#upDownWCommission',
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

	let tblAria: string = 'Uptown/Downtown betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$16 Up/Downtown'],
		['Two Units: $10/number', '$32 Up/Downtown'],
		['Three Units: $15/number', '$48 Up/Downtown'],
		['*One Unit: $25/number', '$76 Up/Downtown'],
		['Two Units: $50/number', '$162 up/Downtown']
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
  "headline": "Betting Uptown and Downtown in Craps",
  "description": "A guide to understanding and placing Uptown and Downtown bets in craps, covering how to bet with and without commission.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/uptown-downtown",
  "image": "http://parlaynation.com/images/uptown-downtown/uptown-downtown-header.webp",
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
    "@id": "http://parlaynation.com/uptown-downtown"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Spread Bets",
      "description": "Details on 'Betting Uptown and Downtown' in Craps, strategies for placing these bets based on the point, and examples of betting amounts.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Uptown or Downtown on the Craps Table?",
          "description": "Explanation of Uptown and Downtown betting strategies without commission, including equal cost implications."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet Uptown or Downtown with a Commission?",
          "description": "Guidance on Uptown and Downtown betting strategies with commission, emphasizing the equal cost of bets."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/uptown_640x360.webp",
      "caption": "Puck is on point six and points 8, 9, and 10 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/downtown_640x360.webp",
      "caption": "Puck is on point eight and points 4, 5, and 6 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/16-uptown_640x360.webp",
      "caption": "Betting $16 Uptown with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/16-downtown_640x360.webp",
      "caption": "Betting $16 downtown with the point on nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/65-uptown_640x360.webp",
      "caption": "$65 uptown with the point on four."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/65-downtown_640x360.webp",
      "caption": "$65 downtown with the point on ten."
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
			title="Betting Uptown and Downtown in Craps"
			{pageData}
		>
			<p class="pb-4">
				After the Point has been established players like to bet the opposite side of the board and
				it's called bettin Uptown or Downtown. When the Point is 4, 5, or 6 the players will bet the
				8, 9, and 10, or Uptown. When the Point is 8, 9, or 10 the players will bet the 4, 5, and 6,
				or Downtown. They are always betting three numbers.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/uptown_640x360.webp"
				mdImg="src/images/{url}/uptown_960x540.webp"
				lgImg="src/images/{url}/uptown_1280x720.webp"
				title="Uptown Place Bets"
				alt="Puck is on point six and points 8, 9, and 10 are highlighted."
			/>
			<div class="pb-4" />
			<ContentImg
				caption=""
				smImg="src/images/{url}/downtown_640x360.webp"
				mdImg="src/images/{url}/downtown_960x540.webp"
				lgImg="src/images/{url}/downtown_1280x720.webp"
				title="Downtown Place Bets"
				alt="Puck is on point eight and points 4, 5, and 6 are highlighted."
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
			id="upDownWoCommission"
			title="How Do You Bet Uptown or Downtown on the Craps Table?"
		>
			<p class="pb-4">
				When you bet Downtown or Uptown at lower limits you will not have to pay a commission on the
				4 or 10. If you bet the same number of units Uptown or Downtown the cost will be the same.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/16-uptown_640x360.webp"
				mdImg="src/images/{url}/16-uptown_960x540.webp"
				lgImg="src/images/{url}/16-uptown_1280x720.webp"
				title="Betting $16 Uptown"
				alt="Betting $16 Uptown with the point on five."
			/>
			<div class="pb-4" />
			<ContentImg
				caption=""
				smImg="src/images/{url}/16-downtown_640x360.webp"
				mdImg="src/images/{url}/16-downtown_960x540.webp"
				lgImg="src/images/{url}/16-downtown_1280x720.webp"
				title="Betting $16 Downtown"
				alt="Betting $16 downtown with the point on nine."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="upDownWCommission"
			title="How Do You Bet Uptown or Downtown with a Commission?"
		>
			<p class="pb-4">
				When you bet Downtown or Uptown at higher limits you will have to include the commission
				charged on either the 4 or 10. If you bet the same number of units Uptown or Downtown the
				cost of the bets will always be the same.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/65-uptown_640x360.webp"
				mdImg="src/images/{url}/65-uptown_960x540.webp"
				lgImg="src/images/{url}/65-uptown_1280x720.webp"
				title="Betting $65 Uptown"
				alt="$65 uptown with the point on four."
			/>
			<div class="pb-4" />
			<ContentImg
				caption=""
				smImg="src/images/{url}/65-downtown_640x360.webp"
				mdImg="src/images/{url}/65-downtown_960x540.webp"
				lgImg="src/images/{url}/65-downtown_1280x720.webp"
				title="Betting $65 Downtown"
				alt="$65 downtown with the point on ten."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
