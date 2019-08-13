class Trip
  #belongs_to listing
  #belongs_to guest

  attr_reader :guest, :listing

  @@all = []

  def initialize(guest,listing)
    @guest=guest
    @listing=listing
    @@all << self
  end

  def self.all
    # returns an array of all trips
    @@all
  end

end
