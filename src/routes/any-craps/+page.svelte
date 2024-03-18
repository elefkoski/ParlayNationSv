<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateAnyCraps } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Betting the Any Craps in Craps';
	let description: string =
		"The Any Craps is also more of a hedge bet also. You can use it to hedge the Pass Line during the Comeout Roll or while making a Come bet. It's similar to a Three Way Crap because they both bet the Aces, Ace Deuce, and Twelve.";
	let url: string = 'any-craps';

	let phref: string = 'any-seven';
	let prev: string = 'Any Seven';
	let nhref: string = 'the-field';
	let next: string = 'The Field';

	let pageLinks: PageMenu[] = [
		{
			title: 'Any Craps Placement ',
			href: '#anyCrapsPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Any Craps Payment',
			href: '#anyCrapsPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Any Craps Payment Calculator',
			href: '#anyCrapsCalc',
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

	let tblAria: string = 'Any Craps payout table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [['Any Craps', '7:1', '2, 3, 12', 'Any other number']];
	let tblPnts: string[] = ['The Any Craps is a one roll bet'];
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
  "headline": "Betting the Any Craps in Craps",
  "description": "A comprehensive guide on betting the Any Craps in a craps game, explaining its usage, differences from Three Way Crap, and its placement and payment on the craps table.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/any-craps",
  "image": "http://parlaynation.com/images/any-craps/any-craps-header.webp",
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
    "@id": "http://parlaynation.com/any-craps"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Information on the Any Craps bet in craps games, including how it's used to hedge bets, its similarities and differences from Three Way Crap, and its payout structure.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting the Any Craps",
          "description": "An overview of the Any Craps bet, a one-roll bet used to hedge other bets in craps games."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Is Your Any Craps on the Craps Table?",
          "description": "Details the placement of the Any Craps bet on the craps table, highlighting its location in the middle of the table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Any Craps Pay in a Craps Game?",
          "description": "Explains the payout for the Any Craps bet, which pays 7:1."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/any-craps_640x360.webp",
      "caption": "Overhead up close view of the any craps area on the craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/placement-of-the-any-craps_640x360.webp",
      "caption": "Up close view of the any craps bar and the craps rail, showing color-coordinated spots on the bet and rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/what-does-the-any-craps-pay_640x360.webp",
      "caption": "$3 on the any craps with two green dice reading 1-3 and a bubble indicating a $21 payment."
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
			title="Betting the Any Craps in Craps"
			{pageData}
		>
			<p class="pb-4">
				The Any Craps is a one-roll bet and mainly used to hedge bets. You can use it to hedge the <Link
					text="Pass
		Line"
					href="pass-line-basics"
				/> during the <Link text="Comeout Roll" href="the-stages" /> or while making a <Link
					text="Come Bet"
					href="come-bet-basics"
				/>. It's similar to a <Link text="Three Way Crap" href="multi-bets" /> because they both bet
				the Aces, Ace Deuce, and Twelve.
			</p>
			<p class="pb-4">
				The difference in the Any Craps and Three Way Crap is they pay differently based on what
				rolls. The Three Way pays different based on which number rolls.The Any Craps pays the same
				regardless of which rolls.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/any-craps_640x360.webp"
				mdImg="src/images/{url}/any-craps_960x540.webp"
				lgImg="src/images/{url}/any-craps_1280x720.webp"
				title="The Any Craps"
				alt="Overhead up close view of the any craps area on the craps layout."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="anyCrapsPlacement" title="Where Is Your Any Craps on the Craps Table?">
			<p class="pb-4">
				Just like the placement of the <Link text="Any 7" href="any-seven" />, The Any Craps is a
				bar in the middle of the table. The center of the bar is the middle of the table and the
				edges of the bar are the two bases. Everything in between the center and the edge is a
				different spot on the table.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-the-any-craps_640x360.webp"
				mdImg="src/images/{url}/placement-of-the-any-craps_960x540.webp"
				lgImg="src/images/{url}/placement-of-the-any-craps_1280x720.webp"
				title="Placement of the Any Craps"
				alt="Up close view of the any craps bar and the craps rail. There are eight spots that are color coordinated on the bet and the rail."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="anyCrapsPayment" title="What Does the Any Craps Pay in a Craps Game?">
			<p class="pb-4">The Any Craps pay 7:1 or $7 for every $1.</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/what-does-the-any-craps-pay_640x360.webp"
				mdImg="src/images/{url}/what-does-the-any-craps-pay_960x540.webp"
				lgImg="src/images/{url}/what-does-the-any-craps-pay_1280x720.webp"
				title="Any Craps Payment"
				alt="$3 on the any craps with two green dice that read 1-3. There is a bubble that reads $21 payment."
			/>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Any craps payment calculator" id="anyCrapsCalc"
			><CalcBox
				description="Check the payment for an Any Craps bet."
				title="Any Craps Payment Calculator"
			>
				<CalcInput
					calculate={calculateAnyCraps}
					id="any_craps_pymnt_calc"
					pId="any_craps_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Any Craps Amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
