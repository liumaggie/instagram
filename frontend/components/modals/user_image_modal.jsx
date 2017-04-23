import React from 'react';
import Modal from 'react-modal';
import ImageIndexItem from '../photo_feed/image_index_item';
import ImageHeaderDetail from '../photo_feed/image_header_detail';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class UserImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let user = this.props.currentUser;
    let image = this.props.image;
    return(
      <div>
        <img onClick={this.openModal} src={ image.img_path } />

        <Modal
          className="user-image-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Image Modal"
          >

          <div className='entire-image-modal'>
            <div className='left-image'>
              <img src={ image.img_path } />
            </div>

            <div className='right-details'>
              <ImageIndexItem image={image} hidden={true}/>
            </div>
          </div>

        </Modal>
      </div>

    );
  }
}

export default UserImageModal;

// <ImageHeaderDetail owner={image.owner} time={image.time} />
// <ul>
//   <li>Likes</li>
//   <li>
//     <strong>{ image.owner.username} </strong>
//     <p>{ image.caption }</p>
//   </li>
//   <li>Comments</li>
// </ul>
