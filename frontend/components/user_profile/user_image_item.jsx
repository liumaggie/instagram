import React from 'react';
import UserImageModalContainer from '../modals/user_image_modal_container';

const UserImageItem = ({ image }) => {
  return(
    <li>
      <UserImageModalContainer image={image}/>
    </li>
  );
};

export default UserImageItem;
