class Stage < ActiveRecord::Base
	belongs_to :route, :class_name => Route, :primary_key => :id, :foreign_key => :route_id
end