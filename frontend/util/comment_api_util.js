export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/images/${comment.image_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
};
