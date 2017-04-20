# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all
user1 = User.create(username: "testing", password: "password", prof_image: File.open("app/assets/images/puppy.jpg"))
user2 = User.create(username: "testing2", password: "password", prof_image: File.open("app/assets/images/puppy2.jpg"))

Image.create(image: File.open("app/assets/images/puppy.jpg"), user_id: user1.id)
Image.create(image: File.open("app/assets/images/puppy2.jpg"), user_id: user2.id)
