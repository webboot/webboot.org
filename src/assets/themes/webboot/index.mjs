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

    lineHeight: '2',
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
      padding: '5%',
      width: '100%',
      maxWidth: vars.maxWidth,
      margin: '0 auto',

      '&#hero': {
        maxWidth: 'inherit',
      },
    },
  },

  h1: { fontSize: '1.5em' },
  h2: { fontSize: '1.4em' },
  h3: { fontSize: '1.3em' },
  h4: { fontSize: '1.2em' },
  h5: { fontSize: '1.1em', padding: 0 },

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

  i: {
    fontStyle: 'italic',
  },
  b: {
    fontWeight: 700,
  },

  'img, svg': {
    maxWidth: '100%',
    maxHeight: '100%',
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
