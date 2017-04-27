import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages, fetchAllImagesFromUserForFeed, fetchNumOfImages } from '../../actions/image_actions';
import ImageIndexInfinite from './image_index_infinite';
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
    fetchNumOfImages: (userId, limit, offset) => dispatch(fetchNumOfImages(userId, limit, offset))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndexInfinite);
