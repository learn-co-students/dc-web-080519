require "pry"
require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"

coffee_dad = User.new("Coffee Dad")
soda_mom = User.new("Soda Mom")

tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("Making coffee", coffee_dad)
tweet3 = Tweet.new("I need coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)
tweet5 = Tweet.new("I need tea", soda_mom)
tweet6 = Tweet.new("I like tea", soda_mom)
tweet7 = Tweet.new("Life is a wonderous place", soda_mom)

soda_mom.like_tweet(tweet1)

print Like.all 