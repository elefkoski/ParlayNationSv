<script lang="ts">
	import LeftNavMainUl from '$lib/components/structure/LeftNavMainMenu.svelte';
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
			title: 'Privacy Policy',
			href: 'privacy-policy'
		},
		{
			title: 'Terms of Service',
			href: 'terms-of-service'
		},
		{
			title: 'Site Map',
			href: 'site-map'
		}
	];
</script>

<div class="h-screen fixed overflow-y-auto pb-40 left-nav-bg px-10 pt-6">
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
