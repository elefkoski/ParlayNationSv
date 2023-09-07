<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';
	import Quote from '$lib/clients/components/Quote.svelte';

	let title: string = 'Betting Across at the Craps Table';
	let description: string =
		'Betting Across is a Spread Bet where you are betting all the Place Bets, not including the Point in the same unit amount. At high enough units you will have to include the cost of commission.';
	let url: string = 'across';

	let phref: string = 'spread-bets';
	let prev: string = 'Spread Bets';
	let nhref: string = 'inside';
	let next: string = 'Inside';

	let tblAria: string = 'Across betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$26/27 Across'],
		['Two Units: $10/number', '$52/54 Across'],
		['Three Units: $15/number', '$78/81 Across'],
		['*One Unit: $25/number', '$132/136/137 Across'],
		['Two Units: $50/number', '$265/272/275 Across']
	];
	let tblPnts: string[] = [
		'One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8.'
	];
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
		  "name": "Spread Bets - Betting Across",
		  "description": "Betting Across is a Spread Bet where you are betting all the Place Bets, not including the Point in the same unit amount. At high enough units you will have to include the cost of commission.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://www.parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="Spread Bets" title="Betting Across at the Craps Table" />
		<p class="pb-4">
			When you bet Across, you are betting all the <Link
				text="Place Bets"
				href="place-bet-basics"
			/>, in the same amount, not including the Point. E.g., $54 Across would be $10 on the 5, $12
			on 6, $12 on the 8, $10 on the 9, and $10 on the 10. $10 + section + $12 + $10 + $10 = $54.
			After the Point has been established, tell the dealer, <Quote
				text="I would like 54 across."
			/> and they'll repeat <Quote text="54 across." />
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/across_640x360.webp"
			mdImg="src/images/{url}/across_960x540.webp"
			lgImg="src/images/{url}/across_1280x720.webp"
			title="Across at the Craps Table"
			alt="Puck is on point six and points 4, 5, 8, 9, and 10 are highlighted."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Across on the Craps Table?" />
		<p class="pb-4">
			When you bet Across at lower limits there are going to be two different options you can take:
			when the Point is 6 or 8 and when the Point is 4, 5, 9, or 10. Because all the numbers aren't
			bet in the same amounts, the amount changes based on what the Point is.
		</p>
		<ContentHeaderThree title="Point 6 or 8" />
		<p class="pb-4">
			When the Point is 6 or 8 the amount of your bet across is going to be less. This is because it
			costs more to bet on the 6 or 8 and the fact that it is the Point and you are not betting it,
			the total cost of the bet is going to be less.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/52-across_640x360.webp"
			mdImg="src/images/{url}/52-across_960x540.webp"
			lgImg="src/images/{url}/52-across_1280x720.webp"
			title="Betting $52 Across"
			alt="$52 across with the point on six."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Point 4, 5, 9, 10" />
		<p class="pb-4">
			When the Point is anything other than the 6 or 8, the cost of the bet will be larger. 6's and
			8's cost more and because they are not the Point and you will be including them in your bet,
			the total cost of the bet will be larger.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/54-across_640x360.webp"
			mdImg="src/images/{url}/54-across_960x540.webp"
			lgImg="src/images/{url}/54-across_1280x720.webp"
			title="Betting $54 Across"
			alt="$54 across with the point on five."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Across with a Commission in a Craps Game?" />
		<p class="pb-4">
			Whenever you bet Across large enough that you are going to have to buy the 4 and/or 10, the
			cost of the bet goes up again because you need to include the commission needed to be paid on
			those numbers
		</p>
		<ContentHeaderThree title="Point 6 or 8" />
		<p class="pb-4">
			When the Point is 6 or 8 the cost of your bet will be the smallest because you're saving money
			on the fact the 6 and 8 cost more and you wont have to pay for one of them. You will also be
			buying the 4 and 10, which means you have to pay commission for both of those numbers and you
			need to add those costs in.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/132-across_640x360.webp"
			mdImg="src/images/{url}/132-across_960x540.webp"
			lgImg="src/images/{url}/132-across_1280x720.webp"
			title="Betting $132 Across"
			alt="$132 across with the point on eight."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Point 5 or 9" />
		<p class="pb-4">
			When the Point is 5 or 9 the cost of the bet is at its highest. You need to include the cost
			of both the 6 and 8, which cost the most, and you need to add in the commission for both the 4
			and 10, which is additional money.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/137-across_640x360.webp"
			mdImg="src/images/{url}/137-across_960x540.webp"
			lgImg="src/images/{url}/137-across_1280x720.webp"
			title="Betting $137 Across"
			alt="$137 across with the point on nine."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Point 4 or 10" />
		<p class="pb-4">
			When the Point is 4 or 10 the cost of the bet is in the middle of the three possible options.
			This is because you need to pay the higher cost of the 6 and 8 but only need to pay the
			commission on either the 4 or 10. The fact that one of those numbers is the Point means you
			won't include it in your bet and therefore won't have to pay the commission for it.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/136-across_640x360.webp"
			mdImg="src/images/{url}/136-across_960x540.webp"
			lgImg="src/images/{url}/136-across_1280x720.webp"
			title="Betting $136 Across"
			alt="$136 across with the point on 10."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
