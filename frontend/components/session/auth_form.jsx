import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.checkIfLogIn = this.checkIfLogIn.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(() => this.redirect(), () => this.setState({username: '', password: ''}));
  }

  checkIfLogIn() {
    return this.props.formType === 'login';
  }

  render() {
    let formType = this.checkIfLogIn() ? 'Log In' : 'Sign Up';
    let alternateText = this.checkIfLogIn() ? `Don't have an account?` : `Have an account?`;
    let alternateLink = this.checkIfLogIn() ? 'Sign Up' : 'Log In';
    let alternatePath = this.checkIfLogIn() ? '/sign-up' : '/log-in';
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

          <ul>
            { this.props.errors.map((error) => error) }
          </ul>

        </form>

        <section>
          <p>{alternateText}</p>
          <Link to={alternatePath} onClick={ this.props.clearErrors }>{alternateLink}</Link>
        </section>
      </div>
    );
  }
}

export default AuthForm;
