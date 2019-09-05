Rails.application.routes.draw do
  resources :trees, only: [:index, :show]
  resources :sightings, only: [:index, :show, :new, :create, :destroy]
  get '/', to: 'sightings#home'
end
