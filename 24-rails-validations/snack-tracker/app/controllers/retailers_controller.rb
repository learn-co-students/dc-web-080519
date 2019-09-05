class RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
  end

  def show
    @retailer = Retailer.find(params[:id])
  end
  
  def new
    @retailer = Retailer.new
  end

  def create
    @retailer = Retailer.new(r_params)
    if @retailer.valid?
      @retailer.save
      redirect_to retailer_path(@retailer)
    else
      render :new
    end
  end

  private

  def r_params 
    params.require(:retailer).permit(:name, :year_established)
  end
end
