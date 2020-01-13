export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    div({ class: 'Booting' }, [Boot(), h1([span('@web'), 'boot']), p('trust on every step')]),
    Menu({
      items: [
        { to: '/#about', text: 'about' },
        { to: '/#packages', text: 'packages' },
        { to: '/#support', text: 'support' },
      ],
      state,
    }),
  ])

export const style = vars => ({
  backgroundColor: vars.greyLight,
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',

  '.Booting': {
    margin: '0 auto',
    maxWidth: '290px',
    minWidth: '270px',
    position: 'relative',
  },

  '.Boot': {
    svg: {
      width: '15em',
      maxWidth: '65vw',
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',

    a: {
      color: vars.red,

      '&:hover': {
        color: vars.redDark,
      },
    },
  },

  h1: {
    color: vars.grey,
    fontSize: '2em',
    padding: '0',
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: 0,

    span: {
      color: vars.red,
    },
  },

  p: {
    color: vars.grey,
    fontSize: '1.1em',
    position: 'absolute',
    right: 0,
    top: '2.5em',
  },
})
