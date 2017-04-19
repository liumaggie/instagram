import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.logout().then(() => this.props.router.push('/sign-up'));
  }

  render() {
    if (this.props.currentUser) {
      return(
        <button type='submit' onClick={ this.handleClick }>Log Out</button>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withRouter(Home);
