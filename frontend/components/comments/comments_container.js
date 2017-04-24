import React from 'react';
import { connect } from 'react-redux';
import { addCommentToImage, deleteCommentFromImage } from '../../actions/image_actions';
import Comments from './comments';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentToImage: (comment) => dispatch(addCommentToImage(comment)),
    deleteCommentFromImage: (id) => dispatch(deleteCommentFromImage(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
