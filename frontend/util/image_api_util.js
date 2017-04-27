export const fetchAllImages = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/images`
    })
  );
};

export const fetchNumOfImages = (userId, limit, offset) => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/images',
      data: { userId, limit, offset }
    })
  );
};

export const fetchImagesForUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/images`
  })
);

export const createImage = (formData, id) => {
  return ($.ajax({
    method: 'POST',
    url: `api/users/${id}/images`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  }));
};

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
