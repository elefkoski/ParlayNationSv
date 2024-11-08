<script lang="ts">
	import MoreLayout from '$lib/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Contact';
	let description: string =
		'If you have any questions, comments, or concers, contact Parlay Nation so we can hear what you have to say and do what we can do to help.';
	let url: string = 'contact';

	let name = '';
	let email = '';
	let message = '';
	function handleSubmit() {
		// Handle form submission logic
	}
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
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "Contact",
			"description": "If you have any questions, comments, or concers, contact Parlay Nation so we can hear what you have to say and do what we can do to help.",
			"url": "http://parlaynation.com/contact",
			"image": "http://parlaynation.com/images/contact/contact-header.jpg"
		}
	</script>
</svelte:head>

<MoreLayout showContentMenuBox={false}>
	<main aria-label="Main content" class="p-6">
		<div class="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8">
			<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">Contact</h1>

			<form
				class="home-page-body-bg-1 shadow-md rounded px-6 py-8 mb-4 w-full max-w-md"
				on:submit|preventDefault={handleSubmit}
			>
				<div class="mb-4">
					<label class="block text-sm sm:text-base font-bold mb-2" for="name"> Name </label>
					<input
						class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input"
						id="name"
						type="text"
						bind:value={name}
						placeholder="John Doe"
					/>
				</div>

				<div class="mb-4">
					<label class="block text-sm sm:text-base font-bold mb-2" for="email"> Email </label>
					<input
						class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input"
						id="email"
						type="text"
						bind:value={email}
						placeholder="john.doe@example.com"
					/>
				</div>

				<div class="mb-4">
					<label class="block text-sm sm:text-base font-bold mb-2" for="message"> Message </label>
					<textarea
						class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input"
						id="message"
						bind:value={message}
						placeholder="Type your message..."
						rows="5"
					/>
				</div>

				<div class="flex items-center justify-between">
					<button class="btn contact-btn w-full sm:w-auto" type="submit"> Submit </button>
				</div>
			</form>
		</div>
	</main>
</MoreLayout>
