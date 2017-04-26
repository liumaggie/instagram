@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :followee_id, :follower_id
  end
end
