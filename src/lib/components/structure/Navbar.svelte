<script lang="ts">
	console.log('Navbar.svelte is being loaded');
	import NavbarDrawer from './NavbarDrawer.svelte';
	import { goto } from '$app/navigation';
	import {
		crapsSimulatorPreferences,
		resetToDefaultPreferences,
		user,
		type User
	} from '$lib/utils/store';
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { auth, db } from '$lib/utils/firebase';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { doc, getDoc } from 'firebase/firestore';
	//import { onMount } from 'svelte';

	let current_user: User | null;
	let isAuthenticated = false;
	let profilePicture: string = '';

	user.subscribe((value) => {
		console.log('Entering user.subscribe() in Navbar.svelte');
		current_user = { ...value, profilePicture };
		console.log('current_user:', current_user);
		console.log('Leaving user.subscribe() in Navbar.svelte');
	});

	// Apply the initial theme on mount
	// onMount(() => {
	//	window.scrollTo({ top: 0, behavior: 'smooth' });
	//});

	// Apply theme to document
	$: if (typeof document !== 'undefined') {
		console.log('Applying theme to document');
		document.documentElement.setAttribute('data-theme', $theme);
		console.log('Theme: ', $theme, 'applied to document');
	}

	onAuthStateChanged(auth, async (firebaseUser) => {
		console.log('Entering onAuthStateChanged() in Navbar.svelte');
		isAuthenticated = firebaseUser ? true : false;
		console.log('isAuthenticated:', isAuthenticated);
		if (firebaseUser) {
			profilePicture = firebaseUser.photoURL || 'https://picsum.photos/100/100';
			const userId = firebaseUser.uid;
			let displayName = firebaseUser.displayName;
			const email = firebaseUser.email || 'N/A';

			// Fallback to email if no display name is set
			if (!displayName && email) {
				const index = email.indexOf('@');
				displayName = index !== -1 ? email.substring(0, index) : email;
			}
			// Fetch and apply user preferences from Firestore
			try {
				const docRef = doc(db, 'users', userId);
				const userDoc = await getDoc(docRef);

				if (userDoc.exists()) {
					const userPreferences = userDoc.data()?.crapsSimulator;
					if (userPreferences) {
						console.log('User preferences retrieved from Firebase:', userPreferences);

						// Update the local store with the user's preferences
						crapsSimulatorPreferences.set(userPreferences);
					} else {
						console.warn('No preferences found for this user. Using defaults.');
					}
				} else {
					console.warn('No document found for this user in Firestore. Using defaults.');
				}
			} catch (error) {
				console.error('Error fetching user preferences from Firestore:', error);
			}
			user.set({
				id: userId,
				display_name: displayName || 'Anonymous',
				email: email,
				profilePicture: profilePicture
			});
		} else {
			resetToDefaultPreferences();
			user.set(null);
		}
		console.log('Leaving onAuthStateChanged() in Navbar.svelte');
	});

	async function logout() {
		console.log('Entering logout()');
		try {
			await signOut(auth);
			resetToDefaultPreferences();
			console.log('User has been logged out');
			window.location.reload();
		} catch (error) {
			console.error('There was an error logging out:', error);
		}
		console.log('Leaving logout()');
	}

	function navigateToLogin(event: any) {
		console.log('Entering navigateToLogin()');
		event.preventDefault();
		goto('/login');
		console.log('Leaving navigateToLogin()');
	}

	function handleThemeToggle() {
		console.log('Entering handleThemeToggle()');
		toggleTheme();
		console.log('Leaving handleThemeToggle()');
	}
	console.log('Navbar.svelte has been loaded');
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
											<ul class="p-2 profile-menu">
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
