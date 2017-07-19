class AddInfoToUsers < ActiveRecord::Migration[5.0]
  def change
  	User.connection.add_column :users, :name, :string
  	User.connection.add_column :users, :surname, :string
  	User.connection.add_column :users, :country, :string
  	User.connection.add_column :users, :city, :string
 
  	User.connection.execute "insert into schema_migrations values('20170719105919')"
  end
end
