class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        # render json: trainers
        render json: TrainerSerializer.new(trainers).to_serialized_json
    end
end
