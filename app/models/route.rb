class Route < ActiveRecord::Base
	belongs_to :user, :class_name => User, :primary_key => :id, :foreign_key => :user_id
	has_many :stages
end