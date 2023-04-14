import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	root: 'client',
	build: {
		outDir: '../~$dist/public',
	},
	define: {
		__VUE_OPTIONS_API__: false,
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'#p/': fileURLToPath(new URL('./', import.meta.url)),
			'#c/': fileURLToPath(new URL('../common', import.meta.url)),
			'#s/': fileURLToPath(new URL('../server', import.meta.url)),
		},
	},
	server: {
		port: 3200,
		proxy: {
			'^/api': {
				target: 'http://localhost:3201',
				changeOrigin: true,
			},
		},
	},
})
