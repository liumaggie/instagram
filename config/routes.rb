Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show] do
      resources :images, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :images, only: [:index, :show, :update, :destroy] do
      resources :likes, only: [:index, :create]
    end
    resources :likes, only: [:destroy]
  end

end
