Rails.application.routes.draw do
  # resources :beers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, params: :slug
      resources :reviews, only: [:create, :destroy]
      resources :beers, defaults: {format: :json }
    end
  end

  get '*path', to: 'pages#index', via: :all

end
