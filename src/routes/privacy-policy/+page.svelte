<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Privacy Policy';
	let description: string =
		"Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.";
	let url: string = 'privacy-policy';
	let sections: any[] = [
		{
			title: 'Content and Intellectual Property',
			para: 'All text, images, videos, and other content ("Content") on Parlay Nation are protected by intellectual property laws and are the property of Parlay Nation or its licensors. Distribution, modification, or commercial use of Content is prohibited without explicit written consent from Parlay Nation.'
		},
		{
			title: 'User-Generated Content',
			para: 'Users may post, upload, or contribute content ("User Content"). By doing so, you confirm that your User Content is legal and that you hold the rights to it. Parlay Nation is not responsible for, nor does it endorse, User Content. If a claim is made against Parlay Nation due to your User Content, you agree to indemnify Parlay Nation for any arising damages.'
		},
		{
			title: 'Account and Data Security',
			para: 'You are responsible for maintaining the confidentiality of your account information. Notify Parlay Nation immediately if you suspect unauthorized use. By using the services, you agree to the collection and use of your data as outlined in our Privacy Policy.'
		},
		{
			title: 'User Obligations and Limitations',
			para: "You're expected to adhere to these terms. Users must be at least 18 years old to use the services. Violations may lead to suspension or banning from the platform. Parlay Nation is not liable for any damages—direct or indirect—that arise from your use or inability to use the service."
		}
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
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Privacy Policy",
			"description": "Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.",
			"url": "http://parlaynation.com/privacy-policy",
			"mainEntity": {
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Content and Intellectual Property",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "All text, images, videos, and other content ('Content') on Parlay Nation are protected by intellectual property laws and are the property of Parlay Nation or its licensors. Distribution, modification, or commercial use of Content is prohibited without explicit written consent from Parlay Nation."
						}
					},
					{
						"@type": "Question",
						"name": "User-Generated Content",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Users may post, upload, or contribute content ('User Content'). By doing so, you confirm that your User Content is legal and that you hold the rights to it. Parlay Nation is not responsible for, nor does it endorse, User Content. If a claim is made against Parlay Nation due to your User Content, you agree to indemnify Parlay Nation for any arising damages."
						}
					},
					{
						"@type": "Question",
						"name": "Account and Data Security",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "You are responsible for maintaining the confidentiality of your account information. Notify Parlay Nation immediately if you suspect unauthorized use. By using the services, you agree to the collection and use of your data as outlined in our Privacy Policy."
						}
					},
					{
						"@type": "Question",
						"name": "User Obligations and Limitations",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "You're expected to adhere to these terms. Users must be at least 18 years old to use the services. Violations may lead to suspension or banning from the platform. Parlay Nation is not liable for any damages—direct or indirect—that arise from your use or inability to use the service."
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<MoreLayout showContentMenuBox={false}>
	<main aria-label="Main content" class="container mx-auto p-6">
		<h1 class="text-4xl font-bold mb-10 text-center">Privacy Policy</h1>
		{#each sections as section (section.title)}
			<section class="mb-6">
				<h2 class="text-2xl font-semibold">{section.title}</h2>
				<p class="text-lg">
					{section.para}
				</p>
			</section>
		{/each}
	</main></MoreLayout
>
