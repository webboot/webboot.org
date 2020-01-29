export const View = () =>
  ul({ class: 'SponsorList' }, [
    li([
      Img({ src: '/bwb.png' }),
      div([
        h4(Link({ to: 'https://bwb.is' }, 'bwb')),
        p('evangelism'),
      ]),
    ]),
    li([
      Img({ src: '/metalab.png' }),
      div([
        h4(Link({ to: 'https://metalab.at' }, 'metalab')),
        p('inspiration'),
      ]),
    ]),
    li([
      Img({ src: '/parallele.png' }),
      div([
        h4(Link({ to: 'https://parallele.at' }, 'parallele polis')),
        p('workspace'),
      ]),
    ]),
  ])

export const style = {
  width: '100%',

  li: {
    clear: 'both',
    display: 'inline-block',
    margin: '0.5em 0',
    width: '100%',

    h4: {
      lineHeight: 1,
      padding: 0,
    },
  },

  img: {
    float: 'left',
    margin: '0 1em 0 0',
  },

  '@media screen and (min-width: 800px)': {
    li: {
      clear: 'none',
      width: '33%',
      float: 'left',
    },
  },
}
