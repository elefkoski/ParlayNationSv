<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1 .svelte';
	import BlogHeaderTwo from '$lib/clients/components/blog/Blog-h2-w-ol.svelte';
	import BlogClosingPara from '$lib/clients/components/blog/BlogClosingPara.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'How to Be A Better Craps Shooter, A Comprehensive Guide';
	let description: string =
		'Step up your Craps game with our detailed guide. Learn how to be a better shooter and keep the table on your side.';
	let url: string = 'better-craps-shooter';
	let paras = [
		"No single player is more important at the Craps table than the shooter. The fate of the table rests in their hands. Their roll determines if everyone wins or loses, if they are the savior or the annihilator, if mama's gonna buy a new pair of shoes or if it's gonna be a long quiet ride home.",
		"You are responsible for the rest of the table when you are the shooter. You need to pay attention. Stay aware of what's happening. Watch the dice in the middle and know when they are about to come to you. Don't make the table wait because you're talking to your friends. Don't wait to get the dice, and then start thinking about which bets you want to make.",
		"Even if you're aware, Craps still has a myriad of rules for shooting and if you don't know how to shoot correctly, you'll be getting yelled at by both the dealers and the players. You are trying to preserve the flow of the game. Novice mistakes while shooting end up changing the flow of the game. All too often, if the players lose in that moment, you will be the reason to blame. Don't be that person.",
		"If you want to be the best Craps shooter you can be, you need to know the rules. Some can't be broken, while others are pliable. You also need to know your rights. As a shooter, you have the right to make some requests. Know the rules and your rights, and you only have to worry about beating the game."
	];

	let pageLinks: PageMenu[] = [
		{
			title: "Can't Be Broken",
			href: '#cantBeBroken',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Need to Be Followed',
			href: '#needToFollow',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Questionable Tosses',
			href: '#questionableTosses',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Not Really Rules',
			href: '#notReallyRules',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Know Your Rights',
			href: '#knowYourRights',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let blogSections = [
		{
			id: 'cantBeBroken',
			title: "The Rules That Can't Be Broken",
			para: "Short and sweet these two are the only definite rules. Without both of these, you can't be the shooter.",
			subTitles: ['You need to make a bet:', 'Pick two dice:'],
			subParas: [
				"You must bet either the Pass Line or the Don't Pass to throw the dice. This is non-negotiable. My suggestion is to put the table minimum on the Pass Line and if you want to bet more, add Odds once you get a Point.",
				"You get five dice to choose from and Craps is only played with two. I know this sounds like a given, but many players ask how many dice they need. I've seen someone throw all five as a joke (Not funny), but I don't think I've ever seen someone sincerely try to throw more than two. I'm sure it happened though."
			]
		}
	];
	let blogSections2 = [
		{
			id: 'needToFollow',
			title: 'The Rules That Need to Be Followed',
			para: "These rules you need to adhere to. You can still play Craps if you break these rules, but you will be quickly reminded of what you're doing wrong the moment you break one. Break these rules over and over, and don't be surprised if they don't let you shoot anymore.",
			subTitles: [
				"Don't go hand-to-hand with the dice:",
				'Keep the dice over the table:',
				'Hit the back wall with both dice:',
				'Keep the dice eye level with the stickperson:',
				"Don't pick up anything with the hand you have the dice in:"
			],
			subParas: [
				"That's moving the dice from your left to your right hand and vice versa. If you want to switch hands, you need to put the dice down on the table and then pick them up with the other hand. This includes cupping the dice with both hands—this rule is meant to prevent you from cheating; by switching the dice with a different pair.",
				"Make sure you keep the dice over the felt. Over the cheques in the rail has some leeway but past that, you're getting yelled at. The leading factors to getting yelled at here are pulling your arm back to shoot or trying to get one of your friends to blow on the dice. Don't take the dice while getting your drink from the server, either.",
				"Talk about a rule that needs to be followed that no one ever follows. Do you HAVE TO hit the back wall? You have to try at least, and the dealers know if you're trying. Some people can't aim. Some people need to hit cheques, so the dice don't even make it there. Some people think they can beat the game by not hitting the wall. It may take a few tries to get it right but everyone can hit the back wall.",
				"Few people will break this rule because it requires you to throw the dice obnoxiously high. The stickperson needs to see the table while you're throwing the dice across it. They can't scan the table if they're looking in the sky at your dice. Even if the stickperson is short, you don't need to go that high.",
				"Many players pick up the dice and realize they want to make a bet, so they grab some cheques from the rail with the same hand. Please don't do that. We don't know what kind of trickery is going on in the palm of your hand."
			]
		}
	];
	let blogSections3 = [
		{
			id: 'questionableTosses',
			title: 'Tosses The Dealers Could Only Put Up With for So Long',
			para: "It will not take much of these tosses before the dealers say something. While you can argue you're trying or it's how you throw, we'll need you to make some adjustments.",
			subTitles: [
				'Do not throw the dice in the boxes:',
				'Throw to the wall, not through the wall:'
			],
			subParas: [
				"These are the boxes where the Point is marked and where the Place bets go. Suppose you mix up a bunch of bets because you smashed the cheques with the dice; the game has to stop. It's very frustrating to the dealer.",
				"Please don't throw the dice so hard that they bounce off the wall at 90 mph. The dice can take an eye out. I've bled from being hit by the dice, and it hurts!"
			]
		}
	];
	let blogSections4 = [
		{
			id: 'notReallyRules',
			title: 'Not Really Rules We Would Like You To Follow',
			para: 'Do you have to follow these rules? Yes and no. They are more or less courtesies to the rest of the table and are greatly appreciated.',
			subTitles: [
				"Don't rush the Stickperson:",
				"Don't take an obnoxious amount of time to throw the dice:",
				'Have patience:'
			],
			subParas: [
				"The stickperson knows you want the dice but is responsible for watching the whole table. They have to make sure everything is kosher before giving you the dice. If they aren't paying attention, then maybe mention it to the base dealer or the box. They should be able to get the game moving.",
				"We know you want to set up your dice. Turn em' three times. Roll each of em' over four times. Stack em' up, shake em' up, toss em' against the wall, take a quick breather and step back, wipe the condensation off your fingers, carefully line them up, pick them up, swing your arms a few times, check the breeze, see your spot at the end of the table, eye it up, breathe, focus, breath, focus, eye up, focus, breathe, eye up, eye up, put the dice down, take a step back, pick them up, eye up, focus, breathe, toss em against the wall again, line em' up, roll em' over, twist them twice, stack em' up, pick em' up, then toss the dice. Yea, this shit happens.",
				"Craps can be complicated for many players; sometimes, the game can come to a slow crawl. Don't let it discourage you. Let them finish, then do your thing. You can still keep a flow going if you patiently wait for the dice to be sent to you. Don't try and force the flow of the game. Let it happen."
			]
		}
	];
	let blogSections5 = [
		{
			id: 'knowYourRights',
			title: 'Know Your Rights as a Shooter',
			para: 'You can ask for some things that the dealers will quickly appease. Try to avoid taking advantage by using them excessively.',
			subTitles: [
				'You can ask for new dice:',
				'You can ask to dump the bowl:',
				'You can ask for the same dice:',
				'You can practice rolling backward:',
				'You can pass the dice in the middle of your roll:',
				'Two people can shoot off one bankroll:',
				"If you made a bet, you're allowed to shoot:"
			],
			subParas: [
				"If you're not feeling the roll or not rolling anything you need, ask the stickperson if you can have two new dice. They'll take your two back and offer you the other three.",
				'The stickperson will take your dice back and dump the bowl to mix all five. You can now choose another two from the pile of five.',
				'You can ask for the same die if the dice bounce off the table. Make sure you ask immediately after the dice go off the table because the stickperson will dump the bowl as soon as he brings the other one back to the middle.',
				"You can roll the dice in the opposite direction of the wall you're aiming at. You can roll off the wall closest to you but not off the mirror. If you practice rolling forward, it's a slight chance, but it can be called a roll.",
				"While it doesn't happen often, people pass the dice when they don't like what they are rolling. Most of those people pass the dice before even starting the roll, but sometimes they try and then lose faith.",
				'Once your roll is over, if you want to sponsor your friend to shoot, you are allowed to. Place a bet on the Pass Line and let the stickperson know you would like to have your friend shoot.',
				"There is a thing such as cutting in line at the Craps table. If you place yourself to the left of the shooter thinking “When he seven outs, I'll place my Pass Line bet and shoot.”, you are wrong. You must have a vested interest in the game in order to shoot. If you didn't make a bet when the current shooter seven outs, the dice will pass you and be offered to the next person in line as long as they had previous action. If you make a bet prior to the shooter's seven out, you're entitled to shoot."
			]
		}
	];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			"name": "{{{Page Title}}}",
			"description": "{{{Page Description}}}",
			"url": "http://parlaynation.com/{{{url}}}",
			"numberOfItems": 5,
			"itemListElement": [
				{
					"@type": "ItemList",
					"name": "The Rules That Can't Be Broken",
					"numberOfItems": 2,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "You need to make a bet",
							"description": "You must bet either the Pass Line or the Don't Pass to throw the dice. This is non-negotiable."
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Pick two dice",
							"description": "You get five dice to choose from and Craps is only played with two."
						}
					]
				},
				{
					"@type": "ItemList",
					"name": "The Rules That Need to Be Followed",
					"numberOfItems": 6,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Don't go hand-to-hand with the dice",
							"description": "That's moving the dice from your left to your right hand and vice versa. If you want to switch hands, you need to put the dice down on the table and then pick them up with the other hand."
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Keep the dice over the table",
							"description": "Make sure you keep the dice over the felt. Over the cheques in the rail has some leeway but past that, you're getting yelled at."
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": "Hit the back wall with both dice",
							"description": "You have to try at least, and the dealers know if you're trying."
						},
						{
							"@type": "ListItem",
							"position": 4,
							"name": "Keep the dice eye level with the stickperson",
							"description": "The stickperson needs to see the table while you're throwing the dice across it."
						},
						{
							"@type": "ListItem",
							"position": 5,
							"name": "Don't pick up anything with the hand you have the dice in",
							"description": "Many players pick up the dice and realize they want to make a bet, so they grab some cheques from the rail with the same hand. Please don't do that."
						}
					]
				},
				{
					"@type": "ItemList",
					"name": "Tosses We Could Only Put Up With for So Long",
					"numberOfItems": 2,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Do not throw the dice in the boxes",
							"description": "These are the boxes where the Point is marked and where the Place bets go. Suppose you mix up a bunch of bets because you smashed the cheques with the dice; the game has to stop."
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Throw to the wall, not through the wall",
							"description": "Please don't throw the dice so hard that they bounce off the wall at 90 mph."
						}
					]
				},
				{
					"@type": "ItemList",
					"name": "Not Really Rules We Would Like You To Follow",
					"numberOfItems": 3,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Don't rush the Stickperson",
							"description": "The stickperson knows you want the dice but is responsible for watching the whole table."
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Don't take an obnoxious amount of time to throw the dice",
							"description": "Be mindful of the time you take to set up and throw the dice."
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": "Have patience",
							"description": "Craps can be complicated for many players; sometimes, the game can come to a slow crawl."
						}
					]
				},
				{
					"@type": "ItemList",
					"name": "Know Your Rights as a Shooter",
					"numberOfItems": 7,
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "You can ask for new dice",
							"description": "If you're not feeling the roll or not rolling anything you need, ask the stickperson if you can have two new dice."
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "You can ask to dump the bowl",
							"description": "The stickperson will take your dice back and dump the bowl to mix all five."
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": "You can ask for the same dice",
							"description": "You can ask for the same die if the dice bounce off the table."
						},
						{
							"@type": "ListItem",
							"position": 4,
							"name": "You can practice rolling backward",
							"description": "You can roll the dice in the opposite direction of the wall you're aiming at."
						},
						{
							"@type": "ListItem",
							"position": 5,
							"name": "You can pass the dice in the middle of your roll",
							"description": "While it doesn't happen often, people pass the dice when they don't like what they are rolling."
						},
						{
							"@type": "ListItem",
							"position": 6,
							"name": "Two people can shoot off one bankroll",
							"description": "Once your roll is over, if you want to sponsor your friend to shoot, you are allowed to."
						},
						{
							"@type": "ListItem",
							"position": 7,
							"name": "If you made a bet, you're allowed to shoot",
							"description": "As long as you have placed a bet, you are allowed to be the shooter."
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
			sectionTitle="Being a Better Player"
			title="How To Be a Better Craps Shooter, a Comprehensive Guide"
			{pageData}
			{paras}
		/>
		<BlogImg
			caption=""
			{url}
			img="dice-purple-five"
			title="Five Purple Craps Dice"
			alt="Five purple dice sitting on the craps table felt."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogHeaderTwo {blogSections} />
		<Divider />
		<BlogHeaderTwo blogSections={blogSections2} />
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="pass-line-overhead"
			title="Overhead View of Pass Line with Odds"
			alt="A close-up overhead view of $5 on the Pass Line with $5 behind the bet used as Odds."
		/>
		<Divider />
		<BlogHeaderTwo blogSections={blogSections3} />
		<Divider />
		<BlogHeaderTwo blogSections={blogSections4} />
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="come-bet-2"
			title="Come Bets Sitting in the Come"
			alt="A view the third base hook looking at several Come Bets sitting in the COME area of the Craps Table."
		/>
		<Divider />
		<BlogHeaderTwo blogSections={blogSections5} />
		<Divider />
		<BlogClosingPara
			para="Shooting is an art form. It may take some time to find your throw and rhythm. Follow the rules to stay in your flow, and don't be afraid of losing. Everyone will eventually seven out. Don't be sorry when it happens to you. Put down another Pass Line bet and let's keep going."
		/>
	</main></BlogLayout
>
