export const View = state => [
  footer({ class: 'Footer' }, [
    div({ class: 'Container'}, [
      div({ class: 'Menus' }, [
        div({ class: 'Child Info' }, [
          h2('@webboot'),
          p('trust on every step.'),
          p('created by the @webboot dao.'),
        ]),
        div({ class: 'Child' }, [
          h2('code'),
          ul([
            li(Link({ to: 'https://github.com/webboot/root/' }, 'webboot')),
            li(Link({ to: 'https://github.com/webboot/core/' }, '@webboot/core')),
            li(Link({ to: 'https://github.com/webboot/cli/' }, '@webboot/cli')),
            li(Link({ to: 'https://github.com/webboot/crypto/' }, '@webboot/crypto')),
            li(Link({ to: 'https://github.com/webboot/webboot.github.io/'  }, 'this page')),
          ]),
        ]),
        div({ class: 'Child' }, [
          h2('social links'),
          ul([
            li(Link({ to: 'https://www.npmjs.com/org/webboot' }, 'npm')),
            li(Link({ to: 'https://twitter.com/webbootorg' }, 'twitter')),
            li(Link({ to: 'https://keybase.io/webboot' }, 'keybase')),
          ]),
        ]),
      ]),

      div({ class: 'Credits' }, [
        'made with a few bits of ',
        Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
      ]),
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

  '.Menus, .Credits': {
    a: {
      color: vars.greyLight,
      textDecoration: 'underline',

      '&:hover': {
        color: vars.greyDark,
      },
    },
  },

  '.Container': {
    margin: '0 auto',
    maxWidth: vars.maxWidth,
    padding: '0 5%',
    textAlign: 'left',
  },

  '.Menus': {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },

  '.Child': {
    textAlign: 'left',

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
