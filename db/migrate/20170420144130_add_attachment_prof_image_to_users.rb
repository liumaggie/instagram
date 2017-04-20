class AddAttachmentProfImageToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :prof_image
    end
  end

  def self.down
    remove_attachment :users, :prof_image
  end
end
