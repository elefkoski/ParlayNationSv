<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Pass Line Odds Payments 6 & 8';
	let description: string =
		'Practice Pass Line Odds Payments on the 6 & 8. Downloadable PDF to practice Craps.';
	let url: string = 'practice-pass-line-odds-payments-6-8';

	let slides: string[] = [
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-1_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-2_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-3_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-4_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-5_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-6_960x1242.webp',
		'src/images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-7_960x1242.webp'
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
			"description": "Practice Pass Line Odds Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-pass-line-odds-payments-6-8.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Odds Payments On the Pass Line for the 6 & 8" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="6 & 8 Odds Payments"
				description="60 cutout cards meant to practice payments for Odds on the Pass Line when the Point is 6 or 8. Bets range from $5 up to $5,000. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into three difficulties:"
				listItems={['20 Easy', '20 Medium', '20 Hard']}
				downloadUrl="src/pdf/pass-line-odds-6-8.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
