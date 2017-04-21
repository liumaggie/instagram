import React from 'react';

const ImageIndexItem = ({ image }) => {
  return(
    <li>
      <img src={ image.img_path } />
    </li>
  );
};

export default ImageIndexItem;
