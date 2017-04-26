import React from 'react';
import { createFollowForCurrentUser, deleteFollowForCurrentUser } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import FollowButtonModal from './follow_button_modal';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createFollowForCurrentUser: (follow, currentUser) => dispatch(createFollowForCurrentUser(follow, currentUser)),
    deleteFollowForCurrentUser: (id, currentUser) => dispatch(deleteFollowForCurrentUser(id, currentUser))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButtonModal);
