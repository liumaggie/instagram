import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import UploadPhotoModal from './upload_photo_modal';

const mapDispatchToProps = (dispatch) => {
  return({
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(null, mapDispatchToProps)(UploadPhotoModal);
