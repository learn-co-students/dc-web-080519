## A few things to add to yesterday's lecture

- fix car show page error (when not logged in)
- cache
- memoization (layouts // cars show)
- whiteboarding!

## Whiteboarding Activity
[ ] = window
* [ Chrome ]
* Quit Chrome and Re-open it
* [ Chrome, Chrome ]
* [ Chrome ] , [ Chrome ]
* [ Incognito-Chrome ] , [ Chrome ]
* [ Firefox ] , [ Chrome ]
* Cookies have time options we did not look into

---
# Authentication

Checking to see that the user is who they say they are

---
## The problem:
- User log in requires security

## Introducing ... Passwords:
- don't store as plain-text though!
- don't 'roll your own auth'


## Introducing ... BCrypt:
- gem we need to bring into our project
- add_column to `users` table
- add macro to `User` model
- user.authenticate
- user.password_confirmation

## Lets implement Authentication
- Add bcrypt into our application
- edit our login functionality
- add a `create account` option
