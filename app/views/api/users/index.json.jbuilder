@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.profile_pic_url asset_path(user.prof_image.url)
  end
end
