import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class ProfilePhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      imageFile: null,
      imageUrl: null,
      isCurrentUser: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (parseInt(this.props.params.id) === this.props.currentUser.id) {
      this.setState({ isCurrentUser: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(this.props.params.id) !== this.props.currentUser.id) {
      this.setState({ isCurrentUser: false });
    } else {
      this.setState({ isCurrentUser: true })
    }
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


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[prof_image]", this.state.imageFile);
    this.props.updateUserWithForm(formData, this.props.user.id)
              .then(() => this.closeModal())
              .then(() => window.location.reload());
  }

  render() {
    if (this.state.isCurrentUser) {
      return (
        <div className='current-user-open-modal'>
          <img onClick={this.openModal} src={ this.props.user.profile_pic_url } />
          <Modal
            className="profile-photo-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Profile Photo Modal"
            >

            <ul>
              <li><strong>Change Profile Picture</strong></li>
              <li>
                <form onSubmit={this.handleSubmit}>
                  <input type="file" onChange={this.updateFile} />
                  <input type="submit" />
                </form>
              </li>
              <li onClick={this.closeModal}>Cancel</li>
            </ul>
          </Modal>
        </div>
    );} else {
      return(<img src={ this.props.user.profile_pic_url } />);
    }
  }
}

export default withRouter(ProfilePhotoModal);
