class TrainerSerializer < ApplicationController

    attr_reader :data

    def initialize(trainer_data)
        @data = trainer_data
    end

    def to_serialized_json
        # serialize our data that's passed in
        # to_json is a built in a method that will convert our data to json
        self.data.to_json(include: {pokemons: {except: [:created_at, :updated_at]}}, except:[:created_at, :updated_at])
    end

end