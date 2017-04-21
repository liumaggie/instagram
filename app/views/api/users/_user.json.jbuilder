if !user.nil?

  json.extract! user, :id, :username

  if user.bio.nil?
    json.bio nil
  else
    json.extract! user, :bio
  end

  if user.website.nil?
    json.website nil
  else
    json.extract! user, :website
  end

  json.profile_pic_url asset_path(user.prof_image.url)

else
  json.null!
end
