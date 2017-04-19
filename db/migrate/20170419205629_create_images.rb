class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :img_path, null: false
      t.integer :user_id, null: false
      t.text :caption
      t.string :location
      t.timestamps
    end

    add_index :images, :img_path, unique: true
    add_index :images, :user_id
  end
end
