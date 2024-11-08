<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Craps Cards - Grey';
	let description: string =
		'Practice playing craps with Craps Cards. Play craps with cards using 36 grey cut-out cards.';
	let url: string = 'practice-craps-cards-grey';

	let slides: string[] = [
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-1_960x1242.webp',
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-2_960x1242.webp',
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-3_960x1242.webp',
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-4_960x1242.webp',
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-5_960x1242.webp',
		'src/images/practice-craps-cards-grey/grey-craps-cards-page-6_960x1242.webp'
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
			"description": "Practice playing craps with Craps Cards. Play craps with cards using 36 Grey cut-out cards.",
			"url": "https://parlaynation.com/practice-craps-cards-grey.html"
		}
	</script>
</svelte:head>

<PracticeLayout showContentMenuBox={false}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Practice Craps Cards - Grey" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Grey Craps Cards"
				description="Practice playing Craps with 26 grey cut-out Craps cards. 36 Craps cards show you every combination of the dice so you can play or practice Craps with cards. This grey set was created so the color wouldn't show through the back after printing on light-weight paper stock but heavy stock paper is recommended."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/grey-craps-cards.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
