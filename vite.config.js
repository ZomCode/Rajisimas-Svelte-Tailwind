import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: [
			'intl-messageformat',
			'@formatjs/icu-messageformat-parser',
			'@formatjs/icu-skeleton-parser',
		],
	},
});
