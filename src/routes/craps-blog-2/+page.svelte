<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogCrapsLayout.svelte';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';

	let title: string = 'Protecting Your Money';
	let description: string =
		"A player's guide to Craps awareness: Equip yourself with strategies to avoid distractions, understand dealer payouts, and correct mistakes swiftly for a smooth betting experience.";
	let url: string = 'protecting-your-money';

	const blogs = [
		{
			title: 'Protecting Your Money',
			description:
				"A player's guide to Craps awareness: Equip yourself with strategies to avoid distractions, understand dealer payouts, and correct mistakes swiftly for a smooth betting experience.",
			href: 'protecting-your-money',
			imageUrl: 'images/protecting-your-money/protecting-your-money-header.webp',
			imageAlt: 'Protecting Your Money'
		},
		{
			title: 'Craps Etiquette',
			description:
				"Learn the do's and don'ts of Craps etiquette to ensure a smooth and enjoyable experience for yourself and others at the table.",
			href: 'craps-etiquette',
			imageUrl: 'images/craps-etiquette/craps-etiquette-header.webp',
			imageAlt: 'Craps Etiquette'
		},
		{
			title: 'Craps Odds',
			description:
				'Understand the odds of Craps and how they can affect your betting strategy to maximize your chances of winning.',
			href: 'craps-odds',
			imageUrl: 'images/craps-odds/craps-odds-header.webp',
			imageAlt: 'Craps Odds'
		},
		{
			title: 'Craps Terminology',
			description:
				'Learn the language of Craps to communicate effectively with dealers and other players at the table.',
			href: 'craps-terminology',
			imageUrl: 'images/craps-terminology/craps-terminology-header.webp',
			imageAlt: 'Craps Terminology'
		},
		{
			title: 'Craps Variations',
			description:
				'Discover the different variations of Craps and how they can affect your betting strategy and overall experience.',
			href: 'craps-variations',
			imageUrl: 'images/craps-variations/craps-variations-header.webp',
			imageAlt: 'Craps Variations'
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
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
	<!-- TODO Schema-->
	</script>
</svelte:head>
<BlogLayout>
	<main aria-label="Main content" class="flex flex-col my-6">
		<div>
			<h1 class="article-h1 text-3xl pb-2 mb-4 font-bold text-center">Craps Blog</h1>
		</div>
		<section aria-label="Blog cards" class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each blogs as blog}
				<BlogCard {blog} />
			{/each}
		</section>
	</main>
</BlogLayout>
