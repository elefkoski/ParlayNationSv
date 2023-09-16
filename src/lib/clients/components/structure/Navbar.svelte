<script lang="ts">
	import { goto } from '$app/navigation';
	import { user, type User } from '$lib/utils/store';
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { auth } from '$lib/utils/firebase';

	let current_user: User | null;
	let isAuthenticated = false;
	let profilePicture: string = '';

	user.subscribe((value) => {
		current_user = value;
		current_user = { ...value, profilePicture };
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
</script>

<div class="drawer z-20">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<nav class="w-full navbar bg-base-300 dark:bg-gray-950 py-4 fixed top-0">
			<div
				class="absolute left-4 top-1/2 transform -translate-y-1/2 md:relative md:left-0 md:top-7 lg:hidden z-50"
			>
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
			<!-- Container for logo -->
			<div class="container mx-auto flex justify-center md:justify-between lg:mx-16">
				<!-- Logo -->
				<div>
					<a data-track="parlay-nation-logo" href="/">
						<img
							class="w-auto h-12"
							src="src/images/assets/parlay-nation-logo-dm_1048x298.webp"
							alt="Parlay Nation Green Logo"
						/>
					</a>
				</div>
			</div>
			<!-- Other elements -->
			<div class="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
				<div class="flex-none hidden md:block">
					<div class="join flex items-center">
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
		</nav>
	</div>
	<div class="drawer-side z-30">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 min-h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a href="/">Sidebar Item 1</a></li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
