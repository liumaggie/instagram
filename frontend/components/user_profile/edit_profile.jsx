import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      website: this.props.currentUser.website,
      bio: this.props.currentUser.bio
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
    let user = Object.assign({}, this.state);
    this.props.updateUser(user);
  }

  render() {
    return(
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
            onChange={this.handleInput('username')}
            />
        </label>

        <label>Bio
          <input
            type='text'
            value={this.state.bio}
            onChange={this.handleInput('username')}
            />
        </label>

      </form>
    );
  }
}

export default EditProfile;
