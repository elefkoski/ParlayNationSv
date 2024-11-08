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
		<h2 class="mb-4 text-2xl">Craps Calculators</h2>
		<h2 class="mb-4 text-2xl">Craps Simulator</h2>
		<h2 class="mb-4 text-2xl">Craps FAQ</h2>
		<h2 class="mb-4 text-2xl">Craps Glossary</h2>
	</main>
</MoreLayout>
