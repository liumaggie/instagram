class RemoveProfilePicUrlFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :profile_pic_url, :string
  end
end
