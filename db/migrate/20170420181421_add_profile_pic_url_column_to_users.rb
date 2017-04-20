class AddProfilePicUrlColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_pic_url, :string
  end
end
