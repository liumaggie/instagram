import React from 'react';
import FollowButtonContainer from '../../follows/follow_button_container';

class FollowItem extends React.Component {

  render() {
    const follow = this.props.follow;
    return(
      <ul className='single-follow'>
        <li><img src={ follow.profile_pic_url } /> { follow.username }</li>
        <FollowButtonContainer follow={follow} forModal={true}/>
      </ul>
    );
  }
}

export default FollowItem;
