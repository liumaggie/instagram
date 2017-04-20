import React from 'react';
import { withRouter } from 'react-router';
import NavBar from '../navbar/navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <NavBar logout={ this.props.logout } />
          <img src={ this.props.currentUser.profile_pic_url } />
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withRouter(Home);
