class SightingsController < ApplicationController
    before_action :get_sighting, only: [:show, :destroy]

    def index
        @sightings = Sighting.all
    end

    # def show
    # end

    def new
        @sighting = Sighting.new
        @sighting.build_tree
    end

    def create
        @sighting = Sighting.new(sighting_params)
        if @sighting.save
            redirect_to sighting_path(@sighting)
        else
            render :new
        end
    end

    def destroy
        @sighting.destroy
        redirect_to sightings_path
    end

    private

    def sighting_params
        params.require(:sighting).permit(:city, :state, :user_id, :tree_id, :condition, :image, tree_attributes: [:common_name, :binomial_name, :id_image, :fact, :category])
    end

    def get_sighting
        @sighting = Sighting.find(params[:id])
    end

end
