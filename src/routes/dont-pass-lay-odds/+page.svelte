<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import {
		calculateSixEightLayOdds,
		calculateFiveNineLayOdds,
		calculateFourTenLayOdds,
		calculateMaxLay
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

	let title: string = "Betting Don't Pass Lay Odds in Craps";
	let description: string =
		'Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add.';
	let url: string = 'dont-pass-lay-odds';

	let phref: string = 'dont-pass';
	let prev: string = "Don't Pass";
	let nhref: string = 'dont-come';
	let next: string = "Don't Come";

	let pageLinks: PageMenu[] = [
		{
			title: "Betting Don't Pass Lay Odds",
			href: '#bettingLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Payment for Don't Pass Lay Odds",
			href: '#layOddsPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Pass Lay Odds Calculators",
			href: '#dontPassLayOddsCalcs',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: "Max Don't Pass Lay Odds",
			href: '#maxLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Check Max Don't Pass Lay Odds",
			href: '#maxDontPassLayOdds',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: "Dealer Don't Pass Lay Odds",
			href: '#dealerLayOdds',
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

	let tblAria: string = 'Dont pass lay odds payment table';
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
  "headline": "Betting Don't Pass Lay Odds in Craps",
  "description": "A detailed guide on betting Don't Pass Lay Odds in craps, including placement, payouts, maximum Lay Odds, and how to bet Lay Odds for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-pass-lay-odds",
  "image": "http://parlaynation.com/images/dont-pass-lay-odds/dont-pass-lay-odds-header.webp",
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
    "@id": "http://parlaynation.com/dont-pass-lay-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Don't Pass Lay Odds",
      "description": "Insights on Don't Pass Lay Odds bets in craps, covering how to place these bets, their payouts based on the point, and how to maximize Lay Odds.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing Don't Pass Lay Odds",
          "description": "Instructions on how to place Lay Odds bets next to the Don't Pass bet on the craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Don't Pass Lay Odds Payments",
          "description": "Details on the payout ratios for Lay Odds depending on the point number."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Maximum Lay Odds",
          "description": "Explanation of the maximum Lay Odds allowed for Don't Pass bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Lay Odds for Dealers",
          "description": "Guidance on placing Lay Odds bets for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/dont-pass-lay-odds_640x360.webp",
      "caption": "$10 on the Don't Pass with $24 Lay Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_640x360.webp",
      "caption": "Several Don't Pass Bets with Lay Odds Heeled in the direction of the base dealer."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/lay-odds-for-the-dealers_640x360.webp",
      "caption": "$1 with $6 Lay Odds on the Don't Pass for the dealers."
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
			title="Betting Don't Pass Lay Odds in Craps"
			{pageData}
		>
			<p class="pb-4">
				Just like the Pass Line, after the Point has been established, you are allowed to make an
				Odds bet but there is a big difference between the two. On the Pass Line you <Quote
					text="Take Odds"
				/>, where they win more. On the Don't Pass you <Quote text="Lay Odds" /> and bet more to win
				less because you're more likely to win.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/dont-pass-lay-odds_640x360.webp"
				mdImg="src/images/{url}/dont-pass-lay-odds_960x540.webp"
				lgImg="src/images/{url}/dont-pass-lay-odds_1280x720.webp"
				title="Don't Pass Lay Odds"
				alt="$10 on the Don't Pass with $24 Lay Odds."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="bettingLayOdds" title="How Do You Bet Don't Pass Lay Odds in Craps?">
			<p class="pb-4">
				Lay Odds on the Don't Pass go right next to your <Link text="Don't Pass" href="dont-pass" />
				bet on the side that's closest to the <Link text="base dealer" href="the-crew" />. They
				aren't stacked straight up like <Link text="Odds on the Pass line" href="pass-line-odds" />.
				They are heeled off which make it look like they are at an angle and you should heel them
				off in the direction towards the base dealer.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_1280x720.webp"
				title="How to Bet Don't Pass Lay Odds"
				alt="Several Don't Pass Bets with Lay Odds Heeled in the direction of the base dealer."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="layOddsPayment" title="What Do Lay Odds on the Don't Pass Pay?">
			<p class="pb-4">
				Lay Odds on the Don't Pass pay differently depending on what the Point is. The Point also
				determines the dollar amount you should be Laying for that Point. You Lay the 6 and 8 in
				multiples of 6, the 5 and 9 in multiples of 3, and the 4 and 10 in multiples of 2. These
				multiples were created based on the number of ways the bet can lose compared to the number
				of way they can win.
			</p>
			<ContentHeaderThree title="Pays 5:6 on the 6 and 8">
				<p class="pb-4">
					There are 5 ways to lose and 6 ways to win when the Point is 6 or 8. It's written 5:6 and
					read
					<Quote text="5 to 6" /> or you win <Quote text="$5 for every $6" />. This means that you
					can only make the Lay Odds bet in multiples of six.
				</p>
				<ContentImg
					caption="$6 Lay Odds"
					smImg="src/images/{url}/lay-odds-6-8-a_640x360.webp"
					mdImg="src/images/{url}/lay-odds-6-8-a_960x540.webp"
					lgImg="src/images/{url}/lay-odds-6-8-a_1280x720.webp"
					title="$6 Don't Pass Lay Odds Payment 6 & 8"
					alt="$5 Don't Pass with a $5 payment. Next to it are $6 Lay Odds with $5 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$18 Lay Odds"
					smImg="src/images/{url}/lay-odds-6-8-b_640x360.webp"
					mdImg="src/images/{url}/lay-odds-6-8-b_960x540.webp"
					lgImg="src/images/{url}/lay-odds-6-8-b_1280x720.webp"
					title="$18 Don't Pass Lay Odds Payment 6 & 8"
					alt="$10 Don't Pass with a $10 payment. Next to it are $18 Lay Odds with $15 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Pays 2:3 on the 5 and 9">
				<p class="pb-4">
					There are 4 ways to win and 6 ways to lose on the 5 and 9 which is written 4:6 and then
					reduced to 2:3. You read it as <Quote text="2 to 3" /> or you win <Quote
						text="$2 for every $3"
					/>. Lay Odds on the 5 and 9 must be made in multiples of 3.
				</p>
				<ContentImg
					caption="$3 Lay Odds"
					smImg="src/images/{url}/lay-odds-5-9-a_640x360.webp"
					mdImg="src/images/{url}/lay-odds-5-9-a_960x540.webp"
					lgImg="src/images/{url}/lay-odds-5-9-a_1280x720.webp"
					title="$3 Don't Pass Lay Odds Payment 5 & 9"
					alt="$5 on the Don't Pass with a $5 payment. Next to it are $3 Lay Odds with $2 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$90 Lay Odds"
					smImg="src/images/{url}/lay-odds-5-9-b_640x360.webp"
					mdImg="src/images/{url}/lay-odds-5-9-b_960x540.webp"
					lgImg="src/images/{url}/lay-odds-5-9-b_1280x720.webp"
					title="$90 Don't Pass Lay Odds Payment 5 & 9"
					alt="$25 on the Don't Pass with a $25 payment. Next to it are $90 Lay Odds with $75 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Pays 1:2 on the 4 and 10">
				<p class="pb-4">
					There are 3 ways to lose and 6 ways to win on the 4 and 10 which is written 3:6 then
					reduced to 1:2. It's spoken as <Quote text="1 to 2" /> and when you think about getting paid
					for your Lay Odds, its <Quote text="$1 for every $2" />.
				</p>
				<ContentImg
					caption="$2 Lay Odds"
					smImg="src/images/{url}/lay-odds-4-10-a_640x360.webp"
					mdImg="src/images/{url}/lay-odds-4-10-a_960x540.webp"
					lgImg="src/images/{url}/lay-odds-4-10-a_1280x720.webp"
					title="$2 Don't Pass Lay Odds Payment 4 & 10"
					alt="$5 on the Don't Pass with a $5 payment. Next to it are $2 Lay Odds with $1 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$80 Lay Odds"
					smImg="src/images/{url}/lay-odds-4-10-b_640x360.webp"
					mdImg="src/images/{url}/lay-odds-4-10-b_960x540.webp"
					lgImg="src/images/{url}/lay-odds-4-10-b_1280x720.webp"
					title="$80 Don't Pass Lay Odds Payment 4 & 10"
					alt="$20 on the Don't Pass with a $20 payment. Next to it are $80 Lay odds with $40 payment."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Don't pass lay odds payment calculators" id="dontPassLayOddsCalcs"
			><CalcBox
				description="Check the payment for Lay Odds on the Don't Pass."
				title="Don't Pass Lay Odds Payment Calculators"
			>
				<CalcInput
					calculate={calculateSixEightLayOdds}
					id="six_eight_lay_odds_pymnt_calc"
					pId="six_eight_lay_odds_calc_result"
					placeholder="$6 minimum"
					step={6}
					title="Enter Lay Odds amount for 6 or 8:"
				/>
				<CalcInput
					calculate={calculateFiveNineLayOdds}
					id="five_nine_lay_odds_pymnt_calc"
					pId="five_nine_lay_odds_calc_result"
					placeholder="$3 minimum"
					step={3}
					title="Enter Lay Odds amount for 5 or 9:"
				/>
				<CalcInput
					calculate={calculateFourTenLayOdds}
					id="four_ten_lay_odds_pymnt_calc"
					pId="four_ten_lay_odds_calc_result"
					placeholder="$2 minimum"
					step={2}
					title="Enter Lay Odds amount for 4 or 10:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo id="maxLayOdds" title="What Are Max Lay Odds on the Don't Pass?">
			<p class="pb-4">
				No matter what Point you are Laying Odds on, the maximum allowed is always going to be 6
				times the Don't Pass bet. The casino has no advantage with this bet so there must be a limit
				and it's a flat rate across all the numbers.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/max-lay-odds-on-the-dont-pass_640x360.webp"
				mdImg="src/images/{url}/max-lay-odds-on-the-dont-pass_960x540.webp"
				lgImg="src/images/{url}/max-lay-odds-on-the-dont-pass_1280x720.webp"
				title="Max Lay odds on the Don't Pass"
				alt="$10 on the Don't Pass with $60 Lay Odds."
			/>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Don't pass lay odds payment calculator" id="maxDontPassLayOdds"
			><CalcBox
				description="Check the Max Lay Odds for your bet on the Don't Pass."
				title="Check Max Don't Pass Lay Odds"
			>
				<CalcInput
					calculate={calculateMaxLay}
					id="max_lay_pymnt_calc"
					pId="max_lay_calc_result"
					placeholder="Table minimum"
					step={5}
					title="Enter Don't Pass amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo
			id="dealerLayOdds"
			title="How Do You Bet Don't Pass Lay Odds for the Dealers?"
		>
			<p class="pb-4">
				You can add Lay Odds to a dealers Don't Pass bet in the same way you add Lay Odds to your
				own Don't Pass bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/lay-odds-for-the-dealers_640x360.webp"
				mdImg="src/images/{url}/lay-odds-for-the-dealers_960x540.webp"
				lgImg="src/images/{url}/lay-odds-for-the-dealers_1280x720.webp"
				title="Dealer Lay Odds"
				alt="$1 with $6 Lay Odds on the Don't Pass"
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
