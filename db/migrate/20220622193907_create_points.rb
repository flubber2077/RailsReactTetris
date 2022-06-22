class CreatePoints < ActiveRecord::Migration[6.1]
  def change
    create_table :points do |t|
      t.integer :point_total
      t.integer :user_id
      t.integer :location_id

      t.timestamps
    end
  end
end
