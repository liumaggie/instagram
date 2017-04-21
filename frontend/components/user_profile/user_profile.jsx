import React from 'react';
import UserProfileDetail from './user_profile_detail';
import UserImages from './user_images';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  parseParamsId(props) {
    return parseInt(props.params.id);
  }

  componentDidMount() {
    this.props.fetchUser(this.parseParamsId(this.props));
    this.props.fetchImagesForUser(this.parseParamsId(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchImagesForUser(this.parseParamsId(nextProps));
    }
  }

  render() {
    return(
      <div className='user-profile'>
        <UserProfileDetail user={ this.props.user } currentUser={ this.props.currentUser }/>
        <UserImages images={ this.props.images }/>
      </div>
    );
  }
}


export default UserProfile;
