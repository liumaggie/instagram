export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${follow.followee_id}/follows`,
    data: { follow }
  });
};

export const deleteFollow = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};