import React from 'react';
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      showResults: false,
      user: this.props.user,
      hidden: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleUsers = this.handleUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkUsersLength = this.checkUsersLength.bind(this);
    this.height = this.height.bind(this);
  }

  handleClick(e) {
    if (this.state.showResults) {
      this.setState({ showResults: false });
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.setState({ body: '' });
    }
  }

  checkUsersLength() {
    if (this.props.users.length > 0) {
      this.setState({ showResults: true });
    } else {
      this.setState({ showResults: false });
    }
  }

  handleUsers() {
    if (this.state.body === '') {
      this.props.removeUsers();
      this.setState({ showResults: false });
    } else {
      this.props.fetchUsers(this.state.body)
                .then(() => this.checkUsersLength());
    }
  }

  handleInput(e) {
    this.setState({ ['body']: e.currentTarget.value },
                  () => this.handleUsers());
  }

  height() {
    if (this.props.users.length === 1) {
      return 65;
    } else if (this.props.users.length === 2) {
      return 130;
    } else if (this.props.users.length === 3) {
      return 200;
    } else {
      return 250;
    }
  }

  render() {
    let show = '';
    let height = this.height();
    if (this.state.showResults) {
      show = (
        <ul className='user-dropdown' style={{height: height}}>
          { this.props.users.map((user) =>
          <SearchItem key={user.id} user={user}/>)}
        </ul>
      );
    }

    return(
      <nav className='search'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search'
            onChange={ this.handleInput }
            value={ this.state.body } />
          <i className="fa fa-search"></i>
        </div>

        { show }
      </nav>
    );
  }
}

export default Search;
