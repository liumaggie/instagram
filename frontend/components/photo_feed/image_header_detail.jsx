import React from 'react';

const ImageHeaderDetail = ({ currentUser, time }) => {
  return(
    <div className='image-header'>
      <ul>
        <li><img src={ currentUser.profile_pic_url } /></li>
        <li>{ currentUser.username }</li>
      </ul>

      <span>{time}</span>
    </div>

  )
}

export default ImageHeaderDetail;
