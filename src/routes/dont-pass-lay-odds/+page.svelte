<script lang="ts">
	import {
		calculateSixEightLayOdds,
		calculateFiveNineLayOdds,
		calculateFourTenLayOdds,
		calculateMaxLay
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

	let title: string = "Betting Don't Pass Lay Odds in Craps";
	let description: string =
		'Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add.';
	let url: string = 'dont-pass-lay-odds';

	let phref: string = 'dont-pass';
	let prev: string = "Don't Pass";
	let nhref: string = 'dont-come';
	let next: string = "Don't Come";
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
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn Don't Pass Lay Odds",
		  "description": "Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add.",
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
		<ContentHeaderOne
			sectionTitle="The Don't Side"
			title="Betting Don't Pass Lay Odds in Craps"
			{pageData}
		/>
		<p class="pb-4">
			Just like the Pass Line, after the Point has been established, you are allowed to make an Odds
			bet but there is a big difference between the two. On the Pass Line you <Quote
				text="Take Odds"
			/>, where they win more. On the Don't Pass you <Quote text="Lay Odds" /> and bet more to win less
			because you're more likely to win.
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
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Don't Pass Lay Odds in Craps?" />
		<p class="pb-4">
			Lay Odds on the Don't Pass go right next to your <Link text="Don't Pass" href="dont-pass" /> bet
			on the side that's closest to the <Link text="base dealer" href="the-crew" />. They aren't
			stacked straight up like <Link text="Odds on the Pass line" href="pass-line-odds" />. They are
			heeled off which make it look like they are at an angle and you should heel them off in the
			direction towards the base dealer.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_640x360.webp"
			mdImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_960x540.webp"
			lgImg="src/images/{url}/how-to-bet-dont-pass-lay-odds_1280x720.webp"
			title="How to Bet Don't Pass Lay Odds"
			alt="Several Don't Pass Bets with Lay Odds Heeled in the direction of the base dealer."
		/>
		<Divider />
		<ContentHeaderTwo title="What Do Lay Odds on the Don't Pass Pay?" />
		<p class="pb-4">
			Lay Odds on the Don't Pass pay differently depending on what the Point is. The Point also
			determines the dollar amount you should be Laying for that Point. You Lay the 6 and 8 in
			multiples of 6, the 5 and 9 in multiples of 3, and the 4 and 10 in multiples of 2. These
			multiples were created based on the number of ways the bet can lose compared to the number of
			way they can win.
		</p>
		<ContentHeaderThree title="Pays 5:6 on the 6 and 8" />
		<p class="pb-4">
			There are 5 ways to lose and 6 ways to win when the Point is 6 or 8. It's written 5:6 and read
			<Quote text="5 to 6" /> or you win <Quote text="$5 for every $6" />. This means that you can
			only make the Lay Odds bet in multiples of six.
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
		<div class="pb-4" />
		<ContentHeaderThree title="Pays 2:3 on the 5 and 9" />
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
		<div class="pb-4" />
		<ContentHeaderThree title="Pays 1:2 on the 4 and 10" />
		<p class="pb-4">
			There are 3 ways to lose and 6 ways to win on the 4 and 10 which is written 3:6 then reduced
			to 1:2. It's spoken as <Quote text="1 to 2" /> and when you think about getting paid for your Lay
			Odds, its <Quote text="$1 for every $2" />.
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
		<Divider />
		<CalcContainer aria="Don't pass lay odds payment calculators"
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
		<ContentHeaderTwo title="What Are Max Lay Odds on the Don't Pass?" />
		<p class="pb-4">
			No matter what Point you are Laying Odds on, the maximum allowed is always going to be 6 times
			the Don't Pass bet. The casino has no advantage with this bet so there must be a limit and
			it's a flat rate across all the numbers.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/max-lay-odds-on-the-dont-pass_640x360.webp"
			mdImg="src/images/{url}/max-lay-odds-on-the-dont-pass_960x540.webp"
			lgImg="src/images/{url}/max-lay-odds-on-the-dont-pass_1280x720.webp"
			title="Max Lay odds on the Don't Pass"
			alt="$10 on the Don't Pass with $60 Lay Odds."
		/>
		<Divider />
		<CalcContainer aria="Don't pass lay odds payment calculator"
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
		<ContentHeaderTwo title="How Do You Bet Don't Pass Lay Odds for the Dealers?" />
		<p class="pb-4">
			You can add Lay Odds to a dealers Don't Pass bet in the same way you add Lay Odds to your own
			Don't Pass bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/lay-odds-for-the-dealers_640x360.webp"
			mdImg="src/images/{url}/lay-odds-for-the-dealers_960x540.webp"
			lgImg="src/images/{url}/lay-odds-for-the-dealers_1280x720.webp"
			title="Dealer Lay Odds"
			alt="$1 with $6 Lay Odds on the Don't Pass"
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
