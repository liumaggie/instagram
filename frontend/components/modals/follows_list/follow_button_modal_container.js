import React from 'react';
import { createFollowForCurrentUser, deleteFollowForCurrentUser, fetchCurrentUser } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import FollowButtonModal from './follow_button_modal';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createFollowForCurrentUser: (follow, currentUser) => dispatch(createFollowForCurrentUser(follow, currentUser)),
    deleteFollowForCurrentUser: (id, currentUser) => dispatch(deleteFollowForCurrentUser(id, currentUser)),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButtonModal);
