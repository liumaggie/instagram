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

user1 = User.create(username: "ilovepuppies",
                    password: "password",
                    bio: "Hi :) I love traveling and bringing my puppy with me everywhere I go!",
                    prof_image: File.open("app/assets/images/puppy13.jpg"))
user2 = User.create(username: Faker::Pokemon.name,
                    password: "password",
                    prof_image: File.open("app/assets/images/puppy2.jpg",
                    bio: "Hello world!"))
user3 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote)
user4= User.create(username: Faker::Pokemon.unique.name,
                    password: "password",
                    bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy20.jpg"))
user5 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote)
user6 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password",
                    bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy15.jpg"))
user7 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy10.jpg"))
user8 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy6.jpg"))
user9 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy18.jpg"))
user10 = User.create(username: Faker::Pokemon.unique.name,
                    password: "password", bio: Faker::StarWars.unique.quote,
                    prof_image: File.open("app/assets/images/puppy.jpg"))

image1 = Image.create(
                image: File.open("app/assets/images/puppy.jpg"),
                user_id: user1.id,
                caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
image2 = Image.create(image: File.open("app/assets/images/puppy2.jpg"), user_id: user2.id)
image3 = Image.create(image: File.open("app/assets/images/puppy3.jpg"), user_id: user1.id)
image4 = Image.create(image: File.open("app/assets/images/puppy4.jpg"), user_id: user1.id)
image5 = Image.create(image: File.open("app/assets/images/pup.jpg"), user_id: user1.id)
image6 = Image.create(image: File.open("app/assets/images/puppy5.jpg"), user_id: user1.id)
image7 = Image.create(image: File.open("app/assets/images/puppy6.jpg"), user_id: user2.id)
image8 = Image.create(image: File.open("app/assets/images/puppy7.jpg"), user_id: user3.id)
image9 = Image.create(image: File.open("app/assets/images/puppy8.jpg"), user_id: user2.id)
image10 = Image.create(image: File.open("app/assets/images/puppy9.jpg"), user_id: user3.id)
image11 = Image.create(image: File.open("app/assets/images/puppy10.jpg"), user_id: user2.id)
image12 = Image.create(image: File.open("app/assets/images/puppy11.jpg"), user_id: user3.id)
image13 = Image.create(image: File.open("app/assets/images/puppy12.jpg"), user_id: user4.id)
image14 = Image.create(image: File.open("app/assets/images/puppy13.jpg"), user_id: user5.id)
image15 = Image.create(image: File.open("app/assets/images/puppy14.jpg"), user_id: user4.id)
image16 = Image.create(image: File.open("app/assets/images/puppy15.jpg"), user_id: user5.id)
image17 = Image.create(image: File.open("app/assets/images/puppy16.jpg"), user_id: user5.id)
image18 = Image.create(image: File.open("app/assets/images/puppy17.jpg"), user_id: user6.id)
image19 = Image.create(image: File.open("app/assets/images/puppy18.jpg"), user_id: user6.id)
image20 = Image.create(image: File.open("app/assets/images/puppy19.jpg"), user_id: user7.id)
image21 = Image.create(image: File.open("app/assets/images/puppy20.jpg"), user_id: user8.id)
image22 = Image.create(image: File.open("app/assets/images/puppy21.jpg"), user_id: user9.id)
image23 = Image.create(image: File.open("app/assets/images/puppy22.jpg"), user_id: user10.id)
image24 = Image.create(image: File.open("app/assets/images/puppy23.jpg"), user_id: user10.id)
image25 = Image.create(image: File.open("app/assets/images/puppy24.jpg"), user_id: user9.id)
image26 = Image.create(image: File.open("app/assets/images/puppy25.jpg"), user_id: user8.id)
image27 = Image.create(image: File.open("app/assets/images/puppy26.jpg"), user_id: user7.id)

Like.create(liker_id: user1.id, image_id: image1.id)
Like.create(liker_id: user1.id, image_id: image2.id)
Like.create(liker_id: user2.id, image_id: image3.id)
Like.create(liker_id: user3.id, image_id: image4.id)
Like.create(liker_id: user4.id, image_id: image5.id)
Like.create(liker_id: user6.id, image_id: image7.id)
Like.create(liker_id: user7.id, image_id: image8.id)
Like.create(liker_id: user9.id, image_id: image10.id)
Like.create(liker_id: user10.id, image_id: image20.id)
Like.create(liker_id: user10.id, image_id: image21.id)
Like.create(liker_id: user7.id, image_id: image15.id)
Like.create(liker_id: user8.id, image_id: image10.id)
Like.create(liker_id: user2.id, image_id: image24.id)
Like.create(liker_id: user5.id, image_id: image16.id)
Like.create(liker_id: user4.id, image_id: image16.id)
Like.create(liker_id: user2.id, image_id: image18.id)
Like.create(liker_id: user3.id, image_id: image19.id)
Like.create(liker_id: user6.id, image_ids: image12.id)
Like.create(liker_id: user7.id, image_id: image12.id)
Like.create(liker_id: user8.id, image_id: image12.id)

Comment.create(body: "The puppy is soo cute!",
              author_id: user1.id,
              image_id: image1.id)
Comment.create(body: "Awwww",
              author_id: user2.id,
              image_id: image1.id)
Comment.create(body: "She's adorable!",
                author_id: user3.id,
                image_id: image1.id)
Comment.create(body: "Let's hangout some time!",
              author_id: user2.id,
              image_id: image2.id)
Comment.create(body: Faker::StarWars.wookie_sentence,
              author_id: user2.id,
              image_id: image6.id)
Comment.create(body: "The puppy is soo cute!",
              author_id: user4.id,
              image_id: image18.id)
Comment.create(body: Faker::StarWars.wookie_sentence,
              author_id: user8.id,
              image_id: image20.id)
Comment.create(body: "The puppy is soo cute!", author_id: user10.id, image_id: image17.id)
Comment.create(body: Faker::StarWars.wookie_sentence, author_id: user8.id, image_id: image15.id)
Comment.create(body: "The puppy is soo cute!", author_id: user4.id, image_id: image15.id)
Comment.create(body: Faker::StarWars.wookie_sentence, author_id: user3.id, image_id: image20.id)
Comment.create(body: "The puppy is soo cute!", author_id: user2.id, image_id: image24.id)
Comment.create(body: Faker::StarWars.wookie_sentence, author_id: user6.id, image_id: image26.id)
Comment.create(body: "The puppy is soo cute!", author_id: user5.id, image_id: image14.id)
Comment.create(body: Faker::StarWars.wookie_sentence, author_id: user1.id, image_id: image22.id)

Follow.create(follower_id: user1.id, followee_id: user2.id)
Follow.create(follower_id: user1.id, followee_id: user3.id)
Follow.create(follower_id: user1.id, followee_id: user4.id)
Follow.create(follower_id: user1.id, followee_id: user6.id)
Follow.create(follower_id: user1.id, followee_id: user10.id)
Follow.create(follower_id: user2.id, followee_id: user3.id)
Follow.create(follower_id: user2.id, followee_id: user1.id)
Follow.create(follower_id: user2.id, followee_id: user8.id)
Follow.create(follower_id: user2.id, followee_id: user7.id)
Follow.create(follower_id: user3.id, followee_id: user2.id)
Follow.create(follower_id: user3.id, followee_id: user1.id)
Follow.create(follower_id: user3.id, followee_id: user6.id)
Follow.create(follower_id: user3.id, followee_id: user9.id)
Follow.create(follower_id: user4.id, followee_id: user1.id)
Follow.create(follower_id: user4.id, followee_id: user10.id)
Follow.create(follower_id: user4.id, followee_id: user8.id)
Follow.create(follower_id: user4.id, followee_id: user3.id)
Follow.create(follower_id: user5.id, followee_id: user3.id)
Follow.create(follower_id: user5.id, followee_id: user2.id)
Follow.create(follower_id: user5.id, followee_id: user6.id)
Follow.create(follower_id: user5.id, followee_id: user8.id)
Follow.create(follower_id: user6.id, followee_id: user1.id)
Follow.create(follower_id: user6.id, followee_id: user5.id)
Follow.create(follower_id: user6.id, followee_id: user9.id)
Follow.create(follower_id: user6.id, followee_id: user10.id)
Follow.create(follower_id: user7.id, followee_id: user10.id)
Follow.create(follower_id: user7.id, followee_id: user1.id)
Follow.create(follower_id: user7.id, followee_id: user5.id)
Follow.create(follower_id: user7.id, followee_id: user6.id)
Follow.create(follower_id: user8.id, followee_id: user1.id)
Follow.create(follower_id: user8.id, followee_id: user2.id)
Follow.create(follower_id: user8.id, followee_id: user3.id)
Follow.create(follower_id: user8.id, followee_id: user4.id)
Follow.create(follower_id: user9.id, followee_id: user4.id)
Follow.create(follower_id: user9.id, followee_id: user2.id)
Follow.create(follower_id: user9.id, followee_id: user1.id)
Follow.create(follower_id: user9.id, followee_id: user7.id)
Follow.create(follower_id: user10.id, followee_id: user1.id)
