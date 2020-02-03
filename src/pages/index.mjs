export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    h2('early bird <3'),
    p([
      'hello, you are here a bit early.',
      ' the first time we will be publishing information about @webboot is the 22. 02. 2020.',
      ' feel free to poke around,',
      ' but as long as this notice is here,',
      ' most documentation on this page will not be accurate (yet).',
    ]),

    h1('webboot?'),

    p([
      '@webboot aims to make ',
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
      ' just seems that nobody thought about it before.',
      ' thats what we are here for.',
    ]),
  ]),

  div({ id: 'tofu' }, [
    h2('tofu - trust on first use'),

    Float({
      ...state,
      img: '/comics/brainlesstales-tofu.jpg',
      caption: Link({ to: 'https://www.brainlesstales.com/', text: 'comic by brainlesstales' }),
    }),

    p('how can we trust a homepage before we even load it?'),

    p('this is a central problem of the web that has not been addressed. until now.'),

    p([
      'homepages and webapps are used to administrate a lot of our public and private lifes,',
      ' yet most people, and many developers, do not realize,',
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

    Float({
      ...state,
      right: true,
      img: '/comics/sebiwi-trust.jpg',
      caption: Link({ to: 'https://sebiwi.github.io/', text: 'comic by sebiwi' }),
    }),

    p('once we know how to load homepages safely the first time, we encounter a new problem.'),

    p([
      'what happens on updates?',
      ' how can we trust the new javascript that is now being sent from the server?',
    ]),

    p([
      'this can be solved by making updates of homepages user controllable',
      ' and by providing a "second source of truth" utilizing the webboot network.',
    ]),

    p([
      'to make sure your users will not be stuck on broken versions of your webproperties,',
      ' the webboot network will also allow both deprecation of versions,',
      ' as well as propagation of urgent security fixes.',
    ]),

    p([
      'additionally, the @webboot network will also flag versions that break on user machines,',
      ' giving developers and publishers additional insight into actual app performance.',
    ]),

    Link({ to: '/tosu/' }, 'Do you want to know more?'),
  ]),

  // div({ id: 'pricing' }, [
  //   h2('pricing'),

  //   p('@webboot will be a non-profit located in europe soon.'),

  //   p([
  //     'the actual jurisdiction is not yet determined, ',
  //     'switzerland, estonia and austria are the three choices left.',
  //   ]),

  //   p([
  //     'regardless of jurisdiction, ',
  //     '@webboot will always be as transparent as possible and disclose ',
  //     ' both costs and income on a regular basis. (likely in near-realtime).',
  //   ]),

  //   ul({ class: 'tiers' }, [
  //     li([
  //       h3('open source'),
  //       h5('free.'),
  //       p('@webboot is free (as in coffee) for open source projects.'),
  //       p([
  //         'open source means that all source code bundling',
  //         ' the html, css and javascript for the page',
  //         ' is hosted in a publicly accessible git repository.',
  //         ' if your page is dynamically generated,',
  //         ' this includes ALL server code that is touched when generating the files.',
  //       ]),
  //       p([
  //         'rule of thumb: if your homepage could use ',
  //         Link({ to: 'https://www.gnu.org/licenses/agpl-3.0.html', text: 'agpl 3.0' }),
  //         ' licensed libraries without changes,',
  //         ' you can also use the webboot free tier.',
  //       ]),
  //     ]),

  //     li({ class: 'closed source' }, [
  //       h3('closed source - individual'),
  //       h5('mandatory donation.'),
  //       p([
  //         'we think that @webboot is worth as much as the domain and/or hosting of your homepage costs,',
  //         ' and we would prefer not to enforce any minimal amounts.',
  //         ' since payments are still encumbered with lots of labour, ',
  //         ' we unfortunately can not accept any donations with a value below 5 european currency units,',
  //         ' but we are happy to count that as a yearly membership.',
  //       ]),
  //     ]),

  //     li({ class: 'enterprise' }, [
  //       h3('enterprise'),
  //       h5('starting at 100 € yearly, 10 € monthly'),
  //       p([
  //         'companies with a yearly revenue above 100.000 € and/or a closed source homepage,',
  //         ' please contact our team.',
  //       ]),
  //       Link({ to: 'mailto:team@webboot.org' }, 'team@webboot.org'),
  //     ]),
  //   ]),
  // ]),

  div({ id: 'support' }, [
    h2('support'),

    p([
      'the following organizations and individuals have ',
      Link({ to: '/support/#contribute', text: 'contributed' }),
      ', ',
      Link({ to: '/support/#validate', text: 'validated code' }),
      ', ',
      Link({ to: '/support/#donate', text: 'donated' }),
      ' money, given us a space to work, or otherwise helped @webboot.',
    ]),

    SponsorList(state),
  ]),
]
