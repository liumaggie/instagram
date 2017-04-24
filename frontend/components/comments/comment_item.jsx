import React from 'react';

const CommentItem = ({ comment }) => {
  // debugger
  return(
    <li>
      { comment.author.username }
      { comment.body }
    </li>
  );
};

export default CommentItem;
