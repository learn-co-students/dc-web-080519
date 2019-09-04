class DealershipsController < ApplicationController

  def index
    @dealerships= Dealership.all
  end

  def show
    @dealership = Dealership.find(params[:id])
  end

  def new
    @dealership = Dealership.new
    # @cars = @dealership.cars.build
  end

  def create
    dealership = Dealership.create(dealership_params)
    redirect_to dealership_path(dealership)
  end

  private

  def dealership_params
    self.params.require(:dealership).permit(:name,
      cars_attributes: [:make, :model, :mileage, :year])
  end
end

