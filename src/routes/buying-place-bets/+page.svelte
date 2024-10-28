<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/components/calculators/CalcInput.svelte';
	import { calculateBuyFourTen } from '$lib/utils/calculations';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/components/contentPages/Content-h3.svelte';
	import ContentTbl from '$lib/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';
	import Quote from '$lib/components/Quote.svelte';

	let title: string = 'Buying Place Bets in Craps';
	let description: string =
		'When you Buy a Place Bet in Craps you pay a commission to get paid True Odds for that bet. You normally pay that commission upfront and again after your bet wins.';
	let url: string = 'buying-place-bets';

	let phref: string = 'place-bet-basics';
	let prev: string = 'Place Bet Basics';
	let nhref: string = 'your-money';
	let next: string = 'Your Money';

	let pageLinks: PageMenu[] = [
		{
			title: '5% Commission',
			href: '#buyCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting a Buy Bet',
			href: '#buyBetting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Buy Bet Placement',
			href: '#buyPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Buy Bet Payment',
			href: '#buyPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Buy 4 & 10 Calculator',
			href: '#buyFourTenCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.jpg'
	};

	let tblAria: string = 'Buy Place Payment Table';
	let tblHeaders: string[] = ['Point', 'Pays', 'Wins', 'Loses', 'Vig'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '6:5', 'When point rolls', '7', '5%'],
		['5 or 9', '3:2', 'When point rolls', '7', '5%'],
		['4 or 10', '2:1', 'When point rolls', '7', '5%']
	];
	let tblPnts: string[] = [
		'$1 commission for each $20 of the bet',
		'People usually only buy the 4 and 10',
		'Buy bets are not contract bets',
		'Commission can also be called Vigorish (Vig) or Juice'
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
  "headline": "Buying Place Bets in Craps",
  "description": "An informative guide on how Buy Bets work in craps, including details on commission, betting strategies, and payouts.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/buying-place-bets",
  "image": "http://parlaynation.com/images/buying-place-bets/buying-place-bets-header.webp",
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
    "@id": "http://parlaynation.com/buying-place-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Buy Bets in Craps",
      "description": "Covers what Buy Bets are, the role of commissions, and how these bets differ from Place Bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is the 5% Commission on Buy Bets in Craps?",
          "description": "Explains the commission associated with Buy Bets and how it affects payouts."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet the Buy Bet in a Craps Game?",
          "description": "Describes the process of making a Buy Bet, including where to place your bet and how to include commission."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Where is Your Buy Bet on the Craps Table?",
          "description": "Details the placement of Buy Bets on the craps table and how they are marked to distinguish them from Place Bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Does a Buy Bet Pay in Craps?",
          "description": "Outlines the payout structure for Buy Bets, focusing especially on buying the 4 and 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buying-place-bets_640x360.webp",
      "caption": "Example of a $20 bet on the inside of the ten with a buy lammer on top."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/how-to-bet-a-buy-bet_640x360.webp",
      "caption": "Visual guide on how to place a Buy Bet in craps."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/placement-of-a-buy-bet_640x360.webp",
      "caption": "Detailing the positioning of a Buy Bet on the craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-1_640x360.webp",
      "caption": "Example of a Buy Bet on the 4 or 10 for $35 with expected payouts."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-2_640x360.webp",
      "caption": "Illustration of a $75 Buy Bet on the 10 and the commission costs."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-3_640x360.webp",
      "caption": "Example of buying the 4 and 10 for $75 each and the total commission."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Place Bets" title="Buying Place Bets in Craps" {pageData}>
			<p class="pb-4">
				Countless players ask about the BUY lammer. The ON and OFF lammers are self-explanatory on
				bets, but what is the BUY? Buy Bets are Place Bets that pay True Odds because you paid a
				commission.
			</p>
			<p class="pb-4">
				Once your bet gets high enough, the dealers will BUY the bet for you. Like Place Bets, your
				BUY must be rolled before a 7 to win. If a 7 is rolled before the Place Bet you bought, then
				it loses.
			</p>
			<ContentTbl {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/buying-place-bets_640x360.webp"
				mdImg="src/images/{url}/buying-place-bets_960x540.webp"
				lgImg="src/images/{url}/buying-place-bets_1280x720.webp"
				title="Buying Place Bets"
				alt="$20 bet on the inside of the ten with a buy lammer on top."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="buyCommission" title="What Is the 5% Commission on Buy Bets in Craps?">
			<p class="pb-4">
				The commission is money you pay to get paid True Odds on your Place Bets. True Odds are what
				a bet is supposed to get paid, a bet with no advantage for the casino. You must pay a 5%
				Commission on the cost of the bet. For every $20 you bet, you must pay $1 commission. If you
				bet $21, $22, $23… all the way up to $39, it would still cost $1. Once you get to $40, it
				would cost $2.
			</p>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="buyBetting" title="How Do You Bet the Buy Bet in a Craps Game?">
			<p class="pb-4">
				Normally, when your bet gets to an amount that requires you to BUY it, the dealer will tell
				you to drop the required commission amount. You don't need to worry about doing the math.
				The dealer will do it for you, and all you need to do is make sure the dealer knows how much
				money you want and where.
			</p>
			<p class="pb-4">
				When you make a Buy bet, you put your money in the COME and tell the dealer you want to <Quote
					text="Buy"
				/>
				whichever Point it is. You would also add in the commission to the bet. E.g., If you wanted to
				buy the 4 for $20, you would put the bet plus commission into the COME, then tell the dealer,
				<Quote
					text="I would
			like to 'buy' the 4 for $20."
				/>
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-a-buy-bet_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-a-buy-bet_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-a-buy-bet_1280x720.webp"
				title="How to Bet a Buy Bet"
				alt="$21 sitting in the COME area"
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="buyPlacement" title="Where is Your Buy Bet on the Craps Table?">
			<p class="pb-4">
				Buy Bets are relative to your spot in the rail and get put on the inside of the box to
				differentiate it from a Place bet. The Basedealer will also put a BUY lammer on it to
				signify it has been bought. Check out <Link text="Place Bets" href="place-bet-basics" /> to see
				how your money in the rail is relative to your bets on the layout.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-a-buy-bet_640x360.webp"
				mdImg="src/images/{url}/placement-of-a-buy-bet_960x540.webp"
				lgImg="src/images/{url}/placement-of-a-buy-bet_1280x720.webp"
				title="Placement of a Buy Bet"
				alt="A $20 buy bet on the inside of the four. The inside of the four is outlined in orange"
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="buyPayment" title="What Does a Buy Bet Pay in Craps?">
			<p class="pb-4">
				Like many other bets on the table, you must bet Place Bets in certain increments, and they
				pay differently depending on which number you're betting. Once a Buy bet wins, you must pay
				the same commission to keep the bet up to win again. If you decide to take your Buy Bet down
				after it wins, you won't need to pay commission a second time.
			</p>
			<ContentHeaderThree title="Buying the 5, 6, 8, and 9">
				<p class="pb-4">
					The difference from Place bet odds to true odds when buying the 5, 6, 8, or 9 are so small
					that the 5% commission you are paying could lose you money. Seasoned players will only buy
					the 4 or 10.
				</p>
			</ContentHeaderThree>
			<ContentHeaderThree title="Buying the 4 and 10">
				<p class="pb-4">
					Buying the 4 or 10 is worth the cost of commission. $20 Buy on the 10 nets you $40 instead
					of $36. You get 4:1 on that dollar but must still pay another $1 vig to keep it up to win
					again. When you want to Buy the 4 and 10 simultaneously, the dealer will add up the total
					of the two bets to determine the commission. E.g., If you wanted to buy the 4 and 10 for
					$50 each, you would think, <Quote
						text="I need to pay $2 for the 4 and another $2 for the 10"
					/>, but you don't think of them as separate bets. You have a total of $100 in action,
					which is $5 commission.
				</p>
				<p class="pb-4">
					In this example, you Buy the 10 for $35 + $1 in commission. When it hits, it pays 2:1 or
					$70, but you must pay the $1 commission again.
				</p>
				<ContentImg
					caption="Buy 4 or 10 for $35"
					smImg="src/images/{url}/buy-place-ex-1_640x360.webp"
					mdImg="src/images/{url}/buy-place-ex-1_960x540.webp"
					lgImg="src/images/{url}/buy-place-ex-1_1280x720.webp"
					title="Buy 4 or 10 for $35"
					alt="$35 buy on the point 10 with a $70 payout in the come and $1 next to it as commission to stay up again."
				/>
				<div class="pb-4" />
				<p class="pb-4">
					In this example, you decide to Buy the 10 for $75, which is $3 vig. It wins $150 instead
					of $135 but would have to pay another $3 to keep the buy up to win again.
				</p>
				<ContentImg
					caption="Buy 4 or 10 for $75"
					smImg="src/images/{url}/buy-place-ex-2_640x360.webp"
					mdImg="src/images/{url}/buy-place-ex-2_960x540.webp"
					lgImg="src/images/{url}/buy-place-ex-2_1280x720.webp"
					title="Buy 4 or 10 for $75"
					alt="$75 buy on the point 10 with a $150 payout in the come and $3 next to it as commission to stay up again."
				/>
				<div class="pb-4" />
				<p class="pb-4">
					When you want to buy the 4 and 10 simultaneously, you add up the total of the two bets and
					determine the commission that way. Here you buy the 4 and 10 for $75 each for a total of
					$150. You wouldn't pay $3 for the 4 and $3 for the 10 for a $6 commission total. Your
					total action is $150 for a commission cost of $7.
				</p>
				<ContentImg
					caption="Buy 4 & 10 for $75 Each"
					smImg="src/images/{url}/buy-place-ex-3_640x360.webp"
					mdImg="src/images/{url}/buy-place-ex-3_960x540.webp"
					lgImg="src/images/{url}/buy-place-ex-3_1280x720.webp"
					title="Buy 4 & 10 for $75 Each"
					alt="$75 buy on both the 4 and 10 total $150 for a $7 commission."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Buy 4 or 10 payment calculator" id="buyFourTenCalc"
			><CalcBox
				description="Check the payment for a Buying a 4 or 10."
				title="Buy 4 or 10 Payment Calculator"
			>
				<CalcInput
					calculate={calculateBuyFourTen}
					id="buy_pymnt_calc"
					pId="buy_calc_result"
					placeholder="$20 minimum"
					step={5}
					title="Enter Buy Amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
