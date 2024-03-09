<script lang="ts">
	import BlogLayout from '$lib/clients/components/layouts/BlogCrapsLayout.svelte';
	import ContentMenuBox from '$lib/clients/components/PageMenuBox.svelte';
	import type { PageMenu } from '$lib/utils/types';
	import BlogIntroParas from '$lib/clients/components/blog/BlogIntroParas.svelte';
	import BlogHeaderOne from '$lib/clients/components/blog/Blog-h1.svelte';
	import BlogHeaderTwo from '$lib/clients/components/blog/Blog-h2.svelte';
	import BlogHeaderH2WOl from '$lib/clients/components/blog/Blog-h2-w-ol.svelte';
	import BlogHeaderTwoMulti from '$lib/clients/components/blog/Blog-h2-multi.svelte';
	import BlogClosingParas from '$lib/clients/components/blog/BlogClosingParas.svelte';
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

	let blogOpening = [
		{
			textParts: [
				{
					text: "p's"
				},
				{
					text: "l's",
					url: 'a-link'
				},
				{
					text: "p's"
				}
			]
		},
		{
			textParts: [
				{
					text: "p's"
				},
				{
					text: "l's",
					url: 'a-link'
				},
				{
					text: "p's"
				}
			]
		}
	];

	let sectionForOl1 = [
		{
			id: 'theId',
			title: 'H2Title',
			para: [{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
			subTitles: ["Sub'1", "Sub'2", "Sub'3", "Sub'4", "Sub'5"],
			subParas: [
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }]
			]
		}
	];

	let sectionForOl2 = [
		{
			id: 'theId',
			title: 'H2Title',
			para: [{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
			subTitles: ["Sub'1", "Sub'2", "Sub'3", "Sub'4", "Sub'5"],
			subParas: [
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }]
			]
		}
	];

	let sectionForOl3 = [
		{
			id: 'theId',
			title: 'H2Title',
			para: [{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
			subTitles: ["Sub'1", "Sub'2", "Sub'3", "Sub'4", "Sub'5"],
			subParas: [
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }]
			]
		}
	];

	let sectionForPlain1 = [
		{
			id: 'theId',
			title: 'H2Title',
			paras: [
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }]
			]
		}
	];

	let sectionForPlain2 = [
		{
			id: 'theId',
			title: 'H2Title',
			paras: [
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }],
				[{ text: "p's" }, { text: "l's", url: 'a-link' }, { text: "p's" }]
			]
		}
	];

	let sectionForMulti1 = [
		{
			id: 'theId',
			title: "The's Title",
			paras: [
				{
					textBlocks: [{ text: "p's" }, { text: "q's" }],
					listTitle: [
						"link'sTitle1 -",
						"link'sTitle2 -",
						"link'sTitle3 -",
						"link'sTitle4 -",
						"link'sTitle5 -"
					],
					listItem: [
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							],
							nestedList: [
								{
									content: [
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										}
									]
								}
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						}
					]
				}
			]
		}
	];

	let sectionForMulti2 = [
		{
			id: 'theId',
			title: "The's Title",
			paras: [
				{
					textBlocks: [{ text: "p's" }],
					listTitle: [
						"link'sTitle1 -",
						"link'sTitle2 -",
						"link'sTitle3 -",
						"link'sTitle4 -",
						"link'sTitle5 -"
					],
					listItem: [
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							],
							nestedList: [
								{
									content: [
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										},
										{
											text: '<span class="text-blue-400">Title -</span> Paragraph'
										}
									]
								}
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						},
						{
							content: [
								{
									text: "t's"
								},
								{
									text: "l's",
									url: 'a-link'
								},
								{ text: "t's" }
							]
						}
					]
				}
			]
		}
	];

	let blogClosing = [
		{
			textParts: [
				{
					text: "p's"
				},
				{
					text: "l's",
					url: 'a-link'
				},
				{
					text: "p's"
				}
			]
		},
		{
			textParts: [
				{
					text: "p's"
				},
				{
					text: "l's",
					url: 'a-link'
				},
				{
					text: "p's"
				}
			]
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
		<BlogHeaderOne sectionTitle="Section Title" title="The Pages Main Title" {pageData} />
		<BlogIntroParas {blogOpening} />
		<BlogImg caption="" {url} img="here-is-an-image" title="ImageTitle" alt="ImageAlt" />
		<div class="lg:hidden">
			<Divider />
			<div class="m-auto md:max-w-md">
				<ContentMenuBox {pageLinks} />
			</div>
		</div>
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionForOl1} />
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionForOl2} />
		<Divider />
		<BlogImg caption="" {url} img="here-is-an-image" title="ImageTitle" alt="ImageAlt" />
		<Divider />
		<BlogHeaderH2WOl blogSectionOl={sectionForOl3} />
		<Divider />
		<BlogHeaderTwo blogSection={sectionForPlain1} />
		<Divider />
		<BlogHeaderTwo blogSection={sectionForPlain2} />
		<Divider />
		<BlogHeaderTwoMulti blogSectionMulti={sectionForMulti1} />
		<Divider />
		<BlogImg caption="" {url} img="here-is-an-image" title="ImageTitle" alt="ImageAlt" />
		<Divider />
		<BlogHeaderTwoMulti blogSectionMulti={sectionForMulti2} />
		<Divider />
		<BlogClosingParas {blogClosing} />
	</main>
</BlogLayout>
