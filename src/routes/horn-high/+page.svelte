<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/ContentMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput4 from '$lib/clients/components/calculators/CalcInput4.svelte';
	import {
		calculateHornHighAces,
		calculateHornHighAceDeuce,
		calculateHornHighYo,
		calculateHornHighTwelve
	} from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentUl2 from '../../lib/clients/components/contentPages/Content-ul-b.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting the Horn High in Craps';
	let description: string =
		'There are four Horn Highs in Craps; the Horn High Aces, the Horn High Ace Deuce, the Horn High Yo, and the Horn High Twelve.';
	let url: string = 'horn-high';

	let phref: string = 'horn';
	let prev: string = 'Horn';
	let nhref: string = 'world';
	let next: string = 'World';

	let pageLinks: PageMenu[] = [
		{
			title: "The Four Horn High's",
			href: '#fourHornHighs',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn High Placement',
			href: '#hornHighPlacement',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn High Payment',
			href: '#hornHighPayment',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Horn High Calculators',
			href: '#hornHighCalcs',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.jpg'
	};

	let tblAria: string = 'Horn High Payment Table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [
		['Low Side Hits', '11:5', '3 or 11', 'Any other number'],
		['High Side Hits', '26:5', '2 or 12', 'Any other number'],
		['Low Side Hits Directly', '27:5', '3 or 11', 'Any other number'],
		['High Side Hits Directly', '57:5', '2 or 12', 'Any other number']
	];
	let tblPnts: string[] = [
		'All the Horn Highs are one roll bets',
		'All the Horn Highs must be bet in increments of $5.'
	];
	let liBs = [
		{
			title: 'How the dice land:',
			subTitle: ['Directly -', 'Indirectly -', 'High Side -', 'Low Side -'],
			items: [
				'The Horn High that you bet is the number that rolled. For example, you bet the Horn High Twelve and the Twelve rolled or you bet the Horn High Ace Deuce and the Ace Deuce rolls. That is a direct hit.',
				'One of the other numbers rolled. For example, you bet the Horn High Aces and the Twelve rolled or you bet the Horn High Yo and the Aces roll. Those are indirect hits.',
				'The Horn High Aces and the Horn High Twelve pay the exact same when they hit directly or indirectly because both the Aces and the Twelve pay 30 to 1. They are both considered the high side.',
				'The Horn High Ace Deuce and the Horn High Yo pay the exact same when they hit directly or indirectly because both the Ace Deuce and the Yo pay 15 to 1. They are both considered the low side.'
			]
		},
		{
			title: 'The Horn High will pay 1 of 4 payments:',
			subTitle: ['$57 -', '$27 -', '$26 -', '$11 -'],
			items: [
				'High side hits directly. For example, Horn High Twelve, and Twelve rolls.',
				'Low side hits directly. For example, Horn High Yo, and Yo rolls.',
				'High side hits indirectly. For example, Horn High Ace Deuce, and Twelve Rolls.',
				'Low side hits indirectly. For example, Horn High Aces, and Yo rolls.'
			]
		}
	];
	let liBs2 = [
		{
			title: 'Three possible payments:',
			subTitle: ['$57 -', '$26 -', '$11 -'],
			items: [
				'The bet hits directly.',
				'The opposite high side number is rolled. E.g. you bet the Horn High Aces and the Twelve rolled.',
				'The low side rolled. E.g. you bet the Horn High Twelve and the Ace Deuce or Yo rolled. Ace Deuce and Yo are the low side numbers.'
			]
		}
	];
	let liBs3 = [
		{
			title: 'Three possible payments:',
			subTitle: ['$27 -', '$11 -', '$26 -'],
			items: [
				'The bet hits directly.',
				'The opposite low side number is rolled. E.g. you bet the Horn High Yo and the Ace Deuce rolled.',
				'The high side rolled. E.g. you bet the Horn High Ace Deuce and the Aces or Twelve rolled. Aces and Twelve are the high side numbers.'
			]
		}
	];
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
		  "name": "Learn the Horn High",
		  "description": "There are four Horn Highs in Craps; the Horn High Aces, the Horn High Ace Deuce, the Horn High Yo, and the Horn High Twelve. ",
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
			sectionTitle="Proposition Bets"
			title="Betting the Horn High in Craps"
			{pageData}
		/>
		<p class="pb-4">
			There are four different Horn High's that all bet the same numbers as the Horn. They are the
			Horn High Yo, Horn High Ace Deuce, Horn High Aces, and the Horn High Twelve.
		</p>
		<p class="pb-4">
			The difference in each is you are adding an extra unit to one of those bets; the Aces, Aces
			Deuce, Twelve, or the Yo in order to determine which Horn High you're betting.
		</p>
		<p class="pb-4">
			Horn High's are great if you want to throw a nickel in, spread your money around a bunch of
			prop bets, and pick a special number you want to roll, like.. the Yo. <Quote
				text="Nickel Horn High Yo!"
			/>
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/horn-high_640x360.webp"
			mdImg="src/images/{url}/horn-high_960x540.webp"
			lgImg="src/images/{url}/horn-high_1280x720.webp"
			title="Horn High"
			alt="Up close overhead view of the horn highs on the craps layout."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="fourHornHighs"
			title="What Are the Four Different Horn High's in Craps?"
		/>
		<p class="pb-4">
			If you bet a four-dollar <Link text="Horn" href="horn" /> then took another dollar and added it
			to the Yo then you would be betting a Horn High Yo. If instead you took that extra dollar and put
			it on the Twelve you would be betting a Horn High Twelve. I presume the Horn High was created in
			order to make betting simpler. Betting four dollars requires either splashing four (4) dollar cheques
			or betting a five-dollar cheque then having <Link text="the Stickperson" href="the-crew" /> tell
			the base dealer to give a dollar change. Either way, it's easier to make a five-dollar bet.
		</p>
		<ContentImg
			caption="$5 Horn High Yo"
			smImg="src/images/{url}/5-horn-high-yo-1_640x360.webp"
			mdImg="src/images/{url}/5-horn-high-yo-1_960x540.webp"
			lgImg="src/images/{url}/5-horn-high-yo-1_1280x720.webp"
			title="$5 Horn High Yo"
			alt="Split image. On top is $5 on the Horn High Yo. On bottom is $1 each on the aces, twelve, and ace deuce. There are two dollars on the yo."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 Horn High Ace Deuce"
			smImg="src/images/{url}/5-horn-high-ace-deuce-1_640x360.webp"
			mdImg="src/images/{url}/5-horn-high-ace-deuce-1_960x540.webp"
			lgImg="src/images/{url}/5-horn-high-ace-deuce-1_1280x720.webp"
			title="$5 Horn High Ace Deuce"
			alt="Split image. On top is $5 on the Horn High Ace Deuce. On bottom is $1 each on the aces, twelve, and yo. There are two dollars on the ace deuce."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 Horn High Aces"
			smImg="src/images/{url}/5-horn-high-aces-1_640x360.webp"
			mdImg="src/images/{url}/5-horn-high-aces-1_960x540.webp"
			lgImg="src/images/{url}/5-horn-high-aces-1_1280x720.webp"
			title="$5 Horn High Aces"
			alt="Split image. On top is $5 on the Horn High Aces. On bottom is $1 each on the ace deuce, twelve, and yo. There are two dollars on the aces."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 Horn High Twelve"
			smImg="src/images/{url}/5-horn-high-twelve-1_640x360.webp"
			mdImg="src/images/{url}/5-horn-high-twelve-1_960x540.webp"
			lgImg="src/images/{url}/5-horn-high-twelve-1_1280x720.webp"
			title="$5 Horn High Twelve"
			alt="Split image. On top is $5 on the Horn High Twelve. On bottom is $1 each on the aces, ace deuce, and yo. There are two dollars on the twelve."
		/>
		<Divider />
		<ContentHeaderTwo
			id="hornHighPlacement"
			title="Where Is Your Horn High Bet on the Craps Table?"
		/>
		<p class="pb-4">
			For the most part, all of the Horn Highs are separated into two sections: the left side of the
			table and the right side of the table. If two players from the same side of the table bet the
			same Horn High we wouldn't even be able to fit both cheques in the box. There isn't enough
			room for them both so we would have to go over the edges or put the edge of one cheque on top
			of the other. Whatever we need to do in order to get an understanding of where the bets should
			be.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-a-horn-high_640x360.webp"
			mdImg="src/images/{url}/placement-of-a-horn-high_960x540.webp"
			lgImg="src/images/{url}/placement-of-a-horn-high_1280x720.webp"
			title="Placement of a Horn High"
			alt="Overhead up close view of the Horn High bets and the craps table rail. There are eight color coded spots on the bets referencing eight colored spots on the rail."
		/>
		<Divider />
		<ContentHeaderTwo id="hornHighPayment" title="What Does the Horn High Pay on a Craps Game?" />
		<p class="pb-4">
			The Horn High's are some of the most confusing bets to pay on a Craps table. There are only
			four payments you need to know in order to pay all the bets but it's knowing when to apply
			each of those four numbers that makes paying them so difficult. You need to understand a few
			things before you'll be able to figure out the payments of the Horn Highs right off the bat.
		</p>
		<ContentUl2 {liBs} />
		<div class="pb-4" />
		<ContentHeaderThree title="$5 Horn High Aces and Horn High Twelve" />
		<p class="pb-4">
			There are three possible outcomes/payments when you have to pay both the Horn High Aces and
			the Horn High Twelve:
		</p>
		<ContentUl2 liBs={liBs2} />
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Aces has $2 on the Aces and $1 on the other three numbers. If the Aces rolled
			it would win $60 ($2 x 30) minus $3 (the other losing bets - $1 on each the Twelve, Ace Deuce,
			and Yo) for a payment of $57.
		</p>
		<ContentImg
			caption="$5 Horn High Twelve Direct Hit Payment"
			smImg="src/images/{url}/5-hh-twelve-direct_640x360.webp"
			mdImg="src/images/{url}/5-hh-twelve-direct_960x540.webp"
			lgImg="src/images/{url}/5-hh-twelve-direct_1280x720.webp"
			title="$5 Horn High Twelve Direct Hit Payment"
			alt="$1 each on the aces, ace deuce, and yo. There are two dollars on the twelve. Two green dice show 6-6. A bubble reads $57 payment."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 Horn High Aces Direct Hit Payment"
			smImg="src/images/{url}/5-hh-aces-direct_640x360.webp"
			mdImg="src/images/{url}/5-hh-aces-direct_960x540.webp"
			lgImg="src/images/{url}/5-hh-aces-direct_1280x720.webp"
			title="$5 Horn High Aces Direct Hit Payment"
			alt="$1 each on the twelve, ace deuce, and yo. There are two dollars on the aces. Two green dice show 1-1. A bubble reads $57 payment."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Twelve has $2 on the Twelve and $1 on the other three numbers. If the opposite
			high side rolled, the Aces, it would win $30 ($1 x 30) minus $4 (the other losing bets - $2 on
			the Twelve and $1 on each the Aces Deuce and Yo) for a payment of $26.
		</p>
		<ContentImg
			caption="$5 Horn High Twelve Opposite High Side Payment"
			smImg="src/images/{url}/5-hh-twelve-opp-high_640x360.webp"
			mdImg="src/images/{url}/5-hh-twelve-opp-high_960x540.webp"
			lgImg="src/images/{url}/5-hh-twelve-opp-high_1280x720.webp"
			title="$5 Horn High Twelve Opposite High Side Payment"
			alt="A $5 Horn High Twelve has $2 on the Twelve and $1 on the other three numbers. If the opposite high side rolled, the Aces, it would win $30 ($1 x 30) minus $4 (the other losing bets - $2 on the Twelve and $1 on each the Aces Deuce and Yo) for a payment of $26."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Aces has $2 on the Aces and $1 on the other three numbers. If an Ace Deuce
			rolled it would win $15 ($1 x 15) minus $4 (the other losing bets - $2 on the Twelve and $1
			each on the Aces and Yo) for a payment of $11. Since the Yo pays the same as the Ace Deuce, if
			their places were switched, the end payment ($11) would still be the same.
		</p>
		<ContentImg
			caption="$5 Horn High Aces Low Side Hits"
			smImg="src/images/{url}/5-hh-aces-low-side_640x360.webp"
			mdImg="src/images/{url}/5-hh-aces-low-side_960x540.webp"
			lgImg="src/images/{url}/5-hh-aces-low-side_1280x720.webp"
			title="$5 Horn High Aces Low Side Hits"
			alt="$1 each on the twelve, ace deuce, and the yo, There are two dollars on the Aces. Two green dice show 1-2. A bubble reads $11 payment."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="$5 Horn High Ace Deuce and Horn High Yo" />
		<p class="pb-4">
			There are three possible outcomes/payments possible when you pay both the Horn High Ace Deuce
			and the Horn High Yo.
		</p>
		<ContentUl2 liBs={liBs3} />
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Yo has $2 on the Yo and $1 on the other three numbers. If the Yo rolled it
			would win $30 ($2 x 15) minus $3 (the other losing bets - $1 on each the Ace Deuce, Aces, and
			Twelve) for a payment of $27.
		</p>
		<ContentImg
			caption="$5 Horn High Yo Direct Hit Payment"
			smImg="src/images/{url}/5-hh-yo-direct_640x360.webp"
			mdImg="src/images/{url}/5-hh-yo-direct_960x540.webp"
			lgImg="src/images/{url}/5-hh-yo-direct_1280x720.webp"
			title="$5 Horn High Yo Direct Hit Payment"
			alt="$1 each on the aces, ace deuce, and twelve. There are two dollars on the yo. Two green dice show 5-6. A bubble reads $27 payment."
		/>
		<div class="pb-4" />
		<ContentImg
			caption="$5 Horn High Ace Deuce Direct Hit Payment"
			smImg="src/images/{url}/5-hh-ace-deuce-direct_640x360.webp"
			mdImg="src/images/{url}/5-hh-ace-deuce-direct_960x540.webp"
			lgImg="src/images/{url}/5-hh-ace-deuce-direct_1280x720.webp"
			title="$5 Horn High Ace Deuce Direct Hit Payment"
			alt="$1 each on the aces, yo, and twelve. There are two dollars on the ace deuce. Two green dice show 1-3. A bubble reads $27 payment."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Ace Deuce has $2 on the Ace Deuce and $1 on the other three numbers. If the
			opposite low side rolled, the Yo, it would win $15 ($1 x 15) minus $4 (the other losing bets -
			$2 on the Ace Deuce and $1 on each the Aces and Twelve) for a payment of $11.
		</p>
		<ContentImg
			caption="$5 Horn High Ace Deuce Opposite Low Side Payment."
			smImg="src/images/{url}/5-hh-ace-deuce-opp-low_640x360.webp"
			mdImg="src/images/{url}/5-hh-ace-deuce-opp-low_960x540.webp"
			lgImg="src/images/{url}/5-hh-ace-deuce-opp-low_1280x720.webp"
			title="$5 Horn High Ace Deuce Opposite Low Side Payment."
			alt="$1 each on the aces, twelve, and yo. There are two dollars on the ace deuce. Two green dice show 5-6. A bubble reads $11 payment."
		/>
		<div class="pb-4" />
		<p class="pb-4">
			A $5 Horn High Yo has $2 on the Yo and $1 on the other three numbers. If a Twelve rolled it
			would win $30 ($1 x 30) minus $4 (the other losing bets - $2 on the Yo and $1 each on the Ace
			Deuce and Aces) for a payment of $26. Since the Twelve pays the same as the Aces, if their
			places were switched, the end payment ($26) would still be the same.
		</p>
		<ContentImg
			caption="$5 Horn High Yo High Side Payment"
			smImg="src/images/{url}/5-hh-yo-high-side_640x360.webp"
			mdImg="src/images/{url}/5-hh-yo-high-side_960x540.webp"
			lgImg="src/images/{url}/5-hh-yo-high-side_1280x720.webp"
			title="$5 Horn High Yo High Side Payment"
			alt="$1 each on the aces, twelve, and ace deuce. There are two dollars on the yo. Two green dice show 6-6. A bubble reads $26 payment."
		/>
		<Divider />
		<CalcContainer aria="Horn high payment calculators" id="hornHighCalcs"
			><CalcBox
				description="Check the payment for a bet made on the four Horn High bets."
				title="Horn High Payment Calculators"
			>
				<CalcInput4
					calculate={calculateHornHighAces}
					id="horn_high_aces_pymnt_calc"
					mainTitle="Horn High Aces"
					pId="horn_high_aces_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the Horn High Aces:"
				/>
				<CalcInput4
					calculate={calculateHornHighAceDeuce}
					id="horn_high_ace_deuce_pymnt_calc"
					mainTitle="Horn High Ace Deuce"
					pId="horn_high_ace_deuce_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the Horn High Ace Deuce:"
				/>
				<CalcInput4
					calculate={calculateHornHighYo}
					id="horn_high_yo_pymnt_calc"
					mainTitle="Horn High Yo"
					pId="horn_high_yo_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the Horn High Yo:"
				/>
				<CalcInput4
					calculate={calculateHornHighTwelve}
					id="horn_high_twelve_pymnt_calc"
					mainTitle="Horn High Twelve"
					pId="horn_high_twelve_calc_result"
					placeholder="$5 minimum"
					rollValues={[2, 3, 11, 12]}
					valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
					step={5}
					title="Enter amount on the Horn High Twelve:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
