export const state = {
  title: '@webboot',
  description: 'solving the tofu problem, one boot at a time.',

  branding: ['@web', 'boot'],

  seo: {
    name: '@webboot',
    url: `https://webboot.org/`,
    about: 'solving the tofu problem, one boot at a time.',
    image: `https://webboot.org/webboot-preview.jpg`,
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

  hero: {
    title: ['@web', 'boot'],
    description: 'trust on every step',

    content: ['automagically verify the integrity of homepages,', 'before you load them.'],

    menu: [
      { to: '/#about', text: 'about' },
      { to: '/getting-started/', text: 'usage' },
      { to: '/#support', text: 'support' },
    ],
  },
}
