import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

export default defineConfig({
	integrations: [
		starlight({
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
				}
				{
					label: 'MCP',
					autogenerate: { directory: 'mcp' },
				},
				...openAPISidebarGroups,
			],
		}),
	],
})