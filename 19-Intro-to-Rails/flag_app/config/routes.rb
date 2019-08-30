Rails.application.routes.draw do
  get 'flags', to: 'flags#index'
  get 'flags/best_flag_url', to: 'flags#best_flag_action'
  get 'flags/worst_flag'
  get 'flags/:id', to: 'flags#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
