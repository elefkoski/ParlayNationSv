<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Craps Cards - Black';
	let description: string =
		'Practice playing craps with Craps Cards. Play craps with cards using 36 black cut-out cards.';
	let url: string = 'practice-craps-cards-black';

	let slides: string[] = [
		'src/images/practice-craps-cards-black/black-craps-cards-page-1_1200x630.webp',
		'src/images/practice-craps-cards-black/black-craps-cards-page-2_1200x630.webp',
		'src/images/practice-craps-cards-black/black-craps-cards-page-3_1200x630.webp',
		'src/images/practice-craps-cards-black/black-craps-cards-page-4_1200x630.webp',
		'src/images/practice-craps-cards-black/black-craps-cards-page-5_1200x630.webp',
		'src/images/practice-craps-cards-black/black-craps-cards-page-6_1200x630.webp'
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
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice playing craps with Craps Cards. Play craps with cards using 36 Black cut-out cards.",
			"url": "https://parlaynation.com/practice-craps-cards-black.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Practice Craps Cards - Black" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Black Craps Cards"
				description="Practice playing Craps with 26 cut-out Craps cards. 36 Craps cards show you every combination of the dice so you can play or practice Craps with cards. Heavy stock paper is recommended in order for the ink not to show through the back. Or you can print the Grey Craps Cards so the ink will not show through the back."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/black-craps-cards.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
