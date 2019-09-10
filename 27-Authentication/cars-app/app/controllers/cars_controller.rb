class CarsController < ApplicationController

  def index
    @cars = Car.all

    # byebug
    # in Sinatra erb()
    # in Rails render()
    # no need to use render if following RESTful CRUD conventions
  end

  def show
    @car = Car.find(params[:id])
    cookies["last_make_visited"] = @car.make
  end

  def new
    @car = Car.new
  end

  def create
    make = params[:car][:make]
    model = params[:car][:model]
    mileage = params[:car][:mileage]
    year = params[:car][:year]
    # byebug
    car = Car.create(car_params)
    # car = Car.create(make: make, model: model, mileage: mileage, year: year)
    # In sinatra redirect()
    # In rails redirect_to()
    redirect_to car_path(car)
  end

  def edit
    @car = Car.find(params[:id])
  end

  def update

    # find car to update
    car = Car.find(params[:id])
    # udpate it
    car.update(car_params)

    # redirect
    redirect_to car_path(car)
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy

    redirect_to cars_path
  end

  private
  def car_params
    params.require(:car).permit(:make, :model, :mileage, :year, :dealership_id)
  end



end
