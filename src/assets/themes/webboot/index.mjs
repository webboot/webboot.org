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
    backgroundColor: vars.greyDark,
    color: vars.greyLight,
    transition: `color ${vars.fadeDuration}, background-color ${vars.fadeDuration}`,

    '&.light': {
      backgroundColor: vars.colors.gray[300],
      color: vars.colors.gray[900],
    },
  },

  '.Page': {
    '> div': {
      display: 'inline-block',
      padding: '5%',
      width: '100%',
      maxWidth: vars.maxWidth,
      margin: '0 auto',

      '&#hero': {
        maxWidth: 'inherit',
      },
    },
  },

  a: {
    color: vars.colors.gray[300],
    transition: `color ${vars.fadeDuration}`,

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

  '.Menu': {
    float: 'none',
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

  [`@media screen and (min-width: ${vars.widths.tablet}px)`]: {
    '.Menu': {
      float: 'right',
      margin: 0,
    },
    '.Logo': {
      float: 'left',
    },
  },
})
