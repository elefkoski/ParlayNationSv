<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogH3 from '$lib/clients/components/blog/BlogH3.svelte';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Take Advantage of a Great Roll';
	let description: string =
		'Capitalize on great craps rolls: Expert advice on bet pressing, parlays, and optimizing your winnings.';
	let url: string = 'a-great-craps-roll';

	let pageLinks: PageMenu[] = [
		{
			title: 'How to Gauge a Roll',
			href: '#gaugeRoll',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Taking Advantage of the Roll',
			href: '#takeAdvantage',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Before It's Over",
			href: '#beforeItsOver',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={'http://parlaynation.com/' + url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
		{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Take Advantage of a Great Roll",
  "description": "A strategic guide on capitalizing on great rolls in Craps, including betting strategies and tips for maximizing your gains.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/a-great-craps-roll",
  "image": "http://parlaynation.com/images/a-great-craps-roll/a-great-craps-roll-header.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Parlay Nation",
    "logo": {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://parlaynation.com/a-great-craps-roll"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "How to Gauge a Roll",
      "description": "Learn how to distinguish between bad, decent, good, and great rolls to adjust your betting strategy.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bad Roll Characteristics",
          "description": "Identifying devastating rolls quickly to mitigate losses."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Decent Roll Qualities",
          "description": "Understanding rolls that allow you to break even or slightly profit."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Good Roll Features",
          "description": "Recognizing profitable rolls that provide a significant advantage."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Great Roll Indicators",
          "description": "The hallmarks of exceptional rolls that maximize winnings for everyone involved."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Taking Advantage of the Roll",
      "description": "Strategies and tips for maximizing your gains during great rolls.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Max Your Odds",
          "description": "Increasing Odds bets to maximize payouts on winning rolls."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Increase Pass Line and Come Bets",
          "description": "Enhancing Pass Line or Come bets to raise the stakes and potential wins."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Use Presses",
          "description": "Strategies for pressing bets to incrementally increase bet amounts and potential payouts."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Use Parlays",
          "description": "Leveraging parlays for shots at significant winnings during hot streaks."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Double Dip",
          "description": "Placing additional bets on expected outcomes for even greater returns."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Before It's Over",
      "description": "Protective strategies to preserve your bankroll before the hot streak ends.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Take Your Bets Down",
          "description": "Requesting the dealer to return bets to safeguard against losses."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Turn Your Bets Off",
          "description": "Temporarily disabling active bets to avoid losses on upcoming rolls."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Reduce Your Bets",
          "description": "Decreasing bet amounts to maintain engagement with reduced risk."
        }
      ]
    }
  ]
}

	</script>
</svelte:head>
<BlogLayout {pageLinks}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<BlogHeaderOne
			sectionTitle="Being a Better Player"
			title="How to Take Advantage of a Great Roll at the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Craps is a game to approach with both caution and courage. While bad rolls require a
				conservative approach, great rolls are when you can be fearless – increasing your bet
				amounts or using presses and parlays. When the good rolls come around you want to know the
				options available so you can join in the splendor.
			</p>
			<p class="pb-4">
				In this guide, we teach you how to gauge the quality of a roll and how it signals you to
				change your betting strategy. We'll explore when to press your bets, when to parlay, and
				when to step back and preserve your bankroll. Because in Craps, like in life, timing is
				everything.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="up-close-craps-layout"
			title="Up Close View of Craps Layout"
			alt="Up close view of craps table with many chips set up as bets."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="gaugeRoll" title="How to Gauge a Roll">
			<p class="pb-4">
				You’re going to know a bad roll when it comes fast and painful to pretty much everyone at
				the table. Decent rolls and above will allow you to play Craps all night while a great roll
				will have you buying breakfast for everybody in the morning.
			</p>
			<BlogH3 title="A Bad Craps Roll">
				<p class="pb-4">
					A bad roll is when you get crushed; where you don’t make nearly enough to cover your
					losses and it lasts all of a minute.
				</p>
				<ol class="pb-4">
					<li>
						<span>Point 7 - </span>This is the worst possible roll where you mark a Point and
						immediately roll a 7. You only threw the dice twice, and you never got paid.
					</li>
					<li>
						<span>Point, naturals, 7 - </span>This is also horrible. You mark the Point then roll a
						bunch of naturals where you don’t get paid, and then the 7 rolls. Four or five rolls of
						the dice and no money.
					</li>
					<li>
						<span>Point, few boxes, 7 - </span>This is a condolence because you pick up a couple of
						payments before losing the rest. Not profitable, but better than nothing. Four or five
						rolls of the dice and hopefully you made half your money back.
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="A Decent Craps Roll">
				<p class="pb-4">
					A decent roll is one where you can at least get most of your money back or break even.
					This can be 4 to 10 minutes, depending on how long the shooter wants to stretch it or how
					busy it may be.
				</p>
				<ol class="pb-4">
					<li>
						<span>Make a Point or two - </span>If you make one Point, I consider that as doing your
						job. For those only on the Pass Line, making one Point brings them ahead. For those who
						include a couple of Place bets, making two Points is usually enough to cover a couple
						Place bets and Pass Line bets. You can make two Points in four rolls but it usually
						takes a lot more.
					</li>
					<li>
						<span>Make a bunch of boxes - </span>You don’t need to <Link
							text="make a Point"
							href="pass-line-basics"
						/> to win your money back. If you roll enough boxes, you can use Place bet payments to cover
						your Pass Line bet and more.
					</li>
					<li>
						<span>Comeout Roll winners - </span>Enough winners during the Comeout Roll can pay for
						all losses. Three or four winners can be enough to cover your Pass Line and some Odds,
						maybe a Place bet or two.
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="A Good Craps Roll">
				<p class="pb-4">
					A good roll is one where you profit, make your money back and have a bunch on top. You’re
					talking a 20-minute roll; you held the dice for a while.
				</p>
				<ol class="pb-4">
					<li>
						<span>A few Points - </span>If you can manage to pull off three or more Points, you did
						an excellent job. Most people should be ahead of the game. If you made three Points, you
						probably rolled at least 15 - 20 times.
					</li>
					<li>
						<span>Many Intermediate Rolls - </span>You might never hit a Point but make a lot of
						money. Many throws during <Link text="the Intermediate Roll" href="the-stages" /> mean you’re
						not rolling a 7. Players are winning on boxes and the naturals. Place bets, Come bets, Field
						bets, and all sorts of Props are getting paid. That’s still a good roll.
					</li>
					<li>
						<span>Good if you’re on it - </span>Sometimes only people playing certain bets will make
						all the money. You place the 8 while everyone else places the 6 and the 6 rolls a dozen
						times? It was a good roll for everyone else.
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="A Great Craps Roll">
				<p class="pb-4">
					The coveted great role is hard to pull off. You’re talking about everyone at the table
					winning. It didn’t matter if you bet the <Link
						text="Pass Line"
						href="pass-line-basics"
					/>, <Link text="the Field" href="the-field" />, Props, or parlays; you made money and lots
					of it. These rolls last 40+ minutes and have 30, 40, or 50 rolls.
				</p>
				<p>
					So how do you know when a great roll has arrived so you can take advantage? You have to
					make it there. You have to swiftly get past the bad rolls, and ascend your way to a good
					role. Once you get to a good role, you know the only thing left after that is an excellent
					roll. This is your queue.
				</p>
			</BlogH3>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="craps-bets-turned-on"
			title="Two Dice Stacked On Top of Each Other"
			alt=""
		/>
		<Divider />
		<BlogH2 id="takeAdvantage" title="Taking Advantage of the Roll">
			<p class="pb-4">
				The time has come for you to stop playing scared. You will still make money if you stay with
				your basic strategy, but great rolls don’t come around often so you can’t let it slip by.
				Here are some tips to take advantage of a great roll.
			</p>
			<ol>
				<li>
					<span>Max your Odds - </span>This is number one. Odds pay better than everything else on
					the table so when you’re winning, you want to get paid the maximum amount possible for
					each roll. This applies to both the Pass Line and Come bets.
				</li>
				<li>
					<span>Increase your Pass Line and Come bets - </span>Once you have started maxing the
					Odds, you need to increase your Pass Line or Come bet so you can increase the Odds.
				</li>
				<li>
					<span>Use Presses - </span>Repeatedly hearing “Same bet” during a great role is painful.
					You need to press your bets:
					<ul>
						<li>
							<span>“One unit” - </span>Adds the minimum amount to the bet. $5 on the 4, 5, 9, and
							10, and $6 on the 6 and 8.
						</li>
						<li><span>“Press” - </span>To press is to double your current bet amount.</li>
						<li>
							<span>“Full press” - </span>To full press is to take as much as possible of what you
							won and put it back on the bet.
						</li>
						<li>
							<span>Power Press - </span>Power Press isn’t a phrase; it’s an action. It’s when you
							stack the bet and payment, then add more money to make it bigger.
						</li>
					</ul>
				</li>
				<li>
					<span>Use Parlays - </span>I know that winning a Prop bet is hard enough, but when a table
					is hot, you can afford to take a couple of shots on some huge money.
				</li>
				<li>
					<span>Double Dip - </span>If you maxed your Odds, think the shooter will roll the Point,
					and want to bet more on it, you can always make a <Link
						text="Place bet"
						href="place-bet-basics"
					/> on the Point in addition to your Pass Line bet.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="two-craps-dice"
			title="Two Dice Stacked On Top of Each Other"
			alt="Two purple dice stacked on top of each other in the corner of the Craps Table."
		/>
		<Divider />
		<BlogH2 id="beforeItsOver" title="Before It's Over">
			<p class="pb-4">
				The 7 is inevitable. There are methods you can use to save much of your hard-earned money
				from being swept away. Playing scared may cut into profits, but at the same time, you may
				have the minimum losses, whereas everyone else left hundreds or thousands on the table.
			</p>
			<ol class="pb-4">
				<li>
					<span>Take your bets down - </span>All bets can come down except the Pass Line during the
					Intermediate Roll, and a Come bet when it has entered its Point. Ask the dealer, “Can I
					please have all my bets down?” They will return your money but, keep in mind, you’re
					responsible for picking up self-service bets.
				</li>
				<li>
					<span>Turn your bets off - </span>When you say, “Turn my bets off.” they turn off your
					Place bets. Hardways still work, so you need to add “Hardways off.” You are also
					responsible for self-service bets; those still on the layout after the roll, are working.
					In a time pinch, say, “No action on my _______.” Fill in whichever bet you don’t want
					working.
				</li>
				<li>
					<span>Reduce your bets - </span>Besides <Link text="Pass" href="pass-line-basics" /> & <Link
						text="Come"
						href="come-bet-basics"
					/>
					bets, you can reduce the amount you have on the table. You may still want to be invested, but
					not so heavily. Try replacing parlays with their original bets, cutting Odds in half, or taking
					<Link text="Place bets" href="place-bet-basics" /> down to table min.
				</li>
			</ol>
			<p>
				When the music has stopped, you will be left with several camps of people. Those who lost
				their shirts betting against it, the ones who made the bare minimum playing scared, those
				who made a killing using all the methods I mentioned, and the ones who left it all on the
				line.
			</p>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Craps is as much about strategy as it is about luck, and knowing how to gauge a roll can
				mean the difference between walking away a winner or a loser. Remember that not all rolls
				are created equal – they range from bad to great, and you must adapt your betting strategy
				accordingly. When you've climbed from a good roll to a great one, that's your signal to
				seize the moment.
			</p>
			<p>
				But don't forget, even the greatest roll will come to an end. It's crucial to recognize the
				signs and be proactive. Whether it's reducing your bets or taking them down, these
				strategies can help you hold onto your bankroll. When the dice finally cool off, you'll be
				among those who not only rode the wave but also knew when to get off.
			</p>
		</section>
	</main>
</BlogLayout>
