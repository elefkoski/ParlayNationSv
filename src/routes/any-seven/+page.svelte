<script lang="ts">
	import { calculateAnySeven } from '$lib/utils/calculations';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcContainer from '$lib/clients/components/calculators/CalcContainer.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import LearnLayout from '$lib/clients/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/clients/components/PrevNext.svelte';
	import PrevNext2 from '$lib/clients/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/clients/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/clients/components/contentPages/Content-h2.svelte';
	import ContentTble from '$lib/clients/components/contentPages/ContentTable.svelte';
	import ContentImg from '$lib/clients/components/contentPages/Content-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

	let title: string = 'Betting the Any Seven in Craps';
	let description: string =
		"The Any 7 is a one-roll bet and could be used any number of ways. Many of the Don't players use it to hedge or tnavnvoke the seven. You can add it to the Horn to make a World or many players bet it during the Comeout Roll so they could win twice if they are on the Pass Line.";
	let url: string = 'any-seven';

	let phref: string = 'c-and-e';
	let prev: string = 'C & E';
	let nhref: string = 'any-craps';
	let next: string = 'Any Craps';

	let tblAria: string = 'The Any Seven payout table';
	let tblHeaders: string[] = ['Roll', 'Pays', 'Wins', 'Loses'];
	let tblRows: (string | number)[][] = [['Any 7', '4:1', '7', 'Any other number']];
	let tblPnts: string[] = ['The Any Seven is a one roll bet'];
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
		  "name": "Learn the Any Seven",
		  "description": "The Any Seven is mostly used by Don't players or as part of a World. Sometimes Come Bet players will use it to hedge their flat bets during the Comeout Roll",
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
		<ContentHeaderOne sectionTitle="Proposition Bets" title="Betting the Any Seven in Craps" />
		<p class="pb-4">
			The Any 7 is a one-roll bet and could be used any number of ways. Many of the Don't players
			use it to hedge or tnavnvoke the seven. You can add it to the <Link text="Horn" href="horn" />
			to make a <Link text="World" href="the-world" /> or many players bet it during the <Link
				text="Comeout Roll"
				href="the-stages"
			/> so they could win twice if they are on the <Link
				text="Pass Line"
				href="pass-line-basics"
			/>.
		</p>
		<ContentTble {tblAria} {tblHeaders} {tblRows} {tblPnts} />
		<ContentImg
			caption=""
			smImg="src/images/{url}/any-seven_640x360.webp"
			mdImg="src/images/{url}/any-seven_960x540.webp"
			lgImg="src/images/{url}/any-seven_1280x720.webp"
			title="The Any Seven"
			alt="Overhead up close view of the any seven area on the craps layout."
		/>
		<Divider />
		<ContentHeaderTwo title="Where Is Your Any Seven on the Craps Table?" />
		<p class="pb-4">
			The Any 7 is a bar across the middle of the table. The bar is split into a left and right side
			of the table with the center of the bar is the middle of the table and the edges of the bar
			are the two bases.
		</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/placement-of-the-any-seven_640x360.webp"
			mdImg="src/images/{url}/placement-of-the-any-seven_960x540.webp"
			lgImg="src/images/{url}/placement-of-the-any-seven_1280x720.webp"
			title="Placement of the Any Seven"
			alt="Up close view of the any seven bar and the craps rail. There are eight spots that are color coordinated on the bet and the rail."
		/>
		<Divider />
		<ContentHeaderTwo title="What Does the Any Seven Pay in a Craps Game?" />
		<p class="pb-4">The Any 7 pays 4:1 or $4 for every $1.</p>
		<ContentImg
			caption=""
			smImg="src/images/{url}/what-does-the-any-seven-pay_640x360.webp"
			mdImg="src/images/{url}/what-does-the-any-seven-pay_960x540.webp"
			lgImg="src/images/{url}/what-does-the-any-seven-pay_1280x720.webp"
			title="What Does the Any Seven Pay"
			alt="$4 on the any seven with two green dice that read 1-6. There is a bubble that reads $16 payment."
		/>
		<Divider />
		<CalcContainer aria="Any seven payment calculator"
			><CalcBox
				description="Check the payment for an Any Seven bet."
				title="Any Seven Payment Calculator"
			>
				<CalcInput
					calculate={calculateAnySeven}
					id="any_seven_pymnt_calc"
					pId="any_seven_calc_result"
					placeholder="$1 minimum"
					step={1}
					title="Enter Any Seven Amount:"
				/>
			</CalcBox></CalcContainer
		>
		<Divider />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
