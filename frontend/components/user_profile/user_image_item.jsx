import React from 'react';
import UserImageModal from '../modals/user_image_modal';

const UserImageItem = ({ image }) => {
  return(
    <li>
      <UserImageModal image={image}/>
    </li>
  );
};

export default UserImageItem;
