import React from 'react';
import Modal from 'react-modal';
import ProfilePhotoModalContainer from '../modals/profile_photo_modal_container';
import ReactDOM from 'react-dom';


class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      website: this.props.currentUser.website || '',
      bio: this.props.currentUser.bio || ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.user.id !== parseInt(nextProps.params.id)) || (!nextProps.currentUser)) {
      this.props.router.push('/');
    }
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state, { id: this.props.currentUser.id });
    this.props.updateUser(user);
  }

  isCurrentUser() {
    return this.props.currentUser.id === parseInt(this.props.params.id);
  }

  render() {
    let currentUser = this.props.currentUser;

    return(
      <div className='edit-form'>
        <h1>Edit Profile</h1>

        <form onSubmit={this.handleSubmit}>

          <div className='left-col'>
            <label>
              <ProfilePhotoModalContainer />
            </label>
            <label htmlFor='username'>Username</label>
            <label htmlFor='website'>Website</label>
            <label htmlFor='bio'>Bio</label>
          </div>

          <div className='right-col'>
            <h3 className='current-username'>{ currentUser.username }</h3>
            <input
              type='text'
              id='username'
              value={this.state.username}
              onChange={this.handleInput('username')}
              />

            <input
              id='website'
              type='text'
              value={this.state.website}
              onChange={this.handleInput('website')}
              />

            <textarea
              id='bio'
              type='text'
              value={this.state.bio}
              onChange={this.handleInput('bio')}
              />

            <input id='user-edit-btn' type='submit' value='Submit'/>
          </div>

        </form>

      </div>
      );
  }
}

export default EditProfile;
