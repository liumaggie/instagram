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
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withRouter(Home);
