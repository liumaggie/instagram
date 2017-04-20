class RemoveProfPicPathColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :prof_pic_path, :string
  end
end
