class ApplicationController < ActionController::Base
  helper_method :current_user
  before_action :current_user

  def current_user
    #memoization

    if @current_user
      return @current_user
    else
      # look in the request's cookies to see if this is a logged in user
      @current_user = User.find_by(username: session["user"])
      return @current_user
    end
  end
end
