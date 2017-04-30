class Comment < ApplicationRecord

  validates :body, :author, :image, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :image,
    class_name: :Image,
    primary_key: :id,
    foreign_key: :image_id

end
