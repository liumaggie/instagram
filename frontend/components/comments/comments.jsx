import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {
          this.props.comments.map((comment) =>
            <CommentItem key={comment.id} comment={ comment } />)
        }
      </ul>
    );
  }
}

export default Comments;
