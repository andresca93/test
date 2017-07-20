Rails.application.routes.draw do
	root 'home#index'
  get 'home/index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :users, :only => [:index] do
    get :profile,    :on => :collection
    get :user_check, :on => :collection
  end
end
