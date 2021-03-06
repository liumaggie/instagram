import * as ImageApiUtil from '../util/image_api_util';
import * as LikeApiUtil from '../util/like_api_util';
import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGES_FOR_FEED = 'RECEIVE_IMAGES_FOR_FEED';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const REMOVE_ALL_IMAGES = 'REMOVE_ALL_IMAGES';

export const receiveImages = (images) => ({
  type: RECEIVE_IMAGES,
  images
});

export const receiveImagesForFeed = (images) => ({
  type: RECEIVE_IMAGES_FOR_FEED,
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

export const removeAllImages = () => ({
  type: REMOVE_ALL_IMAGES
});

export const fetchAllImages = () => dispatch => (
  ImageApiUtil.fetchAllImages()
                    .then((images) => dispatch(receiveImages(images)))
);

export const fetchNumOfImages = (userId, limit, offset) => dispatch => (
  ImageApiUtil.fetchNumOfImages(userId, limit, offset)
              .then((images) => dispatch(receiveImagesForFeed(images)))
);

export const fetchImagesForUser = userId => dispatch => (
  ImageApiUtil.fetchImagesForUser(userId)
                    .then((images) => dispatch(receiveImages(images)))
);

export const createImage = (formData, id) => dispatch => (
  ImageApiUtil.createImage(formData, id)
                    .then((image) => dispatch(receiveImage(image)))
);

export const updateImage = image => dispatch => (
  ImageApiUtil.updateImage(image)
                    .then((newImage) => dispatch(receiveImage(newImage)))
);

export const deleteImage = id => dispatch => {
  return(
    ImageApiUtil.deleteImage(id)
    .then((image) => dispatch(removeImage(image)))
  );
};

export const addLikeToImage = (like) => dispatch => (
  LikeApiUtil.createLike(like)
             .then((image) => dispatch(receiveImage(image)))
);

export const deleteLikeFromImage = (id) => dispatch => (
  LikeApiUtil.deleteLike(id)
             .then((image) => dispatch(receiveImage(image)))
);

export const addCommentToImage = (comment) => dispatch => (
  CommentApiUtil.createComment(comment)
                .then((image) => dispatch(receiveImage(image)))
);

export const deleteCommentFromImage = (id) => dispatch => (
  CommentApiUtil.deleteComment(id)
                .then((image) => dispatch(receiveImage(image)))
);
