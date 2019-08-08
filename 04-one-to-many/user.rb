class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # go through array of all tweets
        # search for the user of each of those tweets
        # choose the ones related to current user
        Tweet.all.select do |tweet|
            tweet.user == self 
        end
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end

end

