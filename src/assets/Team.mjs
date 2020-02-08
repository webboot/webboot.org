export const View = () =>
  ul({ class: 'Team' }, [
    li([
      Img({ src: '/team/jascha.jpg' }),
      div([h4(Link({ to: 'https://keybase.io/jascha/' }, 'jascha')), p('development')]),
    ]),
    li([
      Img({ src: '/team/michael.jpg' }),
      div([h4(Link({ to: 'https://keybase.io/exiledsurfer/' }, 'michael')), p('evangelism')]),
    ]),
    li([
      Img({ src: '/team/mark.jpg' }),
      div([h4(Link({ to: 'https://keybase.io/easye/' }, 'mark')), p('advise / audit')]),
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
    maxWidth: '90px',
    borderRadius: '100%',
  },

  '@media screen and (min-width: 800px)': {
    li: {
      clear: 'none',
      width: '33%',
      float: 'left',
    },
  },
}
