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
	import Quote from '$lib/components/Quote.svelte';

	let title: string = 'Using Presses at the Craps Table';
	let description: string =
		'You must pay attention to your money at the Craps Table. Know how much your bets cost, placement of those bets, your presses, and your payments.';
	let url: string = 'your-money';

	let phref: string = 'buying-place-bets';
	let prev: string = 'Buying Place Bets';
	let nhref: string = 'presses';
	let next: string = 'Presses';

	let pageLinks: PageMenu[] = [
		{
			title: 'Getting the Right Change',
			href: '#rightChange',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Double Checking Your Bet Placement',
			href: '#rightSpot',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Checking Proper Numbers',
			href: '#rightNumber',
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
  "headline": "Watching Your Money at the Craps Table",
  "description": "A guide to vigilance with your money at the craps table, including ensuring correct change, bet placement, and bet numbers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/your-money",
  "image": "http://parlaynation.com/images/your-money/your-money-header.webp",
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
    "@id": "http://parlaynation.com/your-money"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Place Bets",
      "description": "Key considerations for players at the craps table to ensure they are vigilant about their money, including tips on making sure you're getting the right change, your bets are in the correct spot, and on the right number.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Are You Getting the Right Change for Your Craps Bets?",
          "description": "Advice on knowing the cost of your bets to ensure you receive the correct change, highlighting the importance of being vigilant to avoid mistakes by dealers."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Are Your Craps Bets in the Correct Spot?",
          "description": "Tips on ensuring your bets are placed in the correct location on the table to avoid payment errors."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Are Your Craps Bets on the Right Number?",
          "description": "Guidance on making sure your bets are placed on the intended numbers to prevent misplacement."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/bet-cost-and-change_640x360.webp",
      "caption": "$52 across with $55 dollars in the COME and $3 change near the apron."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/correct-spot_640x360.webp",
      "caption": "A $15 place bet with a transparent $15 place bet next to it signifying the wrong spot."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/correct-number_640x360.webp",
      "caption": "$12 place bet on the eight with a transparent $12 place bet on the six signifying the wrong number."
    }
  ]
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Place Bets"
			title="Watching Your Money at the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				Pay attention to your money! Craps seems to be the only game where even seasoned players
				don't know where their money is. When a craps game is blowing up, it's moving fast, and many
				players are making multiple bets, it's easy to understand that a dealer might make a
				mistake. At the same time, when a table only has two or three players on it, some dealers
				will become so nonchalant about it that they don't pay attention at all. Learn what to watch
				for as the game moves along.
			</p>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="rightChange"
			title="Are You Getting the Right Change for Your Craps Bets?"
		>
			<p class="pb-4">
				To begin with, know how much your bets cost. If you don't know how much your bets cost, you
				can never know how much change you're supposed to receive. Dealers will make mistakes, and
				if you're not paying attention, you may get back the wrong amount of money. It could be too
				much… it could be not enough… You should give back money if you know they gave you extra.
				It's technically stealing. If they didn't give you enough back, then you're being robbed.
				The best way to win an argument with a dealer and/or
				<Link text="boxperson" href="the-crew" /> is to know how much the bet cost, how much money you
				gave the dealer, and how much change you received.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/bet-cost-and-change_640x360.webp"
				mdImg="src/images/{url}/bet-cost-and-change_960x540.webp"
				lgImg="src/images/{url}/bet-cost-and-change_1280x720.webp"
				title="Bet Cost and Change"
				alt="$52 across with $55 dollars in the COME and $3 change near the apron."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="rightSpot" title="Are Your Craps Bets in the Correct Spot?">
			<p class="pb-4">
				Make sure your bets are being put in the correct spot on the layout. If the dealer puts your
				bet in someone else's spot when it's time to get paid, they'll pay the wrong person. You
				will even have players try to take advantage of these mistakes by claiming those bets
				belonged to them and then shrug while saying, <Quote
					text="That's my $15 ten. I don't know what happened to yours..."
				/>
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/correct-spot_640x360.webp"
				mdImg="src/images/{url}/correct-spot_960x540.webp"
				lgImg="src/images/{url}/correct-spot_1280x720.webp"
				title="Are Your Bets in the Right Spot"
				alt="A $15 place bet with a transparent $15 place bet next to it signifying the wrong spot."
			/>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="rightNumber" title="Are Your Craps Bets on the Right Number?">
			<p class="pb-4">
				You should make sure the dealer is putting your bets on the correct number. Even if the
				dealer heard what your bet was and repeated it back to you, they could very easily put that
				bet on a wrong Place bet number. Watch the dealer as they set up your bets to ensure there
				aren’t problems in the future.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/correct-number_640x360.webp"
				mdImg="src/images/{url}/correct-number_960x540.webp"
				lgImg="src/images/{url}/correct-number_1280x720.webp"
				title="Are Your Bets on the Right Number"
				alt="$12 place bet on the eight with a transparent $12 place bet on the six signifying the wrong number."
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
