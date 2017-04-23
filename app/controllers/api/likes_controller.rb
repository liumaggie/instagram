class Api::LikesController < ApplicationController

  def index
    @likes = Image.find(params[:image_id]).likes
    render :index
  end

  def create
  end

  def destroy
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :image_id)
  end

end
