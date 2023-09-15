<script lang="ts">
	import SingleColumnLayout from '$lib/clients/components/layouts/SingleColumnLayout.svelte';

	let title: string = '';
	let description: string = '';
	let url: string = '';
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
	<!--Script Me-->
</svelte:head>

<SingleColumnLayout>
	<main aria-label="Main content" class=" flex flex-col my-6">
		<div>1</div>
		<div>2</div>
	</main>
</SingleColumnLayout>
