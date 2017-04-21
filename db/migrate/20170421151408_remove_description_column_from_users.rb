class RemoveDescriptionColumnFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :description, :text
    
    add_column :users, :bio, :text
    add_column :users, :website, :string
  end
end
