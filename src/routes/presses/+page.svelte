<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Using Presses at the Craps Table';
	let description: string =
		'When you Press you are adding money to an existing bet. You could Press One Unit, Double it (Press It), Full Press, Odd Press, Power Press, or Multiple Unit Presses.';
	let url: string = 'presses';

	let phref: string = 'your-money';
	let prev: string = 'Your Money';
	let nhref: string = 'spread-bets';
	let next: string = 'Spread Bets';
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
		  "name": "Pressing Craps Bets",
		  "description": "When you Press you are adding money to an existing bet. You could Press One Unit, Double it (Press It), Full Press, Odd Press, Power Press, or Multiple Unit Presses.",
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
		<ContentHeaderOne sectionTitle="Place Bets" title="Pressing Place Bets in Craps" {pageData} />
		<p class="pb-4">
			If you're serious about making money playing Craps, then you're going to have to press your
			bets. Pressing means you are adding money to an existing <Link
				text="Place bet"
				href="place-bet-basics"
			/> so you can win more. You have the option to give the dealer money and tell them to press your
			bet or use money from a winning bet to press itself and/or other bets.
		</p>
		<p class="pb-4">
			You can press one Place Bet or multiple Place Bets with a few of your winnings or all of them.
			The best time to press a bet is right before the dealer pays you for that winning bet, but
			learning presses is key in becoming a skilled craps player no matter how you do it.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/presses_640x360.webp"
			mdImg="src/images/{url}/presses_960x540.webp"
			lgImg="src/images/{url}/presses_1280x720.webp"
			title="Craps Presses"
			alt="$12 place bet on the eight."
		/>
		<Divider />
		<ContentHeaderTwo title="What Is a Unit in Craps" />
		<p class="pb-4">
			In Craps, a unit is a certain amount of money. Generally speaking, a unit is $5 or $6. On the
			6 and 8 a unit is $6. On the 4, 5, 9 and 10 a unit is $5. For higher limit players, one unit
			can be considered $30 on the 6 and 8 and $25 on each the 4, 5, 9, and 10.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/what-is-a-unit_640x360.webp"
			mdImg="src/images/{url}/what-is-a-unit_960x540.webp"
			lgImg="src/images/{url}/what-is-a-unit_1280x720.webp"
			title="What Is a Unit in Craps"
			alt="A $6, $12, $18, and $24 place bet on the eight."
		/>
		<Divider />
		<ContentHeaderTwo title="What Are Some Standard Presses on the Craps Table" />
		<p class="pb-4">
			Standard Presses are the ones you see most often. When you make a standard press, you tell the
			dealer one of these three phrases, and the dealer will know what to do automatically. After
			learning these presses, you'll have the tools to take advantage of a good roll.
		</p>
		<ContentHeaderThree title="Go Up One Unit" />
		<p class="pb-4">
			One Unit is the easiest and the most common press you'll see on the Craps table. It's adding
			the bare minimum, five or six dollars, to an existing Point. When it gets to be your turn,
			tell the dealer, <Quote text="Press me one unit" /> or <Quote text="One unit" />, and the
			dealer would say <Quote text="Going up one unit " />or <Quote
				text="Going to (the amount your bet will be pressed to)"
			/>.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/one-unit-press_640x360.webp"
			mdImg="src/images/{url}/one-unit-press_960x540.webp"
			lgImg="src/images/{url}/one-unit-press_1280x720.webp"
			title="One Unit Press"
			alt="$12 eight pressed one unit to an $18 eight"
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Press it" />
		<p class="pb-4">
			Another easy one. When you tell the dealer to “Press it”, you're saying double your bet. When
			it's your turn, say <Quote text="Press it." /> The dealer should say <Quote
				text="Going to (whatever)"
			/>, or they'll repeat, <Quote text="Press it" />.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/press-it_640x360.webp"
			mdImg="src/images/{url}/press-it_960x540.webp"
			lgImg="src/images/{url}/press-it_1280x720.webp"
			title=""
			alt="$15 nine pressed to $30 nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Full Press" />
		<p class="pb-4">
			When you say <Quote text="Full press" />, you are in it to win it. A Full Press adds as much
			of the payment as possible back into the bet while still keeping it proper. They are for
			people who don't want to risk any more money but want to increase their bet as much as
			possible. When you Full Press, the dealer will repeat <Quote text="Full press" />, then add as
			much as possible to your bet and hand you the change.
		</p>
		<p class="pb-4">
			When Full Presses get above $100, you should make them normal increments and not full press
			anymore. On the 6 and 8, it would be something like $120 or $150. On the 5 and 8, it would be
			something like $125 or $150. The dealer should tell you what a normal increment is and give
			you normal presses at that point.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/full-press_640x360.webp"
			mdImg="src/images/{url}/full-press_960x540.webp"
			lgImg="src/images/{url}/full-press_1280x720.webp"
			title="Full Press"
			alt="$36 eight full pressed to $78 eight."
		/>
		<Divider />
		<ContentHeaderTwo title="What is an Odd Press or Power Press in Craps" />
		<p class="pb-4">
			Presses other than standard presses require you know more about what you're doing. These are
			more like systems. People know how much they're starting with and know how much they are going
			to up every time their bet hits.
		</p>
		<ContentHeaderThree title="Odd Press" />
		<p class="pb-4">
			Odd Presses are presses that don't conform to the other types of presses. There is an
			unlimited amount, but for the most part, people only use a handful. If a player takes a $25
			Place bet on the 9 and presses to $35 after it hits, they are only adding $10 to the bet. It's
			not a one unit press or a full press or a power press or any other press. It's just going to
			$35, and $35 on the 9 is a very normal bet, and this is a very commonly seen press.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/odd-press_640x360.webp"
			mdImg="src/images/{url}/odd-press_960x540.webp"
			lgImg="src/images/{url}/odd-press_1280x720.webp"
			title="Odd Press"
			alt="$42 six pressed to $60 six."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Power Press" />
		<p class="pb-4">
			Power Pressing is tough. It's full pressing plus adding more of your own money to get the bet
			as high as possible as fast as possible. You know how much you need to start with, what the
			bets pay, how much more money you need to give to the dealer, what amount you are going to,
			how many times you need your number to hit before you reach your goal, and how many times you
			can try before you run out of money.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/power-press_640x360.webp"
			mdImg="src/images/{url}/power-press_960x540.webp"
			lgImg="src/images/{url}/power-press_1280x720.webp"
			title="Power Press"
			alt="$10 five pressed with $1 to $25 five."
		/>
		<Divider />
		<ContentHeaderTwo title="What Are Multiple Number Presses in Craps" />
		<p class="pb-4">
			When you start to press multiple numbers, you have a pretty good idea of what you're doing.
			you're tracking your bets, knowing what they pay, how much you're going to add to each number,
			what those numbers are going to end up at, and whether or not you need to add more money to
			make it proper. Instead of putting all your cheques on one bet, you're spreading them out, so
			multiple bets get increased every time.
		</p>
		<ContentHeaderThree title="Double Unit Presses" />
		<p class="pb-4">
			Double Unit presses are when you take the payment of a Place bet and press itself and its
			opposite number the same amount. 6 is opposite 8; 5 opposite 9; 4 opposite 10. When making
			double unit presses, you use the phrase <Quote
				text="Go to (an amount you want each bet to go to) each (the
		two Place bets you would like to increase)."
			/> For example, if you have $12 each 6 and 8. One of them hits, and you want to press them both
			to $18 each. When it's your turn to get paid, but before the dealer pays you, you would say, <Quote
				text="Go to $18
		each 6 and 8."
			/> The dealer should then repeat, <Quote text="Going to $18 each 6 and 8." />
		</p>
		<ContentImg
			caption="Double Unit Press: $12 each 6 and 8 to $18 each"
			smImg="src/images/{url}/double-unit-press_640x360.webp"
			mdImg="src/images/{url}/double-unit-press_960x540.webp"
			lgImg="src/images/{url}/double-unit-press_1280x720.webp"
			title="Double Unit Press"
			alt="$12 each six and eight pressed one unit each to $18 each six and eight."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Double Unit Press: $15 each 5 and 9 to $25 each"
			smImg="src/images/{url}/double-unit-odd-press_640x360.webp"
			mdImg="src/images/{url}/double-unit-odd-press_960x540.webp"
			lgImg="src/images/{url}/double-unit-odd-press_1280x720.webp"
			title="Double Unit Odds Press"
			alt="$15 each five and nine pressed one unit to $25 each five and nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Across/Inside/Outside Pressure" />
		<p class="pb-4">
			You can press more than one or two numbers at once. If you're going to press more than two
			numbers simultaneously, you're likely going to do it in <Link
				text="spread bet"
				href="spread-bets"
			/> fashion. You should first know how much you're going to get paid and how much it will cost to
			make your presses. That will tell you if you need to give the dealer more money to complete the
			cost or how much change you should be getting.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/across-pressure_640x360.webp"
			mdImg="src/images/{url}/across-pressure_960x540.webp"
			lgImg="src/images/{url}/across-pressure_1280x720.webp"
			title="Across Pressure"
			alt="$26 across pressure to $52 across."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
