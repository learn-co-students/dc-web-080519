class Bakery

    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all 
    end

    def desserts
        # should return an array 
        # of desserts the bakery makes
        
    end

    def ingredients

    end

end