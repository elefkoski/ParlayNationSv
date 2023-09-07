<script>
	import '../../../../app.css';
	import LeftNavMainUl from '$lib/clients/components/structure/LeftNav-main-ul.svelte';
	import Navbar from '$lib/clients/components/structure/Navbar.svelte';
	import MainColumn from '$lib/clients/components/structure/MainColumn.svelte';
	import RightColumn from '$lib/clients/components/structure/RightColumn.svelte';
	import Footer from '$lib/clients/components/structure/Footer.svelte';
	import { onMount } from 'svelte';
	import { enableEventTracking } from '$lib/utils/eventTracking';
	import { enableScrollTracking } from '$lib/utils/scrollTracking';

	onMount(() => {
		enableEventTracking();
		enableScrollTracking();
		sessionStorage.setItem('last_url', window.location.pathname);
	});
	let submenus = [
		{
			title: 'Glossary',
			href: 'glossary'
		},
		{
			title: 'Craps FAQ',
			href: 'faq'
		},
		{
			title: 'Contact',
			href: 'contact'
		},
		{
			title: 'About',
			href: 'about'
		},
		{
			title: 'Site Map',
			href: 'site-map'
		}
	];
</script>

<Navbar />
<div id="parentElement" class=" container mx-auto flex flex-wrap pt-20 dark:text-slate-300">
	<div class="w-full lg:w-1/4 lg:block hidden p-6">
		<div class="h-screen fixed overflow-y-auto pb-40 bg-gray-900 px-10 pt-6">
			<nav id="nav" class="lg:leading-6">
				<div class="flex-grow overscroll-contain">
					<LeftNavMainUl />
					<div class="mt-8">
						<ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
							{#each submenus as submenu (submenu.title)}
								<li>
									<a
										class="block pl-4 -ml-px uppercase border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href={submenu.href}>{submenu.title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
	<div class="w-full lg:w-3/4 flex flex-col">
		<div class="w-full flex flex-col lg:flex-row">
			<div class="w-full lg:w-2/3 p-6">
				<MainColumn>
					<slot />
				</MainColumn>
			</div>
			<div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">
				<RightColumn />
			</div>
		</div>
		<Footer />
	</div>
</div>
