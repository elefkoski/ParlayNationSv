<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/components/contentPages/Content-h3.svelte';
	import ContentUl2 from '../../lib/components/contentPages/Content-ul-b.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';

	let title: string = 'Bridging Lay Odds';
	let description: string =
		"Learn how to properly bridge bets on the Don't Pass and what not to do while creating a bridge.";
	let url: string = 'bridging-lay-odds';

	let phref: string = 'overlays';
	let prev: string = 'Overlays';
	let nhref: string = 'practice-craps';
	let next: string = 'Practice Craps';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: 'Rules to Bridging Lay Odds',
			href: '#layRules',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'Incorrectly Bridged Lay Odds',
			href: '#badBridges',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let liBs = [
		{
			subTitle: ['The Amount - ', 'The Types of Chips'],
			items: [
				'The amount the Lay Odds win must be the same amount as the Don’t Pass or Don’t Come. Given the Point is 6 or 8: You make a Don’t Pass bet of $10 and Lay $12 Odds that win $10. You’re halfway to being able to bridge a bet.',
				'The types of chips you are using as Lay Odds must be the same as the Don’t Pass or Don’t Come bet. If that same $10 Don’t Pass Bet is made with two nickels and you’re $12 Lay Odds are made with two dollars and two nickels then you have completed the 2nd half of being able to properly bridge a bet.'
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
  "@context": "http://schema.org",
  "@type": "Article",
  "headline": "Bridging Lay Odds",
  "description": "Explore how Lay Odds work for the Don't Come and Don't Pass bets in craps, including strategies for bridging lay odds across different points.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/bridging-lay-odds",
  "image": "http://parlaynation.com/images/bridging-lay-odds/bridging-lay-odds-header.webp",
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
    "@id": "https://www.parlaynation.com/bridging-lay-odds"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Rules to Bridging Lay Odds",
        "description": "Understand the essential rules for effectively bridging lay odds on the Don't Pass or Don't Come bets."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bridging the 6 & 8",
        "description": "Learn the correct method to bridge lay odds when the point is 6 or 8."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bridging the 5 & 9",
        "description": "Discover the right way to bridge lay odds for points 5 and 9."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Bridging the 4 & 10",
        "description": "Find out how to correctly bridge lay odds on the 4 and 10 points."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Incorrectly Bridged Bets",
        "description": "Learn about common mistakes in bridging lay odds and how to avoid them."
      }
    ]
  }
}

	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="The Don't Side" title="Bridging Lay Odds" {pageData}>
			<p class="pb-4">
				Lay Odds for the Don’t Come work the same way as Lay Odds on the Don’t Pass. You add them to
				your Don’t Come and just like the Don’t Come, the Lay Odds are betting that a 7 will be
				rolled before the Point. If the 7 rolls your Don’t Come bet and its Lay Odds will win. If
				the Point is rolled the Don’t Come bet and its <Link
					text="Lay Odds"
					href="dont-come-lay-odds"
				/> lose. You can add Lay Odds at any time a Don’t Come bet as long as it is behind a Point and
				they are not Contract bets so you can take them back at any time. Lay Odds are always working
				and you cannot turn them “Off”. They must be returned to you.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/bridging-lay-odds_640x360.webp"
				mdImg="src/images/{url}/bridging-lay-odds_960x540.webp"
				lgImg="src/images/{url}/bridging-lay-odds_1280x720.webp"
				title="Bridging Lay Odds on the Don'ts"
				alt="Bridging lay odds."
			/>
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="layRules" title="Rules to Bridging Lay Odds">
			<p class="pb-4">
				There are two rules you must follow in order to be able to Bridge the <Link
					text="Don’t Pass"
					href="dont-pass"
				/> or <Link text="Don’t Come" href="dont-come" /> and its Lay Odds.
			</p>
			<ContentUl2 {liBs} />
			<p class="pb-4" />
			<ContentHeaderThree title="Bridging the 6 & 8">
				<p class="pb-4">
					These examples are the correct way to Bridge Lay Odds when the Point is 6 & 8. Lay Odds
					must be made in multiples of $6.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/50-w-60-bridge-6-and-8_640x360.webp"
					mdImg="src/images/{url}/50-w-60-bridge-6-and-8_960x540.webp"
					lgImg="src/images/{url}/50-w-60-bridge-6-and-8_1280x720.webp"
					title="Bridged Lay Odds 6 & 8"
					alt="Bridged lay odds on the don't pass on the 6 & 8"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/50-w-60-bridge-6-and-8-paid_640x360.webp"
					mdImg="src/images/{url}/50-w-60-bridge-6-and-8-paid_960x540.webp"
					lgImg="src/images/{url}/50-w-60-bridge-6-and-8-paid_1280x720.webp"
					title="Bridged Lay Odds 6 & 8 Paid"
					alt="Bridged lay odds on the don't pass for the 6 & 8 paid."
				/>
			</ContentHeaderThree>
			<p class="pb-4" />
			<ContentHeaderThree title="Bridging the 5 & 9">
				<p class="pb-4">
					These examples are the correct way to Bridge Lay Odds when the Point is 5 & 9. Lay Odds
					must be made in multiples of $3.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/20-w-30-bridge-5-and-9_640x360.webp"
					mdImg="src/images/{url}/20-w-30-bridge-5-and-9_960x540.webp"
					lgImg="src/images/{url}/20-w-30-bridge-5-and-9_1280x720.webp"
					title="Bridged Lay Odds 5 & 9"
					alt="Bridged lay odds on the don't pass on the 5 & 9"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/20-w-30-bridge-5-and-9-paid_640x360.webp"
					mdImg="src/images/{url}/20-w-30-bridge-5-and-9-paid_960x540.webp"
					lgImg="src/images/{url}/20-w-30-bridge-5-and-9-paid_1280x720.webp"
					title="Bridged Lay Odds 5 & 9 Paid"
					alt="Bridged lay odds on the don't pass for the 5 & 9 paid."
				/>
			</ContentHeaderThree>
			<p class="pb-4" />
			<ContentHeaderThree title="Bridging the 4 & 10">
				<p class="pb-4">
					These examples are the correct way to Bridge Lay Odds when the Point is 4 & 10. Lay Odds
					can be any even number.
				</p>
				<ContentImg
					caption=""
					smImg="src/images/{url}/10-w-20-bridge-4-and-10_640x360.webp"
					mdImg="src/images/{url}/10-w-20-bridge-4-and-10_960x540.webp"
					lgImg="src/images/{url}/10-w-20-bridge-4-and-10_1280x720.webp"
					title="Bridged Lay Odds 4 & 10"
					alt="Bridged lay odds on the don't pass on the 4 & 10"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/10-w-20-bridge-4-and-10-paid_640x360.webp"
					mdImg="src/images/{url}/10-w-20-bridge-4-and-10-paid_960x540.webp"
					lgImg="src/images/{url}/10-w-20-bridge-4-and-10-paid_1280x720.webp"
					title="Bridged Lay Odds 4 & 10 Paid"
					alt="Bridged lay odds on the don't pass for the 4 & 10 paid."
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
		<Divider />
		<ContentHeaderTwo id="badBridges" title="Incorrectly Bridged Bets">
			<p class="pb-4">
				There will be times when the amount of Lay Odds you add win the same amount as the Don’t
				Pass or Don’t Come bet but you will not be able to Bridge the bet. You will have this when
				the chips used as Lay Odds are not the same type as the Don’t Pass or Don’t Come bet.
			</p>
			<ContentHeaderThree title="Incorrectly Bridged Odds on the 6 & 8">
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-10-w-60-6-and-8_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-10-w-60-6-and-8_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-10-w-60-6-and-8_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 6 & 8 a"
					alt="Incorrectly bridged lay odds on the 6 & 8 a"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-15-w-90-6-and-8_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-15-w-90-6-and-8_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-15-w-90-6-and-8_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 6 & 8 b"
					alt="Incorrectly bridged lay odds on the 6 & 8 b"
				/>
			</ContentHeaderThree>
			<p class="pb-4" />
			<ContentHeaderThree title="Incorrectly Bridged Odds on the 5 & 9">
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-5-w-30-5-and-9_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-5-w-30-5-and-9_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-5-w-30-5-and-9_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 5 & 9 a"
					alt="Incorrectly bridged lay odds on the 5 & 9 a"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-15-w-18-5-and-9_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-15-w-18-5-and-9_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-15-w-18-5-and-9_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 5 & 9 b"
					alt="Incorrectly bridged lay odds on the 5 & 9 b"
				/>
			</ContentHeaderThree>
			<p class="pb-4" />
			<ContentHeaderThree title="Incorrectly Bridged Odds on the 4 & 10">
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-10-w-12-4-and-10_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-10-w-12-4-and-10_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-10-w-12-4-and-10_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 4 & 10 a"
					alt="Incorrectly bridged lay odds on the 4 & 10 a"
				/>
				<p class="pb-4" />
				<ContentImg
					caption=""
					smImg="src/images/{url}/improper-bridge-10-w-60-4-and-10_640x360.webp"
					mdImg="src/images/{url}/improper-bridge-10-w-60-4-and-10_960x540.webp"
					lgImg="src/images/{url}/improper-bridge-10-w-60-4-and-10_1280x720.webp"
					title="Incorrectly Bridged Lay Odds on the 4 & 10 b"
					alt="Incorrectly bridged lay odds on the 4 & 10 b"
				/>
			</ContentHeaderThree>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
