class Api::FollowsController < ApplicationController

  # def index
  #   user = User.find(params[:user_id])
  #   @follows = Follow.where(follower_id: user.id)
  # end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find(@follow.followee_id)
      render "api/users/show"
    else
      render json: ["Invalid follow"], status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow.destroy!
      @user = User.find(@follow.followee_id)
      render "api/users/show"
    else
      render json: ["Invalid un-follow"], status: 404
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end
