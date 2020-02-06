export const View = () => [
  div({ id: 'overview' }, [
    h1('supporting @webboot'),
    p('this page shows multiple ways to support @webboot.'),
  ]),

  div({ id: 'contribute' }, [
    h2('contribute code'),
    p([
      'you are a person who knows some node and you want to get into it? ',
      'head over to our ',
      Link({ to: 'https://github.com/webboot/' }, 'github repositories'),
      ' and read through the issues to find something to get started with.',
    ]),
  ]),

  div({ id: 'suggestions' }, [
    h2('share ideas'),
    p([
      'have an idea/suggestion how to make webboot better?',
      Link({ to: 'https://github.com/webboot/root/issues', text: 'file an issue' }),
    ]),
  ]),

  // div({ id: 'contribute' }, [
    // h2('validate code'),
    // p([
      // 'you are a person who knows some code, but you do not really want to work?',
      // ' head over to our ',
      // Link({ to: 'https://github.com/webboot/' }, 'github repositories'),
      // ' and read through the code, it\'s procrastination.',
    // ]),
    // p([
      // 'We will implement login/registration and social networking features ',
      // 'for validation over the next few months.',
    // ]),
  // ]),

  div({ id: 'donate' }, [
    h2('donate'),
    p([
      'do you have that cryptocurrency wallet you want to empty',
      ' because you always worry about losing the private key anyways?',
    ]),
    p('that wad of cash in your mattress is uncomfortable when sleeping?'),

    p('TODO: add wallet addresses.'),
  ]),
]
