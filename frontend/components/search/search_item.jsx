import React from 'react';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.user.id}`);
  }

  render() {
    return(
      <li onClick={this.redirectToUserProfile}
          className='search-item'>
            <img className='profile-pic'
                src={ this.props.user.profile_pic_url } />
            <span>{ this.props.user.username }</span>
      </li>
    );
  }
}

export default withRouter(SearchItem);
