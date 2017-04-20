import React from 'react';
import { fetchImagesForUser, fetchSingleImage, createImage, updateImage, deleteImage } from '../../actions/image_actions';
import { asArray } from '../../reducers/selectors';
import { connect } from 'react-redux';
import UserImages from './user_images';

const mapStateToProps = (state) => {
  return({
    images: asArray(state.images),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchImagesForUser: (userId) => dispatch(fetchImagesForUser(userId)),
    fetchSingleImage: (id) => dispatch(fetchSingleImage(id)),
    createImage: (image) => dispatch(createImage(image)),
    updateImage: (image) => dispatch(updateImage(image)),
    deleteImage: (id) => dispatch(deleteImage(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserImages);
