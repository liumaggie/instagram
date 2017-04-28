import React from 'react';
import { merge } from 'lodash';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.addComment = this.addComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addComment(e) {
    if (e.key == 'Enter') {
      let comment = merge({}, this.state,
        {
          author_id: this.props.currentUser.id,
          image_id: this.props.image.id
        }
      );
      this.props.addCommentToImage(comment)
                .then(() => this.setState({ body: '' }));
    } else {
      this.handleInput(e);
    }
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  render() {
    return(
      <input
        className='comment-box'
        type='text'
        placeholder='Add a comment...'
        onKeyPress={this.addComment}
        onChange={this.handleInput}
        value={this.state.body}/>
  );}
}

export default NewComment;
