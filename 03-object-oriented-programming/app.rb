class Cat

    # attr_reader :name, :color, :number_of_legs
    # attr_writer :name, :color, :number_of_legs

    attr_accessor :name, :color, :number_of_legs
    attr_writer :floofiness
    attr_reader :species

    @@likes_chicken = "yes please"
    @@all = []

    def initialize(name, color, floofiness, number_of_legs=4)
        # puts "A new cat has been created!"
        @name = name
        @color = color
        @number_of_legs = number_of_legs
        @floofiness = floofiness
        @species = "feline"
        @@all << self # in an instance method, 'self' refers to the instance
    end

    def self.do_i_like_chicken
        return @@likes_chicken
    end

    def self.all
        # return all cats that have been created so far
        return @@all
    end



    def self.cats_are_great
        puts "Cats are the best animal"
    end

    # attr_reader
    # def number_of_legs
    #     @number_of_legs
    # end

    # attr_writer
    # def number_of_legs=(num)
    #     @number_of_legs = num
    # end

    def floofiness
        if @floofiness > 5
            puts "I am a very floofy cat"
        else
            puts "I am not so floofy, but still better than a dog."
        end
    end

    def say_hello
        @greeting = "Hi I am a cat"
        # puts @greeting
    end

    def say_hi
        puts @greeting
    end

    def say_im_pretty
        puts "I am a pretty #{color} cat"
    end

    # attr_reader :name
    # def name
    #     return @name
    # end

    # def name=(new_name)
    #     @name = new_name
    # end

    # def color # getter
    #     return @color
    # end

    # def color=(new_color) # setter
    #     @color = new_color
    # end

end

# Cat.all # []

lexi = Cat.new("Lexi", "orange", 4, 3)
# lexi.say_hello
# lexi.name = "Lexi"
# lexi.color = "orange"
print Cat.all 
puts "\n*********\n"
ella = Cat.new("Ella", "black", 10)
# ella.name = "Ella"
# ella.color = "black"
# Cat.all # [<Cat: Ella>, <Cat: Lexi>]
print Cat.all

Cat.all_names => ["Lexi", "Ella"]
