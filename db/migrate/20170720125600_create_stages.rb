class CreateStages < ActiveRecord::Migration[5.0]
  def change
    Route.connection.create_table :stages do |t|
      t.integer :route_id
      t.string  :quest_title
      t.string  :quest_descr
      t.float   :lat
      t.float   :lng
      t.string  :password
      t.string  :status
      t.timestamps null: false
    end
    Route.connection.execute "insert into schema_migrations values('20170720125600')"
  end
end
