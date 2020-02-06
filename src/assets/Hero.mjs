export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    div({ class: 'Booting' }, [Boot(), h1([span('@web'), 'boot']), p('trust on every step')]),
    p('automagically verify the integrity of homepages,'),
    p('before you load them.'),

    Menu({
      items: [
        { to: '/#about', text: 'about' },
        { to: '/getting-started/', text: 'getting started' },
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
    maxWidth: '333px',
    minWidth: '270px',
    position: 'relative',

    p: {
      position: 'absolute',
      right: 0,
      top: '2.5em',
    },
  },

  '.Boot': {
    svg: {
      width: '15em',
      height: '12em',
      maxWidth: '65vw',
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '3em 0 0',

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
    textAlign: 'center',
  },
})
