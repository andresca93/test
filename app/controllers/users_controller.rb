class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
  	redirect_to :action => "profile"
  end

  def profile
  	return redirect_to "/users/sign_in" if !is_logged_user!
  end

  def user_check
  	set_access_control
  	if is_logged_user!
      if result = User.where(:id => current_user.id).first
        return render :json => result
      end
    end
    return render :json => []
  end
end