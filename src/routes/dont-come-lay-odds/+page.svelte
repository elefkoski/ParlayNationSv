<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import {
		calculateSixEightDcLayOdds,
		calculateFiveNineDcLayOdds,
		calculateFourTenDcLayOdds,
		calculateMaxDcLay
	} from '$lib/utils/calculations';
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

	let title: string = "Betting Don't Come Lay Odds in Craps";
	let description: string =
		"Don't Come Lay Odds get paid True Odds so the casinos have no advantage. You want to take advantage of this bet.";
	let url: string = 'dont-come-lay-odds';

	let phref: string = 'dont-come';
	let prev: string = "Don't Come";
	let nhref: string = 'overlays';
	let next: string = 'Overlays';

	let pageLinks: PageMenu[] = [
		{
			title: "Betting Don't Come Lay Odds",
			href: '#bettingDCLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Lay Odds Placement",
			href: '#dcLayOddsPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Lay Odds Payment",
			href: '#dcLayOddsPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Lay Odds Calculators",
			href: '#dcLayOddsCalcs',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: "Max Don't Come Lay Odds",
			href: '#maxDCLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Check Max Don't Come Lay Odds",
			href: '#maxDCLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: "Dealer Don't Come Lay Odds",
			href: '#dealerDCLayOdds',
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

	let tblAria: string = "Don't come lay odds payment table";
	let tblHeaders: string[] = ['Point', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '5:6', '7', 'When point rolls'],
		['5 or 9', '2:3', '7', 'When point rolls'],
		['4 or 10', '1:2', '7', 'When point rolls']
	];
	let tblPnts: string[] = [
		'Lay Odds get paid True Odds',
		'Lay Odds are not contract bets',
		'Lay Odds have zero advantage for the casino'
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
  "headline": "Betting Don't Come Lay Odds in Craps",
  "description": "A guide on Don't Come Lay Odds in craps, including how to place them, their placement on the table, payout rates, and how to bet for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-come-lay-odds",
  "image": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds-header.webp",
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
    "@id": "http://parlaynation.com/dont-come-lay-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Don't Come Lay Odds Insights",
      "description": "Insights into Don't Come Lay Odds in craps, including bet placement, table placement, payouts, and dealer bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing Don't Come Lay Odds",
          "description": "How to place Don't Come Lay Odds on a craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Don't Come Lay Odds Placement",
          "description": "Where to place Don't Come Lay Odds on the craps table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don't Come Lay Odds Payouts",
          "description": "The payout rates for Don't Come Lay Odds depending on the point."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Betting Don't Come Lay Odds for Dealers",
          "description": "How to place Don't Come Lay Odds bets for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds_640x360.webp",
      "caption": "Don't Come Lay Odds on a craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_640x360.webp",
      "caption": "Guide on placing Don't Come Lay Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/placement-of-dont-come-lay-odds_640x360.webp",
      "caption": "The placement of Don't Come Lay Odds on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_640x360.webp",
      "caption": "Don't Come Lay Odds placed for the dealers."
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
			title="Betting Don't Come Lay Odds in Craps"
			{pageData}
		>
			<p class="pb-4">
				Lay Odds for a Don't Come work the same way as <Link
					text="Lay Odds"
					href="dont-pass-lay-odds"
				/> on the <Link text="Don't Pass" href="dont-pass" />. You add them to your Don't Come Bet
				after it has moved behind a Point and is also betting that a 7 will be rolled before the
				Point. If the 7 rolls your Don't Come Bet and its Lay Odds win. If the Point is rolled the
				Don't Come Bet and its Lay Odds lose.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/dont-come-lay-odds_640x360.webp"
				mdImg="src/images/{url}/dont-come-lay-odds_960x540.webp"
				lgImg="src/images/{url}/dont-come-lay-odds_1280x720.webp"
				title="Don't Come Lay Odds"
				alt="$10 with $18 Lay odds behind the point eight."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="bettingDCLayOdds" title="How Do You Bet Don't Come Lay Odds in Craps?">
			<p class="pb-4">
				When you bet Don't Come Lay Odds you put your money in the COME and tell the dealer what <Link
					text="Don't
			Come"
					href="dont-come"
				/> bet you are adding Lay Odds to.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-dont-come-lay-odds_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-dont-come-lay-odds_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-dont-come-lay-odds_1280x720.webp"
				title="How to Bet Don't Come Lay Odds"
				alt="$10 behind the point five and $15 sitting in the COME."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="dcLayOddsPlacement"
			title="Where Are Your Don't Come Lay Odds at the Craps Table?"
		>
			<p class="pb-4">
				Place your money in the COME and tell the dealer you want to <Quote text="Lay Odds" /> on whichever
				Point you're behind. The dealer will take the money and heel it next to your Don't Come bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-dont-come-lay-odds_640x360.webp"
				mdImg="src/images/{url}/placement-of-dont-come-lay-odds_960x540.webp"
				lgImg="src/images/{url}/placement-of-dont-come-lay-odds_1280x720.webp"
				title="Placement of Don't Come Lay Odds"
				alt="$50 with $90 Lay Odds behind the point six"
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="dcLayOddsPayment"
			title="What Do the Lay Odds Pay for a Don't Come Bet in Craps?"
		>
			<p class="pb-4">
				Lay Odds for a Don't Come Bet work the same way as Lay Odds for the Don't Pass. They pay
				differently depending on the Point and you must make them in certain increments. When your
				Don't Come and its Lay Odds win, the dealer will pay each bet and then stack all the money
				into one stack, move it through the DC and hand it off to you.
			</p>
			<ContentHeaderThree title="Lay Odds Pay 5:6 on the 6 and 8">
				<p class="pb-4">
					Like the Lay Odds on the Don't Pass, when the Point is 6 or 8 you get paid 5:6, said as <Quote
						text="5 to 6."
					/> This means that you must bet in increments of $6 and get paid $5 for every $6.
				</p>
				<ContentImg
					caption="$24 Don't Come Lay Odds"
					smImg="src/images/{url}/dont-come-lay-odds-6-8_640x360.webp"
					mdImg="src/images/{url}/dont-come-lay-odds-6-8_960x540.webp"
					lgImg="src/images/{url}/dont-come-lay-odds-6-8_1280x720.webp"
					title="$24 Don't Come Lay Odds Against the Six"
					alt="$10 paid even money behind the point six. There are $24 Lay Odds next to it paid $20."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Lay Odds Pay 2:3 on the 5 and 9">
				<p class="pb-4">
					When you're Laying Odds for a Don't Come on the 5 and 9 you get paid 2:3 , said as <Quote
						text="2 to 3"
					/> so you must bet the Lay Odds in increments of $3 and get paid $2 for every $3.
				</p>
				<ContentImg
					caption="$6 Don't Come Lay Odds"
					smImg="src/images/{url}/dont-come-lay-odds-5-9_640x360.webp"
					mdImg="src/images/{url}/dont-come-lay-odds-5-9_960x540.webp"
					lgImg="src/images/{url}/dont-come-lay-odds-5-9_1280x720.webp"
					title="$6 Don't Come Lay Odds Against the Nine"
					alt="$5 paid even money behind the point nine. There are $6 Lay Odds next to it paid $4."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Lay Odds Pay 1:2 on the 4 and 10">
				<p class="pb-4">
					When you're Laying Odds for a Don't Come on the 4 and 10 you get paid 1:2 , said as <Quote
						text="1 to 2"
					/> so you must bet the Lay Odds in increments of $2 and you get paid $1 for every $2.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/dont-come-lay-odds-4-10_640x360.webp"
					mdImg="src/images/{url}/dont-come-lay-odds-4-10_960x540.webp"
					lgImg="src/images/{url}/dont-come-lay-odds-4-10_1280x720.webp"
					title="$60 Don't Come Lay Odds Against the Four"
					alt="$15 paid even money behind the point four. There are $60 Lay Odds next to it paid $30."
				/>
			</ContentHeaderThree>
			<Divider />
			<CalcContainer aria="Don't come lay odds payment calculators" id="dcLayOddsCalcs"
				><CalcBox
					description="Check the payment for Lay Odds on the Don't Come."
					title="Don't Come Lay Odds Payment Calculators"
				>
					<CalcInput
						calculate={calculateSixEightDcLayOdds}
						id="six_eight_dont_come_lay_odds_pymnt_calc"
						pId="six_eight_dont_come_lay_odds_calc_result"
						placeholder="$6 minimum"
						step={6}
						title="Enter Lay Odds amount for 6 or 8:"
					/>
					<CalcInput
						calculate={calculateFiveNineDcLayOdds}
						id="five_nine_dont_come_lay_odds_pymnt_calc"
						pId="five_nine_dont_come_lay_odds_calc_result"
						placeholder="$3 minimum"
						step={3}
						title="Enter Lay Odds amount for 5 or 9:"
					/>
					<CalcInput
						calculate={calculateFourTenDcLayOdds}
						id="four_ten_dont_come_lay_odds_pymnt_calc"
						pId="four_ten_dont_come_lay_odds_calc_result"
						placeholder="$2 minimum"
						step={2}
						title="Enter Lay Odds amount for 4 or 10:"
					/>
				</CalcBox></CalcContainer
			>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="maxDCLayOdds" title="What Are the Max Lay Odds for a Don't Come Bet?">
			<p class="pb-4">
				Since the casino has no advantage on this bet they put a limit on it. The maximum Lay Odds
				you can add to a Don't Come bet are the same as for the Don't Pass. No matter the number,
				the maximum Lay Odds you can add are six times the Don't Come bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/max-lay-odds-for-the-dont-come_640x360.webp"
				mdImg="src/images/{url}/max-lay-odds-for-the-dont-come_960x540.webp"
				lgImg="src/images/{url}/max-lay-odds-for-the-dont-come_1280x720.webp"
				title="Max Lay Odds for the Don't Come"
				alt="$25 with $125 Lay Odds behind the point eight."
			/>
			<Divider />
			<CalcContainer aria="Check max don't come lay odds" id="maxDCLayOdds"
				><CalcBox
					description="Check the Max Lay Odds for your bet on the Don't Come."
					title="Check Max Don't Come Lay Odds"
				>
					<CalcInput
						calculate={calculateMaxDcLay}
						id="max_dont_come_lay_pymnt_calc"
						pId="max_dont_come_lay_calc_result"
						placeholder="Table minimum"
						step={5}
						title="Enter Don't Come amount:"
					/>
				</CalcBox></CalcContainer
			>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="dealerDCLayOdds"
			title="How Do You Bet Don't Come Lay Odds for the Dealers?"
		>
			<p class="pb-4">
				If you make a Don't Come bet for the dealers and their bet gets put behind a Point, you can
				add Lay Odds to it. Max for the dealers is still six times.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dont-come-lay-odds-for-the-dealers_640x360.webp"
				mdImg="src/images/{url}/dont-come-lay-odds-for-the-dealers_960x540.webp"
				lgImg="src/images/{url}/dont-come-lay-odds-for-the-dealers_1280x720.webp"
				title="Don't Come Lay Odds for the Dealers"
				alt="$2 with $12 Lay Odds behind the point ten."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
