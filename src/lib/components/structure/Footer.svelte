<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let currentTheme: string;

	theme.subscribe((value) => {
		currentTheme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	// Function to detect system theme
	function detectSystemTheme() {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	}

	// Apply the initial theme on mount
	onMount(() => {
		if (typeof document !== 'undefined') {
			const systemTheme = detectSystemTheme();
			theme.set(systemTheme); // Set the initial theme based on system preference
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});
</script>

<footer class="footer w-full p-10">
	<div>
		<figure>
			<a data-track="footer-logo" href="/">
				{#if currentTheme === 'dark'}
					<img
						src="src/images/assets/white-logo_950x257.webp"
						alt="white parlay nation logo"
						class="w-48"
					/>
				{:else}
					<img
						src="src/images/assets/parlay-nation-logo_524x149.webp"
						alt="parlay nation logo"
						class="w-48"
					/>
				{/if}
			</a>
		</figure>
		<p>Parlay Nation<br />I'm here to teach you about casino craps.</p>
	</div>
	<div>
		<span class="footer-title">Learn</span>
		<a data-track="footer-craps" href="craps" class="link link-hover">Learn Craps</a>
		<a data-track="footer-craps-blog" href="craps-blog" class="link link-hover">Craps Blog</a>
		<a data-track="footer-craps-corner" href="craps-corner" class="link link-hover">Craps Corner</a>
	</div>
	<div>
		<span class="footer-title">Play</span>
		<a data-track="footer-practice-craps" href="practice-craps" class="link link-hover"
			>Practice Craps</a
		>
		<a data-track="footer-craps-simulator" href="craps-simulator" class="link link-hover"
			>Craps Simulator</a
		>
		<a data-track="footer-craps-calculators" href="craps-calculators" class="link link-hover"
			>Craps Calculators</a
		>
	</div>
	<div>
		<span class="footer-title">Company</span>
		<a data-track="footer-about" href="about" class="link link-hover">About</a>
		<a data-track="footer-contact" href="contact" class="link link-hover">Contact</a>
		<a data-track="footer-site-map" href="site-map" class="link link-hover">Site Map</a>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<a data-track="footer-terms-of-service" href="terms-of-service" class="link link-hover"
			>Terms of Service</a
		>
		<a data-track="footer-privacy-policy" href="privacy-policy" class="link link-hover"
			>Privacy Policy</a
		>
	</div>
</footer>
