<script lang="ts">
	import { calculateWorld } from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Betting the World in Craps';
	let description: string =
		'The World is a Horn with extra on the Any 7. You must make this bet in increments of five and is a one-roll bet. When 7 rolls the bet is a push.';
	let url: string = 'world';

	let phref: string = 'horn-high';
	let prev: string = 'Horn High';
	let nhref: string = 'hop-bets';
	let next: string = 'Hop Bets';

	let tblAria: string = 'World payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['High Side', '26:5', '2 or 12', 'Any other number'],
		['Low Side', '11:5', '3 or 11', 'Any other number']
	];
	let tblPnts: string[] = ['The World is a one roll bet'];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn the World",
		  "description": "The World is a Horn with extra on the Any 7. You must make this bet in increments of five and is a one-roll bet. When 7 rolls the bet is a push.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting The World in Craps" />
		<p class="pb-4">
			People love to bet the <Link text="Horn" href="horn" /> and the <Link
				text="Horn Highs"
				href="horn-high"
			/> during the <Link text="Comeout Roll" href="the-stages" />. It's a one-roll bet and the
			payoffs can be pretty good but, like most other bets, it falls prey to a roll of the 7. This
			is where the World, aka Whirl, comes into play. The World is a combination of a Horn and an <Link
				text="Any 7"
				href="any-seven"
			/>.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/world_640x360.webp"
			mdImg="src/images/{url}/world_960x540.webp"
			lgImg="src/images/{url}/world_1280x720.webp"
			title="The World"
			alt="Up close overhead view of the world on the craps layout."
		/>
		<Divider />
		<ContentHeaderTwo title="What Is a $5 World in Craps?" />
		<p class="pb-4">
			A $5 World is a $1 on each the Aces, Ace Deuce, Yo, Twelve, and the Any 7. The minimum is
			five-dollars because you must put at least $1 on those five bets so the World needs to be bet
			in increments of five. You can also consider a $5 World to be a $4 Horn with $1 on the Any 7.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/5-world_640x360.webp"
			mdImg="src/images/{url}/5-world_960x540.webp"
			lgImg="src/images/{url}/5-world_1280x720.webp"
			title="$5 World"
			alt="Split image. On top is $5 on the world. On bottom is $1 each on the aces, ace deuce, yo, twelve, and the any seven"
		/>
		<Divider />
		<ContentHeaderTwo title="Where Is Your World on the Craps Table?" />
		<p class="pb-4">
			I would say that the majority of Craps tables don't have a picture of the World on them. The
			World is more of a bet that dealer and players know by heart. Example 2 shows one of the other
			ways I've seen a world set up on a table without the globe image.
		</p>
		<ContentImg
			caption="Placement of World Around Globe"
			smImg="src/images/{url}/placement-of-world-a_640x360.webp"
			mdImg="src/images/{url}/placement-of-world-a_960x540.webp"
			lgImg="src/images/{url}/placement-of-world-a_1280x720.webp"
			title="Placement of World on Globe"
			alt="Overhead view of a blown up picture of a world and the craps table rail. There are eight colored spots on each the world and the rail that correspond with each other."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="Placement of World on Bar"
			smImg="src/images/{url}/placement-of-a-world-b_640x360.webp"
			mdImg="src/images/{url}/placement-of-a-world-b_960x540.webp"
			lgImg="src/images/{url}/placement-of-a-world-b_1280x720.webp"
			title="Placement of World on Bar"
			alt="Overhead view of the center bar above the any seven on the craps table and the craps table rail. There are eight colored spots on each the bar and the rail that correspond with each other."
		/>
		<Divider />
		<ContentHeaderTwo title="What Does a $5 World Pay on the Craps Table?" />
		<p class="pb-4">
			Like all other <Link text="Multi-Bets" href="multi-bets" />, the World pays differently
			depending on what rolls. There are three options: the 7 rolls, the high side rolls (2, 12), or
			the low side rolls (3, 11).
		</p>
		<ContentHeaderThree title="Seven Rolls - Push" />
		<p class="pb-4">
			When the 7 rolls the World is a push; it does not win or lose. It's a push because the dollar
			bet on the Any Seven wins four dollars, and that four dollars pays for the rest of the losing
			bets in the World: the Aces, Ace Deuce, Yo and Twelve.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/5-world-7-rolls_640x360.webp"
			mdImg="src/images/{url}/5-world-7-rolls_960x540.webp"
			lgImg="src/images/{url}/5-world-7-rolls_1280x720.webp"
			title="$5 World Payment - Seven Rolls"
			alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-6. A bubble reads push."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Low Side - $11" />
		<p class="pb-4">
			The Low Side is considered the Ace Deuce or the Yo. When they hit for a dollar they pay $15
			minus $4 (the rest of the other four losing bets) for a payment of $11.
		</p>
		<ContentImg
			caption="$5 World - Ace Deuce Rolls"
			smImg="src/images/{url}/5-world-ace-deuce-hits_640x360.webp"
			mdImg="src/images/{url}/5-world-ace-deuce-hits_960x540.webp"
			lgImg="src/images/{url}/5-world-ace-deuce-hits_1280x720.webp"
			title="$5 World - Ace Deuce Rolls"
			alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-2. A bubble reads $11 payment."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 World - Yo Rolls"
			smImg="src/images/{url}/5-world-yo-hits_640x360.webp"
			mdImg="src/images/{url}/5-world-yo-hits_960x540.webp"
			lgImg="src/images/{url}/5-world-yo-hits_1280x720.webp"
			title="$5 World - Yo Rolls"
			alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 5-6. A bubble reads $11 payment."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="High Side - $26" />
		<p class="pb-4">
			The two High Side numbers are the Aces and Twelve. When either of these numbers roll they pay
			$30 minus $4 (the rest of the other four losing bets) for a payment of $26.
		</p>
		<ContentImg
			caption="$5 World - Aces Roll"
			smImg="src/images/{url}/5-world-aces-hit_640x360.webp"
			mdImg="src/images/{url}/5-world-aces-hit_960x540.webp"
			lgImg="src/images/{url}/5-world-aces-hit_1280x720.webp"
			title="$5 World - Aces Roll"
			alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-1. A bubble reads $26 payment."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 World - Twelve Rolls"
			smImg="src/images/{url}/5-world-twelve-hits_640x360.webp"
			mdImg="src/images/{url}/5-world-twelve-hits_960x540.webp"
			lgImg="src/images/{url}/5-world-twelve-hits_1280x720.webp"
			title="$5 World - Twelve Rolls"
			alt="$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 6-6. A bubble reads $26 payment."
		/>
		<Divider />
		<CalcContainer aria="World payment calculator"
			><CalcBox
				description="Check the payment for a bet made on the World."
				title="World Payment Calculator"
			>
				<CalcInput2
					calculate={calculateWorld}
					id="world_pymnt_calc"
					pId="world_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 7, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Seven', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the World:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet the World for the Dealers?" />
		<p class="pb-4">
			Ideally, multiples of $5 would be best for the dealers. Anything less would be an improper bet
			than requires some odd math for the dealers and usually ends up getting rounded down.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-world_640x360.webp"
			mdImg="src/images/{url}/dealer-world_960x540.webp"
			lgImg="src/images/{url}/dealer-world_1280x720.webp"
			title="Dealer World"
			alt="Split image. On left is $1 in the middle of the proposition bar. On bottom is $1 in the middle of the world."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
