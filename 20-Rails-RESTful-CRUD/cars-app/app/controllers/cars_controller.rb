class CarsController < ApplicationController

  def index
    @cars = Car.all
    # in Sinatra erb()
    # in Rails render()
    # no need to use render if following RESTful CRUD conventions
  end

  def show
    @car = Car.find(params[:id])
  end

  def new
    @car = Car.new
  end

  def create
    make = params[:car][:make]
    model = params[:car][:model]
    mileage = params[:car][:mileage]
    seats = params[:car][:seats]

    car = Car.create(make: make, model: model, mileage: mileage, seats: seats)

    # In sinatra redirect()
    # In rails redirect_to()
    redirect_to car_path(car)
  end

  def edit
    @car = Car.find(params[:id])
  end

  def update
    make = params[:car][:make]
    model = params[:car][:model]
    mileage = params[:car][:mileage]
    seats = params[:car][:seats]

    # find car to update
    car = Car.find(params[:id])
    # udpate it
    car.update(make: make, model: model, mileage: mileage, seats: seats)

    # redi rect
    redirect_to car_path(car)
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy

    redirect_to cars_path
  end




end
