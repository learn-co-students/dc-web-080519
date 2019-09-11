User.destroy_all
Tree.destroy_all
Sighting.destroy_all

shannon = User.create(first_name: "Shannon", last_name: "Nabors", username: "snabes")
carlos = User.create(first_name: "Carlos", last_name: "Velazquez", username: "tree-club-secretary")
marisa = User.create(first_name: "Marisa", last_name: "Canan-Zucker", username: "BranchDressing")

loblolly = Tree.create(common_name: "Loblolly Pine", fact: "The word 'loblolly' is a combination of 'lob', referring to thick, heavy bubbling of cooking porridge, and 'lolly', an old British dialect word for broth, soup, or any other food boiled in a pot. In the southern United States, the word is used to mean 'a mudhole; a mire,' a sense derived from an allusion to the consistency of porridge. Hence, the pine is named as it is generally found in lowlands and swampy areas.", binomial_name: "pinus taeda", category: "evergreen", id_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Loblolly_Pines_South_Mississippi.JPG/440px-Loblolly_Pines_South_Mississippi.JPG")
redoak = Tree.create(common_name: "Red Oak", fact: "'Rubra' comes from the Latin word rubrica meaning 'red ochre'.  The word 'rubric' is derived from the same root, since directions in religious services (the original meaning) were often in red writing.", binomial_name: "quercus rubra", category: "deciduous", id_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Quercus_rubra_%40_Tortworth_Court.jpg/440px-Quercus_rubra_%40_Tortworth_Court.jpg")
whiteoak = Tree.create(common_name: "White Oak", fact: "The city name 'Albuquerque' literally means 'white oak'.  The word 'cork' is thought to possibly derive from the root 'quercus', meaning oak.", binomial_name: "quercus alba", category: "deciduous", id_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/440px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg")

Sighting.create(user_id: marisa.id, tree_id: loblolly.id, city: "Montpelier", state: "VT", condition: 2, image: "https://target.scene7.com/is/image/Target/GUEST_ba36dc9c-0c2a-4542-8b35-3fcbaedbc307?wid=488&hei=488&fmt=pjpeg")
Sighting.create(user_id: carlos.id, tree_id: redoak.id, city: "New Orleans", state: "LA", condition: 1, image: "http://hometownenursery.com/assets/images/redoak.jpg")
Sighting.create(user_id: shannon.id, tree_id: redoak.id, city: "Frederick", state: "MD", condition: 8, image: "https://www.lpsnrd.org/sites/default/files/styles/tree_product/public/trees/northern_red_oak_full_2-fall.jpg?itok=ZQqQ-8Rs")
Sighting.create(user_id: carlos.id, tree_id: whiteoak.id, city: "Washington", state: "DC", condition: 1, image: "https://www.southstlouisswcd.org/wp-content/uploads/2018/11/White-Oak-2.jpg")
Sighting.create(user_id: marisa.id, tree_id: redoak.id, city: "Richmond", state: "VA", condition: 1, image: "https://www.waterwiseplants.org/images/plants/Quercus%20rubra%20(1).jpg?width=487&height=487&mode=crop&bgcolor=fff")
Sighting.create(user_id: shannon.id, tree_id: loblolly.id, city: "Harrisburg", state: "PA", condition: 1, image: "https://s3.amazonaws.com/mygardenlife.com/plant-library/full/5535_18.jpg")
Sighting.create(user_id: carlos.id, tree_id: loblolly.id, city: "Baltimore", state: "MD", condition: 1, image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1296915?$456$")
Sighting.create(user_id: marisa.id, tree_id: loblolly.id, city: "Montpelier", state: "VT", condition: 2, image: "https://target.scene7.com/is/image/Target/GUEST_ba36dc9c-0c2a-4542-8b35-3fcbaedbc307?wid=488&hei=488&fmt=pjpeg")
Sighting.create(user_id: carlos.id, tree_id: redoak.id, city: "New Orleans", state: "LA", condition: 1, image: "http://hometownenursery.com/assets/images/redoak.jpg")
Sighting.create(user_id: shannon.id, tree_id: redoak.id, city: "Frederick", state: "MD", condition: 8, image: "https://www.lpsnrd.org/sites/default/files/styles/tree_product/public/trees/northern_red_oak_full_2-fall.jpg?itok=ZQqQ-8Rs")
Sighting.create(user_id: carlos.id, tree_id: whiteoak.id, city: "Washington", state: "DC", condition: 1, image: "https://www.southstlouisswcd.org/wp-content/uploads/2018/11/White-Oak-2.jpg")
Sighting.create(user_id: marisa.id, tree_id: redoak.id, city: "Richmond", state: "VA", condition: 1, image: "https://www.waterwiseplants.org/images/plants/Quercus%20rubra%20(1).jpg?width=487&height=487&mode=crop&bgcolor=fff")
Sighting.create(user_id: shannon.id, tree_id: loblolly.id, city: "Harrisburg", state: "PA", condition: 1, image: "https://s3.amazonaws.com/mygardenlife.com/plant-library/full/5535_18.jpg")
Sighting.create(user_id: carlos.id, tree_id: loblolly.id, city: "Baltimore", state: "MD", condition: 1, image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1296915?$456$")
Sighting.create(user_id: marisa.id, tree_id: loblolly.id, city: "Montpelier", state: "VT", condition: 2, image: "https://target.scene7.com/is/image/Target/GUEST_ba36dc9c-0c2a-4542-8b35-3fcbaedbc307?wid=488&hei=488&fmt=pjpeg")
Sighting.create(user_id: carlos.id, tree_id: redoak.id, city: "New Orleans", state: "LA", condition: 1, image: "http://hometownenursery.com/assets/images/redoak.jpg")
Sighting.create(user_id: shannon.id, tree_id: redoak.id, city: "Frederick", state: "MD", condition: 8, image: "https://www.lpsnrd.org/sites/default/files/styles/tree_product/public/trees/northern_red_oak_full_2-fall.jpg?itok=ZQqQ-8Rs")
Sighting.create(user_id: carlos.id, tree_id: whiteoak.id, city: "Washington", state: "DC", condition: 1, image: "https://www.southstlouisswcd.org/wp-content/uploads/2018/11/White-Oak-2.jpg")
Sighting.create(user_id: marisa.id, tree_id: redoak.id, city: "Richmond", state: "VA", condition: 1, image: "https://www.waterwiseplants.org/images/plants/Quercus%20rubra%20(1).jpg?width=487&height=487&mode=crop&bgcolor=fff")
Sighting.create(user_id: shannon.id, tree_id: loblolly.id, city: "Harrisburg", state: "PA", condition: 1, image: "https://s3.amazonaws.com/mygardenlife.com/plant-library/full/5535_18.jpg")
Sighting.create(user_id: carlos.id, tree_id: loblolly.id, city: "Baltimore", state: "MD", condition: 1, image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1296915?$456$")
