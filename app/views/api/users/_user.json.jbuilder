if !user.nil?

  json.extract! user, :id, :username, :bio, :website

  json.profile_pic_url asset_path(user.prof_image.url)

  json.followers user.follows_as_followee.each do |follow|
    json.extract! follow.follower, :id, :username
    json.profile_pic_url asset_path(follow.follower.prof_image.url)
    json.follow_id follow.id
  end

  json.followings user.follows_as_follower.each do |follow|
    json.extract! follow.followee, :id, :username
    json.profile_pic_url asset_path(follow.followee.prof_image.url)
    json.follow_id follow.id
  end

else
  json.null!
end
