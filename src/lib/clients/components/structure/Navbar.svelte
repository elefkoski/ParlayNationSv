<script lang="ts">
	import { goto } from '$app/navigation';
	import { user, type User } from '$lib/utils/store';
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { auth } from '$lib/utils/firebase';

	let current_user: User | null;
	let isAuthenticated = false;
	let profilePicture = 'https://picsum.photos/100/100';

	user.subscribe((value) => {
		current_user = value;
		//console.log('Navbar current user:', current_user);
	});

	onAuthStateChanged(auth, (firebaseUser) => {
		console.log('Firebase User: ', firebaseUser);
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
				email: email
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

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<nav class="w-full navbar bg-base-300 dark:bg-gray-950 py-4 fixed top-0 z-20">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="container flex justify-between mx-auto">
				<div class="btn btn-ghost dark:text-white normal-case text-xl">
					<a href="/">ParlayNation</a>
				</div>
				<div class="flex-none hidden md:block">
					<div class="join">
						<div>
							<div>
								<input
									class="input input-bordered join-item dark:bg-gray-700 dark:text-gray-300"
									placeholder="Search..."
								/>
							</div>
						</div>
						<div class="indicator mr-2">
							<button class="btn join-item dark:bg-gray-700 dark:text-gray-300">Search</button>
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
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a href="/">Sidebar Item 1</a></li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
		<ul class="menu menu-horizontal px-1 md:flex hidden dark:text-gray-200">
			<li><a href="craps">Learn</a></li>
			<li><a href="practice">Practice</a></li>
			<li><a href="craps-simulator">Simulator</a></li>
			<li><a href="craps-calculators">Calculators</a></li>
			<li><a href="craps-blog">Blog</a></li>
		</ul>
	</div>
</div>
