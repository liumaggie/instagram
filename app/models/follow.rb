class Follow < ApplicationRecord

  validates :follower, :followee, presence: true
  validates :followee, uniqueness: { scope: :follower }

  belongs_to :follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :followee_id

end
