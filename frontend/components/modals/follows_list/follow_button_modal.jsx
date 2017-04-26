import React from 'react';

// loop through current user's followings and see if this person's id is the same as one of the current user's following id

class FollowButtonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { following: false };
    this.checkIfCurrentUserFollows = this.checkIfCurrentUserFollows.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.removeFollow = this.removeFollow.bind(this);
  }

  checkIfCurrentUserFollows() {
    this.props.currentUser.followings.forEach((following) => {
      if (this.props.follow.id === following.id) {
        this.setState({ following: true });
      }
    });
  }

  componentDidMount() {
    this.checkIfCurrentUserFollows();
  }

  removeFollow() {
    this.props.deleteFollowForCurrentUser(this.props.follow.follow_id, true)
              .then(() => this.setState({ following: false }));
  }

  createFollow() {
    this.props.createFollowForCurrentUser({
      follower_id: this.props.currentUser.id,
      followee_id: this.props.follow.id
    }, true).then(() => this.setState({ following: true }));
  }

  render() {
    if (this.state.following) {
      return(
        <button className='unfollow-btn' onClick={this.removeFollow}>Following</button>
      );
    } else {
      return(
        <button className='follow-btn' onClick={this.createFollow}>Follow</button>
      );
    };
  }
}

export default FollowButtonModal;
