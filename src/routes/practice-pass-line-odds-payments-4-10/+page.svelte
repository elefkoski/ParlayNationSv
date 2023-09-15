<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Pass Line Odds Payments 4 & 10';
	let description: string =
		'Practice Pass Line Odds Payments on the 4 & 10. Downloadable PDF to practice Craps.';
	let url: string = 'practice-pass-line-odds-payments-4-10';

	let slides: string[] = [
		'src/images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-1_1200x630.webp',
		'src/images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-2_1200x630.webp',
		'src/images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-3_1200x630.webp',
		'src/images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-4_1200x630.webp',
		'src/images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-5_1200x630.webp'
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
			"description": "Practice Pass Line Odds Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-pass-line-odds-payments-4-10.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Odds Payments On the Pass Line for the 4 & 10" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="4 & 10 Odds Payments"
				description="40 cutout cards meant to practice payments for Odds on the Pass Line when the Point is 4 or 10. Bets range from $5 up to $5,000. You can cover the answer with your thumb, fold it over, or cut it off."
				listPara="The cards are broken into two difficulties:"
				listItems={['20 Easy', '20 Medium']}
				downloadUrl="src/pdf/pass-line-odds-4-10.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
