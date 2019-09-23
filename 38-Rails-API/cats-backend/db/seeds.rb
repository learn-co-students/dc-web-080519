# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: "Dumbledore", age: 100, image: "https://i.redd.it/57ps5yozol231.jpg", available: false)
Cat.create(name: "Stan", age: 2, image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg", available: true)
Cat.create(name: "Pussinboots", age: 5, image: "https://media1.tenor.com/images/8d22903e2ad3c3a9fad0fbff5b4b6960/tenor.gif", available: true)
Cat.create(name: "Denice", age: 6, image: "https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg", available: true)

Hobby.create(name: "Eye Contact", description: "Gaze lovingly into your eyes")
Hobby.create(name: "Knocking Cups Over", description: "*crash*")
Hobby.create(name: "Bopping", description: "Has paws, will bop")

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 2)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 2)
CatHobby.create(cat_id: 4, hobby_id: 1)
