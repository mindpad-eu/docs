import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

export default defineConfig({
	integrations: [
		starlight({
			components: {
				Footer: './src/components/Footer.astro',
			},
			favicon: '/favicon.svg',
			head: [{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon.ico',
					sizes: '32x32',
				},
			}],
			title: 'mindpad',
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