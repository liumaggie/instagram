export const fetchAllImages = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/images`
    })
  );
};

export const fetchImagesForUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/images`
  })
);

export const createImage = (image) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${image.user_id}/images`,
    data: { image }
  })
);

export const fetchSingleImage = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/images/${id}`
  })
);

export const updateImage = (image) => (
  $.ajax({
    method: 'PATCH',
    url: `api/images/${image.id}`,
    data: { image }
  })
);

export const deleteImage = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/images/${id}`
  })
);
