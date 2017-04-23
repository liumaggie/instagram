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
    // debugger
    return(
      <div>
        <ul id={idName} className='image-item'>

          <li><ImageHeaderDetail owner={ image.owner } time={image.time}/></li>
          <li><img className={className} src={ image.img_path } /></li>
          <ul>
            <li>{ image.likes.length } Likes</li>
            <li>
              <strong>{ image.owner.username} </strong>
              <p>{ image.caption }</p>
            </li>

            <ul>
              <li><LikeContainer image={image}/></li>
              <li>Comments</li>
            </ul>

          </ul>
        </ul>
      </div>
    );

  }
};

export default ImageIndexItem;
