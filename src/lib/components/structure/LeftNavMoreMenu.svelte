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

<nav id="nav" class="lg:leading-6">
	<div class="flex-grow overscroll-contain">
		<LeftNavMainUl />
		<div class="mt-8">
			<ul class="space-y-6 lg:space-y-2 border-l border-transparent left-nav-vert-bars">
				{#each submenus as submenu (submenu.title)}
					<li>
						<a class="block pl-4 -ml-px uppercase border-l left-nav-more-menu" href={submenu.href}
							>{submenu.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
