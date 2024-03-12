<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import {
		calculateSixEightOverlay,
		calculateFiveNineOverlay,
		calculateFourTenOverlay
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

	let title: string = 'Betting Overlays in Craps';
	let description: string =
		'An Overlay is the opposite of a Buy bet. You bet the 7 will be rolled before a Point and pay a commission based on how much it wins.';
	let url: string = 'overlays';

	let phref: string = 'dont-come-lay-odds';
	let prev: string = "Don't Come Lay Odds";
	let nhref: string = 'practice-craps';
	let next: string = 'Practice Craps';

	let pageLinks: PageMenu[] = [
		{
			title: '5% Commission',
			href: '#fiveCommission',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting Overlays',
			href: '#bettingOverlays',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Overlay Placement',
			href: '#overlayPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Overlay Payment',
			href: '#overlayPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Overlay Calculators',
			href: '#overlayCalcs',
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

	let tblAria: string = 'Overlay payment table';
	let tblHeaders: string[] = ['Overlay', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '5:6', '7', 'When point rolls'],
		['5 or 9', '2:3', '7', 'When point rolls'],
		['4 or 10', '1:2', '7', 'When point rolls']
	];
	let tblPnts: string[] = [
		'All bets have a 5% commission fee on winnings',
		'Overlays are not contract bets',
		'You cannot turn OFF Overlays, you can only take them back'
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
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn Overlays",
		  "description": "An Overlay is the opposite of a Buy bet. You bet the 7 will be rolled before a Point and pay a commission based on how much it wins.",
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
		<ContentHeaderOne sectionTitle="The Don't Side" title="Betting Overlays in Craps" {pageData}>
			<p class="pb-4">
				An Overlay is when you bet directly against a Point. Unlike the <Link
					text="Don't Pass"
					href="dont-pass"
				/> or <Link text="Don't Come" href="dont-come" />, where the dice determines the Point, you
				get to pick which Point you want to bet against. The dealer will put your Overlay behind the
				Point you picked and put a lammer on it that says 'Lay'. You get paid True Odds for an
				Overlay but must pay a commission. Once you have decided to Overlay a Point, you win when
				the 7 is rolled and lose if that Point is rolled.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/overlays_640x360.webp"
				mdImg="src/images/{url}/overlays_960x540.webp"
				lgImg="src/images/{url}/overlays_1280x720.webp"
				title="Overlays"
				alt="$60 Overlay behind the point nine."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="fiveCommission"
			title="5% Commission on the Winnings of an Overlay Bet in Craps"
		>
			<p class="pb-4">
				Overlays get paid True Odds, which have no advantage for a casino, so they charge a 5%
				Commission on how much your bet wins. This is different from the 'buy' which charges a 5%
				commission on the bet itself, not its winnings. For every $20 you would win on your Overlay
				you pay $1 for commission.
			</p>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="bettingOverlays" title="How Do You Bet an Overlay in Craps?">
			<p class="pb-4">
				When you want to make an Overlay you say it using the term <Quote text="No ___(Point)___" />
				and you add the cost of commission in with the bet. E.g. If you want to Overlay the 10 for $40
				+ $1 commission, you'd say <Quote text="Can I have a $41 No 10?" />, If you wanted to
				Overlay the 5, you could say <Quote text="$31 No 5" />. You should know how much you want to
				bet including the Vig.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-an-overlay_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-an-overlay_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-an-overlay_1280x720.webp"
				title="How to Bet an Overlay"
				alt="Overlay bets are set up behind each of the six points."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="overlayPlacement" title="Where Are Your Overlays on the Craps Table?">
			<p class="pb-4">
				Like most other bets on <Link text="the Dont's" href="the-donts" />, Overlays are put behind
				the Point they are betting against. To distinguish an Overlay from a Don't Come bet, the
				dealers put a lammer on top of the bet that says 'Lay'. This tells you, <Link
					text="the Boxperson"
					href="the-crew"
				/>, and any other dealer that the bet is not a Don't Come Bet but an Overlay. Overlays are
				placed in a general area behind each Point relative to the players place on the table.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/placement-of-an-overlay_640x360.webp"
				mdImg="src/images/{url}/placement-of-an-overlay_960x540.webp"
				lgImg="src/images/{url}/placement-of-an-overlay_1280x720.webp"
				title="Placement of an Overlay"
				alt="Up close overhead view of the boxes behind the place bets and the craps table rail. There are 16 colored spots that correspond with each other."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="overlayPayment" title="What Does an Overlay Pay at the Craps Table?">
			<p class="pb-4">
				An Overlay pays True Odds but you need to pay a commission in order to make the bet. Because
				they are True Odds you need to bet them in correct increments and while making the bet
				include the commission that you'll be paying.
			</p>
			<ContentHeaderThree title="You Must Pay a 5% Commission on it's Winnings">
				<p class="pb-4">
					Overlays are essentially the opposite of <Link text="a Buy" href="buying-place-bets" /> on
					a
					<Link
						text="Place
				Bet"
						href="place-bet-basics"
					/>. Where you pay a 5% Commission on the amount of a Buy on a Place Bet, for an Overlay,
					you pay 5% Commission on what that Overlay is going to win. For every $20 you would win on
					your Overlay you pay $1 for commission.
				</p>
			</ContentHeaderThree>
			<ContentHeaderThree title="Overlays Must Win at Least $20">
				<p class="pb-4">
					The minimum commission you must pay for an Overlay is $1. $1 is 5% of $20. The minimum
					amount you need to win is going to be $20 in order to pay the minimum commission of $1.
					Regardless of the Point you are going to Overlay, the minimum the Overlay is going to win
					must be $20.
				</p>
			</ContentHeaderThree>
			<ContentHeaderThree title="Overlay the 6 and 8">
				<p class="pb-4">
					True Odds for the Don't Side on the 6 and 8 are 5:6 or <Quote text="5 for every 6." />
					Therefore you must bet an Overlay in increments of 6. At the same time, your Overlay must win
					at least $20. The minimum you can Overlay the 6 or 8 for is $24 because $24 wins $20. When
					you include the cost of commission the bet total is $25. You would make that bet by telling
					the dealer
					<Quote text="I would like a $25 no 6 (or 8)." /> If you would like to keep the bet up after
					it wins you would have to drop $1 for commission.
				</p>
				<ContentImg
					caption="$25 No Six"
					smImg="src/images/{url}/25-no-six_640x360.webp"
					mdImg="src/images/{url}/25-no-six_960x540.webp"
					lgImg="src/images/{url}/25-no-six_1280x720.webp"
					title="$25 No Six"
					alt="$24 behind the point six with a lay button on top. Bubble reads $25 total bet cost"
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$25 No Six - Paid"
					smImg="src/images/{url}/25-no-six-paid_640x360.webp"
					mdImg="src/images/{url}/25-no-six-paid_960x540.webp"
					lgImg="src/images/{url}/25-no-six-paid_1280x720.webp"
					title="$25 No Six - Paid"
					alt="$24 behind the point six paid $20. Two purple dice show 2-5."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Overlay the 5 and 9">
				<p class="pb-4">
					True Odds for the Don't Side on the 5 and 9 are 2:3 or <Quote text="2 for every 3." /> You
					must bet an Overlay in increments of 3 and it must win at least $20 so the minimum you can
					Overlay the 5 or 9 for is $30 because $30 wins $20. When you include the cost of commission
					the bet total is $31 and you would bet it by telling the dealer <Quote
						text="I would like a $31 no 5 (or 9)."
					/> If you would like to keep the bet up after it wins you would have to drop $1 for commission.
				</p>
				<ContentImg
					caption="$31 No Five"
					smImg="src/images/{url}/31-no-five_640x360.webp"
					mdImg="src/images/{url}/31-no-five_960x540.webp"
					lgImg="src/images/{url}/31-no-five_1280x720.webp"
					title="$31 No Five"
					alt="$31 behind the point five with a lay button on top. Bubble reads $31 total bet cost."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$31 No Five - Paid"
					smImg="src/images/{url}/31-no-five-paid_640x360.webp"
					mdImg="src/images/{url}/31-no-five-paid_960x540.webp"
					lgImg="src/images/{url}/31-no-five-paid_1280x720.webp"
					title="$31 No Five - Paid"
					alt="$31 behind the point five paid $20. Two purple dice show 2-5."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Overlay the 4 and 10">
				<p class="pb-4">
					True Odds for the Don't Side on the 4 and 10 are 1:2 or <Quote text="1 for every 2." /> You
					must bet an Overlay in increments of 2 or anything that's an even number. The minimum it must
					win is $20 so the Overlay must be at least $40 because $40 wins $20. When you include the cost
					of commission the bet total is $41 and you would bet it by telling the dealer <Quote
						text="I would like a $41
				no 4 (or 10)."
					/> If you would like to keep the bet up after it wins you would have to drop $1 for commission.
				</p>
				<ContentImg
					caption="$41 No Four"
					smImg="src/images/{url}/41-no-four_640x360.webp"
					mdImg="src/images/{url}/41-no-four_960x540.webp"
					lgImg="src/images/{url}/41-no-four_1280x720.webp"
					title="$41 No Four"
					alt="$41 behind the point four with a lay button on top. Bubble reads $41 total bet cost."
				/>
				<div class="pb-4" />
				<ContentImg
					caption="$41 No Four - Paid"
					smImg="src/images/{url}/41-no-four-paid_640x360.webp"
					mdImg="src/images/{url}/41-no-four-paid_960x540.webp"
					lgImg="src/images/{url}/41-no-four-paid_1280x720.webp"
					title="$41 No Four - Paid"
					alt="$41 behind the point four paid $20. Two purple dice show 2-5."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Overlay payment calculators" id="overlayCalcs"
			><CalcBox
				description="Check the payment for Overlays against any Point."
				title="Overlay Payment Calculators"
			>
				<CalcInput
					calculate={calculateSixEightOverlay}
					id="six_eight_overlay_pymnt_calc"
					pId="six_eight_overlay_calc_result"
					placeholder="$24 minimum"
					step={6}
					title="Enter Overlay amount for 6 or 8:"
				/>
				<CalcInput
					calculate={calculateFiveNineOverlay}
					id="five_nine_overlay_pymnt_calc"
					pId="five_nine_overlay_calc_result"
					placeholder="$30 minimum"
					step={6}
					title="Enter Overlay amount for 5 or 9:"
				/>
				<CalcInput
					calculate={calculateFourTenOverlay}
					id="four_ten_overlay_pymnt_calc"
					pId="four_ten_overlay_calc_result"
					placeholder="$40 minimum"
					step={10}
					title="Enter Overlay amount for 4 or 10:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
