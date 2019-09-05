
class SnacksController < ApplicationController

  def home
  end

  def index
    @snacks = Snack.all 
  end

  def show
    id = params[:id]
    @snack = Snack.find(id)
  end

  def new
    @snack = Snack.new
    @retailer_collection = Retailer.all
  end

  def create
    # name = params[:snack][:name]
    # calories = params[:snack][:calories]
    # deliciousness = params[:snack][:deliciousness]
    s = Snack.create(snack_params)
    redirect_to snack_path(s)
  end

  def destroy
    @snack = Snack.find(params[:id])
    @snack.delete
    redirect_to snacks_path
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id)
  end

end
