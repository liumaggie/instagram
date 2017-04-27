export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const updateUser = (user) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/users/${user.id}`,
      data: { user }
    })
  );
};

export const updateUserWithForm = (formData, id) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/users/${id}`,
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData
    })
  );
};

export const fetchUsers = (string) => {
  return $.ajax({
      method: 'GET',
      url: 'api/users',
      data: { string }
  });
};
