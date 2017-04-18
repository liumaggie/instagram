import React from 'react';
import { merge } from 'lodash';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  render() {
    let formType = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    return(
      <div>

        <form onSubmit={ this.handleSubmit }>
          <label>Username
            <input
              type='text'
              onChange={ this.handleInput('username') }
              value={ this.state.username }
            />
          </label>

          <label>Password
            <input
              type='password'
              onChange={ this.handleInput('password') }
              value={ this.state.password } />
          </label>

          <input type='submit' value={formType} />

          <span>
            { this.props.errors.map((error) => error) }
          </span>
        </form>
      </div>
    );
  }
}

export default AuthForm;
