<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Come Bet with Odds Payments 6 & 8';
	let description: string =
		'Practice Come Bet with Odds Payments on the 6 and 8. Downloadable PDF to practice Craps.';
	let url: string = 'practice-come-bet-w-odds-payments-6-8';

	let slides: string[] = [
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-1_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-2_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-3_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-4_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-5_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-6_960x1242.webp',
		'src/images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-7_960x1242.webp'
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
			"description": "Practice Come Bet with Odds Payments on the 6 and 8. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-6-8.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Payments for Come Bet with Odds on the 6 & 8" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Practice Come Bet with Odds Payments 6 & 8"
				description="60 cutout cards meant to practice payments for Come Bet with Odds when the Point is 6 or 8. Bets range from $5 up to $1,000 with Odds. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into three difficulties:"
				listItems={['20 Easy', '20 Medium', '20 Hard']}
				downloadUrl="src/pdf/come-bet-with-odds-6-8.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
