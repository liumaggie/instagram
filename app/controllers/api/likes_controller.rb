class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      @image = Image.find(params[:image_id])
      render "api/images/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @image = Image.find(@like.image_id)
    if @like.destroy!
      render "api/images/show"
    else
      render json: ["Un-like failed"], status: 404
    end
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :image_id)
  end

end
