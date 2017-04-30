import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { updateCurrentUser } from '../../actions/session_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user,
    currentModal: state.currentModal
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
