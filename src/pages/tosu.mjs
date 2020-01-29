export const View = () =>
  div([
    h1('tosu - trust on second (and subsequent) use'),
    p('we made that up. but being written on the internet makes it a thing now.'),
    p('there also might be a wikipedia page in the near future.'),

    p([
      'lets assume we solved the ',
      Link({ to: '/tofu/' }, 'tofu problem'),
      ', we loaded the first version of a homepage in a trustable way,',
      ' and we have the working application running on our device now.',
    ]),

    p('great.'),

    p('now what happens when the server wants to update our client app?'),

    p('how will we verify that the update actually is a piece of software we want to run?'),

    h2('threat vectors'),

    h3('hackers'),
    p('maybe someone hacked the servers between our first use of the app and now.'),

    h3('mitm attack'),
    p([
      'the https connection to the server might have been ',
      Link({ to: 'https://en.wikipedia.org/wiki/Man-in-the-middle_attack' }, 'man in the middled'),
      ' in the country/company/coffeshop network we just connected to.',
    ]),

    p([
      'simply said: we MUST NOT trust the server to send us valid code,',
      ' on the contrary, we SHOULD assume to get malicious payloads.',
    ]),

    h3('broken code'),
    p('the developers of an app might have shipped a version of the code that does not work.'),
    p('if only we could go back to the version of 5 minutes ago.'),

    h2('solution'),

    p([
      'this problem can be solved by making updates of homepages controllable by us, the users,',
      ' and by providing an additional "source of integrity proofs" using the @webboot network.',
    ]),

    p([
      'to make sure no user gets stuck on old and broken versions of an app,',
      ' the webboot network will also allow both deprecation of versions,',
      ' as well as urgent security fixes.',
    ]),

    p([
      'the browser ui (either obtained via browser extension or embedded using our @magic widgets)',
      ' will notify the user about updates and security related deprecations,',
      ' but still leave the user in as much control as possible.',
      ' if there is full trust,',
      ' all updates for pages can also be accepted automatically'
      ' and on a per-page basis,'
      ' they will then be checked by webboot in the background, ',
      ' not disrupting the workflows at all, until it needs to.'
    ]),
  ])
