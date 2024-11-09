<script lang="ts">
	import '../app.css';
	import '../colors.css';
	import Navbar from '$lib/components/structure/Navbar.svelte';
	import Footer from '$lib/components/structure/Footer.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking, enableScrollTracking } from '$lib/utils/tracking';
	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});

	let description: string =
		"Want to play the most exciting game in the casino? Learn How to Play Craps so you'll never miss another exciting moment on the table.";
</script>

<svelte:head>
	<title>Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href="http://parlaynation.com/" />
	<meta name="description" content={description} />
	<meta property="og:url" content="http://parlaynation.com/" />
	<meta property="og:title" content="Parlay Nation - How to Play Craps" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/home-page/header.jpg'} />
	<meta name="twitter:image" content={'images/home-page/header.jpg'} />
	<script type="application/ld+json">
		{
	"@context": "https://schema.org",
	"@type": "WebPage",
	"name": "Parlay Nation - Learn How to Play Craps",
	"headline": "Learn How to Play Craps | Parlay Nation",
	"description": "Learn the rules, practice payouts, and play Craps with our comprehensive resources. As a professional Craps dealer, I teach you everything you need to master the game.",
	"url": "http://parlaynation.com/",
	"mainEntity": {
		"@type": "WebPageElement",
		"name": "Craps Content Sections",
		"hasPart": [
		{
			"@type": "CreativeWork",
			"name": "Learn Craps",
			"headline": "Learn Craps",
			"description": "New to the game? Looking for a refresher? A journey into the world of Craps begins right here.",
			"url": "http://parlaynation.com/craps",
			"image": {
			"@type": "ImageObject",
			"url": "http://parlaynation.com/src/images/home-page/learn-craps_1280x720.webp",
			"width": 1280,
			"height": 720,
			"caption": "Learn Craps"
			}
		},
		{
			"@type": "CreativeWork",
			"name": "Practice Craps",
			"headline": "Practice Craps",
			"description": "Practice craps payouts with downloadable PDFs. Print the Craps Table layout, dice, and more.",
			"url": "http://parlaynation.com/practice-craps",
			"image": {
			"@type": "ImageObject",
			"url": "http://parlaynation.com/src/images/home-page/practice-craps_1280x720.webp",
			"width": 1280,
			"height": 720,
			"caption": "Practice Craps"
			}
		},
		{
			"@type": "CreativeWork",
			"name": "Play Craps",
			"headline": "Play Craps",
			"description": "Play Craps using the Craps Simulator. Bet the Pass Line, Place Bets, and more.",
			"url": "http://parlaynation.com/craps-simulator",
			"image": {
			"@type": "ImageObject",
			"url": "http://parlaynation.com/src/images/home-page/play-craps_1280x720.webp",
			"width": 1280,
			"height": 720,
			"caption": "Play Craps"
			}
		},
		{
			"@type": "CreativeWork",
			"name": "Craps Calculators",
			"headline": "Craps Calculators",
			"description": "Calculate bets, odds, and payouts with our powerful Craps calculators. Perfect for beginners and experts alike.",
			"url": "http://parlaynation.com/craps-calculators",
			"image": {
			"@type": "ImageObject",
			"url": "http://parlaynation.com/src/images/home-page/craps-calculators_1280x720.webp",
			"width": 1280,
			"height": 720,
			"caption": "Craps Calculators"
			}
		},
		{
			"@type": "CreativeWork",
			"name": "Craps Blog",
			"headline": "Craps Blog",
			"description": "Discover tips, strategies, and insights on playing Craps in our blog, curated by a seasoned Craps dealer.",
			"url": "http://parlaynation.com/craps-blog",
			"image": {
			"@type": "ImageObject",
			"url": "http://parlaynation.com/src/images/home-page/craps-blog_1280x720.webp",
			"width": 900,
			"height": 600,
			"caption": "Craps Blog"
			}
		}
		]
	},
	"image": {
		"@type": "ImageObject",
		"url": "http://parlaynation.com/src/images/home-page/craps-table-layout.jpg",
		"width": 1920,
		"height": 1080,
		"caption": "Main Hero background showing a craps table layout."
	},
	"breadcrumb": {
		"@type": "BreadcrumbList",
		"itemListElement": [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "http://parlaynation.com/"
		},
		{
			"@type": "ListItem",
			"position": 2,
			"name": "Learn Craps",
			"item": "http://parlaynation.com/craps"
		},
		{
			"@type": "ListItem",
			"position": 3,
			"name": "Practice Craps",
			"item": "http://parlaynation.com/practice-craps"
		},
		{
			"@type": "ListItem",
			"position": 4,
			"name": "Play Craps",
			"item": "http://parlaynation.com/craps-simulator"
		},
		{
			"@type": "ListItem",
			"position": 5,
			"name": "Craps Calculators",
			"item": "http://parlaynation.com/craps-calculators"
		},
		{
			"@type": "ListItem",
			"position": 6,
			"name": "Craps Blog",
			"item": "http://parlaynation.com/craps-blog"
		}
		]
	},
	"publisher": {
		"@type": "Organization",
		"name": "Parlay Nation",
		"logo": {
		"@type": "ImageObject",
		"url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp",
		"width": 275,
		"height": 218
		}
	},
	"author": {
		"@type": "Person",
		"name": "Elvis Lefkoski"
	}
	}

	</script>
</svelte:head>

<Navbar />
<main id="parentElement" class="home-page-text">
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
			<div class="absolute inset-0 hero-bg opacity-80 rounded-lg lg:max-w-3xl m-auto" />
		</div>
	</section>
	<section
		aria-label="Learn Craps"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center home-section-bg grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">LEARN CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				New to the game? Looking for a refresher? A journey into the world of Craps begins right
				here.
			</p>
			<a data-track="home-learn-craps" href="craps" class="btn home-section-btn w-1/2 m-auto"
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
			class="text-center py-16 lg:py-0 home-section-bg grid content-center col-span-4 order-1 lg:oder-2"
		>
			<h1 class="text-2xl font-bold">PRACTICE CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				Practice craps payouts with downloadable PDF's. Print the Craps Table layout, dice and more.
			</p>
			<a
				data-track="home-practice-craps"
				href="practice-craps"
				class="btn home-section-btn capitalize w-1/2 m-auto">PRACTICE NOW</a
			>
		</div>
	</section>
	<section
		aria-label="Play Craps"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center home-section-bg grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">PLAY CRAPS</h1>
			<p class="p-6 max-w-xs m-auto">
				Play Craps using the Craps Simulator. Bet the Pass Line, Place Bets, and more.
			</p>
			<a
				data-track="home-craps-simulator"
				href="craps-simulator"
				class="btn home-section-btn capitalize w-1/2 m-auto">PLAY NOW</a
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
			class="text-center py-16 lg:py-0 home-section-bg grid content-center col-span-4 order-1 lg:oder-2"
		>
			<h1 class="text-2xl font-bold">CRAPS CALCULATORS</h1>
			<p class="p-6 max-w-xs m-auto">
				New to the game? Looking for a refresher? A journey into the world of Craps begins right
				here.
			</p>
			<a
				data-track="home-craps-caclulators"
				href="craps-calculators"
				class="btn home-section-btn capitalize w-1/2 m-auto">CHECK NOW</a
			>
		</div>
	</section>
	<section
		aria-label="Craps Blog"
		class="grid grid-cols-1 lg:grid-cols-12 lg:max-w-4xl lg:m-auto lg:mt-12"
	>
		<div class="text-center home-section-bg grid content-center col-span-4 py-16 lg:py-0">
			<h1 class="text-2xl font-bold">CRAPS BLOG</h1>
			<p class="p-6 max-w-xs m-auto">
				Discover tips, strategies, and insights on playing Craps in our blog, curated by a seasoned
				Craps dealer.
			</p>
			<a
				data-track="home-craps-blog"
				href="craps-blog"
				class="btn home-section-btn capitalize w-1/2 m-auto">READ MORE</a
			>
		</div>
		<div class="col-span-8 h-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				srcset="src/images/home-page/craps-blog_640x360.webp 640w,
						src/images/home-page/craps-blog_960x540.webp 768w,
						src/images/home-page/craps-blog_1280x720.webp 1024w"
				sizes="(max-width: 640px) 300px,
					   (max-width: 768px) 600px,
					   900px"
				src="src/images/home-page/craps-blog_1280x720.webp"
				alt="Craps stick with two purple dice"
				class="w-full shadow-2xl"
			/>
		</div>
	</section>
</main>

<div class="container m-auto">
	<Footer />
</div>
