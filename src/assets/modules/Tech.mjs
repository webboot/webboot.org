export const View = () =>
  ul({ class: 'Tech' }, [
    li([
      Img({ src: '/techstack/nessus.jpg' }),
      div([h4(Link({ to: 'https://nessus.at/' }, 'nessus')), p('hosting')]),
    ]),
    li([
      Img({ src: '/techstack/tor.jpg' }),
      div([h4(Link({ to: 'https://www.torproject.org/' }, 'tor')), p('anonymity')]),
    ]),
    li([
      Img({ src: '/techstack/gnupg.jpg' }),
      div([h4(Link({ to: 'https://gnupg.org/' }, 'gnupg')), p('cryptography')]),
    ]),
    li([
      Img({ src: '/techstack/cryptohippie.jpg' }),
      div([h4(Link({ to: 'https://cryptohippie.com/' }, 'cryptohippie')), p('vpn')]),
    ]),
    li([
      Img({ src: '/techstack/keybase.jpg' }),
      div([h4(Link({ to: 'https://keybase.io/' }, 'keybase')), p('communication')]),
    ]),

    li([
      Img({ src: '/techstack/aeternity.jpg' }),
      div([h4(Link({ to: 'https://aeternity.com/' }, 'aeternity')), p('decentralization')]),
    ]),
    li([
      Img({ src: '/techstack/github.jpg' }),
      div([h4(Link({ to: 'https://github.com/' }, 'github')), p('db backup & host')]),
    ]),
    li([
      Img({ src: '/techstack/gitlab.jpg' }),
      div([h4(Link({ to: 'https://gitlab.com/' }, 'gitlab')), p('db backup & host')]),
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
    borderRadius: '.5em',
    float: 'left',
    margin: '0 1em 0 0',
    maxWidth: '90px',
  },

  '@media screen and (min-width: 500px)': {
    li: {
      clear: 'none',
      width: '49%',
    },
  },

  '@media screen and (min-width: 800px)': {
    li: {
      width: '33%',
    },
  },
}
