import React from 'react';
import { withRouter } from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    let following = this.props.followboolean ? 'followed' : 'unfollowed';

    this.state = {
      following,
      followId: null };
    this.removeFollow = this.removeFollow.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.findFollowId = this.findFollowId.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.id !== nextProps.params.id) {
  //     this.props.fetchUser(nextProps.params.id);
  //   }
  // }

  findFollowId() {
    const userId =
      (this.props.follow ? this.props.follow.id : this.props.user.id);

    let followId;
    this.props.currentUser.followings.forEach(
      (following) => {
        if (!this.props.currentUser || following.id === userId) {
          this.setState({ followId: following.follow_id });
        }
    });
  }

  removeFollow(e) {
    this.setState({ following: 'unfollowing' }, () => {
      this.props.fetchCurrentUser(this.props.currentUser.id)
      .then(() => this.findFollowId())
      .then(() => this.props.removeFollow(this.state.followId, true))
      .then(() => this.setState({ following: 'unfollowed' }));
    });

  }

  createFollow(e) {
    this.setState({ following: 'following' }, () => {
      let followee = (this.props.forModal ?
        this.props.follow.id : this.props.user.id);
        this.props.makeFollow({
          follower_id: this.props.currentUser.id,
          followee_id: followee
        }, true).then(() => this.setState({ following: 'followed'}));
    });
  }

  render() {
    let user = this.props.forModal ?
        this.props.follow.id : this.props.user.id;
    let hidden = (!this.props.currentUser ||
       (this.props.currentUser.id === user) ? 'hidden' : '');
    if (this.state.following === 'followed') {
      return <button className={`unfollow-btn ${hidden}`}
                    onClick={this.removeFollow}>Following
              </button>;
    } else if (this.state.following === 'unfollowed') {
      return <button className={`follow-btn ${hidden}`}
                    onClick={this.createFollow}>Follow
              </button>;
    } else {
      return <button disabled className='unfollowing'>
        <i className="fa fa-spinner fa-spin"></i>
      </button>;
    }
  }

}

export default FollowButton;
