<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import { calculateHardSixEight, calculateHardFourTen } from '$lib/utils/calculations';
	import CalcBox from '$lib/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/components/calculators/CalcInput.svelte';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';
	import Quote from '$lib/components/Quote.svelte';

	let title: string = 'Betting the Hardways in Craps';
	let description: string =
		'A Hardway is when one of the even Points: 4, 6, 8, or 10, land as a pair. A 6 that lands as a 3-3 is a Hard 6. Any other combination of a Hardway that does not come as a pair such as 4-2 is considered Easy.';
	let url: string = 'the-hardways';

	let phref: string = 'proposition-bets';
	let prev: string = 'Proposition Bets';
	let nhref: string = 'straight-up';
	let next: string = 'Straight Up';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting a Buffalo',
			href: '#buffaloBet',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Hardway Placement',
			href: '#hardwayPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Hardway Payment',
			href: '#hardwayPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Hardway Payment Calculator',
			href: '#hardwayPymntCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer Hardways',
			href: '#dealerHardways',
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

	let tblAria: string = 'The hardways payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['Hard 6', '9:1', '3-3', 'Any 7, 5-1, 4-2'],
		['Hard 8', '9:1', '4-4', 'Any 7, 6-2, 5-3'],
		['Hard 4', '7:1', '2-2', 'Any 7, 3-1'],
		['Hard 10', '7:1', '5-5', 'Any 7, 6-4']
	];
	let tblPnts: string[] = [
		'The Hardways are not one roll bets',
		'Hardways are not contract bets',
		'Hardways are off during the Comeout Roll'
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
  "headline": "Betting the Hardways in Craps",
  "description": "Explore the dynamics of betting the Hardways in craps, including strategy, placement, and payout details, as well as unique bets like the Buffalo.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-hardways",
  "image": "http://parlaynation.com/images/the-hardways/the-hardways-header.webp",
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
    "@id": "http://parlaynation.com/the-hardways"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "An in-depth guide on making Hardway bets in craps, understanding Buffalo bets, the precise placement of Hardways, their payouts, and how to bet for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What is a Buffalo Bet in Craps?",
          "description": "Explains the Buffalo bet, a strategy combining Hardway bets with a hedge against rolling a 7."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Are Your Hardways on the Craps Table?",
          "description": "Details on the specific locations for Hardway bets on the craps table and tips for tracking your bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Do the Hardways Pay in Craps?",
          "description": "Outlines the payout rates for Hardway bets, distinguishing between the 6 and 8 versus the 4 and 10."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Hardway Payment Calculators",
          "description": "Introduces calculators for determining payouts on Hardway bets for a clearer betting strategy."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Do You Bet the Hardways for the Dealers on a Craps Game?",
          "description": "Guidance on placing Hardway bets for the game's dealers, showcasing the practice of tipping and engaging with the table's staff."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways_640x360.webp",
      "caption": "Up close view of the Hardway Section on the craps table. There are no cheques on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/buffalo_640x360.webp",
      "caption": "Overhead view of $1 each the hardways with a dollar on the any seven. There is an on lammer on top of one of the cheques. The puck reads off in the corner."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/placement-of-the-hardways_640x360.webp",
      "caption": "Up close view of the Hardways section and the craps rail with 18 colored spots."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways-pay-6-8_640x360.webp",
      "caption": "$3 on the hard six with two green dice that read 3-3. A bubble reads $27 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways-pay-4-10_640x360.webp",
      "caption": "$30 on the hard ten with two green dice that read 5-5. A bubble reads $270 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/dealer-hardways_640x360.webp",
      "caption": "$1 in the middle of the hard six."
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
			title="Betting the Hardways in Craps"
			{pageData}
		>
			<p class="pb-4">
				Many players love the Hardways because they are one of the Proposition Bets that aren't a
				one-roll bet, yet they offer a pretty good return. Another good thing about the Hardways is
				their ability to win simultaneously with your Pass Line Bet. It's always fun to win the
				Point then pick up a decent payout on your Hardway.
			</p>
			<p class="pb-4">
				There are four even Points: the 4, 6, 8, and 10. When one of those rolls as a pair, it is
				considered to have rolled <Quote text="hard" />. When they don't land as a pair, it is
				considered <Quote text="easy" />. A Hardway is betting that the dice will land <Quote
					text="hard"
				/> before they land <Quote text="easy" /> or before a 7 is rolled.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/hardways_640x360.webp"
				mdImg="src/images/{url}/hardways_960x540.webp"
				lgImg="src/images/{url}/hardways_1280x720.webp"
				title="The Hardways"
				alt="Up close view of the Hardway Section on the craps table. There are no cheques on the table."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="buffaloBet" title="What is a Buffalo Bet in Craps?">
			<p class="pb-4">
				The Buffalo is for the players that love their Hardways. A player will bet an equal amount
				on each Hardway, working on the <Link text="Comeout Roll" href="the-stages" />, and hedges
				them by betting the same amount on the <Link text="Any 7" href="any-seven" />. These players
				don't want to wait for a Point to be established to bet the Hardways, and they also don't
				want to lose those bets if 7 rolls. If the 7 rolls, the Any 7 will pay four times and cover
				the four Hardways that just lost. It's a push. They are all up to win again.
			</p>
			<p class="pb-4">
				One thing to remember is if any other natural is rolled during the Comeout Roll, the player
				must bet the Any 7 again to continue hedging their Hardways. If either the 4, 6, 8, or 10
				are rolled “easy,” then that Hardway will lose, and you have to bet it again if you still
				want it.
			</p>
			<p class="pb-4">
				Many casinos won't acknowledge the phrase <Quote text="Buffalo" />. They understand what it
				means, but instead of booking your bet as a <Quote text="Buffalo" />, they will book it as <Quote
					text="A dollar all the
			Hardways working and a dollar any 7."
				/> Either way, make sure the dealer books your bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/buffalo_640x360.webp"
				mdImg="src/images/{url}/buffalo_960x540.webp"
				lgImg="src/images/{url}/buffalo_1280x720.webp"
				title="Buffalo Bet"
				alt="Overhead view of $1 each the hardways with a dollar on the any seven. There is an on lammer on top of one of the cheques. The puck reads off in the corner."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="hardwayPlacement" title="Where Are Your Hardways on the Craps Table?">
			<p class="pb-4">
				Hardways are very popular bets, and there will be many times where almost everyone on the
				table is betting them; when that happens, the potential for mistakes increases. A dealer may
				put your bet in the wrong spot or may press the wrong Hardway. The only way to know for sure
				if a dealer may be making a mistake with your money is to know where your bets are. Watch
				where the dealer places your bets and make sure it's consistent among all your Hardways.
			</p>
			<p class="pb-4">
				Each Hardway section on the Craps layout is divided into four quadrants, with each quadrant
				optimally holding four players. Sometimes the dealers can't fit all the cheques in those
				sections, so they improvise the position, or the dealer will place them in an area you may
				not relate to as your spot in the rail. You don't need to be married to your spot on the
				Craps layout. As long as the dealer is consistent with where they put your bets in each
				Hardway section, you can learn where they have your bet assigned on the layout.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-the-hardways_640x360.webp"
				mdImg="src/images/{url}/placement-of-the-hardways_960x540.webp"
				lgImg="src/images/{url}/placement-of-the-hardways_1280x720.webp"
				title="Placement of a Hardway"
				alt="Up close view of the Hardways section and the craps rail with 18 colored spots."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="hardwayPayment" title="What Do the Hardways Pay in Craps?">
			<p class="pb-4">
				The Hard 6 and 8 pay more than the 4 and 10 because there are more ways for them to lose.
				There are 10 ways for the 6 or 8 to lose (any 7 or any 'easy' way) and 8 ways for the 4 or
				10 to lose (any 7 or 'easy' way).
			</p>
			<ContentHeaderThree title="Pays 9:1 on the 6 and 8">
				<p class="pb-4">The Hard 6 and 8 each pay 9:1 or $9 for every $1 you bet.</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/hardways-pay-6-8_640x360.webp"
					mdImg="src/images/{url}/hardways-pay-6-8_960x540.webp"
					lgImg="src/images/{url}/hardways-pay-6-8_1280x720.webp"
					title="Hard 6 and 8 Pay 9:1"
					alt="$3 on the hard six with two green dice that read 3-3. A bubble reads $27 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Pays 7:1 on the 4 and 10">
				<p class="pb-4">The Hard 4 and 10 each pay 7:1 or $7 for every $1 you bet.</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/hardways-pay-4-10_640x360.webp"
					mdImg="src/images/{url}/hardways-pay-4-10_960x540.webp"
					lgImg="src/images/{url}/hardways-pay-4-10_1280x720.webp"
					title="Hard 4 and 10 Pay 7:1"
					alt="$30 on the hard ten with two green dice that read 5-5. A bubble reads $270 payment."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Hardway Payment Calculators" id="hardwayPymntCalc"
			><CalcBox
				description="Check the payment for a Hardway bet."
				title="Hardway Payment Calculators"
			>
				<CalcInput
					calculate={calculateHardSixEight}
					id="hard_six_eight_pymnt_calc"
					pId="hard_six_eight_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Hard 6 or 8 amount:"
				/>
				<CalcInput
					calculate={calculateHardFourTen}
					id="hard_four_ten_pymnt_calc"
					pId="hard_four_ten_calc_result"
					placeholder="$1 minumum"
					step={1}
					title="Enter Hard 4 or 10 amount:"
				/>
			</CalcBox>
		</CalcContainer>
		<Divider />
		<ContentHeaderTwo
			id="dealerHardways"
			title="How Do You Bet the Hardways for the Dealers on a Craps Game?"
		>
			<p class="pb-4">
				Dealers love Hardways as much as players do. The odds aren't horrible to hit one and they
				pay off well enough when they come. Throw a dollar or two to the stickperson and tell em the <Quote
					text="Dealer
		hard six and eight!"
				/> or <Quote text="Two way hard four!" />
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dealer-hardways_640x360.webp"
				mdImg="src/images/{url}/dealer-hardways_960x540.webp"
				lgImg="src/images/{url}/dealer-hardways_1280x720.webp"
				title="Dealer Hardways"
				alt="$1 in the middle of the hard six."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
