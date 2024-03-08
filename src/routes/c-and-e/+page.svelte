<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import CalcInput3 from '$lib/clients/components/calculators/CalcInput3.svelte';
	import { calculateCAndESplit, calculateCAndE } from '$lib/utils/calculations';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';

	let title: string = 'Betting the C & E';
	let description: string =
		'The C &amp; E is a combination of two bets. The “C” stands for the Any Crap, which is the Aces, Ace Deuce, and the 12. The “E” stands for the Eleven, or “Yo”. The C &amp; E has a two-dollar minimum';
	let url: string = 'c-and-e';

	let phref: string = 'straight-up';
	let prev: string = 'Straight Up';
	let nhref: string = 'any-seven';
	let next: string = 'Any Seven';

	let pageLinks: PageMenu[] = [
		{
			title: 'Placement of a C & E',
			href: '#cAndEPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Payments of a C & E',
			href: '#cAndEPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'C & E Split Calculator',
			href: '#cAndESplitCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'C & E Calculator',
			href: '#cAndECalc',
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

	let tblAria: string = 'C & E bet seperately pay table';
	let tblHeaders: string[] = ['Seperately', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['C - Any Craps', '7:1', '2, 3, 12', 'Any other number'],
		['E - Eleven', '15:1', '11', 'Any other number']
	];
	let tblPnts: string[] = ['There is a $2 minimum on the C & E'];
	let tblAria2: string = 'C & E bet split pay table';
	let tblHeaders2: string[] = ['Split', 'Pays', 'Wins', 'Loses'];
	let tblRows2: (string | number)[][] = [
		['Craps Roll', '3:1', '2, 3, 12', 'Any other number'],
		['Eleven Rolls', '7:1', '11', 'Any other number']
	];
	let tblPnts2: string[] = ["C & E's are one roll bets"];
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
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn C &amp; E Bets",
		  "description": "The C &amp; E is a combination of two bets. The “C” stands for the Any Crap, which is the Aces, Ace Deuce, and the 12. The “E” stands for the Eleven, or “Yo”. The C &amp; E has a two-dollar minimum.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://www.parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Proposition Bets"
			title="Betting the C & E in Craps"
			{pageData}
		/>
		<p class="pb-4">
			The C & E is a combination of two bets. The 'C' is the <Link
				text="Any Craps"
				href="any-craps"
			/>: Aces, Ace Deuce, and 12. The 'E' stands for Eleven or the Yo. You can bet the C & E as a
			split (both simultaneously) or individually ( a different amount on each the C and the E).
		</p>
		<p class="pb-4">
			The C & E is sort of the poor man's Horn. It bets all the same numbers but has a different pay
			structure and a $2 minimum; you need at least $1 on the 'C' and $1 on the 'E'. On the Horn,
			you need to bet $4.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentTble
			tblAria={tblAria2}
			tblHeaders={tblHeaders2}
			tblRows={tblRows2}
			tblPnts={tblPnts2}
		/>
		<ContentImg
			caption=""
			smImg="src/images/{url}/c-and-e_640x360.webp"
			mdImg="src/images/{url}/c-and-e_960x540.webp"
			lgImg="src/images/{url}/c-and-e_1280x720.webp"
			title="The C & E"
			alt="Overhead up close view of the c &amp; e betting area."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="cAndEPlacement" title="Where Is Your C & E on the Craps Table?" />
		<p class="pb-4">
			There are usually enough spots of the C & E for every player on the table. They are also not
			confined to a box so there's plenty of space to place the bets. Placements of the C & E's are
			relative to your spot on the table.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-c-and-e_640x360.webp"
			mdImg="src/images/{url}/placement-of-c-and-e_960x540.webp"
			lgImg="src/images/{url}/placement-of-c-and-e_1280x720.webp"
			title="Placement of the C & E"
			alt="Overhead view up C &amp; E area with arrows pointing to their respective spots in the rail."
		/>
		<Divider />
		<ContentHeaderTwo id="cAndEPayment" title="What Does the C & E Pay in a Craps Game?" />
		<p class="pb-4">
			Splitting - There are two payouts possible when splitting the C & E. If any of the Craps roll
			(2, 3, or 12) the payout will be 3x the bet. E.g. a $5 C & E will pay 3 x 5 or $15. If the Yo
			rolls (11) the payout will be 7x the bet.
		</p>
		<ContentHeaderThree title="Pays 7:1 or 3:1 When it is Split" />
		<ContentImg
			caption="$5 C & E Split"
			smImg="src/images/{url}/5-c-and-e-split_640x360.webp"
			mdImg="src/images/{url}/5-c-and-e-split_960x540.webp"
			lgImg="src/images/{url}/5-c-and-e-split_1280x720.webp"
			title="$5 C & E Split"
			alt="$5 C &amp; E split with two bubbles. One reads $15 payout. The second reads $35 payout."
		/>
		<Divider />
		<CalcContainer aria="C & E split calculator" id="cAndESplitCalc"
			><CalcBox
				description="Check the payment for a bet made on the C & E split."
				title="C & E Split Payment Calculator"
			>
				<CalcInput2
					calculate={calculateCAndESplit}
					id="c_and_e_split_pymnt_calc"
					pId="c_and_e_split_calc_result"
					placeholder="$2 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={2}
					title="Enter amount to split:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderThree title="Pays Differently Every Time When You Have Seperate Amounts" />
		<ContentImg
			caption="$4C - $1E"
			smImg="src/images/{url}/4-c-1-e_640x360.webp"
			mdImg="src/images/{url}/4-c-1-e_960x540.webp"
			lgImg="src/images/{url}/4-c-1-e_1280x720.webp"
			title="$4C and $1E"
			alt="$4 on the any crap and $1 on the yo. Two bubbles: one read $27 payment and the other $11 payment."
		/>
		<Divider />
		<CalcContainer aria="C & E separated calculators" id="cAndECalc"
			><CalcBox
				description="Check the payment for the C & E when you only bet the C, when you only bet the E, or you bet them together."
				title="C & E Payment Calculator"
			>
				<CalcInput3
					calculate={calculateCAndE}
					id="c_and_e_split_pymnt_calc"
					idTwo="c_and_e_pymnt_calc"
					pId="c_and_e_calc_result"
					placeholder="$1 minimum"
					placeholderTwo="$1 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Eleven', 'Twelve']}
					step={1}
					title="Enter amount for the C (Any Craps):"
					titleTwo="Enter amount for the E (Eleven):"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
