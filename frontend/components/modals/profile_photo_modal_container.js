import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ProfilePhotoModal from './profile_photo_modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoModal);
