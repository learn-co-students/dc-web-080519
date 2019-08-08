# A puppy is initialized with a cuteness score of 5.  A puppy can raise
# its cuteness score by 3 points if it gets groomed, and lower its score
# by 5 points playing in the mud.  

# The following code works, but there are some problems.  Refactor this code 
# to improve it.  (The code can be downloaded from your learn.co page under
# lecture 04)

class Puppy

    attr_reader :name, :cuteness
    # attr_writer :cuteness

    def initialize(name)
        @name = name
        @cuteness = 5
    end

    # attr_reader :name

    # def name
    #     @name
    # end

    # attr_writer :name
    # def name=(new_name)
    #     @name = new_name
    # end

    def cuteness=(new_cuteness)

        @cuteness = new_cuteness.clamp(1, 10)
        # if new_cuteness > 10
        #     @cuteness = 10
        # elsif new_cuteness < 1
        #     @cuteness = 1
        # else
        #     @cuteness = new_cuteness
        # end
    end

    def play_in_the_mud
        self.cuteness -= 5
        # self.cuteness=(self.cuteness - 5)

    end

    def take_a_bath
        self.cuteness += 3
    end    
end

fido = Puppy.new("Fido")
# fido.name = "Rover"

# fido.cuteness=(10)
# puts fido.cuteness
puts fido.cuteness == 5 # test initial cuteness
fido.take_a_bath
puts fido.cuteness == 8 # test that take a bath raises cuteness by 3
fido.take_a_bath
puts fido.cuteness == 10 # test that cuteness cannot exceed 10
puts fido.cuteness
fido.cuteness = -10
puts fido.cuteness