export const View = state => [
  div({ id: 'hero' }, [Hero(state)]),

  div({ id: 'about' }, [
    h2('about webboot'),

    p([
      'webboot aims to make ',
      Link({ to: 'https://en.wikipedia.org/wiki/Trust_on_first_use' }, 'tofu - trust on first use'),
      ' a bit less scary.',
    ]),
  ]),

  div({ id: 'tofu' }, [
    h2('tofu'),
    p('TODO: add a short description of the tofu problem'),
    Link({ to: '/tofu/' }, 'Do you want to know more?'),
  ]),

  div({ id: 'tosu' }, [
    h2('tosu'),
    p('TODO: add a short description of the tosu problem'),
    Link({ to: '/tosu/' }, 'Do you want to know more?'),
  ]),

  div({ id: 'packages' }, [
    h2('packages'),

    ul([
      li([
        h4(Link({ to: 'https://github.com/webboot/core' }, '@webboot/core')),
        p('the core functionality of @webboot. Used both in clients and on the server.'),
        p(Link({ to: 'https://webboot.github.io/core' }, 'docs')),
      ]),
      li([
        h4(Link({ to: 'https://github.com/webboot/cli' }, '@webboot/cli')),
        p('command line interface exposing the webboot functionality to bash'),
        p(Link({ to: 'https://webboot.github.io/cli' }, 'docs')),
      ]),
      li([
        h4(Link({ to: 'https://github.com/webboot/crypto' }, '@webboot/crypto')),
        p([
          'all cryptographic functionality of webboot,',
          ' split into a separate repository to make testing and auditing easier.',
        ]),
        p(Link({ to: 'https://webboot.github.io/crypto' }, 'docs')),
      ]),
    ]),
  ]),

  div({ id: 'support' }, [
    h2('support'),

    p([
      'the following organizations and individuals have ',
      Link({ to: '/support/#contribute', text: 'contributed' }),
      ', ',
      Link({ to: '/support/#validate', text: 'validated code' }),
      ', ',
      Link({ to: '/support/#donate', text: 'donated' }),
      'money or a space to work, or otherwise helped @webboot.',
    ]),

    ul([
      li([h4('BitcoinersWithoutBorders'), p('Development and Evangelism')]),
      li([h4('Metalab Vienna'), p('Some of us work there and are members.')]),
      li([h4('Parallele Polis Vienna'), p('Some of us work there and are members.')]),
    ]),
  ]),
]

//export const style = {
//'#about': {
//minHeight: '70vh',
//},
//}
