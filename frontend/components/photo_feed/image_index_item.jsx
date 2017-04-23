import React from 'react';
import ImageHeaderDetail from './image_header_detail';

const ImageIndexItem = ({ image, hidden }) => {
  let className;
  if (hidden) {
    className = 'hidden';
  } else {
    className = '';
  }
  return(
    <div>
      <ul id='image-item-modal' className='image-item'>

        <li><ImageHeaderDetail owner={ image.owner } time={image.time}/></li>
        <li><img className={className} src={ image.img_path } /></li>

        <ul>
          <li>Likes</li>
          <li>
            <strong>{ image.owner.username} </strong>
            <p>{ image.caption }</p>
          </li>
          <li>Comments</li>

        </ul>
      </ul>
    </div>
  )
}

export default ImageIndexItem;
