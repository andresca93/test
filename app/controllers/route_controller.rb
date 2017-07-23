class RouteController < ApplicationController
	protect_from_forgery with: :exception

	def new_route
		set_access_control
		if is_logged_user!
			if (params[:title] && params[:descr] && params[:status])
				title  = params[:title].to_s
				descr  = params[:descr].to_s
				status = params[:status].to_s
				result = ::Route.new(
					:user_id => current_user.id,
					:email   => current_user.email,
    		)
    		result.update_attributes!(
    		  :title   => title,
    		  :descr   => descr,
    		  :status  => status
    		)
    		return render :json => result
			end
		end
		return render :json => []
	end

	def get_user_routes
		set_access_control
		if is_logged_user!
			if (result = Route.where(:user_id => current_user.id))
				return render :json => result
			end
			return render :json => []
		end
		return render :json => []
	end

	def edit_route
		set_access_control
		if is_logged_user!
			
		end
	end
end