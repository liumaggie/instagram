import React from 'react';
import { withRouter } from 'react-router';

class ImageHeaderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.owner.id}`);
  }

  render() {
    return(
      <div className='image-header'>
        <ul onClick={this.redirectToUserProfile}>
          <li><img className='profile-pic' src={ this.props.owner.profile_pic_url } /></li>
          <li>{this.props.owner.username}</li>
        </ul>

        <div>
          <span>{this.props.time}</span>
        </div>

      </div>
    );
  }
}

export default withRouter(ImageHeaderDetail);
