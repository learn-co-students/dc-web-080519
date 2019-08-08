class User

    attr_reader :username

    def initialize(username)
        @username = username
        my_tweets = []
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

    def like_tweet(tweet)
        Like.new(self, tweet)
    end

    def liked_tweets
        # returns a collection of all the tweets 
        # this user has liked

        # go over all the Likes
        # choose the ones whose user is the person calling the function
        # take the selected Likes and pull out the Tweets
        likes = Like.all.select do |like|
            like.user == self
        end
        likes.collect {|like| like.tweet }
    end

    def liked_tweet_messages
        self.liked_tweets.collect {|tweet| tweet.message}
    end
end

