class SnacksController < ApplicationController

  def home
  end

  def index
    @snacks = Snack.all 
    render :index
  end

  def show
    id = params[:id]
    @snack = Snack.find(id)
    render :show
  end

  def new
    @snack = Snack.new
  end

  def create
    # name = params[:snack][:name]
    # calories = params[:snack][:calories]
    # deliciousness = params[:snack][:deliciousness]
    @snack = Snack.new(snack_params)
    if @snack.valid?
      @snack.save
      redirect_to snack_path(@snack)
    else
      render :new
    end
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
