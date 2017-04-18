@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.partial! "userinfo", user: user
  end
end
