import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  deleteComment() {
    this.props.deleteCommentFromImage(this.props.comment.id);
  }

  redirectToUserProfile() {
    this.props.router.push(`users/${this.props.comment.author.id}`);
  }

  render() {
    let comment = this.props.comment;
    let currentUser = this.props.currentUser;
    let hidden = (!currentUser || comment.author.id === currentUser.id) ? '' : 'hidden';
    return(
      <li className='comment-item'>
        <article>
          <strong className='username' onClick={this.redirectToUserProfile}>{ comment.author.username }</strong>
          { ' ' + comment.body }
        </article>
        <i className={`fa fa-times ${hidden}`} onClick={this.deleteComment}></i>
      </li>
    );
  }
}

export default withRouter(CommentItem);
