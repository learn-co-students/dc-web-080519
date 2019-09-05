Rails.application.routes.draw do
    get "/main", to: "snacks#home", as: "home_view"
    # ^http  ^url      ^controller#method.  ^url_prefix
    # verb
    # get "/foods", to: "snacks#index", as: "snacks"
    resources :snacks, only: [:index, :show, :new, :create, :destroy]
    resources :retailers, only: [:index, :show]
end
