class SightingsController < ApplicationController
  before_action :get_sighting, only: [:show, :destroy]

  def index
    @sightings = Sighting.all
  end

  def new
    @sighting = Sighting.new
    @sighting.build_tree
    # @sighting.tree = Tree.new   (this is same as above line)
  end

  def create
    @sighting = Sighting.new(sighting_params)

    if @sighting.save
      redirect_to sighting_path(@sighting)
    else
      if @sighting.tree_id == nil
        @sighting.tree = Tree.new(sighting_params[:tree_attributes])
      else
        @sighting.build_tree
      end
      render :new
    end
  end

  def destroy
    @sighting.destroy
    redirect_to sightings_path
  end

  private

  def sighting_params
    params.require(:sighting).permit(:user_id, :tree_id, :condition, :image, :city, :state, tree_attributes: [:common_name, :binomial_name, :etymological_fact, :leaf_image, :category])
  end

  def get_sighting
    @sighting = Sighting.find(params[:id])
  end

end
