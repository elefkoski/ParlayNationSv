<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '../../lib/clients/components/Link.svelte';
	import Quote from '../../lib/clients/components/Quote.svelte';

	let title: string = 'Betting Including the Point at the Craps Table';
	let description: string =
		'When you bet Including the Point you are betting a spread bet that included the point. You can bet Across, Inside, Outside, Uptown, or Downtown Including the Point.';
	let url: string = 'including-the-point';

	let phref: string = 'uptown-downtown';
	let prev: string = 'Uptown/Downtown';
	let nhref: string = 'proposition-bets';
	let next: string = 'Proposition Bets';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Across Including the Point',
			href: '#bettingAcrossIncluding',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		}
	];

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.jpg'
	};

	let tblAria: string = 'Including the point betting options table';
	let tblHeaders: string[] = ['The Spread', 'Total bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$32 Across Including'],
		['Two Units: $10/number', '$44 Inside Including'],
		['Three Units: $15/number', '$60 Outside Including'],
		['*One Unit: $25/number', '$162 Across Including'],
		['Two Units: $50/number', '$220 Inside Including']
	];
	let tblPnts: string[] = [
		'One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8.'
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
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Spread Bets - Betting Including the Point",
		  "description": "When you bet Including the Point you are betting a spread bet that included the point. You can bet Across, Inside, Outside, Uptown, or Downtown Including the Point.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Spread Bets"
			title="Betting Including the Point at the Craps Table"
			{pageData}
		>
			<p class="pb-4">
				When players bet Including the Point they are usually not on the <Link
					text="Pass Line"
					href="pass-line-basics"
				/> which is why they include the Point. You bet them like you would bet any other <Link
					text="Spread Bet"
					href="spread-bets"
				/> but add <Quote text="… including the point." /> to the end of their Spread Bet.
			</p>
			<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		</ContentHeaderOne>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo
			id="bettingAcross"
			title="How Do You Bet Across Including the Point in Craps?"
		>
			<p class="pb-4">
				Across Including the Point is betting all the Place bet numbers including the Point. E.g.
				$64 Across would be $10 on the 4, $10 on the 5, $12 on the 6, $12 on the 8, $10 on the 9,
				and $10 on the 10 — $10 + $10 + $12 + $12 + $10 + $10 = $64.
			</p>
			<ContentImg
				caption=""
				smImg="src/images/{url}/32-across-including-the-point_640x360.webp"
				mdImg="src/images/{url}/32-across-including-the-point_960x540.webp"
				lgImg="src/images/{url}/32-across-including-the-point_1280x720.webp"
				title="Betting $32 Across"
				alt="Betting $32 Across Including the Point"
			/>
			<div class="pb-4" />
			<ContentImg
				caption=""
				smImg="src/images/{url}/162-across-including-the-point_640x360.webp"
				mdImg="src/images/{url}/162-across-including-the-point_960x540.webp"
				lgImg="src/images/{url}/162-across-including-the-point_1280x720.webp"
				title="Betting 162 Across Including the Point"
				alt="Betting $162 Across Including the Point"
			/>
		</ContentHeaderTwo>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
