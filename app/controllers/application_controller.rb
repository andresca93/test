class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def is_logged_user!
    return false unless current_user
    return true
  end

end
