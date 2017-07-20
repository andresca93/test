class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def is_logged_user!
    return false unless current_user
    return true
  end

  def set_access_control
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

end
