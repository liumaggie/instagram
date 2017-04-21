import React from 'react';
import { withRouter } from 'react-router';

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
    let hidden = currentUser === user ? '' : 'hidden';
    return(
      <div className='user-profile-detail'>
        <img src={ user.profile_pic_url } />
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
