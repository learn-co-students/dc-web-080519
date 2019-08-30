# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Flag.destroy_all

Flag.create(region: "Belize", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/510px-Flag_of_Belize.svg.png", info: "The only national flag with a person on it", rating: 3)

Flag.create(region: "South Korea", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/510px-Flag_of_South_Korea.svg.png", info: "The trigrams represent the four classical elements", rating: 5)

Flag.create(region: "Mauritania", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/510px-Flag_of_Mauritania.svg.png", info: "Now Jamaica is the only national flag with no red, white or blue", rating: 3)

Flag.create(region: "Northern Territory of Australia", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_the_Northern_Territory.svg/510px-Flag_of_the_Northern_Territory.svg.png", info: "The flower is a Sturt's desert rose", rating: 6)

Flag.create(region: "Provo, Utah (outdated)", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Provo%2C_Utah_%281985%E2%80%932015%29.svg/440px-Flag_of_Provo%2C_Utah_%281985%E2%80%932015%29.svg.png", info: "Notoriously bad", rating: 1)

Flag.create(region: "Lofa County, Liberia", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_Lofa_County.svg/240px-Flag_of_Lofa_County.svg.png", info: "Hard to describe", rating: 2)

Flag.create(region: "Madagascar", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/255px-Flag_of_Madagascar.svg.png", info: "The colors represent the Merina kingdom and the Hova people", rating: 3)