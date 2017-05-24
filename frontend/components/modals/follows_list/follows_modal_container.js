import React from 'react';
import { connect } from 'react-redux';
import FollowsModal from './follows_modal';
import { fetchUser } from '../../../actions/user_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';

export const mapStateToProps = (state) => {
  return {
    followers: state.user.followers,
    followings: state.user.followings,
    user: state.user,
    currentUser: state.session.currentUser
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsModal);
