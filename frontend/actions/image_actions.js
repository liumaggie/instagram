import * as UserProfileImageApiUtil from '../util/image_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images
});

export const receiveImage = (image) => ({
  type: RECEIVE_IMAGE,
  image
});

export const removeImage = (image) => ({
  type: REMOVE_IMAGE,
  image
});

export const fetchAllImages = () => dispatch => (
  UserProfileImageApiUtil.fetchAllImages()
                    .then((images) => dispatch(receiveImages(images)))
);

export const fetchImagesForUser = userId => dispatch => (
  UserProfileImageApiUtil.fetchImagesForUser(userId)
                    .then((images) => dispatch(receiveImages(images)))
);

export const fetchSingleImage = id => dispatch => (
  UserProfileImageApiUtil.fetchSingleImage(id)
                    .then((image) => dispatch(receiveImage(image)))
);

export const createImage = (formData, id) => dispatch => (
  UserProfileImageApiUtil.createImage(formData, id)
                    .then((image) => dispatch(receiveImage(image)))
);

export const updateImage = image => dispatch => (
  UserProfileImageApiUtil.updateImage(image)
                    .then((newImage) => dispatch(receiveImage(newImage)))
);

export const deleteImage = id => dispatch => {
  return(
    UserProfileImageApiUtil.deleteImage(id)
    .then((image) => dispatch(removeImage(image)))
  );
};
