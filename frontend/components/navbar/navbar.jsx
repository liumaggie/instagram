import React from 'react';
import { withRouter } from 'react-router';
import UploadPhotoModalContainer from '../modals/upload_photo_modal_container';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectToHomePage = this.redirectToHomePage.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.router.push('/sign-up'));
  }

  redirectToHomePage() {
    this.props.router.push('/');
  }

  redirectToUserProfile() {
    this.props.router.push(`/users/${this.props.currentUser.id}`);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <header className='main-nav'>

          <div className='centered-nav'>
            <nav className='left-nav'
                 onClick={ this.redirectToHomePage }>
              <ul>
                <li className='logo'>
                  <img src={ window.images.logo } />
                </li>

                <li><hr className='vertical'/></li>

                <li><h2>Instapups</h2></li>
              </ul>
            </nav>

            <SearchContainer />

            <nav className='right-nav'>
              <ul>
                <li>
                  <UploadPhotoModalContainer />
                </li>

                <li>
                  <i className="btn fa fa-user-o"
                    onClick={ this.redirectToUserProfile }></i>
                </li>

                <li className='logout-btn'
                    onClick={ this.handleLogout }>
                  <i className="btn fa fa-sign-out"></i>
                </li>

              </ul>
            </nav>
          </div>

        </header>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(NavBar);
