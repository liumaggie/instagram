Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
  end

end
