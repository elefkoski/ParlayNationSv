<script lang="ts">
	import {
		calculateHighLow,
		calculateElevenTwelve,
		calculateAcesAceDeuce,
		calculateSevenEleven,
		calculateHighLowYo,
		calculateThreeWay
	} from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
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
		  "name": "Learn Multi-Bets",
		  "description": "Multi-Bets are combinations of several different proposition bets at once. The C&E, Horn, Horn High, and World are the most common but there are plenty more.",
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
		<ContentHeaderOne
			sectionTitle="Proposition Bets"
			title="Betting Multi-Bets at the Craps Table"
		/>
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
		<Divider />
		<ContentHeaderTwo title="Each vs Split in Craps" />
		<ContentHeaderThree title="Betting Each" />
		<p class="pb-4">
			When you use the phrase <Quote text="Each" /> you're betting the same amount of money on two different
			numbers. E.g. <Quote text="Can I have $1 'each' High-Low?" />
		</p>
		<ContentHeaderThree title="Betting Split" />
		<p class="pb-4">
			You can split two different two numbers with an odd amount (like $5) with the phrase <Quote
				text="Split"
			/>. E.g. <Quote text="Can I have a nickel split on the Aces-Ace Deuce?" /> Some casinos won't allow
			odd amounted splits ($5) because they're improper ($2.50 on each).
		</p>
		<Divider />
		<ContentHeaderTwo title="What Are Some Common Two Number Multi-Bets in Craps?" />
		<ContentHeaderThree title="High - Low" />
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
		<CalcContainer aria="High low payment calculator"
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
		<Divider />
		<ContentHeaderThree title="Eleven - Twelve(ET)" />
		<p class="pb-4">
			While you normally would use the word <Quote text="Yo" /> when betting an eleven, when you bet
			it with the twelve, you would use the word <Quote text="Eleven" />. Example: <Quote
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
		<CalcContainer aria="Eleven twelve payment calculator"
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
		<Divider />
		<ContentHeaderThree title="Aces - Ace Deuce" />
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
		<CalcContainer aria="Aces ace deuce payment calculator"
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
		<Divider />
		<ContentHeaderThree title="Seven - Eleven" />
		<p class="pb-4">
			Not only does it rhyme but when you're betting the <Link text="Don't Pass" href="dont-pass" />
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
		<CalcContainer aria="Seven eleven payment calculator"
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
		<Divider />
		<ContentHeaderTwo title="What Are Some Common Three Number Multi-Bets in Craps?" />
		<p class="pb-4">
			There are a couple popular bets that include three numbers and they must be bet in multiples
			of three.
		</p>
		<ContentHeaderThree title="High-Low-Yo" />
		<p class="pb-4">
			This is betting the 12, the Aces, and the Yo. Most people love the Yo and who doesn't like the
			High and the Low, they are the two highest paid bets on the table.
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
		<CalcContainer aria="High low yo payment calculator"
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
		<Divider />
		<ContentHeaderThree title="Three Way Craps" />
		<p class="pb-4">
			The Three Way Craps bets the Aces, Ace Deuce, and the Twelve. It is more of a hedge bet.
			Whenever people bet the Pass Line on the <Link text="Comeout Roll" href="the-stages" /> they lose
			when any of those three numbers are rolled so it's not a bad bet when you're deciding to hedge.
		</p>
		<p class="pb-4">
			The Three Way Craps and Any Craps are similar because they both bet the same numbers but
			different in how the money is distributed. A Three way is betting each of the numbers
			individually so depending on which one rolls, the payment is different. The Any Craps is
			betting whether or not any of the three of will come and it pays the same regardless of which
			rolls.
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
		<CalcContainer aria="Three way craps payment calculator"
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
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
