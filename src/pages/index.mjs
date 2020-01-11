export const View = state => [
  Boot(state),

  h1([Link({ to: '/' }, '@webboot')]),
  p('trust on every boot'),
]
