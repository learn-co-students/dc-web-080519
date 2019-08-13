require 'pry'
require_relative './app.rb'

jeff = Animal::LandAnimal.new("Jeff", "giraffe", 1)
fido = Animal::Dog.new("Fido", 8)
rex = Animal::Dog.new("Rex", 1)
fluffy = Animal::Cat.new("Fluffy", 4)
goldie = Animal::Fish.new("Goldie", 2)

snoop = Rapper::Dog.new("Snoop Dogg")
binding.pry
0
