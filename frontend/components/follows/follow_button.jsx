import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { following: 'unfollowed', loading: true, followId: null };
    this.removeFollow = this.removeFollow.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.checkIfCurrentUserFollows = this.checkIfCurrentUserFollows.bind(this);
    this.findFollowId = this.findFollowId.bind(this);

  }

  checkIfCurrentUserFollows() {
    let userId = this.props.forModal ? this.props.follow.id : this.props.user.id;
    this.setState({ following: 'unfollowed'}, () => {
      this.props.currentUser.followings.forEach(
        (following) => {
          if (following.id === userId) {
            this.setState({ following: 'followed', loading: false });
          }
        });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id)
                .then(() => this.checkIfCurrentUserFollows());
    }
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

  componentDidMount() {
    const user = (
      this.props.forModal ? this.props.currentUser : this.props.user
    );

    if (this.props.currentUser) {
      this.props.fetchUser(this.props.user.id)
                .then(() => this.props.fetchCurrentUser(this.props.currentUser.id))
                .then(() => this.checkIfCurrentUserFollows())
                .then(() => this.setState({ loading: false }));
    }
  }

  removeFollow(e) {
    this.setState({ following: 'unfollowing' });
    setTimeout(() => {
      this.props.fetchCurrentUser(this.props.currentUser.id)
        .then(() => this.findFollowId())
        .then(() => this.props.removeFollow(this.state.followId, true))
        .then(() => this.setState({ following: 'unfollowed' }));
    }, 500);
  }

  createFollow(e) {
    this.setState({ following: 'following' });
    setTimeout(() => {
      let followee = (this.props.forModal ? this.props.follow.id : this.props.user.id);
      this.props.makeFollow({
        follower_id: this.props.currentUser.id,
        followee_id: followee
      }, true).then(() => this.setState({ following: 'followed'}));
    }, 500);
  }

  render() {
    let user = this.props.forModal ? this.props.follow.id : this.props.user.id;
    let hidden = (!this.props.currentUser || (this.props.currentUser.id === user) ? 'hidden' : '');
    if (this.state.loading) {
      return <button disabled className={'unfollowing'}><i className="fa fa-spinner fa-spin"></i></button>;
    } else {
      if (this.state.following === 'followed') {
        return(
          <button className={`unfollow-btn ${hidden}`} onClick={this.removeFollow}>Following</button>
        );
      } else if (this.state.following === 'unfollowing') {
        return <button disabled className={'unfollowing'}><i className="fa fa-spinner fa-spin"></i></button>;
      } else if (this.state.following === 'following') {
        return <button disabled className={'following'}><i className="fa fa-spinner fa-spin"></i></button>;
      } else {
        return(
          <button className={`follow-btn ${hidden}`} onClick={this.createFollow}>Follow</button>
        );
      }
    }
  }
}

export default FollowButton;
