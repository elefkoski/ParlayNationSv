<script>
	export let subMenus = [
		{
			title: 'Title One',
			items: ['Link One', 'Link Two', 'Link Three'],
			href: ['/', '/', '/']
		},
		{
			title: 'Title Two',
			items: ['Link One', 'Link Two', 'Link Three'],
			href: ['/', '/', '/']
		},
		{
			title: 'Title Three',
			items: ['Link One', 'Link Two', 'Link Three'],
			href: ['/', '/', '/']
		}
	];
</script>

{#each subMenus as subMenu (subMenu.title)}
	<li class="mt-8 lg:mt-0">
		<h5 class="mt-2 font-semibold left-nav-practice-header-text h-10 flex items-center">
			{subMenu.title}
		</h5>
		<ul class="space-y-6 lg:space-y-2 border-l left-nav-menu-left-border">
			{#each subMenu.items as item, index (item)}
				<li>
					<a
						data-track="l-nav-submenu-{subMenu.href[index]}"
						class="block border-l pl-4 -ml-px left-nav-menu-text"
						href={subMenu.href[index]}>{item}</a
					>
				</li>
			{/each}
		</ul>
	</li>
{/each}
