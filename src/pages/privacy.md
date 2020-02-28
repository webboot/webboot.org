---
@state {
  "title": "@webboot - privacy policy"
}
---

<div>

## privacy policy

## Do's

### encourage anonymity

most of our services will include measures that prevent us from knowing your ip address.

since the threat vector in those cases are we,
@webboot, it usually is sufficient to relay all requests through anonymizer networks.

for a chance at actual anonymity,
usage of tools like tor and i2c is encouraged,
and our networks will not block requests from those networks.

### debug logging

some debugging data will be logged, for a maximum of 7 days.
this data will never include any ip addresses, or other unneeded identifying data,
and will never be collected or analyzed for tracking purposes.

### public data

data that gets saved online and publicly in our database:

1. signing git username
2. signing public gpg key + metadata
   (metadata is name and email attached to that key.
   we neither verify, extract, nor process this information, and we never will.
3. git provider (gitlab, github, ...)
4. domain / uri
5. git organization/account
6. git repository (for open source)
7. a list of files this homepage is expected to serve and their hashes.
8. a comment by the publisher, informing about the changes, optional.

this is all the data we save, there is no hidden database,
everything we collect is also public by default.

all authentication is done locally using either your local gnupg installation,
or the cryptography libraries of your browser.
no login to our servers is possible or necessary.

we will run tor proxies to allow anonymous publishing.
once they are running, their onion addresses will be published here.


## Dont's

except the public data above,
we will never, under no circumstances,
share information about our users with **any** third parties.

### canary:

as long as
[this canary link works](/canary/)
we have not shared any data about our users with anyone.

### local data
personal data we access on your machine and do not send anywhere, ever:

1. your git config user.email (never uploaded)
2. your public gpg key associated with that email.
3. your gpg keys published on github or gitlab.

thats it.
</div>
