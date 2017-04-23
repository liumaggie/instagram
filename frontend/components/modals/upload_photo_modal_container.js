import React from 'react';
import { connect } from 'react-redux';
import { createImage } from '../../actions/image_actions';
import UploadPhotoModal from './upload_photo_modal';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createImage: (formData, id) => dispatch(createImage(formData, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoModal);
