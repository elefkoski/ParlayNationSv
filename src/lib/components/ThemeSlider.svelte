<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';

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
		checked={$theme === 'dark'}
	/>
	<label for="theme-toggle" class="theme-slider__label">
		<span class="theme-slider__text">{$theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
		<span class="theme-slider__slider" />
	</label>
</div>
