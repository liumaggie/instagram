import React from 'react';

const UserImageItem = ({ image }) => {
  return(
    <li>
      <img src={ image.img_path } />
    </li>
  )
};

export default UserImageItem;
