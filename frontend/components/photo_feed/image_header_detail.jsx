import React from 'react';

const ImageHeaderDetail = ({ owner, time }) => {
  return(
    <div className='image-header'>
      <ul>
        <li><img src={ owner.profile_pic_url } /></li>
        <li>{ owner.username }</li>
      </ul>

      <div>
        <span>{time}</span>
      </div>

    </div>

  )
}

export default ImageHeaderDetail;
