json.id image.id
json.img_path asset_path(image.image.url)
json.time image.time_since_image_created

if image.caption.nil?
  json.caption nil
else
  json.extract! image, :caption
end

if image.location.nil?
  json.location nil
else
  json.extract! image, :location
end

json.owner do
  json.partial! 'api/users/user', user: image.owner
end

json.likes image.likes
