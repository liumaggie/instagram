import React from 'react';
import { withRouter } from 'react-router';
import NavBar from '../navbar/navbar'

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
        <NavBar logout={ this.props.logout } />
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withRouter(Home);
