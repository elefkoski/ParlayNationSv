<script lang="ts">
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/ContentMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/clients/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';

	let title: string = 'Betting Inside at The Craps Table';
	let description: string =
		'Betting Inside is a Spread Bet on either 3 or 4 of the Inside Points: Five, Six, Eight, and Nine. When betting Inside, you are betting all the Inside Points in the same unit amount, not including the Point.';
	let url: string = 'inside';

	let phref: string = 'across';
	let prev: string = 'Across';
	let nhref: string = 'outside';
	let next: string = 'Outside';

	let pageLinks: PageMenu[] = [
		{
			title: 'Betting Inside',
			href: '#bettingInside',
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

	let tblAria: string = 'Inside betting options table';
	let tblHeaders: string[] = ['Spread', 'Total Bet'];
	let tblRows: (string | number)[][] = [
		['*One Unit: $5/number', '$16/17/22 Inside'],
		['Two Units: $10/number', '$32/34/44 Inside'],
		['Three Units: $15/number', '$48/51/66 Inside'],
		['*One Unit: $25/number', '$80/85/110 Inside'],
		['Two Units: $50/number', '$160/170/220 Inside']
	];
	let tblPnts: string[] = [
		'One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8.'
	];
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
		  "name": "Spread Bets - Betting Inside",
		  "description": "Betting Inside is a Spread Bet on either 3 or 4 of the Inside Points: Five, Six, Eight, and Nine. When betting Inside, you are betting all the Inside Points in the same unit amount, not including the Point.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "https://photos.app.goo.gl/W3PRcW9RskSdPw43A"
		  }
		}
	</script>
</svelte:head>

<LearnLayout {pageLinks}>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne
			sectionTitle="Spread Bets"
			title="Betting Inside at the Craps Table"
			{pageData}
		/>
		<p class="pb-4">
			5, 6, 8, and 9 are the Inside Points. When you bet Inside you are betting all the Inside
			Points, in the same unit amount, not including the Point. For example, if the Point was 6, 32
			inside would be: $10 on 5, $12 on the 8, and $10 on the 9 — $10 + $12 + $10 = $32 Inside.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/inside_640x360.webp"
			mdImg="src/images/{url}/inside_960x540.webp"
			lgImg="src/images/{url}/inside_1280x720.webp"
			title="Inside Place Bets"
			alt="Puck is on point four and points 5, 6, 8, and 9 are highlighted."
		/>
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<ContentHeaderTwo id="bettingInside" title="How Do You Bet Inside on the Craps Table?" />
		<p class="pb-4">
			When you make an Inside bet you don't include the 4 or 10. Since those numbers are not
			included you don't have to worry about paying a commission. Regardless of whether or not you
			have to pay a commission, there are still three different possibilities for Inside bets.
		</p>
		<ContentHeaderThree title="Point 6 or 8" />
		<p class="pb-4">
			When the Point is 6 or 8 the amount of your bet across is going to be less. This is because it
			costs more to bet on the 6 or 8 and the fact that it is the Point and you are not betting it,
			the total cost of the bet is going to be less.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/32-inside_640x360.webp"
			mdImg="src/images/{url}/32-inside_960x540.webp"
			lgImg="src/images/{url}/32-inside_1280x720.webp"
			title="Betting $32 Inside"
			alt="$32 inside with the point on eight."
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Point 5 or 9" />
		<p class="pb-4">
			When the Point is 5 or 9 you must still bet three other numbers. You have to bet both the 6
			and 8, which cost more than the rest so it's more expensive than when the Point is 6 or 8.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/34-inside_640x360.webp"
			mdImg="src/images/{url}/34-inside_960x540.webp"
			lgImg="src/images/{url}/34-inside_1280x720.webp"
			title="Betting $34 Inside"
			alt="$34 inside with the point on five"
		/>
		<div class="pb-4" />
		<ContentHeaderThree title="Point 4 or 10" />
		<p class="pb-4">
			Betting Inside is most expensive when the Point is 4 and 10 because you must bet all four of
			the Inside numbers.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/44-inside_640x360.webp"
			mdImg="src/images/{url}/44-inside_960x540.webp"
			lgImg="src/images/{url}/44-inside_1280x720.webp"
			title="Betting $44 Inside"
			alt="$44 inside with the point on ten."
		/>
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
