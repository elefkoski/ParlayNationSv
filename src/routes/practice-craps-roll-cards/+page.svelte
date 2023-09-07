<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Craps Roll Cards';
	let description: string =
		'Practice determining what is a roll or not a roll with Craps Roll Cards.';
	let url: string = 'practice-craps-roll-cards';

	let slides: string[] = [
		'src/images/practice-craps-roll-cards/craps-roll-cards-page-1_1200x630.webp',
		'src/images/practice-craps-roll-cards/craps-roll-cards-page-2_1200x630.webp',
		'src/images/practice-craps-roll-cards/craps-roll-cards-page-3_1200x630.webp'
	];
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
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice determining what is a roll or not a roll with Craps Roll Cards.",
			"url": "https://parlaynation.com/practice-craps-roll-cards.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Practice Craps Roll Cards" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Practice Craps Roll Cards"
				description="Practice determining what is a roll and what is not a roll using these Craps Cards. There are 14 images of dice landing in different positions. Some are considered a roll and some are considered a no roll. What is considered a roll differs between each casino, boxperson, and dealer. What one person or casino may call a roll may not be what another casino or person calls a roll."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/craps-roll-cards.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
