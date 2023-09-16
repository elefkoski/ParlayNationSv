<script lang="ts">
	import EmptyLayout from '$lib/clients/components/layouts/EmptyLayout.svelte';
	import {
		googleSignIn,
		facebookSignIn,
		loginWithEmailPassword,
		registerWithEmailPassword
	} from '$lib/utils/firebase';
	import {
		getAuth,
		setPersistence,
		browserLocalPersistence,
		browserSessionPersistence,
		sendEmailVerification
	} from 'firebase/auth';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const authInstance = getAuth();
	const errorMessage = writable('');
	let agreeToTerms = true;
	let email = '';
	let password = '';
	let showLogin = true;
	let rememberMe = false;
	let showPassword = false;

	async function registerUser(event: SubmitEvent) {
		event.preventDefault();

		if (!agreeToTerms) {
			errorMessage.set('You must agree to the Terms and Conditions.');
			return;
		}

		try {
			const firebaseUser = await registerWithEmailPassword(email, password);

			if (firebaseUser) {
				await sendEmailVerification(firebaseUser);
				errorMessage.set('Registration successful. Please verify your email before logging in.');
			} else {
				errorMessage.set('Error during registration. Please try again.');
			}
		} catch (error) {
			errorMessage.set('An unexpected error occurred during registration.');
			console.error('Error during registration:', error);
		}
	}

	async function loginUser(event: SubmitEvent) {
		event.preventDefault();
		try {
			if (rememberMe) {
				await setPersistence(authInstance, browserLocalPersistence);
			} else {
				await setPersistence(authInstance, browserSessionPersistence);
			}
			const firebaseUser = await loginWithEmailPassword(email, password);
			if (firebaseUser) {
				redirectAfterLogin();
			}
		} catch (error) {
			if (error instanceof Error) {
				errorMessage.set(error.message);
			} else {
				errorMessage.set('An unknown error occurred.');
			}
		}
	}

	async function handleGoogleSignIn() {
		try {
			if (rememberMe) {
				await setPersistence(authInstance, browserLocalPersistence);
			} else {
				await setPersistence(authInstance, browserSessionPersistence);
			}
			const firebaseUser = await googleSignIn();
			if (firebaseUser) {
				redirectAfterLogin();
			}
		} catch (error) {
			if (error instanceof Error) {
				errorMessage.set(error.message);
			} else {
				errorMessage.set('An unknown error occurred during Google sign-in.');
			}
		}
	}

	async function handleFacebookSignIn() {
		try {
			if (rememberMe) {
				await setPersistence(authInstance, browserLocalPersistence);
			} else {
				await setPersistence(authInstance, browserSessionPersistence);
			}
			const firebaseUser = await facebookSignIn();
			if (firebaseUser) {
				redirectAfterLogin();
			}
		} catch (error) {
			if (error instanceof Error) {
				errorMessage.set(error.message);
			} else {
				errorMessage.set('An unknown error occurred during Facebook sign-in.');
			}
		}
	}

	function redirectAfterLogin() {
		goto('/profile');
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<EmptyLayout>
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
						<div class="flex justify-between">
							<label
								class="dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
								for="email"
							>
								Email
							</label>
							<p class="dark:text-gray-400 text-center text-gray-500 text-sm">
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
						<label
							class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
							for="password"
						>
							Password
						</label>
						<div class="relative">
							<div class="mt-2 relative">
								{#if showPassword}
									<input
										autocomplete="current-password"
										bind:value={password}
										class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
										id="password"
										name="password"
										required
										type="text"
									/>
								{:else}
									<input
										autocomplete="current-password"
										bind:value={password}
										class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full"
										id="password"
										name="password"
										required
										type="password"
									/>
								{/if}
							</div>
							<div class="absolute inset-y-0 right-0 flex items-center pr-3">
								<button on:click={togglePasswordVisibility} type="button" class="...">
									<img
										src={showPassword
											? 'src/images/icons/visibility_off_black.svg'
											: 'src/images/icons/visibility_black.svg'}
										alt="Toggle password visibility"
										class="h-5 w-5"
									/>
								</button>
							</div>
						</div>
					</div>
					<div class="flex items-center justify-between">
						<label class="inline-flex items-center">
							<input bind:checked={rememberMe} class="form-checkbox" type="checkbox" />
							<span class="ml-2">Remember me</span>
						</label>
						<div class="text-sm">
							<a
								href="forgot-password"
								class="dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 text-indigo-600"
							>
								Forgot Password?
							</a>
						</div>
					</div>
					<div>
						<button
							class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
							data-track="sign_in"
							type="submit"
						>
							Sign in
						</button>
						<div class="mt-4 flex gap-2">
							<button
								class="bg-blue-600 dark:bg-blue-700 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 font-semibold hover:bg-blue-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
								on:click={handleGoogleSignIn}
							>
								Sign in with Google
							</button>

							<button
								class="bg-blue-800 dark:bg-blue-900 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:outline-offset-2 font-semibold hover:bg-blue-700 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
								on:click={handleFacebookSignIn}
							>
								Sign in with Facebook
							</button>
						</div>
					</div>
				</form>

				{#if $errorMessage}
					<div class="error-message mt-6 text-red-500">
						{$errorMessage}
					</div>
				{/if}
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
						<div class="flex justify-between">
							<label
								class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm"
								for="email"
							>
								Email
							</label>
							<p class="dark:text-gray-400 text-center text-gray-500 text-sm">
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
								>I agree to the <a href="privacy">Privacy Policy</a> and
								<a href="terms">Terms of Service</a>. &lpar;required&rpar;</span
							>
						</label>
					</div>

					<div>
						<button
							class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
							data-track="sign_up"
							type="submit"
						>
							Sign up
						</button>
						<div class="mt-4 flex gap-2">
							<button
								class="bg-blue-600 dark:bg-blue-700 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 font-semibold hover:bg-blue-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
								on:click={handleGoogleSignIn}
							>
								Sign up with Google
							</button>

							<button
								class="bg-blue-800 dark:bg-blue-900 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:outline-offset-2 font-semibold hover:bg-blue-700 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
								on:click={handleFacebookSignIn}
							>
								Sign up with Facebook
							</button>
						</div>
					</div>
				</form>

				{#if $errorMessage}
					<div class="error-message mt-6 text-red-500">
						{$errorMessage}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</EmptyLayout>
