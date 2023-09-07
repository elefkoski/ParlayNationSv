<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeCarousel from '$lib/clients/components/PracticeCarousel.svelte';
	import PracticeH1 from '$lib/clients/components/Practice-h1.svelte';
	import PracticeDescription from '$lib/clients/components/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/clients/components/PracticeThumnailCarousel.svelte';

	let title: string = 'Printable Full Craps Table Layout';
	let description: string =
		'Practice using a printable craps table layout. First page has the craps table layout filled out for studying while page two has an empty craps table layout for testing.';
	let url: string = 'practice-full-craps-table-layout';

	let slides: string[] = [
		'src/images/practice-full-craps-table-layout/full-craps-table-layout_1200x630.webp',
		'src/images/practice-full-craps-table-layout/full-craps-table-layout-empty_1200x630.webp'
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
			"description": "Practice using a printable craps table layout. First page has the craps table layout filled out for studying while page two has an empty craps table layout for testing.",
			"url": "https://parlaynation.com/practice-full-craps-table-layout.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Full Craps Table Layout" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<PracticeCarousel {slides} />
			<PracticeDescription
				title="Full Craps Table Layout"
				description="Practice learning Craps by studying the Craps table layout. Test yourself using the empty craps table layout. This is the whole version of the Craps table layout. If you would like to use a larger layout which may be easier to read by visiting the Half Craps Table Layout."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/full-craps-table-layout.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
