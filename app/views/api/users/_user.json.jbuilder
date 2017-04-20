if !user.nil?

  json.extract! user, :id, :username

  if user.description.nil?
    json.description nil
  else
    json.extract! user, :description
  end

  json.profile_pic_url asset_path(user.prof_image.url)

else
  json.null!
end
