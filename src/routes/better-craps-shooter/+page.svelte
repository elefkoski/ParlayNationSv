<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/components/blog/BlogH2.svelte';
	import BlogImg from '$lib/components/blog/Blog-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Be a Better Craps Shooter';
	let description: string =
		'Step up your Craps game with our detailed guide. Learn how to be a better shooter and keep the table on your side.';
	let url: string = 'better-craps-shooter';

	let pageLinks: PageMenu[] = [
		{
			title: 'Suggestions to Improve Your Skills',
			href: '#suggestionsForSkill',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "Can't Be Broken",
			href: '#cantBeBroken',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Need to be Followed',
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
			title: 'Recommended Courtesies',
			href: '#recommendedCourtesies',
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
  "headline": "Tips for Becoming a Better Craps Shooter",
  "description": "A detailed guide on improving your skills as a Craps shooter, including focusing, understanding rules, knowing your rights, and adhering to certain etiquettes.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-05",
  "url": "http://parlaynation.com/better-craps-shooter",
  "image": "http://parlaynation.com/images/better-craps-shooter/better-craps-shooter-header.webp",
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
    "@id": "http://parlaynation.com/better-craps-shooter"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Guidelines for Craps Shooters",
      "description": "Suggestions to improve shooting skills at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Stay focused and attentive",
          "description": "Pay attention to the game and be ready to roll."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Understand the shooting rules",
          "description": "Know the specific rules for shooting to maintain game flow."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Know your rights and requests",
          "description": "Learn about your rights as the shooter and how to make requests within the rules."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Non-negotiable Rules for Shooting the Dice",
      "description": "Essential requirements for shooting the dice in Craps.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Place a bet",
          "description": "You must place a bet on either the Pass Line or the Don't Pass Line to shoot."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pick two dice",
          "description": "Select two dice from the available five to play."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Rules that Must be Followed",
      "description": "Key rules for maintaining integrity and flow of the game.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Avoid hand-to-hand dice transfer",
          "description": "Switching the dice directly between hands is prohibited."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Keep the dice over the table",
          "description": "Ensure dice are rolled over the felt to prevent foul play."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hit the back wall with both dice",
          "description": "Make a genuine attempt to hit the back wall with both dice."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Keep the dice at eye level with the stickperson",
          "description": "Maintain dice visibility for the stickperson during throws."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Don't use the hand with the dice for other tasks",
          "description": "Avoid using the dice hand to pick up other items."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Tosses that Dealers Won't Tolerate for Long",
      "description": "Tossing techniques that may draw attention for correction.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Avoid throwing the dice into the boxes",
          "description": "Dice should not be thrown into the betting boxes to avoid confusion."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Throw to the wall, not through it",
          "description": "Control your throws to prevent dice from bouncing off the back wall dangerously."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Recommended Courtesies",
      "description": "Etiquette for a smoother and more enjoyable game.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Don't rush the dealer",
          "description": "Respect the stickperson's pacing and responsibilities."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Avoid excessive time-consuming rituals",
          "description": "Balance personal routines with the game's flow."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Practice patience",
          "description": "Allow the game to unfold naturally without rushing."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Know Your Shooter Rights",
      "description": "Rights that can be exercised by shooters within reason.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Request new dice",
          "description": "Ask for new dice if unsatisfied with the current roll."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ask to dump the bowl",
          "description": "Request to mix up the dice for a fresh selection."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Request the same dice",
          "description": "Ask for the same die back if it bounces off the table."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Practice rolling backward",
          "description": "You may practice rolling the dice in the opposite direction."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Two-person shooting",
          "description": "Sponsor a friend to shoot after your turn is over."
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
			title="Tips for Becoming a Better Shooter at the Craps Table"
			{pageData}
		/>
		<section aria-label="Opening paragraphs">
			<p class="pb-4">
				At the Craps table, the shooter holds a crucial role, as the fate of the game rests in their
				hands. Whether they become the hero or the villain, their roll determines the outcome for
				everyone. To be a successful shooter, you must take responsibility for the table and follow
				certain guidelines.
			</p>
		</section>
		<BlogImg
			caption=""
			{url}
			img="five-purple-dice"
			title="Up Close View of Five Purple Dice on a Craps Layout"
			alt="Up close view of five purple dice on a craps layout"
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2
			id="suggestionsForSkill"
			title="Suggestions to Improve Your Skills and Avoid Common Mistakes"
		>
			<p class="pb-4">
				Here are some suggestions to improve your skills and avoid common mistakes:
			</p>
			<ol>
				<li>
					<span>Stay focused and attentive - </span>As the shooter, it's essential to pay attention
					to the game and be aware of what's happening. Keep an <Link
						text="eye on the dice"
						href="the-dice#beingHit"
					/> in the middle, and be ready when it's your turn to roll. Avoid getting distracted by conversations
					with friends and don't wait until you have the dice in hand to think about your betting strategy.
				</li>
				<li>
					<span>Understand the shooting rules - </span>Craps has specific rules for shooting, and
					knowing them will help you maintain the game's flow and prevent mistakes. Novice errors
					while shooting can disrupt the game and make you the target of blame. Familiarize yourself
					with the shooting rules to avoid unnecessary complications.
				</li>
				<li>
					<span>Know your rights and requests - </span>As the shooter, you have certain rights and
					can make requests within the rules. Understanding these rights will give you confidence
					and control over the game. Focus on learning the rules and your privileges, which will
					enable you to concentrate on beating the game.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="cantBeBroken" title="Non-negotiable Rules for Shooting the Dice">
			<p class="pb-4">These are the only prerequisites for shooting the dice.</p>
			<ol>
				<li>
					<span>Place a bet - </span>To become the shooter, you must place a bet on either <Link
						text="the Pass
					Line"
						href="pass-line-basics"
					/> or <Link text="the Don't Pass" href="dont-pass" />. This requirement is mandatory. It's
					recommended to start with the table minimum on the Pass Line and consider adding Odds once
					a Point is established.
				</li>
				<li>
					<span>Pick two dice - </span>While you have five dice to choose from, remember that Craps
					is played with only two dice. Although it may seem obvious, some players ask about the
					<Link text="number of dice" href="the-dice" /> needed. Avoid throwing more than two dice, as
					it disrupts the game.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="come-bet-in-the-come"
			title="Third Base Viewing the Craps Layout"
			alt="Third base viewing the craps layout"
		/>
		<Divider />
		<BlogH2 id="needToFollow" title="Rules That Must Be Followed">
			<p class="pb-4">
				You’ll be warned a few times, sometimes less, by the dealer or box when you break these
				rules, then they may pass the dice on you.
			</p>
			<ol>
				<li>
					<span>Avoid hand-to-hand dice transfer - </span>Switching the dice from your left to right
					hand or vice versa directly is prohibited. If you want to switch hands, you must first
					place the dice on the table and then pick them up with the other hand. This rule prevents
					cheating by substituting the dice with a different pair.
				</li>
				<li>
					<span>Keep the dice over the table - </span>Ensure that you keep the dice over the felt
					during your roll. While there is some leeway to have them over the cheques in the rail,
					going beyond that will result in reprimands. Pulling your arm back or attempting to get
					someone to blow on the dice is not allowed. Also, avoid picking up the dice while getting
					a drink from the server.
				</li>
				<li>
					<span>Hit the back wall with both dice - </span>This is a rule that often goes ignored,
					but it's crucial to follow it. While some players struggle with aim and hitting the back
					wall, it's important to make a genuine attempt. Dealers can tell if you're trying, and
					hitting the wall helps maintain fairness. Practice until you can consistently hit the back
					wall.
				</li>
				<li>
					<span>Keep the dice at eye level with the stickperson - </span>Maintain the dice at an
					appropriate height during your throw to ensure visibility for <Link
						text="the stickperson"
						href="the-crew"
					/>. They need to see the table while you throw the dice across it. Avoid throwing the dice
					too high, but make sure they are visible to the stickperson.
				</li>
				<li>
					<span>Don't use the hand with the dice for other tasks - </span>Once you have the dice in
					hand, refrain from using that hand to pick up anything else, such as cheques from the
					rail. This rule prevents any potential trickery or manipulation during the game.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="questionableTosses" title="Tosses that Dealers Won't Tolerate for Long">
			<p class="pb-4">
				Certain tossing techniques may draw attention from the dealers due to their undesirable
				outcomes. While you may argue that you're trying your best or it's your preferred style,
				it's important to make adjustments to these tosses.
			</p>
			<ol>
				<li>
					<span>Avoid throwing the dice into the boxes - </span>The boxes on the table where the
					Point is marked and where Place bets are placed should not be the target for your dice.
					Throwing the dice into these boxes can lead to confusion and disrupt the flow of the game,
					frustrating the dealer.
				</li>
				<li>
					<span>Throw to the wall, not through it - </span>When throwing the dice, avoid using
					excessive force that causes them to bounce off the back wall at a high speed. This can be
					dangerous and potentially injure others. Keep your throws controlled and within a
					reasonable range.
				</li>
				<li>
					<span>Do not throw the dice off the mirror - </span>I have yet to see a mirror crack, but
					I’ve seen a fair share of beat up dice. When the dice strike the mirror with such force,
					it can chip away, or flatten the corners and edges. Please do not throw the dice against
					the mirror.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="recommendedCourtesies" title="Recommended Courtesies">
			<p class="pb-4">
				While not strict rules, these courtesies contribute to a smoother game and are appreciated
				by fellow players.
			</p>
			<ol>
				<li>
					<span>Don't rush the dealer - </span>The stickperson, who handles the dice, has multiple
					responsibilities and needs to oversee the entire table. Avoid pressuring them to hand you
					the dice immediately. If you notice a delay, politely inform the base dealer or the box
					for assistance. Maintain patience to ensure a fair and organized game.
				</li>
				<li>
					<span>Avoid excessive time-consuming rituals - </span>While it's understandable that you
					may have your own routine before throwing the dice, try not to prolong the process
					excessively. Taking an excessive amount of time can slow down the game and <Link
						text="irritate other
					players"
						href="not-to-do-at-craps-table"
					/>. Find a balance between your preferred setup and maintaining a steady flow.
				</li>
				<li>
					<span>Practice patience - </span>Craps can be complex for some players, leading to slower
					gameplay. Don't let this discourage you. Wait for the dice to be passed to you before
					starting your roll, and don't rush the game. Allow it to unfold naturally and focus on
					maintaining a steady pace.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogImg
			caption=""
			{url}
			img="pass-line-overhead"
			title="Pass Line with Odds"
			alt="Up close overhead view of the pass line with odds"
		/>
		<Divider />
		<BlogH2 id="knowYourRights" title="Know Your Shooter Rights">
			<p class="pb-4">
				As the shooter, you have certain rights that can be exercised within reason. Use these
				privileges wisely and avoid exploiting them excessively:
			</p>
			<ol>
				<li>
					<span>Request new dice - </span>If you feel unsatisfied with your roll or find it
					difficult to achieve desired results, you can ask the stickperson for two new dice. They
					will exchange your current dice for three different ones, giving you another chance to
					improve your roll.
				</li>
				<li>
					<span>Ask to dump the bowl - </span>If you wish to mix up the dice, you can request the
					stickperson to dump the bowl. They will take your current dice and mix them with the
					remaining ones. You can then select two new dice from the mixed pile.
				</li>
				<li>
					<span>Request the same dice - </span>In case the dice bounce off the table, you can ask
					for the same die you were using. Ensure you make this request immediately after the dice
					leave the table, as the stickperson will dump the bowl once they bring back the
					replacement die.
				</li>
				<li>
					<span>Practice rolling backward - </span>You can practice rolling the dice in the opposite
					direction of the wall you're aiming for. You can roll off the wall closest to you but not
					off the mirror. It's a technique that some shooters find effective, but it's important to
					note that it's only a slight chance of altering the outcome.
				</li>
				<li>
					<span>Two-person shooting - </span>Once your turn as a shooter is over, you can sponsor a
					friend to shoot after you. To do this, place a bet on the Pass Line and inform the
					stickperson that you would like your friend to throw the dice as well.
				</li>
			</ol>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p>
				Remember, shooting in Craps is an art form that requires practice and finding your own
				rhythm. By following the rules, maintaining focus, and <Link
					text="understanding the game"
					href="art-of-verbal-betting"
				/>, you can improve your skills as a shooter. Don't be discouraged by occasional losses, as
				everyone eventually sevens out. Place another Pass Line bet and continue enjoying the game.
			</p>
		</section>
	</main>
</BlogLayout>
