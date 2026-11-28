import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Netlify adapter, installed 2026-11-28 (adapter-netlify 2.x, the line that matches SvelteKit 1).
		adapter: adapter()
	}
};

export default config;
