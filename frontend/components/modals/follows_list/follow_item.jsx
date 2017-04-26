import React from 'react';
import FollowContainer from '../../follows/follow_container';
import FollowButtonModalContainer from './follow_button_modal_container';

class FollowItem extends React.Component {

  render() {
    const follow = this.props.follow;
    return(
      <ul className='single-follow'>
        <li><img src={ follow.profile_pic_url } /> { follow.username }</li>
        <FollowButtonModalContainer follow={follow} />
      </ul>
    );
  }
}

export default FollowItem;
