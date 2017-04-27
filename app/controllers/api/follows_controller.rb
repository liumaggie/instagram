class Api::FollowsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    if params[:followers]
      @follows = Follow.where(followee_id: user.id)
    else
      @follows = Follow.where(follower_id: user.id)
    end
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      if params[:currentUser]
        @user = User.includes(
          follows_as_follower: :followee,
          follows_as_followee: :follower
        ).find(@follow.follower_id)
      else
        @user = User.includes(
          follows_as_follower: :followee,
          follows_as_followee: :follower
        ).find(@follow.followee_id)
      end
      render "api/users/show"
    else
      render json: ["Invalid follow"], status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow.destroy!
      if params[:currentUser]
        @user = User.includes(
          follows_as_follower: :followee,
          follows_as_followee: :follower
        ).find(@follow.follower_id)
      else
        @user = User.includes(
          follows_as_follower: :followee,
          follows_as_followee: :follower
        ).find(@follow.followee_id)
      end
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
