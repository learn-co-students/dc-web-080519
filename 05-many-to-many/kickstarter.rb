require_relative "backerproject.rb"

class Backer

    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def back_project(project)
        BackerProject.new(self, project)
    end

    def projects
        # lists all projects this backer 
        # has backed

        # iterate over all BackerProjects
        # select the rows this backer is 
        # involved in
        bp_rows = BackerProject.all.select do |bp|
            bp.backer == self
        end

        bp_rows.map {|row| row.project}

    end

end

class Project

    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def add_backer(backer)
        BackerProject.new(backer, self)
    end

end

doc_brown = Backer.new("Doc Brown")
marty = Backer.new("Marty McFly")

hoverboard = Project.new('Hoverboard')
hoverboard.add_backer(marty)
hoverboard.add_backer(doc_brown)

selflacing_shoes = Project.new("Self Lacing Shoes")
flux_capacitor = Project.new("Flux Capacitor")
instant_food = Project.new("Instant Food")

selflacing_shoes.add_backer(marty)
flux_capacitor.add_backer(marty)
instant_food.add_backer(doc_brown)



# marty.remove_project(hoverboard)
# puts hoverboard.backers.collect {|x| x.name}
# puts "\n*****\n"
puts marty.projects