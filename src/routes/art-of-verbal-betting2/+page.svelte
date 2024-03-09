<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogIntroParas from '$lib/clients/components/blog/BlogIntroParas.svelte';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogHeaderTwo from '$lib/clients/components/blog/Blog-h2.svelte';
	import BlogHeaderH2WOl from '$lib/clients/components/blog/Blog-h2-w-ol.svelte';
	import BlogHeaderTwoMulti from '$lib/clients/components/blog/Blog-h2-multi.svelte';
	import BlogClosingParas from '$lib/clients/components/blog/BlogClosingParas.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Art of Verbal Betting';
	let description: string =
		'Verbal betting in Craps made easy: Learn to make your bets verbally with precision, avoiding common mistakes for a smoother, more enjoyable game';
	let url: string = 'art-of-verbal-betting';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'If We All Knew',
			href: '#verbalBetBasics',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Anatomy of a Verbal Bet',
			href: '#verbalAnatomy',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Verbal Betting Gone Wrong',
			href: '#wrongBet',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Correct Verbal Betting',
			href: '#correctWay',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let blogOpening = [
		{
			textParts: [
				{
					text: "Craps is not just a game of dice; it's a game of communication. Understanding the rules is one thing; knowing how to articulate your bets without disturbing the game's flow is another. There will come many times in your Craps career when you will want to make a bet at the very last second. The dice will be out and the shooter will be about to throw. How do you make the bet without being the villain? It's time to explore the often-overlooked aspect of Craps: verbal betting."
				}
			]
		},
		{
			textParts: [
				{
					text: 'Verbal betting is talking to the dealer when you make your bet and waiting for '
				},
				{
					text: 'the dice ',
					url: 'the-dice'
				},
				{
					text: 'to land before placing your money on the table. It’s a very calm exchange, and even though the time is limited, it’s so fast that you can make one between the time the shooter lets go of the dice and before they land. It’s one of the most critical aspects of Craps.'
				}
			]
		}
	];

	let sectionVerbalBet = [
		{
			id: 'verbalBetBasics',
			title: 'If We All Knew How to Make a Verbal Bet',
			paras: [
				[
					{
						text: 'Late bets are among the worst mistakes you can make on a dice game, yet they occur all the time. While some players are aware and try to avoid it, others remain oblivious or don’t even care.'
					}
				],
				[
					{
						text: "Verbal bets are used to maintain the game's rhythm and make sure the shooter isn't disturbed. Any action that messes with the shooter's tempo, especially as their ready to throw, is looked down on. Having the shooter hesitate is bad, but a toss that hits a player is gonna cause some eyes to roll."
					}
				],
				[
					{
						text: 'Do you want a last-second Field bet? Say, “$10 plays the Field”. Don’t '
					},
					{
						text: 'reach across ',
						url: 'not-to-do-at-craps-table'
					},
					{
						text: 'the table at the last moment. Forgot to add Odds to your Pass Line? Say, “$20 Odds play” Don’t try to to slyly creep your hand over the edge of the rail and drop cheques as your Odds bet. You need to hold the money in your hand and place it down after the roll. Think a Yo is going to roll next? No need to throw a cheque to the stickperson. Just say, “Dollar Yo!” and throw it in afterward.'
					}
				]
			]
		}
	];

	let sectionAnatomy = [
		{
			id: 'verbalAnatomy',
			title: 'Anatomy of a Verbal Bet',
			para: [
				{
					text: 'A verbal bet has three components, all of which are equally important. Leave any of them out and you don’t have a bet.'
				}
			],
			subTitles: ['The Amount - ', 'The Bet -', 'The Confirmation -'],
			subParas: [
				[
					{
						text: 'The amount is how much money you want on the bet. Without an amount, we don’t know how much you want. You may be holding something in your hand, but the dealer may be preoccupied. They can hear you but aren’t looking at you; therefore they will “no bet” you. Without an amount, it’s not a bet. If you have time you can always try again before the dice land.'
					}
				],
				[
					{
						text: 'Which bet you want is as important as the amount, but don’t ask for anything unless you know what you want and how to ask for it. You can’t have a conversation about what the possibilities of what you want are while the shooter has the dice. There are four Hardways, '
					},
					{ text: 'four Horn Highs', url: 'horn-high' },
					{
						text: ', and an infinite combination of other bets. Ask the dealer or another player if you’re unsure what the right way to make or say a bet. Most people are happy to help.'
					}
				],
				[
					{
						text: 'Confirmation of the bet by the dealer is also critical. You can say how much you want and which bet you want, but if the dealer doesn’t book it (repeat the bet back to you), it is not a bet. You must make sure the dealer repeats your bet or says, “Bet.” If they don’t, you need to repeat yourself repeatedly until they do. A verbal bet that is not booked is not a bet.'
					}
				]
			]
		}
	];

	let sectionWrong = [
		{
			id: 'wrongBet',
			title: 'How Verbal Betting Can Go Wrong',
			para: [
				{
					text: 'Here are some of the most common reasons a verbal bet will be turned into a “No bet”:'
				}
			],
			subTitles: [
				'The player makes a Call Bet -',
				'The player doesn’t specify the bet -',
				'The player says a bet the wrong way -',
				'The player says the wrong amount for a bet -',
				'The player doesn’t specify how they want their money to be split up -'
			],
			subParas: [
				[
					{
						text: 'A Call bet is when a player asks for a bet but doesn’t show the money required for the bet. If a player asks “Can I have a $35 Place bet on the 5?”, the dealers need to know that they have $35 to cover the cost of the bet, otherwise “No bet.”'
					}
				],
				[
					{
						text: 'You can’t just ask for a $5 Horn High; you must specify which one. Horn High Aces? Horn High Ace Deuce? Horn High Yo? Horn High Twelve? You need to make a decision on which one, and you need to do it before the shooter throws the dice - and they currently have the dice in their hands.'
					}
				],
				[
					{ text: 'If you say, “Gimme $5 hard three.” What is that? Do you mean the ' },
					{ text: 'Ace Deuce', url: 'straight-up' },
					{ text: '? Do you mean the pair of threes, which is the Hard Six?' }
				],
				[
					{
						text: 'The Horn High is a $5 bet, so if you ask for an $8 Horn High Twelve, then we can’t be sure how much you want. Did you want two units? A $10 Horn High Twelve? Did you mean an $8 Horn?  A dealer could easily say, “No bet.” Some dealers will round down to the closest proper amount and book that. “$5 Horn High Twelve”.'
					}
				],
				[
					{
						text: 'If you say “$5 on the hard six and eight,” that could mean a few things. Do you mean $5 on each the Hard Six and Eight, $10 total? Do you want to split $5 between the two bets? Does that mean you want $2 on each and a $1 change? Do you want $3 on one and $2 on the other?'
					}
				]
			]
		}
	];

	let sectionCorrect = [
		{
			id: 'correctWay',
			title: 'Te Correct Way to Make Verbal Bets',
			paras: [
				{
					textBlocks: [
						{
							text: 'There are going to be some ways to mitigate the above circumstances, the first of which is to know what your bets are called.'
						}
					],
					listTitle: [
						'Aces -',
						'Ace Deuce -',
						'Yo -',
						'Twelve -',
						'High Low -',
						'Hardways -',
						'Horn High -'
					],
					listItem: [
						{
							content: [
								{
									text: 'A roll of 1-1 is not called Two but is sometimes referred to as "Snake Eyes".'
								}
							]
						},
						{
							content: [
								{
									text: 'A roll of 1-2 is not called Three but I\'ve heard "Acey Deucey".'
								}
							]
						},
						{
							content: [
								{
									text: 'A roll of 5-6 is not called Eleven but sometimes said "Yo-leven".'
								}
							]
						},
						{
							content: [
								{
									text: 'A roll of 6-6 happens to be normal and is called Twelve. It can also be referred to as "Midnight" or "Boxcars".'
								}
							]
						},
						{
							content: [
								{
									text: 'When you bet the Aces and the Twelve together, their names turn into High and Low. “Can I have $1 each High-Low”'
								}
							]
						},
						{
							content: [
								{
									text: 'There are four Hardways. Do not bet them by calling them by the pairs. “Hard 3’s,” which is a pair of 3’s, which is a Hard Six. You add them together.'
								}
							],
							nestedList: [
								{
									content: [
										{
											text: 'A pair of 2’s is the Hard Four'
										},
										{
											text: 'A pair of 3’s is the Hard Six'
										},
										{
											text: 'A pair of 4’s is the Hard Eight'
										},
										{
											text: 'A pair of 5’s is the Hard Ten'
										}
									]
								}
							]
						},
						{
							content: [
								{
									text: 'There are four Horn High which consist of a Horn plus an extra dollar on one of the bets:'
								}
							],
							nestedList: [
								{
									content: [
										{
											text: 'Horn High Aces'
										},
										{
											text: 'Horn High Ace Deuce'
										},
										{
											text: 'Horn High Yo'
										},
										{
											text: 'Horn High Twelve'
										}
									]
								}
							]
						}
					]
				},
				{
					textBlocks: [
						{
							text: "Know the minimums for each bet. Since many of the bets are a combination of bets, you need to make sure you're giving the dealer enough."
						}
					],
					listTitle: [
						'Any Amount -',
						'$2 Minimum -',
						'$3 Minimum -',
						'$4 Minimum -',
						'$5 Minimum -'
					],
					listItem: [
						{
							content: [
								{
									text: 'Any Craps, '
								},
								{
									text: 'Any Seven',
									url: 'any-seven'
								},
								{
									text: ', the Hardways, and the Straight Up bets; Aces, Ace Deuce, Yo, and Twelve, have $1 min. You can bet these in any amount.'
								}
							]
						},
						{
							content: [
								{
									text: 'The High-Low, Eleven-Twelve, and C & E have a $2 min. With the C & E, you can separate the bet - “$2C & $1E” or split any amount above $2 such as a “$3 C & E split”. You normally wouldn’t split two straight up numbers because any odd amount on the split, such as a $3 Eleven-Twelve split, pays $43.50 when the 12 rolls, and the payment will be rounded down to $43 resulting in a loss of $0.50. Not a lot of money but do it twice and you lost $1, and a $1 in Craps can turn into hundreds or even thousands in a matter of minutes.'
								}
							]
						},
						{
							content: [
								{
									text: 'Three-Way Crap and '
								},
								{
									text: 'High-Low-Yo',
									url: 'multi-bets'
								},
								{
									text: ' have $3 min but being open-ended in the way you verbalize the bet can get you in trouble. If you say, “Can I have a $3 high-low-yo”, Do you mean $1 on each of them for $3 total or $3 on each for $9 total. I’ve seen too many players use identical phrases but with differing intentions. The best way to avoid ambiguity is to always use “… each.” For example, specify, “Can I have $3 each high-low-yo”.'
								}
							]
						},
						{
							content: [
								{
									text: 'The Horn has a $4 min and is bet in multiples of four. You can also bet the "All the Hardways" in multiples of four.'
								}
							]
						},
						{
							content: [
								{
									text: 'The Horn High and '
								},
								{
									text: 'World ',
									url: 'world'
								},
								{ text: 'have $5 min, and you always bet them in multiples of five.' }
							]
						}
					]
				},
				{
					textBlocks: [
						{
							text: 'Know how to split your money. Use these two methods to separate improper bet amounts between Proposition bets.'
						}
					],
					listTitle: ['Say "High on the ..."', 'Say the Amounts Individually -'],
					listItem: [
						{
							content: [
								{
									text: 'You can say, “All the hardways high on the 8 for $5,” which would put $2 on the Hard Eight and $1 on the rest. The same applies if you bet something like $10 three-way crap. You would say, “$10 three-way crap high on the aces”. That would put $4 on the '
								},
								{
									text: 'Aces ',
									url: 'straight-up'
								},
								{ text: 'and $3 on the rest.' }
							]
						},
						{
							content: [
								{
									text: 'For a $5 bet on the Eleven-Twelve, you would specify which has more such as “$3 Eleven $2 Twelve”. A High-Low-Yo that is bet for $25 would be split by saying something like “$10 each high-low $5 yo”.'
								}
							]
						}
					]
				}
			]
		}
	];

	let blogClosing = [
		{
			textParts: [
				{
					text: "Using verbal bets is key to mastering Craps. No matter how comfortable you feel, the game's relentless speed will eventually throw you off. Remember that verbalizing a bet is lightning fast and won't hinder the shooter. And if you don’t get your be off in time, you can rest easy knowing you didn't break the shooter's concentration."
				}
			]
		},
		{
			textParts: [
				{
					text: 'Your next step is simple: practice. Before heading to the casino, familiarize yourself with the terminologies, minimums, and how to correctly split your bets. That way, when you say, "$10 plays the Field," you\'ll know you\'re not only betting but also contributing to a seamless game.'
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
  "headline": "Betting Verbally at the Craps Table",
  "description": "Exploring the nuances of verbal betting at the Craps table to maintain game flow and avoid disturbing the shooter.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/art-of-verbal-betting",
  "image": "http://parlaynation.com/images/art-of-verbal-betting/art-of-verbal-betting-header.webp",
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
    "@id": "http://parlaynation.com/art-of-verbal-betting"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "The Importance of Verbal Betting",
      "description": "Understanding the critical role of verbal betting in Craps to keep the game's rhythm and not disturb the shooter.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Verbal Betting Basics",
          "description": "Verbal betting involves communicating your bet to the dealer without reaching over the table at the last moment."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Anatomy of a Verbal Bet",
      "description": "The three crucial components of a verbal bet: The Amount, The Bet, and The Confirmation.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Amount",
          "description": "Specifying how much money you want on the bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Bet",
          "description": "Clearly stating which bet you want."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Confirmation",
          "description": "The dealer's confirmation of your bet is essential for it to be valid."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Common Mistakes in Verbal Betting",
      "description": "Examples of what can lead to a 'No bet' situation.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Call Bets without Showing Money",
          "description": "Asking for a bet but not showing the necessary money leads to 'No bet.'"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Vague Bet Specifications",
          "description": "Failing to specify the bet clearly, such as the exact Horn High bet wanted."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Correct Way to Make Verbal Bets",
      "description": "Strategies to avoid common verbal betting mistakes and ensure your bet is understood and accepted.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Know Bet Terminologies",
          "description": "Understanding the specific names and terms for each bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bet Minimums",
          "description": "Knowing the minimum amounts for various bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Splitting Your Money Correctly",
          "description": "Using clear language to specify how you want your bet divided."
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
			sectionTitle="Improve Your Game"
			title="Betting Verbally at the Craps Table"
			{pageData}
		/>
		<BlogIntroParas {blogOpening} />
		<BlogImg
			caption=""
			{url}
			img="outside-place-bets"
			title="Outside Place Bets"
			alt="Place bets placed outside."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogHeaderTwo blogSection={sectionVerbalBet} />
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionAnatomy} />
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="high-low-yo"
			title="High Low Yo on Craps Layout"
			alt="High low yo on the craps layout"
		/>
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionWrong} />
		<Divider />
		<BlogHeaderTwoMulti blogSectionMulti={sectionCorrect} />
		<Divider />
		<BlogImg caption="" {url} img="c-and-e" title="C & E Bet" alt="C and e bet" />
		<Divider />
		<BlogClosingParas {blogClosing} />
	</main>
</BlogLayout>
