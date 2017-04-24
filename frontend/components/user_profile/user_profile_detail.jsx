import React from 'react';
import { withRouter } from 'react-router';
import ProfilePhotoModalContainer from '../modals/profile_photo_modal_container';

class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.linkToEditPage = this.linkToEditPage.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  linkToEditPage() {
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

  calculateTotal(count, name) {
    if (count <= 1) {
      return `${count} ${name}`;
    } else {
      return `${count} ${name}s`;
    }
  }


  render() {
    let user = this.props.user;
    let currentUser = this.props.currentUser;
    let hidden;
    if (!currentUser || currentUser.id !== user.id) {
      hidden = 'hidden';
    } else {
      hidden = '';
    }

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
            <p>{ this.calculateTotal(this.props.imagePosts, 'post') }</p>
            <p>{ this.calculateTotal(this.props.user.followers.length, 'follower') }</p>
            <p>{ `${this.props.user.followings.length} following` }</p>
          </div>
          <p className='bio'>{ user.bio }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfileDetail);
