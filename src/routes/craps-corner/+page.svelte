<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Craps Corner';
	let description: string =
		'Craps Corner is a place where you can find all the other craps related odds and ends.';
	let url: string = 'craps-corner';
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
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "Craps Corner",
			"description": "Craps Corner is a place where you can find all the other craps related odds and ends.",
			"url": "http://parlaynation.com/craps-corner",
			"image": "http://parlaynation.com/images/craps-corner/craps-corner-header.jpg"
		}
	</script>
</svelte:head>

<MoreLayout showContentMenuBox={false}>
	<main aria-label="Main content" class="p-6">
		<h1 class="text-4xl font-bold mb-10 text-center">Craps Corner</h1>
		<p class="text-lg mb-10">
			Craps Corner is where the rest of Parlay Nation lives: the tools and references that do not
			fit inside a lesson. Run the numbers, practice on the simulator, get a quick answer, or
			brush up on the lingo.
		</p>
		<h2 class="mb-4 text-2xl"><a href="craps-calculators" class="underline">Craps Calculators</a></h2>
		<p class="text-lg mb-8">
			Craps bet calculators for all the bets on the Craps table. Look up exactly what a bet pays
			before you put your money down.
		</p>
		<h2 class="mb-4 text-2xl"><a href="craps-simulator" class="underline">Craps Simulator</a></h2>
		<p class="text-lg mb-8">
			Practice on a full Craps table without risking a dollar. Roll the dice, place your bets,
			and learn how the game flows at your own pace.
		</p>
		<h2 class="mb-4 text-2xl"><a href="faq" class="underline">Craps FAQ</a></h2>
		<p class="text-lg mb-8">
			The questions every new player asks, answered straight: the most common bets, what the Pass
			Line is, why eleven is called Yo, and more.
		</p>
		<h2 class="mb-4 text-2xl"><a href="glossary" class="underline">Craps Glossary</a></h2>
		<p class="text-lg mb-8">
			Talking like a Craps player starts with the words. Look up the terms you hear at the table,
			from the Pass Line to the Hardways.
		</p>
	</main>
</MoreLayout>
