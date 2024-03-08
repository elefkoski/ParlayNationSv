<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '../../lib/clients/components/Link.svelte';

	let title: string = 'The Craps Table';
	let description: string =
		"Don't walk up to the Craps Table clueless. Learn the different betting areas as well as all the equipment the dealers use on the game.";
	let url: string = 'the-craps-table';

	let phref = 'the-crew';
	let prev = 'The Crew';
	let nhref = 'the-dice';
	let next = 'The Dice';

	let pageLinks: PageMenu[] = [
		{
			title: 'The Rail',
			href: '#railArea',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Proposition Bets',
			href: '#propArea',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Betting Areas',
			href: '#betArea',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Craps Bank',
			href: '#bankArea',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Checking Table Limits',
			href: '#tableLimits',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Puck',
			href: '#thePuck',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Stick',
			href: '#theStick',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Bowl',
			href: '#theBowl',
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
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "The Craps Table",
		  "description": "Don't walk up to the Craps Table clueless. Learn the different betting areas as well as all the equipment the dealers use on the game.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Craps Basics" title="The Craps Table" {pageData} />
		<p class="pb-4">
			Here is the Craps table. I know there's a lot on there but once you start to break it down
			piece by piece, bet by bet you realize you don't need to be concerned with most of it. It's
			got four main sections: the Rail, the Betting Area, Proposition Betting Area, and the Bank.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-table_640x360.webp"
			mdImg="src/images/{url}/the-table_960x540.webp"
			lgImg="src/images/{url}/the-table_1280x720.webp"
			title="The Craps Table"
			alt="Overhead view of Craps table with highlighted areas of the bank, betting areas, proposition bets, and the rail."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="railArea" title="The Rail on a Craps Table" />
		<p class="pb-4">
			The rail is where you place your cheques. It's divided into sections, and each section is for
			a player. After you buy in, you put your cheques in the rail sideways, and you're ready to
			play. Under the rail is a second rail where you place other objects such as drinks or an
			ashtray. Be careful using this rail underneath with your belongings. People leave their stuff
			on it, players spill their drinks on it, and I would be afraid of players pickpocketing a
			purse or anything similar. Just be careful down there.
		</p>
		<ContentHeaderTwo id="propArea" title="Proposition Bets on the Craps Table" />
		<p class="pb-4">
			This whole middle area of the Craps table is reserved for <Link
				text="Proposition Bets"
				href="proposition-bets"
			/>, most of which are one-roll bets. It serves both sides of the table, so all 16 players can
			bet on this area simultaneously. And believe me, when they do, all you see is a skyline of
			cheques covering everything. It gets crazy.
		</p>
		<ContentHeaderTwo id="betArea" title="Craps Table Betting Areas" />
		<p class="pb-4">
			You play the majority of the game in these two areas. The left side can serve up to eight
			players, and the right side another eight. You are playing the same game at the same time but
			on opposite ends of the Craps Table. The Betting Area is where you make your <Link
				text="Pass Line Bets"
				href="the-pass-line"
			/>, <Link text="Don't Pass Bets" href="the-donts" />, <Link
				text="Place Bets"
				href="place-bets"
			/>, <Link text="Come Bets" href="come-bets" />.
		</p>
		<ContentHeaderTwo id="bankArea" title="The Craps Table Bank" />
		<p class="pb-4">
			The money the casino uses to run the game is called The Bank. players' <Link
				text="buy-ins"
				href="the-stages"
			/> and <Link text="color-ups " href="the-stages" />come from there and are where dealers get
			their money to deal the game. The Craps Bank in this picture has a total of $260,800.
		</p>
		<Divider />
		<ContentHeaderTwo id="tableLimits" title="Are You Watching the Craps Table Limits?" />
		<p class="pb-4">
			The first thing is first: find the table with the lowest minimum bet. You'll find tables at
			their lowest limits during the day or middle of the week and at their highest on the weekends.
			A $5 game can eat $100 in a matter of minutes so make your money last by finding the cheapest
			table.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/craps-table-limits_640x360.webp"
			mdImg="src/images/{url}/craps-table-limits_960x540.webp"
			lgImg="src/images/{url}/craps-table-limits_1280x720.webp"
			title="Craps Table Limits"
			alt="Craps table limit sign with $10 minimum bet and $50 maximum bet."
		/>
		<Divider />
		<ContentHeaderTwo id="thePuck" title="What Is the Puck for on a Craps Game?" />
		<p class="pb-4">
			The Puck is double-sided and tells you which of the two stages the Craps game is in. One side
			is black and reads OFF. The other is white and reads ON.
		</p>
		<p class="mb-4">
			When the Puck reads OFF it will sit in the Don't Come betting area. This is known as the <Link
				text="Comeout
		Roll"
				href="the-stages"
			/> and is the beginning of the game. This is the time to make your <Link
				text="Pass Line"
				href="pass-line-basics"
			/> and <Link text="Don't Pass" href="dont-pass" /> bets.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/puck-off_640x360.webp"
			mdImg="src/images/{url}/puck-off_960x540.webp"
			lgImg="src/images/{url}/puck-off_1280x720.webp"
			title="Puck Off"
			alt="The Puck sitting in the OFF position in the Don't Come."
		/>
		<p class="my-4">
			When the puck reads ON it will be sitting in one of the 6 Points: 4, 5, 6, 8, 9, or 10. This
			is known as the <Link text="Intermediate Roll" href="the-stages" /> and means the players are in
			the middle of the game. This is the time to make your <Link
				text="Place Bets"
				href="place-bet-basics"
			/>, <Link text="Come Bets" href="come-bet-basics" />, <Link
				text="Don't Come"
				href="dont-come"
			/> Bets, and any <Link text="Hardways" href="the-hardways" /> you may want.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/puck-on_640x360.webp"
			mdImg="src/images/{url}/puck-on_960x540.webp"
			lgImg="src/images/{url}/puck-on_1280x720.webp"
			title="Puck On"
			alt="The Puck sitting in the ON position and sitting in the Point 6."
		/>
		<p class="mt-4">
			Both Pucks must always be in the same position as the opposite side of the table. If you ever
			see either of these Pucks in a different position than the other you must tell the Dealer or
			Boxperson immediately because that's a HUGE mistake that needs to be fixed.
		</p>
		<Divider />
		<ContentHeaderTwo id="theStick" title="What Is the Stick for on a Craps Table?" />
		<p class="pb-4">
			The Stick is used to send dice to the players and collect them after the roll since some
			tables can be as long as 16ft. It is usually made of rattan, the material used in wicker, and
			is incredibly flexible, helping to navigate the dice around the layout. The stick is used by a
			dealer called <Link text="the Stickperson" href="the-crew" />, who uses it to run the game's
			pace, point at people who need to get paid or push cheuques all over the place. It's pretty
			fun to play with the stick.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-stick_640x360.webp"
			mdImg="src/images/{url}/the-stick_960x540.webp"
			lgImg="src/images/{url}/the-stick_1280x720.webp"
			title="The Stick"
			alt="Two dice near spot twelve on the layout. The dice are being pulled back by a black stick and it's being reflected in the mirror."
		/>
		<Divider />
		<ContentHeaderTwo id="theBowl" title="Why Is There a Bowl on the Craps Table?" />
		<p class="pb-4">
			The Bowl is used to hold the extra dice not being used by <Link
				text="the shooter"
				href="the-dice"
			/>. The Stickperson will lay the bowl down, place the remaining three dice inside, and place
			it against the mirror while the shooter is shooting. If a die or both dice land in the bowl
			during a roll then it is considered a no-roll.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-craps-bowl_640x360.webp"
			mdImg="src/images/{url}/the-craps-bowl_960x540.webp"
			lgImg="src/images/{url}/the-craps-bowl_1280x720.webp"
			title="The Craps Bowl"
			alt="An empty table with the stick laying flat and the bowl resting on top of the stick. Five dice sit in the bowl."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
