# An Owner will know about all their pets, be able to buy a pet, change a pet's mood through walking or feeding it, and sell all of their pets (for when they move to that tiny NYC studio after college).
# - An owner should be able to buy and sell a pet, which will change the pet's mood.
# - When an owner buys a new pet, the `buy_cat/buy_dog` methods **take in an argument of a _name_.** You must take that name and do the following:
# - _Make a new instance of the appropriate pet, initializing it with that name and the owner who is purchasing it_.
# - An owner should have the ability to walk all their dogs or feed all their cats, which will change the mood of all of their pets of that type to "happy".

require 'pry'

class Owner

  @@all = []

  attr_reader :name, :species
  
  def initialize(name)
    @name = name
    @species = "human"
    @@all << self
  end

  def say_species
    "I am a human."
  end

  def self.all
    # return all the owners
    @@all
  end

  def self.count
    # returns the number of owners that have been created
    self.all.length
  end

  def self.reset_all
    # can reset the owners that have been created
    self.all.clear
  end

  def cats
    Cat.all.select{|kitty| kitty.owner==self}
  end 

  def dogs
    Dog.all.select do |pup|
      pup.owner == self
    end
  end

  def buy_cat(cat_name)
    Cat.new(cat_name, self)
  end

  def buy_dog(name)
    Dog.new(name, self)
  end

  def walk_dogs
    # makes the dogs' moods happy
    my_dogs = self.dogs #=> array of this owner's dogs
    my_dogs.each do |dog|
      dog.mood = "happy"
    end
  end

  def feed_cats
    # makes the cats' moods happy
    self.cats.each do |cat|
      cat.mood = "happy"
    end
  end

  def sell_pets
    # change mood of all pets of this owner
    # change owner of all pets
    # get array of all of this owner's pets
    my_pets = self.cats + self.dogs
    my_pets.each do |pet|
      pet.mood = "nervous"
      pet.owner = nil
    end
  end

  def list_pets
    "I have #{self.dogs.length} dog(s), and #{self.cats.count} cat(s)."
  end

end