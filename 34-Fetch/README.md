## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
  - https://en.wikipedia.org/wiki/Ajax_(programming)

- What is blocking (sync) vs non-blocking code (async)?
  - Ruby vs JS demo (http://localhost:300/hello/1)
  - setTimeout (who's counting?)

### Who's Keeping This Timer?
- How come we can have "non-blocking code"?
  - Introducing .... WebAPIs

### How do we handle async code?
- For example:
.addEventListener
.setTimeout

- So what would server communication look like since it's async?
- https://pokeapi.co/api/v2/pokemon

### "Callback Hell"
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Introducing ... Fetch
- Built in WebAPI
- Get JSON data
- Returns a promise object
- Practice with:  https://pokeapi.co/api/v2/pokemon

### Introducing ... Promises
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Practice with: http://localhost:300/hello/1
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise-=-=-=-=-=-Chaining
- `.then().then()`
- Easier to read, easier to manage
