import React from 'react';
import FollowContainer from '../../follows/follow_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowsForUser(this.props.follow.id);
  }

  render() {
    const follow = this.props.follow;

    return(
      <ul>
        <li>{ follow.profile_pic_url } { follow.username }</li>
        <li><FollowContainer /></li>
      </ul>
    );
  }
}

export default FollowItem;
