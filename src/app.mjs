export const state = config => ({
  title: '@webboot',
  description: 'solving the tofu problem, one boot at a time.',

  branding: ['@web', 'boot'],

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

  hero: {
    title: ['@web', 'boot'],
    description: 'trust on every step',

    content: ['automagically verify the integrity of homepages,', 'before you load them.'],

    menu: [
      { to: '/#about', text: 'about' },
      { to: '/getting-started/', text: 'getting started' },
      { to: '/#support', text: 'support' },
    ],
  },

  footer: {
    one: {
      title: '@webboot',
      before: ['trust on every step.', 'created by the @webboot dao.'],
      menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'sitemap',
      menu: [
        { to: '/', text: 'index' },
        { to: '/tofu/', text: 'tofu' },
        { to: '/tosu/', text: 'tosu' },
        { to: '/getting-started/', text: 'getting-started' },
        { to: '/privacy/', text: 'privacy' },
        { to: '/canary/', text: 'warrant canary' },
        { to: '/support/', text: 'support' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/webboot', text: 'npm' },
        { to: 'https://twitter.com/webbootorg', text: 'twitter' },
        { to: 'https://keybase.io/webboot', text: 'keybase' },
        { to: 'https://github.com/webboot', text: 'github' },
        { to: 'https://gitlab.com/webboot', text: 'gitlab' },
      ],
    },
  },
})
