import React from 'react';
import UserProfileDetail from './user_profile_detail';
import UserImages from './user_images';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchImagesForUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId != nextProps.params.userId) {
      this.props.fetchImagesForUser(nextProps.params.userId);
    }
  }
}

const UserProfile = () => (
  <div>
    <UserProfileDetail user={ this.props.currentUser }/>
    <UserImages />
  </div>
);

export default UserProfile;
