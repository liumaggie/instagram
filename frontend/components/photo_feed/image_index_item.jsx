import React from 'react';
import ImageHeaderDetail from './image_header_detail';

const ImageIndexItem = ({ image, currentUser }) => {
  return(
    <div>
      <ul className='image-item'>

        <li><ImageHeaderDetail currentUser={currentUser} time={image.time}/></li>
        <li><img src={ image.img_path } /></li>

        <ul>
          <li>Likes</li>
          <li>{ image.caption }</li>
          <li>Comments</li>

        </ul>
      </ul>
    </div>
  );
};

export default ImageIndexItem;
