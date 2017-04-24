# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170424143556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "image_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["image_id"], name: "index_comments_on_image_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.text     "caption"
    t.string   "location"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["user_id"], name: "index_images_on_user_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "liker_id",   null: false
    t.integer  "image_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["image_id", "liker_id"], name: "index_likes_on_image_id_and_liker_id", unique: true, using: :btree
    t.index ["image_id"], name: "index_likes_on_image_id", using: :btree
    t.index ["liker_id"], name: "index_likes_on_liker_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                null: false
    t.string   "password_digest",         null: false
    t.string   "session_token",           null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "prof_image_file_name"
    t.string   "prof_image_content_type"
    t.integer  "prof_image_file_size"
    t.datetime "prof_image_updated_at"
    t.text     "bio"
    t.string   "website"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
