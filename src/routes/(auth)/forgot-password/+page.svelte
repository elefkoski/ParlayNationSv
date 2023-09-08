<script lang="ts">
	import EmptyLayout from '$lib/clients/components/layouts/EmptyLayout.svelte';
	import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
	import { writable } from 'svelte/store';

	const authInstance = getAuth();
	const errorMessage = writable('');
	let email = '';

	async function resetPassword(event: SubmitEvent) {
		event.preventDefault();
		try {
			await sendPasswordResetEmail(authInstance, email);
			errorMessage.set('Password reset email sent!');
		} catch (error) {
			if (error instanceof Error) {
				errorMessage.set(error.message);
			} else {
				errorMessage.set('An unknown error occurred.');
			}
		}
	}
</script>

<EmptyLayout>
	<div class="flex flex-col justify-center lg:px-8 min-h-full px-6 py-12">
		<div class="sm:max-w-sm sm:mx-auto sm:w-full">
			<img
				alt="Parlay Nation"
				class="h-20 mb-8 mx-auto w-auto"
				src="src/images/assets/parlay-nation-logo_1048x298.webp"
			/>
			<h2
				class="dark:text-gray-100 font-bold leading-9 pb-4 text-2xl text-center text-gray-900 tracking-tight"
			>
				Reset Your Password
			</h2>
			<p>Enter your email and you'll be sent a link to reset your password.</p>
		</div>

		<div class="mt-10 sm:max-w-sm sm:mx-auto sm:w-full">
			<form action="" class="space-y-6" method="POST" on:submit={resetPassword}>
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
					<button
						class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full"
						data-track="sign_in"
						type="submit"
					>
						RESET PASSWORD
					</button>
				</div>
			</form>

			{#if $errorMessage}
				<div class="error-message mt-6 text-red-500">
					{$errorMessage}
				</div>
			{/if}

			<div class="mt-8 text-center text-sm">
				<a
					href="login"
					class="cursor-pointer dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 leading-6 text-indigo-600"
					data-track="back-to-login"
					tabindex="0"
					role="button"
				>
					Back to Sign In
				</a>
			</div>
		</div>
	</div>
</EmptyLayout>
