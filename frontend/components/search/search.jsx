import React from 'react';
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', showResults: false };
    this.handleInput = this.handleInput.bind(this);
    this.handleUsers = this.handleUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.showResults) {
      this.setState({ showResults: false });
    } else {
      this.setState({ showResults: true });
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
    window.addEventListener("touchstart", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
    window.addEventListener("touchend", this.handleClick);
  }

  handleUsers() {
    if (this.state.body === '') {
      this.props.removeUsers();
    } else {
      this.props.fetchUsers(this.state.body);
    }
  }

  handleInput(e) {
    this.setState({ ['body']: e.currentTarget.value },
                  () => this.handleUsers());
  }

  render() {
    let show = '';
    if (this.state.showResults) {
      show = (<ul className='user-dropdown'>
        { this.props.users.map((user) =>
          <SearchItem key={user.id} user={user}/>)}
      </ul>);
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
