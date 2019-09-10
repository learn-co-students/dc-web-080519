Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get "/cars", to: 'cars#index', as: "cars"
  # cars_path() // cars_url
  # get "/showroom", to: 'cars#index', as: "showroom"
  resources(:cars)
  resources :dealerships, only: [:index, :show, :new, :create]

  get '/login', to: "sessions#new", as: "login"
  post '/login', to: "sessions#create"
  delete "/logout", to: 'sessions#destroy'

end
