import React from 'react';
import { connect } from 'react-redux';
import UserImageModal from './user_image_modal';
import { fetchSingleImage, deleteImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSingleImage: (id) => dispatch(fetchSingleImage(id)),
    deleteImage: (id) => dispatch(deleteImage(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserImageModal);
