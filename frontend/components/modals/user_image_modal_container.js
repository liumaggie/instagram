import React from 'react';
import { connect } from 'react-redux';
import UserImageModal from './user_image_modal';
import { fetchSingleImage, deleteImage, addCommentToImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSingleImage: (id) => dispatch(fetchSingleImage(id)),
    deleteImage: (id) => dispatch(deleteImage(id)),
    addCommentToImage: (comment) => dispatch(addCommentToImage(comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserImageModal);
