class Api::UsersController < ApplicationController

  def index
    starts_with_string = params[:string].downcase
    # @users = User.all
    @users = User.where("lower(username) LIKE ?", "#{starts_with_string}%")
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

  def show
    @user = User.includes(
      follows_as_follower: :followee,
      follows_as_followee: :follower
    ).find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username,
                                 :password,
                                 :prof_image,
                                 :bio,
                                 :website)
  end

end
