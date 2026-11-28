<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Privacy Policy';
	let description: string =
		'How Parlay Nation handles your information: what we collect when you read, sign in, and save bookmarks, how we use it, and the choices you have.';
	let url: string = 'privacy-policy';
	let sections: any[] = [
		{
			title: 'Information We Collect',
			para: "When you create an account or sign in, we receive the basics your sign-in method provides, such as your name and email address, whether you sign in with an email and password, Google, or Facebook. When you use the site, we store the things you save: your bookmarks, favorite bets, and simulator preferences. If you browse as a guest instead, those saves are stored in your own browser rather than in an account. Like most websites, we also receive basic technical information through analytics, such as which pages are visited and the type of device and browser used."
		},
		{
			title: 'How We Use Your Information',
			para: 'We use your information to run your account and keep you signed in, to save and sync your bookmarks and preferences across your visits, to understand which lessons and tools people find useful so we can improve them, and to keep the site secure. We do not sell your personal information.'
		},
		{
			title: 'Cookies and Local Storage',
			para: 'Parlay Nation uses cookies and browser storage to keep you signed in, remember settings such as your theme, store guest bookmarks and preferences on your device, and measure site usage through Google Analytics. You can clear or block cookies in your browser settings, but some features, such as staying signed in, may stop working.'
		},
		{
			title: 'Who We Share Information With',
			para: 'Your information is handled by the service providers that run the site: Google Firebase stores accounts and saved data, and Google Analytics processes usage data. We may disclose information if required by law. We do not sell or rent your personal information to anyone.'
		},
		{
			title: 'Your Choices',
			para: 'You can delete your bookmarks at any time from your profile page, sign out on any device, and erase guest data by clearing your browser storage. If you would like your account and the data saved to it deleted, contact us through the Contact page and we will take care of it.'
		},
		{
			title: 'Data Security',
			para: "Accounts and saved data are handled through Firebase's secure sign-in and storage systems. No system is completely secure, so please use a strong password, and let us know if you suspect unauthorized use of your account."
		},
		{
			title: "Children's Privacy",
			para: 'Parlay Nation teaches a casino game and is intended for adults. The site is not directed at children under 13, and we do not knowingly collect information from them.'
		},
		{
			title: 'Changes to This Policy',
			para: 'If we change how we handle information, we will post the updated policy on this page so you can always see the current version here.'
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
			"description": "How Parlay Nation handles your information: what we collect when you read, sign in, and save bookmarks, how we use it, and the choices you have.",
			"url": "http://parlaynation.com/privacy-policy",
			"mainEntity": {
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Information We Collect",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "When you create an account or sign in, we receive the basics your sign-in method provides, such as your name and email address, whether you sign in with an email and password, Google, or Facebook. When you use the site, we store the things you save: your bookmarks, favorite bets, and simulator preferences. If you browse as a guest instead, those saves are stored in your own browser rather than in an account. Like most websites, we also receive basic technical information through analytics, such as which pages are visited and the type of device and browser used."
						}
					},
					{
						"@type": "Question",
						"name": "How We Use Your Information",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "We use your information to run your account and keep you signed in, to save and sync your bookmarks and preferences across your visits, to understand which lessons and tools people find useful so we can improve them, and to keep the site secure. We do not sell your personal information."
						}
					},
					{
						"@type": "Question",
						"name": "Cookies and Local Storage",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Parlay Nation uses cookies and browser storage to keep you signed in, remember settings such as your theme, store guest bookmarks and preferences on your device, and measure site usage through Google Analytics. You can clear or block cookies in your browser settings, but some features, such as staying signed in, may stop working."
						}
					},
					{
						"@type": "Question",
						"name": "Who We Share Information With",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Your information is handled by the service providers that run the site: Google Firebase stores accounts and saved data, and Google Analytics processes usage data. We may disclose information if required by law. We do not sell or rent your personal information to anyone."
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
