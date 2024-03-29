<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateSingleField, calculateDoubleField } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting the Field in Craps';
	let description: string =
		"One of the most popular bets in the game is the Field. It's popular because it has one of the largest betting areas in the game. You can't miss is and there are a lot of numbers written in there that you can win with.";
	let url: string = 'the-field';

	let phref: string = 'any-craps';
	let prev: string = 'Any Craps';
	let nhref: string = 'multi-bets';
	let next: string = 'Multi-Bets';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting the Field',
			href: '#fieldBetting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Placement in the Field',
			href: '#fieldPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Field Bet Payment',
			href: '#fieldPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Field Bet Calculators',
			href: '#fieldBetCalcs',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer Field Bet',
			href: '#dealerFieldBet',
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

	let tblAria: string = 'The field betting options table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['3, 4, 9, 10, 11', '1:1', '3, 4, 9, 10, or 11', 'Any other number'],
		['2, 12', '2:1', '2 or 12', 'Any other number']
	];
	let tblPnts: string[] = ['The field is a one roll bet'];
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
  "headline": "Betting the Field in Craps",
  "description": "An overview of Field bets in craps, including how to place these bets, understanding their payouts, and the strategy behind betting for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-field",
  "image": "http://parlaynation.com/images/the-field/the-field-header.webp",
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
    "@id": "http://parlaynation.com/the-field"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Guidance on Field bets in craps, from placing the bet to understanding its payouts and how to bet for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Make a Field Bet in Craps?",
          "description": "Details on how to place a Field bet, including strategies for letting it ride or adjusting the bet amount mid-play."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Which Field Bet Is Yours on the Craps Table?",
          "description": "Advice on keeping track of your Field bet among many, to avoid disputes and ensure your winnings are claimed."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Field Pay on a Craps Game?",
          "description": "Explanation of Field bet payouts, including conditions where 2 or 12 can pay double or triple."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "The Field Payment Calculator",
          "description": "Introduction to a tool for calculating payouts on Field bets, aiding players in their betting strategy."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Can You Bet in the Field for the Dealers?",
          "description": "How to place Field bets for the dealers, a gesture of appreciation that dealers always welcome."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/the-field_640x360.webp",
      "caption": "Overhead up close view of the field area on the craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/placement-of-the-field_640x360.webp",
      "caption": "Up close view of multiple bets in the field."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/what-does-the-field-pay-a_640x360.webp",
      "caption": "3, 4, 9, 10, 11 Pay Even Money"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/what-does-the-field-pay-b_640x360.webp",
      "caption": "2 or 12 Pay Double"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/field-bet-for-the-dealers_640x360.webp",
      "caption": "$3 in the field for the dealers."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting the Field in Craps" {pageData}>
			<p class="pb-4">
				The Field is a one-roll bet on 2, 3, 4, 9, 10, 11, or 12. It has such an allure to it. It's
				big. It has a ton onavumbers, you can play it any time you want, and sometimes it will win
				over and over and over again. I can't tell you how many times I've seen sectioneone drop a
				$20 to bet the Field and 15 minutes later have a rail full of quarters and nickels.
			</p>
			<p class="pb-4">
				Meanwhile, the dealers are looking at each other thinking, "I hope they don't think this is
				how you win at Craps." cause those same people will come back and think the Field will make
				them rich again when in reality, you're gonna lose a lot more than ya win in there. There
				are better bets on the Craps table like the <Link
					text="Pass Line"
					href="pass-line-basics"
				/> or <Link text="Place Bets" href="place-bet-basics" />.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/the-field_640x360.webp"
				mdImg="src/images/{url}/the-field_960x540.webp"
				lgImg="src/images/{url}/the-field_1280x720.webp"
				title="The Field"
				alt="Overhead up close view of the field area on the craps layout."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="fieldBetting" title="How Do You Make a Field Bet in Craps?">
			<p class="pb-4">
				The Field is a self-service bet meaning that you must take care of it yourself. When you
				make a Field bet, you don't need to tell the dealer, just put the money in the Field, and
				the dealer will pay or take it after the roll.
			</p>
			<p class="pb-4">
				If you won, then you can pick up your winnings. If you want to let it ride, then stack it
				up; put your winnings on top of the original bet. Stacking it up lets the dealer know you
				acknowledged you won and want to let it all ride. If you accidentally leave money in the
				Field and another roll goes by, it's considered a bet and will be paid or taken.
			</p>
			<p class="pb-4">
				If you notice you won, and the dice are out, and you don't want to stick your hands out
				there to be hit by the dice, tell the dealer how much you want in the Field, and the bet
				will be resolved after the roll. For example, if you put $10 in the Field and win, and the
				dice are out, but you only want to leave $10 in the Field, tell the dealer, <Quote
					text="I only want $10 in the Field."
				/> and your bet will only be $10. After the roll, the dealer will return the extra $10 then pay
				or take the $10 you wanted to bet.
			</p>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="fieldPlacement" title="Which Field Bet Is Yours on the Craps Table?">
			<p class="pb-4">
				Since the Field is self-service, you need to pay attention to your money. Many cheques get
				put in there, and if a game is going fast, it's not hard to get some bets mixed up. If you
				place a Field bet and forget that it's yours, anyone can claim it. A good way to make sure
				you don't mix up your Field bet is to place it in the same spot on the layout every time.
				Consistency at the Craps table will always give you a leg up when a dispute breaks out.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-the-field_640x360.webp"
				mdImg="src/images/{url}/placement-of-the-field_960x540.webp"
				lgImg="src/images/{url}/placement-of-the-field_1280x720.webp"
				title="Placement of the Field"
				alt="Up close view of multiple bets in the field."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="fieldPayment" title="What Does the Field Pay on a Craps Game?">
			<p class="pb-4">
				The Field Pays even money if the 3, 4, 9, 10, or 11 are rolled. If the 2 or 12 rolls, it
				usually pays double. In some casinos either the 2 or 12 will pay triple but never both.
			</p>
			<ContentImg
				caption="3, 4, 9, 10, 11 Pay Even Money"
				smImg="src/images/{url}/what-does-the-field-pay-a_640x360.webp"
				mdImg="src/images/{url}/what-does-the-field-pay-a_960x540.webp"
				lgImg="src/images/{url}/what-does-the-field-pay-a_1280x720.webp"
				title="3, 4, 9, 10, 11 Pay Even Money"
				alt="Two bets in the field paid even money. Two green dice read 5-5. Two bubbles read wins even money."
			/>
			<div class="pb-4" />
			<ContentImg
				caption="2 or 12 Pay Double"
				smImg="src/images/{url}/what-does-the-field-pay-b_640x360.webp"
				mdImg="src/images/{url}/what-does-the-field-pay-b_960x540.webp"
				lgImg="src/images/{url}/what-does-the-field-pay-b_1280x720.webp"
				title="2 or 12 Pay Double"
				alt="Two bets in the field paid double. Two green dice read 1-1. Two bubbles read wins double."
			/>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="The Field Payment Calculator" id="fieldBetCalcs">
			<CalcBox description="Check the payment for the Field." title="The Field Payment Calculator">
				<CalcInput
					calculate={calculateSingleField}
					id="single_field_pymnt_calc"
					pId="single_field_calc_result"
					placeholder="Table minimum"
					step={5}
					title="Amount for a roll of 3, 4, 9, 10, or 11:"
				/>
				<CalcInput
					calculate={calculateDoubleField}
					id="double_field_pymnt_calc"
					pId="double_field_calc_result"
					placeholder="Table minimum"
					step={5}
					title="Amount for a roll of 2 or 12:"
				/>
			</CalcBox>
		</CalcContainer>
		<Divider />
		<ContentHeaderTwo id="dealerFieldBet" title="How Can You Bet in the Field for the Dealers?">
			<p class="pb-4">
				If you want to make a bet for the dealers, it's as easy as pie. Throw some money in there
				and say, <Quote text="For the dealers!" />. The dealers always love a Field bet. Not many
				players do it, and I don't know why, but we always appreciate it.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/field-bet-for-the-dealers_640x360.webp"
				mdImg="src/images/{url}/field-bet-for-the-dealers_960x540.webp"
				lgImg="src/images/{url}/field-bet-for-the-dealers_1280x720.webp"
				title="Field Bet for the Dealers"
				alt="$3 in the field for the dealers."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
