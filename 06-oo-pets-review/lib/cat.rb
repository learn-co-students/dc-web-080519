# A `Dog` and a `Cat` are initialized with a name and an **Owner object**
# - Define a `Dog` and `Cat` class that have the attributes required by the test suite. Keep in mind, some of the attributes should be readable and writable (i.e. `attr_accessor`s), while others may need to be _just_ setters (`attr_writer`) or _just_ getters (`attr_reader`). The test suite will make this clear so pay attention to the test output.


class Cat
  # code goes here
  attr_reader :name
  attr_accessor :owner, :mood
  @@all = []

  def initialize(name, owner)
    @@all << self
    @name, @owner = name, owner
    @mood = "nervous"
  end
  
  def self.all
    @@all
  end

end