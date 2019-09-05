#Mod 2 Code Challenge Review

We are going to create a site where users can keep track of the trees they see.

##Models
We will have three models:
* A **User** will have a first name, a last name, and a username.  Users' names don't need to be unique, but two users should not be able to have the same username.  A user can have many sightings.
* A **Tree** should have a common name, a binomial name, a leaf image, and a category (deciduous or evergreen). It can also have an interesting etymological fact.  The binomial name must be two words, and the etymological fact must be at least 30 characters long or it's not considered interesting enough. A tree can have many sightings.
* A **Sighting** should have a city, a state, and the tree's condition as an integer from 1 to 10.  It can also have an image.

##User Stories
Users of our website should be able to:
* See a list of all the trees/see individual trees.
* See a list of all the sightings/see individual sightings.
* Create a new sighting.  They should be able to add a new tree at the same time, or choose from existing trees.
* Delete a sighting.