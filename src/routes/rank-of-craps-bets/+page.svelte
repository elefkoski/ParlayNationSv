<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/components/blog/BlogH1.svelte';
	import BlogImg from '$lib/components/blog/Blog-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';
	import BlogH2 from '$lib/components/blog/BlogH2.svelte';

	let title: string = 'Rank of Craps Bets';
	let description: string =
		'Ranked for your advantage: Explore every Craps bet from Odds to Propositions, mastering the game by understanding their house edges';
	let url: string = 'rank-of-craps-bets';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'The Best Bets',
			href: '#bestBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Better Bets',
			href: '#betterBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Not So Bad Bets',
			href: '#notSoBadBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Not So Good Bets',
			href: '#notSoGoodBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Worst Bets',
			href: '#worstBets',
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
  "headline": "Ranking All Bets On the Craps Table",
  "description": "A comprehensive guide to understanding the house edge for each bet on the Craps table, helping players make informed decisions.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
},
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/rank-of-craps-bets",
  "image": "http://parlaynation.com/images/rank-of-craps-bets/rank-of-craps-bets-header.webp",
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
    "@id": "http://parlaynation.com/rank-of-craps-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "The Best Bets on the Craps Table",
      "description": "Overview of the best bets with no house advantage.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Odds",
          "description": "Bets with no house advantage, including Pass Line Odds, Come Bet Odds, Don't Pass Lay Odds, and Don't Come Lay Odds."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Better Bets on the Craps Table",
      "description": "Bets with extremely low house edges.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Don’t Pass/Don’t Come",
          "description": "Bets offering a 1.36% house edge."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pass Line/Come Bet",
          "description": "Bets with a 1.41% house edge."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Place 6 or 8",
          "description": "Bets with a 1.52% house edge."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Not So Bad Bets on the Craps Table",
      "description": "Commission based bets with higher edges but still reasonable options.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Overlay and Buys",
          "description": "Includes Overlay 4 or 10, Overlay 5 or 9, Place the 5 or 9, Overlay 6 or 8, and all buys."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Field",
          "description": "A bet with a 5.57% house edge, offering even money or double payouts."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Not So Good Bets on the Craps Table",
      "description": "Bets with higher payouts but less chance to win.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hard and Straight Bets",
          "description": "Includes Hard 6 or 8, Hard 4 or 10, Straight Ace Deuce/Yo, Non-pair Hops, Any Craps, and C & E."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Worst Bets on the Craps Table",
      "description": "Bets with the highest house advantage.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Horn Highs and Horn Bets",
          "description": "Includes Horn High Ace Deuce/Yo, Horn, Horn High Aces/Twelve, World, Straight Aces/Twelve, Hop any Hardway, and Any Seven."
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
			sectionTitle="Craps Info"
			title="Ranking All Bets On the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Let’s go on a Craps journey, where a keen understanding of the house edge for each bet
				equals more informed decisions at the table. It's worth noting that higher payouts don't
				always equate to more excitement. <Link text="The Dont's" href="the-donts" /> are an example
				of this, providing many great bets but requiring a more patient, slow, laid-back approach.
			</p>
			<p class="pb-4">
				This guide is a comprehensive breakdown of the house edge on every bet available at a Craps
				table. From the highly favorable Odds bets to the high-risk allure of <Link
					text="Proposition bets"
					href="proposition-bets"
				/>, we'll walk you through the edge behind each choice, giving you the tools to play
				strategically and lower the house edge.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="pass-line-paid"
			title="Pass Line Bets Paid"
			alt="Multiple pass line bets paid."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="bestBets" title="The Best Bets on the Craps Table">
			<p class="pb-4">
				Odds are the best bets you will find on the table because their advantage is 0.00%. You
				can't really beat it. There are four different ways to bet Odds at the Craps table and
				whenever possible, you should be taking advantage.
			</p>
			<ol>
				<li>
					<span>Pass Line Odds - </span>These are added to the<Link
						text=" Pass Line"
						href="pass-line-basics"
					/> after the Point is established.
				</li>
				<li>
					<span>Come Bet Odds - </span>You add these to a Come bet after it has traveled into its
					Point.
					<ul>
						<li><span>Point 6 or 8 - </span>Odds pay 6:5</li>
						<li><span>Point 5 or 9 - </span>Odds pay 3:2</li>
						<li><span>Point 4 or 10 - </span>Odds pay 2:1</li>
					</ul>
				</li>
				<li>
					<span>Don't Pass Lay Odds - </span>The Odds are added to the Don't Pass after establishing
					a Point.
				</li>
				<li>
					<span>Don't Come Lay Odds - </span>
					Once a Don’t Come travels behind its Point, you can add <Link
						text="Lay Odds"
						href="dont-come-lay-odds"
					/> by handing them to the dealer.
					<ul>
						<li><span>Point 6 or 8 - </span>Lay Odds pay 5:6</li>
						<li><span>Point 5 or 9 - </span>Lay Odds pay 2:3</li>
						<li><span>Point 4 or 10 - </span>Lay Odds pay 1:2</li>
					</ul>
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="betterBets" title="The Better Bets on the Craps Table">
			<p class="pb-4">
				Outside of the Odds bets, these are the best ones on the table offering extremely low how
				edges.
			</p>
			<ol>
				<li>
					<span>1.36% - Don’t Pass/Don’t Come - </span>Not counting Odds, <Link
						text="the Don’t Pass"
						href="dont-pass"
					/> and <Link text="Don’t Come" href="dont-come" /> are the best bets on the table. Better than
					the Pass Line by a mere 0.05%. These two pay even money (1:1) when they win.
				</li>
				<li>
					<span>1.41% - Pass Line/Come Bet - </span>Coming in third place is the Pass Line. The Pass
					Line is fun to play because you have camaraderie with the rest of the table. They will
					both pay even money (1:1).
				</li>
				<li>
					<span>1.52% - Place 6 or 8 - </span>Place bets on the 6 & 8 are top-notch bets. They are
					very popular with a low house edge and are fun to press. They pay 7:6
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="up-close-place-bets-third-base"
			title="Place and Come Bets"
			alt="Multiple place and come bets."
		/>
		<Divider />
		<BlogH2 id="notSoBadBets" title="The Not So Bad Bets on the Craps Table">
			<p class="pb-4">
				These Bets include the rest of the Overlay bets and Buys. <Link
					text="Commission"
					href="buying-place-bets"
				/>
				based bets but good none the less.
			</p>
			<ol>
				<li>
					<span>2.44% - Overlay 4 or 10 - </span>These two are a couple of my favorite bets,
					especially after seeing a few of either roll a bunch of times. These pay 1:2 with a 5%
					commission on the amount your bet will win. $41 is the minimum for this bet because it
					must win at least $20 with a $1 vig.
				</li>
				<li>
					<span>3.23% - Overlay 5 or 9 - </span>Overlaying the 5 & 9 is also a popular bet for Don’t
					players. With a lower house edge, it’s a good bet. These pay 2:3 with a 5% commission on
					the win amount. $31 is the minimum for this bet because it must win at least $20 with a $1
					vig.
				</li>
				<li>
					<span>4.00% - Place the 5 or 9 - </span>Placing the 5 & 9 is also a good bet. These are
					fun to play with many press possibilities. They pay 7:5.
				</li>
				<li>
					<span>4.00% - Overlay 6 or 8 - </span>Few players Overlay the 6 & 8 because they roll
					often and can have confusing bet amounts. They are still good bets, however. $25 is the
					minimum for this bet because it must win at least $20 with a $1 vig.
				</li>
				<li>
					<span>4.76% - All Buys - </span>While all buys are good bets, we suggest you only buy the
					4 & 10. When you buy, all your bets will be paid True Odds for a 5% commission on the bet
					amount.
				</li>
				<li>
					<span>5.57% - The Field - </span>I’ve spent the majority of my Craps career telling
					players <Link text="the Field" href="the-field" /> is not a good bet. I have been mistaken.
					The Field is not a bad bet, nor a bet I will try to stop players from playing anymore. It pays
					even money (1:1) when the 3, 4, 9, 10, or 11 rolls, and double (2:1) if the 2 or 12 rolls.
					Some casinos may pay the 12 triple (3:1), making the house edge 2.78% and an excellent bet
					on the table.
				</li>
				<li>
					<span>6.67% - Place 4 or 10 - </span>The realization that the Field is better than Placing
					the 4 or 10 changed how I look at Craps. Placing the 4 & 10 is still popular because they
					last more than one roll. These two pay 9:5.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="notSoGoodBets" title="The Not So Good Bets on the Craps Table">
			<p class="pb-4">
				These bets are where bets start to pay higher but have less chance to win. While other
				options are available, these bets offer not so bad payouts.
			</p>
			<ol>
				<li>
					<span>9.09% - Hard 6 or 8 - </span>Probably the most popular Proposition Bets, the Hard 6
					& 8 start getting up there in terms of the house edge. They pay 9:1.
				</li>
				<li>
					<span>11.11% - Hard 4 or 10 - </span>The Hard 4 & 10 are on par with many other bets.
					While not quite as good as the Hard 6 & 8, they are still very popular. They pay 7:1.
				</li>
				<li>
					<span>11.11% - Straight Ace Deuce/Yo - </span>All the Straight Up bets are fun because
					they pay the most on the table. These two are better than the Aces/Twelve in terms of the
					house edge. They pay 15:1.
				</li>
				<li>
					<span>11.11% - Non-pair Hops - </span>All the <Link text="Hop Bets" href="hop-bets" /> that
					are not a pair pay the same as the Ace Deuce and Yo. They pay 15:1.
				</li>
				<li>
					<span>11.11% - Any Craps - </span>Any Craps is used mainly for hedging Pass Line and Come
					bet, but players still bet randomly all the time. It pays 7:1.
				</li>
				<li>
					<span>11.11% - C & E - </span>The Any Crap and Eleven combo. Very popular bet because you
					can bet different amounts on each the <Link text="C and the E" href="c-and-e" /> as well as
					split it for one amount. It pays 3:1 if any of the Craps roll and 7:1 if the Yo rolls.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="eight-dollar-horn-bet"
			title="Eight Dollar Horn"
			alt="Eight dollar horn."
		/>
		<Divider />
		<BlogH2 id="worstBets" title="The Worst Bets on the Craps Table">
			<p class="pb-4">
				While some of these bets have the highest advantage for the casino, they offer the highest
				payouts available making them very popular regardless of edge.
			</p>
			<ol>
				<li>
					<span>12.22% - Horn High Ace Deuce/Yo - </span>These Horn Highs are a little better than
					the other two because the house edge on Straight Ace Deuce/Yo is lower than the
					Aces/Twelve. They pay 27:5 for a direct hit, 26:5 if the high side hits, and 11:5 if the
					opposite low side hits.
				</li>
				<li>
					<span>12.50% - Horn - </span>The <Link text="Horn" href="horn" /> is right in the middle of
					the Horn Highs regarding the house edge. Popular to many, it pays 27:4 if the high side rolls
					and 3x the bet for the low side.
				</li>
				<li>
					<span>12.78% - Horn High Aces/Twelve - </span>These two Horn Highs have more money on bets
					with a lower house edge which is why it doesn’t pay as well as the other two. They pay
					57:5 for a direct hit, 26:5 is the opposite high side hits, and 11:5 if the low side
					rolls.
				</li>
				<li>
					<span>13.33% - World - </span>Add an Any 7 to a Horn and you now have <Link
						text="a World"
						href="world"
					/>. It remains a classic bet during the Comeout Roll and is adored by both dealers and
					players. It pays 26:5 on the high side, 11:5 on the low side, and is a push when the 7
					rolls.
				</li>
				<li>
					<span>13.89% - Straight Aces/Twelve - </span>The High and the Low. They have a horrible
					house edge but pay more than anything else on the table, so players go crazy for them..
					They pay 30:1.
				</li>
				<li>
					<span>13.89% - Hop any Hardway - </span>The four <Link
						text="Hopping Hardways"
						href="hop-bets"
					/> are just as bad as the High and the Low in terms of the house edge, yet they pay so much.
					Not enough, but a lot at 30:1.
				</li>
				<li>
					<span>16.67% - Any Seven - </span>The <Link text="Any Seven" href="any-seven" /> is the worst
					bet on the Craps table if you want to talk about numbers. Don’t get me wrong, it serves its
					purpose for many, but it’s not that good at all. It pays 4:1.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				In Craps, the house edge varies significantly across different types of bets, from 0.00% for
				Odds to as high as 16.67% for the Any Seven. While bets like Pass Line and Don't Pass offer
				a balance of low risk and decent reward, others like the Hardways or Horn Highs are for
				those seeking higher risk for higher reward.
			</p>
			<p>
				So, what should be your next move? If you're new to Craps, start with low-house-edge bets
				like Odds or Pass Line to get a feel for the game. As you gain confidence, you can venture
				into more complex bets, always keeping the house edge in mind.
			</p>
		</section>
	</main>
</BlogLayout>
