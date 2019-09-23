class HobbiesController < ApplicationController
    def index
        render json: Hobby.all.to_json(except: [:created_at, :updated_at])
    end
end
