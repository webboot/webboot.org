export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, ...state } = props

  return header(
    { class: 'Header' },
    div([
      Link({ to: state.root, class: 'Logo' }, [
        Boot(),
        div({ class: 'branding' }, [span('@web'), 'boot']),
      ]),
      menu && Menu({ state, items: menu }),
    ]),
  )
}

export const style = vars => ({
  padding: '.5em 0 0',
  width: '100%',

  '> div': {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '0 5%',
  },

  '.Boot': {
    backgroundColor: vars.darkText,
    borderRadius: '100%',
    display: 'inline-block',
    float: 'left',
    height: '2.4em',
    padding: '.3em .3em 0 .5em',
    transition: `background-color ${vars.fadeDuration}`,

    '.light &&': {
      backgroundColor: vars.lightText,
    },
  },

  '.branding': {
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '0.2em 0 0 0.2em',

    span: {
      color: vars.red,
      fontSize: '1em',
      margin: '0',
    },
  },

  '.Menu': {
    lineHeight: 1,
    margin: '0.7em 0 0',
  },
})

export const propTypes = {
  Header: [{ key: 'menu', type: 'array' }],
}
