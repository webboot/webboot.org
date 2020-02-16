export default {
  ROOT: 'src',
  PUBLIC: 'docs',
  THEME: '@magic-themes/project',

  WEB_ROOT: '/',
  URL: 'webboot.org',
  CNAME: 'webboot.org',

  HOIST: ['LightSwitch', 'Gdpr'],

  IGNORED_STATIC: ['.xcf'],

  THEME_VARS: {
    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    link: {
      dark: '#c4c4c4',
      light: '#212121',

      hover: {
        dark: '#ea4444',
        light: '#ea4444',
      },
    },

    neutral: '#5a5a5a',

    primary: {
      dark: '#c82222',
      light: '#ff7070',
      neutral: '#ea4444',
    },

    secondary: {
      dark: '#22c822',
      light: '#70ff70',
      neutral: '#44ea44',
    },

    text: {
      dark: '#c4c4c4',
      light: '#212121',
    },
  },
}
