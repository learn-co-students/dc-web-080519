class Guest
  # has_many trips
  # has_many listings, through trips

  attr_accessor :name

  @@all = []

  def initialize(name)
    @name=name
    @@all << self
  end

  def self.all
    # returns an array of all guests
    @@all
  end

  def listings
    # returns an array of all listings a guest has stayed at
    self.trips.map do |trip|
    trip.listing
  end

  end

  def trips
    # get array of all trips and iterate and find all trips that are associated with this guest
    Trip.all.find_all do |trip|
      trip.guest == self
    end
  end

  def trip_count
    # binding.pry
    self.trips.length
    # get array of all trips that this guest has taken
    # returns the number of trips a guest has taken
  end

  def self.pro_traveller
    # returns an array of all guests who have made over 1 trip
        # get array of all trips
        # count trips each guest has taken
        # select names of guest who have more than one trip
    self.all.select do |guest|
      guest.trip_count > 1
    end
  end


  def self.find_all_by_name(name)
  # takes an argument of a name (as a string), returns the all guests with that name
    self.all.select do |guest|
      guest.name == name
    end
  end

end
