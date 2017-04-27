import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { following: false, loading: true, followId: null };
    this.removeFollow = this.removeFollow.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.checkIfCurrentUserFollows = this.checkIfCurrentUserFollows.bind(this);
    this.findFollowId = this.findFollowId.bind(this);
  }

  checkIfCurrentUserFollows() {
    let userId = this.props.forModal ? this.props.follow.id : this.props.user.id;
    this.props.currentUser.followings.forEach(
      (following) => {
        if (following.id === userId) {
          this.setState({ following: true, loading: false });
        }
      });
  }

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


  componentWillMount() {
    const user = (
      this.props.forModal ? this.props.currentUser : this.props.user
    );

    if (this.props.currentUser) {
      this.props.fetchTheUser(user.id)
                .then(() => this.checkIfCurrentUserFollows())
                .then(() => this.setState({ loading: false }));
    }
  }


  removeFollow() {
    this.props.fetchCurrentUser(this.props.currentUser.id)
              .then(() => this.findFollowId())
              .then(() => this.props.removeFollow(this.state.followId, true))
              .then(() => this.setState({ following: false }));
  }

  createFollow() {
    let followee =
      (this.props.forModal ? this.props.follow.id : this.props.user.id);
    this.props.makeFollow({
      follower_id: this.props.currentUser.id,
      followee_id: followee
    }, true).then(() => this.setState({ following: true }));
  }

  render() {
    // let hidden = this.props.currentUser.id === this.follow.id ? 'hidden' : '';
    if (this.state.loading) {
      return (<div></div>);
    } else {
      if (this.state.following) {
        return(
          <button className={`unfollow-btn `} onClick={this.removeFollow}>Following</button>
        );
      } else {
        return(
          <button className={`follow-btn`} onClick={this.createFollow}>Follow</button>
        );
      }
    }
  }
}

export default FollowButton;
