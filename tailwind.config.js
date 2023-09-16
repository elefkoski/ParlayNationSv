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
	extend: {
		utilities: {
			'.col-count-1': {
				columnCount: '1'
			},
			'.col-count-2': {
				columnCount: '2'
			},
			'.col-count-3': {
				columnCount: '3'
			},
			'.break-inside-avoid': {
				breakInside: 'avoid'
			},
			'.bottom-background': {
				height: '100px',
				'background-color': 'white',
				'@screen dark': {
					'background-color': 'black'
				}
			}

			// Add other utility-related extensions here if needed
		}
	},
	plugins: [require('daisyui')]
};
