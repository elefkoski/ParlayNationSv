<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'What Not to Do';
	let description: string =
		'Avoid common Craps pitfalls with our essential etiquette tips. From shooting rules to betting practices and player interaction, we cover everything you need to play confidently and respectfully.';
	let url: string = 'not-to-do-at-craps-table';

	let pageLinks: PageMenu[] = [
		{
			title: 'Not While Shooting',
			href: '#notShooting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Not While Betting',
			href: '#notBetting',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Not With Players',
			href: '#notPlayers',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'What Else Not to Do',
			href: '#notElse',
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
  "headline": "What Not to Do at the Craps Table",
  "description": "A comprehensive guide on craps table etiquette, highlighting common mistakes in shooting, betting, and interacting with others to ensure a respectful and enjoyable game experience.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-06",
  "url": "http://parlaynation.com/what-not-to-do",
  "image": "http://parlaynation.com/images/what-not-to-do/what-not-to-do-header.webp",
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
    "@id": "http://parlaynation.com/what-not-to-do"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "What Not to Do While Shooting",
      "description": "Key rules to follow while shooting to maintain game flow and respect.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Do not go hand to hand with the dice",
          "description": "Avoid passing the dice from one hand to another to prevent unconscious mistakes."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Do not take the dice past the edge of the table",
          "description": "Keep the dice over the layout to avoid disrupting the game."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Do not grab chips with the hand holding the dice",
          "description": "Place your bets before picking up the dice to maintain game integrity."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Do not consistently short roll",
          "description": "Aim to hit the back wall with both dice on every throw to ensure fair play."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Do not throw the dice in the base dealer's working area",
          "description": "Avoid disrupting the placement of bets and the dealer's work."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Do not throw the dice off the glass",
          "description": "Prevent damage to the dice and potential game disruptions."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Do not practice rolling towards the shooting wall",
          "description": "Practice rolls should be directed away from the wall to avoid confusion with actual rolls."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "What Not to Do While Betting",
      "description": "Betting etiquette to ensure a smooth game for players and dealers alike.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Please do not string bet",
          "description": "Communicate all your bets at once to avoid disrupting the dealer's workflow."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Don\'t splash the chips",
          "description": "Place your chips neatly in the betting area to keep the game organized."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Do not reach into the boxes to make or take your bet",
          "description": "Respect the dealer's space and avoid reaching into their working area."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Refrain from betting after the shooter has the dice",
          "description": "Late betting can disrupt the flow of the game; use verbal bets instead."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "What You Shouldn\'t Do With the Other Players",
      "description": "Guidelines for respectful interaction with fellow craps players.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Don\'t tell others how to bet",
          "description": "Avoid advising on bets to prevent awkward situations after a loss."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Avoid badgering",
          "description": "Respect other players' strategies and avoid making condescending comments."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don\'t blame others for superstitions",
          "description": "Resist attributing the outcome of rolls to other players' actions or superstitions."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Do not bother the shooter",
          "description": "Give the shooter space to concentrate during their roll."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Do not throw the dice back on the table",
          "description": "Return the dice carefully to avoid confusion and maintain game integrity."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Please do not knock the dice back in",
          "description": "If the dice bounce off the table, avoid interfering with the roll."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "What Else You Shouldn\'t Do",
      "description": "Additional tips to enhance your craps table etiquette.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Don\'t place your chips next to working stacks",
          "description": "Keep your chips separate from the dealer's to avoid confusion."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Do not ask for partial color",
          "description": "Change chips through gameplay or dealer assistance, not by interrupting the game."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Do not put items in the rail",
          "description": "Keep personal items off the craps table to maintain a clean and organized space."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Buy into the middle of a roll carefully",
          "description": "Be mindful of game flow and timing when buying in to avoid disruptions."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Be understanding if dealers choose to drop their tip",
          "description": "Respect the dealers' decision on tips, recognizing their professional needs."
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
			sectionTitle="Being A Better Player"
			title="What Not to Do At the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Let’s face it: Craps is a fast-paced game, where not just luck, but also etiquette plays a
				significant role. This comprehensive guide aims to educate you on the dos and don'ts at the
				craps table, covering everything from shooting rules to dealing with other players.
			</p>
			<p class="pb-4">
				We examine the cardinal sins of craps: from <Link
					text="switching hands"
					href="better-craps-shooter"
				/> while shooting to disrupting the game with late betting. You'll also find tips on how to interact
				with other players without sparking a feud, and when it's appropriate to tip the dealer. Don't
				just play the game, own it.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="third-base-next-to-base-looking-at-craps-layout"
			title="Third Base Looking At Layout"
			alt="Third base looking at craps layout"
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="notShooting" title="What Not to Do While Shooting">
			<p class="pb-4">
				There are many rules to shooting, but these are the most important. Don’t follow these
				rules, and the dealers will say something.
			</p>
			<ol>
				<li>
					<span>Do not go hand to hand with the dice - </span>Passing the dice from your left hand
					to your right and vice versa is one of the most common mistakes while shooting. If you
					want to change hands, put the dice down on the layout and pick them up with the other
					hand. Picking up the dice with the hand you’re going to shoot with help from unconsciously
					making a mistake.
				</li>
				<li>
					<span>Do not take the dice past the edge of the table - </span>Keep the dice over the
					layout when you’re shooting. Were talking about the inside edge of the table. If the dice
					are over your chips, you’ve gone past the edge.
				</li>
				<li>
					<span>Do not grab chips with the hand you have the dice in - </span>Your bets should be
					set by the time you pick up the dice to throw. Put the dice back on the table if you want
					to continue betting or move bets around.
				</li>
				<li>
					<span>Do not try to consistently short roll - </span>You must try to hit the back wall
					with <Link text="both dice" href="the-dice" /> every time you throw, and is considered a short
					roll if either die does not hit the back wall. Short rolls are still valid rolls, so the dealers
					will still call it.
				</li>
				<li>
					<span>Do not throw the dice in the working area of the base dealer - </span>This is where
					all the <Link text="Place" href="place-bet-basics" /> and <Link
						text="Come bets"
						href="come-bet-basics"
					/> are set up, as well as the dealers working stacks. The dice will send chips flying everywhere
					if they collide with a group of bets, halting the game so they can fix everything.
				</li>
				<li>
					<span>Do not throw the dice off the glass - </span>We’re talking about the mirror which is
					hard enough to wear off the edges and break corners of the dice.
				</li>
				<li>
					<span>Do not practice rolling in a forward manner - </span>Everyone likes to play with the
					dice before they shoot ‘em. This included tiny practice rolls where they let the dice roll
					off their hands onto the layout. You’re allowed to do this, but not toward the wall you’ll
					be shooting to. We don’t want any confusion between what was your practice roll and you’re
					real roll. So, practice rolling toward the opposite wall and the dealers will never bother
					you.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="craps-dice-in-bank"
			title="Craps Dice Resting in Bank"
			alt="Craps dice resting in the bank"
		/>
		<Divider />
		<BlogH2 id="notBetting" title="What Not to Do While Betting">
			<p class="pb-4">
				When playing Craps, it's important to follow certain etiquettes to ensure a good experience
				for everyone at the table. Here are some crucial rules to keep in mind when interacting with
				the dealers and making your bets.
			</p>
			<ol>
				<li>
					<span>Please do not string bet - </span>String betting is when you ask for a bet, the
					dealer sets it up, and then you ask for another. Then do it again. It’s one of the most
					painful experiences a dealer can have with a player. Please tell the dealer all the
					numbers you want <Link text="at once" href="spread-bets" />. If you don’t know the total,
					you can ask the dealer.
				</li>
				<li>
					<span>Don’t splash the chips - </span>When making Place bets, set them in a single pile in
					the COME instead of throwing them where they can end up rolling all over. If you can
					splash with style, then you’re allowed. Splashing two or three chips when throwing them to
					the stickperson is forgivable. Four or more and you’ll probably get a look. Try to catch
					their eye; you want to make it more like toss and catch.
				</li>
				<li>
					<span>Do not reach into the boxes to make or take your bet - </span>This is a huge no-no.
					That is the dealer's working area, and you are not allowed in it. These hold Place bets,
					Come bets, Buy’s, and dealer bets. Want a bet? Please place it in the COME. Want your bet
					back? Ask, and the dealer will give it to you.
				</li>
				<li>
					<span
						>Refrain from reaching in or throwing chips while the shooter has the dice -
					</span>Late betting is the leading cause of trouble on the Craps table. Everyone needs to
					learn how to make a verbal bet. Want $10 in the Field? Say “Ten Field.” Say “Dollar yo.”
					Say “Five Odds” It takes half a second. Faster than you reaching across, throwing a
					cheque, or sneaking them over the edge, I promise.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="notPlayers" title="What You Shouldn't Do With the Other Players">
			<p class="pb-4">
				You can never be sure how people will react to any scenario. When players are losing money,
				which happens every day, they get finicky; it’s best to let them be.
			</p>
			<ol>
				<li>
					<span>Tell them how to bet - </span> A fine line needs to be walked when telling somebody what
					they should do with their money. When it goes opposite your suggestion, it can get awkward.
					It’s okay to help other players but use phrases like “You could always consider…”, or “It may
					be better if….”, and “You don’t have to, but….”
				</li>
				<li>
					<span>Badger in any manner - </span>This is mainly for when players are playing opposite
					you on the table. They need you to lose for them to win, which can sometimes lead to
					resentment. Badgering includes telling people how to shoot or making condescending
					statements after they have a terrible roll.
				</li>
				<li>
					<span>Please don’t blame them for superstitions - </span>There are going to be a fair
					amount of chances for this. “You should have kept the same dice!” “Why did you have to hit
					the chips!” “Why did you put that huge pile of chips there!” “Why did you change your
					throw!” Why, why, why? It doesn’t matter. The dice are going to land the way they want to
					land.
				</li>
				<li>
					<span>Please don’t bother the shooter while they’re shooting - </span>It’s okay to talk to
					the shooter while the dice are in the middle or even while they’re on their way. Once the
					shooter starts to reach down, you must give them the space – mentally, physically,
					emotionally – to help them get in the zone.
				</li>
				<li>
					<span>Do not throw the dice back on the table - </span>If the dice go off the table you
					should put the dice into the palm of the dealer when returning it. If you throw the dice
					back on the table while the shooter throws the other two dice, then we have three dice
					landing at the same time. Not a good scene.
				</li>
				<li>
					<span>Please do not knock the dice back in - </span>If the dice bounce off the table and
					hit you, you should not move at all. If you make a forward motion trying to hit the dice
					back in, it will be considered a no-roll.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="place-bet-on-nine"
			title="Place Bet on Point Nine"
			alt="A place bet on the point nine"
		/>
		<Divider />
		<BlogH2 id="notElse" title="What Else You Shouldn't Do">
			<p class="pb-4">
				Here are some more nuances you should keep in mind. Some of it’s flexible so many dealers
				may never say anything about it. Remember, if the dealer doesn’t say anything, it doesn’t
				mean you shouldn’t do it.
			</p>
			<ol>
				<li>
					<span>Don’t place your chips next to working stacks - </span>This is mainly for the
					players closest to the base dealer because it’s convenient for them. This can cause your
					money to get mixed up with those stacks and accidentally be locked up.
				</li>
				<li>
					<span>Do not ask for partial color - </span>We do not stop the game so you can <Link
						text="color up"
						href="the-stages"
					/>
					unless you are leaving. If you would like to turn lower denomination chips into higher ones,
					you can request the dealer pay you using bigger chips. Another easy way to convert them is
					to use them in your betting, where dealers convert them while setting up or paying bets.
				</li>
				<li>
					<span>Do not put items in the rail - </span>Please refrain from using the rail as a shelf
					for anything besides chips. This usually pertains to cell phones, lighters, cigarettes,
					lucky charms, and food.
				</li>
				<li>
					<span>Buy into the middle of a roll and not make a bet - </span>It's often considered
					impolite by players when someone interrupts a roll to buy in but, if you do, be mindful of
					the timing. If the game is moving slowly, and the dice are sitting in the middle for a
					while, you can probably buy in with no problem. If the dice are moving fast, show the
					money first, verbally declare your bet, and then drop the money after the roll.
				</li>
				<li>
					<span>Get offended if the dealers choose to drop their tip - </span> A fair amount of
					players want dealers to have the same vested interest when it comes to offering a tip. “If
					I win, then you win.” – win and lose together. Many dealers agree with that sentiment, but
					I vote for the toke box. You’re playing a game while I’m worried about <Link
						text="making a living"
						href="tipping-craps-dealers"
					/>. Extend a token of appreciation when you win big, see us putting in effort, or benefit
					from our exceptional service.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				In Craps, dice rolls may be left to chance, but your table etiquette is entirely within your
				control. So, understanding the subtleties of what not to do—from betting etiquette to player
				interactions—will keep you from getting in trouble, and get you one step closer to mastering
				the game.
			</p>
			<p>
				So, what's your next step? Before you find yourself at a Craps table again, take a moment to
				remember these guidelines. Your gameplay will be smoother, and the dealers and other players
				will thank you for it. Not only will you avoid common pitfalls, but you'll also contribute
				to a more enjoyable game for everyone.
			</p>
		</section>
	</main>
</BlogLayout>
