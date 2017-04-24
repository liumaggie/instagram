import React from 'react';
import ImageHeaderDetail from './image_header_detail';
import LikeContainer from '../likes/like_container';

class ImageIndexItem extends React.Component {
  constructor(props) {
    super(props);
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

          <li><ImageHeaderDetail owner={ image.owner } time={image.time}/></li>
          <li><img className={className} src={ image.img_path } /></li>
          <ul className='image-details'>
            <li>{ image.likes.length } Likes</li>
            <li>
              <strong>{ image.owner.username} </strong>
              <p>{ image.caption }</p>
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
};

export default ImageIndexItem;
