# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Snack.destroy_all
Retailer.destroy_all

Snack.find_or_create_by(name: "Nachos", calories: 500, deliciousness: 1)
Snack.find_or_create_by(name: "Honey Nut Cheerios", 
    calories: 850, deliciousness: 10)
Snack.find_or_create_by(name: "Mozzarella Sticks", calories: 900, 
    deliciousness: 7)

hostess = Retailer.find_or_create_by(name: "Hostess", year_established: 1902)
mars = Retailer.find_or_create_by(name: "Mars", year_established: 1902)

ringdings = Snack.find_or_create_by(name: "RingDings", calories: 600,
    deliciousness: 3, retailer: hostess)

