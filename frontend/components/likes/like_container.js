import React from 'react';
import { connect } from 'react-redux';
import { addLikeToImage, deleteLikeFromImage, fetchLikesForImage } from '../../actions/image_actions';
import Like from './like';

export const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

export const mapDispatchToProps = (dispatch) => {
  return({
    addLikeToImage: (like) => dispatch(addLikeToImage(like)),
    deleteLikeFromImage: (id) => dispatch(deleteLikeFromImage(id)),
    fetchLikesForImage: (imageId) => dispatch(fetchLikesForImage(imageId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
