<script lang="ts">
	import { onMount } from 'svelte';

	type Menu = {
		title: string;
		href?: string;
		iconD?: string[];
		iconFills?: string[];
		iconStrokes?: string[];
		iconCircles?: Array<{ cx: string; cy: string; r: string; stroke?: string; fill?: string }>;
		iconRects?: Array<{
			height: string;
			width: string;
			x: string;
			y: string;
			stroke?: string;
			fill?: string;
		}>;
		iconPolygons?: Array<{ points: string; stroke?: string; fill?: string }>;
		iconColor?: string;
		subs?: SubMenu[];
	};

	type SubMenu = {
		title: string;
		href: string;
	};

	type Menu2 = {
		title: string;
		subs: SubMenu[];
	};

	let menus: Menu[] = [
		{
			title: 'Home',
			href: '/',
			iconD: [
				'M0 0h24v24H0V0z',
				'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z'
			],
			iconStrokes: ['black', 'blue'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Learn Craps',
			href: 'learn-craps',
			iconD: [
				'M0 0h24v24H0z',
				'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z'
			],
			iconStrokes: ['black', 'blue'],
			iconFills: ['none', 'green'],
			iconCircles: [
				{ cx: '7.5', cy: '16.5', r: '1.5', fill: 'green' },
				{ cx: '7.5', cy: '7.5', r: '1.5', fill: 'green' },
				{ cx: '12', cy: '12', r: '1.5', fill: 'green' },
				{ cx: '16.5', cy: '16.5', r: '1.5', fill: 'green' },
				{ cx: '16.5', cy: '7.5', r: '1.5', fill: 'green' }
			]
		},
		{
			title: 'Craps Simulator',
			href: 'craps-simulator',
			iconD: [
				'M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z',
				'M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z'
			],
			iconStrokes: ['black', 'green'],
			iconFills: ['orange', 'blue'],
			iconRects: [{ height: '24', width: '24', x: '6.25', y: '7.72' }],
			iconCircles: [
				{ cx: '17', cy: '12', r: '1', stroke: 'red', fill: 'black' },
				{ cx: '15', cy: '9', r: '1', stroke: 'red', fill: 'black' }
			],
			iconPolygons: [
				{
					points: '9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10',
					stroke: 'black',
					fill: 'red'
				}
			]
		},
		{
			title: 'Craps Calculators',
			href: 'craps-calculators',
			iconD: [
				'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z',
				'M19,19H5V5h14V19z'
			],
			iconStrokes: ['black', 'orange'],
			iconFills: ['blue', 'red'],
			iconRects: [
				{ height: '1.5', width: '5', x: '6.25', y: '7.72', stroke: 'black', fill: 'yellow' },
				{ height: '1.5', width: '5', x: '13', y: '15.75', stroke: 'black', fill: 'yellow' },
				{ height: '1.5', width: '5', x: '13', y: '13.25', stroke: 'black', fill: 'yellow' }
			],
			iconPolygons: [
				{
					points:
						'8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16',
					stroke: 'green',
					fill: 'yellow'
				},
				{
					points:
						'14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89',
					stroke: 'green',
					fill: 'yellow'
				}
			]
		},
		{
			title: 'Craps Blog',
			href: 'craps-blog',
			iconD: [
				'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z',
				'M19,19H5V5h14V19z'
			],
			iconStrokes: ['green', 'black'],
			iconFills: ['red', 'blue'],
			iconRects: [
				{ height: '1.5', width: '5', x: '6.25', y: '7.72', stroke: 'black', fill: 'yellow' },
				{ height: '1.5', width: '5', x: '13', y: '15.75', stroke: 'black', fill: 'yellow' },
				{ height: '1.5', width: '5', x: '13', y: '13.25', stroke: 'black', fill: 'yellow' }
			],
			iconPolygons: [
				{
					points:
						'8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16',
					stroke: 'green',
					fill: 'yellow'
				},
				{
					points:
						'14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89',
					stroke: 'green',
					fill: 'yellow'
				}
			]
		},
		{
			title: 'Glossary',
			href: 'glossary',
			iconD: [
				'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z'
			],
			iconStrokes: ['black', 'orange'],
			iconFills: ['blue', 'red']
		},
		{
			title: 'FAQ',
			href: 'faq',
			iconD: [
				'M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z'
			],
			iconStrokes: ['black', 'orange'],
			iconFills: ['blue', 'red']
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

	onMount(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	let isOpen = false;
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
		<div class="w-96 min-h-screen max-h-screen bg-slate-800 p-8 text-blue-300 overflow-y-auto">
			<div class="float-right">
				<button on:click={toggleDrawer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#000000"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
						/></svg
					>
				</button>
			</div>
			<div class="clear-both text-gray-900 dark:text-gray-100 max-h-screen overflow-y-auto">
				{#each menus as menu (menu.title)}
					<a
						class="flex items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
						data-track="drawer-{menu.href}"
						href={menu.href}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#{menu.iconColor}"
						>
							{#if menu.iconD}
								{#each menu.iconD as d, i (i)}
									<path
										{d}
										fill={menu.iconFills ? menu.iconFills[i] : 'none'}
										stroke={menu.iconStrokes ? menu.iconStrokes[i] : 'none'}
									/>
								{/each}
							{/if}

							{#if menu.iconPolygons}
								{#each menu.iconPolygons as polygon}
									<polygon
										points={polygon.points}
										stroke={polygon.stroke ? polygon.stroke : 'none'}
										fill={polygon.fill ? polygon.fill : 'none'}
									/>
								{/each}
							{/if}

							{#if menu.iconRects}
								{#each menu.iconRects as rect}
									<rect
										x={rect.x}
										y={rect.y}
										width={rect.width}
										height={rect.height}
										stroke={rect.stroke ? rect.stroke : 'none'}
										fill={rect.fill ? rect.fill : 'none'}
									/>
								{/each}
							{/if}

							{#if menu.iconCircles}
								{#each menu.iconCircles as circle}
									<circle
										cx={circle.cx}
										cy={circle.cy}
										r={circle.r}
										stroke={circle.stroke ? circle.stroke : 'none'}
										fill={circle.fill ? circle.fill : 'none'}
									/>
								{/each}
							{/if}
						</svg>
						<h1 class="ml-4 text-lg text-[#60A5FA]">{menu.title}</h1>
					</a>
				{/each}

				{#each menus2 as menu (menu.title)}
					<a
						class="flex py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
						data-track="drawer-{menu.href}"
						href={menu.href}
					>
						<h1 class="text-lg text-[#94A3B8]">{menu.title}</h1>
					</a>

					{#each menu.subs as sub (sub.title)}
						<a
							class="flex py-1 px-8 hover:bg-gray-200 dark:hover:bg-gray-700"
							data-track="drawer-{sub.href}"
							href={sub.href}
						>
							<h2>{sub.title}</h2>
						</a>
					{/each}
				{/each}

				<a
					class="flex py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 items-center"
					data-track="drawer-practice-craps"
					href="practice-craps"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 0 24 24"
						width="24px"
						fill="#000000"
						><path d="M0 0h24v24H0V0z" fill="none" /><path
							d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"
							fill="yellow"
							stroke="black"
						/></svg
					>
					<h1 class="ml-4 text-xl text-[#60A5FA]">Practice Downloads</h1>
				</a>

				{#each menus3 as menu (menu.title)}
					<h1 class="block py-2 px-4 text-[#94A3B8] text-lg">{menu.title}</h1>
					{#each menu.subs as sub (sub.title)}
						<a
							class="block py-1 px-8 hover:bg-gray-200 dark:hover:bg-gray-700"
							data-track="drawer-{sub.href}"
							href={sub.href}
						>
							<h2>{sub.title}</h2>
						</a>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</div>
