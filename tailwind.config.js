/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				'0.75px': '0.75px'
			}
		}
	},
	plugins: [require('daisyui')]
};
