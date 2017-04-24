import React from 'react';
import UserProfileDetail from './user_profile_detail';
import UserImages from './user_images';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    this.fetchUserAndImages = this.fetchUserAndImages.bind(this);
  }

  parseParamsId(props) {
    return parseInt(props.params.id);
  }

  componentDidMount() {
    this.fetchUserAndImages(this.props);
  }

  fetchUserAndImages(props) {
    this.props.fetchUser(this.parseParamsId(props))
      .then(() => this.props.fetchImagesForUser(this.parseParamsId(props)))
      .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(this.parseParamsId(nextProps));
      this.props.fetchImagesForUser(this.parseParamsId(nextProps));
    }
  }

  render() {
    if (this.state.loading) {
      return(<div className="loader">Loading...</div>);
    } else {
      return(
        <div className='user-profile'>
          <UserProfileDetail
            imagePosts={this.props.images.length}
            user={ this.props.user }
            currentUser={ this.props.currentUser }/>
          <UserImages images={ this.props.images }/>
        </div>
      );
    }
  }
}



export default UserProfile;
