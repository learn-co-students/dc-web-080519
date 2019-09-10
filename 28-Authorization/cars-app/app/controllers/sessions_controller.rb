class SessionsController < ActionController::Base

  # C logging in
  # R
  # U
  # D loggout
  def new
    # serve the user the log in form
    # implicit render of views/sessions/new.html.erb
  end

  def create
    @user = User.find_by(username: params[:username])
    # false && true => false
    # false && false => false
    # true && true => true
    if @user && @user.authenticate(params[:password])
      session["user"] = @user.username
      redirect_to cars_path
    else
      @notice = "Invalid Username"
      render :new
    end

  end

  def destroy
    session.delete("user")

    redirect_to login_path
  end

end
