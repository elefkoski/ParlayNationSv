<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Playing the Don’ts';
	let description: string =
		"Winning quietly on the Craps table's Dark Side: Strategies for 'Don't' bettors on making smart bets, maintaining good relations, and enjoying victories subtly.";
	let url: string = 'playing-the-donts';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'Stand Next to the Base Dealer',
			href: '#baseDealer',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Make Come and Overlay Bets',
			href: '#comeOverlay',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Use "Big Red" If Allowed',
			href: '#bigRed',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Celebrate Your Victories With Grace',
			href: '#withGrace',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Root for the 7",
			href: '#noSeven',
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
  "headline": "Playing the Don’ts Without the Table Hating You",
  "description": "Strategies for engaging in 'Don't' betting at the Craps table with etiquette tips to maintain a harmonious atmosphere despite betting against the majority.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/playing-the-donts",
  "image": "http://parlaynation.com/images/playing-the-donts/playing-the-donts-header.webp",
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
    "@id": "http://parlaynation.com/playing-the-donts"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Stand Next to the Base Dealer",
      "description": "Benefits of positioning yourself next to the base dealer for a smoother and less conspicuous Dark Side betting experience.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Optimal Positioning",
          "description": "Advantages of standing by the base dealer for strategic betting and reduced visibility among other players."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Make Don’t Come and Overlay Bets",
      "description": "Utilizing Don't Come and Overlay bets to engage in Dark Side betting without directly opposing the majority's Pass Line bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strategic Betting Choices",
          "description": "How Don't Come and Overlay bets allow for strategic, less confrontational betting against the table's trends."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Use “Big Red” if Allowed",
      "description": "The etiquette of using the term 'Big Red' for Any 7 bets as a respectful way to play without verbalizing the number seven at the table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Discreet Terminology",
          "description": "Adopting 'Big Red' as a discreet way to place certain bets, respecting table superstitions and maintaining harmony."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Celebrate Your Victories with Grace",
      "description": "Tips for modest celebration of wins to avoid antagonizing other players, especially when your win results from their loss.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Respectful Celebration",
          "description": "Approaches to celebrating Dark Side wins with discretion to keep the table atmosphere positive."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Do not Root for the 7",
      "description": "The importance of avoiding vocal support for the number seven during the game to prevent conflict and maintain table etiquette.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Maintaining Table Harmony",
          "description": "Why avoiding public support for the number seven is crucial for Dark Side players to coexist peacefully with others at the table."
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
			sectionTitle="Craps Betting"
			title="Playing the Don'ts Without the Table Hating You"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Ever felt like the odd one out at a Craps table? If you're a 'Don't' player, standing in a
				sea of Pass Line bettors, you're not alone. Most players don’t understand it, it requires
				some odd math, and it’s easier to have a negative connotation than to learn to accept it as
				part of the game. This is why many have not grown too fond of Don’t Players. The key is to
				win quietly, blending in yet standing out in your strategy.
			</p>
			<p class="pb-4">
				But there is nothing wrong with the Don’ts. It’s a better bet than the Pass Line by the
				slimmest of margins, so minuscule that its accumulation over a lifetime might barely afford
				a coffee, but it’s there. In this guide, we'll delve deep into the best practices of <Link
					text="Don't
				betting"
					href="the-donts"
				/> — from choosing your spot next to the base dealer to utilizing Don't Come and Overlay bets.
				We'll even guide you through the etiquette of being a Don't bettor without antagonizing the crowd.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="dont-pass-with-lay-odds"
			title="Don't Pass Bets With Lay Odds"
			alt="Multiple don't pass bets with lay odds."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="baseDealer" title="Stand Next to the Base Dealer">
			<p class="pb-4">
				The base dealer is going to be your best friend at the table. Understanding what you’re
				doing, they should be able to have conversations that don’t require talking across other
				players, and be able to help with any convoluted math. Here are some advantages to the spot.
			</p>
			<ol>
				<li>
					<span>You can become invisible - </span>Okay, not invisible, but it's right in the corner,
					a spot people can miss. Half the table won't know you're playing if you take a small step
					back on a busy game, and you don’t need to reach anywhere to make any bets so they don’t
					see you leaning across the table.
				</li>
				<li>
					<span>The Don’t Come is there - </span>Not too many players make <Link
						text="Don’t Come bets"
						href="dont-come"
					/>, but it’s conveniently placed where most Don’t players stand so it works well.
				</li>
				<li>
					<span>You may get away with setting bets down in the apron - </span>When you’re betting
					Don’t Come Lay Odds, the dealer has to reach farther to retrieve your money in the COME
					than if you placed it straight down on the layout where you’re standing. You can expect
					some dealer to tell you to make sure you put the money in the COME.
				</li>
				<li>
					<span>You can get more personal help from the dealer - </span>Too many Don’t players don’t
					know how to play the Don ’ts correctly. They don’t understand how to heel a bet, what side
					to put their Odds on, whether it’s bridgeable or not, what proper Lay Odds are, what their
					bets are supposed to win, or how to use commission on Overlays properly. You’re going to
					need the dealer at some point and standing right next to them makes life that much easier.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="comeOverlay" title="Make Come and Overlay Bets">
			<p class="pb-4">
				Don’t Come and Overlays may be my favorite way to play the Dark Side. You get to skip the
				Don’t Pass, avoiding a conflict of interest with the rest of the table, and you can be happy
				for them when they win. Makes for a more enjoyable game.
			</p>
			<ol>
				<li>
					<span>Don’t Come Bets - </span>Don’t Come bets can only be made during the Intermediate
					Roll so the <Link text="Pass Line" href="pass-line-basics" /> has no bearing on them. They
					move into the next Point number that rolls and need the 7 to come before that Point. Since
					they are always betting against their Point, they can win during the Comeout Roll. When 7 rolls
					during <Link text="the Comeout Roll" href="the-stages" />, the Pass Line Wins, and the
					Don’t Come bets win. Wins all around!
				</li>
				<li>
					<span>Overlay Bets - </span>You can bet and take down <Link
						text="Overlays"
						href="overlays"
					/> at any time. For this reason, you can pick specific numbers people aren’t betting on or
					wait for the Comeout Roll to make the bets, so everyone wins when the 7 rolls.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="dont-come-bets-with-lay-odds"
			title="Don't Come Bet With Lay Odds"
			alt="Don't come bet with lay odds."
		/>
		<Divider />
		<BlogH2 id="bigRed" title="Use 'Big Red' If Allowed">
			<p class="pb-4">
				“Big Red” is a nickname for the <Link text="Any 7" href="any-seven" /> since it’s written in
				red on the layout. It is used as a courtesy to the rest of the table by avoiding saying “Seven”
				out loud. It can also be a disguise for other players not to know what you’re betting if they
				don’t know what “Big Red” means.
			</p>
			<p>
				Since the Any Craps and the COME bet are also written in red on the layout, some dealers
				will not accept that phrase and can say “No bet.” I think most dealers, myself included,
				will accept what you are saying and book the bet by saying “Any Seven” instead of repeating
				“Big Red”.
			</p>
		</BlogH2>
		<Divider />
		<BlogH2 id="withGrace" title="Celebrate Your Victories With Grace">
			<p class="pb-4">
				I know it’s only fair you get to celebrate when you win; it’s why you’re here. But, while
				the rest of the table gets to give high-fives and props to the shooter, you’re usually left
				with your other hand, and the shooter isn’t looking for an ‘Atta boy’ from you.
			</p>
			<p>
				Oddly enough, going wild with celebrations and staying quiet can elicit the same response –
				<Link text="sneers and heckles" href="not-to-do-at-craps-table" /> from the table. Therefore,
				most Don’t players stay modest in their celebrations or are happy on the inside while also rooting
				for the other players when they decide to sit out a roll; garnering some goodwill.
			</p>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="dont-come-bar"
			title="Bet in Don't Come Betting Area"
			alt="A bet sitting in the don't come bet area."
		/>
		<Divider />
		<BlogH2 id="noSeven" title="Don't Root for the 7">
			<p>
				Yelling “Seven! Seven! Seven! Seven! Seven!” during the Intermediate Roll is one of the most
				unwelcome actions you can make at the table. If you’re trying to start a war, this is the
				way to do it. When they inevitably win a round, you can bet at least half of them are going
				to have a word or two for you, so, to avoid conflict, maintain a composed demeanor while
				rooting for that 7 on the inside.
			</p>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Being a successful Dark Side player in Craps requires a blend of strategy, discretion, and
				emotional control. From your table position to your betting choices and the terminology you
				use, every element plays a role. And while you may be playing against the tide, knowing how
				to celebrate discreetly ensures you remain in good standing with your fellow players.
			</p>
			<p>
				We may struggle to have acceptance of the <Link text="Dark Side" href="dont-pass" /> for a long
				time to come but as more people learn it’s not a bad bet, the more people will be inclined to
				use it. You don’t need to wait though, go show people how it’s done.
			</p>
		</section>
	</main>
</BlogLayout>
