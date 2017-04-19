import React from 'react';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.logout().then(() => this.props.router.push('/sign-up'));
  }

  render() {
    return (
      <nav>
        <h1>Instapups</h1>
        <ul>
          <button>User Profile</button>
          <button type='submit' onClick={ this.handleClick }>Log Out</button>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
