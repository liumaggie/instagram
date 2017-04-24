import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment() {
    this.props.deleteCommentFromImage(this.props.comment.id);
  }

  render() {
    let comment = this.props.comment;
    let currentUser = this.props.currentUser;
    let hidden = comment.author.id === currentUser.id ? '' : 'hidden';
    return(
      <li className='comment-item'>
        <article>
          <strong>{ comment.author.username }</strong>
          { ' ' + comment.body }
        </article>
        <i className={`fa fa-times ${hidden}`} onClick={this.deleteComment}></i>
      </li>
    );
  }
}

export default CommentItem;
