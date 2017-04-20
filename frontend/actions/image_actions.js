import * as UserProfileApiUtil from '../util/image_api_util';

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

// need for image index container?
export const fetchAllImages = () => dispatch => (
  UserProfileApiUtil.fetchAllImages().then((images) => dispatch(receiveImages(images)))
);

export const fetchImagesForUser = userId => dispatch => (
  UserProfileApiUtil.fetchImagesForUser(userId).then((images) => dispatch(receiveImages(images)))
);

export const fetchSingleImage = id => dispatch => (
  UserProfileApiUtil.fetchSingleImage(id).then((image) => dispatch(receiveImage(image)))
);

export const createImage = image => dispatch => (
  UserProfileApiUtil.createImage(image).then((image) => dispatch(receiveImage(image)))
);

export const updateImage = image => dispatch => (
  UserProfileApiUtil.updateImage(image).then((image) => dispatch(receiveImage(image)))
);

export const deleteImage = id => dispatch => (
  UserProfileApiUtil.deleteImage(id).then((image) => dispatch(receiveImage(image)))
);
