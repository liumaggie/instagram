import React from 'react';
import { connect } from 'react-redux';
import { fetchAllImages } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';
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
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
