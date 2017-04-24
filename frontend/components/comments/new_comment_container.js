import React from 'react';
import { connect } from 'react-redux';
import { addCommentToImage } from '../../actions/image_actions';
import NewComment from './new_comment';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    addCommentToImage: (comment) => dispatch(addCommentToImage(comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
