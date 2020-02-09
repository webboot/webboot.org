export const View = (p = {}, children) => {
  const { caption, float, img, right = false, title } = p

  const props = {
    class: {
      Float: true,
      right,
    },
    onclick: [actions.float.toggle, img],
    title,
  }

  return [
    figure(props, [
      img && Img(img),
      caption && figcaption(caption),
      img && float[img] && div({ class: 'focused' }, Img(img)),
    ]),
  ]
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

export const style = vars => ({
  float: 'left',
  margin: '0 1.5em 1.5em 0',
  maxWidth: '45%',
  transition: 'max-width 300ms',

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
    width: '100vw',
    height: '100vh',
    padding: '5vw 0 5vw 0',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#000000cc',
    transition: `background-color ${vars.fadeDuration}`,

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
