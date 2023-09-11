<script lang="ts">
	import { calculateComeBet } from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Come Bet in';
	let description: string =
		'Come Bets are mini Pass Line Bets except you play them during the Intermediate Roll. After moving into a Point you can add Odds to the Come bet.';
	let url: string = 'come-bet-basics';

	let phref: string = 'come-bets';
	let prev: string = 'Come Bets';
	let nhref: string = 'come-bet-odds';
	let next: string = 'Come Bet Odds';

	let tblAria: string = 'Come bets Intermediate Roll pay table';
	let tblHeaders: string[] = ['Intermediate Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['While in COME', 'Even money', '7 or 11', '2, 3, 12'],
		['While in point', 'Even money', 'When point rolls', '7']
	];
	let tblPnts: string[] = ['You can only make a Come Bet during the Intermediate Roll'];

	let tblAria2: string = 'Come bets Comeout Roll pay table';
	let tblHeaders2: string[] = ['Comeout Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows2: (string | number)[][] = [['While in point', 'Even money', 'When point rolls', '7']];
	let tblPnts2: string[] = [
		'Come bets are contract bets after they move into a point',
		'Come bets are always working'
	];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn Come Bets",
		  "description": "Come Bets are mini Pass Line Bets except you play them during the Intermediate Roll. After moving into a Point you can add Odds to the Come bet.",
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
		<ContentHeaderOne sectionTitle="Come Bets" title="Betting a Come Bet in Craps" />
		<p class="pb-4">
			You can think of Come Bets as mini Pass Line bets or even traveling Pass Line bets. Win 7-11,
			lose 2-3-12; otherwise, a Point is rolled, it goes into that Point, and just like the <Link
				text="Pass Line"
				href="pass-line-basics"
			/>, you're able to add <Link text="Odds" href="pass-line-odds" /> to it. If the Point rolls again,
			it wins; if the 7 rolls, it loses.
		</p>
		<p class="pb-4">
			Most players shy away from Come Bets. A number has to be rolled twice to be paid, and they can
			get expensive because you should be adding Odds. <Link
				text="Place Bets"
				href="place-bet-basics"
			/> are a good alternative for players who don't want to spend much money. You can pick a number
			and call it a day.
		</p>
		<p class="pb-4">
			Come Bets are good bets from a math point of view because you get maximum value with the Odds,
			so players who are most concerned with getting the most bang for their dollar will play Come
			Bets.
		</p>
		<span class="text-center pb-1">Come Bets - Intermediate Roll</span>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<span class="text-center pb-1">Come Bets - Comeout Roll</span>
		<ContentTble
			tblAria={tblAria2}
			tblHeaders={tblHeaders2}
			tblRows={tblRows2}
			tblPnts={tblPnts2}
		/>
		<div class="pb-4" />
		<ContentImg
			caption=""
			smImg="src/images/{url}/come-bet_640x360.webp"
			mdImg="src/images/{url}/come-bet_960x540.webp"
			lgImg="src/images/{url}/come-bet_1280x720.webp"
			title="Come Bet"
			alt="Overhead view of the come bet area."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet a Come Bet in Craps?" />
		<p class="pb-4">
			Come bets are self service so if you want to make a Come bet then you must place it in the
			COME yourself. Watch your bet. If other players are making Come bets then you need to be able
			know which is yours and make sure the dealer is placing that bet in your spot.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/how-to-bet-a-come-bet_640x360.webp"
			mdImg="src/images/{url}/how-to-bet-a-come-bet_960x540.webp"
			lgImg="src/images/{url}/how-to-bet-a-come-bet_1280x720.webp"
			title="How to Bet a Come Bet"
			alt="Up close view of multiple bets in the COME area."
		/>
		<Divider />
		<ContentHeaderTwo title="Come Bets Work During the Comeout Roll" />
		<p class="pb-4">
			Come bets are always working. After a Come bet is inside a Point it is always betting that the
			Point it's inside will roll before the 7. You can't turn it off or take it back so no matter
			what stage in the game you're at you can count on your Come Bet winning or losing at any given
			moment.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/come-bets-always-work_640x360.webp"
			mdImg="src/images/{url}/come-bets-always-work_960x540.webp"
			lgImg="src/images/{url}/come-bets-always-work_1280x720.webp"
			title="Come Bets Always Work"
			alt="A come bet on the point eight and the puck is off."
		/>
		<Divider />
		<ContentHeaderTwo title="What Are the Two Stages of a Come Bet in Craps?" />
		<p class="pb-4">
			There are two stages to a Come bet. The first is the original bet, which you place in the
			COME. While in the COME the Come bet wins when 7 or 11 is rolled and loses when 2, 3, or 12
			are rolled.
		</p>
		<ContentImg
			caption="Stage One - In the COME"
			smImg="src/images/{url}/stage-one-of-a-come-bet_640x360.webp"
			mdImg="src/images/{url}/stage-one-of-a-come-bet_960x540.webp"
			lgImg="src/images/{url}/stage-one-of-a-come-bet_1280x720.webp"
			title="Stage One - In the COME"
			alt="$10 in the come with the puck on nine."
		/>
		<div class="pb-4" />
		<div class="pb-4" />
		<p class="pb-4">
			The second stage is the Point it moves to, which is determined by the roll of the dice. While
			inside a Point, the Come bet wins when that Point is rolled again and loses if the 7 is
			rolled.
			<Link text="Odds" href="come-bet-odds" /> on your Come bets are not contract so you can take them
			back at any time.
		</p>
		<p class="pb-4">
			Once a Come bet moves inside a Point it becomes a contract bet meaning that once it's in there
			you can't take it back.
		</p>
		<ContentImg
			caption="Stage Two - Inside a Point"
			smImg="src/images/{url}/stage-two-of-a-come-bet_640x360.webp"
			mdImg="src/images/{url}/stage-two-of-a-come-bet_960x540.webp"
			lgImg="src/images/{url}/stage-two-of-a-come-bet_1280x720.webp"
			title="Stage Two - Inside a Point"
			alt="$10 come bet on the point eight."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Is Your Come Bet on the Craps Table?" />
		<p class="pb-4">
			Come bets are placed in the same spot as your <Link
				text="Place Bets"
				href="place-bet-basics"
			/>
			except inside the box so you can tell the difference between the two. A <Link
				text="Buy Bet"
				href="buying-place-bets"
			/> on a Point is actually put in the same spot as a Come bet and the only way to distinguish between
			the two is the fact that a Buy bet has a BUY lammer on top of it to let everyone know it's a Buy
			bet. Without the lammer on top, a Buy bet would look exactly like a Come bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-a-come-bet-inside-point_640x360.webp"
			mdImg="src/images/{url}/placement-of-a-come-bet-inside-point_960x540.webp"
			lgImg="src/images/{url}/placement-of-a-come-bet-inside-point_1280x720.webp"
			title="Placement of a Come Bet Inside a Point"
			alt="Up close view of two place bets and the craps rail. There are eight colored spots that correspond with each other."
		/>
		<Divider />
		<ContentHeaderTwo title="What Does the Come Bet Pay in Craps?" />
		<p class="pb-4">
			A Come bet can win during the Comeout Roll or the Intermediate Roll. No matter what stage of
			the game you're in, a Come bet will always win even money.
		</p>
		<ContentImg
			caption="Even Money in the COME"
			smImg="src/images/{url}/come-bets-even-money-a_640x360.webp"
			mdImg="src/images/{url}/come-bets-even-money-a_960x540.webp"
			lgImg="src/images/{url}/come-bets-even-money-a_1280x720.webp"
			title="Come Bets Win Even Money in the COME"
			alt="$10 paid $10 in the come bet area. There are two sets of orange dice. One reads 2-5 and the other 6-5."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Even Money When Point Rolls"
			smImg="src/images/{url}/come-bets-even-money-b_640x360.webp"
			mdImg="src/images/{url}/come-bets-even-money-b_960x540.webp"
			lgImg="src/images/{url}/come-bets-even-money-b_1280x720.webp"
			title="Come Bets Win Even Money When Point Rolls"
			alt="$25 paid $25 in the come area with an arrow coming out of the point nine. Two orange dice read 5-4."
		/>
		<Divider />
		<CalcContainer aria="Come bet payment calculator"
			><CalcBox description="Check the payment for a Come Bet." title="Come Bet Payment Calculator">
				<CalcInput
					calculate={calculateComeBet}
					id="come_bet_pymnt_calc"
					pId="come_bet_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Enter Come bet amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo title="What Are Some Come Bet Terms Used at the Craps Table?" />
		<p class="pb-4">
			There are certain terms used when setting up, taking down, and paying your Come bets. Know
			what the dealers are doing and saying while servicing your Come bets.
		</p>
		<p class="pb-4">
			When a Point is rolled a Come bet will move into that Point. When that happens the dealer will
			let you know that your Come bet has moved into that Point by saying <Quote
				text="you're on the __point__ for
		__amount__."
			/> They are letting you know they moved your Come bet into the Point and now would be the time
			to add <Link text="Odds" href="come-bet-odds" />. E.g. if you had a $10 Come bet and the 6
			rolled the dealer would say
			<Quote text="you're on the six for $10." />
		</p>
		<ContentImg
			caption="Come Bets - On For..."
			smImg="src/images/{url}/on-for_640x360.webp"
			mdImg="src/images/{url}/on-for_960x540.webp"
			lgImg="src/images/{url}/on-for_1280x720.webp"
			title="Come Bets - On For"
			alt="$10 moving from the come area into the point six. Two orange dice show 1-5."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			When a Come Bet is inside of a Point and it wins the dealer will figure the total payout, move
			the winning Come bet off of the Point, back into the COME, pay it, and say <Quote
				text="you're off the
		__point__for __total payout__."
			/> This lets you know that you Come bet won and it's no longer on that Point. you're winnings will
			sit in the COME and then it's your responsibility to pick them up. E.g. if you had a $15 Come bet
			on the 8 and the 8 rolled the dealer would take your Come bet and it's payment, move it into the
			COME and say <Quote text="you're off the eight for $15." />
		</p>
		<ContentImg
			caption="Come Bets - Off For..."
			smImg="src/images/{url}/off-for_640x360.webp"
			mdImg="src/images/{url}/off-for_960x540.webp"
			lgImg="src/images/{url}/off-for_1280x720.webp"
			title="Come Bets - Off For"
			alt="$10 moving off the point eight, moved into the come, and paid $10. Two orange dice show 5-3."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			When you have a Come bet in a Point and you have a Come bet of the same amount in the COME
			then that Point is rolled, you have what is called <Quote text="Off and on" />. Let's say you
			have $5 on both a Point and another in the COME then that Point rolls. Your Come bet ($5)
			would come off the Point with its winnings (another $5). Your new Come bet (same amount as the
			first) would then move into the Point (same as the first). You end up with the same amount of
			money on the Point and in the Come with the difference being the $5 that was won. The process
			of moving the $5 out of the Point and moving the new $5 in the Point is redundant because the
			same amounts of money end up in the same spots. The only thing that changed are the winnings
			that are now sitting in the COME too. To save the process of moving the same amount of money
			around to the same places we decide to skip it all and just put the payment out there in the
			COME and say <Quote
				text="you're Off and On for
		__the winnings__"
			/> and call it a day. You can now just pick up those winnings and the game goes on.
		</p>
		<ContentImg
			caption="Off and On For..."
			smImg="src/images/{url}/off-and-on-for_640x360.webp"
			mdImg="src/images/{url}/off-and-on-for_960x540.webp"
			lgImg="src/images/{url}/off-and-on-for_1280x720.webp"
			title="Off and On For"
			alt="$10 in the point five and and in the come. $10 payment is also in the come. Two orange dice show 3-2."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			This gets confusing. It means that you have a Come bet inside a Point that has just rolled and
			you also have a bet in the COME of a different amount. You cannot go 'Off and On For...'
			because your first Come bet and your second Come bet are not the same amount. The flat bets
			are different. The dealer takes your first winning Come bet off the Point, and says <Quote
				text="you're off for
		__however much you won__"
			/>, brings the new Come bet in and says <Quote
				text="you're on for __the new Come bet
		amount__."
			/> E.g. you have a $5 Come Bet on the 8 and $15 in the COME. When the 8 rolls the dealer will take
			your $5 off the 8 with it's payment and say <Quote text="you're off the 8 for $5…" /> and bring
			your new $15 Come bet on and say <Quote text="… and on for $15." />
		</p>
		<ContentImg
			caption="Off For... On For..."
			smImg="src/images/{url}/off-for-on-for_640x360.webp"
			mdImg="src/images/{url}/off-for-on-for_960x540.webp"
			lgImg="src/images/{url}/off-for-on-for_1280x720.webp"
			title="Off For - On For"
			alt="Split image. Left side show $5 on point eight and $15 in come. Right side shows $15 on point eight and $5 paid $5 in the come. Two orange dice show 5-3."
		/>
		<Divider />
		<ContentHeaderTwo title="How Can You Bet a Come Bet for the Dealers?" />
		<p class="pb-4">
			Come bets for dealers don't have to be in any specific denomination because you can't bet an
			improper amount in the Come. Just like a players' bet, a Come bet for the dealers goes right
			into the next Point that rolls. The dealers bet is placed in the middle of the Point to
			signify it belongs to the dealers and gets paid even money if the Point is rolled again.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-come-bet_640x360.webp"
			mdImg="src/images/{url}/dealer-come-bet_960x540.webp"
			lgImg="src/images/{url}/dealer-come-bet_1280x720.webp"
			title="Dealer Come Bet"
			alt="$1 in the middle of the point four."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
