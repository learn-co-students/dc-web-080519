module Animal
    module Swim 
        def swim 
            puts "splish splash taking a bath"
        end 
    end 

    class Animal
        attr_accessor :age
        def initialize(name, species, age)
            @name = name
            @species = species
            @age = age
        end 

        def speak 
            puts "hello, good day"
        end
    end

    class LandAnimal < Animal
        def walk
            puts "taking a trip"
        end
    end 

    class Dog < LandAnimal
        include Swim
        DOG_YEARS = 7
        def initialize(name, age)
            super(name, "dog", age)
        end

        def speak
            puts "bow wow"
        end 

        def give_age
            if(human_years) > 30
                puts "I am a mature dog"
            else
                puts "I am a puppers"
            end 
        end 

        def show_ssn
            puts "XXX-XX-" + ssn[5..9].to_s
        end 

        private 
        def human_years
            self.age * DOG_YEARS
        end 

        def ssn
            "123457890"
        end 

    end

    class Cat < LandAnimal
        include Swim
        def initialize(name, age)
            super(name, "cat", age)
        end
    end 

    class Fish < Animal 
        include Swim
        def initialize(name, age)
            super(name, "fish", age)
        end
    end 
end 

module Rapper
    class Dog 
        def initialize(stage_name)
            @stage_name = stage_name
        end 
    end 
end 
