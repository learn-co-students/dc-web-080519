require_relative "tweet.rb"
require_relative "user.rb"

coffee_dad = User.new("Coffee Dad")
soda_mom = User.new("Soda Mom")


puts "User knows their name?"
puts coffee_dad.username == "Coffee Dad"

tweet1 = Tweet.new("I heart coffee", coffee_dad)
tweet2 = Tweet.new("I need coffee", coffee_dad)
tweet3 = Tweet.new("I love pepsi", soda_mom)

puts "Tweet knows its message?"
puts tweet1.message == "I heart coffee"
puts "Tweet knows its user?"
puts tweet1.user == coffee_dad

puts "Can get all tweets?"
puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)

puts "User knows their tweets?"
puts coffee_dad.tweets.include?(tweet1)
puts coffee_dad.tweets.include?(tweet2)
puts !coffee_dad.tweets.include?(tweet3)

puts "Tweet knows its username?"
puts tweet1.username == "Coffee Dad"

tweet4 = coffee_dad.post_tweet("I need more coffee")
puts coffee_dad.tweets.include?(tweet4)