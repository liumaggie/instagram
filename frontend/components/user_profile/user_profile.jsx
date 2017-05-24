import React from 'react';
import UserProfileDetail from './user_profile_detail';
import UserImages from './user_images';
import Footer from '../footer/footer';
import { withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    this.fetchUserAndImages = this.fetchUserAndImages.bind(this);
  }

  parseParamsId(props) {
    return parseInt(props.params.id);
  }

  componentWillMount() {
    this.setState({ loading: true },
      () => this.fetchUserAndImages(this.props));
  }

  componentWillUnmount() {
    this.props.removeAllImages();
    this.props.removeUser();
  }

  fetchUserAndImages(props) {
    this.props.fetchUser(this.parseParamsId(props))
      .then(() => this.props.fetchImagesForUser(
                                  this.parseParamsId(props)))
      .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.setState({ loading: true },
        () => this.fetchUserAndImages(nextProps));
    }
  }

  render() {
    if (this.state.loading) {
      return(<div className='loader'></div>);
    } else {
      return(
        <div className='user-profile'>
          <UserProfileDetail
            imagePosts={this.props.images.length}
            user={ this.props.user }
            currentUser={ this.props.currentUser }
            fetchUser={ this.props.fetchUser  }/>
          <UserImages images={ this.props.images }/>
          <Footer />
        </div>
      );
    }
  }
}

export default withRouter(UserProfile);
