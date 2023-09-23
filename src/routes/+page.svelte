<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import Footer from '$lib/clients/components/structure/Footer.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';
	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
</script>

<Navbar />
<main id="parentElement" class="dark:text-slate-400">
	<section
		aria-label="Main Hero"
		class="mx-auto py-12 mt-20 bg-cover bg-center"
		style="background-image: url(src/images/home-page/craps-table-layout.jpg)"
	>
		<div class="mx-auto py-8 relative">
			<section class="hero w-full lg:w-md m-0 md:m-auto relative z-10">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-3xl font-bold mb-4 uppercase">Learn How to Play Craps</h1>
						<p class="text-lg">
							If you want to know how Craps is played at a casino, you're in the right place. As a
							casino dealer, I've been teaching curious patrons the rules to Craps for over a
							decade. Not only do I love dealing Craps and shooting Craps, but this website was
							created because I love teaching Craps as well.
						</p>
					</div>
				</div>
			</section>
			<div class="absolute inset-0 bg-black opacity-80 rounded-lg lg:max-w-3xl m-auto" />
		</div>
	</section>
	<section
		aria-label="Learn Craps"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center bg-grey-600 dark:bg-black grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">LEARN CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				New to the game? Looking for a refresher? A journey into the world of Craps begins right
				here.
			</p>
			<a data-track="home-learn-craps" href="craps" class="btn btn-primary w-1/2 m-auto"
				>LEARN NOW</a
			>
		</div>
		<div class="col-span-8 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="src/images/home-page/learn-craps_640x360.webp 640w,
						src/images/home-page/learn-craps_960x540.webp 768w,
						src/images/home-page/learn-craps_1280x720.webp 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="src/images/home-page/learn-craps_1280x720.webp"
				alt="Learn Craps"
				class="w-full shadow-2xl"
			/>
		</div>
	</section>
	<section
		aria-label="Practice Craps"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="col-span-8 order-2 lg:order-1 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="src/images/home-page/practice-craps_640x360.webp 640w,
					src/images/home-page/practice-craps_960x540.webp 768w,
					src/images/home-page/practice-craps_1280x720.webp 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="src/images/home-page/practice-craps_1280x720.webp"
				alt="Learn Craps"
				class="w-full shadow-2xl"
			/>
		</div>
		<div
			class="text-center py-16 lg:py-0 bg-grey-600 dark:bg-black grid content-center col-span-4 order-1 lg:oder-2"
		>
			<h1 class="text-2xl font-bold">PRACTICE CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				Practice craps payouts with downloadable PDF's. Print the Craps Table layout, dice and more.
			</p>
			<a
				data-track="home-practice-craps"
				href="practice-craps"
				class="btn btn-primary capitalize w-1/2 m-auto">PRACTICE NOW</a
			>
		</div>
	</section>
	<section
		aria-label="Play Craps"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center bg-grey-600 dark:bg-black grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">PLAY CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				Play Craps using the Craps Simulator. Bet the Pass Line, Place Bets, and more.
			</p>
			<a
				data-track="home-craps-simulator"
				href="craps-simulator"
				class="btn btn-primary capitalize w-1/2 m-auto">PLAY NOW</a
			>
		</div>
		<div class="col-span-8 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="src/images/home-page/play-craps_640x360.webp 640w,
					src/images/home-page/play-craps_960x540.webp 768w,
					src/images/home-page/play-craps_1280x720.webp 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="src/images/home-page/play-craps_1280x720.webp"
				alt="Play Craps"
				class="w-full shadow-2xl"
			/>
		</div>
	</section>
	<section
		aria-label="Craps Calculators"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="col-span-8 order-2 lg:order-1 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="src/images/home-page/craps-calculators_640x360.webp 640w,
					src/images/home-page/craps-calculators_960x540.webp 768w,
					src/images/home-page/craps-calculators_1280x720.webp 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="src/images/home-page/craps-calculators_1280x720.webp"
				alt="Craps Calculators"
				class="w-full shadow-2xl"
			/>
		</div>
		<div
			class="text-center py-16 lg:py-0 bg-grey-600 dark:bg-black grid content-center col-span-4 order-1 lg:oder-2"
		>
			<h1 class="text-2xl font-bold">CRAPS CALCULATORS</h1>
			<p class="p-6 max-w-xs m-auto">
				New to the game? Looking for a refresher? A journey into the world of Craps begins right
				here.
			</p>
			<a
				data-track="home-craps-caclulators"
				href="craps-calculators"
				class="btn btn-primary capitalize w-1/2 m-auto">CHECK NOW</a
			>
		</div>
	</section>
	<section
		aria-label="Craps Blog"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center bg-grey-600 dark:bg-black grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">CRAPS BLOG</h1>
			<p class="p-6 max-w-xs m-auto">
				This is going to be something about a craps blog and some more things to write about here.
			</p>
			<a
				data-track="home-craps-blog"
				href="craps-blog"
				class="btn btn-primary capitalize w-1/2 m-auto">READ MORE</a
			>
		</div>
		<div class="col-span-8 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="https://picsum.photos/300/200 640w,
						https://picsum.photos/600/400 768w,
						https://picsum.photos/900/600 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="https://picsum.photos/900/600"
				alt="Randomly generated image from Picsum"
				class="w-full shadow-2xl"
			/>
		</div>
	</section>
</main>

<div class="container m-auto">
	<Footer />
</div>
