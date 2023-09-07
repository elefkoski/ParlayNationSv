<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Come Bet with Odds Payments 5 & 9';
	let description: string =
		'Practice Come Bet with Odds Payments on the 5 and 9. Downloadable PDF to practice Craps.';
	let url: string = 'practice-come-bet-w-odds-payments-5-9';

	let slides: string[] = [
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-1_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-2_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-3_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-4_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-5_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-6_1200x630.webp',
		'src/images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-7_1200x630.webp'
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
			"description": "Practice Come Bet with Odds Payments on the 5 and 9. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-5-9.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Payments for Come Bet with Odds on the 5 & 9" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Practice Come Bet with Odds Payments 5 & 9"
				description="60 cutout cards meant to practice payments for Come Bet with Odds when the Point is 5 or 9. Bets range from $5 up to $3,856 with Odds. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into three difficulties:"
				listItems={['20 Easy', '20 Medium', '20 Hard']}
				downloadUrl="src/pdf/come-bet-with-odds-5-9.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
