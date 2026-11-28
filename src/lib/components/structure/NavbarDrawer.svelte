<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import ThemeSlider from '../ThemeSlider.svelte';

	let isOpen = false;

	type Menu = {
		title: string;
		href?: string;
		lightSrc?: string;
		darkSrc?: string;
		alt?: string;
		subs?: SubMenu[];
	};

	type Menu2 = {
		title: string;
		subs: SubMenu[];
	};

	type SubMenu = {
		title: string;
		href: string;
	};

	let menus: Menu[] = [
		{
			title: 'Learn Craps',
			href: 'craps',
			lightSrc: 'src/images/icons/grad-hat-black-icon.png',
			darkSrc: 'src/images/icons/grad-hat-white-icon.png',
			alt: 'Graduation Hat Icon'
		},
		{
			title: 'Practice Craps',
			href: 'practice-craps',
			lightSrc: 'src/images/icons/bullseye-black-icon.png',
			darkSrc: 'src/images/icons/bullseye-white-icon.png',
			alt: 'Bullseye'
		},
		{
			title: 'Craps Blog',
			href: 'craps-blog',
			lightSrc: 'src/images/icons/paper-black-icon.png',
			darkSrc: 'src/images/icons/paper-white-icon.png',
			alt: 'Piece of paper'
		},
		{
			title: 'Craps Corner',
			href: 'craps-corner',
			lightSrc: 'src/images/icons/more-black-icon.png',
			darkSrc: 'src/images/icons/more-white-icon.png',
			alt: 'Craps Corner'
		},
		{
			title: 'Craps Calculators',
			href: 'craps-calculators',
			lightSrc: 'src/images/icons/calculator-black-icon.png',
			darkSrc: 'src/images/icons/calculator-white-icon.png',
			alt: 'Calculator'
		},
		{
			title: 'Craps Simulator',
			href: 'craps-simulator',
			lightSrc: 'src/images/icons/controller-black-icon.png',
			darkSrc: 'src/images/icons/controller-white-icon.png',
			alt: 'Controller'
		},
		{
			title: 'Glossary',
			href: 'glossary',
			lightSrc: 'src/images/icons/glossary-black-icon.png',
			darkSrc: 'src/images/icons/glossary-white-icon.png',
			alt: 'Glossary'
		},
		{
			title: 'FAQ',
			href: 'faq',
			lightSrc: 'src/images/icons/question-black-icon.png',
			darkSrc: 'src/images/icons/question-white-icon.png',
			alt: 'Question Mark'
		}
	];

	let menus2: Menu[] = [
		{
			title: 'Craps Basics',
			href: 'craps-basics',
			subs: [
				{
					title: 'The Crew',
					href: 'the-crew'
				},
				{
					title: 'The Craps Table',
					href: 'the-craps-table'
				},
				{
					title: 'The Dice',
					href: 'the-dice'
				},
				{
					title: 'The Stages',
					href: 'the-stages'
				},
				{
					title: 'Verbal Betting',
					href: 'verbal-betting'
				},
				{
					title: 'To Consider',
					href: 'to-consider'
				}
			]
		},
		{
			title: 'The Pass Line',
			href: 'the-pass-line',
			subs: [
				{
					title: 'Pass Line Basics',
					href: 'pass-line-basics'
				},
				{
					title: 'Pass Line Odds',
					href: 'pass-line-odds'
				},
				{
					title: 'Max Odds',
					href: 'max-odds'
				}
			]
		},
		{
			title: 'Place Bets',
			href: 'place-bets',
			subs: [
				{
					title: 'Place Bet Basics',
					href: 'place-bet-basics'
				},
				{
					title: 'Buying Place Bets',
					href: 'buying-place-bets'
				},
				{
					title: 'Your Money',
					href: 'your-money'
				},
				{
					title: 'Presses',
					href: 'presses'
				}
			]
		},
		{
			title: 'Spread Bets',
			href: 'spread-bets',
			subs: [
				{
					title: 'Across',
					href: 'across'
				},
				{
					title: 'Inside',
					href: 'inside'
				},
				{
					title: 'Outside',
					href: 'outside'
				},
				{
					title: 'Uptown/Downtown',
					href: 'uptown-downtown'
				},
				{
					title: 'Including the Point',
					href: 'including-the-point'
				}
			]
		},
		{
			title: 'Proposition Bets',
			href: 'proposition-bets',
			subs: [
				{
					title: 'Proposition Basics',
					href: 'proposition-basics'
				},
				{
					title: 'The Hardways',
					href: 'the-hardways'
				},
				{
					title: 'Straight Up',
					href: 'straight-up'
				},
				{
					title: 'C & E',
					href: 'c-and-e'
				},
				{
					title: 'Any Seven',
					href: 'any-seven'
				},
				{
					title: 'Any Craps',
					href: 'any-craps'
				},
				{
					title: 'The Field',
					href: 'the-field'
				},
				{
					title: 'Multi-Bets',
					href: 'multi-bets'
				},
				{
					title: 'Horn',
					href: 'horn'
				},
				{
					title: 'Horn High',
					href: 'horn-high'
				},
				{
					title: 'World',
					href: 'world'
				},
				{
					title: 'Hop Bets',
					href: 'hop-bets'
				}
			]
		},
		{
			title: 'Come Bets',
			href: 'come-bets',
			subs: [
				{
					title: 'Come Bet Basics',
					href: 'come-bet-basics'
				},
				{
					title: 'Come Bet Odds',
					href: 'come-bet-odds'
				},
				{
					title: 'Coming Down w/Odds',
					href: 'coming-down-with-odds'
				}
			]
		},
		{
			title: "The Don'ts",
			href: 'the-donts',
			subs: [
				{
					title: "Don't Pass",
					href: 'dont-pass'
				},
				{
					title: "Don't Pass Lay Odds",
					href: 'dont-pass-lay-odds'
				},
				{
					title: "Don't Come",
					href: 'dont-come'
				},
				{
					title: "Don't Come Lay Odds",
					href: 'dont-come-lay-odds'
				},
				{
					title: 'Overlays',
					href: 'overlays'
				}
			]
		}
	];

	let menus3: Menu2[] = [
		{
			title: 'Craps Info',
			subs: [
				{
					title: 'First Time Craps Player',
					href: 'first-time-craps-player'
				},
				{
					title: 'Rank of Craps Bets',
					href: 'rank-of-craps-bets'
				},
				{
					title: 'Craps Myths',
					href: 'craps-myths'
				},
				{
					title: 'Craps Superstitions',
					href: 'craps-superstitions'
				}
			]
		},
		{
			title: 'Better Player',
			subs: [
				{
					title: 'Better Craps Shooter',
					href: 'better-craps-shooter'
				},
				{
					title: 'Advantage of a Great Roll',
					href: 'a-great-craps-roll'
				},
				{
					title: 'Dealing with New Players',
					href: 'dealing-with-new-craps-players'
				},
				{
					title: 'What Not To Do',
					href: 'not-to-do-at-craps-table'
				}
			]
		},
		{
			title: 'Improver Your Game',
			subs: [
				{
					title: 'Be an Efficient Player',
					href: 'be-an-efficient-craps-player'
				},
				{
					title: 'Art of Verbal Betting',
					href: 'art-of-verbal-betting'
				},
				{
					title: 'A Perfect Craps Bet',
					href: 'a-perfect-craps-bet'
				}
			]
		},
		{
			title: 'Dealing with Dealers',
			subs: [
				{
					title: 'Tipping the Dealers',
					href: 'tipping-the-dealers'
				},
				{
					title: 'Win a Dispute',
					href: 'win-a-craps-dispute'
				},
				{
					title: 'Dealer Pet Peeves',
					href: 'craps-dealer-pet-peeves'
				}
			]
		},
		{
			title: 'Money Management',
			subs: [
				{
					title: 'Money Techniques',
					href: 'craps-money-techniques'
				},
				{
					title: 'Managing Your Bankroll',
					href: 'managing-your-craps-bankroll'
				},
				{
					title: 'Protecting Your Money',
					href: 'protecting-your-money'
				},
				{
					title: 'Choosing the Right Table',
					href: 'right-craps-table'
				},
				{
					title: 'When to Leave the Table',
					href: 'leaving-the-craps-table'
				}
			]
		},
		{
			title: 'Craps Betting',
			subs: [
				{
					title: "Playing the Don'ts",
					href: 'playing-the-donts'
				},
				{
					title: 'Come VS Place Bets',
					href: 'come-vs-place-bets'
				},
				{
					title: 'Lure of Proposition Bets',
					href: 'lure-of-craps-proposition-bets'
				},
				{
					title: 'Order of Operation',
					href: 'craps-order-of-operation'
				}
			]
		}
	];

	let menus4: Menu2[] = [
		{
			title: 'Pass Line Odds',
			subs: [
				{
					title: 'Pass Line Odds 6 & 8',
					href: 'practice-pass-line-odds-payments-6-8'
				},
				{
					title: 'Pass Line Odds 5 & 9',
					href: 'practice-pass-line-odds-payments-5-9'
				},
				{
					title: 'Pass Line Odds 4 & 10',
					href: 'practice-pass-line-odds-payments-4-10'
				}
			]
		},
		{
			title: 'Place Bet Payments',
			subs: [
				{
					title: 'Place Bet Payments 6 & 8',
					href: 'practice-place-bet-payments-6-8'
				},
				{
					title: 'Place Bet Payments 5 & 9',
					href: 'practice-place-bet-payments-5-9'
				},
				{
					title: 'Place Bet Payments 4 & 10',
					href: 'practice-place-bet-payments-4-10'
				}
			]
		},
		{
			title: 'Come Bet w/Odds Payments',
			subs: [
				{
					title: 'Come Bet Odds Payments 6 & 8',
					href: 'practice-come-bet-w-odds-payments-6-8'
				},
				{
					title: 'Come Bet Odds Payments 5 & 9',
					href: 'practice-come-bet-w-odds-payments-5-9'
				},
				{
					title: 'Come Bet Odds Payments 4 & 10',
					href: 'practice-come-bet-w-odds-payments-4-10'
				}
			]
		},
		{
			title: 'Lay Odds Payments',
			subs: [
				{
					title: 'Lay Odds Payments 6 & 8',
					href: 'practice-lay-odds-payments-6-8'
				},
				{
					title: 'Lay Odds Payments 5 & 9',
					href: 'practice-lay-odds-payments-5-9'
				},
				{
					title: 'Lay Odds Payments 4 & 10',
					href: 'practice-lay-odds-payments-4-10'
				}
			]
		},
		{
			title: 'Craps Cards',
			subs: [
				{
					title: 'Black Craps Cards',
					href: 'practice-craps-cards-black'
				},
				{
					title: 'Grey Craps Cards',
					href: 'practice-craps-cards-grey'
				}
			]
		},
		{
			title: 'Craps Dice',
			subs: [
				{
					title: '60mm Foldable Craps Dice',
					href: 'practice-60mm-craps-dice'
				},
				{
					title: '40mm Foldable Craps Dice',
					href: 'practice-40mm-craps-dice'
				},
				{
					title: '19mm Foldable Craps Dice',
					href: 'practice-19mm-craps-dice'
				}
			]
		},
		{
			title: 'Craps Table Layouts',
			subs: [
				{
					title: 'Full Craps Table Layout',
					href: 'practice-full-craps-table-layout'
				},
				{
					title: 'Half Craps Table Layout',
					href: 'practice-half-craps-table-layout'
				}
			]
		},
		{
			title: 'Other Printouts',
			subs: [
				{
					title: 'Horn High Generator',
					href: 'practice-horn-high-generator'
				},
				{
					title: 'Craps Roll Cards',
					href: 'practice-craps-roll-cards'
				}
			]
		}
	];

	function toggleDrawer() {
		isOpen = !isOpen;
	}
</script>

<div>
	<button class="drawer-button" on:click={toggleDrawer}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-6 h-6 stroke-current"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>

	<!-- Drawer content -->
	<div
		class={`absolute h-screen w-[96px] z-50 transition-all ease-linear ${
			isOpen
				? '-top-7 -left-[64px] md:-left-[104px] opacity-100 pointer-events-auto'
				: '-left-[64px] md:-left-[104px] opacity-0 pointer-events-none'
		}`}
	>
		<!-- List of links -->
		<div class="w-80 min-h-screen max-h-screen nav-drawer overflow-y-auto pl-4">
			<div class="flex justify-between">
				<div class="mt-6 ml-6">
					<ThemeSlider />
				</div>
				<div class="mt-6 mr-6">
					<button on:click={toggleDrawer}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="28px"
							viewBox="0 0 24 24"
							width="28px"
							fill="var(--text-color)"
							><path d="M0 0h24v24H0V0z" fill="none" /><path
								d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
							/></svg
						>
					</button>
				</div>
			</div>
			<div class="clear-both max-h-screen overflow-y-auto">
				{#each menus as menu (menu.title)}
					<a class="flex items-center py-1 pl-4" data-track="drawer-{menu.href}" href={menu.href}>
						<img
							src={$theme === 'dark' ? menu.darkSrc : menu.lightSrc}
							alt={menu.alt}
							class="w-5 h-5 mr-2 filter"
						/>
						<h1 class="ml-4 text-lg nav-drawer-main-menu-text">{menu.title}</h1>
					</a>
				{/each}
				{#each menus2 as menu (menu.title)}
					<a class="flex py-2 px-4" data-track="drawer-{menu.href}" href={menu.href}>
						<h1 class="text-lg nav-drawer-section-title">{menu.title}</h1>
					</a>
					{#each menu.subs as sub (sub.title)}
						<a
							class="flex py-1 px-8 nav-drawer-section-link"
							data-track="drawer-{sub.href}"
							href={sub.href}
						>
							<h2>{sub.title}</h2>
						</a>
					{/each}
				{/each}
				<a class="flex py-2 px-4 items-center" data-track="drawer-craps-blog" href="craps-blog">
					<img
						src={$theme === 'dark'
							? 'src/images/icons/paper-white-icon.png'
							: 'src/images/icons/paper-black-icon.png'}
						alt="Piece of paper"
						class="w-5 h-5 mr-2 filter"
					/>
					<h1 class="ml-4 text-lg nav-drawer-practice-main-title">Craps Blog</h1>
				</a>
				{#each menus3 as menu (menu.title)}
					<h1 class="block py-2 px-4 nav-drawer-practice-title text-lg">{menu.title}</h1>
					{#each menu.subs as sub (sub.title)}
						<a class="block py-1 px-8" data-track="drawer-{sub.href}" href={sub.href}>
							<h2 class="nav-drawer-practice-link">{sub.title}</h2>
						</a>
					{/each}
				{/each}
				<a
					class="flex py-2 px-4 items-center"
					data-track="drawer-practice-craps"
					href="practice-craps"
				>
					<img
						src={$theme === 'dark'
							? 'src/images/icons/bullseye-white-icon.png'
							: 'src/images/icons/bullseye-black-icon.png'}
						alt="Bullseye"
						class="w-5 h-5 mr-2 filter"
					/>
					<h1 class="ml-4 text-lg nav-drawer-practice-main-title">Practice Downloads</h1>
				</a>
				{#each menus4 as menu (menu.title)}
					<h1 class="block py-2 px-4 nav-drawer-practice-title text-lg">{menu.title}</h1>
					{#each menu.subs as sub (sub.title)}
						<a class="block py-1 px-8" data-track="drawer-{sub.href}" href={sub.href}>
							<h2 class="nav-drawer-practice-link">{sub.title}</h2>
						</a>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</div>
