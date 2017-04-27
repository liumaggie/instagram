class Api::ImagesController < ApplicationController

    def index
      # debugger
      if params[:user_id]
        @images = User.find(params[:user_id]).images.includes(:owner, comments: :author, likes: :liker)
      elsif params[:limit]
        # followees = User.find(params[:userId].to_i).followees
        # @images = []
        # followees.each do |followee|
        #   @images += followee.images.includes(:owner, comments: :author, likes: :liker)
        # end
        # where("follower_id = ? ", params[:userId].to_i)
        @images = Image.includes(:owner, comments: :author, likes: :liker).order('created_at DESC').all.limit(params[:limit].to_i).offset(params[:offset].to_i)
      else
        @images = Image.includes(:owner, comments: :author, likes: :liker).all
      end
      render :index
    end

    def create
      @image = Image.new(image_params)
      if @image.save
        render :show
      else
        render( json: @image.errors.full_messages, status: 422)
      end
    end

    def show
      @image = Image.includes(comments: :author, likes: :liker).find(params[:id])
      render :show
    end

    def update
      @image = current_user.images.find(params[:id])
      if @image.update(image_params)
        render :show
      else
        render( json: @image.errors.full_messages, status: 422)
      end
    end

    def destroy
      @image = Image.find(params[:id])
      if @image.destroy!
        render( json: ["Image successfully deleted"], status: 200)
      else
        render( json: ["Image deletion failed"], status: 404)
      end
    end

    private
    def image_params
      params.require(:image).permit(:image,
                                    :user_id,
                                    :caption,
                                    :location)
    end

end
