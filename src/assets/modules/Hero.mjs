export const View = state =>
  div({ id: 'hero', class: 'Hero' }, [
    Booting(),
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
  backgroundColor: vars.darkText,
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

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

  p: {
    color: vars.grey,
    fontSize: '1.1em',
    textAlign: 'center',
  },
})
