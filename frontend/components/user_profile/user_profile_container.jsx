import React from 'react';
import { fetchImagesForUser, removeAllImages } from '../../actions/image_actions';
import { fetchUser, removeUser } from '../../actions/user_actions';
import { asArrayReversed } from '../../reducers/selectors';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return({
    images: asArrayReversed(state.images),
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchImagesForUser: (userId) => dispatch(fetchImagesForUser(userId)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    removeAllImages: () => dispatch(removeAllImages()),
    removeUser: () => dispatch(removeUser())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
