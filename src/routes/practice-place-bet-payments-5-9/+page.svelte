<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Place Bet Payments Payments 5 & 9';
	let description: string =
		'Practice Place Bet Payments Payments on the 5 & 9. Downloadable PDF to practice Craps.';
	let url: string = 'practice-place-bet-payments-5-9';

	let slides: string[] = [
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-1_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-2_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-3_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-4_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-5_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-6_960x1242.webp',
		'src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-7_960x1242.webp'
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
			"description": "Practice Place Bet Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-place-bet-payments-5-9.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Place Bet Payments for the 5 & 9" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="5 & 9 Place Bet Payments"
				description="60 cutout cards meant to practice payments for Place Bets when the Point is 5 or 9. Bets range from $5 up to $5,000. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into three difficulties:"
				listItems={['20 Easy', '20 Medium', '20 Hard']}
				downloadUrl="src/pdf/place-bet-payments-5-9.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
