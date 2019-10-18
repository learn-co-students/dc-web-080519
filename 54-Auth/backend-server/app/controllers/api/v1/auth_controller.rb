class Api::V1::AuthController < ApplicationController

  def fake_create
    render json: User.find_by(username: params["username"])
  end

  def create # POST /api/v1/login
    user = User.find_by(username: params["username"])
    if (user && user.authenticate(params["password"]) )
      # the username exists AND the password matches
      render json: {
        success: true,
        message: "Successfully logged in",
        user_data: user
      }, status: :accepted
    else
      # either the username does ot exist OR the password is invalid for the user
      render json: {
        success: false,
        message: "Invalid username or password you hacker!!!"
      }, status: :unauthorized
    end
  end

end
