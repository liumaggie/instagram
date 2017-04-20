class RemoveImgPathColumnFromImages < ActiveRecord::Migration[5.0]
  def change
    remove_column :images, :img_path, :string
  end
end
