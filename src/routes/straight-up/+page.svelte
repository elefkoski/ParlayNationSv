<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateAceDeuceYo, calculateAcesTwelve } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Straight Up in Craps';
	let description: string =
		"There are four proposition bets you can bet Straight Up. Aces, Ace Deuce, Twelve, and Yo. They are one-roll bets but pay the most because they're hard to hit.";
	let url: string = 'straight-up';

	let phref: string = 'the-hardways';
	let prev: string = 'The Hardways';
	let nhref: string = 'c-and-e';
	let next: string = 'C & E';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Straight Up',
			href: '#straightUpBetting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Straight Up Placement',
			href: '#straightUpPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Straight Up Payment',
			href: '#straightUpPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Straight Up Payment Calculators',
			href: '#straightUpCalcs',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer Straight Up',
			href: '#dealerStraightUp',
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

	let tblAria: string = 'Straight up payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['Aces - 2', '30:1', '2', 'Any other number'],
		['Ace Deuce - 3', '15:1', '3', 'Any other number'],
		['Yo - 11', '15:1', '11', 'Any other number'],
		['Twelve - 12', '30:1', '12', 'Any other number']
	];
	let tblPnts: string[] = ['All Straight Up bets are one roll bets'];
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
  "headline": "Betting Straight Up in Craps",
  "description": "Dive into the world of Straight Up bets in craps, from how to place them, to their placement on the table, their lucrative payouts, and how to include the dealers in your betting strategy.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/straight-up",
  "image": "http://parlaynation.com/images/straight-up/straight-up-header.webp",
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
    "@id": "http://parlaynation.com/straight-up"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Exploring the high stakes of Straight Up betting in craps, including strategic betting for dealers and payout calculations.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Straight Up on the Craps Table?",
          "description": "Guidelines for placing Straight Up bets, utilizing the specific lingo associated with each bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Are Your Straight Up Bets on the Craps Table?",
          "description": "Insight into the placement of Straight Up bets on the craps layout to ensure proper tracking during the game."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Do Your Straight Up Bets Pay in a Craps Game?",
          "description": "Details on the payout rates for Straight Up bets, highlighting the high rewards of these wagers."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Straight Up Payment Calculators",
          "description": "Introduction to tools designed to calculate the potential winnings from Straight Up bets."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Do You Bet Straight Up for the Dealers?",
          "description": "Tips for including the dealers in your Straight Up betting strategy, enhancing the game's camaraderie."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/straight-up-bets_640x360.webp",
      "caption": "Up close overhead view of the straight up area on the craps table. The aces, ace deuce, yo, and twelve are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/placement-of-straight-up_640x360.webp",
      "caption": "Up close overhead view of the straight up bets and the craps table rail. There are eight on the layout that correspond with the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/dealer-straight-up_640x360.webp",
      "caption": "Up close overhead view of $1 in the middle of the yo."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Proposition Bets"
			title="Betting Straight Up in Craps"
			{pageData}
		>
			<p class="pb-4">
				If you're looking for a quick way to turn a dollar into hundreds or thousands of dollars,
				then betting Straight Up on the Craps table might be your best bet. There are four Straight
				Up bets that each have their own names: 2 is known as “Aces”, 3 is referred to as “Ace
				Deuce”, the 11 is called “Yo”, and 12 is simply “Twelve”.
			</p>
			<p class="pb-4">
				The payout for Straight Up bets is the highest on the table, either 15:1 or 30:1, which
				means that if you parlay your bets, you could potentially turn $1 into $961 in just two
				rolls. Although it's not something that happens often, it's not impossible.
			</p>
			<p class="pb-4">
				Many people tend to cash out after the first roll, but here's something interesting - Aces
				and Twelves roll back to back more often than you may think, and if you're willing to take a
				chance, you might just hit a jackpot.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/straight-up-bets_640x360.webp"
				mdImg="src/images/{url}/straight-up-bets_960x540.webp"
				lgImg="src/images/{url}/straight-up-bets_1280x720.webp"
				title="Straight Up Bets"
				alt="Up close overhead view of the straight up area on the craps table. The aces, ace deuce, yo, and twelve are highlighted."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="straightUpBetting" title="How Do You Bet Straight Up on the Craps Table?">
			<p class="pb-4">
				When you want to make a Straight Up bet, you throw your money to the Stickperson, say a
				dollar amount, then say which bet you want. For example, toss the cheques in, say <Quote
					text="$2 Yo!"
				/> and wait for the dealer to repeat your bet. If the dealer does not repeat your bet, make sure
				you repeat it until they do.
			</p>
			<p class="pb-4">
				Except for the Twelve, you don't refer to them as their totals. You should not be saying <Quote
					text="$5
		two!"
				/>, <Quote text="$1 three!" /> or <Quote text="$3 eleven!" /> You would bet them using their
				names like <Quote text="$5 Aces!" />, <Quote
					text="$1 Ace
		Deuce!"
				/> or <Quote text="$3 Yo!" />
			</p>
			<p class="pb-4">
				When you start to bet multiple Straight Up bets simultaneously, you're getting into <Link
					text="Multi-Bets"
					href="multi-bets"
				/>. Check it out to learn the lingo on how to easily bet multiple Straight Up Bets at the
				same time.
			</p>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="straightUpPlacement"
			title="Where Are Your Straight Up Bets on the Craps Table?"
		>
			<p class="pb-4">
				Bets in the Straight Up boxes are placed a little looser. Each section is broken into the
				left and right sides of the table then each side can be broken into four or more spots on
				the layout for each player. Bets are placed in a horseshoe fashion around each side of the
				table like other Prop Bets.
			</p>
			<p class="pb-4">
				Some layouts might have more or less space, so keep an eye on where the dealer is placing
				your bets on the layout. When things start to get crazy, it's not hard for cheques to get
				mixed up.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-straight-up_640x360.webp"
				mdImg="src/images/{url}/placement-of-straight-up_960x540.webp"
				lgImg="src/images/{url}/placement-of-straight-up_1280x720.webp"
				title="Placement of Straight Up"
				alt="Up close overhead view of the stright up bets and the craps table rail. There are eight on the layout that correspond with the rail"
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="straightUpPayment"
			title="What Do Your Straight Up Bets Pay in a Craps Game?"
		>
			<p class="pb-4">
				When you bet Straight Up, there are two possible payouts. 30:1 and 15:1. The Aces (1-1) and
				the Twelve (6-6) pay 30:1 or $30 for every $1. The Ace Deuce (1-2, 2-1) and the Yo (5-6,
				6-5) pay 15:1 or $15 for every $1.
			</p>
			<ContentHeaderThree title="Pays 30:1 on the High Side (2, 12)">
				<p class="pb-4">
					The Aces and Twelve pay more because there is only one way to roll each of them, while the
					Ace Deuce and Yo each can be rolled two different ways.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/high-side-straight-up-payment_640x360.webp"
					mdImg="src/images/{url}/high-side-straight-up-payment_960x540.webp"
					lgImg="src/images/{url}/high-side-straight-up-payment_1280x720.webp"
					title="High Side Striaght Up Payment"
					alt="Up close view of $3 on the aces. Two green dice read 1-1 in the corner. A bubble reads $90 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Pays 15:1 on the Low Side (3, 11)">
				<p class="pb-4">
					The Ace Deuce and Yo pay half as much because there are two ways to roll each.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/low-side-straight-up-payment_640x360.webp"
					mdImg="src/images/{url}/low-side-straight-up-payment_960x540.webp"
					lgImg="src/images/{url}/low-side-straight-up-payment_1280x720.webp"
					title="Low Side Straight Up Payment"
					alt="Up close view of $4 on the yo. Two green dice read 6-5 in the corner. A bubble reads $60 payment."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Straight up payment calculators" id="straightUpCalcs"
			><CalcBox
				description="Check the payment for a bet made straight up on the Aces, Ace Deuce, Yo or Twelve."
				title="Straight Up Payment Calculators"
			>
				<CalcInput
					calculate={calculateAceDeuceYo}
					id="straight_low_side_pymnt_calc"
					pId="straight_low_side_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Ace Deuce or Yo amount:"
				/>
				<CalcInput
					calculate={calculateAcesTwelve}
					id="straight_high_side_pymnt_calc"
					pId="straight_high_side_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Aces or Twelve amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo id="dealerStraightUp" title="How Do You Bet Straight Up for the Dealers?">
			<p class="pb-4">
				The dealers aren't going to get more bang from a buck than with these bets. Straight Up bets
				are cheap and easy two-way bets when you only need to throw two dollars to the stickperson
				and say
				<Quote text="Two-way Yo!" />. When they start dropping these high-paying bets, you can be
				sure it's gonna be appreciated.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dealer-straight-up_640x360.webp"
				mdImg="src/images/{url}/dealer-straight-up_960x540.webp"
				lgImg="src/images/{url}/dealer-straight-up_1280x720.webp"
				title="Dealer Straight Up"
				alt="Up close overhead view of $1 in the middle of the yo"
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
