class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def profile
    #get the token from the request and decoded it to get the user
    token = request.headers["Authentication"].split(" ")[1]
    payload = decode(token)
    user = User.find(payload["user_id"])
    render json: {user_data: user}, status: :accepted
  end
end
