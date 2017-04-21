import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return({
    currentUser: state.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
