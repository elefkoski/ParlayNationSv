<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Craps Order of Operation';
	let description: string =
		'Discover the critical order of operations at the Craps table with our detailed guide. Learn stick calls and betting sequences to anticipate dealer actions and optimize your strategy.';
	let url: string = 'craps-order-of-operation';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'What Are the Stick Calls',
			href: '#stickCalls',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Order of Operation - Pass & Don't Pass",
			href: '#oOoPassDont',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Order of Operation - Place & Come Bets',
			href: '#oOoPlaceCome',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Order of Operation - Don't Come and Overlays",
			href: '#oOoDcOverlays',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Order of Operation - Paying Proposition Bets',
			href: '#oOoProps',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Order of Operation - Betting Importance',
			href: '#oOoBetting',
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
  "headline": "Order of Operation At the Craps Table",
  "description": "A detailed guide to understanding the sequence of actions following a stick call in Craps, aiming to enhance player awareness and gameplay fluidity.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/craps-order-of-operation",
  "image": "http://parlaynation.com/images/craps-order-of-operation/craps-order-of-operation-header.webp",
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
    "@id": "http://parlaynation.com/craps-order-of-operation"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Stick Calls Explained",
      "description": "An introduction to stick calls in Craps and their significance in guiding the game's flow.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Function of Stick Calls",
          "description": "Detailed explanation of how stick calls instruct dealer actions and maintain order at the Craps table."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Order of Operation for Specific Bets",
      "description": "A breakdown of the specific order in which bets are paid and collected at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Pass Line and Don’t Pass Bets",
          "description": "Illustrating the procedure for paying out Pass Line and Don’t Pass bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Place Bets and Come Bets",
          "description": "Explaining the sequence of actions for paying Place and Come bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don’t Come and Overlays",
          "description": "Detailing the order for paying Don’t Come bets and Overlays."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Proposition Bets",
          "description": "Outlining the payment order for Proposition bets based on where the dice land."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Importance of Betting Order",
      "description": "Guidance on prioritizing bets to ensure strategic play and maintain balance at the table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Priorities",
          "description": "Recommendations for the sequence of making bets to maximize potential winnings and manage risks."
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
			title="Order of Operation At the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				We all know craps can be overwhelming. Between the rapid stick calls and the flurry of
				betting actions, it's easy to lose track. This guide aims to be your anchor, offering a
				comprehensive understanding of how a stick call guides the dealers and the order in which
				bets are paid. If you can figure out the Order of Operation you’ll be able to anticipate
				what is going to happen and <Link text="be ready" href="be-an-efficient-craps-player" /> for
				when it’s your turn, allowing the game to develop a flow.
			</p>
			<p class="pb-4">
				We’ll walk you through a sample stick call, explaining how it leads to specific actions like
				paying out on the <Link text="Pass Line" href="pass-line-basics" /> or collecting losing bets.
				You’ll get the hang of not only what's happening but also why it's happening with each call and
				action. And whether you're the first or last to be paid, understanding the stick calls will give
				you a clearer path through the game.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="third-base-hook-looking-at-craps-layout"
			title="Third Base Hook Looking At Craps Layou"
			alt="Third base hook looking at craps layout."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="stickCalls" title="What Are the Stick Calls">
			<p class="pb-4">
				After the dice land in a game of craps, the stickperson makes a call that is known as a
				"stick call”. They call out the number that was rolled and then instruct the base dealer on
				what action to take in a specific order. For novice dealers, stick calls are essential,
				reminding them of their actions whenever they tend to freeze up.
			</p>
			<p class="pb-4">
				Let's consider a stick call made when a 7 is rolled during the <Link
					text="Comeout Roll"
					href="the-stages"
				/>. This is the full stick call and how I would say it at a Craps table if I knew the base
				dealer had to complete all these actions after the roll:
			</p>
			<p class="pb-4 font-bold">
				“Seven, winner seven, front line winner, take the don’ts, no field, pay the line, all
				working bets have action, save odds, pay behind.”
			</p>
			<ol class="pb-4">
				<li>
					<span>“Seven, winner seven, front line winner” - </span>Let everyone know what happened;
					everyone on the front line (Pass Line) won.
				</li>
				<li>
					<span>“… take the don’ts” and “… no field”- </span>Take the two losing self-service bets –
					the Don’t Pass and the Field.
				</li>
				<li><span>… pay the line” - </span>The ‘line’ is referring to the Pass Line.</li>
				<li>
					<span>“… all working bets have action” - </span>Take down all losing bets that were
					working. If the Player has any bets that are normally ‘off’, like Hardways or <Link
						text="Odds for a
					Come bet"
						href="come-bet-odds"
					/>, that are turned ‘on’, they will lose.
				</li>
				<li>
					<span>“save odds” - </span>Return bets with no action. Since the Odds on a Come bet are
					‘off’ during the Comeout Roll, they will be saved (returned), and the flat bet will lose.
				</li>
				<li>
					<span>“… pay behind” - </span>Pay the Don’ts that won. These are the <Link
						text="Don’t Come"
						href="dont-come"
					/> and <Link text="Overlay" href="overlays" /> bets that are located in the boxes ‘behind’
					the Place bet boxes. These bets win when the 7 rolls, so they get paid.
				</li>
			</ol>
			<p class="pb-4">
				Experienced dealers do not need to say the entire stick call as they are already aware of
				what to do. It is more intended for novice dealers who require a little guidance. Also, if
				these bets are not being placed, then the entire call is unnecessary. There is a different
				stick call for each outcome of the dice during the Comeout Roll, the Intermediate Roll, and
				the Decision Rolls.
			</p>
			<p class="pb-4">
				95% of the time, all losing bets will be taken first, and the winners will be paid
				afterward. Taking an established Come bet during the Comeout Roll is the exception to the
				rule. When the 7 rolls, we return the Odds, pay the Don’ts, and then pick up the dead Come
				Bets.
			</p>
			<p>
				With that in mind, the order of operation for paying the rest of these bets involves taking
				all the losing bets before paying the winning bets. In all instances where there is a player
				bet and a dealer bet that wins, the player will always get paid first.
			</p>
		</BlogH2>
		<Divider />
		<BlogH2 id="oOoPassDont" title="Order of Operation for Pass & Don't Pass">
			<p class="pb-4">
				The Pass and Don’t Pass Bets are first to be taken care of when it comes time to pay.
			</p>
			<ul class="pb-4">
				<li>
					<span>Base to Stick - </span>When paying the Pass Line and the Don’t Pass, the dealers
					will always pay starting with the person closest to base and work towards the Stickperson.
					The player next to the Stickperson is the last to get paid.
				</li>
			</ul>
			<p>
				If Odds are behind the Pass Line, <Link text="the Odds" href="pass-line-odds" /> will be paid,
				then the Pass Line. The same applies to Lay Odds for the Don’t Pass. Lay Odds get paid, then
				the Don’t Pass.
			</p>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="second-base-up-close-pass-and-dont-pass-bets"
			title="Second Base Up Close Looking At Pass & Don't Pass Bets"
			alt="Second base up close looking at pass and don't pass bets"
		/>
		<Divider />
		<BlogH2 id="oOoDcOverlays" title="Order of Operation for Place & Come Bets">
			<p class="pb-4">
				Place and Come bets are normally paid during the Intermediate Roll but during the Comeout
				Roll you can have a “working” Place Bet or an established Come Bet.
			</p>
			<ol>
				<li>
					<span>Order of Operation For Paying Come Bets</span>
					<ul>
						<li>
							<span>Stick to Base - </span>Just like Place bets, Come bets are paid starting with
							the player next to the Stickperson and working down toward base.
						</li>
					</ul>
				</li>
				<li>
					<span>Order of Operation For Paying Place Bets</span>
					<ul>
						<li>
							<span>Stick to Base - </span>The player next to the Stickperson is the first to get
							paid on Place Bets, while next to base is the last. BUYs are considered Place Bets
							when using order of operation, so those players will fall in line with the other Place
							bet bettors.
						</li>
					</ul>
				</li>
				<li>
					<span>Order of Operation For Paying Both Come Bets and Place Bets</span>
					<ul>
						<li>
							<span>Come then Place - </span>It’s a little tricky, but you take care of all the
							players who have Come Bets, stick to base, then return to the player next to stick and
							pay all the Place bets, stick to base.
						</li>
					</ul>
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="oOoDcOverlays" title="Order of Operation for Don't Come and Overlays">
			<p class="pb-4">
				When it comes time to pay <Link text="Don’t Come and Overlays" href="the-donts" />, it means
				there was a 7-out during the Intermediate Roll or a 7-winner during the Comeout Roll.
			</p>
			<ol>
				<li>
					<span>Order of Operation For Paying Don’t Come bets</span>
					<ul>
						<li>
							<span>Base to Stick - </span>the player closest to the base dealer gets paid first
							moving toward the Stickperson.
						</li>
					</ul>
				</li>
				<li>
					<span>Order of Operation For Paying Overlays</span>
					<ul><span>Base to Stick - </span>Lay Odds are paid in order with Don’t Come bets.</ul>
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="oOoProps" title="Order of Operation for Paying Proposition Bets">
			<p class="pb-4">
				Proposition Bets can be paid on any roll because you can bet them at any time and they are
				always working.
			</p>
			<ol>
				<li>
					<span>Side Dice Land On - </span>The side of the table the dice land on is the side of the
					table that gets paid first. The shooters’ side of the table gets paid second.
				</li>
				<li>
					<span>Base to Stick - </span>Like winning Pass and Don’t Pass bets, Proposition bets get
					paid starting with the player closest to the base dealer and then working their way toward
					the player next to the stickperson.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="pass-line-paid"
			title="The Pass Line Paid"
			alt="The pass line paid."
		/>
		<Divider />
		<BlogH2 id="oOoBetting" title="Order of Operation for Betting Importance">
			<p class="pb-4">
				Players get so caught up thinking about betting one thing that they’ll forget to bet
				another. Such as players waiting in line to get their Place bets set up, and as soon as they
				get through the line, they sit back and relax, therefore missing their Odds bet. Or they are
				thinking so much about the Hardways that they forget to make a Place bet.
			</p>
			<p>
				If you’re going to be paid on a bet, you want to ensure the best bets are set up first, then
				follow down the line.
			</p>
			<ol>
				<li>
					<span>Make the Pass or Don’t Pass Bet - </span>The Don’t Pass is ranked 2 and the Pass
					Line is ranked 3 as the best bets on the table and are required to make the Odds bet.
				</li>
				<li>
					<span>Bet Odds or Lay Odds - </span>These are the best bets on the table and in the
					building. They have no advantage for the casino.
				</li>
				<li>
					<span>Bet Come or Don’t Come bets - </span>Just as good at the Pass and Don’t Pass because
					they win and lose the same way.
				</li>
				<li>
					<span>Make your Place Bets - </span>The best ones are the 6 & 8. So you know, placing the
					4 & 10 isn’t really that great; the Field is a better bet. But buying the 4 &10 is a
					different story – those are great bets.
				</li>
				<li>
					<span>Bet any Overlays - </span>These are some top-level bets no matter which number you
					decide to Overlay.
				</li>
				<li>
					<span>Bet the Field - </span>Of all the bets you can make on the table, <Link
						text="the Field"
						href="the-field"
					/> is not the worst but not near the most important when it’s crunch time to make bets.
				</li>
				<li>
					<span>Bet your Hardways - </span>Of all the one-roll Propositions, the Hardways are the
					best.
				</li>
				<li>
					<span>Bet the rest of the Propositions - </span>These should be the least of your
					concerns. If you’re running out of time and you have to choose between making a
					Proposition bet and any other type of bet, you should go with the other bet.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Stick calls and betting order in Craps are far from random; they are designed to maintain a
				smooth and fair game. From taking all losing bets first to paying all the winners, each
				procedure has its purpose. Knowing these procedures is essential not just for dealers but
				also for players to navigate the game efficiently.
			</p>
			<p>
				When you finally understand the dealer's workflow, you can watch the game on a completely
				different level. You can notice when you’re about to be paid, how much time you have left to
				make a bet, and when the game is slowing down. Additionally, you can notice when the
				Stickperson sends the dice, and balances that timing with the payments of the base dealer.
				This deeper understanding of the game adds another level of flow and appreciation to playing
				Craps.
			</p>
		</section>
	</main>
</BlogLayout>
