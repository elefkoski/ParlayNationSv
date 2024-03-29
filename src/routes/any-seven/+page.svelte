<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateAnySeven } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Betting the Any Seven in Craps';
	let description: string =
		"The Any 7 is a one-roll bet and could be used any number of ways. Many of the Don't players use it to hedge or tnavnvoke the seven. You can add it to the Horn to make a World or many players bet it during the Comeout Roll so they could win twice if they are on the Pass Line.";
	let url: string = 'any-seven';

	let phref: string = 'c-and-e';
	let prev: string = 'C & E';
	let nhref: string = 'any-craps';
	let next: string = 'Any Craps';

	let pageLinks: PageMenu[] = [
		{
			title: 'Any Seven Placement',
			href: '#anySevenPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Any Seven Payment',
			href: '#anySevenPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Any Seven Payment Calculator',
			href: '#anySevenCalc',
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

	let tblAria: string = 'The Any Seven payout table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [['Any 7', '4:1', '7', 'Any other number']];
	let tblPnts: string[] = ['The Any Seven is a one roll bet'];
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
  "headline": "Betting the Any Seven in Craps",
  "description": "An overview of the Any Seven bet in craps, including strategies for hedging, incorporation into other bets, and its placement and payout on the craps table.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/any-seven",
  "image": "http://parlaynation.com/images/any-seven/any-seven-header.webp",
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
    "@id": "http://parlaynation.com/any-seven"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding the Any Seven Bet",
      "description": "Details the Any Seven bet in craps, its strategic uses, and how it's integrated with other bets like the Horn and the World.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Where Is Your Any Seven on the Craps Table?",
          "description": "Explains the placement of the Any Seven bet on the craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Does the Any Seven Pay in a Craps Game?",
          "description": "Details the payout for the Any Seven bet, which is 4:1."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/any-seven_640x360.webp",
      "caption": "Visual representation of the Any Seven bet area on the craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/placement-of-the-any-seven_640x360.webp",
      "caption": "Detailed view of the Any Seven bet placement relative to player positions."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/what-does-the-any-seven-pay_640x360.webp",
      "caption": "Example of a $4 Any Seven bet and its $16 payout."
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
			title="Betting the Any Seven in Craps"
			{pageData}
		>
			<p class="pb-4">
				The Any 7 is a one-roll bet and could be used any number of ways. Many of the Don't players
				use it to hedge or tnavnvoke the seven. You can add it to the <Link
					text="Horn"
					href="horn"
				/>
				to make a <Link text="World" href="the-world" /> or many players bet it during the <Link
					text="Comeout Roll"
					href="the-stages"
				/> so they could win twice if they are on the <Link
					text="Pass Line"
					href="pass-line-basics"
				/>.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/any-seven_640x360.webp"
				mdImg="src/images/{url}/any-seven_960x540.webp"
				lgImg="src/images/{url}/any-seven_1280x720.webp"
				title="The Any Seven"
				alt="Overhead up close view of the any seven area on the craps layout."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="anySevenPlacement" title="Where Is Your Any Seven on the Craps Table?">
			<p class="pb-4">
				The Any 7 is a bar across the middle of the table. The bar is split into a left and right
				side of the table with the center of the bar is the middle of the table and the edges of the
				bar are the two bases.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-the-any-seven_640x360.webp"
				mdImg="src/images/{url}/placement-of-the-any-seven_960x540.webp"
				lgImg="src/images/{url}/placement-of-the-any-seven_1280x720.webp"
				title="Placement of the Any Seven"
				alt="Up close view of the any seven bar and the craps rail. There are eight spots that are color coordinated on the bet and the rail."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="anySevenPayment" title="What Does the Any Seven Pay in a Craps Game?">
			<p class="pb-4">The Any 7 pays 4:1 or $4 for every $1.</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/what-does-the-any-seven-pay_640x360.webp"
				mdImg="src/images/{url}/what-does-the-any-seven-pay_960x540.webp"
				lgImg="src/images/{url}/what-does-the-any-seven-pay_1280x720.webp"
				title="What Does the Any Seven Pay"
				alt="$4 on the any seven with two green dice that read 1-6. There is a bubble that reads $16 payment."
			/>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Any seven payment calculator" id="anySevenCalc"
			><CalcBox
				description="Check the payment for an Any Seven bet."
				title="Any Seven Payment Calculator"
			>
				<CalcInput
					calculate={calculateAnySeven}
					id="any_seven_pymnt_calc"
					pId="any_seven_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Any Seven Amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
