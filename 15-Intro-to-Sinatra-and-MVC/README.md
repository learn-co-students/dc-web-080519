# Intro to Sinatra / MVC

## Welcome to Module 2!

## Up until now:
- We have been stuck in the command line!
- We want to build web applications!

## We have started to solve our problem:
Learning about the HTTP Request-Response Cycle
  - Uses HTTP (HyperText Transfer Protocol)
  - WWW has Client + Server Architecture
Learning about the HTTP protocol
  - HyperText Transfer Protocol
  - text-based
  - protocol of the WWW
Learning about Rack
  - what is it?
    - launch with `rackup`
    - launching a server
    - allows you to build a server using Ruby
    - gem
  - what is "localhost"
    - "self" server
    - 127.0.0.1
  - what is a port?
    - "9292"
    - a connection "gateway"
  - how does this tie into RR Cycle?
    - Rack is a gem that when you run it => server
    - running it locally allows to develop a website privately

## Anatomy of URLs

## Introducing ... REST:
- What is it?
  - REpresentational State Transfer
  - solution to a problem
    - HTTP is "stateless"
      - no 'client context' is stored in the server between requests
    - navigating a website results in the next "resource" (the next application state) being transferred to the client
- how does this tie into RR Cycle?
  - CRUD
- How does CRUD fit into REST?

## Introducing ... Sinatra:
1. Is a Gem
  - uses ActiveRecord!
  - uses Rack!
2. Why Sinatra?
  - small gem that makes it easy to get started with Ruby web development
  - onramp to Ruby on Rails b/c it's 'Rack-based'
  - onramp to Ruby on Rails b/c it employs 'MVC'

## MVC is...
  - a design philosophy
  - an architectural pattern
  - widespread!
  - separation of concerns for logic of our web application
  - *Interactively get at M / V / C*
  Models
  View
  Controller

## MVC + CRUD + REST
- MVC apps usually adhere to REST for CRUD functionality
- REST_route = action + path

## Today's codebase brought to you by ...
- convention > configuration
- rake tasks
- ERB
- block -> "handler for the route"
- macros

## PSA: regarding the tests in this module's labs
- tests try to interact with your web application's interface
- tests therefore require you to build very specifically to their assumptions
- Call us over!

## Deliverables

- View a homepage
- View a listing of all books
- View a detail page for an individual book
*...*
- Create a new book
- Edit an existing book
- Delete an existing book
