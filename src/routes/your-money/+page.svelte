<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/Content-h2.svelte';
	import ContentImg from '$lib/clients/components/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Using Presses at the Craps Table';
	let description: string =
		'You must pay attention to your money at the Craps Table. Know how much your bets cost, placement of those bets, your presses, and your payments.';
	let url: string = 'your-money';

	let phref: string = 'buying-place-bets';
	let prev: string = 'Buying Place Bets';
	let nhref: string = 'presses';
	let next: string = 'Presses';
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
		  "name": "Watching Your Money",
		  "description": "You must pay attention to your money at the Craps Table. Know how much your bets cost, placement of those bets, your presses, and your payments.",
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
		<ContentHeaderOne sectionTitle="Place Bets" title="Watching Your Money at the Craps Table" />
		<p class="pb-4">
			Pay attention to your money! Craps seems to be the only game where even seasoned players don't
			know where their money is. When a craps game is blowing up, it's moving fast, and many players
			are making multiple bets, it's easy to understand that a dealer might make a mistake. At the
			same time, when a table only has two or three players on it, some dealers will become so
			nonchalant about it that they don't pay attention at all. Learn what to watch for as the game
			moves along.
		</p>
		<Divider />
		<ContentHeaderTwo title="Are You Getting the Right Change for Your Craps Bets?" />
		<p class="pb-4">
			To begin with, know how much your bets cost. If you don't know how much your bets cost, you
			can never know how much change you're supposed to receive. Dealers will make mistakes, and if
			you're not paying attention, you may get back the wrong amount of money. It could be too much…
			it could be not enough… You should give back money if you know they gave you extra. It's
			technically stealing. If they didn't give you enough back, then you're being robbed. The best
			way to win an argument with a dealer and/or
			<Link text="boxperson" href="the-crew" /> is to know how much the bet cost, how much money you
			gave the dealer, and how much change you received.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/bet-cost-and-change_640x360.webp"
			mdImg="src/images/{url}/bet-cost-and-change_960x540.webp"
			lgImg="src/images/{url}/bet-cost-and-change_1280x720.webp"
			title="Bet Cost and Change"
			alt="$52 across with $55 dollars in the COME and $3 change near the apron."
		/>
		<Divider />
		<ContentHeaderTwo title="Are Your Craps Bets in the Correct Spot?" />
		<p class="pb-4">
			Make sure your bets are being put in the correct spot on the layout. If the dealer puts your
			bet in someone else's spot when it's time to get paid, they'll pay the wrong person. You will
			even have players try to take advantage of these mistakes by claiming those bets belonged to
			them and then shrug while saying, <Quote
				text="That's my $15 ten. I don't know what happened to yours..."
			/>
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/correct-spot_640x360.webp"
			mdImg="src/images/{url}/correct-spot_960x540.webp"
			lgImg="src/images/{url}/correct-spot_1280x720.webp"
			title="Are Your Bets in the Right Spot"
			alt="A $15 place bet with a transparent $15 place bet next to it signifying the wrong spot."
		/>
		<Divider />
		<ContentHeaderTwo title="Are Your Craps Bets on the Right Number?" />
		<p class="pb-4">
			You should make sure the dealer is putting your bets on the correct number. Even if the dealer
			heard what your bet was and repeated it back to you, they could very easily put that bet on a
			wrong Place bet number. Watch the dealer as they set up your bets to ensure there aren’t
			problems in the future.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/correct-number_640x360.webp"
			mdImg="src/images/{url}/correct-number_960x540.webp"
			lgImg="src/images/{url}/correct-number_1280x720.webp"
			title="Are Your Bets on the Right Number"
			alt="$12 place bet on the eight with a transparent $12 place bet on the six signifying the wrong number."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
