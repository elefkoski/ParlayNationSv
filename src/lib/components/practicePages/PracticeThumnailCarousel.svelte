<script lang="ts">
	const options = [
		{
			url: 'src/images/practice/pdf-cover-pass-line-odds-6-8_640x828.webp',
			href: 'practice-pass-line-odds-payments-6-8',
			title: 'Pass Line Odds 6/8'
		},
		{
			url: 'src/images/practice/pdf-cover-pass-line-odds-5-9_640x828.webp',
			href: 'practice-pass-line-odds-payments-5-9',
			title: 'Pass Line Odds 5/9'
		},
		{
			url: 'src/images/practice/pdf-cover-pass-line-odds-4-10_640x828.webp',
			href: 'practice-pass-line-odds-payments-4-10',
			title: 'Pass Line Odds 4/10'
		},
		{
			url: 'src/images/practice/pdf-cover-place-bets-6-8_640x828.webp',
			href: 'practice-place-bet-payments-6-8',
			title: 'Place Bet Payments 6/8'
		},
		{
			url: 'src/images/practice/pdf-cover-place-bets-5-9_640x828.webp',
			href: 'practice-place-bet-payments-5-9',
			title: 'Place Bet Payments 5/9'
		},
		{
			url: 'src/images/practice/pdf-cover-place-bets-4-10_640x828.webp',
			href: 'practice-place-bet-payments-4-10',
			title: 'Place Bet Payments 4/10'
		},
		{
			url: 'src/images/practice/pdf-cover-come-bet-w-odds-6-8_640x828.webp',
			href: 'practice-come-bet-w-odds-payments-6-8',
			title: 'Come Bet w/Odds 6/8'
		},
		{
			url: 'src/images/practice/pdf-cover-come-bet-w-odds-5-9_640x828.webp',
			href: 'practice-come-bet-w-odds-payments-5-9',
			title: 'Come Bet w/Odds 5/9'
		},
		{
			url: 'src/images/practice/pdf-cover-come-bet-w-odds-4-10_640x828.webp',
			href: 'practice-come-bet-w-odds-payments-4-10',
			title: 'Come Bet w/Odds 4/10'
		},
		{
			url: 'src/images/practice/pdf-cover-lay-odds-6-8_640x828.webp',
			href: 'practice-lay-odds-payments-6-8',
			title: "Don't Side Lay Odds 6/8"
		},
		{
			url: 'src/images/practice/pdf-cover-lay-odds-5-9_640x828.webp',
			href: 'practice-lay-odds-payments-5-9',
			title: "Don't Side Lay Odds 5/9"
		},
		{
			url: 'src/images/practice/pdf-cover-lay-odds-4-10_640x828.webp',
			href: 'practice-lay-odds-payments-4-10',
			title: "Don't Side Lay Odds 4/10"
		},
		{
			url: 'src/images/practice/pdf-cover-black-dice-combinations_640x828.webp',
			href: 'practice-craps-cards-black',
			title: 'Craps Dice - Black'
		},
		{
			url: 'src/images/practice/pdf-cover-grey-dice-combinations_640x828.webp',
			href: 'practice-craps-cards-grey',
			title: 'Craps Dice - Grey'
		},
		{
			url: 'src/images/practice/pdf-cover-60mm-foldable-craps-dice_640x828.webp',
			href: 'practice-60mm-craps-dice',
			title: '60mm Foldable Dice'
		},
		{
			url: 'src/images/practice/pdf-cover-40mm-foldable-craps-dice_640x828.webp',
			href: 'practice-40mm-craps-dice',
			title: '40mm Foldable Dice'
		},
		{
			url: 'src/images/practice/pdf-cover-19mm-foldable-craps-dice_640x828.webp',
			href: 'practice-19mm-craps-dice',
			title: '19mm Foldable Dice'
		},
		{
			url: 'src/images/practice/pdf-cover-craps-table-layout_640x828.webp',
			href: 'practice-full-craps-table-layout',
			title: 'Full Craps Table Layout'
		},
		{
			url: 'src/images/practice/pdf-cover-half-craps-table-layout_640x828.webp',
			href: 'practice-half-craps-table-layout',
			title: 'Half Craps Table Layout'
		},
		{
			url: 'src/images/practice/pdf-cover-hh-world-generator_640x828.webp',
			href: 'practice-horn-high-generator',
			title: 'Horn High Generator'
		},
		{
			url: 'src/images/practice/pdf-cover-craps-roll-cards_640x828.webp',
			href: 'practice-craps-roll-cards',
			title: 'Craps Roll Cards'
		}
	];
	let scrollContainer: HTMLDivElement;

	function scrollLeft() {
		scrollContainer.scrollTo({
			top: 0,
			left: scrollContainer.scrollLeft - scrollContainer.clientWidth,
			behavior: 'smooth'
		});
	}

	function scrollRight() {
		scrollContainer.scrollTo({
			top: 0,
			left: scrollContainer.scrollLeft + scrollContainer.clientWidth,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="relative p-8 w-full self-center rounded-lg text-center transition-colors duration-500 home-page-body-bg-1"
>
	<h3 class="text-xl lg:text-2xl font-bold">More Downloadable PDF's</h3>
	<p class="mt-2">Check out other PDF's that you can use to practice Craps.</p>
	<div class="flex overflow-x-auto mt-4 space-x-2 scrollbar-hide" bind:this={scrollContainer}>
		{#each options as { url, href, title }, i}
			<a
				data-track="carousel-{href}"
				{href}
				rel="noopener noreferrer"
				class="focus:outline-none flex-shrink-0 inline-block w-36"
			>
				<div class="relative">
					<img
						class="w-36 h-auto border-2 border-transparent hover:border-blue-500 dark:hover:border-yellow-500 transition-colors duration-200"
						src={url}
						alt={`Thumbnail ${i + 1}`}
					/>
					<div class="pointer-events-none absolute inset-0 image-cover dark:opacity-20" />
				</div>
				<h4 class="w-3/4 mx-auto">{title}</h4>
			</a>
		{/each}
	</div>
	<button
		class="prev absolute top-[55%] left-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full shadow-lg z-10"
		on:click={scrollLeft}
	>
		&#10094;
	</button>
	<button
		class="next absolute top-[55%] right-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full shadow-lg z-10"
		on:click={scrollRight}
	>
		&#10095;
	</button>
</div>
