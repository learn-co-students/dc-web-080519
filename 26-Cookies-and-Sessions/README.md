# Cookies & Sessions

(Bring whiteboards)

---
## The problem:
- We want people to stay logged in, etc.

- HTTP is a `stateless` protocol:
The *SERVER* does not hold any information on previous requests sent by *CLIENT*.

## Introducing ... Cookies
- Nowadays websites ask you to "Accept Cookies policy"
  - Why is everyone using cookies?

- `EditThisCookie` Exploration

- Cookies were introduced to maintain *STATE*
- They accomplish this by storing information as text and sending this text with our HTTP messages
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

- Where are cookies stored / where is state maintained?  
    - Server-side || *Client-side* || Both

- Sent as part of HTTP Headers of an HTTP Request or HTTP Response
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

## Lets Employ Cookies
- Where do we set cookies?
  - controller
  - server-side (app-side)
- How come we set them server-side yet they appear in the browser?
- Chrome Developer Tools -> Networking Tools

## Whiteboarding Activity
<!-- [ ] = window -->
* [ Chrome ]
* Quit Chrome and Re-open it
* [ Chrome, Chrome ]
* [ Chrome ] , [ Chrome ]
* [ Incognito-Chrome ] , [ Chrome ]
* [ Firefox ] , [ Chrome ]
<!-- Cookies have time options we did not look into -->

## Introducing ... Sessions (In Rails)
- https://stackoverflow.com/questions/31374105/where-is-the-session-stored-in-rails
- Some data (the session_token for decryption) is kept server-side
- Some data (the actual session information -- encrypted) goes along with HTTP Messages as cookies

## Lets build Log-in functionality into our app!
