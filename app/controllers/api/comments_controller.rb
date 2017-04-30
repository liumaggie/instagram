class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @image = Image.joins(:comments).order('comments.created_at ASC').find(params[:image_id])
      render "api/images/show"
    else
      render json: ["Invalid comment"], status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @image = Image.find(@comment.image_id)
    if @comment.destroy!
      render "api/images/show"
    else
      render json: ["Comment doesn't exist"], status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :image_id)
  end

end
