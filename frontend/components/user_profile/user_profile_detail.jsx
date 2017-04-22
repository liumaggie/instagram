import React from 'react';
import { withRouter } from 'react-router';
import ProfilePhotoModalContainer from '../modals/profile_photo_modal_container';

class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.linkToEditPage = this.linkToEditPage.bind(this);
  }

  linkToEditPage() {
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

  render() {
    let user = this.props.user;
    let currentUser = this.props.currentUser;
    let hidden = (currentUser.id === user.id ? '' : 'hidden');

    return(
      <div className='user-profile-detail'>
        <ProfilePhotoModalContainer />
        <div className='user-details'>
          <div className='username-line'>
            <h2>{ user.username }</h2>
            <button
              className={`edit-user-btn ${hidden}`}
              onClick={ this.linkToEditPage }>Edit Profile</button>
          </div>

          <div className='post-follows'>
            <p>Post</p>
            <p>Follower</p>
            <p>Following</p>
          </div>
          <p className='description'>{ user.description }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfileDetail);
