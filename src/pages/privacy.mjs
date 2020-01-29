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
      li('signing public gpg key'),
      li('git provider (gitlab, github, ...)'),
      li('domain'),
      li('git org'),
      li('repository'),
      li('a list of files this homepage is expected to serve and their hashes.'),
      li('a comment by the publisher, informing about the changes.'),
    ]),

    p([
      'this is all the data we save, there is no hidden database,',
      ' everything we collect is also public by default because it is needed.',
    ]),

    p([
      'all authentication is done locally using the local gpg installation,',
      ' no login to our servers is possible or necessary.',
      ' we will run tor proxies to allow anonymous publishing.',
    ]),

    h2("Dont's"),

    p('we will never, with or without consent,'),
    ol([
      li('track user activity on our servers.'),
      li('sell information about our users.'),
      li(['pass on any information about our users on to ', b('any'), ' third parties.']),
    ]),

    h3('canary:'),
    p('if this notice disappears, it means that one of the rules above has been broken.'),

    h3('local data'),
    p('personal data we access on your machine and do not send anywhere, ever:'),

    ul([
      li('your git config user.email (never uploaded)'),
      li('your public ssh key associated with that email.'),
      li('your gpg keys published on github or gitlab.'),
    ]),

    p('thats it.'),
  ])
