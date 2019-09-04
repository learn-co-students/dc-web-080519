# Rails RESTful CRUD
---
## Morning Lecture's Objectives
- Build a Rails RESTful app with full CRUD capabilities
- Distinguish between `form_for` and `form_tag`, and use both helpers
- Use Rails link helpers to build links
- Use `rails routes` to abstract URLs
- Use `before_action` to minimize repeated code

## What questions do you have?
- rails generate --> which one(s) to use??
- CRUD stuff --> how does everything connect?


## This Lecture's Objectives
- clean up my few changes to the codebase :)
  - I changed the original migration (+ schema) & seeds.rb
- Strong parameters
  - a way to prevent malicious parameters
  - filtering / permitting some paremeters
- Add a second model to our RESTful app: `Dealership`:
  - Dealership -< Cars
  - Update `Car`-code accordingly
  - C ✓
  - R ✓
- `before_action`
