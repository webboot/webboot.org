export const View = () =>
  div([
    h2('privacy policy'),

    h2("Do's"),

    h3('debug logging'),

    p([
      'some debugging data will be logged, for a maximum of 7 days.',
      ' this data will never include any ip addresses, or other unneeded identifying data, ',
      ' and will never be collected or analyzed for tracking purposes.',
    ]),

    h3('public data'),

    p('data that gets saved online and publicly in our database:'),

    ol([
      li('signing git username'),
      li('signing public gpg key + metadata (name and email attached to that key. we never verify or process this information.)'),
      li('git provider (gitlab, github, ...)'),
      li('domain'),
      li('git organization/account'),
      li('git repository (for open source)'),
      li('a list of files this homepage is expected to serve and their hashes.'),
      li('a comment by the publisher, informing about the changes, optional.'),
    ]),

    p([
      'this is all the data we save, there is no hidden database,',
      ' everything we collect is also public by default.',
    ]),

    p([
      'all authentication is done locally using either your local gnupg installation,',
      ' or the cryptography libraries of your browser.',
      ' no login to our servers is possible or necessary.',
    ]),

    p([
      ' we will run tor proxies to allow anonymous publishing.',
      ' once they are running, their onion addresses will be published here.',
    ]),

    h2("Dont's"),

    p([
      'we will never, under no circumstances,',
      ' share, and/or sell information about our users to ',
      b('any'),
      ' third parties.',
    ]),

    h3('canary:'),
    p([
      'as long as ',
      Link({ to: '/canary/', text: 'our canary link works'}),
      ' we have not shared any data about our users with anyone.',
    ]),

    h3('local data'),
    p('personal data we access on your machine and do not send anywhere, ever:'),

    ol([
      li('your git config user.email (never uploaded)'),
      li('your public ssh key associated with that email.'),
      li('your gpg keys published on github or gitlab.'),
    ]),

    p('thats it.'),
  ])
