export const View = state => [
  h1([Link({ to: '/' }, '@webboot/packages')]),

  h2('@webboot/core'),
  GitBadges('webboot/core'),

  h2('@webboot/cli'),
  GitBadges('webboot/core'),
]
