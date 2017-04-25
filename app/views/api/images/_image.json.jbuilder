json.extract! image, :id, :caption, :location
json.img_path asset_path(image.image.url)
json.time image.time_since_image_created

json.owner do
  json.extract! image.owner, :id, :username
  json.profile_pic_url asset_path(image.owner.prof_image.url)
  # json.partial! 'api/users/user', user: image.owner
end

json.likes image.likes

json.comments image.comments do |comment|
  json.id comment.id
  json.body comment.body
  json.author do
    json.extract! comment.author, :id, :username
    # json.partial! 'api/users/user', user: comment.author
  end
end
