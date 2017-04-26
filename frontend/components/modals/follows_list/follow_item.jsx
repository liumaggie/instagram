import React from 'react';
// import FollowListItem from '../../follows/follow_container';
import FollowContainer from '../../follows/follow_container';
import FollowButtonModalContainer from './follow_button_modal_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const follow = this.props.follow;

    return(
      <ul>
        <li>{ follow.profile_pic_url } { follow.username }</li>
        <FollowButtonModalContainer follow={follow} />
      </ul>
    );
  }
}
// <li><FollowListItem /></li>

export default FollowItem;
