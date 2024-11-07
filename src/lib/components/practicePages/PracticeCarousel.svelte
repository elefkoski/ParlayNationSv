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
					<div class="absolute inset-0 image-cover dark:opacity-20" />
				</div>
			</div>
		{/each}
		<button
			class="absolute top-1/2 left-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full z-10"
			on:click={() => plusSlides(-1)}
		>
			&#10094;
		</button>
		<button
			class="absolute top-1/2 right-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full z-10"
			on:click={() => plusSlides(1)}
		>
			&#10095;
		</button>
	</div>
</div>
