import React from 'react';
import { merge } from 'lodash';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liker_id: null, image_id: this.props.image.id, addLike: false };
    this.addLike = this.addLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
  }

  imageLikesIncludeUser(image, user) {
    let found = null;
    image.likes.forEach((like) => {
      if (like.liker_id === user.id) {
        found = like.id;
      }
    });
    return found;
  }

  componentDidMount() {
    if (this.imageLikesIncludeUser(this.props.image, this.props.currentUser)) {
      this.setState({ addLike: false });
    } else {
      this.setState({ addLike: true });
    }
  }

  addLike() {
    this.setState(
      { liker_id: this.props.currentUser.id },
        () => {
          let like = merge({}, this.state);
          this.props.addLikeToImage(like).then(() => this.setState({ addLike: false }));
      }
    );
  }

  deleteLike() {
    let likeId = this.imageLikesIncludeUser(this.props.image, this.props.currentUser);
    this.props.deleteLikeFromImage(likeId).then(() => this.setState({ addLike: true }));
  }

  render() {
    if (this.state.addLike) {
      return(
        <i onClick={this.addLike} className="fa fa-heart-o"></i>
      );
    } else {
      return(
        <i onClick={this.deleteLike} className="fa fa-heart"></i>
      );
    }
  }
}

export default Like;
