class CreateRoute < ActiveRecord::Migration[5.0]
  def change
    User.connection.create_table :routes do |t|
      t.integer :user_id
      t.string :email
      t.string :title
      t.string :descr
      t.string :status
      t.timestamps null: false
    end
    User.connection.execute "insert into schema_migrations values('20170720095212')"
  end
end
