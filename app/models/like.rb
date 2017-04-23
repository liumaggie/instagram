class Like < ApplicationRecord

  validates :liker, :image, presence: true
  validates :image, uniqueness: { scope: :liker }

  belongs_to :liker,
    class_name: :User,
    primary_key: :id,
    foreign_key: :liker_id

  belongs_to :image,
    class_name: :Image,
    primary_key: :id,
    foreign_key: :image_id

end
