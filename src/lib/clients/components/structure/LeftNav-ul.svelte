<script>
	export let subMenus = [
		{
			title: 'Title One',
			items: ['Link One', 'Link Two', 'Link Three'],
			mainHref: '/',
			href: ['/', '/', '/']
		},
		{
			title: 'Title Two',
			items: ['Link One', 'Link Two', 'Link Three'],
			mainHref: '/',
			href: ['/', '/', '/']
		},
		{
			title: 'Title Three',
			items: ['Link One', 'Link Two', 'Link Three'],
			mainHref: '/',
			href: ['/', '/', '/']
		}
	];
</script>

{#each subMenus as subMenu (subMenu.title)}
	<li class="mt-8 lg:mt-0">
		<h5 class="mt-2 font-semibold text-slate-900 dark:text-slate-200 h-10 flex items-center">
			<a
				class="hover:text-slate-900 dark:hover:text-indigo-900 transform ease-in-out duration-300"
				href={subMenu.mainHref}>{subMenu.title}</a
			>
		</h5>
		<ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
			{#each subMenu.items as item, index (item)}
				<li>
					<a
						class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
						href={subMenu.href[index]}>{item}</a
					>
				</li>
			{/each}
		</ul>
	</li>
{/each}
