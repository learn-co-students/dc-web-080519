class FlagsController < ApplicationController
  def index
    @flags = Flag.all
  end

  def show
    @flag = Flag.find(params[:id])
  end

  def best_flag_action
    @flag = Flag.find_by(rating: 6)
    render :best_flag_view
  end

  def worst_flag
    @flag = Flag.find_by(rating: 1)
  end
end
