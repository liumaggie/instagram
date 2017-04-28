import React from 'react';
import { connect } from 'react-redux';
import { fetchNumOfImages, removeAllImages } from '../../actions/image_actions';
import ImageIndexInfinite from './image_index_infinite';
import { asArrayReversed } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    images: asArrayReversed(state.images)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchNumOfImages: (userId, limit, offset) =>
      dispatch(fetchNumOfImages(userId, limit, offset)),
    removeAllImages: () => dispatch(removeAllImages())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndexInfinite);
