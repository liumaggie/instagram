import React from 'react';
import { connect } from 'react-redux';
import FollowsModal from './follows_modal';
import { createFollow, deleteFollow, fetchFollowersForUser, fetchFollowingsForUser, fetchUser } from '../../../actions/user_actions';

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
    fetchFollowersForUser: (userId, followers) => dispatch(fetchFollowersForUser(userId, followers)),
    fetchFollowingsForUser: (userId, followings) => dispatch(fetchFollowingsForUser(userId, followings)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsModal);
