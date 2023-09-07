<script lang="ts">
	import { onMount } from 'svelte';
	export let slides: string[] = [];

	let currentSlide = 0;

	const plusSlides = (n: number) => {
		currentSlide = (currentSlide + n + slides.length) % slides.length;
	};

	onMount(() => {
		// Make the first slide visible
		plusSlides(0);
	});
</script>

<div class="w-full">
	<div class="slideshow-container relative">
		{#each slides as slide, i}
			<div class={`mySlides ${currentSlide === i ? 'block' : 'hidden'}`}>
				<div class="numbertext absolute left-2 top-1">{i + 1} / {slides.length}</div>
				<div class="relative">
					<img class="w-full h-auto" src={slide} alt="Slide {i + 1}" />
					<div class="absolute inset-0 bg-black dark:bg-black opacity-0 dark:opacity-20" />
				</div>
			</div>
		{/each}
		<button
			class="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-black text-black dark:text-white p-2 rounded-full shadow-lg z-10"
			on:click={() => plusSlides(-1)}
		>
			&#10094;
		</button>
		<button
			class="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-black text-black dark:text-white p-2 rounded-full shadow-lg z-10"
			on:click={() => plusSlides(1)}
		>
			&#10095;
		</button>
	</div>
	<!--<div class="flex overflow-x-auto mt-4 space-x-2 pr-4">
					{#each slides as slide, i}
						<button
							class="focus:outline-none flex-shrink-0 inline-block"
							on:click={() => goToSlide(i)}
						>
							<img
								class="w-24 h-auto border-2 border-transparent hover:border-blue-500"
								src={slide}
								alt={`Thumbnail ${i + 1}`}
							/>
						</button>
					{/each}
				</div>-->
</div>
