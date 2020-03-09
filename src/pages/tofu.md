---
@state {
  "title": "@webboot - tofu"
}
---

<div>

# tofu - trust on first use

<LightBox
  state
  text="comic by brainlesstales"
  height="346"
  img="/comics/brainlesstales-tofu.jpg"
  width="389"
  url="https://www.brainlesstales.com">
</LightBox>

how can we trust a homepage before we even load it?

this is a central problem of the web that has not been addressed. until now.


how can we trust a homepage which manages
our money, our stocks, our insurance plan,
our routers, our friend list, our private messages,
not to send us malicious code, intended or unintended.

homepages and webapps are used to administrate a lot of our public and private lifes,
yet most people, and many developers, do not realize,
how broken and dangerous the delivery method of those applications is.

and those of us that do?
we wake up deep at night, in cold sweat, and think about becoming a gardener.

## solutions

so, how do we solve this problem using existing technology?

### auditing

the javascript of a homepage (in 2020) tends to be about 1+ megabyte of
garbled text with shortened variable names and removed whitespace.

behind that megabyte(s) of garbled text lurk dependencies of dependencies of dependencies.
usually thousands of them.

this is not necessarily a bad thing,
but it makes verification, updating and auditing a lot more complicated.

most developers do not even read the libraries they depend upon.

in comparison, the average terms of service are 50kb to 100kb in size,
and when did any of us last read one of those?

tos have whitespace and use plain language.
they also usually do not change every few days.

this means that auditing (especially since it has to be done on every page load)
does not seem to be a viable solution here.

### formal verification

theoretically,
every script could be analyzed and proven to do what it should in every situation.

but [testing](https://en.wikipedia.org/wiki/List_of_software_bugs) software is hard.

it's not yet (nor soon) possible to use
[ai](https://en.wikipedia.org/wiki/Artificial_intelligence)
to add tests and comments to software,
and once it is possible,
the same ai will also write the functionality it tests, describes, and proves.

without ai, this would create millions of peoplehours of work.

not something that we can assume to happen either.

### browsers

browsers could implement a versioning system for assets, and they partially have.

one key part are
[subresource integrity hashes](https://en.wikipedia.org/wiki/Subresource_Integrity)
which proof, that the hash the server created for the piece of payload he expects to have sent
will correspond to the hash the browser creates on load.

almost noone uses them,
none of the big web frameworks provides sri hashes for the sources they create.

even if those hashes were standard,
subresource identity hashes only provide a certain level of security,
a compromised server can send
compromised scripts and compromised hashes derived from those scripts
and the browser, as well as the person behind the screen, would be non the wiser.

*hint: combine sri-hashes with the @webboot database and suddenly things look a lot better.*

### service worker caching

service workers allow us to cache
the contents of a homepage for later use and make the homepage available offline.

using that caching mechanism in a smart way,
an upgrade and deprecation mechanism can be implemented,
prompting the user to update the homepage scripts to the new version when needed.

this solves parts of the tosu problem, giving control of homepage versioning to users,
where it should always have been.

### browser extensions

the
[noscript](https://github.com/hackademix/noscript)
browser extension actually uses sri hashes to block javascript,
it just adds a hash to the &lt;script identity="bogus"&gt;
tag that will not match any script.

this makes the browser reject the script before executing it.

now what if, instead of adding a bogus hash, we add the expected hash?

this would make a lot of places on the www a lot safer in an instant,
yet allow some pages that need javascript to function.

*every noscript user knows how often we disable it to get some page to load,
despite our principles*

we need a magical source of truth for those hashes, and this is what @webboot provides.

### homepage developers

developers will need a way to authorize and verify new hashes of homepages they control.

this also includes verification of control of that homepage property,
 using either a domain.com/keybase.txt identity or a domain.com/keys.txt file.

using those keys, hashes can be cryptographically verified and checked when being submitted,
making it possible to create chains of trust
that end with the actual developers of the properties.

others can then audit the changes and add their verification,
making the chain links even stronger.

TODO: add information about client side functionality, how the cryptography works etc.

wow, you made it. this was a lot of information.
are you insatiable?

there is more ahead,
ready to read about the [tosu](/tosu/) problem next?
