import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			components: {
				Footer: './src/components/Footer.astro',
				SiteTitle: './src/components/SiteTitle.astro',
			},
			favicon: '/favicon.svg',
			logo: {
				replacesTitle: true,
				dark: './src/assets/logo-dark.svg',
				light: './src/assets/logo-light.svg',
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
			],
			title: 'mindpad',
			customCss: ['./src/styles/theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mindpad-eu/docs' }],
			plugins: [
				starlightOpenAPI([{
					base: 'rest-api',
					schema: 'src/openapi.yml',
				}]),
			],
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
				{
					label: 'MCP',
					autogenerate: { directory: 'mcp' },
				},
				...openAPISidebarGroups,
			],
		}),
	],
})