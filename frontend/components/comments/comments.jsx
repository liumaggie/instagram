import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className='comments'>
        {
          this.props.comments.map((comment) =>
            <CommentItem
              key={comment.id}
              comment={ comment }
              currentUser={this.props.currentUser}
              deleteCommentFromImage={this.props.deleteCommentFromImage}
            />)
        }
      </ul>
    );
  }
}

export default Comments;
