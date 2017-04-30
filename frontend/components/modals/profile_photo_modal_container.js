import React from 'react';
import { connect } from 'react-redux';
import { updateUser, updateUserWithForm } from '../../actions/user_actions';
import ProfilePhotoModal from './profile_photo_modal';

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    updateUserWithForm: (formData, id) =>
      dispatch(updateUserWithForm(formData, id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoModal);
