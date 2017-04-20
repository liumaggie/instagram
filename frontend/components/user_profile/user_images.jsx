import React from 'react';
import UserImageItem from './user_image_item';

class UserImages extends React.Component {

  componentDidMount() {
    this.props.fetchImagesForUser(this.props.currentUser.id);
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.images.map(
              (image) =>
              <UserImageItem
                key={image.id}
                image={image}
                deleteImage={this.props.deleteImage}
                updateImage={this.props.updateImage} />
            )
          }
        </ul>
      </div>
    );
  }

}

export default UserImages;
