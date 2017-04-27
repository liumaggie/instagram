class Api::ImagesController < ApplicationController

    def index
      if params[:user_id]
        @images = User.find(params[:user_id])
                      .images
                      .includes(:owner, comments: :author, likes: :liker)
      elsif params[:limit]
        followees = User.find(params[:userId].to_i).followees
        # used to change array to active relation
        followees.map { |followee| followee.id }
        @images =
          Image.where(user_id: followees)
              .includes(:owner, comments: :author, likes: :liker)
              .order('created_at DESC')
              .limit(params[:limit].to_i)
              .offset(params[:offset].to_i)
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
