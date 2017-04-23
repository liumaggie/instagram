import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class UploadPhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      imageFile: null,
      imageUrl: null,
      user_id: this.props.currentUser.id,
      caption: '',
      location: '',
      isCurrentUser: false
    };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateFile = this.updateFile.bind(this);
      this.handleInput = this.handleInput.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => this.setState({ imageFile: file, imageUrl: fileReader.result });

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image[image]", this.state.imageFile);
    formData.append("image[user_id]", this.state.user_id);
    formData.append("image[caption]", this.state.caption);
    formData.append("image[location]", this.state.location);
    this.props.createImage(formData, this.props.currentUser.id)
              .then(() => this.closeModal())
              .then(() => window.location.reload());
  }

  render() {
    return (
      <div className='upload-photo-modal'>
        <i onClick={this.openModal} className="btn fa fa-cloud-upload"></i>
        <Modal
          className="upload-photo-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Upload Photo Modal"
          >

          <ul>
            <li><strong>Upload Profile Picture</strong></li>
            <li>
              <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.updateFile} />
                <label>Caption
                  <input type="text" onChange={this.handleInput("caption")} />
                </label>

                <label>Location
                    <input type="text" onChange={this.handleInput("location")} />
                </label>

                <input type="submit" />
              </form>
            </li>
            <li onClick={this.closeModal}>Cancel</li>
          </ul>
        </Modal>
      </div>
    )
  }
}

export default UploadPhotoModal;
