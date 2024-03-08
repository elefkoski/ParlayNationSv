<script lang="ts">
	import PracticeLayout from '$lib/clients/components/layouts/PracticeCrapsLayout.svelte';
	import DownloadabeSection from '$lib/clients/components/practicePages/DownloadabeSection.svelte';

	let title: string = 'Practice Craps';
	let description: string =
		"Downloadable PDF's for Craps. Practice Math Printouts, Dice and Table Printouts, and more.";
	let url: string = 'practice';

	let sections = [
		{
			items: [
				{
					title: 'Pass Line Odds - 6 & 8',
					description:
						'Practice three levels of difficulty with cut-out Pass Line Odds Payments on the 6 & 8.',
					imageUrlSm: 'src/images/practice/pdf-cover-pass-line-odds-6-8_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-pass-line-odds-6-8_960x1242.webp',
					pageUrl: 'practice-pass-line-odds-payments-6-8',
					pdfUrl: 'src/pdf/pass-line-odds-6-8.pdf'
				},
				{
					title: 'Pass Line Odds - 5 & 9',
					description:
						'Practice three levels of difficulty with cut-out Pass Line Odds Payments on the 5 & 9.',
					imageUrlSm: 'src/images/practice/pdf-cover-pass-line-odds-5-9_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-pass-line-odds-5-9_960x1242.webp',
					pageUrl: 'practice-pass-line-odds-payments-5-9',
					pdfUrl: 'src/pdf/pass-line-odds-5-9.pdf'
				},
				{
					title: 'Pass Line Odds - 4 & 10',
					description:
						'Practice two levels of difficulty with cut-out Pass Line Odds Payments on the 4 & 10.',
					imageUrlSm: 'src/images/practice/pdf-cover-pass-line-odds-4-10_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-pass-line-odds-4-10_960x1242.webp',
					pageUrl: 'practice-pass-line-odds-payments-4-10',
					pdfUrl: 'src/pdf/pass-line-odds-4-10.pdf'
				}
			]
		}
	];
	let sections2 = [
		{
			items: [
				{
					title: 'Place Bet Payments - 6 & 8',
					description:
						'Practice three levels of difficulty with cut-out Place Bet Payments on the 6 & 8.',
					imageUrlSm: 'src/images/practice/pdf-cover-place-bets-6-8_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-place-bets-6-8_960x1242.webp',
					pageUrl: 'practice-place-bet-payments-6-8',
					pdfUrl: 'src/pdf/place-bet-payments-6-8.pdf'
				},
				{
					title: 'Place Bet Payments - 5 & 9',
					description:
						'Practice three levels of difficulty with cut-out Place Bet Payments on the 5 & 9.',
					imageUrlSm: 'src/images/practice/pdf-cover-place-bets-5-9_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-place-bets-5-9_960x1242.webp',
					pageUrl: 'practice-place-bet-payments-5-9',
					pdfUrl: 'src/pdf/place-bet-payments-5-9.pdf'
				},
				{
					title: 'Place Bet Payments - 4 & 10',
					description:
						'Practice two levels of difficulty with cut-out Place Bet Payments on the 4 & 10.',
					imageUrlSm: 'src/images/practice/pdf-cover-place-bets-4-10_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-place-bets-4-10_960x1242.webp',
					pageUrl: 'practice-place-bet-payments-4-10',
					pdfUrl: 'src/pdf/place-bet-payments-4-10.pdf'
				}
			]
		}
	];
	let sections3 = [
		{
			items: [
				{
					title: 'Come Bet w/Odds Payments 6 & 8',
					description:
						'Practice three levels of difficulty with cut-out Come Bet w/Odds Payments on the 6 & 8.',
					imageUrlSm: 'src/images/practice/pdf-cover-come-bet-w-odds-6-8_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-come-bet-w-odds-6-8_960x1242.webp',
					pageUrl: 'practice-come-bet-w-odds-payments-6-8',
					pdfUrl: 'src/pdf/come-bet-with-odds-6-8.pdf'
				},
				{
					title: 'Come Bet w/Odds Payments 5 & 9',
					description:
						'Practice three levels of difficulty with cut-out Come Bet w/Odds Payments on the 5 & 9.',
					imageUrlSm: 'src/images/practice/pdf-cover-come-bet-w-odds-5-9_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-come-bet-w-odds-5-9_960x1242.webp',
					pageUrl: 'practice-come-bet-w-odds-payments-5-9',
					pdfUrl: 'src/pdf/come-bet-with-odds-5-9.pdf'
				},
				{
					title: 'Come Bet w/Odds Payments 4 & 10',
					description:
						'Practice two levels of difficulty with cut-out Come Bet w/Odds Payments on the 4 & 10.',
					imageUrlSm: 'src/images/practice/pdf-cover-come-bet-w-odds-4-10_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-come-bet-w-odds-4-10_960x1242.webp',
					pageUrl: 'practice-come-bet-w-odds-payments-4-10',
					pdfUrl: 'src/pdf/come-bet-with-odds-4-10.pdf'
				}
			]
		}
	];
	let sections31 = [
		{
			items: [
				{
					title: 'Lay Odds Payments 6 & 8',
					description:
						'Practice three levels of difficulty with cut-out Lay Odds Payments on the 6 & 8.',
					imageUrlSm: 'src/images/practice/pdf-cover-lay-odds-6-8_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-lay-odds-6-8_960x1242.webp',
					pageUrl: 'practice-lay-odds-payments-6-8',
					pdfUrl: 'src/pdf/lay-odds-payments-6-8.pdf'
				},
				{
					title: 'Lay Odds Payments 5 & 9',
					description:
						'Practice three levels of difficulty with cut-out Lay Odds Payments on the 5 & 9.',
					imageUrlSm: 'src/images/practice/pdf-cover-lay-odds-5-9_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-lay-odds-5-9_960x1242.webp',
					pageUrl: 'practice-lay-odds-payments-5-9',
					pdfUrl: 'src/pdf/lay-odds-payments-5-9.pdf'
				},
				{
					title: 'Lay Odds Payments 4 & 10',
					description:
						'Practice two levels of difficulty with cut-out Lay Odds Payments on the 4 & 10.',
					imageUrlSm: 'src/images/practice/pdf-cover-lay-odds-4-10_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-lay-odds-4-10_960x1242.webp',
					pageUrl: 'practice-lay-odds-payments-4-10',
					pdfUrl: 'src/pdf/lay-odds-payments-4-10.pdf'
				}
			]
		}
	];
	let sections4 = [
		{
			items: [
				{
					title: 'Craps Cards - Black',
					description:
						'36 Black Craps Cards show you every combination of the dice so you can play or practice Craps with cards.',
					imageUrlSm: 'src/images/practice/pdf-cover-black-dice-combinations_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-black-dice-combinations_960x1242.webp',
					pageUrl: 'practice-craps-cards-black',
					pdfUrl: 'src/pdf/black-craps-cards.pdf'
				},
				{
					title: 'Craps Cards - Grey',
					description:
						'36 Grey Craps Cards show you every combination of the dice so you can play or practice Craps with cards.',
					imageUrlSm: 'src/images/practice/pdf-cover-grey-dice-combinations_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-grey-dice-combinations_960x1242.webp',
					pageUrl: 'practice-craps-cards-grey',
					pdfUrl: 'src/pdf/grey-craps-cards.pdf'
				}
			]
		}
	];
	let sections5 = [
		{
			items: [
				{
					title: '60mm Foldable Craps Dice',
					description: 'Practice playing Craps by printing a couple 60mm foldable Craps dice.',
					imageUrlSm: 'src/images/practice/pdf-cover-60mm-foldable-craps-dice_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-60mm-foldable-craps-dice_960x1242.webp',
					pageUrl: 'practice-60mm-craps-dice',
					pdfUrl: 'src/pdf/60mm-foldable-craps-dice.pdf'
				},
				{
					title: '40mm Foldable Craps Dice',
					description: 'Practice playing Craps with a pair of 40mm foldable Craps dice.',
					imageUrlSm: 'src/images/practice/pdf-cover-40mm-foldable-craps-dice_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-40mm-foldable-craps-dice_960x1242.webp',
					pageUrl: 'practice-40mm-craps-dice',
					pdfUrl: 'src/pdf/40mm-foldable-craps-dice.pdf'
				},
				{
					title: '19mm Foldable Craps Dice',
					description: 'Practice playing Craps with six 19mm foldable Craps dice.',
					imageUrlSm: 'src/images/practice/pdf-cover-19mm-foldable-craps-dice_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-19mm-foldable-craps-dice_960x1242.webp',
					pageUrl: 'practice-19mm-craps-dice',
					pdfUrl: 'src/pdf/19mm-foldable-craps-dice.pdf'
				}
			]
		}
	];
	let sections6 = [
		{
			items: [
				{
					title: 'Full Craps Table Layout',
					description: 'Practice learning Craps by studying the Craps table layout.',
					imageUrlSm: 'src/images/practice/pdf-cover-craps-table-layout_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-craps-table-layout_960x1242.webp',
					pageUrl: 'practice-full-craps-table-layout',
					pdfUrl: 'src/pdf/full-craps-table-layout.pdf'
				},
				{
					title: 'Half Craps Table Layout',
					description: 'Practice learning Craps by studying half of the Craps table layout.',
					imageUrlSm: 'src/images/practice/pdf-cover-half-craps-table-layout_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-half-craps-table-layout_960x1242.webp',
					pageUrl: 'practice-half-craps-table-layout',
					pdfUrl: 'src/pdf/half-craps-table-layout.pdf'
				}
			]
		}
	];
	let sections7 = [
		{
			items: [
				{
					title: 'Random Horn High Generator',
					description: 'Practice Horn High Payents with this Random Horn High Generator.',
					imageUrlSm: 'src/images/practice/pdf-cover-hh-world-generator_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-hh-world-generator_960x1242.webp',
					pageUrl: 'practice-horn-high-generator',
					pdfUrl: 'src/pdf/horn-high-generator.pdf'
				}
			]
		}
	];
	let sections8 = [
		{
			items: [
				{
					title: 'Craps Roll Cards',
					description: 'Practice determining what is considered a roll or not a roll in craps.',
					imageUrlSm: 'src/images/practice/pdf-cover-craps-roll-cards_640x828.webp',
					imageUrlLg: 'src/images/practice/pdf-cover-craps-roll-cards_960x1242.webp',
					pageUrl: 'practice-craps-roll-cards',
					pdfUrl: 'src/pdf/craps-roll-cards.pdf'
				}
			]
		}
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
		  "@type": "ItemList",
		  "itemListElement":[
			{
			  "@type": "ListItem",
			  "position": "1",
			  "name": "Pass Line Odds Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "name": "Pass Line Odds Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "name": "Pass Line Odds Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "name": "Place Bet Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "name": "Place Bet Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "6",
			  "name": "Place Bet Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "7",
			  "name": "Come Bet w/Odds Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "8",
			  "name": "Come Bet w/Odds Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "9",
			  "name": "Come Bet w/Odds Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "10",
			  "name": "Practice Craps Cards - Black",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing craps with Craps Cards. Play craps with cards using 36 black cut-out cards.",
				"url": "https://parlaynation.com/practice-craps-cards-black.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "11",
			  "name": "Practice Craps Cards - Grey",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing craps with Craps Cards. Play craps with cards using 36 grey cut-out cards.",
				"url": "https://parlaynation.com/practice-craps-cards-grey.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "12",
			  "name": "Practice 60mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing craps with dice by making your own craps dice. Print out a couple of these huge 60mm craps dice. These dice are more than triple the size of real craps dice.",
				"url": "https://parlaynation.com/practice-60mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "13",
			  "name": "Practice 40mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing craps with dice by making your own craps dice. Print out a pair of 40mm craps dice that can be cut out and folded into 3D craps dice.",
				"url": "https://parlaynation.com/practice-40mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "14",
			  "name": "Practice 19mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing craps by making your own craps dice. Print out five 19mm craps dice that can be cut out and folded into 3D craps dice.",
				"url": "https://parlaynation.com/practice-19mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "15",
			  "name": "Practice Full Craps Table",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice using a printable craps table layout. First page has the craps table layout filled out for studying while page two has an empty craps table layout for testing.",
				"url": "https://parlaynation.com/practice-full-craps-table-layout.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "16",
			  "name": "Practice Half Craps Table",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice using a printable craps table layout. First page has the craps table layout filled out for studying while page two has an empty craps table layout for testing.",
				"url": "https://parlaynation.com/practice-half-craps-table-layout.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "17",
			  "name": "Practice Horn High Generator",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Horn High payments with this random High High Generator. Pull one of each type of card and figure out the payment.",
				"url": "https://parlaynation.com/practice-horn-high-generator.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "18",
			  "name": "Practice Craps Roll Cards",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice determining what is a roll or not a roll with Craps Roll Cards.",
				"url": "https://parlaynation.com/practice-craps-roll-cards.html"
			  }
			}
		  ]
		}
	</script>
</svelte:head>

<PracticeLayout>
	<header aria-label="Practice Craps" class="p-6 bg-gray-100 dark:bg-gray-900">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">Practice Craps</h1>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Practice Craps payments for the Pass Line, Place Bets, and Come Bets.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Print the Craps table layout with or without text.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Three sizes of printable dice and more!
		</p>
	</header>
	<main
		aria-label="Main sections with downloadables"
		class="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg mt-6"
	>
		<section
			aria-label="Practice Math Printouts"
			class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
		>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">
				Practice Math Printouts
			</h2>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Each practice math printout has 20 easy, 20 medium, and 20 hard cut-outs.
			</p>
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Pass Line Odds
			</h3>
			{#each sections as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
			<div class="pb-6" />
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Place Bet Payments
			</h3>
			{#each sections2 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
			<div class="pb-6" />
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Come Bet w/Odds Payments
			</h3>
			{#each sections3 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
			<div class="pb-6" />
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Lay Odds Payments
			</h3>
			{#each sections31 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
		</section>
		<section
			aria-label="Craps Cards Printouts"
			class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
		>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">Craps Cards</h2>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Black Craps Cards are meant to be printed on heavy stock paper so as not to show through the
				back side. Light grey Craps Cards are meant to be printed on normal stock paper and
				shouldn't show through the back.
			</p>
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Craps Cards
			</h3>
			{#each sections4 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
		</section>
		<section
			aria-label="Craps Cards Printouts"
			class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
		>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">Craps Dice</h2>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Print then cut out and fold these dice to practice playing Craps.
			</p>
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Foldable Craps Dice
			</h3>
			{#each sections5 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
		</section>
		<section
			aria-label="Table Layout Printouts"
			class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
		>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">
				Table Layout Printouts
			</h2>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Both craps table printouts have pages with and without text.
			</p>
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Craps Table Layouts
			</h3>
			{#each sections6 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
		</section>
		<section
			aria-label="Other Craps Practice Printouts"
			class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
		>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">
				Other Craps Practice Printouts
			</h2>
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Random Horn High Generator
			</h3>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Random horn high generator has includes instructions with payout table, a bet page, an
				amount page, and a roll page.
			</p>
			{#each sections7 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
			<div class="pb-6" />
			<h3 class="text-2xl text-center font-semibold text-gray-900 dark:text-gray-200 mb-2">
				Craps Roll Cards
			</h3>
			<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
				Craps Roll Cards are meant to practice what may or may not be a roll.
			</p>
			{#each sections8 as section, i (i)}
				<DownloadabeSection items={section.items} />
			{/each}
		</section>
	</main>
</PracticeLayout>
