<script lang="ts">
	import PracticeLayout from '$lib/components/layouts/PracticeCrapsLayout.svelte';
	import PracticeH1 from '$lib/components/practicePages/Practice-h1.svelte';
	import PracticeDescription from '$lib/components/practicePages/PracticeDescription.svelte';
	import PracticeThumbnailCarousel from '$lib/components/practicePages/PracticeThumbnailCarousel.svelte';

	let title: string = '40mm Foldable Craps Dice';
	let description: string =
		'Practice playing Craps with dice by making your own Craps dice. Print out a pair of 40mm Craps dice that can be cut-out and folded into 3D Craps dice.';
	let url: string = 'practice-40mm-craps-dice';
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
			"description": "Practice playing Craps with dice by making your own Craps dice. Print out a pair of 40mm Craps dice that can be cut-out and folded into 3D Craps dice.",
			"url": "https://parlaynation.com/practice-40mm-craps-dice.html"
		}
	</script>
</svelte:head>

<PracticeLayout showContentMenuBox={false}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<PracticeH1 title="Foldable Craps Dice - 40mm" />
		<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">
			<div class="w-full">
				<div class="relative">
					<img
						class="w-full h-auto"
						src="src/images/practice-40mm-craps-dice/40mm-foldable-craps-dice_960x1242.webp"
						alt="40mm Foldable Craps Dice"
					/>
					<div class="absolute inset-0 bg-black dark:bg-black opacity-0 dark:opacity-20" />
				</div>
			</div>
			<PracticeDescription
				title="40mm Foldable Craps Dice"
				description="Practice playing Craps by printing two 40mm foldable Craps dice. These dice are a little more than double the size of a real die (19mm). Use heavy stock paper to make even sturdier folded Craps dice."
				listPara=""
				listItems={[]}
				downloadUrl="src/pdf/40mm-foldable-craps-dice.pdf"
			/>
		</div>
		<PracticeThumbnailCarousel />
	</main>
</PracticeLayout>
