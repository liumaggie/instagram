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
Comment.destroy_all
Follow.destroy_all

user1 = User.create(username: "testing", password: "password", bio: "Hello world!")
user2 = User.create(username: "testing2", password: "password", prof_image: File.open("app/assets/images/puppy2.jpg", bio: "Hello world!"))
user3 = User.create(username: "puppy", password: "password", bio: "Hi everyone!")

image1 = Image.create(
                image: File.open("app/assets/images/puppy.jpg"),
                user_id: user1.id,
                caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
image2 = Image.create(image: File.open("app/assets/images/puppy2.jpg"), user_id: user2.id)
image3 = Image.create(image: File.open("app/assets/images/puppy3.jpg"), user_id: user1.id)
image4 = Image.create(image: File.open("app/assets/images/puppy4.jpg"), user_id: user1.id)
image5 = Image.create(image: File.open("app/assets/images/chihuahua.jpg"), user_id: user1.id)

Like.create(liker_id: user1.id, image_id: image1.id)
Like.create(liker_id: user1.id, image_id: image2.id)
Like.create(liker_id: user2.id, image_id: image1.id)

Comment.create(body: "The puppy is soo cute!", author_id: user1.id, image_id: image1.id)
Comment.create(body: "Awwww", author_id: user2.id, image_id: image1.id)
Comment.create(body: "She's adorable!", author_id: user3.id, image_id: image1.id)
Comment.create(body: "Let's hangout some time!", author_id: user2.id, image_id: image2.id)
Comment.create(body: "The puppy is soo cute!", author_id: user1.id, image_id: image3.id)

Follow.create(follower_id: user1.id, followee_id: user2.id)
Follow.create(follower_id: user2.id, followee_id: user3.id)
Follow.create(follower_id: user2.id, followee_id: user1.id)
Follow.create(follower_id: user3.id, followee_id: user2.id)
