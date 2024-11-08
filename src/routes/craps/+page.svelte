<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import CrapsPageSection from '$lib/components/contentPages/CrapsPageSection.svelte';
	let title: string = 'Learn How to Play Craps';
	let description: string =
		"Want to play the most exciting game in the casino? Learn How to Play Craps so you'll never miss another exciting moment on the table.";
	let url: string = 'craps';

	let sections = [
		{
			title: 'CRAPS BASICS',
			subtitle: 'Your Craps Adventure Starts Here',
			description:
				'Hey there, eager to crack the code of Craps? Get the lowdown on the table crew, the table setup, and the rules rules that govern the game.',
			href: 'craps-basics',
			pages: [
				{
					name: 'The Crew',
					sentence:
						'Uncover the secrets of a smoothly running craps game by understanding the roles and responsibilities of ',
					href: 'the-crew',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				},
				{
					name: 'The Craps Table',
					sentence:
						'Place your bets wisely and enhance your gaming experience by comprehending the four main sections of ',
					href: 'the-craps-table',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				},
				{
					name: 'The Dice',
					sentence:
						'Experience the thrill of holding the fate of the table at your fingertips, and understand the sacred role of ',
					href: 'the-dice',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				},
				{
					name: 'The Stages',
					sentence:
						'Overcome the confusion new players often face in Craps by understanding the intricacies of ',
					href: 'the-stages',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				},
				{
					name: 'Verbal Betting',
					sentence:
						'Stay in sync with the thrilling pace of Craps and comprehend the importance of ',
					href: 'verbal-betting',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				},
				{
					name: 'To Consider',
					sentence:
						'Sharpening your Craps skills involves keeping in mind elements like the nuances of self-service bets and effective dealer interactions, all crucial aspects ',
					href: 'to-consider',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1'
				}
			]
		}
	];
	let sections2 = [
		{
			title: 'THE PASS LINE',
			subtitle: 'The First Bet to Learn on the Table',
			description:
				"What if there's a game where everyone's fate is intertwined, where winning and losing is a shared experience? Enter the world of Craps' Pass Line bet.",
			href: 'the-pass-line',
			pages: [
				{
					name: 'Pass Line Basics',
					sentence: 'Realize the collective joy and pain of Craps betting by mastering the ',
					href: 'pass-line-basics',
					src: 'src/images/icons/die-2.svg',
					alt: 'Die 2'
				},
				{
					name: 'Pass Line Odds',
					sentence: 'Add another layer to your craps betting, understanding the varying limits of ',
					href: 'pass-line-odds',
					src: 'src/images/icons/die-2.svg',
					alt: 'Die 2'
				},
				{
					name: 'Max Odds on the Pass Line',
					sentence:
						'Maximize your winnings with the Pass Line bet from different casinos, a journey described as ',
					href: 'max-odds',
					src: 'src/images/icons/die-2.svg',
					alt: 'Die 2'
				}
			]
		}
	];
	let sections3 = [
		{
			title: 'PLACE BETS',
			subtitle: 'A Versatile Way to Play Craps',
			description:
				'Master the intricacies of Place Bets in Craps, where your chances multiply with each roll and a single bet can lead to numerous wins.',
			href: 'place-bets',
			pages: [
				{
					name: 'Place Bet Basics',
					sentence:
						'There are six different Place Bets. Learn how they can win or lose based on the roll of the dice, an exciting aspect of the game known as ',
					href: 'place-bet-basics',
					src: 'src/images/icons/die-3.svg',
					alt: 'Die 3'
				},
				{
					name: 'Buying Place Bets',
					sentence:
						'Try the unique strategy of buying in craps, understanding how paying a commission can lead to True Odds, a concept embodied in ',
					href: 'buying-place-bets',
					src: 'src/images/icons/die-3.svg',
					alt: 'Die 3'
				},
				{
					name: 'Your Money',
					sentence:
						"Don't forget the importance of keeping track of your bets, understanding the costs, and ensuring they're placed correctly, a crucial aspect of watching ",
					href: 'your-money',
					src: 'src/images/icons/die-3.svg',
					alt: 'Die 3'
				},
				{
					name: 'Presses',
					sentence:
						'Navigate through the intricate world of craps where pressing your bets can lead to significant winnings, an exciting strategy encapsulated in  ',
					href: 'presses',
					src: 'src/images/icons/die-3.svg',
					alt: 'Die 3'
				}
			]
		}
	];
	let sections4 = [
		{
			title: 'SPREAD BETS',
			subtitle: 'The Easy Way of Betting Multiple Numbers At Once',
			description:
				'Explore different betting strategies in Craps. This guide will walk you through several tactics, including covering all bets, focusing on specific numbers, and more.',
			href: 'spread-bets',
			pages: [
				{
					name: 'Across',
					sentence:
						'Try your hand at placing all the Place Bets in the same amount, a technique known as betting ',
					href: 'across',
					src: 'src/images/icons/die-4.svg',
					alt: 'Die 4'
				},
				{
					name: 'Inside',
					sentence:
						'Discover this easy-peasy way of betting on the numbers 5, 6, 8, and 9 in Craps, known as ',
					href: 'inside',
					src: 'src/images/icons/die-4.svg',
					alt: 'Die 4'
				},
				{
					name: 'Outside',
					sentence:
						'A common way of betting the highest paying Place Bets can be found by betting ',
					href: 'outside',
					src: 'src/images/icons/die-4.svg',
					alt: 'Die 4'
				},
				{
					name: 'Uptown/Downtown',
					sentence:
						'The Craps players utilize the opposite side of the board in their betting strategy, a method known as ',
					href: 'uptown-downtown',
					src: 'src/images/icons/die-4.svg',
					alt: 'Die 4'
				},
				{
					name: 'Including the Point',
					sentence:
						'Learn about the unique betting strategy in Craps where players not on the Pass Line bet on all numbers, a method called ',
					href: 'including-the-point',
					src: 'src/images/icons/die-4.svg',
					alt: 'Die 4'
				}
			]
		}
	];
	let sections5 = [
		{
			title: 'PROPOSITION BETS',
			subtitle: 'The Fastest Way to Turn a Little Into A Lot',
			description:
				"Let's dive into the world of high-risk moves that make Craps one of the most dynamic and unpredictable games in the casino.",
			href: 'proposition-bets',
			pages: [
				{
					name: 'Proposition Basics',
					sentence:
						'From the center of the table to the field, explore the engaging and complex world of ',
					href: 'proposition-basics',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'The Hardways',
					sentence:
						"By offering good returns and the ability to win with your Pass Line Bet, the game's charm lies in ",
					href: 'the-hardways',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Straight Up',
					sentence:
						'To rapidly increase your earnings, consider the high payouts and exciting dynamics of ',
					href: 'straight-up',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'C & E',
					sentence:
						"If you're interested in a cost-effective alternative to the Horn, delve into the world of ",
					href: 'c-and-e',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Any Seven',
					sentence:
						"Venture into the strategic world of Don't players and their unique utilization of ",
					href: 'any-seven',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Any Craps',
					sentence: 'Explore the similarities and differences between Three Way Crap and the ',
					href: 'any-craps',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'The Field',
					sentence:
						'Discover the excitement of one-roll bets on a broad range of numbers anytime you want in  ',
					href: 'the-field',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Multi-Bets',
					sentence:
						'Enhance your gaming experience by understanding the dynamics and strategies of  ',
					href: 'multi-bets',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Horn',
					sentence:
						'Experience the convenience of betting all four Straight Up bets simultaneously through the ',
					href: 'horn',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Horn High',
					sentence:
						'Spread your money around a bunch of prop bets and pick a special number to root for with  ',
					href: 'horn-high',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'World',
					sentence:
						'Mitigate the risk of losing to a roll of the 7 by embracing the unique strategy of the ',
					href: 'world',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				},
				{
					name: 'Hop Bets',
					sentence: 'Betting strategies become more exciting when you engage with ',
					href: 'hop-bets',
					src: 'src/images/icons/die-5.svg',
					alt: 'Die 5'
				}
			]
		}
	];
	let sections6 = [
		{
			title: 'COME BETS',
			subtitle: 'Another Great Bet on the Craps Table',
			description:
				"Have you ever wondered about the unique concept of Come Bets in Craps? Let's explore it together.",
			href: 'come-bets',
			pages: [
				{
					name: 'Come Bet Basics',
					sentence:
						'Discover the intricacies of mini Pass Line bets and the potential of adding Odds in ',
					href: 'come-bet-basics',
					src: 'src/images/icons/die-6.svg',
					alt: 'Die 6'
				},
				{
					name: 'Come Bet Odds',
					sentence:
						'Learn about the flexibility of betting less than the table minimum and non-contract nature of Odds in ',
					href: 'come-bet-odds',
					src: 'src/images/icons/die-6.svg',
					alt: 'Die 6'
				},
				{
					name: 'Coming Down w/Odds',
					sentence:
						'Learn the setup and nuances of using your Place bet and its payment as Odds in ',
					href: 'coming-down-with-odds',
					src: 'src/images/icons/die-6.svg',
					alt: 'Die 6'
				}
			]
		}
	];
	let sections7 = [
		{
			title: "THE DON'TS",
			subtitle: 'The Dark Side of Craps Can Be Very Profitable',
			description:
				"Understand the pivotal role of Don't Pass bets in the game of Craps and how they affect the gaming experience.",
			href: 'the-donts',
			pages: [
				{
					name: "Don't Pass",
					sentence: 'To master the art of craps, familiarize yourself with the betting the ',
					href: 'dont-pass',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1 turned',
					transform: 'transform rotate-45'
				},
				{
					name: "Don't Pass Lay Odds",
					sentence: 'Leverage your craps game with a deeper understanding of the ',
					href: 'dont-pass-lay-odds',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1 turned',
					transform: 'transform rotate-45'
				},
				{
					name: "Don't Come",
					sentence: 'Enhance your craps strategy with a comprehensive understanding of the ',
					href: 'dont-come',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1 turned',
					transform: 'transform rotate-45'
				},
				{
					name: "Don't Come Lay Odds",
					sentence: 'Make your craps game more exciting and strategic by understanding ',
					href: 'dont-come-lay-odds',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1 turned',
					transform: 'transform rotate-45'
				},
				{
					name: 'Overlays',
					sentence: 'Stand a cut above the rest in craps by mastering the art of betting ',
					href: 'overlays',
					src: 'src/images/icons/die-1.svg',
					alt: 'Die 1 turned',
					transform: 'transform rotate-45'
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
		  "@type": "Course",
		  "name": "Learn How to Play Craps",
		  "description": "In this course you will learn how to play Craps in a casino.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}
	</script>
</svelte:head>

<LearnLayout showContentMenuBox={false}>
	<div class="flex float-right">
		<a
			data-track="nxt-1-craps-basics"
			href="craps-basics"
			class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn"
		>
			Craps Basics
			<svg
				class="w-3.5 h-3.5 ml-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a>
	</div>
	<main aria-label="Main content" class="my-6">
		<header>
			<span class="text-lg uppercase font-semibold craps-home-page-title">Craps</span>
			<h1 class="text-3xl pb-2 font-bold craps-home-page-title-two">Learn to Play Craps</h1>
		</header>

		<div class="flex flex-col space-y-16">
			<section aria-label="Craps basics">
				{#each sections as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="The Pass Line">
				{#each sections2 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="Place Bets">
				{#each sections3 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="Spread Bets">
				{#each sections4 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="Proposition Bets">
				{#each sections5 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="Come Bets">
				{#each sections6 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
			<section aria-label="Dont Bets">
				{#each sections7 as section (section.title)}
					<CrapsPageSection {section} />
				{/each}
			</section>
		</div>
	</main>
	<div class="flex float-right">
		<a
			data-track="nxt-2-craps-basics"
			href="craps-basics"
			class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn"
		>
			Craps Basics
			<svg
				class="w-3.5 h-3.5 ml-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a>
	</div>
</LearnLayout>
