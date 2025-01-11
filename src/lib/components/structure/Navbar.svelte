<script lang="ts">
	console.log('Navbar component loading');
	import NavbarDrawer from './NavbarDrawer.svelte';
	import { goto } from '$app/navigation';
	import { logout, handleAuthStateChange, hasUserLoaded } from '$lib/utils/auth';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { user } from '$lib/utils/userData';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	let current_user: any = null;
	let isAuthenticated = false;
	let profilePicture: string = 'https://picsum.photos/100';

	onMount(() => {
		console.log('Entering Navbar Mount');

		localStorage.setItem('redirectAfterLogin', get(page).url.pathname);
		console.log('Redirect path saved:', get(page).url.pathname);

		console.log('Current User: ', current_user);
		const unsubscribe = user.subscribe((value) => {
			console.log('User value:', value);
			current_user = value;

			hasUserLoaded.set(true);
			isAuthenticated = !!value;
			profilePicture = value?.profile?.profilePicture || 'https://picsum.photos/100';
		});

		handleAuthStateChange();

		return () => unsubscribe();
	});

	function navigateToLogin(event: any) {
		event.preventDefault();
		goto('/login');
	}
	function handleThemeToggle() {
		toggleTheme();
	}

	console.log('Navbar component loaded');
</script>

<div class="relative z-20">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<nav class="w-full navbar top-nav-bg py-4 fixed top-0 h-20">
			<div class="container flex justify-center md:ml-8 md:mr-0 md:justify-start lg:mx-16">
				<div class="absolute left-16 md:relative lg:hidden">
					<NavbarDrawer />
				</div>
				<div class="ml-8 md:absolute md:left-32 lg:ml-0">
					<a data-track="parlay-nation-logo" href="/">
						{#if $theme === 'dark'}
							{#if typeof window !== 'undefined' && window.innerWidth >= 768}
								<img
									class="w-auto h-12"
									src="src/images/assets/parlay-nation-logo-dm_1048x298.webp"
									alt="Parlay Nation Dark Mode Large Screen Logo"
								/>
							{:else}
								<img
									class="w-auto h-12"
									src="src/images/assets/parlay-nation-logo-dm_524x149.webp"
									alt="Parlay Nation Dark Mode Small Screen Logo"
								/>
							{/if}
						{:else if typeof window !== 'undefined' && window.innerWidth >= 768}
							<img
								class="w-auto h-12"
								src="src/images/assets/parlay-nation-logo_1048x298.webp"
								alt="Parlay Nation Light Mode Large Screen Logo"
							/>
						{:else}
							<img
								class="w-auto h-12"
								src="src/images/assets/parlay-nation-logo_524x149.webp"
								alt="Parlay Nation Light Mode Small Screen Logo"
							/>
						{/if}
					</a>
				</div>
			</div>
			<!-- Right elements -->
			<div class="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
				<div class="flex-none hidden md:block">
					<div class="join flex items-center">
						<div class="indicator mr-2 h-10">
							<button
								class="btn join-item search min-h-0 h-10"
								data-track="theme-toggle"
								on:click={handleThemeToggle}
							>
								{#if $theme === 'dark'}
									<img
										src="src/images/assets/sun-white-icon.png"
										alt="Sun Icon 1"
										class="w-6 h-6"
									/>
								{:else}
									<img
										src="src/images/assets/moon-black-icon.png"
										alt="Moon Icon 2"
										class="w-6 h-6"
									/>
								{/if}
							</button>
							<div>
								<div>
									<input
										class="input input-bordered join-item search h-10 placeholder md:w-32 lg:w-48"
										placeholder="Search..."
									/>
								</div>
							</div>
							<div class="indicator mr-2 h-10">
								<button class="btn join-item search min-h-0 h-10">Search</button>
							</div>
							<ul class="menu menu-horizontal px-1 sign-in">
								{#if isAuthenticated}
									<li>
										<img
											src={profilePicture}
											alt="User Avatar"
											class="user-avatar w-10 h-10 rounded-full object-cover p-0"
										/>
									</li>
									<li>
										<details>
											<summary> More </summary>
											<ul class="p-2 profile-menu">
												<li><a href="profile">Profile</a></li>
												<li><button on:click={logout}>Sign Out</button></li>
											</ul>
										</details>
									</li>
								{:else}
									<li><button on:click={navigateToLogin}>Sign In</button></li>
								{/if}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</div>
