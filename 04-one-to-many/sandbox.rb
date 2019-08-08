class School

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def instructors
        Instructor.all.select do |inst|
            inst.school == self
        end

    end

end

class Instructor

    attr_accessor :name, :school

    @@all = []

    def initialize(name, school)
        @name = name
        @school = school
        @@all << self
    end

    def self.all
        @@all
    end

end

flatiron = School.new("Flatiron School")


paul = Instructor.new("Paul", flatiron)
jc = Instructor.new("JC", flatiron)
shannon = Instructor.new("Shanon", flatiron)
# flatiron.add_instructor(paul)
# flatiron.add_instructor(jc)
# flatiron.add_instructor(shannon)

puts paul.school.name

flatiron.instructors.each do |inst|
    puts inst.name
end