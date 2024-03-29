<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import ContentUl from '$lib/clients/components/contentPages/Content-ul-a.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'The Craps Table Crew';
	let description: string =
		'Most casino table games have one dealer per table. The Craps table rotates four dealers, has a Boxperson, and a Floor to watch over the table.';
	let url: string = 'the-crew';

	let phref = 'craps-basics';
	let prev = 'Craps Basics';
	let nhref = 'the-craps-table';
	let next = 'The Craps Table';

	let pageLinks: PageMenu[] = [
		{
			title: 'The Boxperson',
			href: '#theBox',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Base Dealer',
			href: '#theBaseDealers',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Stickperson',
			href: '#theStickperson',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Floor Supervisor',
			href: '#theFloor',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let liAs = [
		{
			title: 'When they watch the dealers they are looking for:',
			items: [
				'Proper procedure',
				'Proper payment',
				'Proper setting up of bets',
				'Making sure the dealers are doing their jobs correctly'
			]
		},
		{
			title: 'When they watch the players they are looking for:',
			items: [
				'Bets they make',
				'Did they give the right amount of money for the bets',
				'Are they getting paid correctly',
				'Are they trying to cheat'
			]
		},
		{
			title: 'They also:',
			items: [
				'Handle disputes between the players and/or the dealers',
				'Counting and dropping cash that comes in from players',
				'Coloring up money when players leave'
			]
		}
	];
	let liAs2 = [
		{
			title: 'Their duties include:',
			items: [
				"Booking players' bets",
				'Setting up bets on their side of the table',
				'Paying bets',
				'Collecting losing bets',
				'Teaching players how to play'
			]
		}
	];
	let liAs3 = [
		{
			title: 'Their duties include:',
			items: [
				'Sending the dice to the players',
				'Taking and setting up bets in the center of the table',
				'Telling the base dealers who and how much to pay players when their center bets win',
				'Calling the number the dice land on'
			]
		}
	];
	let liAs4 = [
		{
			title: 'Their duties include:',
			items: [
				'Making sure the bank is correct and there are enough for the players',
				"Taking players' cards and tracking their play",
				'Grabbing dice that go off the table',
				'Handling disputes that cannot be resolved through the Boxperson',
				'Triple checking payouts'
			]
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
  "headline": "The Craps Crew",
  "description": "An overview of the roles and responsibilities of the craps table crew, including the Boxperson, Base Dealers, Stickperson, and the Floor Supervisor.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-crew",
  "image": "http://parlaynation.com/images/the-crew/the-crew-header.webp",
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
    "@id": "http://parlaynation.com/the-crew"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "Detailing the essential roles within the craps crew that facilitate the game, ensuring smooth operations and assisting players.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Does the Boxperson (Box) Do at the Craps Table?",
          "description": "Explains the Boxperson's role in overseeing the game's flow, handling finances, and ensuring smooth operations."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Do the Base Dealers Do in Craps?",
          "description": "Details the responsibilities of Base Dealers in managing bets, payouts, and player interactions on their side of the table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Stickperson Do on a Craps Game?",
          "description": "Describes the Stickperson's duties, including controlling the game's pace and managing center table bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Does the Supervisor (Floor) Do at the Craps Table?",
          "description": "Outlines the Floor Supervisor's role in overall game supervision and maintaining the integrity of the game."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-crew/the-craps-dice_640x360.webp",
      "caption": "Five maroon colored craps dice sitting on green felt."
    }
  ]
}

	</script>
</svelte:head>
<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Craps Basics" title="The Craps Crew" {pageData}>
			<p class="pb-4">
				A Craps table has so many bets and so many players that it requires multiple dealers known
				as “The Crew”. Three dealers, a Boxperson, and a supervisor (Floor) are always watching the
				game. Each plays a part in keeping the game going. The crew is there to help you so don't be
				afraid to ask lots of questions.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/{url}_640x360.webp"
				mdImg="src/images/{url}/{url}_960x540.webp"
				lgImg="src/images/{url}/{url}_1280x720.webp"
				title="The Craps Crew"
				alt="Overhead view of Craps table with the base dealers, the box, the stickperson, the box person, and the floor."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="theBox" title="What Does the Boxperson (Box) Do at the Craps Table?">
			<p class="pb-4">
				The Box is the person sitting down between two other dealers. Their job is to watch the
				dealers, players, handle money, and make sure the game moves along smoothly.
			</p>
			<ContentUl {liAs} />
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="theBaseDealers" title="What Do the Base Dealers Do in Craps?">
			<p class="pb-4">
				The Base Dealers job is to take care of the players on their side of the table.
			</p>
			<ContentUl liAs={liAs2} />
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="theStickperson" title="What Does the Stickperson Do on a Craps Game?">
			<p class="pb-4">
				The Stickperson controls the pace of the game using the stick and dice, and takes care of
				the bets in the middle of the table.
			</p>
			<ContentUl liAs={liAs3} />
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="theFloor" title="What Does the Supervisor (Floor) Do at the Craps Table?">
			<p class="pb-4">The Floor's job is to keep an eye on the game as a whole.</p>
			<ContentUl liAs={liAs4} />
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
