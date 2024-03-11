<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogHeaderOne from '$lib/clients/components/blog/BlogH1.svelte';
	import BlogH2 from '$lib/clients/components/blog/BlogH2.svelte';
	import BlogH3 from '$lib/clients/components/blog/BlogH3.svelte';
	import BlogImg from '$lib/clients/components/blog/Blog-img.svelte';
	import Divider from '$lib/clients/components/Divider.svelte';
	import Link from '$lib/clients/components/Link.svelte';

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
			title: 'LinkTitle1',
			href: '#linkRef1',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'LinkTitle2',
			href: '#linkRef2',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'LinkTitle3',
			href: '#linkRef3',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'LinkTitle4',
			href: '#linkRef4',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'LinkTitle5',
			href: '#linkRef5',
			iconD: ['M0 0h24v24H0V0z', 'M10 17l5-5-5-5v10z'],
			iconFills: ['none', 'orange']
		},
		{
			title: 'LinkTitle6',
			href: '#linkRef6',
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
		<BlogImg caption="" {url} img="image" title="ImageTitle" alt="ImageAlt" />
		<Divider />
		<BlogImg caption="" {url} img="image" title="ImageTitle" alt="ImageAlt" />
		<Divider />
		<BlogImg caption="" {url} img="image" title="ImageTitle" alt="ImageAlt" />
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogH2 id="linkRef1" title="LinkTitle1">
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
		<BlogH2 id="linkRef2" title="LinkTitle2">
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
		<BlogH2 id="linkRef3" title="LinkTitle3">
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
		<BlogH2 id="linkRef4" title="LinkTitle4">
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
		<BlogH2 id="linkRef5" title="LinkTitle5">
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
		<BlogH2 id="linkRef6" title="LinkTitle6">
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
		<section aria-label="Closing paragraphs">
			<p class="pb-4">closing1</p>
			<p>closing2</p>
		</section>
	</main>
</BlogLayout>
