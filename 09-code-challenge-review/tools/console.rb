require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# listings
miami = Listing.new("Miami Apt","Miami")
los_angeles = Listing.new("Los Angeles Studio","Los Angeles")
los_angeles2 = Listing.new("Los Angeles Apt","Los Angeles")

# guests
hannah = Guest.new("Hannah")
jay_z = Guest.new("Jay-Z")
beyonce = Guest.new("Beyonce")
rihanna = Guest.new("Rihanna")

# trips
trip1 = Trip.new(rihanna, miami)
trip2 = Trip.new(hannah, los_angeles)
trip3 = Trip.new(hannah, miami)

puts "Testing #city getter for Listing"
puts miami.city == "Miami"

puts "Testing .all"
puts Listing.all.include?(miami)
puts Listing.all == [miami, los_angeles, los_angeles2]

puts "Listing.find_all_by_city takes an argument of a city name (as a string) and returns all the listings for that city
"
puts Listing.find_all_by_city("Los Angeles").count == 2

puts "Guest.all returns all the instances of Guest"
puts Guest.all.include?(rihanna)
puts Guest.all.count == 4

puts "Guest.find_all_by_name takes an argument of a name (as a string), returns all the guests with that name
"
puts Guest.find_all_by_name("Rihanna").include?(rihanna)

puts "Trip.all returns an array of all trips"
puts Trip.all.include?(trip2)
puts Trip.all.count == 2

puts "Guest.pro_traveller returns an array of all guests who have made over 1 trip"
puts Guest.pro_traveller.include?(hannah)

puts "#trip_count returns count of all trips taken by this guest"
puts hannah.trip_count == 2

puts "#listings returns an array of all listings a guest has stayed at"
puts hannah.listings.count == hannah.trip_count
puts hannah.listings.include?(miami)

puts "listing#guests returns an array of all guests who have stayed at a listing"
puts miami.guests.include?(hannah)
puts miami.guests.include?(rihanna)

puts "listing#trip_count returns number of trips booked on that listing"
puts miami.trip_count == miami.trips.length

puts "listing.most_popular returns listing with most trips taken"
puts Listing.most_popular == miami

Pry.start
