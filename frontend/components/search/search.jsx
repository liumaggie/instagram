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
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  handleUsers() {
    if (this.state.body === '') {
      this.props.removeUsers();
    } else {
      this.props.fetchUsers(this.state.body)
                .then(() => this.setState({ showResults: true }));
    }
  }

  handleInput(e) {
    this.setState({ ['body']: e.currentTarget.value },
                  () => this.handleUsers());
  }

  render() {
    let show = '';
    if (this.state.showResults) {
      show = (
        <ul id='dropdown' className='user-dropdown'>
          { this.props.users.map((user) =>
          <SearchItem key={user.id} user={user}/>)}
        </ul>
      );
    }

    return(
      <nav className='search'>
        <div id='search-bar' className='search-bar'>
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
