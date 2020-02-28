---
@state {
  "title": "@webboot - tosu"
}
---

<div>

# tosu - trust on second (and subsequent) use

<Float
  state=''
  url="https://sebiwi.github.io/"
  text="comic by sebiwi"
  height="246"
  img="/comics/sebiwi-trust.jpg"
  width="389">
</Float>

tosu. we made that up. but being written somewhere on the internet makes it a thing now.
there also might be a wikipedia page in the near future,
and once there is, we will link it here.

lets assume we solved the [tofu problem](/tofu/),
we loaded the first version of a homepage in a trustable way,
and we have the working application running on our device now.

great.

now what happens when the server wants to update our client app?

how will we verify that the update actually is a piece of software we want to run?


## threat vectors

### hackers

maybe someone hacked the servers between our first use of the app and now.

### mitm attack

the https connection to the server might have been
[man in the middled](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
in the country/company/coffeshop network we just connected to.

simply said: we MUST NOT trust the server to send us valid code,
on the contrary, we SHOULD assume to get malicious payloads.

### broken code

the developers of an app might have shipped a version of the code that does not work.

if only we could go back to the version of 5 minutes ago.

## solution

this problem can be solved by making updates of homepages controllable by us, the users,
and by providing an additional "source of integrity proofs" using the @webboot network.

to make sure no user gets stuck on old and broken versions of an app,
the webboot network will also allow both deprecation of versions,
as well as urgent security fixes.

the browser ui (either obtained via browser extension or embedded using our @magic widgets)
will notify the user about updates and security related deprecations,
but still leave the user in as much control as possible.
if there is full trust,
all updates for pages can also be accepted automatically
and on a per-page basis,
they will then be checked by webboot in the background,
not disrupting the workflows at all, until it needs to.
