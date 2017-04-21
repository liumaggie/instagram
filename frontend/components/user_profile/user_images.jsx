import React from 'react';
import UserImageItem from './user_image_item';

const UserImages = ({ images }) => {
  return(
    <div className='user-images'>
      <ul>
        {
          images.map(
            (image) =>
            <UserImageItem
              key={image.id}
              image={image} />
          )
        }
      </ul>
    </div>
  )
}

export default UserImages;
