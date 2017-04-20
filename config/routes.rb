Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show] do
      resources :images, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :images, only: [:index, :show, :update, :destroy]
  end

end
