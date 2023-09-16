<script lang="ts">
	import {
		calculateSixEightDcLayOdds,
		calculateFiveNineDcLayOdds,
		calculateFourTenDcLayOdds,
		calculateMaxDcLay
	} from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
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
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn Don't Come Lay Odds",
		  "description": "Don't Come Lay Odds get paid True Odds so the casinos have no advantage. You want to take advantage of this bet.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="The Don't Side" title="Betting Don't Come Lay Odds in Craps" />
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
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Don't Come Lay Odds in Craps?" />
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
		<Divider />
		<ContentHeaderTwo title="Where Are Your Don't Come Lay Odds at the Craps Table?" />
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
		<Divider />
		<ContentHeaderTwo title="What Do the Lay Odds Pay for a Don't Come Bet in Craps?" />
		<p class="pb-4">
			Lay Odds for a Don't Come Bet work the same way as Lay Odds for the Don't Pass. They pay
			differently depending on the Point and you must make them in certain increments. When your
			Don't Come and its Lay Odds win, the dealer will pay each bet and then stack all the money
			into one stack, move it through the DC and hand it off to you.
		</p>
		<ContentHeaderThree title="Lay Odds Pay 5:6 on the 6 and 8" />
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
		<div class="pb-4" />
		<ContentHeaderThree title="Lay Odds Pay 2:3 on the 5 and 9" />
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
		<div class="pb-4" />
		<ContentHeaderThree title="Lay Odds Pay 1:2 on the 4 and 10" />
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
		<Divider />
		<CalcContainer aria="Don't come lay odds payment calculators"
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
		<Divider />
		<ContentHeaderTwo title="What Are the Max Lay Odds for a Don't Come Bet?" />
		<p class="pb-4">
			Since the casino has no advantage on this bet they put a limit on it. The maximum Lay Odds you
			can add to a Don't Come bet are the same as for the Don't Pass. No matter the number, the
			maximum Lay Odds you can add are six times the Don't Come bet.
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
		<CalcContainer aria="Check max don't come lay odds"
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
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Don't Come Lay Odds for the Dealers?" />
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
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
