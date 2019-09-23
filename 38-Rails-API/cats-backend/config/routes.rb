Rails.application.routes.draw do
  get '/cats', to: 'cats#index'
  get '/cats/:id', to: 'cats#show'
  get '/easteregg', to: 'cats#egg'
  get '/hobbies', to: 'hobbies#index'
  post '/cats', to: 'cats#create'
  patch '/cats/:id', to: 'cats#update'
  delete '/cats/:id', to: 'cats#destroy'
end
