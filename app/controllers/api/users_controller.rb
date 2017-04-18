class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    end
    # check back to see if need to show errors; shouldn't need to because just
    # changing prof pic path and description
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :prof_pic_path, :description)
  end

end
