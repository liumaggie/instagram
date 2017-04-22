export const OPEN_UPLOAD_PHOTO = 'OPEN_UPLOAD_PHOTO';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openUploadPhoto = () => ({
  type: OPEN_UPLOAD_PHOTO,
  currentModal: 'OPEN_UPLOAD_PHOTO'
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  currentModal: null
});
