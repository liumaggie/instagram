import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages, updateImage } from '../../actions/image_actions';
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
    updateImage: (image) => dispatch(updateImage(image))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
