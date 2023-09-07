<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/Content-img.svelte';
	import ContentUl from '$lib/clients/components/Content-ul-a.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '../../lib/clients/components/Link.svelte';
	import Quote from '../../lib/clients/components/Quote.svelte';

	let title: string = 'Verbal Betting at the Craps Table';
	let description: string =
		"Craps is a verbal game. All bets in Craps can be made verbally as long as the dealer has called it a bet. You shouldn't get caught with your hands on the table when the dice are out!";
	let url: string = 'verbal-betting';

	let phref = '/the-stages';
	let prev = 'The Stages';
	let nhref = '/to-consider';
	let next = 'To Consider';

	let liAs = [
		{
			title: 'Here are some ways you can turn your bets On:',
			items: [
				'You can turn all your bets \'On\' by saying, "Turn all my bets On."',
				'You can turn certain groups of bets \'On\' by saying, "Turn my place bets on", "Turn my hardways on.", or "Turn my come bet odds on."',
				'You can turn specific bets \'On\' by saying things like, "Turn on my six and eight.", or "Turn on my hard ten."'
			]
		}
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
		  "name": "Verbal Betting at the Craps Table",
		  "description": "Craps is a verbal game. All bets in Craps can be made verbally as long as the dealer has called it a bet. You shouldn't get caught with your hands on the table when the dice are out!",
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
		<ContentHeaderOne sectionTitle="Craps Basics" title="Making Verbal Bets at the Craps Table" />
		<p class="pb-4">
			<Quote text="Dice are moving!" />, <Quote text="We're goin!" />, <Quote
				text="We're rollin!"
			/>,
			<Quote text="Dice!" />... these are all warnings. It's what the Stickperson says when they
			send the dice to the shooter and your cue to stop putting your hands on the table, hanging
			them over the edge of the rail, dropping money, throwing cheques, pointing at things, or
			anything that may change how the dice were going to land. Right now, the shooter has the dice
			and is about to throw them. If your hands are on the table when the shooter throws the dice
			and hits you, and that roll causes everybody to lose, guess whose fault it's going to be?
			That's right... yours.
		</p>
		<p class="pb-4">
			You can play Craps by talking to the dealers. You can make bets, move bets, take down bets,
			ask bets to be turned OFF and ON, and a host of other options. You DO NOT need to throw your
			money on the table to make a bet. I repeat you do not need to throw your money on the table to
			make a bet. You can make a verbal declaration of what you want, and as long as the dealer
			repeats it back to you, it is considered a <Quote text="bet." /> After <Link
				text="the dice"
				href="the-dice"
			/> have landed, you can drop your money on the table, and the dealer will set up your bet.
		</p>
		<Divider />
		<ContentHeaderTwo title="What Is Verbal Declaration of a Bet in Craps?" />
		<p class="pb-4">
			Many times the dice are out, and you want to make a bet. As long as the dealers can see you
			have the money for the bet, you can make it verbally, and the dealers will book it. E.g., if
			the dice are out and you want $5 in <Link text="the Field" href="the-field" />, you can look
			at the dealer and say, <Quote text="I want $5 in the field." /> The dealer will repeat it back
			to you, and after the dice have landed, you can put the money on the table. Verbal bets will help
			you avoid getting hit with the dice and save you from being yelled at by the other players.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/verbal-declaration_640x360.webp"
			mdImg="src/images/{url}/verbal-declaration_960x540.webp"
			lgImg="src/images/{url}/verbal-declaration_1280x720.webp"
			title="Verbal Declaration of a Bet"
			alt="An outline of a person with a red though bubble next to another outlined person with a blue talking bubble and a cheque in their hand."
		/>
		<Divider />
		<ContentHeaderTwo title="Are the Dealers Repeating Your Bets on the Craps Game?" />
		<p class="pb-4">
			Having a dealer repeat your bet is one of the most important things that need to happen in
			Craps. Any bet you ask for that is not repeated back to you can be considered a <Quote
				text="No bet."
			/>
			Dealers repeat the bet to let you know they heard you, make sure it's the bet you actually want,
			and so <Link text="the Box" href="the-crew" /> can know what's happening at the table. If the dealer
			does not repeat your bet back to you, then you should repeat yourself.
		</p>
		<p class="pb-4">
			The dealers can also say <Quote text="Bet" /> as a way of confirming your action. If you hear them
			say <Quote text="Bet" />
			instead of repeating your action, then you're still good to go.
		</p>
		<Divider />
		<ContentHeaderTwo title="What Is a No Call Bet in Craps?" />
		<p class="pb-4">
			Tables labeled with 'No Call Bets' mean you cannot walk up to a Craps table and verbally ask
			for a bet without showing that you have the money for the bet. If the dealers can't see money,
			then it will be a <Quote text="No bet" />.
		</p>
		<Divider />
		<ContentHeaderTwo title="What Does &ldquo;No Bet&rdquo; Mean in Craps?" />
		<p class="pb-4">
			<Quote text="No bet" /> is a phrase used when the dealer doesn't accept your bet. There can be
			many reasons a dealer doesn't accept a bet, such as making a bet too late, not understanding what
			your bet is, or making an improper bet. Try to make sure you find out why the dealer said <Quote
				text="No bet"
			/>
			so you don't repeat the same mistake twice.
		</p>
		<Divider />
		<ContentHeaderTwo title="What Does &ldquo;My Bets are ON&rdquo; Mean at the Craps Table?" />
		<p class="pb-4">
			Place Bets, Come Bet Odds, and Hardways are all 'Off' during the <Link
				text="Comeout Roll"
				href="the-stages"
			/>, meaning they won't win or lose. If you want, you can have those bets working by telling
			the dealer you would like to turn those bets 'On'.
		</p>
		<ContentUl {liAs} />
		<div class="mb-4" />
		<ContentImg
			caption=""
			smImg="src/images/{url}/my-bets-are-on_640x360.webp"
			mdImg="src/images/{url}/my-bets-are-on_960x540.webp"
			lgImg="src/images/{url}/my-bets-are-on_1280x720.webp"
			title="My Bets are On"
			alt="The puck is off and in the Don't Come. There is a $10 place bet on the Point Ten with an 'On' button on top."
		/>
		<Divider />
		<ContentHeaderTwo title="What Does &ldquo;My Bets Are OFF&rdquo; Mean in a Craps Game?" />
		<p class="pb-4">
			During the Intermediate Roll, all your bets are already turned On. You can tell the dealer
			that you want all your bets or specific bets turned Off. When you say, <Quote
				text="I'm off"
			/> the dealer will say, <Quote text="Odds work unless you pick them up." />, meaning that it's
			your own responsibility to pick up any <Link text="Odds" href="pass-line-odds" /> you have for
			your <Link text="Pass Line" href="pass-line-basics" />
			bet. You might also hear,
			<Quote text="Hardways are also working unless called off." /> meaning that you must also say that
			you would like your <Link text="Hardways" href="the-hardways" /> Off.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/my-bets-are-off_640x360.webp"
			mdImg="src/images/{url}/my-bets-are-off_960x540.webp"
			lgImg="src/images/{url}/my-bets-are-off_1280x720.webp"
			title="My Bets are Off"
			alt="The puck is on and sitting in the point six. There is a $50 place bet on the point five with an off button on top."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
