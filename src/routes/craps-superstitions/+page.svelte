<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/components/blog/Blog-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Craps Superstitions';
	let description: string =
		'Discover the psychology of Craps superstitions: what to do when the dice get cold or why a lucky charm can make all the difference. Perfect your play with practical advice.';
	let url: string = 'craps-superstitions';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'The Good Superstitions',
			href: '#goodSuperstitions',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'The Bad Superstitions',
			href: '#badSuperstitions',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "It's the Shooters Fault",
			href: '#shootersFault',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Handling a Superstition',
			href: '#handlingSuperstition',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let sectionGood = [
		{
			id: 'goodSuperstitions',
			title: 'The Good Superstitions',
			para: [
				{
					text: 'You can not forget about the lucky charms and rituals that players swear by at the craps table, from cherished trinkets to favorite outfits, all embodying symbols of hope and good luck.'
				}
			],
			subTitles: [
				'Bringing your lucky charm -',
				'Wearing a lucky outfit -',
				'Giving positive encouragement -',
				'Standing in a lucky spot -',
				'Blowing on the dice -'
			],
			subParas: [
				[
					{
						text: "Many players believe in the power of a lucky charm or a ritual performed before a roll in craps. These can range from small trinkets to specific actions believed to bring good luck. While there's no harm in such practices, it's important to remember to avoid placing their lucky charms in "
					},
					{
						text: 'the rail',
						url: 'the-craps-table'
					},
					{
						text: ', as this space is designated solely for chips.'
					}
				],
				[
					{
						text: 'Many players love to wear their lucky outfit. This could be any specific item of clothing, such as a favorite hat, shirt, or pair of socks, that they feel brings them good luck. The idea is that wearing these lucky items creates a positive mindset or a sense of confidence, which players often associate with increased chances of winning.'
					}
				],
				[
					{
						text: 'Cheering on the shooter at a Craps table makes the game that much more fun to be a part of. This excitement typically builds up with different chants and claps, followed by a moment of suspenseful silence just before the dice are thrown.'
					}
				],
				[
					{
						text: 'While playing Craps, some players believe in the power of a specific spot around the table, feeling that it brings them more luck. This belief could be based on past winning experiences or a personal preference for a particular angle for their toss.'
					}
				],
				[
					{
						text: 'A classic superstition where players or those around them blow on the dice for luck. While this used to be a completely harmless tactic, more casinos are frowning upon it out of health and safety concerns.'
					}
				]
			]
		}
	];

	let sectionBad = [
		{
			id: 'badSuperstitions',
			title: 'The Bad Superstitions',
			para: [
				{
					text: "These are the table’s more unfavorable superstitions: those moments, like a dealer's stick change or the timing of a beverage server's rounds, that players often associate with a turn of bad luck."
				}
			],
			subTitles: [
				'Counting your money -',
				'There is a stick change -',
				'Hearing someone say “Seven” -',
				'Being sent a 7 by the stickperson -',
				'Letting the dice get cold -',
				'The significant other arrives -',
				'An argument arises at the table -',
				'The beverage server arrives -'
			],
			subParas: [
				[
					{
						text: "In Craps, counting money at the table is often seen as a superstition that invites bad luck. This belief is rooted in the notion that focusing on one’s winnings can jinx the roll's outcome. Some players also view it as "
					},
					{
						text: 'poor etiquette',
						url: 'not-to-do-at-craps-table'
					},
					{
						text: ', potentially distracting or boastful to other players.'
					}
				],
				[
					{
						text: 'This is one that a large amount of players recognize because it happens so often. Like clockwork, a new dealer will tap into the stick every 20 minutes. If it’s '
					},
					{
						text: 'the Comeout Roll',
						url: 'the-stages'
					},
					{
						text: ', nobody minds, but during '
					},
					{
						text: 'the Intermediate Roll',
						url: 'the-stages'
					},
					{
						text: ', many players start to get nervous.'
					}
				],
				[
					{
						text: "During the Intermediate Roll, most players will lose when the seven is rolled. For this reason, they want nothing to do with it and that includes hearing it. So many people don't know about this rule that you'll hear "
					},
					{
						text: 'novice players',
						url: 'dealing-with-new-craps-players'
					},
					{
						text: ', people learning, and people watching all saying it over and over. If the next roll is a seven, you can be sure that person will be getting a few side-eyes.'
					}
				],
				[
					{
						text: 'The stickperson is supposed to send the dice to the shooter on anything but a natural – especially not the seven. If the dealer sends the dice to you on a seven they are supposed to take it back to the middle, change it to a different number, then send the dice back. If the table loses after a dealer inadvertently sends a seven, they’re going to know some resentment is headed their way.'
					}
				],
				[
					{
						text: 'When the shooter is on a nice roll you want to keep it going that way. Get the dice. Shoot. Get paid. Rinse and repeat. You don’t want the game stopping for any reason and there can be many. Sometimes the game will come to a near stop if players don’t stop betting, if the dealers are slow to pay, or if players get caught up in discussion.'
					}
				],
				[
					{
						text: 'This one doesn’t happen too much but it happens. A player will be at the Craps table while the partner is off playing other games. Upon their arrival to see how they’re doing, they immediately seven-out. The other players won’t even know it occurred. But the player has a whole other idea about what just happened.'
					}
				],
				[
					{
						text: 'There is nothing worse that could kill the vibe of a game than an argument at the table. This usually stops everything because the players and the dealers want this to be resolved before the game continues. When you hit this halt, too many players will turn their bets off or take their bets down.'
					}
				],
				[
					{
						text: 'Any outside factor that happens on a regular basis during a Craps game is enough to use it as a reason that they lost. That includes the beverage server. When she strolls around if it’s every 20 minutes or every hour and a half, many players don’t like it. Sometimes they will unknowingly interrupt the shooter to give them their drink which can cause a disturbance in the force.'
					}
				]
			]
		}
	];

	let sectionShooter = [
		{
			id: 'shootersFault',
			title: 'Blame it on the Shooter',
			para: [
				{
					text: 'Since '
				},
				{
					text: 'the shooter ',
					url: 'better-craps-shooter'
				},
				{
					text: 'is the one in control, they are easily blamed for doing something another player considered wrong.'
				}
			],
			subTitles: [
				'Bounced the dice off the table -',
				'Didn’t ask for same dice -',
				'They balked their throw -',
				'Changed their throw -',
				'Paused the game -',
				'They hit the chips -',
				'Throwing too many naturals -'
			],
			subParas: [
				[
					{
						text: 'The dice bouncing off the table will sometimes mess with the flow of the game. Sometimes a shooter will throw them off the table over and over – enough for some players to shake their heads and turn their bets off. So you know, the softer and lower you throw the dice the less likely they are to bounce off the table.'
					}
				],
				[
					{
						text: 'When the dice go off the table and the shooter doesn\'t ask for the same one, some people will get a little skittish. They will say things like "You should have asked for the same dice!" Then they lose and somehow it\'s your fault. Let it go in one ear, out the other. If you want the same dice, say "Same dice" the instant you see either bounce off the table.'
					}
				],
				[
					{
						text: 'This is when the shooter, right before they are about to throw the dice, abruptly stops their throw. This is usually due to a distraction, like another player or loud noise. This interrupts the natural flow of the game causing players to feel a sense of unrest.'
					}
				],
				[
					{
						text: "When a player changes their toss, for instance from an underhand to a sideways throw, and the table loses on that roll, there's a common superstition that the change in throw caused the loss."
					}
				],
				[
					{
						text: 'If the shooter decides to hold up the game to use their phone or talk to a friend, the players will start to get flustered. You should wait for a Decision Roll and then quickly take care of your issue before continuing.'
					}
				],
				[
					{
						text: 'Sometimes you can’t avoid where the dice want to send themselves, but when they collide with a pile of chips causing the table to lose, you can be sure some players at the table will think the shooter should have been more careful.'
					}
				],
				[
					{
						text: 'The naturals are a roll of 2, 3, 7, 11, and 12 although, the seven is up for debate. When the Point is marked and you need to be hitting some '
					},
					{
						text: 'Place bets ',
						url: 'place-bet-basics'
					},
					{
						text: 'to pay for the money you have on the table you cannot be wasting rolls on naturals. Knowing the seven is likely coming soon, every natural rolled is like a countdown to the seven without getting paid.'
					}
				]
			]
		}
	];

	let sectionHandle = [
		{
			id: 'handlingSuperstition',
			title: 'How to Handle Witnissing a Superstition',
			paras: [
				[
					{
						text: 'These events will occur all the time. If you try to take notice of losing when these things happen then it will lead you to confirmation bias. You’ll fake yourself out. You’ll get worried when you don’t need to be and you’ll always have to play a game of “My bets are on.” and “My bets are off.” Not fun.'
					}
				],
				[
					{
						text: 'You can always perform a ritual to try and offset the superstition. I’ve seen people stand up and do a 360º spin. They’ll set the dice on certain combinations. They’ll bounce them against their wall until they get a seven so they get it out of the way. They’ll change one die or both die or dump the bowl and get all five dice – whatever might help get the job done.'
					}
				],
				[
					{
						text: 'My advice when seeing these events is to treat them as what they are, coincidence. You need to stay focused. Drown out all the noise. As Bruce Lee would say “Be water”. Go with the flow, be pliable, flexible, tense but not too tense, ready to adjust at any moment, not afraid of what’s ahead but unrelenting in the effort to get there.'
					}
				]
			]
		}
	];

	let blogClosing = [
		{
			textParts: [
				{
					text: "So, we've talked a lot about the superstitions in Craps. These beliefs are part of what makes the game special. Some folks have lucky charms or special clothes they wear for luck. Others have things they think bring bad luck, like counting money at the table or certain actions from the dealer."
				}
			]
		},
		{
			textParts: [
				{
					text: 'At the end of the day, Craps should be fun. Don’t get too hung up on superstitions. Respect other players, enjoy yourself, and just play the game. What happens with the dice happens. Just roll with it and have a good time.'
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
  "headline": "Superstitions You'll Want to Watch Out For at the Craps Table",
  "description": "An insightful guide into the common superstitions at the Craps table, exploring both good and bad beliefs, and offering advice on how to handle them.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-06",
  "url": "http://parlaynation.com/craps-superstitions",
  "image": "http://parlaynation.com/images/craps-superstitions/craps-superstitions-header.webp",
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
    "@id": "http://parlaynation.com/craps-superstitions"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "The Good Superstitions",
      "description": "Positive beliefs and rituals that players bring to the Craps table for good luck.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bringing your lucky charm",
          "description": "Players believe in the power of lucky charms or rituals for good luck, avoiding placing them in the chip rail."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wearing a lucky outfit",
          "description": "Some players wear specific clothing items they consider lucky to foster a positive mindset."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Giving positive encouragement",
          "description": "Cheering on the shooter enhances the game's fun and community spirit."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Standing in a lucky spot",
          "description": "Players may prefer specific spots at the table they believe increase their luck."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Blowing on the dice",
          "description": "A classic ritual for luck, now less common due to health and safety concerns."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "The Bad Superstitions",
      "description": "Unfavorable beliefs and actions considered to bring bad luck at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Counting your money",
          "description": "Seen as inviting bad luck and considered poor etiquette by some players."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "There is a stick change",
          "description": "A dealer's stick change can make many players nervous, especially during intermediate rolls."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hearing someone say 'Seven'",
          "description": "Mentioning 'seven' during an intermediate roll is taboo due to its potential for causing losses."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Being sent a 7 by the stickperson",
          "description": "The dealer should avoid sending the dice on a seven, as it's considered bad luck."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Letting the dice get cold",
          "description": "Any delay in the game is believed to disrupt a shooter's hot streak."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "The significant other arrives",
          "description": "Some believe a partner's arrival can jinx the game, leading to a seven-out."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "An argument arises at the table",
          "description": "Arguments disrupt the game's flow and can dampen the mood, causing some to turn off their bets."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "The beverage server arrives",
          "description": "Some players view the beverage server's arrival as a distraction that can jinx the game."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Blame it on the Shooter",
      "description": "Instances where the shooter is blamed for perceived misfortune or bad luck.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bounced the dice off the table",
          "description": "Dice bouncing off the table is often seen as disrupting the game's flow."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Didn’t ask for same dice",
          "description": "Some players believe not requesting the same dice when one goes off the table is bad luck."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "They balked their throw",
          "description": "Abruptly stopping a throw can cause unrest among players."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Changed their throw",
          "description": "Changing the throwing style is sometimes blamed for subsequent losses."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Paused the game",
          "description": "Delays caused by the shooter can fluster other players."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "They hit the chips",
          "description": "Colliding with chips during a roll can be seen as careless and unlucky."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Throwing too many naturals",
          "description": "Rolling naturals excessively is believed to foreshadow a looming seven-out."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "How to Handle Witnessing a Superstition",
      "description": "Suggestions on how to deal with superstitions observed at the Craps table, emphasizing rationality and focus.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Perform a ritual",
          "description": "Players may attempt to counteract superstitions with their own rituals."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "View as coincidence",
          "description": "Recognizing superstitions as coincidental helps maintain focus and enjoyment of the game."
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
			title="Superstitions to Watch Out For at the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				There's no denying it; Craps is a game filled with unwritten rules, traditions, and yes, a
				fair share of superstitions. Whether it's the belief that a stick change will ruin a hot
				roll or that a shooter didn’t ask for the same dice, these moments can easily make seasoned
				players a bit peeved.
			</p>
			<p class="pb-4">
				This guide aims to help you navigate the maze of Craps superstitions. Delve into the
				psychology behind these beliefs and offer practical advice on how to handle them. Understand
				why players turn their bets off during a heated argument and learn how to maintain your
				focus, even when superstitions run high.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="any-seven"
			title="Three dollar bet on Any Seven"
			alt="Three dollar bet on the any seven."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="goodSuperstitions" title="The Good Superstitions">
			<p class="pb-4">
				You can not forget about the lucky charms and rituals that players swear by at the craps
				table, from cherished trinkets to favorite outfits, all embodying symbols of hope and good
				luck.
			</p>
			<ol>
				<li>
					<span>Bringing your lucky charm - </span>Many players believe in the power of a lucky
					charm or a ritual performed before a roll in craps. These can range from small trinkets to
					specific actions believed to bring good luck. While there's no harm in such practices,
					it's important to remember to avoid placing their lucky charms in the rail, as this space
					is designated solely for chips.
				</li>
				<li>
					<span>Wearing a lucky outfit - </span>Many players love to wear their lucky outfit. This
					could be any specific item of clothing, such as a favorite hat, shirt, or pair of socks,
					that they feel brings them good luck. The idea is that wearing these lucky items creates a
					positive mindset or a sense of confidence, which players often associate with increased
					chances of winning.
				</li>
				<li>
					<span>Giving positive encouragement - </span>Cheering on the shooter at a Craps table
					makes the game that much more fun to be a part of. This excitement typically builds up
					with different chants and claps, followed by a moment of suspenseful silence just before
					the dice are thrown.
				</li>
				<li>
					<span>Standing in a lucky spot - </span>While playing Craps, some players believe in the
					power of a specific spot around the table, feeling that it brings them more luck. This
					belief could be based on past winning experiences or a personal preference for a
					particular angle for their toss.
				</li>
				<li>
					<span>Blowing on the dice - </span>A classic superstition where players or those around
					them blow on <Link text="the dice" href="the-dice" /> for luck. While this used to be a completely
					harmless tactic, more casinos are frowning upon it out of health and safety concerns.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="hop-bets"
			title="Hop Bets on the Sixes and Sevens"
			alt="Hop bet on the sixes and sevens."
		/>
		<Divider />
		<BlogH2 id="badSuperstitions" title="The Bad Superstitions">
			<p class="pb-4">
				These are the table’s more unfavorable superstitions: those moments, like a dealer's stick
				change or the timing of a beverage server's rounds, that players often associate with a turn
				of bad luck.
			</p>
			<ol>
				<li>
					<span>Counting your money - </span>In Craps, counting money at the table is often seen as
					a superstition that invites bad luck. This belief is rooted in the notion that focusing on
					one’s winnings can jinx the roll's outcome. Some players also view it as <Link
						text="poor etiquette"
						href="not-to-do-at-craps-table"
					/>, potentially distracting or boastful to other players.
				</li>
				<li>
					<span>There is a stick change - </span>This is one that a large amount of players
					recognize because it happens so often. Like clockwork, a new dealer will tap into the
					stick every 20 minutes. If it’s the Comeout Roll, nobody minds, but during the
					Intermediate Roll, many players start to get nervous.
				</li>
				<li>
					<span>Hearing someone say “Seven” - </span>During the <Link
						text="Intermediate Roll"
						href="the-stages"
					/>, most players will lose when the seven is rolled. For this reason, they want nothing to
					do with it and that includes hearing it. So many people don't know about this rule that
					you'll hear <Link text="novice players" href="dealing-with-new-craps-players" />, people
					learning, and people watching all saying it over and over. If the next roll is a seven,
					you can be sure that person will be getting a few side-eyes.
				</li>
				<li>
					<span>Being sent a 7 by the stickperson - </span>The stickperson is supposed to send the
					dice to the shooter on anything but a natural – especially not the seven. If the dealer
					sends <Link text="the dice" href="the-dice" /> to you on a seven they are supposed to take
					it back to the middle, change it to a different number, then send the dice back. If the table
					loses after a dealer inadvertently sends a seven, they’re going to know some resentment is
					headed their way.
				</li>
				<li>
					<span>Letting the dice get cold - </span>When the shooter is on a nice roll you want to
					keep it going that way. Get the dice. Shoot. Get paid. Rinse and repeat. You don’t want
					the game stopping for any reason and there can be many. Sometimes the game will come to a
					near stop if players don’t stop betting, if the dealers are slow to pay, or if players get
					caught up in discussion.
				</li>
				<li>
					<span>The significant other arrives - </span>This one doesn’t happen too much but it
					happens. A player will be at the Craps table while the partner is off playing other games.
					Upon their arrival to see how they’re doing, they immediately seven-out. The other players
					won’t even know it occurred. But the player has a whole other idea about what just
					happened.
				</li>
				<li>
					<span>An argument arises at the table - </span>There is nothing worse that could kill the
					vibe of a game than an argument at the table. This usually stops everything because the
					players and the dealers want this to be resolved before the game continues. When you hit
					this halt, too many players will turn their bets off or take their bets down.
				</li>
				<li>
					<span>The beverage server arrives - </span>Any outside factor that happens on a regular
					basis during a Craps game is enough to use it as a reason that they lost. That includes
					the beverage server. When she strolls around if it’s every 20 minutes or every hour and a
					half, many players don’t like it. Sometimes they will unknowingly interrupt the shooter to
					give them their drink which can cause a disturbance in the force.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="shootersFault" title="Blame It on the Shooter">
			<p class="pb-4">
				Since the shooter is the one in control, they are easily blamed for doing something another
				player considered wrong.
			</p>
			<ol>
				<li>
					<span>Bounced the dice off the table - </span>The dice bouncing off the table will
					sometimes mess with the flow of the game. Sometimes a shooter will throw them off the
					table over and over – enough for some players to shake their heads and turn their bets
					off. So you know, the softer and lower you throw the dice the less likely they are to
					bounce off the table.
				</li>
				<li>
					<span>Didn’t ask for same dice - </span>When the dice go off the table and the shooter
					doesn't ask for the same one, some people will get a little skittish. They will say things
					like "You should have asked for the same dice!" Then they lose and somehow it's your
					fault. Let it go in one ear, out the other. If you want the same dice, say "Same dice" the
					instant you see either bounce off the table.
				</li>
				<li>
					<span>They balked their throw - </span>This is when the shooter, right before they are
					about to throw the dice, abruptly stops their throw. This is usually due to a distraction,
					like another player or loud noise. This interrupts the natural flow of the game causing
					players to feel a sense of unrest.
				</li>
				<li>
					<span>Changed their throw - </span>When a <Link
						text="shooter"
						href="better-craps-shooter"
					/> changes their toss, for instance from an underhand to a sideways throw, and the table loses
					on that roll, there's a common superstition that the change in throw caused the loss.
				</li>
				<li>
					<span>Paused the game - </span>If the shooter decides to hold up the game to use their
					phone or talk to a friend, the players will start to get flustered. You should wait for a
					Decision Roll and then quickly take care of your issue before continuing.
				</li>
				<li>
					<span>They hit the chips - </span>Sometimes you can’t avoid where the dice want to send
					themselves, but when they collide with a pile of chips causing the table to lose, you can
					be sure some players at the table will think the shooter should have been more careful.
				</li>
				<li>
					<span>Throwing too many naturals - </span>The naturals are a roll of 2, 3, 7, 11, and 12
					although, the seven is up for debate. When the Point is marked and you need to be hitting
					some Place bets to pay for the money you have on the table you cannot be wasting rolls on
					naturals. Knowing the seven is likely coming soon, every natural rolled is like a
					countdown to the seven without getting paid.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="third-base-overhead"
			title="Overhead View of Craps Layout Third Base"
			alt="Third base overhead view of the craps layout."
		/>
		<Divider />
		<BlogH2 id="handlingSuperstition" title="How to Handle Witnessing a Superstition">
			<p class="pb-4">
				These events will occur all the time. If you try to take notice of losing when these things
				happen then it will lead you to confirmation bias. You’ll fake yourself out. You’ll get
				worried when you don’t need to be and you’ll always have to play a game of “My bets are on.”
				and “My bets are off.” Not fun.
			</p>
			<p class="pb-4">
				You can always perform a ritual to try and offset the superstition. I’ve seen people stand
				up and do a 360º spin. They’ll set the dice on certain combinations. They’ll bounce them
				against their wall until they get a seven so they get it out of the way. They’ll change one
				die or both die or dump <Link text="the bowl" href="the-craps-table" /> and get all five dice
				– whatever might help get the job done.
			</p>
			<p class="pb-4">
				My advice when seeing these events is to treat them as what they are, coincidence. You need
				to stay focused. Drown out all the noise. As Bruce Lee would say “Be water”. Go with the
				flow, be pliable, flexible, tense but not too tense, ready to adjust at any moment, not
				afraid of what’s ahead but unrelenting in the effort to get there.
			</p>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">
				So, we've talked a lot about the superstitions in Craps. These beliefs are part of what
				makes the game special. Some folks have lucky charms or special clothes they wear for luck.
				Others have things they think bring bad luck, like counting money at the table or certain
				actions from the dealer.
			</p>
			<p>
				At the end of the day, Craps should be fun. Don’t get too hung up on superstitions. Respect
				other players, enjoy yourself, and just play the game. What happens with the dice happens.
				Just roll with it and have a good time.
			</p>
		</section>
	</main>
</BlogLayout>
