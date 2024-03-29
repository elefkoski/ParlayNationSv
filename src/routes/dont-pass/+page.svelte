<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateDontPass } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = "Betting the Don't Pass in Craps";
	let description: string =
		"The Don't Pass is the opposite of the Pass Line. When the Don't Pass wins the Pass Line loses and vice versa.";
	let url: string = 'dont-pass';

	let phref: string = 'the-donts';
	let prev: string = "The Don'ts";
	let nhref: string = 'dont-pass-lay-odds';
	let next: string = "Don't Pass Lay Odds";

	let pageLinks: PageMenu[] = [
		{
			title: "Betting the Don't Pass",
			href: '#bettingDontPass',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Pass Stages",
			href: '#dontStages',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Pass Payment",
			href: '#dontPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Pass Calculator",
			href: '#dontPassCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: "Dealer Don't Pass",
			href: '#dealerDontPass',
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

	let tblAria: string = "Don't pass payment table";
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['Comeout Roll', 'Even money', '2 or 3', '7 or 11'],
		['Intermediate Roll', 'Even money', '7', 'When point rolls']
	];
	let tblPnts: string[] = [
		"You can take the Don't Pass back at any time",
		"You cannot turn Off a Don't Pass bet, you must take them down"
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
  "headline": "Betting the Don't Pass in Craps",
  "description": "Exploration of the Don't Pass bet in craps, detailing its comparison to the Pass Line, the process of placing a bet, the two stages of betting, payout information, and dealer bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-pass",
  "image": "http://parlaynation.com/images/dont-pass/dont-pass-header.webp",
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
    "@id": "http://parlaynation.com/dont-pass"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Don't Pass Bet Insights",
      "description": "Comprehensive guidance on the Don't Pass bet, including how to place the bet, the stages of betting, the payouts, and tips for betting on behalf of the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing the Don't Pass Bet",
          "description": "Instructions on how to place a Don't Pass bet on the craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Stages of the Don't Pass Bet",
          "description": "Explanation of the Comeout Roll and Intermediate Roll stages of the Don't Pass bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don't Pass Bet Payouts",
          "description": "Information on the payout structure of the Don't Pass bet."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Betting the Don't Pass for Dealers",
          "description": "How to place a Don't Pass bet for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass_640x360.webp",
      "caption": "Overview of the Don't Pass betting area on a craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/how-to-bet-the-dont-pass_640x360.webp",
      "caption": "Guide on placing Don't Pass bets."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass-stage-one_640x360.webp",
      "caption": "Don't Pass bet during the Comeout Roll stage."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass-stage-two_640x360.webp",
      "caption": "Don't Pass bet during the Intermediate Roll stage."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dealer-dont-pass_640x360.webp",
      "caption": "Don't Pass bet placed for the dealers."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="The Don't Side"
			title="Betting the Don't Pass in Craps"
			{pageData}
		>
			<p class="pb-4">
				For the most part, the Don't Pass is the complete opposite of the <Link
					text="Pass Line"
					href="pass-line-basics"
				/>. Where the Pass Line wins, the Don't Pass loses and vice versa. You can only bet the
				Don't Pass during the Comeout Roll because after the <Link
					text="Comeout Roll"
					href="the-stages"
				/> the Don't Pass is most likely to win and the casinos would never give you that advantage.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/dont-pass_640x360.webp"
				mdImg="src/images/{url}/dont-pass_960x540.webp"
				lgImg="src/images/{url}/dont-pass_1280x720.webp"
				title=""
				alt=""
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="bettingDontPass" title="How Do You Bet the Don't Pass in Craps?">
			<p class="pb-4">
				When you bet the Don't Pass all you have to do is put the money right in front of you
				relative to your spot in the rail.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-the-dont-pass_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-the-dont-pass_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-the-dont-pass_1280x720.webp"
				title="How to Bet the Don't Pass"
				alt="Up close view of the Don't Pass bar with bets and the craps table rail. The Don't Pass bets have lines pointing to spots in the rail."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="dontStages"
			title="What Are the Two Stages of the Don't Pass in a Craps Game?"
		>
			<ContentHeaderThree title="Stage 1 - The Comeout Roll">
				<p class="pb-4">
					Stage one is the Comeout Roll, before the Point is established. During the Comeout Roll
					the Don't Pass Line wins when 2 or 3 are rolled. It loses if a 7 or Eleven are rolled, and
					if the 12 rolls it's a push, it doesn't win or lose. The Comeout Roll is where the casino
					makes its money on the Don't Pass because once a Point is established the Don't Pass has
					advantage over the house.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/dont-pass-stage-one_640x360.webp"
					mdImg="src/images/{url}/dont-pass-stage-one_960x540.webp"
					lgImg="src/images/{url}/dont-pass-stage-one_1280x720.webp"
					title="Don't Pass - Stage One"
					alt="$25 on the Don't Pass. The Puck is OFF."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Stage 2 - Intermediate Roll">
				<p class="pb-4">
					The second stage is the <Link text="Intermediate Roll" href="the-stages" />, after the
					Point is established. During the Intermediate Roll the Don't Pass is betting that the 7
					will roll before the Point is rolled. If the 7 rolls before the Point the Don't Pass wins.
					If the Point rolls before the 7 the Don't Pass loses.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/dont-pass-stage-two_640x360.webp"
					mdImg="src/images/{url}/dont-pass-stage-two_960x540.webp"
					lgImg="src/images/{url}/dont-pass-stage-two_1280x720.webp"
					title="Don't Pass - Stage Two"
					alt="$25 on the Don't Pass. The Puck in On the ten."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="dontPayment" title="What Does the Don't Pass Pay in Craps?">
			<p class="pb-4">
				Regardless of where you are in the game, the Don't Pass will always win even money.
			</p>
			<ContentImg
				caption="Comeout Roll"
				smImg="src/images/{url}/dont-pass-wins-even-money-b_640x360.webp"
				mdImg="src/images/{url}/dont-pass-wins-even-money-b_960x540.webp"
				lgImg="src/images/{url}/dont-pass-wins-even-money-b_1280x720.webp"
				title="Don't Pass Wins Even Money During Comeout Roll"
				alt="$20 with $20 payment on the Don't Pass. The Puck is Off. Two purple dice show 1-1 and another pair show 1-2."
			/>
			<div class="pb-4" />
			<ContentImg
				caption="Seven Out"
				smImg="src/images/{url}/dont-pass-wins-even-money-a_640x360.webp"
				mdImg="src/images/{url}/dont-pass-wins-even-money-a_960x540.webp"
				lgImg="src/images/{url}/dont-pass-wins-even-money-a_1280x720.webp"
				title="Dont' Pass Wins Even Money On Seven Out"
				alt="$25 with $25 payment on the Don't Pass. The Puck is on point ten. Two purple dice show 2-5."
			/>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Don't pass payment calculator" id="dontPassCalc"
			><CalcBox
				description="Check the payment for a Don't Pass bet."
				title="Don't Pass Payment Calculator"
			>
				<CalcInput
					calculate={calculateDontPass}
					id="dont_pass_pymnt_calc"
					pId="dont_pass_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Enter Don't Pass amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo id="dealerDontPass" title="How Do You Bet the Don't Pass for the Dealers?">
			<p class="pb-4">
				You can make a Don't Pass bet for the dealers in any amount. Like players, it must be done
				during the Comeout Roll and you can put it right next to your bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dealer-dont-pass_640x360.webp"
				mdImg="src/images/{url}/dealer-dont-pass_960x540.webp"
				lgImg="src/images/{url}/dealer-dont-pass_1280x720.webp"
				title="Dealer Don't Pass"
				alt="$1 next to $5 on the Don't Pass."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
