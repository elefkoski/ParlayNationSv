<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import { calculateDontCome } from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = "Betting Don't Come Bets in Craps";
	let description: string =
		"The Don't Come bet is like a mini Don't Pass bet. They both win and lose the same way and there are two stages to a Don't Come bet.";
	let url: string = 'dont-come';

	let phref: string = 'dont-pass-lay-odds';
	let prev: string = "Don't Pass Lay Odds";
	let nhref: string = 'dont-come-lay-odds';
	let next: string = "Don't Come Lay Odds";

	let pageLinks: PageMenu[] = [
		{
			title: "Betting Don't Come",
			href: '#bettingDontCome',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Stages",
			href: '#dontComeStages',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'No Action',
			href: '#noAction',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Placement",
			href: '#dontComePlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Payment",
			href: '#dontComePayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Don't Come Payment Calculator",
			href: '#dontComeCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Always Working',
			href: '#alwaysWorking',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Dealer Don't Come",
			href: '#dealerDontCome',
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

	let tblAria: string = "Don't come intermediate roll payment table";
	let tblHeaders: string[] = ['Intermediate Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		["In the Don't Come", 'Even money', '2 or 3', '7 or 11'],
		['Behind a point', 'Even money', '7', 'When point rolls']
	];
	let tblPnts: string[] = ["You can only make a Don't Come bet during the Intermediate Roll"];

	let tblAria2: string = "Don't come comeout roll payment table";
	let tblHeaders2: string[] = ['Intermediate Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows2: (string | number)[][] = [['Behind a point', 'Even money', '7', 'When point rolls']];
	let tblPnts2: string[] = ["Don't Come bets are not contract bets"];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn Don't Come Bets",
		  "description": "The Don't Come bet is like a mini Don't Pass bet. They both win and lose the same way and there are two stages to a Don't Come bet. ",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="The Don't Side"
			title="Betting a Don't Come Bet in Craps"
			{pageData}
		/>
		<p class="pb-4">
			You can think of the Don't Come as mini <Link text="Don't Pass" href="dont-pass" /> bets because
			they work the same way. They win and lose on the same numbers, and just like the Don't Pass, after
			a Point is rolled, it is betting against that Point. The Don't Come moves behind the Point and
			you can then <Link text="Lay Odds" href="dont-pass-lay-odds" />. You can only make a Don't
			Come Bet during the <Link text="Intermediate Roll" href="the-stages" />, never during the <Link
				text="Comeout Roll"
				href="the-stages"
			/>.
		</p>
		<span class="text-center pb-1">Don't Come - Intermediate Roll</span>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<span class="text-center pb-1">Don't Come - Comeout Roll</span>
		<ContentTble
			tblAria={tblAria2}
			tblHeaders={tblHeaders2}
			tblRows={tblRows2}
			tblPnts={tblPnts2}
		/>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dont-come_640x360.webp"
			mdImg="src/images/{url}/dont-come_960x540.webp"
			lgImg="src/images/{url}/dont-come_1280x720.webp"
			title="Don't Come"
			alt="Up close overhead view of the Don't Come betting area."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="bettingDontCome" title="How Do You Bet a Don't Come Bet in Craps?" />
		<p class="pb-4">
			Don't Come bets are self-service so if the bet wins while in the DC, it is your responsibility
			to pick up your winnings. You do not need to tell the Dealer you are making the bet but would
			be a courtesy to let them know that it belongs to you.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/how-to-bet-a-dont-come_640x360.webp"
			mdImg="src/images/{url}/how-to-bet-a-dont-come_960x540.webp"
			lgImg="src/images/{url}/how-to-bet-a-dont-come_1280x720.webp"
			title="How to Bet a Don't Come"
			alt="Multiple bets sitting in the Don't Come area."
		/>
		<Divider />
		<ContentHeaderTwo
			id="dontComeStages"
			title="What Are the Two Stages of a Don't Come Bet in Craps?"
		/>
		<ContentHeaderThree title="Stage One - In the Don't Come (DC)" />
		<p class="pb-4">
			The first stage of a Don't Come bet is the initial bet. This is when you place your bet in the
			DC and wait for a Point to be rolled. While in the DC the bet wins when the 2 or 3 are rolled
			and loses when the 7 or 11 are rolled. If the 12 rolls the Don't Come is a push, it doesn’t
			win or lose. Any other number that rolls must be a Point and the Don't Come bet moves behind
			that Point.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/stage-one-of-a-dont-come_640x360.webp"
			mdImg="src/images/{url}/stage-one-of-a-dont-come_960x540.webp"
			lgImg="src/images/{url}/stage-one-of-a-dont-come_1280x720.webp"
			title="Stages of a Don't Come Bet - In the Don't Come"
			alt="$10 sitting in the Don't Come. The puck is on a point you cannot see."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Stage Two - Behind a Point" />
		<p class="pb-4">
			The second stage is behind a Point. The Don't Come is then betting the 7 will be rolled before
			the Point it is behind. If the Point rolls, your Don't Come Bet loses.
		</p>
		<p class="pb-4">
			Once behind a Point, the Don't Come bet has the advantage because it wins on a 7 which is the
			most commonly rolled number. Regardless of which Point you move behind, you shouldn't take it
			back.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/stage-two-of-a-dont-come_640x360.webp"
			mdImg="src/images/{url}/stage-two-of-a-dont-come_960x540.webp"
			lgImg="src/images/{url}/stage-two-of-a-dont-come_1280x720.webp"
			title="Stages of a Don't Come Bet - Behind a Point"
			alt="$10 sitting behind the point five. The puck is on a point you cannot see."
		/>
		<Divider />
		<ContentHeaderTwo id="noAction" title="What Does 'No Action' Mean at the Craps Table?" />
		<p class="pb-4">
			Some players don't like their Don't Come bets to move behind certain Points, like the 6 or the
			8, because they are the most commonly rolled Points and players think they're likely to lose
			their bet. If a player doesn't want a Don't Come bet to move behind a Point they can say <Quote
				text="No
		Action"
			/>. This means if a Point rolls but they don't want their bet to move behind that Point, they
			could instead leave it in the DC. They are allowed to do this because none of the Don't bets
			are contract bets. If that bet moved behind a Point they could take it down and put it back in
			the DC. Saying <Quote text="No Action" /> is used to save the time of the dealer moving the Don't
			Come bet behind the Point and then moving it back to the DC when a player doesn't want it there.
		</p>
		<Divider />
		<ContentHeaderTwo
			id="dontComePlacement"
			title="Where Is Your Don't Come Bet on the Craps Table?"
		/>
		<p class="pb-4">
			The boxes behind Points aren't big enough to hold bets for eight players. Most of the time you
			wouldn't have more than three or four Don't players at any given time so it's usually not a
			problem but there is still a general rule for where players bets are supposed to be placed.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-a-dont-come-behind-a-point_640x360.webp"
			mdImg="src/images/{url}/placement-of-a-dont-come-behind-a-point_960x540.webp"
			lgImg="src/images/{url}/placement-of-a-dont-come-behind-a-point_1280x720.webp"
			title="Placement of a Don't Come Behind a Point"
			alt="Up close view of the boxes behind the points and of the craps table rail. There are 16 bubbles corresponding with each other on betting area and the craps table rail."
		/>
		<Divider />
		<ContentHeaderTwo id="dontComePayment" title="What Does the Don't Come Bet Pay in Craps?" />
		<p class="pb-4">
			Regardless of weather or not a Don't Come bet is in the DC or behind a Point, it's going to
			win even money.
		</p>
		<ContentImg
			caption="In the Don't Come"
			smImg="src/images/{url}/dont-come-bets-get-even-money-a_640x360.webp"
			mdImg="src/images/{url}/dont-come-bets-get-even-money-a_960x540.webp"
			lgImg="src/images/{url}/dont-come-bets-get-even-money-a_1280x720.webp"
			title="Don't Come Bets Win Even Money - In the Don't Come"
			alt="$10 paid $10 in the Don't Come. Two purple dice 1-1 and another set show 1-2."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Behind a Point"
			smImg="src/images/{url}/dont-come-bets-get-even-money-b_640x360.webp"
			mdImg="src/images/{url}/dont-come-bets-get-even-money-b_960x540.webp"
			lgImg="src/images/{url}/dont-come-bets-get-even-money-b_1280x720.webp"
			title="Don't Come Bets Win Even Money - Behind a Point"
			alt="$10 paid $10 behind the point ten. Two purple dice show 2-5."
		/>
		<Divider />
		<CalcContainer aria="Don't come payment calculator" id="dontComeCalc"
			><CalcBox
				description="Check the payment for a Don't Come bet."
				title="Don't Come Payment Calculator"
			>
				<CalcInput
					calculate={calculateDontCome}
					id="dont_come_pymnt_calc"
					pId="dont_come_calc_result"
					placeholder="$5 minimum"
					step={5}
					title="Enter Don't Come amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo id="alwaysWorking" title="Don't Come Bets Are Always Working" />
		<p class="pb-4">
			Once behind a Point, the Don't Come is always betting against that Point. You cannot turn it
			“Off”. Even if a new Comeout Roll begins the Don't Come still wants a 7 to roll before the
			Point that it is behind. If you don't want you Don't Come Bet behind a certain Point because
			you think it may roll, your only option is to take it back.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dont-come-bets-are-always-working_640x360.webp"
			mdImg="src/images/{url}/dont-come-bets-are-always-working_960x540.webp"
			lgImg="src/images/{url}/dont-come-bets-are-always-working_1280x720.webp"
			title="Don't Come Bets Are Always Working"
			alt="$25 sitting behind the point four. The puck is off and in the Don't Come."
		/>
		<Divider />
		<ContentHeaderTwo
			id="dealerDontCome"
			title="How Can You Bet a Don't Come Bet for the Dealers?"
		/>
		<p class="pb-4">
			You can make a Don't Come bet for the dealers just like the any of the other bets. You only
			need to place it in the DC and let the dealer know you are making a Don't Come bet for them.
			If a dealer sees random dollars sitting in the DC, they're usually not going to assume it's a
			bet for them.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/betting-a-dont-come-for-the-dealers_640x360.webp"
			mdImg="src/images/{url}/betting-a-dont-come-for-the-dealers_960x540.webp"
			lgImg="src/images/{url}/betting-a-dont-come-for-the-dealers_1280x720.webp"
			title="Betting a Don't Come for the Dealers"
			alt="$1 sitting in the middle of the Don't Come"
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
