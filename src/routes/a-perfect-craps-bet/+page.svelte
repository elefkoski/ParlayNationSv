<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogH3 from '$lib/clients/components/blog/BlogH3.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Make the Perfect Craps Bet';
	let description: string =
		'From novice to Craps betting pro: A comprehensive guide to making the perfect bet, understanding when and how to bet for strategic gameplay.';
	let url: string = 'a-perfect-craps-bet';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'Anatomy of a Good Bet',
			href: '#goodAnatomy',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Placing Self-service Bets',
			href: '#selfService',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Bets With the Base Dealers',
			href: '#betsWithDealers',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Taking Your Bets Back',
			href: '#betsBack',
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
  "headline": "How to Make the Perfect Craps Bet",
  "description": "A detailed guide on enhancing betting efficiency and strategy at the Craps table, covering everything from the anatomy of a good bet to specific betting techniques.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/a-perfect-craps-bet",
  "image": "http://parlaynation.com/images/a-perfect-craps-bet/a-perfect-craps-bet-header.webp",
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
    "@id": "http://parlaynation.com/a-perfect-craps-bet"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Anatomy of a Good Bet",
      "description": "The four essential criteria that make a bet good in Craps.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Proof of Money",
          "description": "Showing the dealer you have enough money for the bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bet Amount",
          "description": "Being specific about the amount you want to bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bet Type",
          "description": "Knowing exactly what bet you want to place."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Bet is Booked",
          "description": "Ensuring the dealer repeats back your bet to confirm it."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Placing Self-service Bets",
      "description": "Bets that players are responsible for placing themselves.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Self-service Bet Types",
          "description": "Includes Pass Line, Don't Pass, Pass Line Odds, Don't Pass Lay Odds, Come bets, Don't Come bets, and the Field."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "How to Make Bets With the Dealers",
      "description": "Guidance on interacting with base dealers and the Stickperson for non-self-service bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bets With the Base Dealer",
          "description": "Details on making Place Bets, Buys, and other bets with the base dealer."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bets Made with The Stickperson",
          "description": "Instructions on making Proposition bets with the Stickperson."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Throwing Bets to the Stickperson",
      "description": "Tips on how to skillfully toss chips to the Stickperson for betting.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Throwing 1 chip",
          "description": "Technique for throwing a single chip to the Stickperson."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Throwing 2+ chips",
          "description": "Advice on tossing multiple chips as a block to avoid disruption."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Taking Your Bets Back",
      "description": "Understanding which bets can and cannot be taken back.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Can Not Be Taken Back",
          "description": "Explains bets that are locked in, such as the Pass Line and Come Bets after a point is established."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Can Be Taken Back",
          "description": "Details on bets that can be withdrawn or adjusted, including Don't Pass and all other non-contract bets."
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
			sectionTitle="Improve Your Game"
			title="How to Make the Perfect Craps Bet"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				There is a finesse in betting when it comes to playing Craps. You may have found yourself
				baffled by puzzling bet amounts or the nuances of where to place your bets. This guide is
				designed to enhance your betting efficiency and speed by clarifying what defines a good bet,
				when to place it, how to execute it, and with whom to place it.
			</p>
			<p class="pb-4">
				From understanding the anatomy of a good bet to learning how to toss bets to the
				Stickperson, we've got it all covered. We'll also go over the bets you can take back and
				those set in stone, making sure you stay flexible in your betting strategy.
			</p>
		</section>
		<Divider />
		<BlogImg caption="" {url} img="here-is-an-image" title="ImageTitle" alt="ImageAlt" />
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="goodAnatomy" title="Anatomy of a Good Bet">
			<p class="pb-4">
				First, you need to know what makes a good bet. There are four requirements that all need to
				be fulfilled in order for a bet to be good.
			</p>
			<ol>
				<li>
					<span>Proof of Money - </span>There are no Call Bets in Craps, meaning you must show the
					dealer you have enough money for the bet. If chips are sitting in the rail, then you are
					fine. If you just walked up or are in the middle of a rebuy, hold the chips or cash in the
					air or put it in the rail. Don’t tell me, “I’m good for it. It’s in my wallet.” then go
					fishing around while the shooter has the dice. Be ready before you ask for anything.
				</li>
				<li>
					<span>Bet Amount - </span>Know the amount you want to bet. If you leave it ambiguous, such
					as dropping a quarter and asking to place the 6, we won’t know how much you want. It can
					be $12, $18, or $24, or you may mean to bet five units which is $30. You need to be
					specific. When betting the same amount on multiple numbers, use “each”: ”$2 each
					three-way-crap”, “$15 each 5 and 9”, or “Nickel each Hardways.”
				</li>
				<li>
					<span>Bet Type - </span>Be sure about what it is you want. You see other people betting on
					things and want to join, but don’t guess. If you throw the Stickperson money and say, “ $8
					on the Hard 4’s”, they’re going to look at you clueless. Did you mean the Hard 4, or the
					Hard 8, which is a picture of two 4’s? You can listen to or ask the other players if
					you're unsure what it is called. The dealers will answer your questions as well.
				</li>
				<li>
					<span>Bet is Booked - </span>A booked bet is a bet that has been repeated back to you by
					the dealer. They will repeat back to you how much you want and where, so we’re all on the
					same page. They may also use the phrase “Bet” in a pinch to signify they heard what you
					wanted and will take your action. If the dealer does not repeat your bet, keep saying it
					until they do. Tell the box, Stickperson, or base dealer, whoever will listen.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="selfService" title="Placing Self-Service Bets">
			<p class="pb-4">
				While many bets will be given to the dealer, self-service bets are a group of bets you’re
				responsible for. Everything from the COME towards the rail is self-service. You place these
				bets yourself and are responsible for collecting the winnings when they win. If you happen
				to leave the money on the bet and another roll goes by, it will be considered a bet. It’s
				also your responsibility to make sure the other players don’t accidentally pick up your
				money.
			</p>
			<p>Self-service bets only made during the Comeout Roll:</p>
			<ol>
				<li>
					<span>Pass Line - </span>You must place your bet on the Pass Line in front of where you’re
					standing. Some casinos may let you come down on the Pass Line during the Intermediate
					Roll, after the point is established, but it’s not in your best interest, Your’e more
					likely to win on the Pass Line during the Comeout Roll than the Intermediate Roll. You
					should always wait until the next Comeout Roll to make your bet on the Pass Line.
				</li>
				<li>
					<span>Don't Pass - </span>The Don’t Pass bet is also put in front of where you are
					standing but under no circumstances can you ever add to your Don’t Pass bet after a Point
					is established. You may take your bet down but, once taken off the Don’t Pass, you can’t
					come back until the next Comeout Roll.
				</li>
			</ol>
			<p class="pt-4">Self-service bets only made during the Intermediate Roll:</p>
			<ol>
				<li>
					<span>Pass Line Odds - </span>Odds are an additional bet you can make that go behind your
					Pass Line bet, about a two-finger width distance away. I tell players as soon as the Puck
					turns ON you should always add your Pass Line Odds, then worry about Place and Proposition
					bets.
				</li>
				<li>
					<span>Don't Pass Lay Odds - </span>Lay Odds are a two-finger width distance away from your
					Don’t Pass bet. They are placed on the side closest to the base dealer and heeled off.
				</li>
				<li>
					<span>Come Bets - </span>Come bets are placed in the COME right in front of yourself. Try
					to always place your Come bets in the same spot every time. Players frequently mix up
					which Come bet is who’s.
				</li>
				<li>
					<span>Don't Come Bets - </span>The Don’t Come is near the corner of the table next to the
					base dealer. Not too many players bet the Don’t Come so you shouldn’t have a problem
					getting your bet mixed with anyone else.
				</li>
			</ol>
			<p class="pt-4">This self-service is the only bet you can make at any time:</p>
			<ol>
				<li>
					<span>The Field - </span>The Field can be bet at any time, but you must be vigilant in
					watching your bet. Bets getting mixed up in the Field is a common occurrence, so put your
					bet in the same spot every time to not get confused with other players’ money.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="betsWithDealers" title="How to Make Bets With the Dealers">
			<p class="pb-4">
				Both the base dealer and Stickperson receive non-self-service bets, but have different
				methods of accepting them.
			</p>
			<BlogH3 title="Bets With the Base Dealer"
				><p class="pb-4">
					The base dealer will take bets that go in the large numbered boxes. Each Point number has
					two boxes. The big one holds: Place, Buys, Come, Come Odds, and dealer bets. The small box
					behind it holds Don’t Come, Lay Odds, and Overlays.
				</p>
				<p class="pb-4">
					During the Intermediate Roll, the base dealers receive most of the bets from the players.
					Once the Puck turns to ON, the dealers attend to the players on a first-come, first-served
					basis. If you manage to get the attention of the dealer quickly, you can place your bets
					first and then relax. However, if you are not quick enough, you will have to wait until
					the dealer is ready to take your bets.
				</p>
				<ol class="pb-4">
					<li>
						<span>Place Bets and Buys - </span>You make Place Bets and Buys during the Intermediate
						Roll by putting your money in the COME and informing the dealer which bets you want. If
						you want to bet on multiple numbers simultaneously, you can use Spread bets. It's
						important to note that the Place bets made during the Comeout Roll remain off unless
						called on.<br />Presses are another form of Place bet betting. Instead of getting paid
						for a winning bet and then handing some back when you want to bet more, you tell the
						dealer before they pay you how much more you want to add to your existing bet.
						<ul>
							<li>
								<span>One Unit - </span>Saying “One unit” increases your bet by $5 on the 4, 5, 9, &
								10, and $6 on the 6 & 8. At higher levels, a unit can be $25 on the 4, 5, 9, & 10,
								and $30 on the 6 & 8.
							</li>
							<li>
								<span>Press - </span>A press doubles the current amount on your bet. If you had $24
								on the 6, saying “Press” would bring your bet to $48.
							</li>
							<li>
								<span>Full Press - </span>Saying “Full press” will take everything you won on your
								bet and put as much of it as possible back on the bet.
							</li>
						</ul>
					</li>
					<li>
						<span>Come Bet Odds - </span>Odds for a Come bet are placed in the COME and told to be
						put on a Come bet. They are off during the Comeout Roll unless you ask them to work.
					</li>
					<li>
						<span>Don't Come Lay Odds - </span>Lay Odds for a Don’t come bet are also placed in the
						COME. Lay Odds are always working unless you ask them to be taken down. You can not turn
						them off.
					</li>
					<li>
						<span>Overlays - </span>An Overlay is when you bet directly against a number. They are
						always working as well and can not be turned off; you must take them back. You also put
						these bets in the COME while telling the dealer which bet you want.
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="Bets Made With the Stickperson">
				<p class="pb-4">
					When you decide to make a Proposition bet, give your money to the Stickperson to set up.
					If you happen to be standing within arms reach of the dealer, you can drop your chips on
					the layout next to where they’re standing. If you’re farther away then you’re going to
					have to toss 'em to the Stickperson.
				</p>
				<p class="pb-4">
					It's important to note that immediately after the Comeout Roll, the Stickperson will stop
					the game and ask both sides of the table which Proposition bets they want. This is handled
					on a first-come, first-serve basis, and the Stickperson has to manage both sides of the
					table, so be quick to make your bet when you see them collecting Propositions on your
					side.
				</p>
			</BlogH3>
			<BlogH3 title="Throwing Bets to the Stickperson">
				<p class="pb-4">
					This is a tricky skill. Most players will end up splashing the chips or have them roll all
					over the table, but with practice, throwing chips becomes a skill worth learning. This
					seems impossible to explain on paper but let’s give it a shot.
				</p>
				<ol>
					<li>
						<span>Throwing 1 chip - </span>Hold a chip between your thumb and ring finger while only
						touching the the thin border (3mm wide), not the broad side (39mm wide). The chip should
						be perpendicular to your fingers, not parallel. Now spin the chip counterclockwise while
						dropping it into your other hand from above. This is how you release the chip, but
						instead of dropping it into your hand, use your arm to aim it toward the Stickperson.
					</li>
					<li>
						<span>Throwing 2+ chips - </span>when you toss three or more chips, make eye contact
						with the Stickperson then toss them as a block. If they land on the table; they will end
						up splashing and rolling all over the layout, holding up the game. Some base dealers may
						accept larger quantities of chips meant for the Stickperson in that instance. This block
						is held and tossed in the exact same manner as 1 chip but without the counterclockwise
						spin.
					</li>
				</ol>
			</BlogH3>
		</BlogH2>
		<Divider />
		<BlogH2 id="betsBack" title="Taking Your Bets Back">
			<p class="pb-4">
				Since most bets are not contract bets, you have the option to take them back at any time.
				Here is the list of bets you can and cannot take back.
			</p>
			<p>Can Not Be Taken Back</p>
			<ol>
				<li>
					<span>Pass Line - </span>The Pass Line can not be taken back during the intermediate Roll.
					During the Comeout Roll, you can take back, add to, or subtract from your Pass Line bet.
				</li>
				<li>
					<span>Come Bets - </span>Only after a Come bet has moved into a Point can it not be taken
					back. Before it goes into a Point, a Come bet in the COME can be adjusted in any manner.
				</li>
			</ol>
			<p>Can Be Taken Back</p>
			<ol>
				<li>
					<span>Don't Pass - </span>Once you make a Don't Pass bet, you have the option to take it
					down at any time. However, during the Intermediate Roll, once returned to you, you won't
					be able to put it back. That wouldn’t be in your best interest because, as soon as the
					Intermediate Roll is established, all Don't bets become more likely to win than lose.
				</li>
			</ol>
			<ol>
				<li>
					<span>Don't Come - </span>While you can take the Don’t Come bet back at any time, you
					can’t put it back behind a Point once returned to you. You must make another Don’t Come
					bet.
				</li>
			</ol>
			<ol>
				<li>
					<span>All Other Bets - </span>The rest of the bets on the Craps table can be taken back or
					adjusted in any manner.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Understanding the intricacies of betting in Craps is crucial for both new and experienced
				players. From showing proof of money to knowing your bet type and amount, every detail
				counts. Additionally, it's important to differentiate between self-service bets, which you
				must place yourself, and those you make with the dealers.
			</p>
			<p>
				If you're new to the game, start with simpler bets like the Pass Line and gradually move on
				to more complex ones as you get comfortable. Experienced players, be ready to place your
				bets swiftly during the Intermediate Roll to keep the game moving smoothly. Remember, the
				clearer you are with your bets, the smoother the game will run for everyone involved.
			</p>
		</section>
	</main>
</BlogLayout>
