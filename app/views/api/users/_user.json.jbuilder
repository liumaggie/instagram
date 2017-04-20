if !user.nil?

  json.extract! user, :id, :username

  if user.description.nil?
    json.description nil
  else
    json.extract! user, :description
  end

  json.prof_pic_path asset_path(user.prof_image.url)

else
  json.null!
end
