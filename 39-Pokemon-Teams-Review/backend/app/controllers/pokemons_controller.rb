class PokemonsController < ApplicationController

    def create
        # byebug
        # only execute when pokemon count in trainer's collection is less than 6
        trainer_id = params["trainer_id"]
        trainer = Trainer.find(trainer_id)
        if trainer.pokemons.length < 6
            name = Faker::Name.first_name
            species = Faker::Games::Pokemon.name
            pokemon = Pokemon.create(nickname: name, species: species, trainer_id: trainer_id)
            render json: pokemon
        else 
            render json: { status: 405, message: "You may only carry 6 pokemon, release one to add another. Don't be greedy"}
        end
    end

    def destroy
        Pokemon.find(params[:id]).destroy
    end
end
