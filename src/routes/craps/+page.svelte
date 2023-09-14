<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';

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
					href: 'the-crew'
				},
				{
					name: 'The Craps Table',
					sentence:
						'Place your bets wisely and enhance your gaming experience by comprehending the four main sections of ',
					href: 'the-craps-table'
				},
				{
					name: 'The Dice',
					sentence:
						'Experience the thrill of holding the fate of the table at your fingertips, and understand the sacred role of ',
					href: 'the-dice'
				},
				{
					name: 'The Stages',
					sentence:
						'Overcome the confusion new players often face in Craps by understanding the intricacies of ',
					href: 'the-stages'
				},
				{
					name: 'Verbal Betting',
					sentence:
						'Stay in sync with the thrilling pace of Craps and comprehend the importance of ',
					href: 'verbal-betting'
				},
				{
					name: 'To Consider',
					sentence:
						'Sharpening your Craps skills involves keeping in mind elements like the nuances of self-service bets and effective dealer interactions, all crucial aspects ',
					href: 'to-consider'
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
					href: 'pass-line-basics'
				},
				{
					name: 'Pass Line Odds',
					sentence: 'Add another layer to your craps betting, understanding the varying limits of ',
					href: 'pass-line-odds'
				},
				{
					name: 'Max Odds on the Pass Line',
					sentence:
						'Maximize your winnings with the Pass Line bet from different casinos, a journey described as ',
					href: 'max-odds'
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
					href: 'place-bet-basics'
				},
				{
					name: 'Buying Place Bets',
					sentence:
						'Try the unique strategy of buying in craps, understanding how paying a commission can lead to True Odds, a concept embodied in ',
					href: 'buying-place-bets'
				},
				{
					name: 'Your Money',
					sentence:
						"Don't forget the importance of keeping track of your bets, understanding the costs, and ensuring they're placed correctly, a crucial aspect of watching ",
					href: 'your-money'
				},
				{
					name: 'Presses',
					sentence:
						'Navigate through the intricate world of craps where pressing your bets can lead to significant winnings, an exciting strategy encapsulated in  ',
					href: 'presses'
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
					href: 'across'
				},
				{
					name: 'Inside',
					sentence:
						'Discover this easy-peasy way of betting on the numbers 5, 6, 8, and 9 in Craps, known as ',
					href: 'inside'
				},
				{
					name: 'Outside',
					sentence:
						'A common way of betting the highest paying Place Bets can be found by betting ',
					href: 'outside'
				},
				{
					name: 'Uptown/Downtown',
					sentence:
						'The Craps players utilize the opposite side of the board in their betting strategy, a method known as ',
					href: 'uptown-downtown'
				},
				{
					name: 'Including the Point',
					sentence:
						'Learn about the unique betting strategy in Craps where players not on the Pass Line bet on all numbers, a method called ',
					href: 'including-the-point'
				}
			]
		}
	];
	let sections5 = [
		{
			title: 'PROPOSITION BETS',
			subtitle: 'The Fastest Way to Turn a Little Into A Lot',
			description:
				"Have you ever wondered about the bets in the center of the Craps table? Let's dive into the fascinating world of.",
			href: 'proposition-bets',
			pages: [
				{
					name: 'Proposition Basics',
					sentence:
						'From the center of the table to the field, explore the engaging and complex world of ',
					href: 'proposition-basics'
				},
				{
					name: 'The Hardways',
					sentence:
						"By offering good returns and the ability to win with your Pass Line Bet, the game's charm lies in ",
					href: 'the-hardways'
				},
				{
					name: 'Straight Up',
					sentence:
						'To rapidly increase your earnings, consider the high payouts and exciting dynamics of ',
					href: 'straight-up'
				},
				{
					name: 'C & E',
					sentence:
						"If you're interested in a cost-effective alternative to the Horn, delve into the world of ",
					href: 'c-and-e'
				},
				{
					name: 'Any Seven',
					sentence:
						"Venture into the strategic world of Don't players and their unique utilization of ",
					href: 'any-seven'
				},
				{
					name: 'Any Craps',
					sentence: 'Explore the similarities and differences between Three Way Crap and the ',
					href: 'any-craps'
				},
				{
					name: 'The Field',
					sentence:
						'Discover the excitement of one-roll bets on a broad range of numbers anytime you want in  ',
					href: 'the-field'
				},
				{
					name: 'Multi-Bets',
					sentence:
						'Enhance your gaming experience by understanding the dynamics and strategies of  ',
					href: 'multi-bets'
				},
				{
					name: 'Horn',
					sentence:
						'Experience the convenience of betting all four Straight Up bets simultaneously through the ',
					href: 'horn'
				},
				{
					name: 'Horn High',
					sentence:
						'Spread your money around a bunch of prop bets and pick a special number to root for with  ',
					href: 'horn-high'
				},
				{
					name: 'World',
					sentence:
						'Mitigate the risk of losing to a roll of the 7 by embracing the unique strategy of the ',
					href: 'world'
				},
				{
					name: 'Hop Bets',
					sentence: 'Betting strategies become more exciting when you engage with ',
					href: 'hop-bets'
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
					href: 'come-bet-basics'
				},
				{
					name: 'Come Bet Odds',
					sentence:
						'Learn about the flexibility of betting less than the table minimum and non-contract nature of Odds in ',
					href: 'come-bet-odds'
				},
				{
					name: 'Coming Down w/Odds',
					sentence:
						'Learn the setup and nuances of using your Place bet and its payment as Odds in ',
					href: 'coming-down-with-odds'
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
					href: 'dont-pass'
				},
				{
					name: "Don't Pass Lay Odds",
					sentence: 'Leverage your craps game with a deeper understanding of the ',
					href: 'dont-pass-lay-odds'
				},
				{
					name: "Don't Come",
					sentence: 'Enhance your craps strategy with a comprehensive understanding of the ',
					href: 'dont-come'
				},
				{
					name: "Don't Come Lay Odds",
					sentence: 'Make your craps game more exciting and strategic by understanding ',
					href: 'dont-come-lay-odds'
				},
				{
					name: 'Overlays',
					sentence: 'Stand a cut above the rest in craps by mastering the art of betting ',
					href: 'overlays'
				}
			]
		}
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
		  "@type": "Course",
		  "name": "Learn How to Play Craps",
		  "description": "In this course you will learn how to play Craps in a casino.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout>
	<div class="flex float-right">
		<a
			href="craps-basics"
			class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
			<span class="text-lg uppercase font-semibold text-blue-600 dark:text-blue-400">Craps</span>
			<h1 class="text-slate-400 text-3xl pb-2 font-bold">Learn to Play Craps</h1>
		</header>

		<div class="flex flex-col space-y-16">
			<section aria-label="Craps basics">
				{#each sections as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-1.svg"
												alt="Die 1"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
											/>
											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="The Pass Line">
				{#each sections2 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-2.svg"
												alt="die 2"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="Place Bets">
				{#each sections3 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-3.svg"
												alt="die 3"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="Spread Bets">
				{#each sections4 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-4.svg"
												alt="die 4"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="Proposition Bets">
				{#each sections5 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-5.svg"
												alt="die 5"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="Come Bets">
				{#each sections6 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-6.svg"
												alt="die 6"
												class="w-6 h-6 filter mr-4 dark:invert dark:brightness-200 dark:saturate-150"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
			<section aria-label="Dont Bets">
				{#each sections7 as section (title)}
					<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
						<div class="grid md:col-span-3 content-center">
							<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
							<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
							<p class="pb-4 text-black dark:text-gray-300">
								{section.description}
							</p>
							<a href={section.href} class="justify-self-end">READ MORE</a>
						</div>
						<div class="flex flex-col gap-2 md:col-span-5 justify-center">
							<ul class="space-y-2">
								{#each section.pages as page}
									<li
										class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
									>
										<a
											href={page.href}
											class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
										>
											<img
												src="src/images/icons/die-1.svg"
												alt="die-1"
												class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150 transform rotate-45"
											/>

											<span
												>{page.sentence}
												<span class="font-semibold text-orange-300">{page.name}</span>.</span
											>
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</section>
		</div>
	</main>
	<div class="flex float-right">
		<a
			href="craps-basics"
			class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
