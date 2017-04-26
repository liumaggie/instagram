import React from 'react';
import { createFollow, deleteFollow } from '../../actions/user_actions';
import { createFollowForCurrentUser, deleteFollowForCurrentUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Follow from './follow';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
    createFollowForCurrentUser: (follow, id) => dispatch(createFollowForCurrentUser(follow, id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
