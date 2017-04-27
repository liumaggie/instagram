import React from 'react';

class SearchItem extends React.Component {
  render() {
    return(
      <li className='image-header'>
        <img className='profile-pic' src={ this.props.user.profile_pic_url } />
        { this.props.user.username }
      </li>
    );
  }
}

export default SearchItem;
