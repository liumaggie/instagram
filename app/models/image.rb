class Image < ApplicationRecord

  validates :image, :owner, presence: true

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id


  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def time_since_image_created
    time = (Time.now - self.created_at)
    seconds = time/1.second
    minutes = time / 1.minute
    hours = time / 1.hour
    weeks = time / 1.week
    years = time / 1.year
    if seconds < 60
      return "#{seconds.round}s"
    elsif minutes < 60
      return "#{minutes.round}m"
    elsif hours < 60
      return "#{hours.round}h"
    elsif weeks < 7
      return "#{weeks.round}w"
    else
      return "#{years.round}y"
    end
  end
end
