class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render( json: ["The username you entered doesn't belong to an account.
        Please check your username and try again."], status: 401)
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render "api/users/show"
    else
      render( json: ['Please login or signup'], status: 404)
    end
  end

end
