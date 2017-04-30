export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `api/images/${like.image_id}/likes`,
    data: { like }
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
