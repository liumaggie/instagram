import React from 'react';
import { fetchImagesForUser, fetchAllImages, removeAllImages } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return({
    images: asArray(state.images),
    currentUser: state.session.currentUser,
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchImagesForUser: (userId) => dispatch(fetchImagesForUser(userId)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchAllImages: () => dispatch(fetchAllImages()),
    removeAllImages: () => dispatch(removeAllImages())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
