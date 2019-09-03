Car.destroy_all
Dealership.destroy_all


d1 = Dealership.create(name: "CarMax")
Car.create(make: "Honda", model: "CRV", year: 2019, mileage: 6000, dealership_id: d1.id )
Car.create(make: "Subaru", model: "Forester", year: 2015, mileage: 60000, dealership_id: d1.id)
Car.create(make: "HotWheels", model: "SuperChargedCar", year: 2000, mileage: 160000, dealership_id: d1.id)
