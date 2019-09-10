## A few things to add:
- Add "Welcome , user!" to our navbar (hr too!)
- Our Cars#Index no longer shows last_visited_make
- User.find_or_create_by(name: "Bruno", username: "BGthaOG", password: "password123")

---
# Authorization

Authentication: Checking to see that the user is who they say they are
    ... OK, so you are who you say you are...
*Authorization*: what are you allowed to do on our site?

App privileges!
- admins can delete users, regular users cannot
- if its your own info, you can edit it (and only you can)
- give them access to features based on their subscription-level

# Our Problem
- Logged in or not, all of our pages are accessible
- AKA: everyone is authorized for every page!


# Lets start with:
- can only create a car if logged in
  - shouldnt be able to even see the form
- car `delete` button only if logged in
  - conditional render
  - let them see the button, if they click it
    - if they are not logged in, redirect 
