export const View = state =>
  div([
    h1('tofu - trust on first use'),

    Float({
      ...state,
      img: '/comics/brainlesstales-tofu.jpg',
      caption: Link({ to: 'https://www.brainlesstales.com/', text: 'comic by brainlesstales' }),
    }),

    p('how can we trust a homepage before we even load it?'),

    p('this is a central problem of the web that has not been addressed. until now.'),

    p([
      'how can we trust a homepage which manages',
      'our money, our stocks, our insurance plan, our routers, our friend list, our private messages,',
      'not to send us malicious code, intended or unintended.',
    ]),

    p([
      'homepages and webapps are used to administrate a lot of our public and private lifes,',
      ' yet most people (and many developers) do not realize,',
      ' how broken and dangerous the delivery method of those applications is.',
    ]),

    p([
      'and those of us that do?',
      ' we wake up deep at night, in cold sweat, and think about becoming a gardener.',
    ]),

    h2('solutions'),
    p('so, how do we solve this problem using existing technology?'),

    h3('auditing'),
    p([
      'the javascript of a homepage (in 2020) tends to be about 1+ megabyte of',
      ' garbled text with shortened variable names and removed whitespace.',
    ]),

    p('behind that megabyte(s) of garbled text lurk dependencies of dependencies of dependencies.'),
    p('usually thousands of them.'),

    p([
      'this is not necessarily a bad thing,',
      ' but it makes verification, updating and auditing a lot more complicated.',
    ]),

    p('most developers do not even read the libraries they depend upon.'),

    p([
      'in comparison, the average terms of service are 50kb to 100kb in size,',
      ' and when did any of us last read one of those?',
    ]),
    p([
      'tos have whitespace and use plain language.',
      ' they also usually do not change every few days.',
    ]),

    p([
      'this means that auditing (especially since it has to be done on every page load)',
      'does not seem to be a viable solution here.',
    ]),

    h3('formal verification'),
    p([
      'theoretically,',
      ' every script could be analyzed and proven to do what it should in every situation.',
    ]),

    p([
      'but',
      Link({
        text: 'testing',
        to: 'https://en.wikipedia.org/wiki/List_of_software_bugs',
        title: 'most expensive bugs',
      }),
      ' software is hard.',
    ]),
    p([
      "it's not yet (nor soon) possible to use ",
      Link({
        text: 'ai',
        to: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
        title: 'artificial intelligence',
      }),
      ' to add tests and comments to software,',
      ' and once it is possible, ',
      ' the same ai will also write the functionality it tests, describes, and proves.',
    ]),

    p('without ai, this would create millions of peoplehours of work.'),

    p('not something that we can assume to happen either.'),

    h3('browsers'),
    p('browsers could implement a versioning system for assets, and they partially have.'),

    p([
      'one key part are ',
      Link({
        text: 'sri hashes',
        to: 'https://en.wikipedia.org/wiki/Subresource_Integrity',
        title: 'subresource integrity hashes',
      }),
      ' which proof',
      ' that the hash the server created for the piece of payload he expects to have sent',
      ' will correspond to the hash the browser creates on load.',
    ]),
    p([
      'almost noone uses them,',
      ' none of the big web frameworks provides sri hashes for the sources they create.',
    ]),

    p([
      'even if those hashes were standard, ',
      'subresource identity hashes only provide a certain level of security,',
      'a compromised server can send ',
      ' compromised scripts and compromised hashes derived from those scripts',
      ' and the browser, as well as the person behind the screen, would be non the wiser.',
    ]),

    p([
      i('hint:'),
      ' combine sri-hashes with the @webboot database and suddenly things look a lot better.',
    ]),

    h3('service worker caching'),
    p([
      'service workers allow us to cache',
      ' the contents of a homepage for later use and make the homepage available offline.',
    ]),

    p([
      'using that caching mechanism in a smart way,',
      'an upgrade and deprecation mechanism can be implemented,',
      'prompting the user to update the homepage scripts to the new version when needed.',
    ]),

    p([
      'this solves parts of the tosu problem, giving control of homepage versioning to users,',
      ' where it should always have been.',
    ]),

    h3('browser extensions'),
    p([
      'the ',
      Link({ text: 'noscript', to: 'https://github.com/hackademix/noscript' }),
      ' browser extension actually uses sri hashes to block javascript,',
      'it just adds a hash to the &lt;script identity="bogus"&gt;',
      ' tag that will not match any script.',
    ]),

    p('this makes the browser reject the script before executing it.'),

    p('now what if, instead of adding a bogus hash, we add the expected hash?'),

    p([
      'this would make a lot of places on the www a lot safer in an instant,',
      ' yet allow some pages that need javascript to function.',
    ]),

    p(
      i([
        'every noscript user knows how often we disable it to get some page to load,',
        ' despite our principles.',
      ]),
    ),

    p('we need a magical source of truth for those hashes, and this is what @webboot provides.'),

    h3('homepage developers'),
    p('developers will need a way to authorize and verify new hashes of homepages they control.'),

    p([
      'this also includes verification of control of that homepage property,',
      ' using either a domain.com/keybase.txt identity or a domain.com/keys.txt file.',
    ]),
    p([
      'using those keys, hashes can be cryptographically verified and checked when being submitted,',
      ' making it possible to create chains of trust',
      ' that end with the actual developers of the properties.',
    ]),
    p([
      'others can then audit the changes and add their verification,',
      ' making the chain links even stronger.',
    ]),

    p('TODO: add information about client side functionality, how the cryptography works etc.'),
  ])
