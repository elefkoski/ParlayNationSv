<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Practice Horn High Generator';
	let description: string =
		'Practice Horn High payments with this random High High Generator. Pull one of each type of card and figure out the payment.';
	let url: string = 'practice-horn-high-generator';

	let slides: string[] = [
		'src/images/practice-horn-high-generator/bet-cards_1200x630.webp',
		'src/images/practice-horn-high-generator/roll-cards_1200x630.webp',
		'src/images/practice-horn-high-generator/amount-cards_1200x630.webp'
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
			"description": "Practice Horn High payments with this random High High Generator. Pull one of each type of card and figure out the payment.",
			"url": "https://parlaynation.com/practice-horn-high-generator.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Horn High Generator" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Horn High Generator"
				description="Practice learning Craps by practicing with the Horn High Generator. First pick an amount, pick a bet, pick a roll then figure out the payment."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/horn-high-generator.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
