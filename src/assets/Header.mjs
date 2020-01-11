export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, ...state } = props

  return header({ class: 'Header' }, [
    Link({ to: state.root, class: 'Logo' }, [Boot(), '@webboot']),
    menu && Menu({ state, items: menu }),
  ])
}

export const style = vars => ({
  '.Boot': {
    backgroundColor: vars.colors.white,
    borderRadius: '100%',
    display: 'inline-block',
    padding: '.3em .3em 0 .5em',

    svg: {
      height: '2em',
      width: '2em',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'menu', type: 'array' },
  ],
}
