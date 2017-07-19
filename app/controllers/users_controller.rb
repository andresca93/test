class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
  	redirect_to :action => "profile"
  end

  def profile
  	return redirect_to "/users/sign_in" if !is_logged_user!
  end
end