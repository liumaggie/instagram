class User < ApplicationRecord

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :images,
    class_name: :Image,
    primary_key: :id,
    foreign_key: :user_id

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :liker_id

  has_many :images_liked,
    through: :likes,
    source: :image

  has_many :authored_comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :author_id

  has_many :follows_as_follower,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :follower_id

  has_many :follows_as_followee,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :followee_id

  has_many :followees,
    through: :follows_as_follower,
    source: :followee

  has_many :followers,
    through: :follows_as_followee,
    source: :follower

  has_attached_file :prof_image, default_url: "default_prof_pic.png"
  validates_attachment_content_type :prof_image, content_type: /\Aimage\/.*\z/

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  # def query_for_following
  #   following = self.followees.select("follows.*").where()
  # end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
