import React from 'react';
import ImageHeaderDetail from './image_header_detail';
import LikeContainer from '../likes/like_container';
import CommentsContainer from '../comments/comments_container';
import NewCommentContainer from '../comments/new_comment_container';
import { merge } from 'lodash';
import { withRouter } from 'react-router';

class ImageIndexItem extends React.Component {
  render() {
    let image = this.props.image;
    return(
      <ul className='image-item'>

        <li>
          <ImageHeaderDetail owner={ image.owner } time={image.time}/>
        </li>

        <li>
          <img src={ image.img_path } />
        </li>

        <ul className='image-details'>
          <li><strong>{this.props.imageLikesText}</strong></li>
          <li className='caption'>
            <strong
              onClick={this.props.redirectToUserProfile}
              className='username'>{ image.owner.username}
            </strong>
            { ' ' } { image.caption}
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
