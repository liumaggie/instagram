import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages, fetchAllImagesFromUserForFeed, removeAllImages } from '../../actions/image_actions';
import ImageIndex from './image_index';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    images: asArray(state.images)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllImages: () => dispatch(fetchAllImages()),
    fetchAllImagesFromUserForFeed: (userId) => dispatch(fetchAllImagesFromUserForFeed(userId)),
    removeAllImages: () => dispatch(removeAllImages())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
