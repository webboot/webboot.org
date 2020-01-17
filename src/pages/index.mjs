export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    h2('webboot?'),

    p([
      'webboot aims to make ',
      Link({ to: 'https://en.wikipedia.org/wiki/Trust_on_first_use' }, 'tofu - trust on first use'),
      ' a bit less scary.',
    ]),

    p([
      'we are working on a decentralized network of validator nodes,',
      ' with the aim to provide a source of integrity to homepages and webapps.',
    ]),

    p([
      'we think that this is a missing protocol,',
      ' and that something like webboot is as integral',
      ' for a free and secure world wide web as dns is,',
      ' just seems that nobody thought about it deeply. thats what we are here for.',
    ]),
  ]),

  div({ id: 'tofu' }, [
    h2('tofu - trust on first use'),
    p('how can we trust a homepage before we even load it?'),

    p('this is a central problem of the web that has not been addressed. until now.'),

    p([
      'homepages and webapps are used to administrate a lot of our public and private lifes,',
      ' yet most people (and many developers) do not realize,',
      ' how broken and dangerous the delivery method of those applications is.',
    ]),

    p([
      'and those of us that do?',
      ' we wake up deep at night, in cold sweat, and think about becoming a gardener.',
    ]),

    Link({ to: '/tofu/' }, 'Do you want to know more?'),
  ]),

  div({ id: 'tosu' }, [
    h2('tosu - trust on second (and subsequent) use'),
    p('we now talked about the tofu problem. it is the first step.'),

    p('once we know how to load homepages safely the first time, we encounter a new problem.'),

    p([
      'what happens on updates?',
      ' how can we trust the new javascript that is now being sent from the server?',
    ]),

    p([
      'this can be solved by making updates of homepages user controllable',
      ' and by providing a "second source of truth" using the webboot network.',
    ]),

    p([
      'to make sure your users will not be stuck on broken versions of your webproperties.',
      ' the webboot network will also allow deprecation of versions',
      ' as well as urgent security fixes.',
    ]),

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
      li([
        h4(Link({ to: 'https://bwb.is' }, 'BitcoinersWithoutBorders')),
        p('development and evangelism'),
      ]),
      li([
        h4(Link({ to: 'https://metalab.at' }, 'Metalab Vienna')),
        p('some of us work there and are members.'),
      ]),
      li([
        h4(Link({ to: 'https://parallele.at' }, 'Parallele Polis Vienna')),
        p('some of us work there and are members.'),
      ]),
    ]),
  ]),
]
