import React from 'react';
import { withRouter } from 'react-router';
import ProfilePhotoModalContainer from '../modals/profile_photo_modal_container';
import FollowsModalContainer from '../modals/follows_list/follows_modal_container';
import FollowButtonContainer from '../follows/follow_button_container';

class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.linkToEditPage = this.linkToEditPage.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.editOrFollowButton = this.editOrFollowButton.bind(this);
    this.checkIfCurrentUserFollows =
      this.checkIfCurrentUserFollows.bind(this);
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

  checkIfCurrentUserFollows(userId) {
    if (this.props.currentUser) {
      let followings = this.props.currentUser.followings;
      for (let i=0; i < followings.length; i++) {
        if (followings[i].id === userId) {
          return true;
        }
      }
    }
    return false;
  }

  editOrFollowButton() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    if (!currentUser || currentUser.id !== user.id) {
      return <FollowButtonContainer
                forModal={false}
                followboolean={this.checkIfCurrentUserFollows(user.id)}
                username={user}/>;
    } else {
      return (
        <button
          className='edit-user-btn'
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
            <span>{ this.editOrFollowButton() }</span>
          </div>

          <ul className='post-follows'>
            <li>
              { this.calculateTotal(this.props.imagePosts, 'post') }
            </li>
            <li className='total-follows'>
              <FollowsModalContainer
                totalFollowers={
                  this.calculateTotal(user.followers.length, 'follower')
                }/></li>
            <li className='total-follows'>
              <FollowsModalContainer
                totalFollowing={ `${user.followings.length} following`}
                /></li>
          </ul>
          <p className='bio'>{ user.cost }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfileDetail);
