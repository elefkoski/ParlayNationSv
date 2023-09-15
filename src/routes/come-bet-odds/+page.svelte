<script lang="ts">
	import {
		calculateSixEightComeOdds,
		calculateFiveNineComeOdds,
		calculateFourTenComeOdds
	} from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Odds on a Come Bet in Craps';
	let description: string =
		'Odds for a Come bet get Paid True Odds so there is a maximum amount of money you can add to them. Odds pay different depending on the Point they are on.';
	let url: string = 'come-bet-odds';

	let phref: string = 'come-bet-basics';
	let prev: string = 'Come Bet Basics';
	let nhref: string = 'coming-down-with-odds';
	let next: string = 'Coming Down w/Odds';

	let tblAria: string = 'Come Bet Odds Payment Table';
	let tblHeaders: string[] = ['Point', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '6:5', 'When point rolls', '7'],
		['5 or 9', '3:2', 'When point rolls', '7'],
		['4 or 10', '2:1', 'When point rolls', '7']
	];
	let tblPnts: string[] = [
		'Odds are not contract bets',
		'You can add Odds to your Come Bet at any time',
		'Odds are OFF during the Comeout Roll'
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
		  "name": "Learn Come Bet Odds",
		  "description": "Odds for a Come bet get Paid True Odds so there is a maximum amount of money you can add to them. Odds pay different depending on the Point they are on.",
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
		<ContentHeaderOne sectionTitle="Come Bets" title="Betting Odds for a Come Bet" />
		<p class="pb-4">
			Odds for a Come bet work the same way as the <Link
				text="Odds for a Pass Line"
				href="pass-line-odds"
			/> bet. Just like the Come bet, Odds are also betting the Point will be rolled before a 7. If the
			Point is rolled, the Come bet and its' Odds win. If 7 rolls, your Come bet and its Odds lose. Odds
			can be less than table minimum.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/come-bet-odds_1280x720.webp"
			title="Come Bet Odds"
			alt="$10 with $10 odds on the point eight."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Odds for a Come Bet in Craps?" />
		<p class="pb-4">
			When you want to to add Odds to your <Link text="Come Bet" href="come-bet-basics" /> put your money
			in the COME and tell the dealer those are Odds for your Come bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/how-to-bet-come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/how-to-bet-come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/how-to-bet-come-bet-odds_1280x720.webp"
			title="How to Bet Come Bet odds"
			alt="$10 in the Come and $10 on the point six."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Do the Odds Go for Your Come Bet?" />
		<p class="pb-4">
			The Odds for a Come bet are placed on top of the Come bet but are offset. They are offset so
			you could distinguish the Come bet from the Odds.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/placement-of-come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/placement-of-come-bet-odds_1280x720.webp"
			title="Placement of Come Bet Odds"
			alt="Up close view of $15 offset and sitting on top of another $10 sitting inside the point eight."
		/>
		<Divider />
		<ContentHeaderTwo title="Odds Are OFF During the Comeout Roll" />
		<p class="pb-4">
			During the <Link text="Comeout Roll" href="the-stages" /> the Odds on all Come Bets do not work,
			although the Come bet itself is always working. If a seven is rolled during the Comeout Roll you
			will lose all your Come Bets and all the Odds on those Come Bets will be returned to you. If the
			next Point that is rolled is one that you have a Come bet on then the Come Bet itself will get
			paid even money and its Odds will just be given back.
		</p>
		<p class="pb-4">
			You can turn your Odds ON during the Comeout Roll and if the seven rolled you would lose both
			the Come Bet and its Odds. If that Point rolled during the Comeout Roll then you would get
			paid for both the Come Bet and its' Odds.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/odds-are-off-during-the-comeout-roll_640x360.webp"
			mdImg="src/images/{url}/odds-are-off-during-the-comeout-roll_960x540.webp"
			lgImg="src/images/{url}/odds-are-off-during-the-comeout-roll_1280x720.webp"
			title="Odds Are Off During the Comeout Roll"
			alt="Puck is off and in the don't come. There are two come bets with highlighted odds on the the points four and five."
		/>
		<Divider />
		<ContentHeaderTwo title="What Do Your Odds Pay on a Come Bet in Craps?" />
		<p class="pb-4">
			Odds on a Come bet work the same way as <Link text="Odds" href="pass-line-odds" /> on the <Link
				text="Pass Line"
				href="pass-line-basics"
			/>. You bet them in the same increments and they pay the same amounts. When Come bet Odds win
			the dealer will add the payout for the Come bet + the payout for its Odds to get one total.
			The total is what you are given because they both won at the same time.
		</p>
		<ContentHeaderThree title="Pays 6:5 on the 6 and 8" />
		<p class="pb-4">
			Odds on the 6 or 8 must be bet in increments of $5. Every $5 you bet as Odds for a Come Bet on
			the 6 or 8 gets paid $6. Otherwise known as 6:5 which is read <Quote text="6 to 5" /> or you can
			think of it as you win <Quote text="$6 for every $5" />. When the Point is rolled, the dealer
			will add together the payment of the Come Bet and it's Odds and pay you the total.
		</p>
		<ContentImg
			caption="Come Bet Odds - 6 & 8"
			smImg="src/images/{url}/6-8-come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/6-8-come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/6-8-come-bet-odds_1280x720.webp"
			title="Come Bet Odds - 6 & 8"
			alt="Four different come bets with odds on the point eight."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Come Bet Payments - 6 & 8"
			smImg="src/images/{url}/6-8-come-bet-payment_640x360.webp"
			mdImg="src/images/{url}/6-8-come-bet-payment_960x540.webp"
			lgImg="src/images/{url}/6-8-come-bet-payment_1280x720.webp"
			title="Come Bet Payment - 6 & 8"
			alt="Split image. Left has $10 come with $10 odds on point six. Right has $10 w/$10 odds in the come and a $22 payment. Two orange dice show 1-5."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Pays 3:2 on the 5 and 9" />
		<p class="pb-4">
			You must add an even number as Odds on the 5 and 9. Every $2 you bet as Odds gets paid $3.
			This is known as 3:2 which is read <Quote text="3 to 2" /> or you win <Quote
				text="$3 for every $2"
			/>. You could also think of this as 1 and ½ times your bet or a Blackjack. When the Point is
			rolled, the dealer will add together the payment of the Come Bet and it's Odds and pay you the
			total.
		</p>
		<p class="pb-4">
			When you bet an odd number such as $5 Odds, the bet will get paid 1 and ½ times the bet or
			$7.50. There are no $0.50 or $2.50 cheques on a Craps table so your bet will be rounded down
			and you will be paid $7. The casino makes $0.50 off your improper bet. This is giving money to
			the casino and not recommended.
		</p>
		<ContentImg
			caption="Come Bet Odds - 5 & 9"
			smImg="src/images/{url}/5-9-come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/5-9-come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/5-9-come-bet-odds_1280x720.webp"
			title="Come Bet Odds - 5 & 9"
			alt="Four different come bets with odds on the point nine."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Come Bet Payment - 5 & 9"
			smImg="src/images/{url}/5-9-come-bet-payment_640x360.webp"
			mdImg="src/images/{url}/5-9-come-bet-payment_960x540.webp"
			lgImg="src/images/{url}/5-9-come-bet-payment_1280x720.webp"
			title="Come Bet Payment - 5 & 9"
			alt="Split image. Left has $10 come w/$16 odds. Right has $10 w/$16 odds in the come and a $34 payment. Two orange dice show 3-2."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Pays 2:1 on the 4 and 10" />
		<p class="pb-4">
			Odds on the 4 and 10 can be any amount. Regardless of what you bet, the amount will win double
			or 2:1 which is read <Quote text="2 to 1" /> or you can think of it as <Quote
				text="$2 for every $1"
			/>. When the Point is rolled, the dealer will add together the payment of the Come Bet and
			it's Odds and pay you the total.
		</p>
		<ContentImg
			caption="Come Bet Odds - 4 & 10"
			smImg="src/images/{url}/4-10-come-bet-odds_640x360.webp"
			mdImg="src/images/{url}/4-10-come-bet-odds_960x540.webp"
			lgImg="src/images/{url}/4-10-come-bet-odds_1280x720.webp"
			title="Come Bet Odds - 4 & 10"
			alt="Four different come bets with odds on the point 10."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Come Bet Payment - 4 & 10"
			smImg="src/images/{url}/4-10-come-bet-payment_640x360.webp"
			mdImg="src/images/{url}/4-10-come-bet-payment_960x540.webp"
			lgImg="src/images/{url}/4-10-come-bet-payment_1280x720.webp"
			title="Come Bet Payment - 4 & 10"
			alt="Split image. Left $10 with $15 odds. Right has $10 w/$15 odds in the come and a $40 payment. Two orange dice show 2-2."
		/>
		<Divider />
		<CalcContainer aria="Come bet odds payment calculator"
			><CalcBox
				description="Check the payment for Odds on a Come bet."
				title="Come Bet Odds Payment Calculators"
			>
				<CalcInput
					calculate={calculateSixEightComeOdds}
					id="six_eight_come_odds_pymnt_calc"
					pId="six_eight_come_odds_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Enter Odds amount for Point 6 or 8:"
				/>
				<CalcInput
					calculate={calculateFiveNineComeOdds}
					id="five_nine_come_odds_pymnt_calc"
					pId="five_nine_come_odds_calc_result"
					placeholder="$2 minimum"
					step={2}
					title="Enter Odds amount for Point 5 or 9:"
				/>
				<CalcInput
					calculate={calculateFourTenComeOdds}
					id="four_ten_come_odds_pymnt_calc"
					pId="four_ten_come_odds_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Odds amount for Point 4 or 10:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo title="What Are 3x 4x 5x Odds on a Come Bet in Craps?" />
		<p class="pb-4">
			Odds on a Come bet have no house advantage so there is a limit on the amount you can add. 3x
			4x 5x Odds means the maximm Odds you can add to a Come bet is 3x the Come bet on the 4 or 10,
			4x the Come bet on the 5 or 9, and 5x the Come bet on the 6 and 8.
		</p>
		<ContentHeaderThree title="3x on the 4 and 10" />
		<p class="pb-4">
			Max Odds on the 4 and 10 is 3 times the Come bet. A $25 Come bet on the 4 and 10 would be able
			to add up to $75. The payment would still be 7 times the Come bet ($25) or $175. The $75 odds
			would be paid 2:1 or $150 and the $25 Come bet would win even money for a total payment of
			$175.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/max-come-bet-odds-4-10_640x360.webp"
			mdImg="src/images/{url}/max-come-bet-odds-4-10_960x540.webp"
			lgImg="src/images/{url}/max-come-bet-odds-4-10_1280x720.webp"
			title="Max Come Bet Odds 4 & 10"
			alt=""
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="4x on the 5 & 9" />
		<p class="pb-4">
			You can bet up to 4 times you Come bet when the Point is 5 or 9. A $15 Come bet would be able
			to add up to $60 as Odds and the payment would be 7x the Come bet ($15) or $105. The $60 Odds
			would pay $90 and the come bet would win even money, $15, for a payment of $105.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/max-come-bet-odds-5-9_640x360.webp"
			mdImg="src/images/{url}/max-come-bet-odds-5-9_960x540.webp"
			lgImg="src/images/{url}/max-come-bet-odds-5-9_1280x720.webp"
			title="Max Come Bet Odds 5 & 9"
			alt="$15 come bet with $60 odds on point nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="5x on the 6 & 8" />
		<p class="pb-4">
			When the Point is 6 or 8 you're able to bet up to 5 times your Come bet. If you had a $10 Come
			bet you would be able to bet $50. The payment would be 7 times the Come bet ($10) or $70. The
			$50 Odds would pay $60 and the Come bet would win even money, $10, for a total of $70.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/max-come-bet-odds-6-and-8_640x360.webp"
			mdImg="src/images/{url}/max-come-bet-odds-6-and-8_960x540.webp"
			lgImg="src/images/{url}/max-come-bet-odds-6-and-8_1280x720.webp"
			title="Max Come Bet Odds 6 & 8"
			alt="$10 come bet with $50 odds on the point 8"
		/>
		<Divider />
		<ContentHeaderTwo title="How Can You Bet a Come Bet with Odds for the Dealers?" />
		<p class="pb-4">
			If you make a Come bet for the dealers you can also add Odds to it. Just like a players Come
			bet, there is a maximum amount of Odds you can add to a dealers Come bet that is determined by
			the casino.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-come-bet-with-odds_640x360.webp"
			mdImg="src/images/{url}/dealer-come-bet-with-odds_960x540.webp"
			lgImg="src/images/{url}/dealer-come-bet-with-odds_1280x720.webp"
			title="Dealer Come Bet with Odds"
			alt="$1 with $3 in the middle of the point 10."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
