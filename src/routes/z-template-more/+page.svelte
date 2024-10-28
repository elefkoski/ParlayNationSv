<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = '';
	let description: string = '';
	let url: string = '';

	let sets = [
		{
			question: 'Whare are the most common bets on the Craps table?',
			answer:
				"The most common bets on the Craps table are the Pass Line with Odds, Place bets on the 6 and 8, and possibly some Hardways. If you learn these few bets then you'll be able to play with everyone else while having a decent understanding of the game.",
			hashTags: ['passLineBets', 'passLineOdds', 'placeBets', 'theHardways']
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
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
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
						{#each set.hashTags as hashTag (set.question)}
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
