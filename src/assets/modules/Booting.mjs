export const View = () =>
  div({ class: 'Booting' }, [Boot(), h1([span('@web'), 'boot']), p('trust on every step')])

export const style = vars => ({
  margin: '0 auto',
  maxWidth: '333px',
  minWidth: '270px',
  position: 'relative',

  p: {
    position: 'absolute',
    right: 0,
    top: '2.5em',
  },

  '.Boot': {
    svg: {
      width: '15em',
      height: '12em',
      maxWidth: '65vw',
    },
  },

  h1: {
    color: vars.neutral,
    fontSize: '2em',
    padding: '0',
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: 0,

    span: {
      color: vars.primary.neutral,
    },
  },
})
