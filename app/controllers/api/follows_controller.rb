class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = current_user
      render "api/users/show"
    else
      render json: ["Invalid follow"], status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @user = current_user
    if @follow.destroy!
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
