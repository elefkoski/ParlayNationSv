<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1 .svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import ContentUl from '$lib/clients/components/contentPages/Content-ul-a.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'How to Be A Better Craps Shooter, A Comprehensive Guide';
	let description: string =
		'Step up your Craps game with our detailed guide. Learn how to be a better shooter and keep the table on your side.';
	let url: string = 'better-craps-shooter';

	let pageLinks: PageMenu[] = [
		{
			title: "Can't Be Broken",
			href: '#',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Need to Be Followed',
			href: '#',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Questionable Tosses',
			href: '#',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Not Really Rules',
			href: '#',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Know Your Rights',
			href: '#',
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
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
		// JSON HERE
		// JSON HERE
		// JSON HERE
		// JSON HERE
		// JSON HERE
		// JSON HERE
	</script>
</svelte:head>
<BlogLayout {pageLinks}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<BlogHeaderOne
			sectionTitle="Being a Better Player"
			title="How to Be a Top Notch Craps Shooter"
			{pageData}
		/>
		<p class="pb-4">
			A Craps table has so many bets and so many players that it requires multiple dealers known as
			“The Crew”. Three dealers, a Boxperson, and a supervisor (Floor) are always watching the game.
			Each plays a part in keeping the game going. The crew is there to help you so don't be afraid
			to ask lots of questions.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/{url}_640x360.webp"
			mdImg="src/images/{url}/{url}_960x540.webp"
			lgImg="src/images/{url}/{url}_1280x720.webp"
			title="The Craps Crew"
			alt="Overhead view of Craps table with the base dealers, the box, the stickperson, the box person, and the floor."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="theBox" title="What Does the Boxperson (Box) Do at the Craps Table?" />
		<p class="pb-4">
			The Box is the person sitting down between two other dealers. Their job is to watch the
			dealers, players, handle money, and make sure the game moves along smoothly.
		</p>
		<ContentUl {liAs} />
		<Divider />
		<ContentHeaderTwo id="theBaseDealers" title="What Do the Base Dealers Do in Craps?" />
		<p class="pb-4">
			The Base Dealers job is to take care of the players on their side of the table.
		</p>
		<ContentUl liAs={liAs2} />
		<Divider />
		<ContentHeaderTwo id="theStickperson" title="What Does the Stickperson Do on a Craps Game?" />
		<p class="pb-4">
			The Stickperson controls the pace of the game using the stick and dice, and takes care of the
			bets in the middle of the table.
		</p>
		<ContentUl liAs={liAs3} />
		<Divider />
		<ContentHeaderTwo
			id="theFloor"
			title="What Does the Supervisor (Floor) Do at the Craps Table?"
		/>
		<p class="pb-4">The Floor's job is to keep an eye on the game as a whole.</p>
		<ContentUl liAs={liAs4} />
	</main>
</BlogLayout>
