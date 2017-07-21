class StageController < ApplicationController
	protect_from_forgery with: :exception

	def new_stage
		set_access_control
		if is_logged_user!
			if (params[:route_id] && route=Route.where(:id=>params[:route_if], user_id => current_user.id).first)
				if (params[:quest_title] && params[:quest_descr] && params[:lat] && params[:lng] && params[:password])
					route_id    = route.id
					quest_title = params[:quest_title].to_s
					quest_descr = params[:quest_descr].to_s
					lat      		= params[:status].to_f
					lng      		= params[:status].to_f
					password    = params[:password].to_s
					result = ::Stage.new(
						:route_id => route_id,
    			)
    			result.update_attributes!(
    			  :quest_title => quest_title,
    			  :quest_descr => quest_descr,
    			  :lat         => lat,
    			  :lng         => lng,
    			  :password    => password
    			)
    			return render :json => result
				end
			end
		end
		return render :json => []
	end

	def get_stage_by_route
		set_access_control
		if is_logged_user!
			if (params[:route_id])
				route_id = params[:route_id].to_i
				if (result = Stage.where(:route_id => route_id))
					debugger
					return render :json => result
				end
			end
		end
		return render :json => []
	end

	def edit_stage
		set_access_control
		if is_logged_user!
			
		end
	end
end