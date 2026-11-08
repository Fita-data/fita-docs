// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	redirects: {
		'/': '/en/',
	},
	integrations: [
		starlight({
			title: 'Fita',
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Fita-data/fita' },
			],
			sidebar: [
				{
					label: 'Concepts',
					translations: { es: 'Conceptos' },
					items: [{ autogenerate: { directory: 'concepts' } }],
				},
			],
		}),
	],
});
