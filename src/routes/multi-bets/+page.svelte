<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import {
		calculateHighLow,
		calculateElevenTwelve,
		calculateAcesAceDeuce,
		calculateSevenEleven,
		calculateHighLowYo,
		calculateThreeWay
	} from '$lib/utils/calculations';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Multi-Bets in Craps';
	let description: string =
		'Multi-Bets are combinations of several different proposition bets at once. The C&E, Horn, Horn High, and World are the most common but there are plenty more.';
	let url: string = 'multi-bets';

	let phref: string = 'the-field';
	let prev: string = 'The Field';
	let nhref: string = 'horn';
	let next: string = 'Horn';

	let pageLinks: PageMenu[] = [
		{
			title: 'Each vs Split',
			href: '#eachVsSplit',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Two Number Bets',
			href: '#twoNumber',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'High - Low Calculator',
			href: '#highLowCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Eleven - Twelve Calculator',
			href: '#elevenTwelveCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Aces - Ace Deuce Calculator',
			href: '#acesAceDeuceCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Seven - Eleven Calculator',
			href: '#sevenElevenCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Three Number Multi-Bets',
			href: '#threeNumber',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'High - Low - Yo Calculator',
			href: '#highLowYoCalc',
			iconD: ['M0 0h24v24H0V0z', 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'],
			iconFills: ['none', '#38BDF8']
		},
		{
			title: 'Three Way Crap Calculator',
			href: '#threeWayCalc',
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
  "headline": "Betting Multi-Bets at the Craps Table",
  "description": "An in-depth look at Multi-Bets in Craps, including strategies for two and three number combinations and the proper terminology for placing these bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/multi-bets",
  "image": "http://parlaynation.com/images/multi-bets/multi-bets-header.webp",
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
    "@id": "http://parlaynation.com/multi-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Multi-Bet Strategies",
      "description": "Strategies and terminology for placing Multi-Bets in Craps, focusing on combinations of two and three straight up bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Each vs Split",
          "description": "Explains the difference between betting 'each' for betting the same amount on two different numbers and 'split' for dividing a bet amount over two numbers."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Common Two Number Multi-Bets",
          "description": "Details on common two-number combinations, including High-Low, Eleven-Twelve (ET), Aces-Ace Deuce, and Seven-Eleven."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Common Three Number Multi-Bets",
          "description": "Overview of popular three-number bet combinations like High-Low-Yo and Three Way Craps."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/multi-bets_640x360.webp",
      "caption": "Multiple bets in the proposition area: $2 split on the eleven twelve, a high low yo, and a $5 c and e split."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/high-low_640x360.webp",
      "caption": "$1 each on the two and the twelve."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/eleven-twelve_640x360.webp",
      "caption": "$1 each on the eleven and the twelve."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/aces-ace-deuce_640x360.webp",
      "caption": "$1 each on the aces and the ace deuce."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/seven-eleven_640x360.webp",
      "caption": "$1 each on the seven and the eleven."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/high-low-yo_640x360.webp",
      "caption": "$1 each on the aces, ace deuce, and the yo."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/three-way-craps_640x360.webp",
      "caption": "$1 each on the aces, ace deuce, and the twelve."
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
			title="Betting Multi-Bets at the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				Multi-Bets are betting the same amount on 2 or 3 different straight up bets. This page goes
				over the most common two and three Multi-Bet combinations that you'll see other players
				betting and the proper way to say them.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/multi-bets_640x360.webp"
				mdImg="src/images/{url}/multi-bets_960x540.webp"
				lgImg="src/images/{url}/multi-bets_1280x720.webp"
				title="Multi-Bets"
				alt="Multiple bets in the proposition area: $2 split on the eleven twelve, a high low yo, and a $5 c and e split."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="eachVsSplit" title="Each vs Split in Craps">
			<ContentHeaderThree title="Betting Each">
				<p class="pb-4">
					When you use the phrase <Quote text="Each" /> you're betting the same amount of money on two
					different numbers. E.g. <Quote text="Can I have $1 'each' High-Low?" />
				</p>
			</ContentHeaderThree>
			<ContentHeaderThree title="Betting Split">
				<p class="pb-4">
					You can split two different two numbers with an odd amount (like $5) with the phrase <Quote
						text="Split"
					/>. E.g. <Quote text="Can I have a nickel split on the Aces-Ace Deuce?" /> Some casinos won't
					allow odd amounted splits ($5) because they're improper ($2.50 on each).
				</p>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="twoNumber" title="What Are Some Common Two Number Multi-Bets in Craps?">
			<ContentHeaderThree title="High - Low">
				<p class="pb-4">
					It's the <Link text="Aces" href="straight-up" /> and the Twelve but when you bet them together
					they are the highest number (12) and the lowest number (2) so we call them <Quote
						text="High-Low"
					/>.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/high-low_640x360.webp"
					mdImg="src/images/{url}/high-low_960x540.webp"
					lgImg="src/images/{url}/high-low_1280x720.webp"
					title="High-Low"
					alt="$1 each on the two and the twelve."
				/>
				<Divider />
				<CalcContainer aria="High low payment calculator" id="highLowCalc"
					><CalcBox
						description="Check the payment for when you bet the same amount on each the High (12) and the Low (2)."
						title="High - Low Payment Calculator"
					>
						<CalcInput
							calculate={calculateHighLow}
							id="high_low_pymnt_calc"
							pId="high_low_calc_result"
							placeholder="$1 minimum"
							step={1}
							title="Enter amount on EACH the High & Low:"
						/>
					</CalcBox></CalcContainer
				>
			</ContentHeaderThree>
			<Divider />
			<ContentHeaderThree title="Eleven - Twelve(ET)">
				<p class="pb-4">
					While you normally would use the word <Quote text="Yo" /> when betting an eleven, when you
					bet it with the twelve, you would use the word <Quote text="Eleven" />. Example: <Quote
						text="Can I have a nickel each
				eleven-twelve?"
					/>People also use the letter combination 'ET'. Example: <Quote
						text="Can I have a nickel each ET?"
					/>
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/eleven-twelve_640x360.webp"
					mdImg="src/images/{url}/eleven-twelve_960x540.webp"
					lgImg="src/images/{url}/eleven-twelve_1280x720.webp"
					title="Eleven - Twelve"
					alt="$1 each on the eleven and the twelve."
				/>
				<Divider />
				<CalcContainer aria="Eleven twelve payment calculator" id="elevenTwelveCalc"
					><CalcBox
						description="Check the payment for when you bet the same amount on each the Eleven - Twelve, often called ET."
						title="Eleven - Twelve Payment Calculator"
					>
						<CalcInput2
							calculate={calculateElevenTwelve}
							id="eleven_twelve_pymnt_calc"
							pId="eleven_twelve_calc_result"
							placeholder="$1 minimum"
							rollValues={[11, 12]}
							valueTitles={['Eleven', 'Twelve']}
							step={1}
							title="Enter amount on EACH the Eleven & Twelve:"
						/>
					</CalcBox></CalcContainer
				>
			</ContentHeaderThree>
			<Divider />
			<ContentHeaderThree title="Aces - Ace Deuce">
				<p class="pb-4">
					You're not going to say anything special for these two. You just say <Quote
						text="Can I have $1 each Aces - Ace Deuce?"
					/>
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/aces-ace-deuce_640x360.webp"
					mdImg="src/images/{url}/aces-ace-deuce_960x540.webp"
					lgImg="src/images/{url}/aces-ace-deuce_1280x720.webp"
					title="Aces - Ace Deuce"
					alt="$1 each on the aces and the ace deuce"
				/>
				<Divider />
				<CalcContainer aria="Aces ace deuce payment calculator" id="acesAceDeuceCalc"
					><CalcBox
						description="Check the payment for when you bet the same amount on each the Aces - Ace Deuce."
						title="Aces - Ace Deuce Payment Calculator"
					>
						<CalcInput2
							calculate={calculateAcesAceDeuce}
							id="aces_ace_deuce_pymnt_calc"
							pId="aces_ace_deuce_calc_result"
							placeholder="$1 minimum"
							rollValues={[2, 3]}
							valueTitles={['Aces', 'Ace Deuce']}
							step={1}
							title="Enter amount on EACH the Aces & Ace Deuce:"
						/>
					</CalcBox></CalcContainer
				>
			</ContentHeaderThree>
			<Divider />
			<ContentHeaderThree title="Seven - Eleven">
				<p class="pb-4">
					Not only does it rhyme but when you're betting the <Link
						text="Don't Pass"
						href="dont-pass"
					/>
					you can use those two numbers to <Link text="hedge your bet" href="to-consider" />.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/seven-eleven_640x360.webp"
					mdImg="src/images/{url}/seven-eleven_960x540.webp"
					lgImg="src/images/{url}/seven-eleven_1280x720.webp"
					title="Seven - Eleven"
					alt="$1 each on the seven and the eleven"
				/>
				<Divider />
				<CalcContainer aria="Seven eleven payment calculator" id="sevenElevenCalc"
					><CalcBox
						description="Check the payment for when you bet the same amount on each the Seven - Eleven."
						title="Seven - Eleven Payment Calculator"
					>
						<CalcInput2
							calculate={calculateSevenEleven}
							id="seven_eleven_pymnt_calc"
							pId="seven_eleven_calc_result"
							placeholder="$1 minimum"
							rollValues={[7, 11]}
							valueTitles={['Seven', 'Eleven']}
							step={1}
							title="Enter amount on EACH the Seven & Eleven:"
						/>
					</CalcBox></CalcContainer
				>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo
			id="threeNumber"
			title="What Are Some Common Three Number Multi-Bets in Craps?"
		>
			<p class="pb-4">
				There are a couple popular bets that include three numbers and they must be bet in multiples
				of three.
			</p>
			<ContentHeaderThree title="High-Low-Yo">
				<p class="pb-4">
					This is betting the 12, the Aces, and the Yo. Most people love the Yo and who doesn't like
					the High and the Low, they are the two highest paid bets on the table.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/high-low-yo_640x360.webp"
					mdImg="src/images/{url}/high-low-yo_960x540.webp"
					lgImg="src/images/{url}/high-low-yo_1280x720.webp"
					title="High - Low - Yo"
					alt="$1 each on the aces, ace deuce, and the yo."
				/>
				<Divider />
				<CalcContainer aria="High low yo payment calculator" id="highLowYoCalc"
					><CalcBox
						description="Check the payment for when you bet the same amount on each the High - Low - Yo."
						title="High - Low - Yo Payment Calculator"
					>
						<CalcInput2
							calculate={calculateHighLowYo}
							id="high_low_yo_pymnt_calc"
							pId="high_low_yo_calc_result"
							placeholder="$1 minimum"
							rollValues={[2, 11, 12]}
							valueTitles={['Low', 'Yo', 'High']}
							step={1}
							title="Enter amount on EACH the High Low & Yo:"
						/>
					</CalcBox></CalcContainer
				>
			</ContentHeaderThree>
			<Divider />
			<ContentHeaderThree title="Three Way Craps">
				<p class="pb-4">
					The Three Way Craps bets the Aces, Ace Deuce, and the Twelve. It is more of a hedge bet.
					Whenever people bet the Pass Line on the <Link text="Comeout Roll" href="the-stages" /> they
					lose when any of those three numbers are rolled so it's not a bad bet when you're deciding
					to hedge.
				</p>
				<p class="pb-4">
					The Three Way Craps and Any Craps are similar because they both bet the same numbers but
					different in how the money is distributed. A Three way is betting each of the numbers
					individually so depending on which one rolls, the payment is different. The Any Craps is
					betting whether or not any of the three of will come and it pays the same regardless of
					which rolls.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/three-way-craps_640x360.webp"
					mdImg="src/images/{url}/three-way-craps_960x540.webp"
					lgImg="src/images/{url}/three-way-craps_1280x720.webp"
					title="Three Way Craps"
					alt="$1 each on the aces, ace deuce, and the twelve."
				/>
				<Divider />
				<CalcContainer aria="Three way craps payment calculator" id="threeWayCalc"
					><CalcBox
						description="Check the payment for for when you bet the same amount on each the Three Way Crap."
						title="Three Way Crap Payment Calculator"
					>
						<CalcInput2
							calculate={calculateThreeWay}
							id="three_way_pymnt_calc"
							pId="three_way_calc_result"
							placeholder="$1 minimum"
							rollValues={[2, 3, 12]}
							valueTitles={['Aces', 'Ace Deuce', 'Twelve']}
							step={1}
							title="Enter amount on EACH the Three Way Crap:"
						/>
					</CalcBox></CalcContainer
				>
				<Divider />
			</ContentHeaderThree>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
