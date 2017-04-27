import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { following: false, loading: true };
    this.followId = null;
    this.checkIfCurrentUserFollows = this.checkIfCurrentUserFollows.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.removeFollow = this.removeFollow.bind(this);
  }

  // loop through current user's followings and
  // see if this person's id is the same as one
  // of the current user's following id
  checkIfCurrentUserFollows() {
    this.props.currentUser.followings.forEach((following) => {
      if (this.props.followee_id === following.id) {
        // need this id to unfollow
        this.followId = following.follow_id;
        this.setState({ following: true });
      }
    });
  }

  componentWillMount() {
    let user;
    if (this.props.forModal) {
      user = this.props.currentUser;
    } else {
      user = this.props.user;
    }
    if (this.props.currentUser) {
      this.props.fetchTheUser(user.id)
      .then(() => this.checkIfCurrentUserFollows())
      .then(() => this.setState({ loading: false }));
    }
  }

  removeFollow() {
    // pass in an extra argument to backend so we are receiving the
    // respective user (either current user or the user's profile we are on)
    this.props.removeFollow(this.followId, true)
              .then(() => this.setState({ following: false }));
  }

  createFollow() {
    this.props.makeFollow({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.followee_id
    }, true).then(() => this.setState({ following: true }));
  }

  render() {
    // hide button if current user since current user can't follow/unfollow him/herself
    let hidden = (!this.props.currentUser || this.props.followee_id === this.props.currentUser.id) ? 'hidden' : '';
    if (this.state.loading) {
      return <div></div>;
    } else {
      if (this.state.following) {
        return(
          <button className={`unfollow-btn ${hidden}`} onClick={this.removeFollow}>Following</button>
        );
      } else {
        return(
          <button className={`follow-btn ${hidden}`} onClick={this.createFollow}>Follow</button>
        );
      }
    }
  }
}

export default FollowButton;
