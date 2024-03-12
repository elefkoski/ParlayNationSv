<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import { calculateHorn } from '$lib/utils/calculations';
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

	let title: string = 'Betting the Horn in Craps';
	let description: string =
		'A Horn is an equal amount bet on each the Aces, Ace Deuce, Yo, and Twelve. You must bet it in increments of four dollars and is a one-roll bet.';
	let url: string = 'horn';

	let phref: string = 'multi-bets';
	let prev: string = 'Multi-Bets';
	let nhref: string = 'horn-high';
	let next: string = 'Horn High';

	let pageLinks: PageMenu[] = [
		{
			title: 'A $4 Horn',
			href: '#fourHorn',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn Placement',
			href: '#hornPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn Payment',
			href: '#hornPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn Calculator',
			href: '#hornCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer Horn',
			href: '#dealerHorn',
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

	let tblAria: string = 'Horn Payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['High Side', '27:4', '2 or 12', 'Any other number'],
		['Low Side', '3x the bet', '3 or 11', 'Any other number']
	];
	let tblPnts: string[] = ['The Horn is a one roll bet', 'Horns must be bet in multiples of $4.'];
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
		  "name": "Learn the Horn",
		  "description": "A Horn is an equal amount bet on each the Aces, Ace Deuce, Yo, and Twelve. You must bet it in increments of four dollars and is a one-roll bet.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting the Horn in Craps" {pageData}>
			<p class="pb-4">
				Craps has a bet that easily lets you bet all four <Link
					text="Straight Up"
					href="straight-up"
				/>
				bets simultaneously called the Horn. You must bet an equal amount on each of the four Straight
				Up bets, so you make your Horn bets in $4 increments.
			</p>
			<p class="pb-4">
				The Horn makes betting Proposition Bets easier. Not only does it wrap up four bets in one,
				but it's also the basis to the <Link text="Horn High's" href="horn-high" />, which
				conveniently let you bet in five-dollar increments.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/horn_640x360.webp"
				mdImg="src/images/{url}/horn_960x540.webp"
				lgImg="src/images/{url}/horn_1280x720.webp"
				title="The Horn"
				alt="Up close overhead view of the horn bet on the craps layout."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="fourHorn" title="What Is a $4 Horn in Craps?">
			<p class="pb-4">
				A $4 Horn is the minimum bet for a Horn. It's $1 on each of the four <Link
					text="Straight Up"
					href="straight-up"
				/> bets: the Aces, Ace Deuce, Yo, and Twelve. The $4 Horn offers better payouts than the <Link
					text="C & E"
					href="c-and-e"
				/> which also bets all of the Straight Up numbers but only has a $2 minimum.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/4-horn_640x360.webp"
				mdImg="src/images/{url}/4-horn_960x540.webp"
				lgImg="src/images/{url}/4-horn_1280x720.webp"
				title="$4 Horn"
				alt="An image split with $4 on the Horn on one side, and $1 each on the aces, ace deuce, yo, twelve on the other."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="hornPlacement" title="Where Is Your Horn on the Craps Table?">
			<p class="pb-4">
				Like most other bets on the Craps table, the Horn bet is divided into two sides: the left
				and right sides of the table. There isn't enough space for 16 players in the box, and you
				normally won't see more than a few people betting the Horn at once anyway, so four spots on
				each side are good enough.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-a-horn_640x360.webp"
				mdImg="src/images/{url}/placement-of-a-horn_960x540.webp"
				lgImg="src/images/{url}/placement-of-a-horn_1280x720.webp"
				title="Placement of a Horn"
				alt="Up close image of the horn bet and the craps rail. There are eight colored spots corresponding the horn and the rail."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="hornPayment" title="What Does the Horn Pay in a Craps Game?">
			<p class="pb-4">
				A Horn pays differently based on what rolls, a high number, which would be the Aces and the
				Twelve, or a low number, which would be the Ace Deuce and the Yo.
			</p>
			<p class="pb-4">
				No matter which of the four bets hit, you always take what the winning bet paid and subtract
				the rest of the losers in order to keep the whole bet up to win again.
			</p>
			<ContentHeaderThree title="$4 Horn Pays $12 or $27">
				<p class="pb-4">
					If either low side hits, the Ace Deuce or Yo, it would win $15 but then you would subtract
					the other three losers and it would pay $12. Likewise if the high side hits, the Aces or
					Twelve, it would win $30 but then you would subtract the other three losers and it would
					pay $27.
				</p>
				<ContentImg
					caption="$4 Horn on the Low Side Pays $12"
					smImg="src/images/{url}/4-winner-low-side_640x360.webp"
					mdImg="src/images/{url}/4-winner-low-side_960x540.webp"
					lgImg="src/images/{url}/4-winner-low-side_1280x720.webp"
					title="$4 Horn on the Low Side"
					alt="$1 on each the horn numbers. Two green dice read 1-2. A bubble reads $12 payment."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$4 Horn on the High Side Pays $27"
					smImg="src/images/{url}/4-winner-high-side_640x360.webp"
					mdImg="src/images/{url}/4-winner-high-side_960x540.webp"
					lgImg="src/images/{url}/4-winner-high-side_1280x720.webp"
					title="$4 Horn on the High Side"
					alt="$1 on each the horn numbers. Two green dice read 6-6. A bubble reads $27 payment."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Low Side Pays 3x the Bet">
				<p class="pb-4">
					When you're betting a Horn and a low number rolls, the Ace Deuce or the Yo, the payment is
					to multiply the bet by three.
				</p>
				<ContentImg
					caption="$8 Horn on Low Side Pays $24"
					smImg="src/images/{url}/8-horn-low-side_640x360.webp"
					mdImg="src/images/{url}/8-horn-low-side_960x540.webp"
					lgImg="src/images/{url}/8-horn-low-side_1280x720.webp"
					title="$8 Horn Low Side Payment"
					alt="$8 on the horn with a bubble that reads $24 payment"
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$24 Horn on Low Side Pays $72"
					smImg="src/images/{url}/24-horn-low-side_640x360.webp"
					mdImg="src/images/{url}/24-horn-low-side_960x540.webp"
					lgImg="src/images/{url}/24-horn-low-side_1280x720.webp"
					title="$24 Horn Low Side Payment"
					alt="$24 on the horn with a bubble that reads $72 payment"
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="High Side Pays 7x minus 1/4 of the Bet">
				<p class="pb-4">
					When the Horn hits on the high side, the Aces or the Twelve, the payment is a bit more
					confusing. The first way I learned to pay the high side of the Horn was to multiply the
					bet by 7 then subtract ¼ of the bet.
				</p>
				<ContentImg
					caption="$8 Horn on High Side Pays $54"
					smImg="src/images/{url}/8-horn-high-side-a_640x360.webp"
					mdImg="src/images/{url}/8-horn-high-side-a_960x540.webp"
					lgImg="src/images/{url}/8-horn-high-side-a_1280x720.webp"
					title="$8 Horn High Side Payment"
					alt="$8 on the Horn. A bubble reads $54 payment"
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$24 Horn High Side Pays $162"
					smImg="src/images/{url}/24-horn-high-side-a_640x360.webp"
					mdImg="src/images/{url}/24-horn-high-side-a_960x540.webp"
					lgImg="src/images/{url}/24-horn-high-side-a_1280x720.webp"
					title="$24 Horn High Side Payment"
					alt="$24 on the Horn. A bubble reads $162 payment."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Horn payment calculator" id="hornCalc"
			><CalcBox
				description="Check the payment for a bet made on the Horn."
				title="Horn Payment Calculator"
			>
				<CalcInput2
					calculate={calculateHorn}
					id="horn_pymnt_calc"
					pId="horn_calc_result"
					placeholder="$4 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={4}
					title="Enter amount on the Horn:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo
			id="dealerHorn"
			title="How Can You Bet the Horn for the Dealers on the Craps Table?"
		>
			<p class="pb-4">
				When a bet on the Horn comes in for the dealers it is placed in the middle of the Horn area.
				While a proper $4 would be best, any amount put on the Horn for the dealers is appreciated.
				A good easy way to bet for the dealers on the Horn is to throw in a nickel and say <Quote
					text="Two-way Horn!"
				/>. That will give you a $4 Horn and $1 for the dealers.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/betting-a-horn-for-the-dealers_640x360.webp"
				mdImg="src/images/{url}/betting-a-horn-for-the-dealers_960x540.webp"
				lgImg="src/images/{url}/betting-a-horn-for-the-dealers_1280x720.webp"
				title="Betting a Horn for the Dealers"
				alt="$4 sitting in the middle of the horn."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
