<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumnailCarousel from '$lib/components/practicePages/PracticeThumnailCarousel.svelte';

	let title: string = '19mm Foldable Craps Dice';
	let description: string =
		'Practice playing craps by making your own officially sized craps dice. Print out five 19mm craps dice that can be cut out and folded into 3D craps dice.';
	let url: string = 'practice-19mm-craps-dice';
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
			"description": "Practice playing craps by making your own officially sized craps dice. Print out five 19mm craps dice that can be cut out and folded into 3D craps dice.",
			"url": "https://parlaynation.com/practice-19mm-craps-dice.html"
		}
	</script>
</svelte:head>

<PracticeLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Foldable Craps Dice - 19mm" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<div class="w-full">
				<div class="relative">
					<img
						class="w-full h-auto"
						src="src/images/practice-19mm-craps-dice/19mm-foldable-craps-dice_960x1242.webp"
						alt="19mm Foldable Craps Dice"
					/>
					<div class="absolute inset-0 bg-black dark:bg-black opacity-0 dark:opacity-20" />
				</div>
			</div>
			<PracticeDescription
				title="19mm Foldable Craps Dice"
				description="Practice playing Craps with 19mm foldable Craps dice. These dice are the same size as real casino dice - 19mm. Use heavy stock paper to make even sturdier folded craps dice."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/19mm-foldable-craps-dice.pdf"
			/>
		</div>
		<PracticeThumnailCarousel />
	</main>
</PracticeLayout>
