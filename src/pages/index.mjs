export const View = state => [
  div({ id: 'about' }, [
    Hero(),
  ]),

  div({ id: 'packages'}, [
    h2('packages'),

    ul([
      li([
        h4(Link({ to: 'https://github.com/webboot/core' }, '@webboot/core')),
        p('the core functionality of @webboot. Used both in clients and on the server.'),
        p(Link({ to: 'https://webboot.github.io/core' }, 'docs')),
      ]),
      li([
        h4(Link({ to: 'https://github.com/webboot/core' }, '@webboot/cli')),
        p('command line interface exposing the webboot functionality to bash'),
        p(Link({ to: 'https://webboot.github.io/cli' }, 'docs')),
      ]),
    ]),
  ]),

  div({ id: 'sponsors' }, [
    h2('sponsors'),

    p('the following organizations and individuals have contributed to @webboot'),

    ul([
      li([
        h4('BitcoinersWithoutBorders'),
        p('Development and Evangelism'),
      ]),
      li([
        h4('Metalab Vienna'),
        p('Some of us work there and are members.'),
      ]),
      li([
        h4('Parallele Polis Vienna'),
        p('Some of us work there and are members.'),
      ]),
    ]),
  ])
]

//export const style = {
  //'#about': {
    //minHeight: '70vh',
  //},
//}
