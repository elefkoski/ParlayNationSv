<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import {
		calculateSixEightOdds,
		calculateFiveNineOdds,
		calculateFourTenOdds
	} from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Pass Line Odds';
	let description: string =
		'Odds for the Pass Line pay differently depending on what the Point is. They get paid True Odds and have no advantage for the casino, which is why they have limits.';
	let url: string = 'pass-line-odds';

	let phref: string = 'pass-line-basics';
	let prev: string = 'Pass Line Basics';
	let nhref: string = 'max-odds';
	let next: string = 'Max Odds';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Pass Line Odds',
			href: '#oddsBetting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Pass Line Odds Payment',
			href: '#oddsPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Pass Line Odds Calculators',
			href: '#passLineOddsCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Dealer Pass Line Odds',
			href: '#dealerOdds',
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

	let tblAria: string = 'Odds pay table';
	let tblHeaders: string[] = ['Point', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '6:5', 'When point rolls', '7'],
		['5 or 9', '3:2', 'When point rolls', '7'],
		['4 or 10', '2:1', 'When point rolls', '7']
	];
	let tblPnts: string[] = [
		'Odds are not contract bets',
		'You can only make the odds bet during the Comeout roll',
		"If you don't plan on adding Odds then you you probably shouldn't bet the Pass Line"
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
		  "name": "Pass Line Odds",
		  "description": "Odds for the Pass Line pay differently depending on what the Point is. They get paid True Odds and have no advantage for the casino, which is why they have limits.",
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
		<ContentHeaderOne sectionTitle="The pass line" title="Odds on the Pass Line" {pageData}>
			<p class="pb-4">
				During the Intermediate Roll, you can add an extra bet called Odds directly behind your Pass
				Line bet. They are paid True Odds and are also betting that the Point will be rolled before
				the 7. The wonderful thing about the Odds bet is THE CASINO HAS ZERO ADVANTAGE, so you
				should always want to make this bet.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
			<ContentImg
				caption=""
				smImg="src/images/{url}/pass-line-odds_640x360.webp"
				mdImg="src/images/{url}/pass-line-odds_960x540.webp"
				lgImg="src/images/{url}/pass-line-odds_1280x720.webp"
				alt="$5 on the pass line with $20 odds."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="oddsBetting" title="How Do You Bet Pass Line Odds in Craps?">
			<p class="pb-4">
				Odds for the Pass Line are put directly behind the Pass Line bet. Try not to put the Odds
				bet directly behind the <Link text="Pass Line" href="pass-line-basics" /> because you need some
				space for a die to land between the two bets. Two dice is a good measure, which is also about
				the width of two fingers.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-the-pass-line-with-odds_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-the-pass-line-with-odds_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-the-pass-line-with-odds_1280x720.webp"
				alt="Four bets on the pass line. Each bet pointing to a spot in the rail."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="oddsPayment" title="What Do Pass Line Odds Pay on a Craps Game?">
			<p class="pb-4">
				Odds for the Pass Line pay differently depending on what the Point is. They pay what is
				called True Odds. True Odds are different for each Point, which is why you must bet Odds
				differently for each of those Points.
			</p>
			<ContentHeaderThree title="Odds Pay 6:5 on Point 6 and 8">
				<p class="pb-4">
					When you add Odds to a Pass Line Bet on the 6 or 8, you must bet in increments of five.
					$5, $10, $15, etc. Every $5 you bet as Odds for a Pass Line bet on the 6 or 8 gets paid
					$6. Otherwise known as 6:5, which reads <Quote text="6 to 5" />, or you can think of it as <Quote
						text="$6 for every $5"
					/>.
				</p>
				<ContentImg
					caption="Example 1"
					smImg="src/images/{url}/pass-line-odds-pay-6-8-a_640x360.webp"
					mdImg="src/images/{url}/pass-line-odds-pay-6-8-a_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-6-8-a_1280x720.webp"
					alt="$5 on the Pass line with $5 odds. The pass line is payed even money and the $5 odds are paid $6."
				/>
				<ContentImg
					caption="Example 2"
					smImg="src/images/{url}/pass-line-odds-pay-6-8-b_640x360.webp"
					mdImg="src/images/{url}/pass-line-odds-pay-6-8-b_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-6-8-b_1280x720.webp"
					alt="$25 on the Pass line with $75 odds. The pass line is payed even money and the $75 odds are paid $90"
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Odds Pay 3:2 on Point 5 and 9">
				<p class="pb-4">
					It would be best if you had even Odds on the 5 and 9. This means any even number, such as
					$2, $4, $10, $30, etc., could be used. Every $2 you bet as Odds gets paid $3. This is
					known as 3:2, which reads, <Quote text="3 to 2" /> or <Quote text="$3 for every $2" />.
					You could also think of this as 1 and ½ times your bet or a Blackjack.
				</p>
				<ContentImg
					caption="Example 1"
					smImg="src/images/{url}/pass-line-odds-pay-5-9-a_640x360.webp"
					mdImg="src/images/{url}/pass-line-odds-pay-5-9-a_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-5-9-a_1280x720.webp"
					alt="$10 on the pass line with $10 odds. The pass line is payed even money and the $10 odds are paid $15."
				/>
				<ContentImg
					caption="Example 2"
					mdImg="src/images/{url}/pass-line-odds-pay-5-9-b_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-5-9-b_1280x720.webp"
					smImg="src/images/{url}/pass-line-odds-pay-5-9-b_640x360.webp"
					alt="$15 on the pass line with $50 odds. The pass line is payed even money and the $40 odds are paid $60."
				/>
			</ContentHeaderThree>
			<div class="pb-4" />
			<ContentHeaderThree title="Odds Pay 2:1 on Point 4 and 10">
				<p class="pb-4">
					Odds on the 4 and 10 can be any amount. Regardless of what you bet, the amount you will
					win be double or 2:1, which reads <Quote text="2 to 1" />, or you can think of it as <Quote
						text="$2 for every $1"
					/>. $3 Odds will win $6. $20 odds will win $40.
				</p>
				<ContentImg
					caption="Example 1"
					smImg="src/images/{url}/pass-line-odds-pay-4-10-a_640x360.webp"
					mdImg="src/images/{url}/pass-line-odds-pay-4-10-a_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-4-10-a_1280x720.webp"
					alt=""
				/>
				<ContentImg
					caption="Example 2"
					smImg="src/images/{url}/pass-line-odds-pay-4-10-b_640x360.webp"
					mdImg="src/images/{url}/pass-line-odds-pay-4-10-b_960x540.webp"
					lgImg="src/images/{url}/pass-line-odds-pay-4-10-b_1280x720.webp"
					alt=""
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<CalcContainer aria="Pass Line Odds Calculators" id="passLineOddsCalc">
			<CalcBox
				description="Check the payment for Odds on a Pass Line Bet."
				title="Pass Line Odds Payment Calculators"
			>
				<CalcInput
					calculate={calculateSixEightOdds}
					id="six_eight_odds_pymnt_calc"
					pId="six_eight_odds_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Enter Odds amount for Point 6 or 8:"
				/>
				<CalcInput
					calculate={calculateFiveNineOdds}
					id="five_nine_odds_pymnt_calc"
					pId="five_nine_odds_calc_result"
					placeholder="$2 minimum"
					step={2}
					title="Enter Odds amount for Point 5 or 9:"
				/>
				<CalcInput
					calculate={calculateFourTenOdds}
					id="four_ten_odds_pymnt_calc"
					pId="four_ten_odds_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Odds amount for Point 4 or 10:"
				/>
			</CalcBox>
		</CalcContainer>
		<Divider />
		<ContentHeaderTwo id="dealerOdds" title="How Can You Bet the Pass Line w/Odds for the Dealers?">
			<p class="pb-4">
				If you make a Pass Line bet for the dealers, you can also add Odds to it. Like a players'
				Pass Line bet, there is a maximum amount of Odds you can add to a dealers' Pass Line bet.
				The Pass Line bet gets paid even money and the Odds accordingly.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/dealer-pass-line-with-odds_640x360.webp"
				mdImg="src/images/{url}/dealer-pass-line-with-odds_960x540.webp"
				lgImg="src/images/{url}/dealer-pass-line-with-odds_1280x720.webp"
				alt="$10 on the pass line with $20 odds. Next to it is a $1 pass line bet with $2 odds."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
