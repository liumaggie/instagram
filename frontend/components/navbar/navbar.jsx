import React from 'react';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push('/sign-up'));
  }

  redirect() {
    this.props.router.push('/');
  }

  render() {
    return (
      <header className='main-nav'>

        <div className='centered-nav'>
          <nav className='left-nav'>
            <ul>
              <li className='home-btn' onClick={ this.redirect }>
                <i className="fa fa-instagram"></i>
              </li>

              <li><hr className='vertical'/></li>

              <li><h1>Instapups</h1></li>
            </ul>
          </nav>

          <nav className='right-nav'>
            <ul>
              <li>
                <i className="fa fa-cloud-upload"></i>
              </li>

              <li>
                <i className="fa fa-user-o"></i>
              </li>

              <li className='logout-btn' onClick={ this.handleLogout }>
                <i className="fa fa-sign-out"></i>
              </li>

            </ul>
          </nav>
        </div>

      </header>
    );
  }
}

export default withRouter(NavBar);
