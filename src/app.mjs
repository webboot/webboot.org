export const state = config => ({
  title: '@webboot',
  description: 'solving the tofu problem, one boot at a time.',
  seo: {
    name: '@webboot',
    url: `https://${config.URL}`,
    about: 'solving the tofu problem, one boot at a time.',
    image: `https://${config.URL}${config.WEB_ROOT}webboot-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },
  menu: [
    { to: '/getting-started/', text: 'usage' },
    { to: '/tofu/', text: 'tofu' },
    { to: '/tosu/', text: 'tosu' },
  ],
})
