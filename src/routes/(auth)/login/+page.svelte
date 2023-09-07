<script lang="ts">
	import LoginLayout from '$lib/clients/components/layouts/LoginLayout.svelte';
	import { auth } from './firebaseConfig'; // Assuming you have a firebaseConfig file
	import { writable } from 'svelte/store';
	import { user } from '$lib/utils/store';
	const errorMessage = writable('');
	let agreeToTerms = true;
	let email = '';
	let password = '';

	async function loginUser(event: SubmitEvent) {
		event.preventDefault();
		try {
			const userCredential = await auth.signInWithEmailAndPassword(email, password);
			const firebaseUser = userCredential.user;
			user.set(firebaseUser); // Store the user in your svelte store
			// Navigate to another page or do other tasks here
		} catch (error) {
			errorMessage.set(error.message);
		}
	}

	async function registerUser(event: SubmitEvent) {
		event.preventDefault();
		if (!agreeToTerms) {
			errorMessage.set('You must agree to the Terms and Conditions.');
			return;
		}
		try {
			const userCredential = await auth.createUserWithEmailAndPassword(email, password);
			const firebaseUser = userCredential.user;
			user.set(firebaseUser);
			// Send email verification, navigate or do other tasks
		} catch (error) {
			errorMessage.set(error.message);
		}
	}
</script>

<LoginLayout>
	{#if showLogin}
		<div class="flex flex-col justify-center lg:px-8 min-h-full px-6 py-12">
			<div class="sm:max-w-sm sm:mx-auto sm:w-full">
				<img
					alt="Parlay Nation"
					class="h-20 mb-8 mx-auto w-auto"
					src="src/images/assets/parlay-nation-logo_1048x298.webp"
				/>
				<h2
					class="dark:text-gray-100 font-bold leading-9 text-2xl text-center text-gray-900 tracking-tight"
				>
					Sign in to Parlay Nation
				</h2>
			</div>

			<div class="mt-10 sm:max-w-sm sm:mx-auto sm:w-full">
				<form action="" class="space-y-6" method="POST" on:submit={loginUser}>
					<div>
						<label
							class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
							for="email"
						>
							Email
						</label>
						<div class="mt-2">
							<input
								autocomplete="email"
								bind:value={email}
								class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
								id="email"
								name="email"
								required
								type="email"
							/>
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between">
							<label
								class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
								for="password"
							>
								Password
							</label>
							<div class="text-sm">
								<a
									href="/"
									class="dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 text-indigo-600"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div class="mt-2">
							<input
								autocomplete="current-password"
								bind:value={password}
								class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
								id="password"
								name="password"
								required
								type="password"
							/>
						</div>
					</div>
					<div>
						<label class="inline-flex items-center">
							<input bind:checked={rememberMe} class="form-checkbox" type="checkbox" />
							<span class="ml-2">Remember me</span>
						</label>
					</div>
					<div>
						<button
							class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
							data-track="sign_in"
							type="submit"
						>
							Sign in
						</button>
					</div>
				</form>

				{#if $errorMessage}
					<div class="error-message mt-6 text-red-500">
						{$errorMessage}
					</div>
				{/if}

				<p class="dark:text-gray-400 mt-10 text-center text-gray-500 text-sm">
					Not a member?
					<span
						class="cursor-pointer dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 leading-6 text-indigo-600"
						data-track="toggle_to_sign_up_here"
						on:click={() => (showLogin = false)}
						on:keydown={() => (showLogin = false)}
						tabindex="0"
						role="button"
					>
						Sign up here
					</span>
				</p>
			</div>
		</div>
	{:else}
		<div class="flex flex-col justify-center lg:px-8 min-h-full px-6 py-12">
			<div class="sm:max-w-sm sm:mx-auto sm:w-full">
				<img
					alt="Parlay Nation"
					class="h-20 mb-8 mx-auto w-auto"
					src="src/images/assets/parlay-nation-logo_1048x298.webp"
				/>
				<h2
					class="dark:text-gray-100 font-bold leading-9 text-2xl text-center text-gray-900 tracking-tight"
				>
					Sign up to continue using Parlay Nation for free!
				</h2>
			</div>

			<div class="mt-10 sm:max-w-sm sm:mx-auto sm:w-full">
				<form action="" class="space-y-6" method="POST" on:submit={registerUser}>
					<div>
						<label
							class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
							for="email"
						>
							Email
						</label>
						<div class="mt-2">
							<input
								autocomplete="email"
								bind:value={email}
								class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
								id="email"
								name="email"
								type="email"
								required
							/>
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between">
							<label
								class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
								for="password"
							>
								Password
							</label>
							<div class="text-sm">
								<a
									class="dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 text-indigo-600"
									href="/"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div class="mt-2">
							<input
								autocomplete="current-password"
								bind:value={password}
								class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
								id="password"
								name="password"
								required
								type="password"
							/>
						</div>
					</div>
					<div>
						<label class="inline-flex items-center">
							<input bind:checked={agreeToTerms} class="form-checkbox" type="checkbox" />
							<span class="ml-2 text-xs"
								>I agree to the <a href="/privacy">Privacy Policy</a> and
								<a href="/terms">Terms of Service</a>. &lpar;required&rpar;</span
							>
						</label>
					</div>

					<div>
						<button
							class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
							data-track="sign_up"
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</form>

				{#if $errorMessage}
					<div class="error-message mt-6 text-red-500">
						{$errorMessage}
					</div>
				{/if}

				<p class="dark:text-gray-400 mt-10 text-center text-gray-500 text-sm">
					Already a member?
					<span
						class="cursor-pointer dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 leading-6 text-indigo-600"
						data-track="toggle_to_sign_in"
						on:click={() => (showLogin = true)}
						on:keydown={() => (showLogin = true)}
						role="button"
						tabindex="0"
					>
						Sign In
					</span>
				</p>
			</div>
		</div>
	{/if}
</LoginLayout>
