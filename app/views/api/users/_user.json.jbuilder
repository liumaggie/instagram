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

  json.followers user.followers.each do |follower|
    json.extract! follower, :id, :username
    json.follow_id Follow.find_by({ follower_id: follower.id, followee_id: user.id }).id
  end

  json.followings user.followees.each do |following|
    json.extract! following, :id, :username
    json.follow_id Follow.find_by({ followee_id: following.id, follower_id: user.id }).id
  end

else
  json.null!
end
