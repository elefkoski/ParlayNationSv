<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Tipping the Dealers';
	let description: string =
		"Discover the heart of Craps through a dealer's eyes: Learn the essentials of customer service, handling diverse personalities, and the art of tipping.";
	let url: string = 'tipping-the-dealers';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'What Is Good Service',
			href: '#goodService',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'What the Dealers Deal With',
			href: '#dealWith',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Tipping the Dealers',
			href: '#givingTips',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];
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
  "headline": "Mastering the Table: A Dealer’s Perspective",
  "description": "A Craps dealer shares insights on the responsibilities of dealers, dealing with diverse personalities, and the importance of tipping etiquette.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/tipping-the-dealers",
  "image": "http://parlaynation.com/images/tipping-the-dealers/tipping-the-dealers-header.webp",
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
    "@id": "http://parlaynation.com/tipping-the-dealers"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "What Is Good Customer Service",
      "description": "Exploring the dealer's role in providing excellent customer service to Craps players.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dealer's Approach",
          "description": "A dealer's effort to engage with players and enhance their casino experience through humor, support, and attention to their betting habits."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "What the Dealers Must Deal With",
      "description": "An overview of the various personalities dealers encounter and how they manage challenging situations.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dealing with Personalities",
          "description": "How dealers navigate the spectrum of player behaviors, from the angry and resentful to those with poor hygiene."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Giving Tips (Tokes) to the Dealers",
      "description": "Guidelines on tipping etiquette for players, including how to tip and common ways to make bets for dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Tipping Etiquette",
          "description": "Various methods of tipping dealers, highlighting the importance of showing appreciation for their service."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Betting for Dealers",
          "description": "How players can include dealers in their bets, such as two-way, three-way, piggyback bets, and player control."
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
			sectionTitle="Dealing with Dealers"
			title="Mastering the Table: A Dealer’s Perspective's"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Craps is a game of numbers, but the dealers bring a human element that sets the mood. We are
				your guides, your teachers, and are here to make sure you’re having the best time possible.
			</p>
			<p class="pb-4">
				In the following sections, we'll talk about the responsibilities of dealers and how we deal
				with an array of personalities—from the fun-seekers to the profit-chasers. We'll also cover
				tipping etiquette, because let's face it, a good dealer can make or break your casino
				experience.
			</p>
		</section>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="third-base-up-close-empty"
			title="Up Close Craps Layout"
			alt="Up close craps layout; third base."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="goodService" title="What Is Good Customer Service">
			<p class="pb-4">
				Like all professions rooted in customer service, the quality largely depends on the
				individual. I know the players at the table are there to have fun and/or make money. My hope
				is for everyone to enjoy the experience and profit from it, dealers included.
			</p>
			<p class="pb-4">
				If you come to my table with a stone cold face, I’ll make it my personal challenge to crack
				it. I’ll be firing off one liners left and right. I’ll be rooting for you, letting you <Link
					text="bend
				the rules"
					href="better-craps-shooter"
				/>, and leaning your way when tough decisions are a coin flip. I know somewhere in there is
				a smiling, happy-go-lucky, exciting person who wants to go home with a pocket full of cash.
				We only have to shake 'em out.
			</p>
			<p class="pb-4">
				While not everyone has a beaming personality, they can at least offer some basic service
				above paying and taking your money. Here are a few ways you can tell if a dealer is trying
				to go above the standard service.
			</p>
			<ol>
				<li>
					<span>They remind you - </span>Since Craps moves so fast, it can be difficult to stay on
					top of <Link text="every bet" href="rank-of-craps-bets" /> at the table. With so much going
					on, even an experienced player will forget to put down their Odds or notice they need to move
					a Place bet. A good dealer will ensure you are set up on all your normally placed bets, and
					make sure you return on bets that fall on a regular basis.
				</li>
				<li>
					<span>They teach you - </span>Teaching is part of the job, but ensuring you understand is
					another. A good dealer might remind you about various bets more than once, but they also
					have their limits. You must stay engaged and ask questions when needed. It’s not hard for
					a dealer to give up on a player after realizing they have no intention of learning.
				</li>
				<li>
					<span>They give you time - </span>A <Link text="stickperson" href="the-crew" /> can move the
					dice so fast and with such ease that, if they couldn’t care less, they wouldn’t give you an
					opportunity to make a bet. These dealers are short on patience so you’ll find yourself fumbling
					to get bets on the layout while barely being able to follow what’s happening. A good dealer
					will be able to tell when the table is ready, and send <Link
						text="the dice"
						href="the-dice"
					/> in a timely manner.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="two-way-pass-line"
			title="Pass Line Bet for the Player and the Dealers"
			alt="Pass line bet for the players and the dealers."
		/>
		<Divider />
		<BlogH2 id="dealWith" title="What the Dealers Must Deal With">
			<p class="pb-4">
				Most people coming to the casino are there for a good time. If they lose their money,
				they’re ok – they almost expected it. But others are there for the money, not the fun, and
				the separation of people with their money leaves plenty of people resentful. All too often
				the hammer falls upon us dealers and not the game, creating plenty of uncomfortable
				situations.
			</p>
			<p>
				Unfortunately, angry gamblers don’t scratch the surface. Like many in customer service, we
				have to manage a wide assortment of personalities: from the greedy and dishonest to the
				egocentric and passive-aggressive. There are also those who are pessimistic, needy, or exude
				a sense of entitlement. And let’s not get into the hygiene, oh my goodness the hygiene..
				it’s not always fun, but we persevere.
			</p>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="three-way-bet"
			title="Three Way Aces Bet"
			alt="Three way bet with the dealers on the aces."
		/>
		<Divider />
		<BlogH2 id="givingTips" title="Giving Tips (Tokes) to the Dealers">
			<p class="pb-4">
				I genuinely appreciate every tip, no matter how it's given. I'm aware that tipping is a
				choice, and you might even be down at the moment. But please know I try my best to ensure
				you have the best experience possible. So, when you’re ready, there are a few standard ways
				you can say thanks:
			</p>
			<ol>
				<li>
					<span>Putting the Toke In the Box - </span>Simply yell as loud as you can, “For the
					dealers!,” and toss it my way. I’ll pick it up, hold it in the air, and yell “For the
					dealers!” followed by a “Thank you, thank you very much.” then give it to the Boxperson
					while pointing at you and saying, “Compliments of this fine young lady over here!” That
					sounds like bonus points for you… Remember, there are always some good instances where you
					can find a way to throw a couple dollars. Here are some to look out for.
					<ul>
						<li>
							<span>I remind you of your bets - </span>It happens very often that people forget to
							make bets. When it hits and you collect a good score, use it as an opportunity to give
							a little love.
						</li>
						<li>
							<span>You see me working hard - </span>Dealing Craps is taxing to the body and mind.
							It’s a lot of bending over, putting bets down, picking them up, and moving them back
							and forth. Then you have this relentless onslaught of complex <Link
								text="rapid-fire math
							problems"
								href="proposition-bets"
							/>, all while being stared at by a table full of people expecting you to get it right
							every time. It’s a struggle for many dealers. A couple dollars here and there lets me
							know I’m not breaking my back and my brain for nothing.
						</li>
						<li>
							<span>We make it through a great roll - </span>It's not every day the Craps table
							witnesses a <Link text="30 minute roll" href="a-great-craps-roll" /> where all the players
							do nothing but win money. But when it happens, I love to look around and see everyone smiling,
							cheering, and rails full of money. I know that you all killed it and I would love to be
							feeling that same sense excitement! A few cheques is all I need to make me happy, and now
							we’re all ready to do it again.
						</li>
					</ul>
				</li>
				<li>
					<span>Making Bets for the Dealers - </span>Without a doubt, the majority of players will
					make a bet with a tip instead of giving it to me. If I were to be honest, I prefer to put
					the toke in the box. It’s how I support my family and I don’t really want to gamble it.
					Although, I completely understand the idea of having the same vested interest – we win and
					lose together. The same way most of the players win and lose together. It’s camaraderie
					and I do enjoy that as well. Here are some common ways to make bets for the dealers:
					<ul>
						<li>
							<span>Two-way Bets - </span>A two-way bet is one you make for yourself and the dealer.
							Once the bet wins, it is dropped by the dealers.
							<ol>
								<li>
									Putting a <Link text="Pass Line bet" href="pass-line-basics" /> for yourself and $1
									next to it for the dealers, then adding a couple of dollars as Odds after the Point
									is established
								</li>
								<li>Two-way Proposition bets like the Hardways or High-Lo’s</li>
								<li>Betting the same Place bet by putting the dealers on the number</li>
							</ol>
						</li>
						<li>
							<span>Three-way bets - </span>When you make a bet for yourself, the dealer, and the
							shooter. Three-way bets are almost exclusively reserved for Proposition Bets.
						</li>
						<li>
							<span>Piggyback - </span>A Piggyback is when you put the dealer's bet on top of your
							bet to make one bet. If the dealers win on their bet, the player will not have to
							place another. The money on top of the bet stays and is up to win again. The dealer
							will cut out two payments and pay separately.
						</li>
						<li>
							<span>Player Control - </span>It’s sort of a vague statement. It could be similar to a
							piggyback with the exception that the player has to actively hand the tip back to the
							dealers instead of the dealers cutting it out and keeping it. It can also be
							considered as a player who is playing bets for the dealers and making moves like
							presses or parlays.
						</li>
					</ul>
				</li>
				<li>
					<span>Tipping At the End - </span>While some players prefer to tip as they're heading out,
					it’s not really the best approach. Consider the possibility that you might not have
					anything left to give by then. Also, tipping in real-time lets the dealers gauge your
					appreciation. These thank you’s can inspire us to go the extra mile for you when it
					counts.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				I’m here to make sure your experience is smooth, educational, and enjoyable. Whether I’m
				reminding you to place your bets or engaging in some conversation, my service goes beyond
				merely exchanging cheques.
			</p>
			<p>
				Remember, tipping is not just a gesture of goodwill but a recognition of the service
				provided. So, the next time you find yourself at a <Link
					text="Craps table"
					href="the-craps-table"
				/>, take a moment to appreciate the dealer’s efforts. Whether you tip during the game or at
				the end, your acknowledgment can make all the difference.
			</p>
		</section>
	</main>
</BlogLayout>
