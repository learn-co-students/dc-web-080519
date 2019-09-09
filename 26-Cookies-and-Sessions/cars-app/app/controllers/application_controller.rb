class ApplicationController < ActionController::Base
  helper_method :current_user
  before_action :current_user

  def current_user
    # look in the request's cookies to see if this is a logged in user
    @current_user = User.find_by(username: cookies["user"])
  end
end
