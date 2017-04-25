import React from 'react';

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { following: false };
    this.removeFollow = this.removeFollow.bind(this);
    this.createFollow = this.createFollow.bind(this);
  }

  findFollowId() {
    let followId;
    this.props.user.followers.forEach(
      (follower) => {
        if (follower.id === this.props.currentUser.id) {
          followId = follower.follow_id;
        }
    });
    return followId;
  }

  componentDidMount() {
    if (this.findFollowId()) {
      this.setState({ following: true });
    } else {
      this.setState({ following: false });
    }
  }

  removeFollow() {
    this.props.deleteFollow(this.findFollowId())
              .then(() => this.setState({ following: false }));
  }

  createFollow() {
    this.props.createFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    }).then(() => this.setState({ following: true }));
  }

  render() {
    if (this.state.following) {
      return(
        <button onClick={this.removeFollow}>Unfollow</button>
      );
    } else {
      return(
        <button onClick={this.createFollow}>Follow</button>
      );
    }
  }
}

export default Follow;
