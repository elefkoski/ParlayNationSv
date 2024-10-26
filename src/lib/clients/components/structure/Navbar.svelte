<script lang="ts">
	import NavbarDrawer from './NavbarDrawer.svelte';
	import { goto } from '$app/navigation';
	import { user, type User } from '$lib/utils/store';
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { auth } from '$lib/utils/firebase';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let current_user: User | null;
	let isAuthenticated = false;
	let profilePicture: string = '';
	let currentTheme: string;

	user.subscribe((value) => {
		current_user = value;
		current_user = { ...value, profilePicture };
	});

	theme.subscribe((value) => {
		currentTheme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});
	// Apply the initial theme on mount
	onMount(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	onAuthStateChanged(auth, (firebaseUser) => {
		isAuthenticated = firebaseUser ? true : false;
		if (firebaseUser) {
			profilePicture = firebaseUser.photoURL || 'https://picsum.photos/100/100';
			const userId = firebaseUser.uid;
			let displayName = firebaseUser.displayName;
			const email = firebaseUser.email || 'N/A';

			if (!displayName && email) {
				const index = email.indexOf('@');
				displayName = index !== -1 ? email.substring(0, index) : email;
			}
			user.set({
				id: userId,
				display_name: displayName || 'Anonymous',
				email: email,
				profilePicture: profilePicture
			});
		} else {
			user.set(null);
		}
	});

	async function logout() {
		try {
			await signOut(auth);
			goto('/');
		} catch (error) {
			console.error('There was an error logging out:', error);
		}
	}

	function navigateToLogin(event: any) {
		event.preventDefault();
		goto('/login');
	}

	function handleThemeToggle() {
		toggleTheme();
	}
</script>

<div class="relative z-20">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<nav class="w-full navbar bg-base-300 dark:bg-gray-950 py-4 fixed top-0 h-20">
			<div class="container flex justify-center md:ml-8 md:mr-0 md:justify-start lg:mx-16">
				<div class="absolute left-16 md:relative lg:hidden">
					<NavbarDrawer />
				</div>
				<div class="ml-8 md:absolute md:left-32 lg:ml-0">
					<a data-track="parlay-nation-logo" href="/">
						<img
							class="w-auto h-12"
							src="src/images/assets/parlay-nation-logo-dm_1048x298.webp"
							alt="Parlay Nation Green Logo"
						/>
					</a>
				</div>
			</div>
			<!-- Right elements -->
			<div class="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
				<div class="flex-none hidden md:block">
					<div class="join flex items-center">
						<div class="indicator mr-2 h-10">
							<button
								class="btn join-item dark:bg-gray-700 dark:text-gray-300 min-h-0 h-10"
								data-track="theme-toggle"
								on:click={handleThemeToggle}
							>
								{#if currentTheme === 'dark'}
									<img
										src="src/images/assets/sun-white-icon.png"
										alt="Sun Icon 1"
										class="w-6 h-6"
									/>
									<img
										src="src/images/assets/sun-black-icon.png"
										alt="Sun Icon 2"
										class="w-6 h-6 hidden"
									/>
								{:else}
									<img
										src="src/images/assets/moon-white-icon.png"
										alt="Moon Icon 1"
										class="w-6 h-6"
									/>
									<img
										src="src/images/assets/moon-black-icon.png"
										alt="Moon Icon 2"
										class="w-6 h-6 hidden"
									/>
								{/if}
							</button>
							<div>
								<div>
									<input
										class="input input-bordered join-item dark:bg-gray-700 dark:text-gray-300 h-10"
										placeholder="Search..."
									/>
								</div>
							</div>
							<div class="indicator mr-2 h-10">
								<button class="btn join-item dark:bg-gray-700 dark:text-gray-300 min-h-0 h-10"
									>Search</button
								>
							</div>
							<ul class="menu menu-horizontal px-1 dark:text-gray-200">
								{#if isAuthenticated}
									<!-- User is logged in -->
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
											<ul class="p-2 bg-base-100 dark:bg-gray-700">
												<li><a href="profile">Profile</a></li>
												<li><a href="/" on:click={logout}>Sign Out</a></li>
											</ul>
										</details>
									</li>
								{:else}
									<!-- User is not logged in -->
									<li><a href="login" on:click={navigateToLogin}>Sign In</a></li>
								{/if}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</div>
