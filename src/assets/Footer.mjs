export const View = state => [
  footer({ class: 'Footer' }, [
    div({ class: 'Menus' }, [
      div({ class: 'Child Info' }, [
        h2('@webboot'),
        p('trust on every step.'),
        p('created by the @webboot dao.'),
      ]),
      div({ class: 'Child' }, [
        h2('code'),
        Menu({
          items: [
            { text: 'webboot', to: 'https://github.com/webboot/root/' },
            { text: '@webboot/core', to: 'https://github.com/webboot/core/' },
            { text: '@webboot/cli', to: 'https://github.com/webboot/cli/' },
            { text: '@webboot/crypto', to: 'https://github.com/webboot/crypto/' },
            { text: 'this page', to: 'https://github.com/webboot/webboot.github.io/' },
          ],
          state,
        }),
      ]),
      div({ class: 'Child' }, [
        h2('social links'),
        Menu({
          items: [
            { text: 'npm', to: 'https://www.npmjs.com/org/webboot' },
            { text: 'twitter', to: 'https://twitter.com/webbootorg' },
            { text: 'keybase', to: 'https://keybase.io/webboot' },
          ],
          state,
        }),
      ]),
    ]),
    div({ class: 'Credits' }, [
      'made with a few bits of ',
      Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
    ]),
  ]),
]

export const style = vars => ({
  backgroundColor: vars.red,
  color: vars.greyDark,
  display: 'inline-block',
  margin: '5% 0 0',
  padding: '0 5%',
  width: '100%',

  h2: {
    margin: 0,
  },

  a: {
    color: vars.colors.gray[100],
    textDecoration: 'underline',

    '&:hover': {
      color: vars.colors.gray[300],
    },
  },

  '.Container': {
    margin: '0 auto',
    width: '80%',
  },

  '.Menus': {
    display: 'inline-block',
    width: '100%',
  },

  '.Child': {
    '.Menu': {
      float: 'none',
      margin: 0,
    },

    ul: {
      li: {
        float: 'none',
      },
    },
  },
  '.Credits': {
    margin: '2em 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.tablet}px)`]: {
    '.Child': {
      float: 'left',
      width: '30%',
      margin: '0 3% 0 0',
    },
  },
})
