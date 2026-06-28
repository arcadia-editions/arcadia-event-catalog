/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'Arcadia Editions Event Catalog',
  tagline:
    'Discover the domains, services, APIs, messages, channels, and data models that make up Arcadia Editions.',
  organizationName: 'Arcadia Editions',
  theme: 'sunset',
  homepageLink: 'https://arcadia-editions.github.io/arcadia-event-catalog/',
  editUrl: 'https://github.com/arcadia-editions/arcadia-event-catalog/edit/main',
  output: 'static',
  outDir: 'dist',
  base: '/arcadia-event-catalog/',
  trailingSlash: true,
  search: {
    type: 'resource',
  },
  navigation: {
    pages: ['list:top-level-domains', 'list:all'],
  },
  llmsTxt: {
    enabled: true,
  },
  cId: '6dc9f235-4146-4393-8f9e-3756dc41ad45',
};
