<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Betting Uptown/Downtown at the Craps Table';
	let description: string =
		'Betting Uptown or Downtown is a Spread Bet on the three points on either side of the 7. The Uptown Points are the Eight, Nine, and 10. The Downtown Points are Four, Five, and Six. You bet Uptown and Downtown in the same unit amount.';
	let url: string = 'uptown-downtown';

	let phref: string = 'outside';
	let prev: string = 'Outside';
	let nhref: string = 'including-the-point';
	let next: string = 'Including the Point';

	let tblAria: string = 'Uptown/Downtown betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$16 Up/Downtown'],
		['Two Units: $10/number', '$32 Up/Downtown'],
		['Three Units: $15/number', '$48 Up/Downtown'],
		['*One Unit: $25/number', '$76 Up/Downtown'],
		['Two Units: $50/number', '$162 up/Downtown']
	];
	let tblPnts: string[] = [
		'One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8.'
	];

	let liAs = [
		{
			title: ':',
			items: ['', '', '', '', '']
		},
		{
			title: ':',
			items: ['', '', '', '']
		},
		{
			title: ':',
			items: ['', '', '']
		}
	];
	let liBs = [
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
		},
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
		},
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
		}
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
		  "name": "Spread Bets - Betting Uptown/Downtown",
		  "description": "Betting Uptown or Downtown is a Spread Bet on the three points on either side of the 7. The Uptown Points are the Eight, Nine, and 10. The Downtown Points are Four, Five, and Six. You bet Uptown and Downtown in the same unit amount.",
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
		<ContentHeaderOne sectionTitle="Spread Bets" title="Betting Uptown and Downtown in Craps" />
		<p class="pb-4">
			After the Point has been established players like to bet the opposite side of the board and
			it's called bettin Uptown or Downtown. When the Point is 4, 5, or 6 the players will bet the
			8, 9, and 10, or Uptown. When the Point is 8, 9, or 10 the players will bet the 4, 5, and 6,
			or Downtown. They are always betting three numbers.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/uptown_640x360.webp"
			mdImg="src/images/{url}/uptown_960x540.webp"
			lgImg="src/images/{url}/uptown_1280x720.webp"
			title="Uptown Place Bets"
			alt="Puck is on point six and points 8, 9, and 10 are highlighted."
		/>
		<div class="pb-4" />
		<ContentImg
			caption=""
			smImg="src/images/{url}/downtown_640x360.webp"
			mdImg="src/images/{url}/downtown_960x540.webp"
			lgImg="src/images/{url}/downtown_1280x720.webp"
			title="Downtown Place Bets"
			alt="Puck is on point eight and points 4, 5, and 6 are highlighted."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Uptown or Downtown on the Craps Table?" />
		<p class="pb-4">
			When you bet Downtown or Uptown at lower limits you will not have to pay a commission on the 4
			or 10. If you bet the same number of units Uptown or Downtown the cost will be the same.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/16-uptown_640x360.webp"
			mdImg="src/images/{url}/16-uptown_960x540.webp"
			lgImg="src/images/{url}/16-uptown_1280x720.webp"
			title="Betting $16 Uptown"
			alt="Betting $16 Uptown with the point on five."
		/>
		<div class="pb-4" />
		<ContentImg
			caption=""
			smImg="src/images/{url}/16-downtown_640x360.webp"
			mdImg="src/images/{url}/16-downtown_960x540.webp"
			lgImg="src/images/{url}/16-downtown_1280x720.webp"
			title="Betting $16 Downtown"
			alt="Betting $16 downtown with the point on nine."
		/>
		<Divider />
		<ContentHeaderTwo title="How Do You Bet Uptown or Downtown with a Commission?" />
		<p class="pb-4">
			When you bet Downtown or Uptown at higher limits you will have to include the commission
			charged on either the 4 or 10. If you bet the same number of units Uptown or Downtown the cost
			of the bets will always be the same.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/65-uptown_640x360.webp"
			mdImg="src/images/{url}/65-uptown_960x540.webp"
			lgImg="src/images/{url}/65-uptown_1280x720.webp"
			title="Betting $65 Uptown"
			alt="$65 uptown with the point on four."
		/>
		<div class="pb-4" />
		<ContentImg
			caption=""
			smImg="src/images/{url}/65-downtown_640x360.webp"
			mdImg="src/images/{url}/65-downtown_960x540.webp"
			lgImg="src/images/{url}/65-downtown_1280x720.webp"
			title="Betting $65 Downtown"
			alt="$65 downtown with the point on ten."
		/>
	</main>
	<PrevNext {phref} {prev} {nhref} {next} />
</LearnLayout>
