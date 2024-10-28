<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	let currentTheme: string;

	theme.subscribe((value) => {
		currentTheme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	function handleThemeToggle() {
		toggleTheme();
	}
</script>

<div>
	<div class="theme-slider" />
	<input
		type="checkbox"
		id="theme-toggle"
		class="theme-slider__input"
		on:change={handleThemeToggle}
		checked={currentTheme === 'dark'}
	/>
	<label for="theme-toggle" class="theme-slider__label">
		<span class="theme-slider__text">{currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
		<span class="theme-slider__slider" />
	</label>
</div>
