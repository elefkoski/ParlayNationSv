<script lang="ts">
	import SingleColumnLayout from '$lib/clients/components/layouts/SingleColumnLayout.svelte';

	let title: string = '';
	let description: string = '';
	let url: string = '';

	let sections = [
		{
			title: 'The First Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Second Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Third Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fourth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fifth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		}
	];
	let sections2 = [
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		}
	];
	let sections3 = [
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		},
		{
			title: 'A Title',
			href: '/',
			description:
				'This is going to be the not so very long description used to talk about the page.'
		}
	];
	let sections4 = [
		{
			title: 'The First Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Second Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Third Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fourth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fifth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fifth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		},
		{
			title: 'The Fifth Headline Should Be Important.',
			description:
				'Here is some text that I will use to fill in the space in this box for this article.'
		}
	];
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
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
</svelte:head>

<SingleColumnLayout>
	<main aria-label="Main content">
		<section aria-label="Section 1" class="grid grid-cols-1 lg:grid-cols-8 gap-x-8 p-6">
			<div class="card bg-base-100 shadow-xl lg:col-span-5">
				<div class="w-full h-auto">
					<figure>
						<img class="w-full" src="https://picsum.photos/800/400" alt="Shoes" />
					</figure>
				</div>
				<div class="card-body">
					<h2 class="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<a
							href="/"
							class="px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300"
						>
							Read Now
						</a>
					</div>
				</div>
			</div>
			<div class="pt-8 lg:pt-0 lg:col-span-3">
				<h3 class="border-b-4 border-red-500 text-2xl font-bold pb-2 mb-4">Featured Posts</h3>
				{#each sections as section (title)}
					<div class="border-slate-11 border-b-2 pb-3 mb-4">
						<h4 class="border-red-400 font-bold">{section.title}</h4>
						<p>{section.description}</p>
					</div>
				{/each}
			</div>
		</section>
		<section aria-label="Section 2" class="p-6">
			<div class="flex flex-row pb-4">
				<h3 class="text-2xl font-bold pr-2">This Other Section</h3>
				<span class="border-b-2 border-yellow-400 flex-grow" />
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
				{#each sections2 as section (section.title)}
					<div class="card bg-base-100 shadow-xl">
						<div class="w-full h-auto">
							<figure>
								<img class="w-full" src="https://picsum.photos/400/400" alt="Shoes" />
							</figure>
						</div>
						<div class="card-body p-4 lg:p-8">
							<h2 class="card-title">{section.title}</h2>
							<p>{section.description}</p>
							<div class="card-actions justify-end">
								<a
									href={section.href}
									class="px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300"
								>
									Read Now
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
		<section aria-label="Section 3" class="p-6">
			<div class="flex flex-row pb-4">
				<h3 class="text-2xl font-bold pr-2">Another Section</h3>
				<span class="border-b-2 border-indigo-400 flex-grow" />
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{#each sections3 as section (title)}
					<div class="card card-side bg-base-100 shadow-xl">
						<figure>
							<img src="https://picsum.photos/300/300" alt="Movie" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">{section.title}</h2>
							<p>{section.description}</p>
							<div class="card-actions justify-end">
								<a
									href={section.href}
									class="px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300"
								>
									Read Now
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
		<section aria-label="Section 4" class="grid grid-cols-1 lg:grid-cols-8 gap-x-8 p-6">
			<div class="card bg-base-100 shadow-xl lg:col-span-4">
				<div class="w-full h-auto">
					<figure>
						<img class="w-full" src="https://picsum.photos/600/400" alt="Shoes" />
					</figure>
				</div>
				<div class="card-body">
					<h2 class="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<a
							href="/"
							class="px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300"
						>
							Read Now
						</a>
					</div>
				</div>
			</div>
			<div class="pt-8 lg:pt-0 lg:col-span-4">
				<h3 class="border-b-4 border-green-500 text-2xl font-bold pb-2 mb-4">
					Some Other Featured
				</h3>
				{#each sections4 as section (title)}
					<div class="border-slate-11 border-b-2 pb-3 mb-4">
						<h4 class="border-red-400 font-bold">{section.title}</h4>
						<p>{section.description}</p>
					</div>
				{/each}
			</div>
		</section>
	</main>
</SingleColumnLayout>
