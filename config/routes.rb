Rails.application.routes.draw do
	root 'home#index'
  get 'home/index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :users, :only => [:index] do
    get :profile,    :on => :collection
    get :user_check, :on => :collection
  end

  resources :route, :only => [:index] do
    get :new_route,      :on => :collection
    get :get_user_routes, :on => :collection
  end

  resources :stage, :only => [:index] do
    get :new_stage,          :on => :collection
    get :get_stage_by_route, :on => :collection
  end


end
