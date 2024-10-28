<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Terms of Service';
	let description: string =
		"Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.";
	let url: string = 'terms-of-service';
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
		//Schema Here
		//Schema Here
		//Schema Here
		//Schema Here
	</script>
</svelte:head>

<MoreLayout>
	<main aria-label="Main content" class="container mx-auto p-6">
		<div class="dark:text-white text-black transition duration-300 ease-in-out">
			<div class="container mx-auto p-6">
				<h1 class="text-4xl font-bold mb-10 text-center dark:text-white">Terms of Service</h1>

				<h2 class="text-2xl font-semibold mb-4 dark:text-white">Introduction</h2>
				<p class="mb-4 dark:text-gray-300">
					We will refer to Parlay Nation as "Website," while the terms "our," "us," and "we"
					represent Parlay Nation. The term "you" refers to any individual registered or visiting
					this Website.
				</p>

				<h2 class="text-2xl font-semibold mb-4 dark:text-white">Newsletter Subscription</h2>
				<p class="mb-2 dark:text-gray-300">
					Upon newsletter subscription, you agree to the following:
				</p>
				<ul class="list-disc list-inside mb-4 dark:text-gray-300">
					<li>You are 18 years of age or older.</li>
					<li>
						You accept our <a
							data-track="tos-privacy-policy-link"
							href="privacy-policy"
							class="underline text-blue-300">Privacy Policy.</a
						>
					</li>
				</ul>
				<p class="mb-4 dark:text-gray-300">
					Note: We will email you weekly with promotions and news.
				</p>
			</div>
		</div>
	</main></MoreLayout
>
