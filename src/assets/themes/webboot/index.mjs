export default vars => ({
  body: {
    fontFamily: [
      '"Ubuntu Narrow"',
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'sans-serif',
    ].join(', '),
  },

  '#Magic': {
    backgroundColor: vars.colors.gray[900],
    color: vars.colors.gray[300],
    transition: 'color 0.5s, background-color 0.5s',

    '&.light': {
      backgroundColor: vars.colors.gray[300],
      color: vars.colors.gray[900],
    },
  },

  '.Page': {
    padding: '0 5%',
  },

  a: {
    color: vars.colors.gray[300],

    '&:hover': {
      color: vars.colors.gray[500],
    },

    '.light &&': {
      color: vars.colors.gray[900],

      '&:hover': {
        color: vars.colors.gray[500],
      },
    },
  },

  '.Wrapper': {
    width: '100%',
    maxWidth: 'inherit',
  },

  '.Header': {
    width: '100%',
    padding: '0 5%',
  },

  '.LightSwitch': {
    position: 'fixed',
    bottom: '0.5em',
    right: '0.5em',
  },
  '.Gdpr': {
    left: 'auto',
    right: '0.5em',

    '.ShowHide': {
      left: 'auto',
      bottom: '3em',
      right: '0.5em',
    },
  },
})
