json.extract! image, :user_id
json.img_path asset_path(image.img_path)

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
