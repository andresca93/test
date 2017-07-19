class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.get_or_create_by_facebook(request.env["omniauth.auth"])
    sign_in_and_redirect @user      
  end
end