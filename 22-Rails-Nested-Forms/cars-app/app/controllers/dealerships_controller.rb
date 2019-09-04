class DealershipsController < ApplicationController

  def index
    @dealerships= Dealership.all
  end

  def show
    @dealership = Dealership.find(params[:id])
  end

  def new
    @dealership = Dealership.new
  end

  def create
    dealership = Dealership.create(self.dealership_params)

    redirect_to dealership_path(dealership)
  end

  private

  def dealership_params
    self.params.require(:dealership).permit(:name)
  end
end
