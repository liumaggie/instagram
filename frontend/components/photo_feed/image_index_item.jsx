import React from 'react';
import ImageHeaderDetail from './image_header_detail';
import LikeContainer from '../likes/like_container';
import CommentsContainer from '../comments/comments_container';
import NewCommentContainer from '../comments/new_comment_container';
import { merge } from 'lodash';
import { withRouter } from 'react-router';

class ImageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.imageLikesText = this.imageLikesText.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  imageLikesText() {
    let imageLikes = this.props.image.likes.length;
    let imageLikesText;
    if (imageLikes === 0) {
      imageLikesText = 'Be the first to like this.';
    } else if (imageLikes === 1) {
      imageLikesText = `${imageLikes} like`;
    } else {
      imageLikesText = `${imageLikes} likes`;
    }
    return imageLikesText;
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.image.owner.id}`);
  }

  render() {
    let image = this.props.image;
    let hidden = this.props.hidden ? 'hidden' : '';
    return(
      <ul id={hidden} className='image-item'>

        <li>
          <ImageHeaderDetail owner={ image.owner } time={image.time}/>
        </li>

        <li>
          <img className={hidden} src={ image.img_path } />
        </li>

        <ul className='image-details'>
          <li><strong>{this.imageLikesText()}</strong></li>
          <li className='caption'>
            <strong onClick={this.redirectToUserProfile} className='username'>{ image.owner.username} </strong>{ image.caption }
          </li>

          <li><CommentsContainer comments={ image.comments }/></li>

          <ul className='add-like-comment'>
            <li className='heart'><LikeContainer image={image}/></li>
            <li>
              <NewCommentContainer image={this.props.image}/>
            </li>
          </ul>

        </ul>
      </ul>
    );

  }
}

export default withRouter(ImageIndexItem);
