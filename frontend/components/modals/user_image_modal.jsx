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
    this.deleteImage = this.deleteImage.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  deleteImage() {
    this.props.deleteImage(this.props.image.id)
              .then(() => this.closeModal())
              .then(() => window.location.reload());
  }

  render() {
    const currentUser = this.props.currentUser;
    const image = this.props.image;
    const user = this.props.user;
    let hidden = currentUser.id === user.id ? '' : 'hidden';
    return(
      <div>
        <div className='show-hover'>
          <img onClick={this.openModal} src={ image.img_path } />
          <div className='image-hover'>
            <span><i className="fa fa-heart" aria-hidden="true"></i>{ image.likes.length }</span>
            <span><i className="fa fa-comment-o" aria-hidden="true"></i>{ image.comments.length }</span>
          </div>
        </div>

        <Modal
          className="user-image-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Image Modal"
          >

          <div className='entire-image-modal group'>
            <div className='left-image'>
              <img id='img'src={ image.img_path } />
            </div>

            <div className='right-details'>
              <ImageIndexItem
                image={image}
                hidden={true}
                />

              <span className={`delete-img-btn ${hidden}`} onClick={this.deleteImage}>
                <i className='fa fa-trash-o'></i> Delete Photo</span>

            </div>
          </div>

        </Modal>
      </div>

    );
  }
}

export default UserImageModal;
