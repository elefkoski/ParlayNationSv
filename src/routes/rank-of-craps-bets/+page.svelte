<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogIntroParas from '$lib/clients/components/blog/BlogIntroParas.svelte';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogHeaderH2WOl from '$lib/clients/components/blog/Blog-h2-w-ol.svelte';
	import BlogHeaderTwoMulti from '$lib/clients/components/blog/Blog-h2-multi.svelte';
	import BlogClosingParas from '$lib/clients/components/blog/BlogClosingParas.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Rank of Craps Bets';
	let description: string =
		'Ranked for your advantage: Explore every Craps bet from Odds to Propositions, mastering the game by understanding their house edges';
	let url: string = 'rank-of-craps-bets';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'The Best Bets',
			href: '#bestBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Better Bets',
			href: '#betterBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Not So Bad Bets',
			href: '#notSoBadBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Not So Good Bets',
			href: '#notSoGoodBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Worst Bets',
			href: '#worstBets',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let blogOpening = [
		{
			textParts: [
				{
					text: "Let’s go on a Craps journey, where a keen understanding of the house edge for each bet equals more informed decisions at the table. It's worth noting that higher payouts don't always equate to more excitement. "
				},
				{
					text: "The Dont's ",
					url: 'the-donts'
				},
				{
					text: 'are an example of this, providing many great bets but requiring a more patient, slow, laid-back approach.'
				}
			]
		},
		{
			textParts: [
				{
					text: 'This guide is a comprehensive breakdown of the house edge on every bet available at a Craps table. From the highly favorable Odds bets to the high-risk allure of '
				},
				{
					text: 'Proposition bets',
					url: 'proposition-bets'
				},
				{
					text: ", we'll walk you through the edge behind each choice, giving you the tools to play strategically and lower the house edge."
				}
			]
		}
	];

	let sectionBest = [
		{
			id: 'bestBets',
			title: 'The Best Bets on the Craps Table',
			paras: [
				{
					textBlocks: [
						{
							text: "Odds are the best bets you will find on the table because their advantage is 0.00%. You can't really beat it. There are four different ways to bet Odds at the Craps table and whenever possible, you should be taking advantage."
						}
					],
					listTitle: [
						'Pass Line Odds -',
						'Come Bet Odds -',
						"Don't Pass Lay Odds -",
						"Don't Come Lay Odds -"
					],
					listItem: [
						{
							content: [
								{
									text: 'These are added to the '
								},
								{
									text: 'Pass Line ',
									url: 'pass-line-basics'
								},
								{ text: 'after the Point is established.' }
							]
						},
						{
							content: [
								{
									text: 'You add these to a Come bet after it has traveled into its Point.'
								}
							],
							nestedList: [
								{
									content: [
										{ text: '<span class="text-blue-400">Point 6 or 8 -</span> Odds pay 6:5' }
									]
								},
								{
									content: [
										{ text: '<span class="text-blue-400">Point 5 or 9 -</span> Odds pay 3:2' }
									]
								},
								{
									content: [
										{ text: '<span class="text-blue-400">Point 4 or 10 -</span> Odds pay 2:1' }
									]
								}
							]
						},
						{
							content: [
								{
									text: "The Odds are added to the Don't Pass after establishing a Point."
								}
							]
						},
						{
							content: [
								{
									text: 'Once a Don’t Come travels behind its Point, you can add '
								},
								{
									text: 'Lay Odds ',
									url: 'dont-come-lay-odds'
								},
								{ text: 'by handing them to the dealer.' }
							],
							nestedList: [
								{
									content: [
										{ text: '<span class="text-blue-400">Point 6 or 8 -</span> Odds pay 5:6' }
									]
								},
								{
									content: [
										{ text: '<span class="text-blue-400">Point 5 or 9 -</span> Odds pay 2:3' }
									]
								},
								{
									content: [
										{ text: '<span class="text-blue-400">Point 4 or 10 -</span> Odds pay 1:2' }
									]
								}
							]
						}
					]
				}
			]
		}
	];

	let sectionBetter = [
		{
			id: 'betterBets',
			title: 'The Better Bets on the Craps Table',
			para: [
				{
					text: 'Outside of the Odds bets, these are the best ones on the table offering extremely low how edges.'
				}
			],
			subTitles: [
				"1.36% - Don't Pass/Don't Come -",
				'1.41% - Pass Line/Come Bet -',
				'1.52% - Place Bets on the 6 or 8 -'
			],
			subParas: [
				[
					{
						text: 'Not counting Odds, the Don’t Pass and Don’t Come are the best bets on the table. Better than the Pass Line by a mere 0.05%. These two pay even money (1:1) when they win.'
					}
				],
				[
					{
						text: 'Coming in third place is the Pass Line. The Pass Line is fun to play because you have camaraderie with the rest of the table. They will both pay even money (1:1).'
					}
				],
				[
					{
						text: 'Place bets on the 6 & 8 are top-notch bets. They are very popular with a low house edge and are fun to press. They pay 7:6.'
					}
				]
			]
		}
	];

	let sectionNotSoBad = [
		{
			id: 'notSoBadBets',
			title: 'The Not So Bad Bets on the Craps Table',
			para: [
				{ text: 'These Bets include the rest of the Overlay bets and Buys. ' },
				{ text: 'Commission ', url: 'buying-place-bets' },
				{ text: 'based bets but good none the less.' }
			],
			subTitles: [
				'2.44% - Overlay 4 or 10 -',
				'3.23% - Overlay 5 or 9 -',
				'4.00% - Place the 5 or 9 -',
				'4.00% - Overlay 6 or 8 -',
				'4.76% - All Buys -',
				'5.57% - The Field -',
				'6.67% - Place 4 or 10 -'
			],
			subParas: [
				[
					{
						text: 'These two are a couple of my favorite bets, especially after seeing a few of either roll a bunch of times. These pay 1:2 with a 5% commission on the amount your bet will win. $41 is the minimum for this bet because it must win at least $20 with a $1 vig.'
					}
				],
				[
					{
						text: 'Overlaying the 5 & 9 is also a popular bet for Don’t players. With a lower house edge, it’s a good bet. These pay 2:3 with a 5% commission on the win amount. $31 is the minimum for this bet because it must win at least $20 with a $1 vig.'
					}
				],
				[
					{
						text: 'Placing the 5 & 9 is also a good bet. These are fun to play with many press possibilities. They pay 7:5.'
					}
				],
				[
					{
						text: 'Few players Overlay the 6 & 8 because they roll often and can have confusing bet amounts. They are still good bets, however. $25 is the minimum for this bet because it must win at least $20 with a $1 vig.'
					}
				],
				[
					{
						text: 'While all buys are good bets, we suggest you only buy the 4 & 10. When you buy, all your bets will be paid True Odds for a 5% commission on the bet amount.'
					}
				],
				[
					{
						text: 'I’ve spent the majority of my Craps career telling players the Field is not a good bet. I have been mistaken. '
					},
					{ text: 'The Field ', url: 'the-field' },
					{
						text: 'is not a bad bet, nor a bet I will try to stop players from playing anymore. It pays even money (1:1) when the 3, 4, 9, 10, or 11 rolls, and double (2:1) if the 2 or 12 rolls. Some casinos may pay the 12 triple (3:1), making the house edge 2.78% and an excellent bet on the table.'
					}
				],
				[
					{
						text: 'The realization that the Field is better than Placing the 4 or 10 changed how I look at Craps. Placing the 4 & 10 is still popular because they last more than one roll. These two pay 9:5.'
					}
				]
			]
		}
	];

	let sectionNotSoGood = [
		{
			id: 'notSoGoodBets',
			title: 'The Not So Good Bets on the Craps Table',
			para: [
				{
					text: 'These bets are where bets start to pay higher but have less chance to win. While other options are available, these bets offer not so bad payouts.'
				}
			],
			subTitles: [
				'9.09% - Hard 6 or 8 -',
				'11.11% - Hard 4 or 10 -',
				'11.11% - Straight Ace Deuce/Yo -',
				'11.11% - Non-pair Hops -',
				'11.11% - Any Craps -',
				'11.11% - C & E -'
			],
			subParas: [
				[
					{ text: 'Probably the most popular Proposition Bets, ' },
					{ text: 'the Hard 6 & 8 ', url: 'the-hardways' },
					{ text: 'start getting up there in terms of the house edge. They pay 9:1.' }
				],
				[
					{
						text: 'The Hard 4 & 10 are on par with many other bets. While not quite as good as the Hard 6 & 8, they are still very popular. They pay 7:1.'
					}
				],
				[
					{
						text: 'All the Straight Up bets are fun because they pay the most on the table. These two are better than the Aces/Twelve in terms of the house edge. They pay 15:1.'
					}
				],
				[
					{
						text: 'All the Hop Bets that are not a pair pay the same as the Ace Deuce and Yo. They pay 15:1.'
					}
				],
				[
					{
						text: 'Any Craps is used mainly for hedging Pass Line and Come bet, but players still bet randomly all the time. It pays 7:1.'
					}
				],
				[
					{
						text: 'The Any Crap and Eleven combo. Very popular bet because you can bet different amounts on each '
					},
					{ text: 'the C and the E ', url: 'c-and-e' },
					{
						text: 'as well as split it for one amount. It pays 3:1 if any of the Craps roll and 7:1 if the Yo rolls.'
					}
				]
			]
		}
	];
	let sectionWorst = [
		{
			id: 'worstBets',
			title: 'The Worst Bets on the Craps Table',
			para: [
				{
					text: 'While some of these bets have the highest advantage for the casino, they offer the highest payouts available making them very popular regardless of edge.'
				}
			],
			subTitles: [
				'12.22% - Horn High Ace Deuce/Yo -',
				'12.50% - Horn -',
				'12.78% - Horn High Aces/Twelve -',
				'13.33% - World - ',
				'13.89% - Straight Aces/Twelve -',
				'13.89% - Hop any Hardway - ',
				'16.67% - Any Seven -'
			],
			subParas: [
				[
					{ text: 'These ' },
					{ text: "Horn High's ", url: 'horn-high' },
					{
						text: 'are a little better than the other two because the house edge on Straight Ace Deuce/Yo is lower than the Aces/Twelve. They pay  27:5 for a direct hit, 26:5 if the high side hits, and 11:5 if the opposite low side hits.'
					}
				],
				[
					{
						text: 'The Horn is right in the middle of the Horn Highs regarding the house edge. Popular to many, it pays 27:4 if the high side rolls and 3x the bet for the low side.'
					}
				],
				[
					{
						text: 'These two Horn Highs have more money on bets with a lower house edge which is why it doesn’t pay as well as the other two. They pay 57:5 for a direct hit, 26:5 is the opposite high side hits, and 11:5 if the low side rolls.'
					}
				],
				[
					{ text: 'Add an Any 7 to a Horn and you now have a ' },
					{ text: 'World', url: 'world' },
					{
						text: '. It remains a classic bet during the Comeout Roll and is adored by both dealers and players. It pays 26:5 on the high side, 11:5 on the low side, and is a push when the 7 rolls.'
					}
				],
				[
					{
						text: 'The High and the Low. They have a horrible house edge but pay more than anything else on the table, so players go crazy for them.. They pay 30:1.'
					}
				],
				[
					{
						text: 'The four Hopping Hardways are just as bad as the High and the Low in terms of the house edge, yet they pay so much. Not enough, but a lot at 30:1.'
					}
				],
				[
					{ text: 'The ' },
					{ text: 'Any Seven', url: 'any-seven' },
					{
						text: 'is the worst bet on the Craps table if you want to talk about numbers. Don’t get me wrong, it serves its purpose for many, but it’s not that good at all. It pays 4:1.'
					}
				]
			]
		}
	];

	let blogClosing = [
		{
			textParts: [
				{
					text: "In Craps, the house edge varies significantly across different types of bets, from 0.00% for Odds to as high as 16.67% for the Any Seven. While bets like Pass Line and Don't Pass offer a balance of low risk and decent reward, others like the Hardways or Horn Highs are for those seeking higher risk for higher reward."
				}
			]
		},
		{
			textParts: [
				{
					text: "So, what should be your next move? If you're new to Craps, start with low-house-edge bets like Odds or Pass Line to get a feel for the game. As you gain confidence, you can venture into more complex bets, always keeping the house edge in mind."
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
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
		{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Ranking All Bets On the Craps Table",
  "description": "A comprehensive guide to understanding the house edge for each bet on the Craps table, helping players make informed decisions.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
},
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/rank-of-craps-bets",
  "image": "http://parlaynation.com/images/rank-of-craps-bets/rank-of-craps-bets-header.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Parlay Nation",
    "logo": {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://parlaynation.com/rank-of-craps-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "The Best Bets on the Craps Table",
      "description": "Overview of the best bets with no house advantage.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Odds",
          "description": "Bets with no house advantage, including Pass Line Odds, Come Bet Odds, Don't Pass Lay Odds, and Don't Come Lay Odds."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Better Bets on the Craps Table",
      "description": "Bets with extremely low house edges.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Don’t Pass/Don’t Come",
          "description": "Bets offering a 1.36% house edge."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pass Line/Come Bet",
          "description": "Bets with a 1.41% house edge."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Place 6 or 8",
          "description": "Bets with a 1.52% house edge."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Not So Bad Bets on the Craps Table",
      "description": "Commission based bets with higher edges but still reasonable options.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Overlay and Buys",
          "description": "Includes Overlay 4 or 10, Overlay 5 or 9, Place the 5 or 9, Overlay 6 or 8, and all buys."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Field",
          "description": "A bet with a 5.57% house edge, offering even money or double payouts."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Not So Good Bets on the Craps Table",
      "description": "Bets with higher payouts but less chance to win.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hard and Straight Bets",
          "description": "Includes Hard 6 or 8, Hard 4 or 10, Straight Ace Deuce/Yo, Non-pair Hops, Any Craps, and C & E."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Worst Bets on the Craps Table",
      "description": "Bets with the highest house advantage.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Horn Highs and Horn Bets",
          "description": "Includes Horn High Ace Deuce/Yo, Horn, Horn High Aces/Twelve, World, Straight Aces/Twelve, Hop any Hardway, and Any Seven."
        }
      ]
    }
  ]
}

	</script>
</svelte:head>
<BlogLayout {pageLinks}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<BlogHeaderOne
			sectionTitle="Craps Info"
			title="Ranking All Bets On the Craps Table"
			{pageData}
		/>
		<BlogIntroParas {blogOpening} />
		<BlogImg
			caption=""
			{url}
			img="pass-line-paid"
			title="Pass Line Bets Paid"
			alt="Multiple pass line bets paid."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogHeaderTwoMulti blogSectionMulti={sectionBest} />
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionBetter} />
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="up-close-place-bets-third-base"
			title="Place and Come Bets"
			alt="Multiple place and come bets."
		/>
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionNotSoBad} />
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionNotSoGood} />
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="eight-dollar-horn-bet"
			title="Eight Dollar Horn"
			alt="Eight dollar horn."
		/>
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionWorst} />
		<Divider />
		<BlogClosingParas {blogClosing} />
	</main>
</BlogLayout>
