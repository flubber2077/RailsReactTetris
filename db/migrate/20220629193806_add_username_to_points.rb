class AddUsernameToPoints < ActiveRecord::Migration[6.1]
  def change
    add_column :points, :username, :string
  end
end
