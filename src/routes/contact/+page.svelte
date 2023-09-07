<script lang="ts">
	import MoreLayout from '$lib/clients/components/layouts/MoreCrapsLayout.svelte';

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
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
	<!-- Script Me -->
</svelte:head>

<MoreLayout>
	<main
		aria-label="Main content"
		class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6"
	>
		<div
			class="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
		>
			<h1
				class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100"
			>
				Contact
			</h1>

			<form
				class="bg-white dark:bg-gray-700 shadow-md rounded px-6 py-8 mb-4 w-full max-w-md"
				on:submit|preventDefault={handleSubmit}
			>
				<div class="mb-4">
					<label
						class="block text-gray-700 dark:text-gray-200 text-sm sm:text-base font-bold mb-2"
						for="name"
					>
						Name
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						bind:value={name}
						placeholder="John Doe"
					/>
				</div>

				<div class="mb-4">
					<label
						class="block text-gray-700 dark:text-gray-200 text-sm sm:text-base font-bold mb-2"
						for="email"
					>
						Email
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						bind:value={email}
						placeholder="john.doe@example.com"
					/>
				</div>

				<div class="mb-4">
					<label
						class="block text-gray-700 dark:text-gray-200 text-sm sm:text-base font-bold mb-2"
						for="message"
					>
						Message
					</label>
					<textarea
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
						id="message"
						bind:value={message}
						placeholder="Type your message..."
						rows="5"
					/>
				</div>

				<div class="flex items-center justify-between">
					<button class="btn btn-primary dark:btn-dark w-full sm:w-auto" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	</main>
</MoreLayout>
