import React from 'react';
import FollowButtonContainer from '../../follows/follow_button_container';
import { withRouter } from 'react-router';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  redirectToUserProfile() {
    this.props.fetchUser(this.props.follow.id).then(() => {
      this.props.router.push(`/users/${this.props.follow.id}`);
    });
  }

  render() {
    const follow = this.props.follow;
    return(
      <ul className='single-follow'>
        <li className='user' onClick={this.redirectToUserProfile}>
          <img src={ follow.profile_pic_url } />
          <strong>{ follow.username }</strong>
        </li>
        <FollowButtonContainer
          follow={follow}
          followboolean={this.props.followboolean}
          forModal={true}/>
      </ul>
    );
  }
}

export default withRouter(FollowItem);
