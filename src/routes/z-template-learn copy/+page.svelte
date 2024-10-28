<script lang="ts">
	import LearnLayout from '$lib/components/layouts/LearnCrapsLayout.svelte';
	import PrevNext from '$lib/components/PrevNext.svelte';
	import PrevNext2 from '$lib/components/PrevNext2.svelte';
	import ContentHeaderOne from '$lib/components/contentPages/Content-h1.svelte';
	import ContentHeaderTwo from '$lib/components/contentPages/Content-h2.svelte';
	import ContentHeaderThree from '$lib/components/contentPages/Content-h3.svelte';
	import ContentTble from '$lib/components/contentPages/ContentTable.svelte';
	import ContentUl from '$lib/components/contentPages/Content-ul-a.svelte';
	import ContentUl2 from '../../lib/components/contentPages/Content-ul-b.svelte';
	import ContentImg from '$lib/components/contentPages/Content-img.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Link from '$lib/components/Link.svelte';
	import Quote from '$lib/components/Quote.svelte';

	let title: string = '';
	let description: string = '';
	let url: string = '';

	let phref: string = '';
	let prev: string = '';
	let nhref: string = '';
	let next: string = '';

	let tblAria: string = '';
	let tblHeaders: string[] = ['', '', '', ''];
	let tblRows: (string | number)[][] = [
		['', '', '', ''],
		['', '', '', '']
	];
	let tblPnts: string[] = ['', '', ''];

	let liAs = [
		{
			title: ':',
			items: ['', '', '', '', '']
		},
		{
			title: ':',
			items: ['', '', '', '']
		},
		{
			title: ':',
			items: ['', '', '']
		}
	];
	let liBs = [
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
		},
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
		},
		{
			title: '',
			subTitle: [''],
			items: ['', '', '', '', '']
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
	<!-- Script Me! -->
	<!-- Script Me! -->
	<!-- Script Me! -->
	<!-- Script Me! -->
</svelte:head>

<LearnLayout>
	<PrevNext {phref} {prev} {nhref} {next} />
	<main aria-label="Main content" class=" flex flex-col my-6">
		<ContentHeaderOne sectionTitle="The Section" title="My Title" />
	</main>
	<PrevNext2 {phref} {prev} {nhref} {next} />
</LearnLayout>
