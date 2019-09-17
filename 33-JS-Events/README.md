## Callback Functions as...
- function declarations
- function expressions
- arrow functions

# Event Listeners

## .addEventListener() on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback function is the event itself

## Example of Events
- click
- DOMContentLoaded
- hover/mouseover
- keypress
- submit

## When to add an event Listener
- on load of page?
- on creation of element?

## Practice
- When click of email -> console.log("send an email to ann..")
- When click of submit -> add new instructor row to the table

## Some events have default behavior
- event.preventDefault()

## event.currentTarget vs. event.target
- event.currentTarget: the HTML element addEventListener is attached to
- event.target: the innermost node that triggers the event

## Additional Resources
- More about how async works with the stack: https://www.youtube.com/watch?v=8aGhZQkoFbQ
