import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      website: this.props.currentUser.website || '',
      bio: this.props.currentUser.bio || ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state, { id: this.props.currentUser.id });
    this.props.updateUser(user);
  }

  render() {
    let currentUser = this.props.currentUser;
    return(
      <div className='edit-form'>
        <img src={ currentUser.profile_pic_url } />
        <h3>{ currentUser.username }</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>

          <label>Website
            <input
              type='text'
              value={this.state.website}
              onChange={this.handleInput('website')}
              />
          </label>

          <label>Bio
            <input
              type='text'
              value={this.state.bio}
              onChange={this.handleInput('bio')}
              />
          </label>

          <input type='submit' value='Submit'/>
        </form>

      </div>
    );
  }
}

export default EditProfile;
