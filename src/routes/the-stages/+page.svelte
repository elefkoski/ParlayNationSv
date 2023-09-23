<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/ContentMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '../../lib/clients/components/Link.svelte';
	import Quote from '../../lib/clients/components/Quote.svelte';

	let title: string = 'The Stages of a Craps Game';
	let description: string =
		"There are two stages to Craps: the Comeout Roll and the Intermediate Roll. Some bets work during the Comeout Roll while some don't. Certain bets can only be made during certain stages of the game.";
	let url: string = 'the-stages';

	let phref = 'the-dice';
	let prev = 'The Dice';
	let nhref = 'verbal-betting';
	let next = 'Verbal Betting';

	let pageLinks: PageMenu[] = [
		{
			title: 'The Comeout Roll',
			href: '#comeoutRoll',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Intermediate Roll',
			href: '#intermediateRoll',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Buying In',
			href: '#buyingIn',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Coring Up',
			href: '#colorUp',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Number Seven',
			href: '#numberSeven',
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
		  "name": "The Stages of a Craps Game",
		  "description": "There are two stages to Craps: the Comeout Roll and the Intermediate Roll. Some bets work during the Comeout Roll while some don't. Certain bets can only be made during certain stages of the game.",
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
		<ContentHeaderOne sectionTitle="Craps Basics" title="The Stages of a Craps Game" {pageData} />
		<p class="pb-4">
			One of the biggest problems new Craps players understand is that the game is played in two
			stages. Sometimes a seven will cause you to win while other times you'll lose. Sometimes they
			take your money when 2 rolls. Sometimes they don't. Other times you may think you won a bet...
			but you didn't. It was the wrong stage of the game. Understanding the two stages of the game
			is key to understanding Craps.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/{url}_640x360.webp"
			mdImg="src/images/{url}/{url}_960x540.webp"
			lgImg="src/images/{url}/{url}_1280x720.webp"
			title="The Stages of a Craps Game"
			alt="Overhead view of the Craps table with one Puck ON and another Puck OFF representing the two stages of a Craps game."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="comeoutRoll"
			title="The Comeout Roll Is the First Stage of a Craps Game"
		/>
		<p class="pb-4">
			The Comeout Roll, when <Link text="the puck" href="the-craps-table" /> is OFF, is the beginning
			of the Craps game, when the shooter is trying to determine a Point for the rest of the table. Before
			they try for a point, though, the dealers have to get everyone situated. Sort of the calm before
			the storm. This is when new players should be buying in, and people who are leaving should be coloring
			up. It's the best time to be checking your phone if you have to, making a strategy for when the
			Point is established, or mentioning the number 7.
		</p>
		<p class="pb-4">
			After buy-ins and color-ups, it's time to start betting. If you want to bet with the shooter,
			then get on the <Link text="Pass Line" href="pass-line-basics" />. If you want to bet against
			the shooter, get on the <Link text="Don't Pass" href="dont-pass" />. The Comeout Roll is also
			when most people bet their Proposition Bets like the <Link text="World" href="world" />, the <Link
				text="Any
		Craps"
				href="any-craps"
			/>, or the <Link text="Yo" href="straight-up" />.
		</p>
		<p class="pb-4">
			Also, not all bets on the Craps table are 'working' or 'ON' during the Comeout Roll. When a
			bet is 'working,' it CAN win or lose on the next roll. When a bet is 'not working' or 'OFF',
			it CAN NOT win or lose on the next roll. The bets that are 'not working' or 'OFF' during the
			Comeout Roll are <Link text="Place Bets" href="place-bet-basics" />, <Link
				text="Come Bet Odds"
				href="come-bet-odds"
			/> and the <Link text="Hardways" href="the-hardways" />. You can always say to the dealer <Quote
				text="Turn
		my ____ bets on"
			/> or say you want them <Quote text="working." /> The dealer will put an ON lammer on top of one
			of your bets, and you are now ready to get paid if your bet hits.
		</p>
		<p class="pb-4">
			One last thing to consider is that there are bets that you cannot bet during the Comeout Roll.
			<Link text="Pass Line Odds" href="pass-line-odds" />, <Link
				text="Don't Pass Lay Odds"
				href="dont-pass-lay-odds"
			/>, <Link text="Come Bets" href="come-bet-basics" />, and the <Link
				text="Don't Come"
				href="dont-come"
			/> are all reserved for the next stage, the Intermediate Roll.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-comeout-roll_640x360.webp"
			mdImg="src/images/{url}/the-comeout-roll_960x540.webp"
			lgImg="src/images/{url}/the-comeout-roll_1280x720.webp"
			title="The Comeout Roll"
			alt="The Puck in the Don't Come in the Off position with bets on the Pass Line and the Don't Pass."
		/>
		<Divider />
		<ContentHeaderTwo
			id="intermediateRoll"
			title="The Intermediate Roll Is the Second Stage of a Craps Game"
		/>
		<p class="pb-4">
			The Intermediate Roll is when the Puck turns ON, and a Point has been established. This is
			when the shooter tries to make their Point so everyone at the Craps table can win. You start
			to see mountains of cheques on the layout, and your head explodes, wondering how the dealers
			keep track of it all.
		</p>
		<p class="pb-4">
			The Intermediate Roll is where the betting world of Place Bets comes to life with <Link
				text="Buys"
				href="buying-place-bets"
			/> and <Link text="Power Presses" href="presses" />! Hardways being parlayed! Odds being
			maxed! And Come Bets being very boring... like they usually are. It's when nothing is OFF, and
			everybody is holding their breath every roll. It's when you really start to feel the essence
			of what Craps has to offer. The flow of a Craps game.
		</p>
		<p class="pb-4">
			So don't go messing up the flow of the game by buying in during the Intermediate Roll. Don't
			be coloring up. Don't be sticking your hands on the table when the dice are out. Don't be
			making late bets, and be ready for what you want to do next. Keeping the flow of the game
			makes playing Craps so much more fun for everyone.
		</p>
		<p class="pb-4">
			Keep in mind during the Intermediate Roll, you can take back or remove all bets from the table
			except for the Pass Line or a Come Bet after it has traveled into a Point. You can also say to
			the dealer <Quote text="Turn my bets OFF" /> if you only want to skip a roll or two but remember
			to turn them back on when you're ready.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-intermediate-roll_640x360.webp"
			mdImg="src/images/{url}/the-intermediate-roll_960x540.webp"
			lgImg="src/images/{url}/the-intermediate-roll_1280x720.webp"
			title="The Intermediate Roll"
			alt="A Craps table with the Puck in the ON position sitting on the Six. There are a lot of bets on the layout."
		/>
		<Divider />
		<ContentHeaderTwo id="buyingIn" title="How Do You Buy In at the Craps Table?" />
		<p class="pb-4">
			It's suggested to wait until the Comeout Roll to buy cheques because some players feel that if
			you buy cheques in the middle of a roll it messes with the flow of the game, although it is
			your right to make a bet any time. You can walk up, put money on the table and tell them what
			bet you want. After <Link text="the boxperson" href="the-crew" /> has counted out your money, one
			of the base dealers will hand you your cheques. You can then pick them up, put them in <Link
				text="the rail"
				href="the-craps-table"
			/>, and be ready to play.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/buying-in_640x360.webp"
			mdImg="src/images/{url}/buying-in_960x540.webp"
			lgImg="src/images/{url}/buying-in_1280x720.webp"
			title="Buying In"
			alt="Three one-hundred dollar bills layed out on the Craps table in front of the box."
		/>
		<Divider />
		<ContentHeaderTwo id="colorUp" title="What Is it to 'Color Up' at the Craps Table?" />
		<p class="pb-4">
			When it's time to go, please don't walk away with the cheques unless you have a handful or
			less. It would be best to wait until the current roll has ended and it's a new Comeout Roll.
			If you color up in the middle of a roll, you are saying the shooter isn't going to win, and
			you want to get out before they cost you any money. When the roll is over, tell the base
			dealer that you would like to <Quote text="color up" /> and place your cheques on the table. you're
			doing this so you can convert your smaller cheques into larger ones to take to the cashiers' window.
		</p>
		<p class="pb-4">
			When you are ready to leave, wait for the puck to turn OFF and start placing your money on the
			layout. You do not need to worry about sorting it or making even piles. The Box will take care
			of that.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/cashing-out-a_640x360.webp"
			mdImg="src/images/{url}/cashing-out-a_960x540.webp"
			lgImg="src/images/{url}/cashing-out-a_1280x720.webp"
			title="Cashing Out - Putting Money Down"
			alt="Four stacks of cheuqes on the layout next to the mirror represending a player coloring up."
		/>
		<p class="py-4">
			After the Box has counted your money, they will give the total amount to the Base Dealer who
			will cut out your money in the COME. Color Up's need to be approved by the supervisor so do
			not try to grab your money. Only after the supervisor has agreed with the total will the Base
			Dealer hand your money to you and you are good to pick it up. You'll then have to take those
			cheques to the cashier to turn into cash.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/cashing-out-b_640x360.webp"
			mdImg="src/images/{url}/cashing-out-b_960x540.webp"
			lgImg="src/images/{url}/cashing-out-b_1280x720.webp"
			title="Cashing Out - Money Counted Out"
			alt="Your cheques counted out in front of the box and your colored money sitting in the come waiting to be handed off."
		/>
		<Divider />
		<ContentHeaderTwo id="numberSeven" title="What's With the Number 7 in a Craps Game?" />
		<p class="pb-4">
			The number 7 is a double-edged sword. During the Comeout Roll, the players usually win. During
			the Intermediate Roll, it's usually how all the players lose, so they don't want to hear
			anyone say <Quote text="seven" />.
		</p>
		<p class="pb-4">
			When betting an <Link text="Any 7" href="any-seven" />, many players will use the phrase <Quote
				text="big red"
			/> in place of <Quote
				text="any
		seven"
			/>because it's written on the table in red letters. E.g., “Can I have $1 big red?” They phrase
			it that way as a courtesy to the other players, so they don't hear <Quote text="seven." /> It's
			only ok for players to say <Quote text="seven" /> during the Comeout Roll when most players are
			on the Pass Line, and it wins for them.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-number-7_640x360.webp"
			mdImg="src/images/{url}/the-number-7_960x540.webp"
			lgImg="src/images/{url}/the-number-7_1280x720.webp"
			title="The Number Seven"
			alt="Two blue dice on green felt. First has the six up and the second a one."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
