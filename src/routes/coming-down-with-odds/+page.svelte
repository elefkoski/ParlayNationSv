<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Coming Down w/Odds in Craps';
	let description: string =
		"When you are playing Place bets and Come bets at the same time you don't need both on a Point. Coming Down w/Odds uses the Place bet for Odds on the Come bet.";
	let url: string = 'coming-down-with-odds';

	let phref: string = 'come-bet-odds';
	let prev: string = 'Come Bet Odds';
	let nhref: string = 'the-donts';
	let next: string = "The Don'ts";
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn to Come Down w/Odds",
		  "description": "When you are playing Place bets and Come bets at the same time you don’t need both on a Point. Coming Down w/Odds uses the Place bet for Odds on the Come bet.",
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
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Come Bets" title="Coming Down w/Odds In Craps" />
		<p class="pb-4">
			If you're playing both Come bets and Place bets, you will have times when the Come bet will
			move into the number that your Place bet is on. Since betting both would be redundant and Odds
			pay better than Place bets, you're going to want to take down the Place bet and use it as Odds
			for the Come bet. The act of using your Place bet and/or its' payment as Odds is called
			'Coming Down with Odds'.
		</p>
		<Divider />
		<ContentHeaderTwo title="Part 1: The Setup" />
		<p class="pb-4">
			It takes both a <Link text="Place Bet" href="place-bet-basics" /> and a <Link
				text="Come Bet"
				href="come-bet-basics"
			/> in order to Come Down w/Odds. If you're playing both Come bets and Place bets then you should
			expect to be Coming Down w/Odds and you should be thinking about how many Odds you'll be coming
			down with.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/the-setup_640x360.webp"
			mdImg="src/images/{url}/the-setup_960x540.webp"
			lgImg="src/images/{url}/the-setup_1280x720.webp"
			title="Coming Down w/Odds - The Setup"
			alt="$10 in the come and a $12 place bet on the point eight."
		/>
		<Divider />
		<ContentHeaderTwo title="Part 2: Come Bet Moves and Place Bet Paid" />
		<p class="pb-4">
			If a Point rolls that doesn't have a Place bet on it then nothing matters. The process starts
			when the Point that the Place bet is on rolls. The Come bet moves behind the Place bet then
			the dealer pays the Place bet.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/point-rolled-place-paid_640x360.webp"
			mdImg="src/images/{url}/point-rolled-place-paid_960x540.webp"
			lgImg="src/images/{url}/point-rolled-place-paid_1280x720.webp"
			title="Coming Down w/Odds - Point Rolled and Place Paid"
			alt="$14 cut out in come. $10 moved behind the $12 place bet. Two orange dice show 5-3."
		/>
		<Divider />
		<ContentHeaderTwo title="Part 3: Odds Are Added to the Come Bet and the Rest Is Handed Off" />
		<p class="pb-4">
			The dealer keeps as much money as they need for Odds and hands off the remainder. Tell the
			dealer how many Odds you would like. If you don't tell the dealer anything they might give you
			a Come bet with no Odds and leave your Place bet where it is when you should of taken you're
			Place bet down and added Odds because they have no house advantage.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/odds-added-rest-handed-off_640x360.webp"
			mdImg="src/images/{url}/odds-added-rest-handed-off_960x540.webp"
			lgImg="src/images/{url}/odds-added-rest-handed-off_1280x720.webp"
			title="Coming Down w/Odds - Odds Added and Rest Handed Off"
			alt="Three way split image. Left shows $12 place bet and $14 payment. Top shows $10 come bet with $20 odds. Bottom shows $6 handed off to player."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
