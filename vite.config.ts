import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import csv from "./src/plugins/csv";



export default defineConfig({
	plugins: [
		csv(),
		sveltekit(),
	],
});
