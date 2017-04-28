import React from 'react';
import { createFollowForCurrentUser, deleteFollowForCurrentUser, fetchCurrentUser } from '../../actions/session_actions';
import { createFollow, deleteFollow, fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { withRouter } from 'react-router';

const mapStateToProps = (state, nextProps) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user,
    forModal: nextProps.forModal,
    hi: nextProps.hi
  });
};

const mapDispatchToProps = (dispatch, nextProps) => {
  const makeFollow = nextProps.forModal ? createFollowForCurrentUser : createFollow;
  const removeFollow = nextProps.forModal ? deleteFollowForCurrentUser : deleteFollow;
  const fetchTheUser = nextProps.forModal ? fetchCurrentUser : fetchUser;
  return({
    makeFollow: (follow, currentUser) => dispatch(makeFollow(follow, currentUser)),
    removeFollow: (id, currentUser) => dispatch(removeFollow(id, currentUser)),
    fetchTheUser: (id) => dispatch(fetchTheUser(id)),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowButton));
