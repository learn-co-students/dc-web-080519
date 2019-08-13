class Listing
  # has_many trips
  # has_many guests, through trips

  attr_accessor :name, :city

  @@all = []

  def initialize(name, city)
    @name=name
    @city=city
    @@all << self
  end

  def guests
    # returns an array of all guests who have stayed at a listing
    # get array of all guests who have stayed at this listing from #trips array
    self.trips.map do |trip|
      trip.guest
    end

  end

  def trips
    # returns an array of all trips at a listing
    Trip.all.select do |trip|
      trip.listing == self
    end
  end
  def trip_count
    # returns the number of trips that have been taken to that listing
    self.trips.count
  end

  def self.all
    # returns an array of all listings
    @@all
  end

  def self.find_all_by_city(city)
    # takes an argument of a city name (as a string) and returns all the listings for that city
    self.all.select do |listing|
      listing.city == city
    end
  end

  def self.most_popular
    # finds the listing that has had the most trips
    # go through all listings
    # count the trips on a listing and return trip with highest value
    self.all.max_by do |listing|
      listing.trip_count
    end
  end

end
