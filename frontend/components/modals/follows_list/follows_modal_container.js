import React from 'react';
import { connect } from 'react-redux';
import FollowsModal from './follows_modal';
import { createFollow, deleteFollow, fetchFollowsForUser } from '../../../actions/user_actions';

export const mapStateToProps = (state) => {
  return {
    followers: state.user.followers,
    followings: state.user.followings
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
    fetchFollowsForUser: (userId) => dispatch(fetchFollowsForUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsModal);
