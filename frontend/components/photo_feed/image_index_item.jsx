import React from 'react';
import ImageHeaderDetail from './image_header_detail';
import LikeContainer from '../likes/like_container';

class ImageIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageLikesText = this.imageLikesText.bind(this);
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

  render() {
    let className;
    let idName;
    if (this.props.hidden) {
      className = 'hidden';
      idName = 'hidden';
    } else {
      className = '';
      idName = '';
    }

    let image = this.props.image;
    let hidden = this.props.hidden;
    return(
      <div>
        <ul id={idName} className='image-item'>

          <li>
            <ImageHeaderDetail owner={ image.owner } time={image.time}/>
          </li>

          <li>
            <img className={className} src={ image.img_path } />
          </li>

          <ul className='image-details'>
            <li><strong>{this.imageLikesText()}</strong></li>
            <li className='caption'>
              <strong>{ image.owner.username} </strong>{ image.caption }
            </li>

            <ul className='add-like-comment'>
              <li className='heart'><LikeContainer image={image}/></li>
              <li>
                <input type='text' placeholder='Add a comment...' />
              </li>
            </ul>

          </ul>
        </ul>
      </div>
    );

  }
}

export default ImageIndexItem;
