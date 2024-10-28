<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Betting Proposition Bets in Craps';
	let description: string =
		'Most Proposition Bets at the Craps table are one-roll bets while a handful is not. These bets pay the highest amounts on the craps table and some are combinations of multiple bets at once.';
	let url: string = 'proposition-basics';

	let phref: string = 'proposition-bets';
	let prev: string = 'Proposition Bets';
	let nhref: string = 'the-hardways';
	let next: string = 'The Hardways';

	let pageLinks: PageMenu[] = [
		{
			title: 'One Roll Bets',
			href: '#oneRoll',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting Proposition Bets',
			href: '#bettingProp',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.jpg'
	};
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={'http://parlaynation.com/' + url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Proposition Bets on the Craps Table",
  "description": "An in-depth look at Proposition Bets in craps, covering one-roll bets, how to place these bets, and the thrilling potential payouts.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/proposition-basics",
  "image": "http://parlaynation.com/images/proposition-basics/proposition-basics-header.webp",
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
    "@id": "http://parlaynation.com/proposition-basics"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Exploration of Proposition Bets on the craps table, including insights into one-roll bets and strategies for placing these high-stake bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is a One-Roll Bet in Craps?",
          "description": "Details the dynamics of One-Roll bets, their placement on the table, and their duration."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet Proposition Bets at the Craps Table?",
          "description": "Guides on the correct method to place Proposition Bets through interaction with the Stickperson and ensuring bets are acknowledged."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/proposition-basics/proposition-bets_640x360.webp",
      "caption": "Overhead view of the proposition area on the craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/proposition-basics/how-to-bet-prop-bets_640x360.webp",
      "caption": "First person view of a player throwing a cheque towards the middle of the table."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Proposition Bets"
			title="Proposition Bets on the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				What is a Proposition Bet on the Craps table? Some would say it's a one-roll bet. Others
				would say they are any of the bets in the center of the table. For the most part,
				Proposition Bets are one-roll bets in the middle of the table, although some last more than
				one roll, and I consider the Field a Prop Bet, and that isn't in the middle of the table,
				so, who knows?
			</p>
			<p class="pb-4">
				Regardless of the definition, betting Proposition Bets can be a lot of fun! Most of them
				have a dollar minimum, so you won't have to bet a lot, and when they come two, three... four
				times in a row... and you realize that a single cheque can net you hundreds and maybe even
				thousands of dollars at the Craps table in only a couple minutes... you realize the allure.
			</p>
			<p class="pb-4">
				The Craps table has a lot of Prop Bets, and the casino loves it. They pretty much suck the
				money out of you because you always have to throw money out there to hit one. Craps is a
				game where you want to use the money you win to make more bets, not constantly pull money
				out of the rail.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/proposition-bets_640x360.webp"
				mdImg="src/images/{url}/proposition-bets_960x540.webp"
				lgImg="src/images/{url}/proposition-bets_1280x720.webp"
				title="Proposition Bets"
				alt="Overhead view of the proposition area on the craps table."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="oneRoll" title="What Is a One-Roll Bet in Craps?">
			<p class="pb-4">
				A One-Roll bet is a bet that must win the next roll, or it loses. Most one-roll bets are
				found in middle of the table, and have minimums ranging from $1 to $5. The Hardways are an
				exception because, while they have $1 minimumum, and are in the middle of the table, they
				can last longer than one roll. The Field is a one-roll bet but has the table min. and is on
				each side of the table.
			</p>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="bettingProp" title="How Do You Bet Proposition Bets at the Craps Table?">
			<p class="pb-4">
				Almost all Proposition Bets are in the middle of the table, so you give the money to the
				Stickperson, and they will set up the bet. Tell <Link
					text="the Stickperson"
					href="the-crew"
				/> how much you are betting and which bet you want, then throw the money into the middle of the
				table. You should really make eye contact with the Stickperson, so they know it is you betting.
				Even if they hear your bet and see the money come in, they can't be 100% sure it came from you.
				Your bets should also be repeated to you by at least one of the dealers. If <Link
					text="the dice"
					href="the-dice"
				/> are out and the Stickpersons' back is turned to you, you must tell the <Link
					text="Base Dealer"
					href="the-crew"
				/>. If your bet is not repeated to you, then it isn't a bet.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/how-to-bet-prop-bets_640x360.webp"
				mdImg="src/images/{url}/how-to-bet-prop-bets_960x540.webp"
				lgImg="src/images/{url}/how-to-bet-prop-bets_1280x720.webp"
				title="How to Bet Proposition Bets"
				alt="First person view of a player throwing a cheque towards the middle of the table."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
