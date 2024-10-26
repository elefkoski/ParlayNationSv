<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';

	let currentTheme: string;

	theme.subscribe((value) => {
		currentTheme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	// Apply the initial theme on mount
	onMount(() => {
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

<style>
	.theme-slider {
		display: flex;
		align-items: center;
	}

	.theme-slider__input {
		display: none;
	}

	.theme-slider__label {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.theme-slider__text {
		margin-right: 10px;
		font-size: 0.875rem;
	}

	.theme-slider__slider {
		width: 40px;
		height: 20px;
		background-color: #ccc;
		border-radius: 20px;
		position: relative;
		transition: background-color 0.3s;
	}

	.theme-slider__slider::before {
		content: '';
		position: absolute;
		width: 18px;
		height: 18px;
		background-color: white;
		border-radius: 50%;
		top: 1px;
		left: 1px;
		transition: transform 0.3s;
	}

	.theme-slider__input:checked + .theme-slider__label .theme-slider__slider {
		background-color: #4caf50;
	}

	.theme-slider__input:checked + .theme-slider__label .theme-slider__slider::before {
		transform: translateX(20px);
	}
</style>
