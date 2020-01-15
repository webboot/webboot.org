export const View = state => [
  Hero(state),

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
    p('how can we trust a homepage before we even load it?'),

    p('this is a central problem of the web that has not been addressed. until now.'),

    p([
      'homepages and webapps are used to administrate a lot of our public and private lifes,',
      ' yet most people and many developers do not realize',
      ' how broken and dangerous the delivery method of those applications is.',
    ]),

    p([
      'those of us that do wake up at night, in cold sweat, and think about becoming a gardener.',
      ' then our phone rings because something like [heartbleed](https://en.wikipedia.org/wiki/Heartbleed)',
      ' just got published and we go to work.',
    ]),
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
      ' money, gave us a space to work, or otherwise helped @webboot.',
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
