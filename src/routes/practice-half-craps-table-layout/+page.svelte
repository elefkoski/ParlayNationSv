<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/practicePages/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = 'Printable Half Craps Table Layout';
	let description: string =
		'Practice using a printable craps table layout. First page has half the craps table layout filled out for studying while page two has an empty craps table layout for testing.';
	let url: string = 'practice-half-craps-table-layout';

	let slides: string[] = [
		'src/images/practice-half-craps-table-layout/half-craps-table-layout_1200x630.webp',
		'src/images/practice-half-craps-table-layout/half-craps-table-layout-empty_1200x630.webp'
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
			"description": "Practice using a printable craps table layout. First page has half the craps table layout filled out for studying while page two has an empty craps table layout for testing.",
			"url": "https://parlaynation.com/practice-half-craps-table-layout.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Half Craps Table Layout" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Half Craps Table Layout"
				description="Practice learning Craps by studying the Craps table layout then test yourself using the half empty craps table layout. This half version is meant to be easier to read and write on. If you would like to view the entire craps table layout visit Full Craps Table Layout."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/half-craps-table-layout.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
