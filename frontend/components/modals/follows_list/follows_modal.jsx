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
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let follows;
    const headerText = this.props.totalFollowers ? 'Followers' : 'Following';
    const followsArray = this.props.totalFollowers ? this.props.followers : this.props.followings;
    if (this.props.totalFollowers) {
      follows = <p onClick={this.openModal}>{ this.props.totalFollowers }</p>;
    } else {
      follows = <p onClick={this.openModal}>{ this.props.totalFollowing }</p>;
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
                    fetchUser={this.props.fetchUser}
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
