<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogH3 from '$lib/clients/components/blog/BlogH3.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Art of Verbal Betting';
	let description: string =
		'Verbal betting in Craps made easy: Learn to make your bets verbally with precision, avoiding common mistakes for a smoother, more enjoyable game';
	let url: string = 'art-of-verbal-betting';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'If We All Knew',
			href: '#verbalBet',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Anatomy of a Verbal Bet',
			href: '#betAnatomy',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Verbal Betting Gone Wrong',
			href: '#wrongVerbal',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Correct Verbal Betting',
			href: '#correctWay',
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
  "headline": "Betting Verbally at the Craps Table",
  "description": "Exploring the nuances of verbal betting at the Craps table to maintain game flow and avoid disturbing the shooter.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/art-of-verbal-betting",
  "image": "http://parlaynation.com/images/art-of-verbal-betting/art-of-verbal-betting-header.webp",
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
    "@id": "http://parlaynation.com/art-of-verbal-betting"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "The Importance of Verbal Betting",
      "description": "Understanding the critical role of verbal betting in Craps to keep the game's rhythm and not disturb the shooter.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Verbal Betting Basics",
          "description": "Verbal betting involves communicating your bet to the dealer without reaching over the table at the last moment."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Anatomy of a Verbal Bet",
      "description": "The three crucial components of a verbal bet: The Amount, The Bet, and The Confirmation.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Amount",
          "description": "Specifying how much money you want on the bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Bet",
          "description": "Clearly stating which bet you want."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Confirmation",
          "description": "The dealer's confirmation of your bet is essential for it to be valid."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Common Mistakes in Verbal Betting",
      "description": "Examples of what can lead to a 'No bet' situation.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Call Bets without Showing Money",
          "description": "Asking for a bet but not showing the necessary money leads to 'No bet.'"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Vague Bet Specifications",
          "description": "Failing to specify the bet clearly, such as the exact Horn High bet wanted."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Correct Way to Make Verbal Bets",
      "description": "Strategies to avoid common verbal betting mistakes and ensure your bet is understood and accepted.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Know Bet Terminologies",
          "description": "Understanding the specific names and terms for each bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bet Minimums",
          "description": "Knowing the minimum amounts for various bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Splitting Your Money Correctly",
          "description": "Using clear language to specify how you want your bet divided."
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
			title="Betting Verbally at the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Craps is not just a game of dice; it's a game of communication. Understanding the rules is
				one thing; knowing how to articulate your bets without disturbing the game's flow is
				another. There will come many times in your Craps career when you will want to make a bet at
				the very last second. The dice will be out and the shooter will be about to throw. How do
				you make the bet without being the villain? It's time to explore the often-overlooked aspect
				of Craps: verbal betting.
			</p>
			<p class="pb-4">
				Verbal betting is talking to the dealer when you make your bet and waiting for <Link
					text="the dice"
					href="the-dice"
				/> to land before placing your money on the table. It’s a very calm exchange, and even though
				the time is limited, it’s so fast that you can make one between the time the shooter lets go
				of the dice and before they land. It’s one of the most critical aspects of Craps.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="outside-place-bets"
			title="Outside Place Bets"
			alt="Place bets placed outside."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="verbalBet" title="If We All Knew How to Make a Verbal Bet">
			<p class="pb-4">
				Late bets are among the worst mistakes you can make on a dice game, yet they occur all the
				time. While some players are aware and try to avoid it, others remain oblivious or don’t
				even care.
			</p>
			<p class="pb-4">
				Verbal bets are used to maintain the game's rhythm and make sure the shooter isn't
				disturbed. Any action that messes with the shooter's tempo, especially as their ready to
				throw, is looked down on. Having the shooter hesitate is bad, but a toss that hits a player
				is gonna cause some eyes to roll.
			</p>
			<p>
				Do you want a last-second Field bet? Say, “$10 plays the Field”. Don’t <Link
					text="reach across"
					href="not-to-do-at-craps-table"
				/> the table at the last moment. Forgot to add Odds to your Pass Line? Say, “$20 Odds play” Don’t
				try to to slyly creep your hand over the edge of the rail and drop cheques as your Odds bet.
				You need to hold the money in your hand and place it down after the roll. Think a Yo is going
				to roll next? No need to throw a cheque to the stickperson. Just say, “Dollar Yo!” and throw
				it in afterward.
			</p>
		</BlogH2>
		<Divider />
		<BlogH2 id="betAnatomy" title="Anatomy of a Verbal Bet">
			<p class="pb-4">
				A verbal bet has three components, all of which are equally important. Leave any of them out
				and you don’t have a bet.
			</p>
			<ol>
				<li>
					<span>The Amount - </span>The amount is how much money you want on the bet. Without an
					amount, we don’t know how much you want. You may be holding something in your hand, but
					the dealer may be preoccupied. They can hear you but aren’t looking at you; therefore they
					will “no bet” you. Without an amount, it’s not a bet. If you have time you can always try
					again before the dice land.
				</li>
				<li>
					<span>The Bet - </span>Which bet you want is as important as the amount, but don’t ask for
					anything unless you know what you want and how to ask for it. You can’t have a
					conversation about what the possibilities of what you want are while the shooter has the
					dice. There are four Hardways, four Horn Highs, and an infinite combination of other bets.
					Ask the dealer or another player if you’re unsure what the right way to make or say a bet.
					Most people are happy to help.
				</li>
				<li>
					<span>The Confirmation - </span>Confirmation of the bet by the dealer is also critical.
					You can say how much you want and which bet you want, but if the dealer doesn’t book it
					(repeat the bet back to you), it is not a bet. You must make sure the dealer repeats your
					bet or says, “Bet.” If they don’t, you need to repeat yourself repeatedly until they do. A
					verbal bet that is not booked is not a bet.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="wrongVerbal" title="How Verbal Betting Can Go Wrong">
			<p class="pb-4">
				Here are some of the most common reasons a verbal bet will be turned into a “No bet”:
			</p>
			<ol>
				<li>
					<span>The Player Makes a Call Bet - </span>A Call bet is when a player asks for a bet but
					doesn’t show the money required for the bet. If a player asks “Can I have a $35 Place bet
					on the 5?”, the dealers need to know that they have $35 to cover the cost of the bet,
					otherwise “No bet.”
				</li>
				<li>
					<span>The Player Doesn't Specify the Bet - </span>You can’t just ask for a $5 Horn High;
					you must specify which one. Horn High Aces? Horn High Ace Deuce? Horn High Yo? Horn High
					Twelve? You need to make a decision on which one, and you need to do it before the shooter
					throws the dice - and they currently have the dice in their hands.
				</li>
				<li>
					<span>The Player Says a Bet the Wrong Way - </span>If you say, “Gimme $5 hard three.” What
					is that? Do you mean the Ace Deuce? Do you mean the pair of threes, which is the Hard Six?
				</li>
				<li>
					<span>The Player Says the Wrong Amount For a Bet - </span>The Horn High is a $5 bet, so if
					you ask for an $8 Horn High Twelve, then we can’t be sure how much you want. Did you want
					two units? A $10 Horn High Twelve? Did you mean an $8 Horn? A dealer could easily say, “No
					bet.” Some dealers will round down to the closest proper amount and book that. “$5 Horn
					High Twelve”.
				</li>
				<li>
					<span>The Player Doesn't Specify How They Want Their Money to Be Split Up - </span> If you
					say “$5 on the hard six and eight,” that could mean a few things. Do you mean $5 on each the
					Hard Six and Eight, $10 total? Do you want to split $5 between the two bets? Does that mean
					you want $2 on each and a $1 change? Do you want $3 on one and $2 on the other?
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="high-low-yo"
			title="High Low Yo on Craps Layout"
			alt="High low yo on the craps layout"
		/>
		<Divider />
		<BlogH2 id="correctWay" title="The Correct Way to Make Verbal Bets">
			<p class="pb-4">para1</p>
			<BlogH3 title="Know What Your Bets Are Called">
				<p class="pb-4">
					There are going to be some ways to mitigate the above circumstances, the first of which is
					to know what your bets are called.
				</p>
				<ol>
					<li>
						<span>Aces - </span>A roll of 1-1 is not called Two but is sometimes referred to as
						"Snake Eyes".
					</li>
					<li>
						<span>Ace Deuce - </span>A roll of 1-2 is not called Three but I've heard "Acey Deucey".
					</li>
					<li>
						<span>Yo - </span>A roll of 5-6 is not called Eleven but sometimes said "Yo-leven".
					</li>
					<li>
						<span>Twelve - </span>A roll of 6-6 happens to be normal and is called Twelve. It can
						also be referred to as "Midnight" or "Boxcars".
					</li>
					<li>
						<span>High Low - </span>When you bet the Aces and the Twelve together, their names turn
						into High and Low. “Can I have $1 each High-Low”.
					</li>
					<li>
						<span>Hardways - </span>There are <Link text="four Hardways" href="the-hardways" />. Do
						not bet them by calling them by the pairs. “Hard 3’s,” which is a pair of 3’s, which is
						a Hard Six. You add them together:
						<ul>
							<li>A pair of 2’s is the Hard Four</li>
							<li>A pair of 3’s is the Hard Six</li>
							<li>A pair of 4’s is the Hard Eight</li>
							<li>A pair of 5’s is the Hard Ten</li>
						</ul>
					</li>
					<li>
						<span>Horn High - </span>There are four <Link text="Horn Highs" href="horn-high" /> which
						consist of a Horn plus an extra dollar on one of the bets:
						<ul>
							<li>Horn High Aces</li>
							<li>Horn High Ace Deuce</li>
							<li>Horn High Yo</li>
							<li>Horn High Twelve</li>
						</ul>
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="Know the Minimum Bets">
				<p class="pb-4">
					Know the minimums for each bet. Since many of the bets are a combination of bets, you need
					to make sure you're giving the dealer enough.
				</p>
				<ol>
					<li>
						<span>Any Amount - </span><Link text="Any Craps" href="any-craps" />, <Link
							text="Any Seven"
							href="any-seven"
						/>, the Hardways, and the Straight Up bets; Aces, Ace Deuce, Yo, and Twelve, have $1
						min. You can bet these in any amount.
					</li>
					<li>
						<span>$2 Minimum - </span>The High-Low, Eleven-Twelve, and C & E have a $2 min. With the
						<Link text="C & E" href="c-and-e" />, you can separate the bet - “$2C & $1E” or split
						any amount above $2 such as a “$3 C & E split”. You normally wouldn’t split two <Link
							text="straight up"
							href="straight-up"
						/> numbers because any odd amount on the split, such as a $3 Eleven-Twelve split, pays $43.50
						when the 12 rolls, and the payment will be rounded down to $43 resulting in a loss of $0.50.
						Not a lot of money but do it twice and you lost $1, and a $1 in Craps can turn into hundreds
						or even thousands in a matter of minutes.
					</li>
					<li>
						<span>$3 Minimum - </span>Three-Way Crap and <Link
							text="High-Low-Yo"
							href="multi-bets"
						/> have $3 min but being open-ended in the way you verbalize the bet can get you in trouble.
						If you say, “Can I have a $3 high-low-yo”, Do you mean $1 on each of them for $3 total or
						$3 on each for $9 total. I’ve seen too many players use identical phrases but with differing
						intentions. The best way to avoid ambiguity is to always use “… each.” For example, specify,
						“Can I have $3 each high-low-yo”.
					</li>
					<li>
						<span>$4 Minimum - </span>The <Link text="Horn" href="horn" /> has a $4 min and is bet in
						multiples of four. You can also bet the "All the Hardways" in multiples of four.
					</li>
					<li>
						<span>$5 Minimum - </span>The <Link text="Horn High" href="horn-high" /> and <Link
							text="World"
							href="world"
						/> have $5 min, and you always bet them in multiples of five.
					</li>
				</ol>
			</BlogH3>
			<BlogH3 title="Know How To Split Your Money">
				<p class="pb-4">
					Use these two methods to separate improper bet amounts between Proposition bets.
				</p>
				<ol>
					<li>
						<span>Say "High on the ..." - </span>You can say, “All the hardways high on the 8 for
						$5,” which would put $2 on the Hard Eight and $1 on the rest. The same applies if you
						bet something like $10 three-way crap. You would say, “$10 three-way crap high on the
						aces”. That would put $4 on the Aces and $3 on the rest.
					</li>
					<li>
						<span>Say the Amounts Individually - </span>For a $5 bet on the Eleven-Twelve, you would
						specify which has more such as “$3 Eleven $2 Twelve”. A High-Low-Yo that is bet for $25
						would be split by saying something like “$10 each high-low $5 yo”.
					</li>
				</ol>
			</BlogH3>
		</BlogH2>
		<Divider />
		<BlogImg caption="" {url} img="c-and-e" title="C & E Bet" alt="C and e bet" />
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Using verbal bets is key to mastering Craps. No matter how comfortable you feel, the game's
				relentless speed will eventually throw you off. Remember that verbalizing a bet is lightning
				fast and won't hinder the shooter. And if you don’t get your be off in time, you can rest
				easy knowing you didn't break the shooter's concentration.
			</p>
			<p>
				Your next step is simple: practice. Before heading to the casino, familiarize yourself with
				the terminologies, minimums, and how to correctly split your bets. That way, when you say,
				"$10 plays the Field," you'll know you're not only betting but also contributing to a
				seamless game.
			</p>
		</section>
	</main>
</BlogLayout>
