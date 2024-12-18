<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/components/calculators/CalcContainer.svelte';
	import CalcInput2 from '$lib/components/calculators/CalcInput2.svelte';
	import { calculateWorld } from '$lib/utils/calculations';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Betting the World in Craps';
	let description: string =
		'The World is a Horn with extra on the Any 7. You must make this bet in increments of five and is a one-roll bet. When 7 rolls the bet is a push.';
	let url: string = 'world';

	let phref: string = 'horn-high';
	let prev: string = 'Horn High';
	let nhref: string = 'hop-bets';
	let next: string = 'Hop Bets';

	let pageLinks: PageMenu[] = [
		{
			title: '$5 World Bet',
			href: '#fiveWorld',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'World Placement',
			href: '#worldPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'World Payment',
			href: '#worldPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'World Calculator',
			href: '#worldCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer World',
			href: '#dealerWorld',
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

	let tblAria: string = 'World payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['High Side', '26:5', '2 or 12', 'Any other number'],
		['Low Side', '11:5', '3 or 11', 'Any other number']
	];
	let tblPnts: string[] = ['The World is a one roll bet'];
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
  "headline": "Betting The World in Craps",
  "description": "An exploration of the World bet in craps, including how to make the bet, its placement on the table, payout details, and tips for betting the World for dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/world",
  "image": "http://parlaynation.com/images/world/world-header.webp",
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
    "@id": "http://parlaynation.com/world"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Details on the World bet in craps, a combination of a Horn and Any 7 bet, its strategic placement, and its unique payout structure.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is a $5 World in Craps?",
          "description": "Describes the composition of a $5 World bet and its requirement to be bet in increments of five."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Is Your World on the Craps Table?",
          "description": "Explains the typical absence of a World image on craps tables and how the bet is recognized by dealers and players."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does a $5 World Pay on the Craps Table?",
          "description": "Outlines the various payouts for the World bet based on the rolled number, including scenarios for when the 7, high side, or low side rolls."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How Do You Bet the World for the Dealers?",
          "description": "Advises on the preferred multiples of $5 when placing World bets for the dealers to avoid complications."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/world_640x360.webp",
      "caption": "Up close overhead view of the world on the craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world_640x360.webp",
      "caption": "Split image showing $5 on the world and $1 each on the aces, ace deuce, yo, twelve, and the any seven."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/placement-of-world-a_640x360.webp",
      "caption": "Overhead view of a blown up picture of a world and the craps table rail with eight colored spots on each that correspond with each other."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/placement-of-a-world-b_640x360.webp",
      "caption": "Overhead view of the center bar above the any seven on the craps table and the craps table rail with eight colored spots on each that correspond."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-7-rolls_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-6 and a bubble reading push."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-ace-deuce-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-2 and a bubble reading $11 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-yo-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 5-6 and a bubble reading $11 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-aces-hit_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-1 and a bubble reading $26 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-twelve-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 6-6 and a bubble reading $26 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/dealer-world_640x360.webp",
      "caption": "Split image showing $1 in the middle of the proposition bar and $1 in the middle of the world for the dealer."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting The World in Craps" {pageData}>
			<p class="pb-4">
				People love to bet the <Link text="Horn" href="horn" /> and the <Link
					text="Horn Highs"
					href="horn-high"
				/> during the <Link text="Comeout Roll" href="the-stages" />. It's a one-roll bet and the
				payoffs can be pretty good but, like most other bets, it falls prey to a roll of the 7. This
				is where the World, aka Whirl, comes into play. The World is a combination of a Horn and an <Link
					text="Any 7"
					href="any-seven"
				/>.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/world_640x360.webp"
				mdImg="src/images/{url}/world_960x540.webp"
				lgImg="src/images/{url}/world_1280x720.webp"
				title="The World"
				alt="Up close overhead view of the world on the craps layout."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="fiveWorld" title="What Is a $5 World in Craps?">
			<p class="pb-4">
				A $5 World is a $1 on each the Aces, Ace Deuce, Yo, Twelve, and the Any 7. The minimum is
				five-dollars because you must put at least $1 on those five bets so the World needs to be
				bet in increments of five. You can also consider a $5 World to be a $4 Horn with $1 on the
				Any 7.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/5-world_640x360.webp"
				mdImg="src/images/{url}/5-world_960x540.webp"
				lgImg="src/images/{url}/5-world_1280x720.webp"
				title="$5 World"
				alt="Split image. On top is $5 on the world. On bottom is $1 each on the aces, ace deuce, yo, twelve, and the any seven"
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="worldPlacement" title="Where Is Your World on the Craps Table?">
			<p class="pb-4">
				I would say that the majority of Craps tables don't have a picture of the World on them. The
				World is more of a bet that dealer and players know by heart. Example 2 shows one of the
				other ways I've seen a world set up on a table without the globe image.
			</p>
			<ContentImg
				caption="Placement of World Around Globe"
				smImg="src/images/{url}/placement-of-world-a_640x360.webp"
				mdImg="src/images/{url}/placement-of-world-a_960x540.webp"
				lgImg="src/images/{url}/placement-of-world-a_1280x720.webp"
				title="Placement of World on Globe"
				alt="Overhead view of a blown up picture of a world and the craps table rail. There are eight colored spots on each the world and the rail that correspond with each other."
			/>
			<div class="pb-4" />
			<ContentImg
				caption="Placement of World on Bar"
				smImg="src/images/{url}/placement-of-a-world-b_640x360.webp"
				mdImg="src/images/{url}/placement-of-a-world-b_960x540.webp"
				lgImg="src/images/{url}/placement-of-a-world-b_1280x720.webp"
				title="Placement of World on Bar"
				alt="Overhead view of the center bar above the any seven on the craps table and the craps table rail. There are eight colored spots on each the bar and the rail that correspond with each other."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="worldPayment" title="What Does a $5 World Pay on the Craps Table?">
			<p class="pb-4">
				Like all other <Link text="Multi-Bets" href="multi-bets" />, the World pays differently
				depending on what rolls. There are three options: the 7 rolls, the high side rolls (2, 12),
				or the low side rolls (3, 11).
			</p>
			<ContentHeaderThree title="Seven Rolls - Push">
				<p class="pb-4">
					When the 7 rolls the World is a push; it does not win or lose. It's a push because the
					dollar bet on the Any Seven wins four dollars, and that four dollars pays for the rest of
					the losing bets in the World: the Aces, Ace Deuce, Yo and Twelve.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/5-world-7-rolls_640x360.webp"
					mdImg="src/images/{url}/5-world-7-rolls_960x540.webp"
					lgImg="src/images/{url}/5-world-7-rolls_1280x720.webp"
					title="$5 World Payment - Seven Rolls"
					alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-6. A bubble reads push."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Low Side - $11">
				<p class="pb-4">
					The Low Side is considered the Ace Deuce or the Yo. When they hit for a dollar they pay
					$15 minus $4 (the rest of the other four losing bets) for a payment of $11.
				</p>
				<ContentImg
					caption="$5 World - Ace Deuce Rolls"
					smImg="src/images/{url}/5-world-ace-deuce-hits_640x360.webp"
					mdImg="src/images/{url}/5-world-ace-deuce-hits_960x540.webp"
					lgImg="src/images/{url}/5-world-ace-deuce-hits_1280x720.webp"
					title="$5 World - Ace Deuce Rolls"
					alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-2. A bubble reads $11 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$5 World - Yo Rolls"
					smImg="src/images/{url}/5-world-yo-hits_640x360.webp"
					mdImg="src/images/{url}/5-world-yo-hits_960x540.webp"
					lgImg="src/images/{url}/5-world-yo-hits_1280x720.webp"
					title="$5 World - Yo Rolls"
					alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 5-6. A bubble reads $11 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="High Side - $26">
				<p class="pb-4">
					The two High Side numbers are the Aces and Twelve. When either of these numbers roll they
					pay $30 minus $4 (the rest of the other four losing bets) for a payment of $26.
				</p>
				<ContentImg
					caption="$5 World - Aces Roll"
					smImg="src/images/{url}/5-world-aces-hit_640x360.webp"
					mdImg="src/images/{url}/5-world-aces-hit_960x540.webp"
					lgImg="src/images/{url}/5-world-aces-hit_1280x720.webp"
					title="$5 World - Aces Roll"
					alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-1. A bubble reads $26 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$5 World - Twelve Rolls"
					smImg="src/images/{url}/5-world-twelve-hits_640x360.webp"
					mdImg="src/images/{url}/5-world-twelve-hits_960x540.webp"
					lgImg="src/images/{url}/5-world-twelve-hits_1280x720.webp"
					title="$5 World - Twelve Rolls"
					alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 6-6. A bubble reads $26 payment."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="World payment calculator" id="worldCalc"
			><CalcBox
				description="Check the payment for a bet made on the World."
				title="World Payment Calculator"
			>
				<CalcInput2
					calculate={calculateWorld}
					id="world_pymnt_calc"
					pId="world_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 7, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Seven', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the World:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo id="dealerWorld" title="How Do You Bet the World for the Dealers?">
			<p class="pb-4">
				Ideally, multiples of $5 would be best for the dealers. Anything less would be an improper
				bet than requires some odd math for the dealers and usually ends up getting rounded down.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dealer-world_640x360.webp"
				mdImg="src/images/{url}/dealer-world_960x540.webp"
				lgImg="src/images/{url}/dealer-world_1280x720.webp"
				title="Dealer World"
				alt="Split image. On left is $1 in the middle of the proposition bar. On bottom is $1 in the middle of the world."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
