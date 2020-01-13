export const View = () => [
  div({ id: 'overview' }, [
    h1('supporting @webboot'),
    p('this page shows multiple ways to support @webboot.'),
  ]),

  div({ id: 'contribute' }, [
    h2('contribute code'),
    p([
      'you are a person who knows some code? ',
      'head over to our ',
      Link({ to: 'https://github.com/webboot/' }, 'github repositories'),
      ' and read through the issues to find something to get started with.'
    ]),
  ]),

  div({ id: 'donate' }, [
    h2('donate'),
    p('do you have that cryptocurrency wallet you want to get rid of?'),
    p('that wad of cash in your mattress is uncomfortable when sleeping?'),

    p('TODO: add payment methods, wallet addresses.'),
  ]),
]
