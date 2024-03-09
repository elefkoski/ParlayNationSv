<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogH3 from '$lib/clients/components/blog/BlogH3.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	let title: string = 'The Title';
	let description: string = "The's description";
	let url: string = 'the-page-url';

	let pageData: any = {
		title: title,
		description: description,
		pageUrl: url,
		imageUrl: 'src/images/' + url + '/' + url + '-header.webp'
	};

	let pageLinks: PageMenu[] = [
		{
			title: "___'___",
			href: '#_____',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "___'___",
			href: '#_____',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "___'___",
			href: '#_____',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "___'___",
			href: '#_____',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: "___'___",
			href: '#_____',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
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
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.webp'} />
	<script type="application/ld+json">
		///Schema needs to be added
	</script>
</svelte:head>
<BlogLayout {pageLinks}>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<BlogHeaderOne sectionTitle="sectionTitle" title="pageTitle's" {pageData} />
		<section aria-label="Opening paragraphs">
			<p class="pb-4">OpenOne</p>
			<p class="pb-4">OpenTwo</p>
		</section>
		<Divider />
		<BlogImg caption="" {url} img="here-is-an-image" title="ImageTitle" alt="ImageAlt" />
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="sectionOl" title="TitleOfSection">
			<p class="pb-4">para1</p>
			<ol>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="sectionMulti" title="TitleOfSection">
			<p class="pb-4">para1</p>
			<p>para2</p>
			<ol>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
			</ol>
			<p class="pt-4">para3</p>
			<ol>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
			</ol>
			<p class="pt-4">para4</p>
			<ol>
				<li><span>W</span>Para</li>
				<li><span>W</span>Para</li>
			</ol>
		</BlogH2>
		<Divider />
		<BlogH2 id="sectionH3s" title="TitleOfSection">
			<p class="pb-4">para1</p>
			<BlogH3 title="Bets Made With the Stickperson">
				<p class="pb-4">para</p>
				<p class="pb-4">para</p>
			</BlogH3>
			<BlogH3 title="Bets With the Base Dealer">
				<p class="pb-4">para2</p>
				<p class="pb-4">para3</p>
				<ol class="pb-4">
					<li>
						<span>W</span>Para
						<ul>
							<li><span>W</span>Para</li>
							<li><span>W<span>Para</span></span></li>
							<li><span>W<span>Para</span></span></li>
						</ul>
					</li>
					<li><span>W</span>Para</li>
					<li><span>W</span>Para</li>
				</ol>
			</BlogH3>
		</BlogH2>
		<Divider />
		<section aria-label="Closing paragraphs">
			<p class="pb-4">closing1</p>
			<p>closing2</p>
		</section>
	</main>
</BlogLayout>
