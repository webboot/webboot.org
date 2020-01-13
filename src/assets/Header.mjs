export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, ...state } = props

  return header(
    { class: 'Header' },
    div([
      Link({ to: state.root, class: 'Logo' }, [Boot(), span('@webboot')]),
      menu && Menu({ state, items: menu }),
    ]),
  )
}

export const style = vars => ({
  width: '100%',
  padding: '.5em 0 .3em',

  '> div': {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 5%',
  },

  '.Boot': {
    backgroundColor: vars.greyLight,
    borderRadius: '100%',
    display: 'inline-block',
    float: 'left',
    padding: '.3em .3em 0 .5em',
    transition: `background-color ${vars.fadeDuration}`,

    '.light &&': {
      backgroundColor: vars.greyDark,
    },

    svg: {
      height: '2em',
      width: '2em',
    },
  },

  '.Logo': {
    span: {
      float: 'left',
      fontSize: '1.5em',
      margin: '0 0 0 .2em',
    },
  },

  '.Menu': {
    margin: '.4em 0 0',
  },
})

export const propTypes = {
  Header: [{ key: 'menu', type: 'array' }],
}
