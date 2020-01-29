export const View = () =>
  div([
    h2('privacy policy'),

    p('keeping it succinct, lets start with the data we collect:'),

    h3('public data'),
    p('personal data that gets saved online and publicly in our database:'),
    ul([
      li('your git username'),
      li('your public gpg key'),
      li('your homepage domain'),
      li('a list of files this homepage is expected to serve and their hashes.'),
    ]),

    p([
      'this is all the data we save, there is no hidden database,',
      ' everything we collect is also public by default.',
    ]),
    p([
      ' all authentication is done locally using the local gpg installation,',
      ' no login to our servers is possible or necessary.',
    ]),

    h2("Dont's"),

    p('we will never, with or without consent,'),
    ol([
      li('track user activity on our servers.'),
      li('sell information about our users.'),
      li(['pass on any information about our users on to ', b('any'), ' third parties.']),
    ]),

    p([
      'some data about user activity will be logged,',
      ' for debugging purposes only, and for a maximum of 7 days.',
      ' this data will never include any ip addresses, or other identifying data, ',
      ' and will never be collected for tracking purposes.',
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
