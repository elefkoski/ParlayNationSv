<script lang="ts">
	import MoreLayout from '$lib/clients/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Craps FAQ';
	let description: string =
		"What are the most frequently asked questions by new players about craps? You'll find the answers here.";
	let url: string = 'faq';

	let sets = [
		{
			question: 'Whare are the most common bets on the Craps table?',
			answer:
				"The most common bets on the Craps table are the Pass Line with Odds, Place bets on the 6 and 8, and possibly some Hardways. If you learn these few bets then you'll be able to play with everyone else while having a decent understanding of the game.",
			hashTags: ['passLineBets', 'passLineOdds', 'placeBets', 'theHardways']
		},
		{
			question: 'What is the Pass Line?',
			answer:
				"The Pass Line bets that the shooter is going to establish a Point and will roll it again on before they roll a 7. Most players at the table bet the Pass Line so everyone wins and loses together. It's the same fate that bonds all the players at the table.",
			hashTags: ['learnCraps', 'trueOdds', 'firstCrapsBet', 'comradery']
		},
		{
			question: 'What is a Come Bet?',
			answer:
				'Come bets are like small Pass Line bets. They win on 7 or 11 and lose on the 2, 3, or 12. Otherwise, the Come bet moves into a Point and that Point needs to be rolled again in order to win.',
			hashTags: ['miniPassLine', 'goodBet', 'comeBetOdds', 'rollTwice']
		},
		{
			question: 'What are the Hardways?',
			answer:
				"The Hardways bet that the points 4, 6, 8, or 10 will roll as a pair (Hard). If any of those numbers roll as anything other than a pair then they are considered to have been rolled 'Easy'.",
			hashTags: ['itCameHard', 'brooklynForrest', 'squarePair', 'fourHardFour']
		},
		{
			question: 'Why is Eleven Called Yo?',
			answer:
				"The Eleven is called a Yo because Eleven sounds like Seven and you don't want to mix up the two. During the Intermediate Roll the players don't want to hear Seven because it's how they lose.",
			hashTags: ['yo', 'eleven', 'oneRoll', 'fanFavorite']
		},
		{
			question: 'Can I bet the shooter will not make the Point?',
			answer:
				"Bet the don'ts. They are the Don't Pass, Don't Come, and Overlays. All of these bets need the 7 to roll which makes the shooter, and usually the rest of the table, lose.",
			hashTags: ["theDon'ts", 'darkSide', 'overlays', "don'tCome"]
		},
		{
			question: 'When is it my turn to shoot the dice?',
			answer:
				"Everybody at the table has an opportunity to throw the dice. The current shooter continues to throw the dice until they don't make their Point (7 Out). Once they 7 Out the bowl is dumped and the dice are passed clockwise to the next person.",
			hashTags: ['virginShooter', 'clockwise', 'passLine', 'oneHand']
		},
		{
			question: 'How much do I need to bet?',
			answer:
				'The minimum to bet most of the bets is going to be the table minimum. Bets in the middle are usually $1 minimum unless they bet a combination of numbers then the cost could be $2-3-4. Odds on the Pass Line and Come bets can be less than table minimum.',
			hashTags: ['tableLimits', 'propsAreCheap', 'betToShoot', 'nickelGame']
		},
		{
			question: 'What happens if the dice go off the table?',
			answer:
				'If the dice go off the table the Stickperson will dump the bowl and offer the shooter the remaining dice. If the shooter wants the same die that rolled off the table they will have to tell the dealer "Same dice" before the dealer dumps the bowl so be quick!',
			hashTags: ['noRoll', 'dumpTheBowl', 'dieHigh', 'sameDice']
		},
		{
			question: 'Which bets have the best house edge?',
			answer:
				"The Pass Line with Odds and the Don't Pass with Lay Odds are the best bets on the Craps table. Place bets on the 6 and 8 are the best followed by the 5 and 9 then the 4 and 10. The Field is surprisingly not a bad bet. If it pays triple on the 12 then it turns into a really good bet.",
			hashTags: ['passLineOdds', 'comeBetOdds', 'placeSixEight', "don'tPassLayOdds"]
		}
	];
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
		  "@type": "FAQPage",
		  "mainEntity": [{
			"@type": "Question",
			"name": "What are the most common bets on the Craps table?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The most common bets on the Craps table are the Pass Line with Odds, Place bets on the 6 and 8, and possibly some Hardways. If you learn these few bets then you'll be able to play with everyone else while having a decent understanding of the game.</p>"
			}
		  },{
			"@type": "Question",
			"name": "What is the Pass Line?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The Pass Line bets that the shooter is going to establish a Point and will roll it again on before they roll a 7. Most players at the table bet the Pass Line so everyone wins and loses together. It's the same fate that bonds all the players at the table.</p>"
			}
		  },{
			"@type": "Question",
			"name": "What is the Come Bet?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>Come bets are like small Pass Line bets. They win on 7 or 11 and lose on the 2, 3, or 12. Otherwise, the Come bet moves into a Point and that Point needs to be rolled again in order to win.</p>"
			}
		  },{
			"@type": "Question",
			"name": "What are the Hardways?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The Hardways bet that the points 4, 6, 8, or 10 will roll as a pair (Hard). If any of those numbers roll as anything other than a pair then they are considered to have been rolled 'Easy'.</p>"
			}
		  },{
			"@type": "Question",
			"name": "Why is Eleven called Yo?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The Eleven is called a Yo because Eleven sounds like Seven and you don't want to mix up the two. During the Intermediate Roll the players don't want to hear Seven because it's how they lose.</p>"
			}
		  },{
			"@type": "Question",
			"name": "Can I bet the shooter will not make the Point?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>Bet the don'ts. They are the Don't Pass, Don't Come, and Overlays. All of these bets need the 7 to roll which makes the shooter, and usually the rest of the table, lose.</p>"
			}
		  },{
			"@type": "Question",
			"name": "When is it my turn to shoot the dice?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>Everybody at the table has an opportunity to throw the dice. The current shooter continues to throw the dice until they don't make their Point (7 Out). Once they 7 Out the bowl is dumped and the dice are passed clockwise to the next person.</p>"
			}
		  },{
			"@type": "Question",
			"name": "How much do I need to bet?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The minimum to bet most of the bets is going to be the table minimum. Bets in the middle are usually $1 minimum unless they bet a combination of numbers then the cost could be $2-3-4. Odds on the Pass Line and Come bets can be less than table minimum.</p>"
			}
		  },{
			"@type": "Question",
			"name": "What happens if the dice go off the table?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>If the dice go off the table the Stickperson will dump the bowl and offer the shooter the remaining dice. If the shooter wants the same die that rolled off the table they will have to tell the dealer 'Same dice' before the dealer dumps the bowl so be quick!</p>"
			}
		  },{
			"@type": "Question",
			"name": "Which bets have the best house edge?",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "<p>The Pass Line with Odds and the Don't Pass with Lay Odds are the best bets on the Craps table. Place bets on the 6 and 8 are the best followed by the 5 and 9 then the 4 and 10. The Field is surprisingly not a bad bet. If it pays triple on the 12 then it turns into a really good bet.</p>"
			}
		  } ]
		}
	</script>
</svelte:head>

<MoreLayout>
	<main
		aria-label="Main content"
		class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6"
	>
		<h1 class="text-4xl font-bold mb-10 text-center">Craps FAQ</h1>
		{#each sets as set (set.question)}
			<div
				class="mb-8 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
			>
				<div class="px-6 py-4">
					<h2 class="font-bold text-xl mb-2 text-gray-800 dark:text-gray-300">{set.question}</h2>
					<p class="text-gray-700 dark:text-gray-400 text-base">{set.answer}</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<ul>
						{#each set.hashTags as hashTag}
							<li
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-gray-300"
							>
								#{hashTag}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</main>
</MoreLayout>
