<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Terms of Service';
	let description: string =
		"Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.";
	let url: string = 'terms-of-service';
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
			"@type": "WebPage",
			"name": "Terms of Service",
			"description": "Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.",
			"url": "http://parlaynation.com/terms-of-service",
			"mainEntity": {
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Introduction",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "We will refer to Parlay Nation as 'Website,' while the terms 'our,' 'us,' and 'we' represent Parlay Nation. The term 'you' refers to any individual registered or visiting this Website."
						}
					},
					{
						"@type": "Question",
						"name": "Newsletter Subscription",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Upon newsletter subscription, you agree to the following: You are 18 years of age or older. You accept our Privacy Policy. Note: We may email you weekly with promotions and news."
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<MoreLayout showContentMenuBox={false}>
	<main aria-label="Main content" class="container mx-auto p-6">
		<div class="transition duration-300 ease-in-out">
			<div class="container mx-auto p-6">
				<h1 class="text-4xl font-bold mb-10 text-center">Terms of Service</h1>

				<h2 class="text-2xl font-semibold mb-4">Introduction</h2>
				<p class="mb-4">
					We will refer to Parlay Nation as "Website," while the terms "our," "us," and "we"
					represent Parlay Nation. The term "you" refers to any individual registered or visiting
					this Website.
				</p>

				<h2 class="text-2xl font-semibold mb-4">Newsletter Subscription</h2>
				<p class="mb-2">Upon newsletter subscription, you agree to the following:</p>
				<ul class="list-disc list-inside mb-4">
					<li>You are 18 years of age or older.</li>
					<li>
						You accept our <a
							data-track="tos-privacy-policy-link"
							href="privacy-policy"
							class="underline hyperlink">Privacy Policy.</a
						>
					</li>
				</ul>
				<p class="mb-4">Note: We may email you weekly with promotions and news.</p>
			</div>
		</div>
	</main></MoreLayout
>
