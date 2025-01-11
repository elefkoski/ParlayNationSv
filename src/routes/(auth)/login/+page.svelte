<script lang="ts">
	import EmptyLayout from '$lib/components/layouts/EmptyLayout.svelte';
	import { goto } from '$app/navigation';
	import {
		googleSignIn,
		facebookSignIn,
		loginWithEmailPassword,
		registerWithEmailPassword
	} from '$lib/utils/firebase';
	import {
		setPersistence,
		browserLocalPersistence,
		browserSessionPersistence,
		sendEmailVerification
	} from 'firebase/auth';
	import { getAuth } from 'firebase/auth';
	import { writable } from 'svelte/store';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	const authInstance = getAuth();
	const errorMessage = writable<string>('');
	const isProcessing = writable<boolean>(false); // To prevent multiple clicks

	let email = '';
	let password = '';
	let rememberMe = false;
	let agreeToTerms = true;
	let showPassword = false;
	let isLoginMode = true;

	function setRedirectPath() {
		const currentPath = get(page).url.pathname;

		if (currentPath === '/login') {
			console.log('Already on login page. Skipping redirectAfterLogin set.');
			return;
		}

		localStorage.setItem('redirectAfterLogin', currentPath);
		console.log('Set redirectAfterLogin:', currentPath);
	}

	// Centralized login function
	async function handleLogin(authCallback: () => Promise<any>) {
		errorMessage.set('');
		isProcessing.set(true);
		try {
			await setPersistence(
				authInstance,
				rememberMe ? browserLocalPersistence : browserSessionPersistence
			);
			setRedirectPath(); // Set redirect path before login
			const firebaseUser = await authCallback();
			if (firebaseUser) {
				const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
				localStorage.removeItem('redirectAfterLogin'); // Clear redirect after use
				goto(redirectPath);
			}
		} catch (error) {
			handleAuthError(error);
		} finally {
			isProcessing.set(false);
		}
	}

	// Register with email and password
	async function registerUser(event: SubmitEvent) {
		event.preventDefault();
		if (!agreeToTerms) {
			errorMessage.set('You must agree to the Terms and Conditions.');
			return;
		}
		errorMessage.set('');
		isProcessing.set(true);
		try {
			const firebaseUser = await registerWithEmailPassword(email, password);
			if (firebaseUser) {
				await sendEmailVerification(firebaseUser);
				errorMessage.set('Registration successful. Please verify your email before logging in.');
				isLoginMode = true; // Switch back to login mode after registration
			}
		} catch (error) {
			handleAuthError(error);
		} finally {
			isProcessing.set(false);
		}
	}

	// Login with email and password
	async function loginUser(event: SubmitEvent) {
		event.preventDefault();
		await handleLogin(() => loginWithEmailPassword(email, password));
	}

	// Google Sign-In
	async function handleGoogleSignIn() {
		await handleLogin(googleSignIn);
	}

	// Facebook Sign-In
	async function handleFacebookSignIn() {
		await handleLogin(facebookSignIn);
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	function handleAuthError(error: any) {
		if (error instanceof Error) {
			errorMessage.set(error.message);
		} else {
			errorMessage.set('An unknown error occurred.');
		}
	}
</script>

<EmptyLayout>
	{#if isLoginMode}
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
									on:click={() => (isLoginMode = false)}
									on:keydown={() => (isLoginMode = false)}
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
									on:click={() => (isLoginMode = true)}
									on:keydown={() => (isLoginMode = true)}
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
