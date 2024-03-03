<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateMaxOdds } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Max Odds on the Pass Line';
	let description: string =
		'Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the amount you can add as odds. The limit changes from casino to casino but is based on the amount of your Pass Line bet.';
	let url: string = 'max-odds';

	let phref: string = 'pass-line-odds';
	let prev: string = 'Pass Line Odds';
	let nhref: string = 'place-bets';
	let next: string = 'Place Bets';

	let pageLinks: PageMenu[] = [
		{
			title: 'Single Odds',
			href: '#singleOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Double Odds',
			href: '#doubleOdds',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: '3x 4x 5x Odds',
			href: '#threeFourFive',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: '3x4x5x Max Odds Calculator',
			href: '#maxOddsCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Five Times Odds',
			href: '#fiveTimes',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Ten Times Odds',
			href: '#tenTimes',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: '100 times Odds',
			href: '#oneHundredTimes',
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
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Max Odds on the Pass Line",
		  "description": "Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the amount you can add as odds. The limit changes from casino to casino but is based on the amount of your Pass Line bet.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="The pass line" title="Max Odds on the Pass Line" {pageData} />
		<p class="pb-4">
			Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the
			amount you can add as odds. The limit changes from casino to casino but is based on the amount
			of your Pass Line bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/max-odds-on-the-pass-line_640x360.webp"
			mdImg="src/images/{url}/max-odds-on-the-pass-line_960x540.webp"
			lgImg="src/images/{url}/max-odds-on-the-pass-line_1280x720.webp"
			alt="$5 on the pass line with $25 odds in the back as odds."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="singleOdds" title="What Are Single (1x) Odds in Craps?" />
		<p class="pb-4">
			Single Odds is when you can bet the same amount in Odds as you have on the Pass Line. This is
			the bottom of the barrel in terms of what a casino will allow you to bet but it is still a
			good bet with a low house advantage.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/single-odds_640x360.webp"
			mdImg="src/images/{url}/single-odds_960x540.webp"
			lgImg="src/images/{url}/single-odds_1280x720.webp"
			alt="$10 on the Pass Line with $10 Pass Line Odds."
		/>
		<Divider />
		<ContentHeaderTwo id="doubleOdds" title="What Are Double (2x) Odds in Craps?" />
		<p class="pb-4">
			Double Odds are when you can bet twice your Pass Line bet. While not the best, I've seen a lot
			of players go all night without ever having bet more than double their Pass Line bet. If you
			don't plan on spending a lot at the Craps table, double odds should be good for you.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/double-odds_640x360.webp"
			mdImg="src/images/{url}/double-odds_960x540.webp"
			lgImg="src/images/{url}/double-odds_1280x720.webp"
			alt="$10 on the Pass Line with $20 as Pass Line Odds."
		/>
		<Divider />
		<ContentHeaderTwo id="threeFourFive" title="What Are 3x 4x 5x Odds in Craps?" />
		<p class="pb-4">
			3-4-5 is standard in many casinos. This means the max odds that you can bet on the <Link
				text="Pass Line"
				href="pass-line-basics"
			/> are 3x (your Pass Line bet) on the 4 and 10, 4x (your Pass Line bet) on the 5 and 9, and 5x
			(your Pass Line bet) on the 6 and 8.
		</p>
		<p class="pb-4">
			No matter what Point is, if it has Max Odds using 3x 4x 5x, the total payout is going to be 7x
			your Pass Line Bet. E.g., if you have a Pass Line bet of $5, the total payout of the Odds and
			the Pass Line is going to be $35 (7 x $5).
		</p>
		<ContentHeaderThree title="3x Odds on Points 4 and 10" />
		<p class="pb-4">
			Max Odds on the 4 and 10 are 3 times the Pass Line bet. A $25 Pass Line bet on the 4 and 10
			would allow $75 Odds. The payment would be 7 times the Pass Line bet (7 x $25) or $175. You
			win $150 on your $75 Odds (2:1) and the $25 for the Pass Line totaling $175.
		</p>
		<ContentImg
			caption="3x Pass Line"
			smImg="src/images/{url}/3x-on-4-10_640x360.webp"
			mdImg="src/images/{url}/3x-on-4-10_960x540.webp"
			lgImg="src/images/{url}/3x-on-4-10_1280x720.webp"
			alt="$10 on the pass line with $30 odds. Point is four or ten."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="4x Odds on Points 5 and 9" />
		<p class="pb-4">
			You can bet up to 4 times your Pass Line bet when the Point is 5 or 9. A $15 Pass Line bet
			would allow up to $60 as Odds, and the payment would be 7x the Pass Line bet (7 x $15) or
			$105. You win $90 for your $60 odds (3:2), and the Pass Line bet would win even money, $15,
			for a total payment of $105.
		</p>
		<ContentImg
			caption="4x Pass Line"
			smImg="src/images/{url}/4x-on-5-9_640x360.webp"
			mdImg="src/images/{url}/4x-on-5-9_960x540.webp"
			lgImg="src/images/{url}/4x-on-5-9_1280x720.webp"
			alt="$15 on the pass line with $60 odds. Point is five or nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="5x Odds on Points 6 or 8" />
		<p class="pb-4">
			When the Point is 6 or 8, you're able to bet up to 5 times your Pass Line bet. The max on $10
			would be $50, and the payout would be 7 times the Pass Line bet ($10) or $70. $50 Odds win $60
			(6:5), and $10 Pass wins even money.
		</p>
		<ContentImg
			caption="5x Pass Line"
			smImg="src/images/{url}/5x-on-6-8_640x360.webp"
			mdImg="src/images/{url}/5x-on-6-8_960x540.webp"
			lgImg="src/images/{url}/5x-on-6-8_1280x720.webp"
			alt=""
		/>

		<Divider />
		<CalcContainer aria="Max odds payment calculator" id="maxOddsCalc">
			<CalcBox
				description="Check the total payment for a Pass Line with Max Odds when the table has 3x4x5x Odds."
				title="Max Odds Payment Calculator for 3x4x5x Odds"
			>
				<CalcInput
					calculate={calculateMaxOdds}
					id="max_odds_pymnt_calc"
					pId="max_odds_calc_result"
					placeholder="Table minimum"
					step={5}
					title="Enter Pass Line Amount:"
				/>
			</CalcBox>
		</CalcContainer>
		<Divider />
		<ContentHeaderTwo id="fiveTimes" title="What Are 5x Odds in Craps?" />
		<p class="pb-4">
			5x Odds are when you can bet five times your Pass Line bet as Odds. This is also another
			common maximum amount for Odds at casinos. Maxing 5x Odds is still expensive so don't be
			deterred if you see it. If you wan't to bet more, you can always add more to your Pass Line
			bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/five-times-max-odds_640x360.webp"
			mdImg="src/images/{url}/five-times-max-odds_960x540.webp"
			lgImg="src/images/{url}/five-times-max-odds_1280x720.webp"
			alt="$50 on the Pass Line with $250 Pass Line Odds."
		/>
		<Divider />
		<ContentHeaderTwo id="tenTimes" title="What Are 10x Odds in Craps?" />
		<p class="pb-4">
			10x Odds are when you can bet 10x your Pass Line bet as Odds. This is amazing but expensive.
			On a $5 game it's sustainable but when you start 10x maxing Odds on $15 or $25 games, you can
			drop thousands in minutes. It becomes scary to cut that house edge down real low.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/ten-times-max-odds_640x360.webp"
			mdImg="src/images/{url}/ten-times-max-odds_960x540.webp"
			lgImg="src/images/{url}/ten-times-max-odds_1280x720.webp"
			alt="$10 on the Pass Line with $100 Pass Line Odds"
		/>
		<Divider />
		<ContentHeaderTwo id="oneHundredTimes" title="What Are 100x Odds in Craps?" />
		<p class="pb-4">
			100x Odds in Craps is when you can bet 100 times your Pass Line bet as Odds. This is crazy and
			I don't even know where you would find these games. Vegas? You're gonna need a serious
			bankroll if you want to keep up with those Odds.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/one-hundred-times-max-odds_640x360.webp"
			mdImg="src/images/{url}/one-hundred-times-max-odds_960x540.webp"
			lgImg="src/images/{url}/one-hundred-times-max-odds_1280x720.webp"
			alt="$5 on the Pass Line with $500 Pass Line Odds"
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
