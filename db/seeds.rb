# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all
Like.destroy_all

user1 = User.create(username: "testing", password: "password", bio: "Hello world!")
user2 = User.create(username: "testing2", password: "password", prof_image: File.open("app/assets/images/puppy2.jpg", bio: "Hello world!"))

image1 = Image.create(image: File.open("app/assets/images/puppy.jpg"), user_id: user1.id)
image2 = Image.create(image: File.open("app/assets/images/puppy2.jpg"), user_id: user2.id)
image3 = Image.create(image: File.open("app/assets/images/puppy3.jpg"), user_id: user1.id)
image4 = Image.create(image: File.open("app/assets/images/puppy4.jpg"), user_id: user1.id)
image5 = Image.create(image: File.open("app/assets/images/chihuahua.jpg"), user_id: user1.id)

Like.create(liker_id: user1.id, image_id: image1.id)
Like.create(liker_id: user1.id, image_id: image2.id)
Like.create(liker_id: user2.id, image_id: image1.id)
