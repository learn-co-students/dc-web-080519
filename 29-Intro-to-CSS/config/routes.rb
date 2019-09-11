Rails.application.routes.draw do
  root 'application#home'
  resources :sightings
  resources :trees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
