---
@state {
  "title": "@webboot - getting started"
}
---

<div>

## getting started

we are still working on the tools described below,
our semi-public alpha will start soon.

### cli *- coming soon*

first, install webboot.
`npm install -g webboot`

then, go to the directory with your public page and run

`webboot`

webboot will guide you through the process.

### browser extensions *- coming soon*

the webboot browser extension for both firefox and chrome
has been uploaded to the respective app stores.

to install them, just click the icons below.

TODO: add links once they exist.

### app widget / embeds

the webboot app widget allows you to embed the webboot gui into your page.

this allows you to show the webboot gui to every one of your users.

see below for available integrations:

* #### [@magic](https://magic.github.io) *- coming soon*

  @magic is a static page generator that generates about 15kb of html + css + js boilerplate.

  made by the people that made @webboot.

* #### [gatsby](https://www.gatsbyjs.org/) *- coming soon*
  gatsby is a free and open source framework based on react
  and helps developers build blazing fast websites and apps.


### db *- coming soon*

the webboot validator servers will provide a publicly queryable database of hashes.

those hashes will be published and mirrored to three locations:

* [github backup](https://github.com/webboot/db)
* [gitlab backup](https://gitlab.com/webboot/db)
* [api.webboot.org](https://api.webboot.org/)

all apps will query all of those three sources for hashes everytime they check,
making it very hard for any attacker to take over the system.

### smart contracts *- coming soon*

we are exploring smart contract based solution to decentralize both
the hash verification as well as the storage of the database.
this will add an additional layer providing
data persistance, integrity guarantees and network stability.

once the smart contracts are in place, the
<Link to="https://en.wikipedia.org/wiki/Bus_factor" text="hit by a bus problem"></Link>
will not be part of the equation anymore,
making our team irrelevant to the wellbeing of the network.

### gui *coming soon*

first, install the cli:
`npm install -g webboot`

then, run the gui:

`webboot ui`

go to the url the cli tells you (probably http://localhost:5235) and start adding pages.

### packages

* #### [@webboot/core](https://github.com/webboot/core)

  the core library functionality of @webboot. used both in clients and on the server.

  [docs](https://webboot.github.io/core)

* #### [@webboot/cli](https://github.com/webboot/cli)

  command line interface exposing the @webboot functionality to bash
  [docs](https://webboot.github.io/cli)

* #### [@webboot/crypto](https://github.com/webboot/crypto)

  all cryptographic functionality of @webboot,
  split into a separate repository to make testing and auditing easier.

  [docs](https://webboot.github.io/crypto)

* #### [@webboot/keys](https://github.com/webboot/keys)

  the @webboot pgp public key and fingerprint.

  [keys](https://webboot.github.io/keys)
