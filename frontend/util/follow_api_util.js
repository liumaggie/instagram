export const createFollow = (follow, currentUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${follow.follower_id}/follows`,
    data: { follow, currentUser }
  });
};

export const deleteFollow = (id, currentUser) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
    data: { currentUser }
  });
};

export const fetchFollowersForUser = (userId, followers) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/follows`,
    data: { followers }
  });
};

export const fetchFollowingsForUser = (userId, followings) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/follows`,
    data: { followings }
  });
};
