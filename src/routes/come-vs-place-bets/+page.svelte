<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/components/blog/Blog-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Come VS Place Bets';
	let description: string =
		'Explore the strategic nuances of Come and Place bets in Craps with our guide. Learn how to leverage their advantages for your gameplay style, ensuring you make informed decisions at the table.';
	let url: string = 'come-vs-place-bets';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'Advantages of a Come Bet',
			href: '#comeBetAdvantages',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Disadvantages of a Come Bet',
			href: '#comeBetDisadvantages',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Advantages of a Place Bet',
			href: '#placeBetAdvantages',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Disadvantages of a Place Bet',
			href: '#placeBetDisadvantages',
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
  "headline": "The Rivalry of Come and Place Bets",
  "description": "A comprehensive exploration of Come and Place bets in Craps, highlighting the strategic considerations, advantages, and disadvantages of each bet type.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/come-vs-place-bets",
  "image": "http://parlaynation.com/images/come-vs-place-bets/come-vs-place-bets-header.webp",
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
    "@id": "http://parlaynation.com/come-vs-place-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Advantages of a Come Bet",
      "description": "Exploring the benefits of Come bets, including their low house edge and the option to add free Odds, enhancing potential winnings.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strategic Benefits",
          "description": "Details on how Come bets provide strategic advantages, like minimizing losses and leveraging the low house edge."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Disadvantages of a Come Bet",
      "description": "A look into the challenges and considerations when placing Come bets, including their contract nature and the requirement for the bet to hit twice.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Considerations for Players",
          "description": "Insight into the potential downsides of Come bets, highlighting the risks involved with their continuous action and the necessity for strategic play."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Advantages of a Place Bet",
      "description": "Outlining the advantages of Place bets, such as their flexibility in betting, the ability to press or take down bets, and their straightforward approach.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Flexibility and Control",
          "description": "Exploring how Place bets offer players control over their bets with the option to adjust betting strategies on the fly."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Disadvantages of a Place Bet",
      "description": "Examining the disadvantages of Place bets, including their higher house edge on certain numbers and the potential for players to chase losses.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Risks and Limitations",
          "description": "Analysis of the cons associated with Place bets, such as the increased house edge and the behavioral pitfalls they may encourage."
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
			title="The Rivalry of Come and Place Bets"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Craps is as much about strategy as it is about luck. One minute you’re raking in the chips
				with a hot streak, and the next, you're regretting your choice between <Link
					text="a Come Bet"
					href="come-bet-basics"
				/> and a Place Bet. If you’ve ever been caught in this dilemma, you're not alone.
			</p>
			<p class="pb-4">
				This guide aims to clear up the ongoing debate between Come and
				<Link text="Place Bets" href="place-bet-basics" />. By the end, you'll have a nuanced
				understanding that will help you make the best bet for your style of play.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="place-bet-on-point-five"
			title="Place Bets and COME Betting Area"
			alt="Place bets and the come betting area"
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="comeBetAdvantages" title="Advantages of a Come Bet">
			<p class="pb-4">
				The Come bet is a traveling Pass Line during the Intermediate Roll. While in the COME, they
				win and lose the same as the Pass Line; otherwise, they travel into a Point, and then you
				can add Odds. Mathematically, Come bets are superb bets.
			</p>
			<ol>
				<li>
					<span>Very Low House Edge - </span>The Come bet has the same house edge as <Link
						text="the Pass Line"
						href="pass-line-basics"
					/>, making it tied for the second-best bet on the Craps table, not including Odds/Lay
					Odds.
				</li>
				<li>
					<span>Free Odds - </span>Odds have no advantage for the casino, so being able to add them
					to your Come bet lowers the house edge even more.
				</li>
				<li>
					<span>Point 7 Minimum Loss - </span>The Point 7, when a shooter establishes a Point then
					immediately rolls a 7, is the worst roll you can have. Making a Come bet during that 7-out
					lets you win a bet while losing your Pass Line, making your loss the minimum loss.
				</li>
				<li>
					<span>You Don’t Pick the Number - </span>You can’t get mad at yourself for losing money if
					the dice chose the wrong number to travel to.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="come-bets-on-point-five"
			title="Come Bets on the Point Five"
			alt="Come bets on the point five."
		/>
		<Divider />
		<BlogH2 id="comeBetDisadvantages" title="Disadvantages of a Come Bet">
			<p class="pb-4">
				Many new players can’t wrap their heads around Come bets. Knowing they are mathematically
				better, even seasoned players will choose not to play them because there are so many
				disadvantages.
			</p>
			<ol>
				<li>
					<span>Short Rolls - </span>After establishing a Point, the shooter may throw a couple of
					boxes, lining up several <Link text="Come bet w/Odds" href="come-bet-odds" />. If the
					shooter then 7s out, you will have lost the maximum amount of money.
				</li>
				<li>
					<span>Come Bets are Contract - </span>Once a Come bet moves into a Point, you cannot take
					it back or turn it off. Like the Pass Line, it must be resolved by rolling its’ Point or a
					7.
				</li>
				<li>
					<span>Come Bets Always Work - </span>You always risk losing your established Come bets to
					the roll of a 7. Some players do not wish to be forced into that much risk at all times.
				</li>
				<li>
					<span>More Expensive - </span>To take full advantage of Come Bets, you should max your
					Odds bet. This turns a cheap bet into an expensive one.
				</li>
				<li>
					<span>Must Hit Twice - </span>First, a number rolls and the Come bet moves to its’ Point,
					then that number must roll again for you to get paid. It’s hard enough to have the number
					once, right?
				</li>
				<li>
					<span>Pays Even Money - </span>Even money is for suckers. It applies in Blackjack and
					Craps. The Come bet's full value lies in getting paid for Odds.
				</li>
				<li>
					<span>You Don’t Pick the Number - </span>It’s not up to you where you’re Come bet travels
					to. It could be fours and tens all night, causing you to shake your head every time.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="placeBetAdvantages" title="Advantages of a Place Bet">
			<p class="pb-4">
				Place bets are the preferred bet by players because of their flexibility and minimal cost.
				The fact that they are not contracted leaves the possibilities endless.
			</p>
			<ol>
				<li>
					<span>Low Cost - </span>You don’t have to add anything extra to a Place bet, making your
					investment much smaller than a Come bet with Odds.
				</li>
				<li>
					<span>Reduce or Take Down - </span>Taking risk off the table should be a comfort to the
					players. If your gut tells you something is wrong, you can take your money back or reduce
					it to a minimal amount.
				</li>
				<li>
					<span>Presses - </span>This is where you can learn how to add money to your existing bets.
					<Link text="Pressing" href="presses" /> is fun; it’s creative, and the possibilities are endless.
				</li>
				<li>
					<span>Move It Around - </span>If another number is hot and you don’t want to add more
					money to the table, you can move it anytime.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="place-bets-point-six"
			title="Place Bets on Point Six"
			alt="Place bets on the point six."
		/>
		<Divider />
		<BlogH2 id="placeBetDisadvantages" title="Disadvantages of a Place Bet">
			<p class="pb-4">
				The disadvantages are there, so don’t think Place bets are all upside. The problem is
				getting your money back. You can quickly spread yourself thin and get into some trouble.
			</p>
			<ol>
				<li>
					<span>House Edge - </span>The house edge on the 6 & 8 is almost as good as a Come bet, but
					when you get to Placing the 4 & 10, the house edge starts to get pretty bad.
				</li>
				<li>
					<span>Understanding the Nuances - </span>You must understand commission when dealing with
					<Link text="buys on the 4 & 10" href="buying-place-bets" /> and know the proper Place bet amounts
					for the 6 & 8. When you get into Spread Bets, variations involved with different Points and
					different units, you can get overwhelmed.
				</li>
				<li>
					<span>Point 7 Max Loss - </span>When you’re making a Pass Line with Odds, a couple of
					Place bets, and the shooter immediately throws a 7, you’re in for a considerable loss. A
					few times of that, and you can be broke.
				</li>
				<li>
					<span>Induces Chasing - </span>Players will watch a number roll 3, 4, or 5+ times and then
					think it’s an excellent time to bet on that number. Most of the time, it never rolls
					again.
				</li>
				<li>
					<span>Move It Around - </span>I don’t know if you’ve ever played whack-a-mole but watching
					players chase numbers by moving a single bet is entertaining. They will move a single bet
					to a number that keeps rolling then the dice will land on the number they just moved it
					from.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Whether you’re in the camp of Place or Come bets, players will not bother each other over
				the choice. Many people will use the math argument to say that Come bets are better, and
				from a long-term <Link text="expected return" href="rank-of-craps-bets" />, they may be
				correct, but in a game where players’ emotions come into play, Place bets are too flexible
				to let go of.
			</p>
			<p>
				So, you've learned the advantages and disadvantages of Come and Place bets in Craps. But
				have you considered how these bets fit into your overall Craps strategy? Each bet type has
				its own set of opportunities and limitations, so choose the one that aligns with your game
				plan.
			</p>
		</section>
	</main>
</BlogLayout>
