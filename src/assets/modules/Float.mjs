export const View = (p = {}) => {
  const { url, text, img, right = false, height, width, title, state } = p

  const { float } = state

  const props = {
    class: {
      Float: true,
      right,
    },
    title,
  }

  const onclick = [actions.float.toggle, img]
  const show = float && float[img]

  return figure(props, [
    img && Img({ src: img, height, width, onclick }),
    text && figcaption(url ? Link({ to: url, text }) : text),
    img && div({ class: { focused: true, show }, onclick }, Img(img)),
  ])
}

export const state = {
  float: {},
}

export const actions = {
  float: {
    toggle: (state, img) => ({
      ...state,
      float: {
        ...state.float,
        [img]: !state.float[img],
      },
    }),
  },
}

export const globals = {
  state: {
    float: true,
  },
  actions: {
    float: true,
  },
}

export const style = vars => ({
  float: 'left',
  margin: '0 1.5em 1.5em 0',
  maxWidth: '45%',
  transition: 'max-width 300ms',

  img: {
    height: 'auto',
  },

  '&.right': {
    float: 'right',
    margin: '0 0 1.5em 1.5em',
    textAlign: 'right',
  },

  figcaption: {
    margin: '0',
    padding: '0',
    lineHeight: '1',
    fontSize: '0.8em',
    fontStyle: 'italic',
  },

  '.focused': {
    padding: '5vw 1em',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#000000cc',
    transition: `background-color ${vars.fadeDuration}, opacity ${vars.fadeDuration}`,

    height: 0,
    width: 0,
    opacity: 0,
    '&.show': {
      width: '100vw',
      height: '100vh',
      opacity: 1,
    },

    '.light &&': {
      backgroundColor: '#ffffffcc',
    },

    img: {
      display: 'block',
      margin: '0 auto',
    },
  },

  '@media (orientation: landscape)': {
    '.focused': {
      img: {
        minHeight: '80vh',
      },
    },
  },
  '@media (orientation: portrait)': {
    '.focused': {
      img: {
        minWidth: '80vw',
      },
    },
  },
})
