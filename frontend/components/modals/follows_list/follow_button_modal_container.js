import React from 'react';
import { createFollowForCurrentUser, deleteFollowForCurrentUser, updateCurrentUser, fetchCurrentUser } from '../../../actions/session_actions';
import { createFollow, deleteFollow, fetchUser } from '../../../actions/user_actions';
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
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    // createFollowForCurrentUser: (follow, currentUser) => dispatch(createFollowForCurrentUser(follow, currentUser)),
    // deleteFollowForCurrentUser: (id, currentUser) => dispatch(deleteFollowForCurrentUser(id, currentUser))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButtonModal);
