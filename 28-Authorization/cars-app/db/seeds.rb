Car.destroy_all
Dealership.destroy_all
User.destroy_all

d1 = Dealership.create(name: "CarMax")
Car.create(make: "Honda", model: "CRV", year: 2019, mileage: 6000, dealership_id: d1.id )
Car.create(make: "Subaru", model: "Forester", year: 2015, mileage: 60000, dealership_id: d1.id)
Car.create(make: "Ford", model: "Mustang", year: 2000, mileage: 160000, dealership_id: d1.id)
Car.create(make: "Ford", model: "F-150", year: 2005, mileage: 110000, dealership_id: d1.id)
Car.create(make: "Nissan", model: "Altima", year: 2010, mileage: 18500, dealership_id: d1.id)
Car.create(make: "Scion", model: "tC", year: 2011, mileage: 16000, dealership_id: d1.id)
Car.create(make: "Jeep", model: "Patriot", year: 2014, mileage: 54000, dealership_id: d1.id)

User.create(name: "Bruno", username: "BGthaOG", password: "password123")
