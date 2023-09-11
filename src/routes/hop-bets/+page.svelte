<script lang="ts">
	import {
		calculateHopLowSide,
		calculateHopHighSide,
		calculateHopFours,
		calculateHopFives,
		calculateHopNines,
		calculateHopTens,
		calculateHopSixes,
		calculateHopSevens,
		calculateHopEights,
		calculateHopHardways
	} from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import CalcInput5 from '$lib/clients/components/calculators/CalcInput5.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Hop Bets in Craps';
	let description: string =
		'Hop bets are are all the possible combinations of the six Points and the combinations of the 7. They are one roll bet and pay either 15:1 or 30:1.';
	let url: string = 'hop-bets';

	let phref: string = 'world';
	let prev: string = 'World';
	let nhref: string = 'come-bets';
	let next: string = 'Come Bets';

	let tblAria: string = 'Hop Bets payment table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['Hopping Hardways', '30:1', '2-2, 3-3, 4-4, 5-5', 'Any other number'],
		['All Other Hops', '15:1', "Easy 4's, 6's, 8's, 10's, 5's, 9's, and 7's", 'Any other number']
	];
	let tblPnts: string[] = ['All the Hops are one roll bets'];
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
		  "name": "Learn Hop Bets",
		  "description": "Hop bets are are all the possible combinations of the six Points and the combinations of the 7. They are one roll bet and pay either 15:1 or 30:1.",
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
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting Hop Bets in Craps" />
		<p class="pb-4">
			Hop Bets have every combination of the dice not including the Aces, Ace Deuce, Yo, and the
			Twelve. There are 1navifferent possible Hop bets as shown which are the possible combinations
			of the 4, 5, 6, 7, 8, 9, and 10.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/hop-bets_640x360.webp"
			mdImg="src/images/{url}/hop-bets_960x540.webp"
			lgImg="src/images/{url}/hop-bets_1280x720.webp"
			title="Hop Bets"
			alt="Up close image of the hop bets."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Are Your Hop Bets on the Craps Table?" />
		<p class="pb-4">
			When you want to make a Hop bet, throw the bet to <Link
				text="the Stickperson"
				href="the-crew"
			/> then tell them how much you want and on which one. E.g. Throw your money to the Stickperson
			and say <Quote text="I'd like $1 each 6's hopping" /> or <Quote
				text="I want a $5 easy four hopping"
			/>. The Hop bet boxes are pretty small so the dealers try to use the corners of the boxes but
			really they do what they can and try to remember who's bets belong to whom.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-hops_640x360.webp"
			mdImg="src/images/{url}/placement-of-hops_960x540.webp"
			lgImg="src/images/{url}/placement-of-hops_1280x720.webp"
			title="Placement of Hops"
			alt="Up close view of four hop bets and the rail of the craps table. There are four colored spots that correspend with each other."
		/>
		<Divider />
		<ContentHeaderTwo title="What Do Hop Bets Pay on a Craps Game?" />
		<p class="pb-4">
			When you bet a Hop bet there are always two possible payouts. 30:1 and 15:1. The Hops that are
			pairs pay 30:1 which are: 2-2 (Hard Four), 3-3 (Hard Six), 4-4 (Hard Eight), and 5-5 (Hard
			Ten). They pay the most on the table because there is only one way to roll each of them. The
			rest of the combinations pay 15:1 because there are two ways to roll each of them.
		</p>
		<ContentImg
			caption="Low Side Hop Payment Pays 15:1"
			smImg="src/images/{url}/low-side-hop-payment_640x360.webp"
			mdImg="src/images/{url}/low-side-hop-payment_960x540.webp"
			lgImg="src/images/{url}/low-side-hop-payment_1280x720.webp"
			title="Low Side Hop Payment Pays 15:1"
			alt="$3 on the hop 4-2. Two green dice show 4-2. Bubble reads $45 payment."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="High Side Hop Payment Pays 30:1"
			smImg="src/images/{url}/high-side-hop-payment_640x360.webp"
			mdImg="src/images/{url}/high-side-hop-payment_960x540.webp"
			lgImg="src/images/{url}/high-side-hop-payment_1280x720.webp"
			title="High Side Hop Payment Pays 30:1"
			alt="$2 on the hop 4-4. Two green dice show 4-4. Bubble reads $60 payment."
		/>
		<Divider />
		<CalcContainer aria="Hop payment calculators"
			><CalcBox
				description="Check the payment for a bet made straight up on any of the Hop bets."
				title="Hop Bet Payment Calculator"
			>
				<CalcInput
					id="hop_low_side_pymnt_calc"
					pId="hop_low_side_calc_result"
					calculate={calculateHopLowSide}
					placeholder="$1 minimum"
					step={1}
					title="Enter amount for any non-pair Hop bet:"
				/>
				<CalcInput
					calculate={calculateHopHighSide}
					id="hop_high_side_pymnt_calc"
					pId="hop_high_side_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter amount for any Hopping Hardway:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderTwo title="What Kind of Hop Bet Terminology Is Used in Craps?" />
		<p>There are several phrases you can use to tell a dealer you want to make a Hop bet.</p>
		<ul class="pl-4 pb-4 list-disc">
			<li>
				<strong>Hop the ___ - </strong><Quote
					text="I would like to hop the thirty-two for a dollar."
				/>
			</li>
			<li>
				<strong>Hopping ___ - </strong><Quote
					text="I would like a hopping hard-eight for a dollar."
				/>
			</li>
			<li>
				<strong>___ on the Hop- </strong><Quote
					text="I would like the sixty-four on the Hop for a dollar."
				/>
			</li>
		</ul>
		<p class="pb-4">
			<strong>For Any and All Hop Bets - </strong>You can refer to all of the Hop bets as if they
			were a two-digit number. E.g. if you wanted to bet a hop bet on the 5, specifically the 3-2
			combination, you could tell the dealer <Quote
				text="I would like thirty-two on the hop for $1."
			/> When making a bet using a two-digit number you should make the bet using the larger number first:
			6-4 would be said as <Quote text="Sixty-four” as oppose to “Forty-six." />
		</p>
		<p class="pb-4">
			<strong>Hopping Hard - </strong>Since there are only 4 possible Hop bets that can come the
			hard way, you only need to tell the dealer which Hardway you would like: <Quote
				text="I would like a hopping hard 6 for $1."
			/>
		</p>
		<p class="pb-4">
			<strong>Hopping Easy - </strong>The 4, 6, 8, and 10 can be hopped 'easy' meaning the numbers
			will come NOT as a pair. E.g. <Quote text="I would like to hop the easy 10 for $1." />
		</p>
		<Divider />
		<ContentHeaderTwo title="What Are Some Common Multi-Bets for Hops in Craps?" />
		<p class="pb-4">
			Since there are 17 different Hop Bets you can bet there are a lot of ways to bet them together
			but for the most part players stick to these most common ones.
		</p>
		<ContentHeaderThree title="Two Number Hop Bets" />
		<p class="pb-4">
			There are 2 combinations for each the 4, 5, 9, and 10 so for $2 you can tell the dealers <Quote
				text="I would
	like to hop the 4's (or 5's, or 9's, or 10's) for $1 each ($2 total)."
			/>
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/2-number-hops_640x360.webp"
			mdImg="src/images/{url}/2-number-hops_960x540.webp"
			lgImg="src/images/{url}/2-number-hops_1280x720.webp"
			title="Two Number Hop Bets"
			alt="An outlined view of the hopping 4's, hopping 5's, hopping 9's, and hopping 10's."
		/>
		<Divider />
		<CalcContainer aria="Two number hop payment calculators"
			><CalcBox
				description="Check the payment for a bet made on the Hopping 4's, 5's, 9's, or 10's."
				title="Two Number Hop Bet Payment Calculators"
			>
				<CalcInput5
					calculate={calculateHopFours}
					id="hop_fours_pymnt_calc"
					mainTitle="Hop 4's"
					pId="hop_fours_calc_result"
					placeholder="$1 minimum"
					rollCombo={['3-1', '2-2']}
					valueTitles={['Easy 4', 'Hard 4']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
				<CalcInput5
					calculate={calculateHopFives}
					id="hop_fives_pymnt_calc"
					mainTitle="Hop 5's"
					pId="hop_fives_calc_result"
					placeholder="$1 minimum"
					rollCombo={['4-1', '3-2']}
					valueTitles={['Forty-One', 'Thirty-Two']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
				<CalcInput5
					calculate={calculateHopNines}
					id="hop_nines_pymnt_calc"
					mainTitle="Hop 9's"
					pId="hop_nines_calc_result"
					placeholder="$1 minimum"
					rollCombo={['6-3', '5-4']}
					valueTitles={['Sixty-Three', 'Fifty-Four']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
				<CalcInput5
					calculate={calculateHopTens}
					id="hop_tens_pymnt_calc"
					mainTitle="Hop 10's"
					pId="hop_tens_calc_result"
					placeholder="$1 minimum"
					rollCombo={['6-4', '5-5']}
					valueTitles={['Easy 10', 'Hard 10']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderThree title="Three Number Hop Bets" />
		<p class="pb-4">
			There are 3 combinations for each the 6, 7, and 8 so for $3 you can tell the dealers <Quote
				text="I would like
	6's (or 7's, or 8's) on the hop for $1 each ($3 total)."
			/>
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/3-number-hops_640x360.webp"
			mdImg="src/images/{url}/3-number-hops_960x540.webp"
			lgImg="src/images/{url}/3-number-hops_1280x720.webp"
			title="Three Number Hop Bets"
			alt="An outlined view of the hopping 7's, hopping 6's, and hopping 8's."
		/>
		<Divider />
		<CalcContainer aria="Three number hop payment calculators"
			><CalcBox
				description="Check the payment for a bet made on the Hopping 6's, 7's, or 8's."
				title="Three Number Hop Bet Payment Calculators"
			>
				<CalcInput5
					calculate={calculateHopSixes}
					id="hop_sixes_pymnt_calc"
					mainTitle="Hop 6's"
					pId="hop_sixes_calc_result"
					placeholder="$1 minimum"
					rollCombo={['5-1', '4-2', '3-3']}
					valueTitles={['Fifty-One', 'Forty-Two', 'Hard 6']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
				<CalcInput5
					calculate={calculateHopSevens}
					id="hop_sevens_pymnt_calc"
					mainTitle="Hop 7's"
					pId="hop_sevens_calc_result"
					placeholder="$1 minimum"
					rollCombo={['6-1', '5-2', '4-3']}
					valueTitles={['Sixty-One', 'Fifty-Two', 'Forty-Three']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
				<CalcInput5
					calculate={calculateHopEights}
					id="hop_eights_pymnt_calc"
					mainTitle="Hop 8's"
					pId="hop_eights_calc_result"
					placeholder="$1 minimum"
					rollCombo={['6-2', '5-3', '4-4']}
					valueTitles={['Sixty-Two', 'Fifty-Three', 'Hard 8']}
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderThree title="Four Number Hop Bet" />
		<p class="pb-4">
			There are four different hopping hardways so you can tell the dealer <Quote
				text="I would like the hopping hardways for $1 each ($4 total)."
			/>
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/4-number-hops_640x360.webp"
			mdImg="src/images/{url}/4-number-hops_960x540.webp"
			lgImg="src/images/{url}/4-number-hops_1280x720.webp"
			title="Four Number Hop Bets"
			alt="An outlined view of the four hopping hardways."
		/>
		<Divider />
		<CalcContainer aria="Four number hop calculator"
			><CalcBox
				description="Check the payment for a bet made on the Hopping Hardways."
				title="Hopping Hardways Payment Calculator"
			>
				<CalcInput
					calculate={calculateHopHardways}
					id="hop_hardways_pymnt_calc"
					pId="hop_hardways_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter amount to bet on EACH Hop:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
		<ContentHeaderThree title="How Do You Bet the Hops for the Dealers in Craps?" />
		<p class="pb-4">
			You can always bet the Hops for the dealers by throwing the money to the Stickperson and
			telling them which number(s) you would like to Hop for the dealers.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/dealer-hop-bet_640x360.webp"
			mdImg="src/images/{url}/dealer-hop-bet_960x540.webp"
			lgImg="src/images/{url}/dealer-hop-bet_1280x720.webp"
			title="Dealer Hop Bet"
			alt="$1 in the middle of the hopping 4-2."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
