# Sinatra Forms

## GOAL: C_UD functionality
---
## PSA: regarding the tests in this module's labs
- tests try to interact with your web application's interface
- tests therefore require you to build very specifically to their assumptions
- Call us over!

## Renaming our `.erb` files to follow convention
- and updating our code accordingly

## Explore the return of `#erb()` method
- what is the return of the method?
- what is the data sent to the client?
  - view page-source
- *layout.erb* & *yield*

## Discovering the "routing table"
- `pry` ApplicationController *class space*
- `self.methods` and find `get` and `post`
  - macros! (for building out the "routing table" of our #<ApplicationController>)
  - "route" = HTTP verb + path

## Hacking required for `PUT` / `PATCH` / `DELETE`
- In `config.ru`
  - `use Rack::MethodOverride`
- In our Forms
  - `<input type="hidden" name="_method" value="PUT" >`

## Deliverables

- Create a new book
- Edit an existing book
- Delete an existing book
