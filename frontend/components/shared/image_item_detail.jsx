import React from 'react';
import ImageIndexItem from '../photo_feed/image_index_item';
import ImageDetailModal from '../modals/image_detail_modal';
import { withRouter } from 'react-router';

class ImageItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.imageLikesText = this.imageLikesText.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  imageLikesText() {
    let imageLikes = this.props.image.likes.length;
    let imageLikesText;
    if (imageLikes === 0) {
      imageLikesText = 'Be the first to like this.';
    } else if (imageLikes === 1) {
      imageLikesText = `${imageLikes} like`;
    } else {
      imageLikesText = `${imageLikes} likes`;
    }
    return imageLikesText;
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.image.owner.id}`);
  }

  render() {
    if (this.props.imageFor === 'modal') {
      return <ImageDetailModal
              image={ this.props.image }
              imageLikesText= { this.imageLikesText() }
              deleteButtonHidden={this.props.hidden}
              deleteImage={this.props.deleteImage}
              redirectToUserProfile = { this.redirectToUserProfile }
              />;
    } else {
      return <ImageIndexItem
              image={ this.props.image }
              imageLikesText= { this.imageLikesText() }
              redirectToUserProfile = { this.redirectToUserProfile }
            />;
    }
  }
}

export default withRouter(ImageItemDetail);
