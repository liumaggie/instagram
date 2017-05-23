import React from 'react';
import Modal from 'react-modal';
import FollowItem from './follow_item';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class FollowsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getFollows = this.getFollows.bind(this);
    this.checkIfCurrentUserFollows = this.checkIfCurrentUserFollows.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getFollows(follows) {
    return <p onClick={this.openModal}>{ follows }</p>;
  }

  checkIfCurrentUserFollows(userId) {
    let followings = this.props.currentUser.followings;
    for (let i=0; i < followings.length; i++) {
      if (followings[i].id === userId) {
        return true;
      }
    }
    return false;
  }

  render() {
    let follows;
    const headerText =
      this.props.totalFollowers ? 'Followers' : 'Following';
    const followsArray = this.props.totalFollowers ?
      this.props.followers : this.props.followings;
    if (this.props.totalFollowers) {
      follows = this.getFollows(this.props.totalFollowers);
    } else {
      follows = this.getFollows(this.props.totalFollowing);
    }

    return(
      <section>
        { follows }
        <Modal
          className="follows-modal modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Profile Photo Modal"
        >
          <div className='follows'>
            <h3>{ headerText }</h3>
            <ul className='follows-list'>
              {
                followsArray.map((follow) =>
                  <FollowItem
                    key={follow.id}
                    follow={follow}
                    followboolean={this.checkIfCurrentUserFollows(follow.id)}
                    fetchUser={this.props.fetchUser}
                    modalIsOpen={this.state.modalIsOpen}
                  />)
              }
            </ul>
          </div>

        </Modal>
      </section>
    );
  }
}

export default FollowsModal;
