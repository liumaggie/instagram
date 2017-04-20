class Api::ImagesController < ApplicationController

    def index
      @images = Image.all
      # if params[:image][:user_id] == current_user.id
      #   @images = current_user.images
      # else
      #   @images = Image.all
        # change to current_user.followings images
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
      @image = Image.find(params[:id])
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
        render :index
      else
        render( json: ["Image deletion failed"], status: 404)
      end
    end

    private
    def image_params
      params.require(:image).permit(:img_path,
                                    :user_id,
                                    :caption,
                                    :location,
                                    :created_at)
    end

end
