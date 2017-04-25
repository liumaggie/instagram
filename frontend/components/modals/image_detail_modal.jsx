import React from 'react';
import LikeContainer from '../likes/like_container';
import CommentsContainer from '../comments/comments_container';
import NewCommentContainer from '../comments/new_comment_container';

class ImageDetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToUserProfile = this.props.redirectToUserProfile.bind(this);
  }

  render() {
    let image = this.props.image;

    return(
      <section className='image-modal-details'>

        <ul className='sub-header'>
          <li><strong>{ this.props.imageLikesText }</strong></li>
          <li>{ image.time }</li>
        </ul>

        <ul className='caption-comments-scroll'>
          <li><strong onClick={this.redirectToUserProfile}
            className='username'>{ image.owner.username + ' '}
          </strong>{ image.caption }</li>
          <li><CommentsContainer comments={ image.comments } /></li>
        </ul>

        <ul className='add-like-comment'>
          <li className='heart'><LikeContainer image={image}/></li>
          <li>
            <NewCommentContainer image={this.props.image}/>
          </li>
        </ul>
      </section>
    );
  }
}

export default ImageDetailModal;
