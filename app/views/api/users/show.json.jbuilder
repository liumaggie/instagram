json.extract! @user, :id, :username
json.partial! "userinfo", user: @user
