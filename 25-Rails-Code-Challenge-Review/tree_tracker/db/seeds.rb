User.destroy_all
Tree.destroy_all
Sighting.destroy_all

shannon = User.create(first_name: "Shannon", last_name: "Nabors", username: "snabes")
jc = User.create(first_name: "JC", last_name: "Chang", username: "JCsuperstar")
bruno = User.create(first_name: "Bruno", last_name: "Garcia Gonzalez", username: "pruno")

loblolly = Tree.create(common_name: "Loblolly Pine", binomial_name: "pinus taeda", leaf_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tree_Types_and_Barks_004.jpg/440px-Tree_Types_and_Barks_004.jpg", category: "evergreen")
red_oak = Tree.create(common_name: "Red Oak", binomial_name: "quercus rubra", leaf_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Quercus_rubra_IP0905004.jpg/360px-Quercus_rubra_IP0905004.jpg", category: "deciduous")
white_oak = Tree.create(common_name: "White Oak", binomial_name: "quercus alba", leaf_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/440px-2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG", category: "deciduous")

sro1 = Sighting.create(city: "Washington", state: "DC", condition: 7, user_id: shannon.id, tree_id: red_oak.id)
swo1 = Sighting.create(city: "Washington", state: "DC", condition: 2, user_id: shannon.id, tree_id: white_oak.id)
sll1 = Sighting.create(city: "Charleston", state: "SC", condition: 9, user_id: shannon.id, tree_id: loblolly.id)
bll1 = Sighting.create(city: "Washington", state: "DC", condition: 7, user_id: bruno.id, tree_id: red_oak.id)
sro2 = Sighting.create(city: "Columbia", state: "MD", condition: 5, user_id: shannon.id, tree_id: red_oak.id)
jcro1 = Sighting.create(city: "Washington", state: "DC", condition: 6, user_id: jc.id, tree_id: red_oak.id)
jcwo1 = Sighting.create(city: "Baltimore", state: "MD", condition: 8, user_id: jc.id, tree_id: white_oak.id)