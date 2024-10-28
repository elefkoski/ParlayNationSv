<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Place Bet Payments Payments 4 & 10';
	let description: string =
		'Practice Place Bet Payments Payments on the 4 & 10. Downloadable PDF to practice Craps.';
	let url: string = 'practice-place-bet-payments-4-10';

	let slides: string[] = [
		'src/images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-1_960x1242.webp',
		'src/images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-2_960x1242.webp',
		'src/images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-3_960x1242.webp',
		'src/images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-4_960x1242.webp',
		'src/images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-5_960x1242.webp'
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
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice Place Bet Payments on the 4 & 10. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-place-bet-payments-4-10.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Place Bet Payments for the 4 & 10" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="4 & 10 Place Bet Payments"
				description="40 cutout cards meant to practice payments for Place Bets when the Point is 4 or 10. Bets range from $5 up to $4,925. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into two difficulties:"
				listItems={['20 Easy', '20 Medium']}
				downloadUrl="src/pdf/place-bet-payments-4-10.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
