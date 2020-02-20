export const state = {
  title: '@webboot - warrant canary',
}

export const View = state =>
  div([
    svg({ class: 'Bird', viewBox: '0 0 839 839', height: '20', width: '20' }, [
      path({
        d:
          'M431 536a550 550 0 00392 159c8 0 13-9 8-16-51-69-260-339-454-453 20-12 36-31 46-52l46-18c7-2 9-11 3-16l-41-40C408 40 357 0 307 0h-1C123 49 91 268 180 392c12 67 53 182 184 234 24 9 46 17 68 23v106H0v84h840v-84H508c2-37 40-87 39-87-142-98-223-206-224-347 10 82 58 164 108 215zM347 71a25 25 0 010 50c-14-1-24-12-25-25 1-14 14-25 25-25z',
      }),
    ]),

    h3('canary notice:'),

    h4('we have never shared any data about our users with anyone.'),

    p(b('if this page disappears, it means that the rule above has been broken by force.')),

    h3('data that might get compromised:'),

    h4('debug logs'),
    p([
      'some debugging data will be logged, for a maximum of 7 days.',
      ' this data will never include any ip addresses, or other identifying data.',
    ]),

    h4('pgp keystore metadata'),
    p([
      'all email addresses and names of the gpg keys imported into the @webboot gpg keystore.',
      ' this is built into gpg.',
    ]),

    p("that's it, since we do not save any other data about you, there is nothing else to steal."),
  ])

export const style = vars => ({
  '.Bird': {
    height: '8em',
    width: '8em',
    padding: '1em',
    float: 'right',
    margin: '0 0 1em 2em',
    background: vars.primary.neutral,
  },
})
