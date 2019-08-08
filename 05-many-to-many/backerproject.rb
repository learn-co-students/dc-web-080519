class BackerProject

    @@all = []

    attr_reader :backer, :project
    
    def initialize(backer, project)
        @backer, @project = backer, project
        @@all << self
    end

    def self.all
        @@all 
    end
end