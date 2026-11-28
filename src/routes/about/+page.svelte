<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'About';
	let description: string =
		'About me and why I made a site teaching people how to play the casino game of Craps.';
	let url: string = 'about';
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
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
                "@type": "WebPage",
                "@id": "http://parlaynation.com/about",
                "name": "About | Parlay Nation - How to Play Craps",
                "description": "About me and why I made a site teaching people how to play the casino game of Craps.",
                "author": {
                    "@type": "Person",
                    "name": "Elvis Lefkoski"
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "src/images/about/about-header.jpg"
                },
                "url": "http://parlaynation.com/about"
            }
        }
	</script>
</svelte:head>

<MoreLayout showContentMenuBox={false}>
	<main aria-label="Main content" class="p-6">
		<div class="flex flex-col px-4 sm:px-6 lg:px-8">
			<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">About Me</h1>

			<div class="home-page-body-bg-1 shadow-md rounded-lg overflow-hidden w-full max-w-4xl mb-10">
				<div class="w-full text-center p-6">
					<p class="text-lg sm:text-xl">
						Welcome to Parlay Nation! I'm Elvis, a passionate Craps dealer with over a decade of
						experience. My mission is to teach people how to play Craps and mentor aspiring dealers.
						Whether you're a beginner or a seasoned player, I'll guide you towards confident and
						successful Craps expertise while leveraging my love for coding and technology to enhance
						the learning experience. Join me on this thrilling journey as we uncover the secrets of
						Craps excellence together!
					</p>
				</div>
			</div>

			<div class="flex flex-col items-center">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
					<div class="home-page-body-bg-1 shadow-md rounded px-6 py-8">
						<h2 class="text-xl sm:text-2xl font-bold mb-4">The Mission</h2>
						<p class="text-base sm:text-lg">
							At Parlay Nation, my mission is to empower individuals to become confident and
							successful Craps players by providing accessible resources, step-by-step guides, and
							expert advice. Join me on this exciting journey to unlock the secrets of Craps and
							elevate your game to new heights of success.
						</p>
					</div>

					<div class="home-page-body-bg-1 shadow-md rounded px-6 py-8">
						<h2 class="text-xl sm:text-2xl font-bold mb-4">The Vision</h2>
						<p class="text-base sm:text-lg">
							My vision is to create a supportive platform where individuals can discover the joy of
							playing Craps and develop their skills, while fostering a community of confident and
							strategic players. Together, let's unlock the potential within each player and fully
							appreciate the game of Craps.
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</MoreLayout>
