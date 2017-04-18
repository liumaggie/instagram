@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    if user.description.nil?
      json.description nil
    else
      json.extract! user, :description
    end

    if user.prof_pic_path.nil?
      json.prof_pic_path nil
    else
      json.prof_pic_path asset_path(user.prof_pic_path)
    end
  end
end
