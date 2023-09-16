<script lang="ts">
	import {
		calculatePlaceSixEight,
		calculatePlaceFiveNine,
		calculatePlaceFourTen
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
	import ContentUlb from '../../lib/clients/components/contentPages/Content-ul-b.svelte';

	let title: string = 'Betting Place Bets in Craps';
	let description: string =
		'Place Bets are bet during the Intermediate Roll. They get paid differently depending on which Point you Place. There are certain terms used when betting Place bets.';
	let url: string = 'place-bet-basics';

	let phref: string = 'place-bets';
	let prev: string = 'Place Bets';
	let nhref: string = 'buying-place-bets';
	let next: string = 'Buying Place Bets';

	let tblAria: string = 'Place Bet Payment Table';
	let tblHeaders: string[] = ['Point', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['6 or 8', '7:6', 'When point rolls', '7'],
		['5 or 9', '7:5', 'When point rolls', '7'],
		['4 or 10', '9:5', 'When point rolls', '7']
	];
	let tblPnts: string[] = [
		'Place Bets are not contract bets',
		'Place Bets do not work during the Comeout roll',
		'You can ask to have your Place Bets turned ON during the Comeout Roll'
	];

	let liBs = [
		{
			title: "Please don't put your money in the following places: ",
			subTitle: [
				"Next to or behind a dealers' working stacks - ",
				'In the Place Bet boxes - ',
				'In the Field - ',
				"In the Don't Come - "
			],
			items: [
				'This is no good because money falls off the working stacks and could accidentally be picked up by the dealer and put away.',
				"Other people's money is in these boxes, so if you throw money in there, you will only mix that money with yours, causing some issues.",
				"Players bet many different amounts in the Field so it wouldn't be hard for the dealer to mistaken it as a normal Field Bet.",
				'This spot is reserved for DC Bets and the Puck, so use the COME.'
			]
		}
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
		  "name": "Learn Place Bets",
		  "description": "Place Bets are bet during the Intermediate Roll. They get paid differently depending on which Point you Place. There are certain terms used when betting Place bets.",
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
		<ContentHeaderOne sectionTitle="Place Bets" title="Betting Place Bets in Craps" />
		<p class="pb-4">
			Place Bets take a minute to learn but a lifetime to master. They're straightforward. You bet
			them when the Puck is ON, and you get paid every time that number rolls.
		</p>
		<p class="pb-4">
			The cool thing about Place Bets is they can win over and over again really quickly. You could
			also take one bet and turn it into a dozen bets in a matter of minutes. You could roll the
			dice for an hour, hitting only a few points in that time. The rest of that time... Place Bets.
		</p>
		<p class="pb-4">
			There are six different Place Bets: 4, 5, 6, 8, 9, and 10. A Place Bet wins if it rolls before
			the 7 and loses if the 7 rolls first. So you know, you're allowed to add and remove from your
			Place Bets as much money as you want at any time.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/place-bets_640x360.webp"
			mdImg="src/images/{url}/place-bets_960x540.webp"
			lgImg="src/images/{url}/place-bets_1280x720.webp"
			title="Place Bets"
			alt="Overhead view of the right side of the craps table layout. There are no cheques on the table. You can see all six place bets boxes."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Place Bets in a Craps Game?" />
		<p class="pb-4">
			After the Point is established, it's time to make some Place bets. Put your money in the COME,
			then tell the dealers which bets you'd like to make. Make sure the dealer repeats your bet. If
			they don't, repeat it until they do because if you place a bet in the COME without saying
			anything to the dealers, it's considered a <Link text="Come Bet" href="come-bet-basics" />.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/how-to-bet-place-bets_640x360.webp"
			mdImg="src/images/{url}/how-to-bet-place-bets_960x540.webp"
			lgImg="src/images/{url}/how-to-bet-place-bets_1280x720.webp"
			title="How to Bet Place Bets"
			alt="Multiple sets of bets sitting in the come. The puck is on the point nine."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Not to Put Your Money on a Craps Table" />
		<p class="pb-4">
			Some people think it's easier to throw cheques at the dealer than to place them in the COME.
		</p>
		<ContentUlb {liBs} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/not-behind-boxes_640x360.webp"
			mdImg="src/images/{url}/not-behind-boxes_960x540.webp"
			lgImg="src/images/{url}/not-behind-boxes_1280x720.webp"
			title="Where Not to Bet"
			alt="A bunch of splashed cheques behind the boxes with a red 'do not' circle around them and a red x. There is another pile of cheques in the COME with a green cirlce around them and a green checkmark."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Are Your Place Bets on the Craps Table?" />
		<p class="pb-4">
			Understanding where your Bets are on the table will help you enjoy Craps a lot more. It's like
			a large horseshoe on each side of the table. A spot in the rail corresponds with a spot on the
			layout. Each player has a spot for their Place bets, so every dealer knows which bets belong
			to whom. There are four spots in front and four spots behind it to represent eight possible
			players on each side.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-a-place-bet_640x360.webp"
			mdImg="src/images/{url}/placement-of-a-place-bet_960x540.webp"
			lgImg="src/images/{url}/placement-of-a-place-bet_1280x720.webp"
			title="Placement of a Place Bet"
			alt="Overhead view of craps table with the numbers one through eighteen evenly distributed on the rail. The six and eight on the layout are zoomed in on and the numbers one through eighteen are evenly distributed on the six and eight."
		/>
		<Divider />
		<ContentHeaderTwo title="What Does a Place Bet Pay in Craps?" />
		<p class="pb-4">
			Like many other bets on the table, you must bet Place bets in certain increments, and they pay
			differently depending on which number you're betting.
		</p>
		<ContentHeaderThree title="Place Bets Pay 7:6 on the 6 and 8" />
		<p class="pb-4">
			Every $6 you bet wins $7 on the 6 or 8, so you must bet in increments of $6 such as $12, $18,
			or $30.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/place-pay-6-8_640x360.webp"
			mdImg="src/images/{url}/place-pay-6-8_960x540.webp"
			lgImg="src/images/{url}/place-pay-6-8_1280x720.webp"
			title="Place Payment on the 6 or 8"
			alt="$6 place bet on the six with a $7 payment sitting in the COME."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Place Bets Pay 7:5 on the 5 and 9" />
		<p class="pb-4">Every $5 you bet wins $7 on the 5 or 9, so any increment of $5 is good.</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/place-pay-5-9_640x360.webp"
			mdImg="src/images/{url}/place-pay-5-9_960x540.webp"
			lgImg="src/images/{url}/place-pay-5-9_1280x720.webp"
			title="Place Payment on the 5 or 9"
			alt=""
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Place Bets Pay 9:5 on the 4 and 10" />
		<p class="pb-4">Every $5 you bet wins $9 on the 4 or 10, so increments of $5 are good.</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/place-pay-4-10_640x360.webp"
			mdImg="src/images/{url}/place-pay-4-10_960x540.webp"
			lgImg="src/images/{url}/place-pay-4-10_1280x720.webp"
			title="Place Payment on the 4 or 10"
			alt="$5 place bet on the five with a $7 payment sitting in the COME."
		/>
		<Divider />
		<CalcContainer aria="Place bet payment calculators"
			><CalcBox
				description="Check the payment for the six different Place bets."
				title="Place Bet Payment Calculators"
			>
				<CalcInput
					calculate={calculatePlaceSixEight}
					id="place_six_eight_pymnt_calc"
					pId="place_six_eight_calc_result"
					placeholder="$6 minimum"
					step={6}
					title="Amount to Place on the 6 or 8:"
				/>
				<CalcInput
					id="place_five_nine_pymnt_calc"
					calculate={calculatePlaceFiveNine}
					pId="place_five_nine_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Amount to Place on the 5 or 9:"
				/>
				<CalcInput
					calculate={calculatePlaceFourTen}
					id="place_four_ten_pymnt_calc"
					pId="place_four_ten_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Amount to Place on the 4 or 10:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo title="What Are Proper Terms for Betting Place Bets?" />
		<p class="pb-4">
			<Quote text="Place" /> - When you bet a Place Bet, you tell the base dealer to <Quote
				text="place"
			/> that number. For example, if you want to bet $10 on the 5, you drop $10 on the table and say,
			<Quote
				text="I would like to
		place the 5 for ten dollars."
			/> The dealer should repeat <Quote text="Ten dollar 5." />
		</p>
		<p class="pb-4">
			<Quote text="Each" /> - The term <Quote text="each" /> is used when you bet the same amount on
			two numbers. Only use it when you're betting two Place bets that could be the same amount. 6 and
			8 are bet in $6 increments. If you wanted $6 on both the 6 and 8, you would say, <Quote
				text="Six each six and eight.
		"
			/>The 4, 5, 9, and 10 are all bet in $5 increments. If you wanted $10 on both the 4 and 10,
			you would tell the dealer, <Quote text="Ten each four and ten." />
		</p>
		<p class="pb-4">
			<Quote text="Buy" /> - When you use the term <Quote text="buy" />, you are betting a Place bet
			that is being paid True Odds. A commission is involved and is usually paid when you make the
			bet, although some casinos will charge the commission only after the bet has won.
		</p>
		<p class="pb-4">
			<Quote text="Across" />, <Quote text="Inside" />, <Quote text="Outside" /> - These terms are used
			when you're betting three or more numbers at the same time. When using these terms, you do not
			include the point. These are known as <Link text="Spread Bets" href="spread-bets" />.
		</p>
		<p class="pb-4">
			<Quote text="... Including the Point" /> - This is used when you are betting a Place bet that is
			also the Point. People who use this usually won't be betting the <Link
				text="Pass Line"
				href="pass-line-basics"
			/>, which is why they are Including the Point as part of their Place bets. These are also
			Spread Bets.
		</p>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet a Place Bet for the Dealers in a Craps Game?" />
		<p class="pb-4">
			Dealer Place Bets encouraged! The dealer will put that bet in the middle of the number
			representing that it is a bet for the dealer. The amount that gets paid differs from point to
			point and from casino to casino but I move the decimal over and pay it as a place bet.
		</p>
		<ContentHeaderThree title="Dealer Place Bets on 6 & 8" />
		<p class="pb-4">
			Let's say you have $3 on the 6 for the dealers, I would pay it like a $30 Place Bet which gets
			$36 or $3.60 for the dealers. I round up and drop $4 plus the $3 bet for $7 and down.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-place-bet-6-8_640x360.webp"
			mdImg="src/images/{url}/dealer-place-bet-6-8_960x540.webp"
			lgImg="src/images/{url}/dealer-place-bet-6-8_1280x720.webp"
			title="Dealer Place Bet on the 8"
			alt="$6 sitting in the middle of the point eight."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Dealer Place Bets on 5 & 9" />
		<p class="pb-4">
			If you bet $4 for the dealers on the 5 or 9 then I would consider that a $40 Place Bet which
			pays $56 or $6 for the dealers. I round up and drop $6 plus $4 for $10 and down. Thank you!
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-place-bet-5-9_640x360.webp"
			mdImg="src/images/{url}/dealer-place-bet-5-9_960x540.webp"
			lgImg="src/images/{url}/dealer-place-bet-5-9_1280x720.webp"
			title="Dealer Place Bet on the 9"
			alt="$2 in the middle of the point nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Dealer Place Bets on 4 & 10" />
		<p class="pb-4">
			$1 bet on a 4 or 10 for the dealers would be paid like a $10 Place Bet which gets $18 or $1.80
			for the dealers. Round that up to $2 plus the $1 and the dealers drop $3 and down!
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-place-bet-4-10_640x360.webp"
			mdImg="src/images/{url}/dealer-place-bet-4-10_960x540.webp"
			lgImg="src/images/{url}/dealer-place-bet-4-10_1280x720.webp"
			title="Dealer Place Bet on the 10"
			alt="$4 in the middle of the point ten."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
