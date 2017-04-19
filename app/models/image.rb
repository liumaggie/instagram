class Image < ApplicationRecord

  validates :img_path, :user, presence: true
  belongs_to :user

end
