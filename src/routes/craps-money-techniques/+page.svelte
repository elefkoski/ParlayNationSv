<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/components/blog/Blog-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Craps Money Techniques';
	let description: string =
		'Mastering Craps table transactions: From overpayments to actively converting money, enhance your gameplay with insider knowledge on dealer strategies.';
	let url: string = 'craps-money-techniques';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'Why Overpay and Take Money',
			href: '#whyOverpay',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Dealers Methods for Exchanging Money',
			href: '#exchangingMoney',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'When the Dealer Totals Payments',
			href: '#totalPayments',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'A Craps Payment Scenario',
			href: '#paymentScenario',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Actively Try to Convert Money',
			href: '#convertMoney',
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
  "headline": "Confusing Money Techniques Used By Dealers",
  "description": "Exploring dealer strategies for managing payments at the Craps table, including overpayment methods, paying commissions, and tips for players on actively converting money.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/_____",
  "image": "http://parlaynation.com/images/_____/_____-header.webp",
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
    "@id": "http://parlaynation.com/_____"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Why Overpay and Take Money",
      "description": "Dealers use overpayment techniques to efficiently manage chip distribution and payments, helping keep the game running smoothly.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Efficiency and Chip Management",
          "description": "Rationale behind dealers overpaying players and then asking for money back to ensure an adequate supply of chips."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Dealer Methods for Exchanging Money",
      "description": "Specific techniques dealers use to exchange money, including asking players to drop money or taking money from existing bets to streamline transactions.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Exchanging Techniques",
          "description": "From '15 for 1' to '75 for 5', understanding the dealer's methods for exchanging money and the logic behind them."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "When the Dealer Totals Payments",
      "description": "How dealers total payments for multiple bets, often resulting in a single payout that encompasses several winning outcomes.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Totaling Payments",
          "description": "Insight into the process of totaling payments for a clearer understanding of your winnings at the table."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Actively Try to Convert Money",
      "description": "Tips for players on actively managing and converting their money to higher denominations to maintain a manageable chip stack.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Managing Your Money",
          "description": "Strategies for players to actively convert money, reducing clutter and enhancing table play efficiency."
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
			sectionTitle="Money Management"
			title="Confusing Money Techniques Used By Dealers"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				Craps is not just a game of luck; it's also a game of strategy, and that extends to how
				payments are managed on the table. If you've ever been confused by why a dealer overpays you
				and then asks for money back, or if you find yourself with a mountain of $1 chips, this
				guide is for you.
			</p>
			<p class="pb-4">
				In this guide, we explore the techniques dealers use to manage payments effectively. From
				overpayment methods like "15 for 1" to <Link
					text="paying commissions"
					href="buying-place-bets"
				/> on BUY bets. We'll even delve into how dealers total payments and what you can do to convert
				money actively. With this knowledge, you'll not only play better but also appreciate the complexities
				that make craps so intriguing.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="third-base-up-close-craps-table-layout"
			title="Craps Table Layou"
			alt="Up close of craps table layout with many bets."
		/>

		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="whyOverpay" title="Why Overpay and Take Money">
			<p class="pb-4">
				Dealers overpay and take money to keep the game running efficiently. The dealers will be
				handing off loads of chips to the players and will find themselves in a pinch, so they play
				a game of back-and-forth, giving you chips and then taking them back. Here are some of the
				main reasons for converting money:
			</p>
			<ol>
				<li>
					<span>The dealers can run out of chips - </span>Since 16 players can play at once, we can
					end up giving out dozens of chips after every roll. The bank ends up depleting forcing the
					dealers to try and get them back.
				</li>
				<li>
					<span>You end up with too many - </span>It’s common to end up with 20 or 30+ chips of the
					same color. For many, they don’t want thirty $1 chips in their rail, so we try to take
					them back using overpayments.
				</li>
				<li>
					<span>It makes paying easier - </span>Many times it’s easier for you to drop money during
					a payment. If the stickperson tells me to pay you $99, I’m giving you the 4 quarters and
					telling you to drop me a dollar instead of cutting out 3 quarters, 4 nickels, and 4
					dollars.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="exchangingMoney" title="Dealer Methods for Exchanging Money">
			<p class="pb-4">
				The two most common techniques used by dealers to exchange money are to ask you to drop
				money or to take money from your existing bets.
			</p>
			<ol>
				<li>
					<span>The dealer asks you to drop money - </span>This will constantly happen, like when
					you have too many nickels or dollars.
					<ol>
						<li>
							<span>10 for 3 -</span>This is for $7 payments such as $6 on the 6 & 8, $5 on the 5 or
							9, or $1 Any Crap. The dealer gives you $10 and asks you to drop $3.
						</li>
						<li>
							<span>15 for 1 - </span>When a bet pays $14, the dealer will overpay you $15 for $1.
							This is usually a $12 <Link text="Place bet" href="place-bet-basics" /> on the 6 or 8,
							$10 on the 5 or 9, $2 Hard 4 or 10, or $1 on each C & E when the Yo rolls. This you will
							be asked of you all the time.
						</li>
						<li>
							<span>25 for 11 - </span>We use this for payments of $14 when we want to take back
							nickels and a dollar. This isn’t used too often because it requires too much effort
							from the player and confuses them. We do this when we need some nickels.
						</li>
						<li>
							<span>26 for 5 - </span>Whenever you have payments that pay $21, the dealer will
							overpay you $26 and ask you to drop $5. These are most often used for $18 on the 6 or
							8 and $15 on the 5 or 9.
						</li>
						<li>
							<span>75 for 5 - </span>This is similar to 15 for 1 but scaled from two to ten units.
							$60 on the 6 or 8, and $50 on the 5 or 9, pay $70. The dealer will overpay $75 for $5.
						</li>
						<li>
							<span>Paying Commissions - </span>Whenever you win a BUY bet on the 4 or 10 you have
							to drop the commission if you want the bet to continue to be a BUY. If you bought the
							4 for $25, after it wins the dealer would give you $50 and say, “50 for 1.” The $1 is
							the commission for the bet.
						</li>
					</ol>
				</li>
				<li>
					<span>The dealers take money from your bets - </span>These moves are used for speed,
					preventative maintenance, and convenience.
					<ol>
						<li>
							<span>Paying Odds for the 5 and 9 - </span>Since Odds on the 5 and 9 should be even,
							players bet $6 instead of $5, $16 instead of $15, and $26 instead of $25. Instead of
							paying these bets using nickels and dollars, they will use only nickels and/or
							quarters and take the dollars. $6 pays $9; we pay $10 and take the $1. $16 pays $24;
							we pay $25 and take the $1. And so on. This can also be done going from nickels to
							quarters -<Link text=" $30 Odds" href="pass-line-odds" /> placed using a quarter and a
							nickel. It pays $45; the dealer can pay $50 and take the red nickel.
						</li>
						<li>
							<span>Replacing small towers of chips - </span>Suppose you use ten $1 chips to make
							your Pass Line bet. When it comes time to pay, I’ll replace the ten $1s with two
							nickels and then pay it $10. The same applies if you used five nickels and I replaced
							them with a quarter and then paid it.
						</li>
					</ol>
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="place-bets-inside"
			title="Inside Place Bets"
			alt="Inside place bets."
		/>
		<Divider />
		<BlogH2 id="totalPayments" title="When the Dealer Totals Payments">
			<p class="pb-4">
				When paying a Pass Line bet with Odds a dealer would normally pay them as two different bets
				resulting in two piles of money. But, you may look down and see one pile of chips instead of
				two – the total of your <Link text="Pass Line" href="the-pass-line" /> and its’ Odds.
			</p>
		</BlogH2>
		<Divider />
		<BlogH2 id="paymentScenario" title="A Craps Payment Scenario">
			<p class="pb-4">
				When a player places down a mixed tower of chips, the dealers will do whatever works for
				them. Here’s a not-so-fun exercise: Imagine a player putting a stack of 28 chips in the
				Field: 10 nickels and 18 one-dollar chips for a total of $68. The Aces roll, so it pays
				double. After breaking the bet down to assess the situation, everybody has a different
				opinion. (This generic scenario happens all the time and many dealers use each thought
				process.)
			</p>
			<ol>
				<li>
					<span>3rd Base Dealer </span>thinks they can cut out $68 twice, place the payouts next to
					your bet and call it a day. It’s very inefficient because it leaves 44 chips that must be
					dealt with.
				</li>
				<li>
					<span>2nd Base Dealer </span>thinks they should cut out the total payment, $136, and place
					it next to the bet. Still not ideal because there are still 36 chips on the table.
				</li>
				<li>
					<span>Stickperson </span>says to pay the 10 nickels - $100 in quarters. The 18 dollars
					should be converted with an overpayment of $50 in quarters for 14 dollars that would be
					taken back. This takes most of the dollars off the table yet there are still 20 chips
					there.
				</li>
				<li>
					<span>The relief dealer </span> comes back from break, pokes their head over the
					stickperson's shoulder, and yells “Stack it up and size in!”. Knowing this will leave 84
					chips on the table, the <Link text="Floor Supervisor" href="the-crew" /> stares at the base
					dealer, daring them to do so.
				</li>
				<li>
					<span>The Box </span>says you should have cut out $68 and $136, placed them in the Field,
					and then taken all the rest of the chips leaving 14 chips on the table.
				</li>
				<li>
					<span>The Floor </span>wisely tells them they should have replaced the 10 nickels with 2
					quarters, paid it 4 quarters, then converted all the white leaving only 12 checks on the
					table
				</li>
				<li>
					<span>The Pit </span> is watching all this, shakes his head and says, “That’s $204 total. Take
					two black and four dollars, put them in the field, and take everything else. Now, let’s get
					a game going.”
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="payment-place-bet-point-four"
			title="Place Bet on Four Paid"
			alt="A place bet paid on the point four."
		/>
		<Divider />
		<BlogH2 id="convertMoney" title="Actively Try to Convert Money">
			<p class="pb-4">
				Many dealers will never care how many chips you have on the rail, only trying to get them
				back when necessary. If you want to get higher denomination chips you have to make an effort
				to make it happen.
			</p>
			<ol>
				<li>
					<span>Ask the dealer to give you higher denominations - </span>This is preventative
					maintenance. By asking, “Can you please pay me in bigger chips?” you can avoid getting too
					many nickels or quarters.
				</li>
				<li>
					<span>Bet the chips - </span>The easiest way to rid yourself of too much of one color is
					to bet them. Most dealers will convert the chips to higher denominations as they set up or
					pay your bets. For the dealers who don’t care and will pay you without converting
					anything, ask, “Can you color these, or is there any way I can convert these to larger
					chips?”. When you get the few dealers who want to be stubborn and still refuse, wait until
					they go on break and ask the next dealer.
				</li>
				<li>
					<span>Overbet money - </span>You can prevent money from coming your way by over-betting.
					Let's say you want $18 eight and only have quarters and a bunch of dollars. Instead of
					giving the quarter for $7 change - two more dollars, you can give $28 to the dealer and
					get two nickels back. A swing of five one-dollar chips. Or something like giving $51 for
					$18 each 6 & 8, where you would get three nickels back instead of giving two quarters and
					getting $14 change - four more dollars. That’s another swing of five one-dollar chips.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				Fully understanding what happens at the Craps table will never be easy for the faint of
				heart. Some people would rather shut down when it comes to figuring out payments,
				conversions, totals, and nearly anything to do with math. They are there to have fun, not
				rack their brain; that is what the dealer is for.
			</p>
			<p>
				If you're a regular player, consider actively converting money to higher denominations to
				streamline your bets and winnings. Asking for larger chips or over-betting are ways to
				manage your chip stack more efficiently. Craps isn't just about <Link
					text="rolling dice"
					href="the-dice"
				/> – it's about rolling with style and strategy in every interaction.
			</p>
		</section>
	</main>
</BlogLayout>
