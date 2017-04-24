import React from 'react';
import { withRouter } from 'react-router';
import ProfilePhotoModalContainer from '../modals/profile_photo_modal_container';
import FollowContainer from '../follows/follow_container';

class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.linkToEditPage = this.linkToEditPage.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.editOrFollowButton = this.editOrFollowButton.bind(this);
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

  editOrFollowButton() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    if (!currentUser || currentUser.id !== user.id) {
      return <FollowContainer />;
    } else {
      return (
        <button
          className={`edit-user-btn`}
          onClick={ this.linkToEditPage }>Edit Profile</button>);
    }
  }

  render() {
    const user = this.props.user;

    return(
      <div className='user-profile-detail'>
        <ProfilePhotoModalContainer />
        <div className='user-details'>
          <div className='username-line'>
            <h2>{ user.username }</h2>
            <p>{ this.editOrFollowButton() }</p>
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
